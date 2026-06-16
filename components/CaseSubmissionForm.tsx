'use client';

import { useActionState, useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { submitClinicalCase, type SubmitCaseState } from '@/app/actions/submit-case';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-sm focus:border-mint-400 focus:ring-2 focus:ring-mint-100 transition-all';
const labelClass = 'block text-[11px] font-semibold text-ink uppercase tracking-wider mb-2';

function CaseSubmissionFormContent({ onReset }: { onReset: () => void }) {
  const [state, formAction, isPending] = useActionState<SubmitCaseState, FormData>(
    submitClinicalCase,
    null,
  );

  if (state?.success) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-mint-500/5 border border-mint-100/80 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
          <div className="w-20 h-20 bg-mint-100 rounded-2xl flex items-center justify-center mx-auto text-mint-600 mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-display text-ink mb-3">Case submitted</h3>
          <p className="text-ink-muted max-w-md mx-auto mb-8 text-sm">
            Our team is reviewing your details. Expect a customized treatment plan within 24 hours.
          </p>
          <button
            type="button"
            onClick={onReset}
            className="bg-mint-500 hover:bg-mint-600 text-white px-8 py-3 rounded-2xl font-semibold transition-colors"
          >
            Submit another case
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-mint-500/5 border border-mint-100/80 max-w-4xl mx-auto">
      <form action={formAction} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass} htmlFor="dentistName">Practitioner name (optional)</label>
            <input
              id="dentistName"
              name="dentistName"
              type="text"
              placeholder="Dr. Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="clinicEmail">Email address *</label>
            <input
              id="clinicEmail"
              name="clinicEmail"
              type="email"
              required
              placeholder="office@clinic.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass} htmlFor="patientName">Patient name *</label>
            <input
              id="patientName"
              name="patientName"
              type="text"
              required
              placeholder="J. Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="caseType">Case type *</label>
            <select id="caseType" name="caseType" required defaultValue="Crowding" className={inputClass}>
              <option value="Cross Bite">Cross Bite</option>
              <option value="Crowding">Crowding</option>
              <option value="Over Bite">Over Bite</option>
              <option value="Open Bite">Open Bite</option>
              <option value="Diastema">Diastema</option>
              <option value="Under Bite">Under Bite</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="stlFileUrl">STL file public URL</label>
          <input
            id="stlFileUrl"
            name="stlFileUrl"
            type="url"
            placeholder="https://your-storage.com/case-file.stl"
            className={inputClass}
          />
          <p className="mt-2 text-xs text-ink-muted">
            Paste a publicly accessible link to your STL scan (Google Drive, Dropbox, clinic portal, etc.).
          </p>
        </div>

        <div>
          <label className={labelClass} htmlFor="customNotes">Clinical notes</label>
          <textarea
            id="customNotes"
            name="customNotes"
            rows={3}
            placeholder="Special instructions for the treatment plan..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {state?.error && (
          <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <p>{state.error}</p>
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-ink text-white py-4 rounded-2xl font-semibold hover:bg-ink/90 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? 'Sending...' : 'Submit case for analysis'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function CaseSubmissionForm() {
  const [formKey, setFormKey] = useState(0);

  return (
    <CaseSubmissionFormContent
      key={formKey}
      onReset={() => setFormKey((k) => k + 1)}
    />
  );
}
