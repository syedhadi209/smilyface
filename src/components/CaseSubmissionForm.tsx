import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function CaseSubmissionForm() {
  const [formData, setFormData] = useState({
    dentistName: '',
    clinicEmail: '',
    patientName: '',
    caseType: 'Crowding',
    stlFileUrl: '',
    customNotes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitPercent, setSubmitPercent] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.clinicEmail) return;
    setIsSubmitting(true);
    setSubmitPercent(10);
    const interval = setInterval(() => {
      setSubmitPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSubmitting(false);
          setSuccess(true);
          return 100;
        }
        return prev + 15;
      });
    }, 300);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-sm focus:border-mint-400 focus:ring-2 focus:ring-mint-100 transition-all';
  const labelClass = 'block text-[11px] font-semibold text-ink uppercase tracking-wider mb-2';

  const resetForm = () => {
    setSuccess(false);
    setFormData({
      dentistName: '',
      clinicEmail: '',
      patientName: '',
      caseType: 'Crowding',
      stlFileUrl: '',
      customNotes: '',
    });
    setSubmitPercent(0);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-mint-500/5 border border-mint-100/80 max-w-4xl mx-auto">
      {success ? (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
          <div className="w-20 h-20 bg-mint-100 rounded-2xl flex items-center justify-center mx-auto text-mint-600 mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-display text-ink mb-3">Case submitted</h3>
          <p className="text-ink-muted max-w-md mx-auto mb-8 text-sm">
            Our team is reviewing your details. Expect a customized treatment plan within 24 hours.
          </p>
          <button
            onClick={resetForm}
            className="bg-mint-500 hover:bg-mint-600 text-white px-8 py-3 rounded-2xl font-semibold transition-colors"
          >
            Submit another case
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Practitioner name (optional)</label>
              <input
                type="text"
                value={formData.dentistName}
                onChange={(e) => setFormData((p) => ({ ...p, dentistName: e.target.value }))}
                placeholder="Dr. Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Email address *</label>
              <input
                type="email"
                required
                value={formData.clinicEmail}
                onChange={(e) => setFormData((p) => ({ ...p, clinicEmail: e.target.value }))}
                placeholder="office@clinic.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Patient name *</label>
              <input
                type="text"
                required
                value={formData.patientName}
                onChange={(e) => setFormData((p) => ({ ...p, patientName: e.target.value }))}
                placeholder="J. Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Case type *</label>
              <select
                value={formData.caseType}
                onChange={(e) => setFormData((p) => ({ ...p, caseType: e.target.value }))}
                className={inputClass}
              >
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
            <label className={labelClass}>STL file public URL</label>
            <input
              type="url"
              value={formData.stlFileUrl}
              onChange={(e) => setFormData((p) => ({ ...p, stlFileUrl: e.target.value }))}
              placeholder="https://your-storage.com/case-file.stl"
              className={inputClass}
            />
            <p className="mt-2 text-xs text-ink-muted">
              Paste a publicly accessible link to your STL scan (Google Drive, Dropbox, clinic portal, etc.).
            </p>
          </div>

          <div>
            <label className={labelClass}>Clinical notes</label>
            <textarea
              rows={3}
              value={formData.customNotes}
              onChange={(e) => setFormData((p) => ({ ...p, customNotes: e.target.value }))}
              placeholder="Special instructions for the treatment plan..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            {isSubmitting ? (
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-ink">
                  <span className="font-semibold">Processing...</span>
                  <span className="font-mono text-mint-600">{submitPercent}%</span>
                </div>
                <div className="w-full bg-mint-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-mint-500 h-full transition-all" style={{ width: `${submitPercent}%` }} />
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-ink text-white py-4 rounded-2xl font-semibold hover:bg-ink/90 transition-all active:scale-[0.98]"
              >
                Submit case for analysis
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
