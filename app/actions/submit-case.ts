'use server';

import { sendCaseSubmissionEmail } from '@/lib/email';

export type SubmitCaseState = {
  success?: boolean;
  error?: string;
} | null;

export async function submitClinicalCase(
  _prevState: SubmitCaseState,
  formData: FormData,
): Promise<SubmitCaseState> {
  const dentistName = formData.get('dentistName')?.toString().trim() ?? '';
  const clinicEmail = formData.get('clinicEmail')?.toString().trim() ?? '';
  const patientName = formData.get('patientName')?.toString().trim() ?? '';
  const caseType = formData.get('caseType')?.toString().trim() ?? '';
  const stlFileUrl = formData.get('stlFileUrl')?.toString().trim() ?? '';
  const customNotes = formData.get('customNotes')?.toString().trim() ?? '';

  if (!clinicEmail || !patientName || !caseType) {
    return { error: 'Email, patient name, and case type are required.' };
  }

  try {
    await sendCaseSubmissionEmail({
      dentistName,
      clinicEmail,
      patientName,
      caseType,
      stlFileUrl,
      customNotes,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send case submission email:', error);
    const message = error instanceof Error ? error.message : 'Failed to send email. Please try again later.';
    return { error: message };
  }
}
