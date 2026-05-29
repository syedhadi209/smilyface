import { useState } from 'react';
import { X, CheckCircle2, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [selectedDate, setSelectedDate] = useState('May 25, 2026');
  const [selectedSlot, setSelectedSlot] = useState('02:30 PM');
  const [patientDetails, setPatientDetails] = useState({ name: '', email: '', phone: '' });
  const [finished, setFinished] = useState(false);

  const dates = [
    { day: 'Mon', num: '25', text: 'May 25, 2026' },
    { day: 'Tue', num: '26', text: 'May 26, 2026' },
    { day: 'Wed', num: '27', text: 'May 27, 2026' },
    { day: 'Thu', num: '28', text: 'May 28, 2026' },
    { day: 'Fri', num: '29', text: 'May 29, 2026' },
  ];

  const slots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-md" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl relative z-10 w-full max-w-md overflow-hidden border border-mint-100"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-mint-50 hover:bg-mint-100 text-ink rounded-xl transition-colors z-20"
        >
          <X size={18} />
        </button>

        {finished ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-mint-100 text-mint-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-display text-ink mb-2">You&apos;re all set!</h3>
            <p className="text-sm text-ink-muted mb-6">
              Your complimentary 3D diagnostic scan is booked for:
            </p>
            <div className="bg-mint-50 border border-mint-100 p-5 rounded-2xl text-sm space-y-1 mb-6">
              <p className="font-semibold text-mint-700">{selectedDate}</p>
              <p className="text-ink font-medium">at {selectedSlot}</p>
              <p className="text-xs text-ink-muted mt-2">Includes free scanning & smile preview</p>
            </div>
            <button
              onClick={() => {
                setFinished(false);
                setPatientDetails({ name: '', email: '', phone: '' });
                onClose();
              }}
              className="w-full bg-ink text-white py-3.5 rounded-2xl font-semibold hover:bg-ink/90 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 pr-10">
              <div className="w-10 h-10 rounded-xl bg-mint-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-mint-600" />
              </div>
              <div>
                <h3 className="text-xl font-display text-ink">Request an appointment</h3>
                <p className="text-xs text-ink-muted">3D diagnostic session at our UK or Canada clinic</p>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-ink uppercase tracking-wider mb-2 block">Select date</label>
              <div className="grid grid-cols-5 gap-2">
                {dates.map((d) => (
                  <button
                    key={d.text}
                    type="button"
                    onClick={() => setSelectedDate(d.text)}
                    className={`p-2 rounded-xl border flex flex-col items-center transition-all ${
                      selectedDate === d.text
                        ? 'border-mint-500 bg-mint-50 text-mint-700 font-semibold'
                        : 'border-slate-200 text-ink-muted hover:border-mint-300'
                    }`}
                  >
                    <span className="text-[10px] uppercase">{d.day}</span>
                    <span className="text-base font-display">{d.num}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-ink uppercase tracking-wider mb-2 block">Select time</label>
              <div className="flex flex-wrap gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                      selectedSlot === slot
                        ? 'bg-ink text-white border-ink'
                        : 'bg-white text-ink-muted border-slate-200 hover:border-mint-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                required
                value={patientDetails.name}
                onChange={(e) => setPatientDetails((p) => ({ ...p, name: e.target.value }))}
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-sm focus:border-mint-400 focus:ring-2 focus:ring-mint-100 transition-all"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  value={patientDetails.email}
                  onChange={(e) => setPatientDetails((p) => ({ ...p, email: e.target.value }))}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-sm focus:border-mint-400 focus:ring-2 focus:ring-mint-100 transition-all"
                />
                <input
                  type="tel"
                  required
                  value={patientDetails.phone}
                  onChange={(e) => setPatientDetails((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-sm focus:border-mint-400 focus:ring-2 focus:ring-mint-100 transition-all"
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
