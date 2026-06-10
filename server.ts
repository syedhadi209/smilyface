import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3001;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '32kb' }));

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fieldRow(label: string, value: string, isLink = false): string {
  const safe = escapeHtml(value);
  const content = isLink && value.startsWith('http')
    ? `<a href="${safe}" style="color:#0d9488;text-decoration:none;">${safe}</a>`
    : safe || '<span style="color:#94a3b8;">—</span>';

  return `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;width:180px;vertical-align:top;">${label}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;line-height:1.5;">${content}</td>
    </tr>
  `;
}

type CasePayload = {
  dentistName?: string;
  clinicEmail?: string;
  patientName?: string;
  caseType?: string;
  stlFileUrl?: string;
  customNotes?: string;
};

app.post('/api/submit-case', async (req, res) => {
  const {
    dentistName = '',
    clinicEmail = '',
    patientName = '',
    caseType = '',
    stlFileUrl = '',
    customNotes = '',
  } = req.body as CasePayload;

  if (!clinicEmail?.trim() || !patientName?.trim() || !caseType?.trim()) {
    return res.status(400).json({ message: 'Email, patient name, and case type are required.' });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO;

  if (!emailUser || !emailPass || !emailTo) {
    console.error('Missing EMAIL_USER, EMAIL_PASS, or EMAIL_TO environment variables.');
    return res.status(500).json({ message: 'Email service is not configured.' });
  }

  const subjectPatient = patientName.trim();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"smileyfacealigner Case Form" <${emailUser}>`,
      to: emailTo,
      replyTo: clinicEmail.trim(),
      subject: `New clinical case: ${subjectPatient} (${caseType.trim()})`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f0fdfa;font-family:Arial,Helvetica,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdfa;padding:32px 16px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ccfbf1;box-shadow:0 8px 24px rgba(20,184,166,0.12);">
                    <tr>
                      <td style="background:linear-gradient(135deg,#0d9488,#14b8a6);padding:28px 32px;">
                        <h1 style="margin:0;font-size:24px;color:#ffffff;font-weight:700;">New clinical case submission</h1>
                        <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.9);">Submitted via smileyfacealigner.com</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0 16px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          ${fieldRow('Practitioner', dentistName.trim())}
                          ${fieldRow('Clinic email', clinicEmail.trim())}
                          ${fieldRow('Patient name', patientName.trim())}
                          ${fieldRow('Case type', caseType.trim())}
                          ${fieldRow('STL file URL', stlFileUrl.trim(), true)}
                          ${fieldRow('Clinical notes', customNotes.trim())}
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0 32px 28px;">
                        <p style="margin:0;font-size:12px;color:#64748b;line-height:1.6;">
                          Reply directly to this email to reach <strong style="color:#0f172a;">${escapeHtml(clinicEmail.trim())}</strong>.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
      text: [
        'New clinical case submission',
        '',
        `Practitioner: ${dentistName.trim() || '—'}`,
        `Clinic email: ${clinicEmail.trim()}`,
        `Patient name: ${patientName.trim()}`,
        `Case type: ${caseType.trim()}`,
        `STL file URL: ${stlFileUrl.trim() || '—'}`,
        `Clinical notes: ${customNotes.trim() || '—'}`,
      ].join('\n'),
    });

    return res.status(200).json({ message: 'Case submitted successfully.' });
  } catch (error) {
    console.error('Failed to send case submission email:', error);
    return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
});

if (isProd) {
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
