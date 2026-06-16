import nodemailer from 'nodemailer';

export type CaseSubmissionPayload = {
  dentistName: string;
  clinicEmail: string;
  patientName: string;
  caseType: string;
  stlFileUrl: string;
  customNotes: string;
};

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

export async function sendCaseSubmissionEmail(payload: CaseSubmissionPayload): Promise<void> {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO;

  if (!emailUser || !emailPass || !emailTo) {
    throw new Error('Email service is not configured.');
  }

  const { dentistName, clinicEmail, patientName, caseType, stlFileUrl, customNotes } = payload;

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
    replyTo: clinicEmail,
    subject: `New clinical case: ${patientName} (${caseType})`,
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
                        ${fieldRow('Practitioner', dentistName)}
                        ${fieldRow('Clinic email', clinicEmail)}
                        ${fieldRow('Patient name', patientName)}
                        ${fieldRow('Case type', caseType)}
                        ${fieldRow('STL file URL', stlFileUrl, true)}
                        ${fieldRow('Clinical notes', customNotes)}
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 32px 28px;">
                      <p style="margin:0;font-size:12px;color:#64748b;line-height:1.6;">
                        Reply directly to this email to reach <strong style="color:#0f172a;">${escapeHtml(clinicEmail)}</strong>.
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
      `Practitioner: ${dentistName || '—'}`,
      `Clinic email: ${clinicEmail}`,
      `Patient name: ${patientName}`,
      `Case type: ${caseType}`,
      `STL file URL: ${stlFileUrl || '—'}`,
      `Clinical notes: ${customNotes || '—'}`,
    ].join('\n'),
  });
}
