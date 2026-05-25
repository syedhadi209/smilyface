import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, CheckCircle2, Shield, Cpu, Activity, Clock, Sparkles } from 'lucide-react';

const features = [
  { icon: Cpu, title: 'AI-Powered Planning', desc: 'Predictive 3D modeling maps optimal tooth movement for every stage of treatment.' },
  { icon: Shield, title: 'Expert Review', desc: 'Licensed orthodontists verify every plan before your aligners are manufactured.' },
  { icon: Activity, title: 'Live Dashboard', desc: 'Track progress remotely with secure digital check-ins from your phone.' },
  { icon: Clock, title: '24-Hour Turnaround', desc: 'From scan upload to interactive treatment preview in under one business day.' },
];

export default function OrthodonticSolutions() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-mint-500/10 border border-mint-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                  alt="Clear aligner treatment consultation"
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-2xl p-5 shadow-xl border border-mint-100 max-w-[200px]">
                <p className="text-3xl font-display text-mint-600">99.2%</p>
                <p className="text-xs text-ink-muted font-medium mt-1">Treatment accuracy rate</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-mint-600 uppercase tracking-widest mb-4">
                <Sparkles size={14} />
                For clinics & patients
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-ink leading-tight mb-6">
                Modern aligner systems,{' '}
                <span className="text-gradient-mint italic">built for precision</span>
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed mb-4">
                Smilly Face streamlines orthodontic workflows with specialist-approved clear aligner treatments at transparent pricing.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed mb-8">
                Unmatched dimensional accuracy, real-time case tracking, and dedicated clinical support — so you can focus on what matters: beautiful smiles.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.slice(0, 2).map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="p-4 rounded-2xl bg-mint-50/80 border border-mint-100">
                    <Icon className="w-5 h-5 text-mint-600 mb-2" />
                    <h4 className="font-semibold text-sm text-ink mb-1">{title}</h4>
                    <p className="text-xs text-ink-muted leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-ink hover:bg-ink/90 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all active:scale-[0.98]"
              >
                Explore solutions
                <ChevronRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-ink/50 backdrop-blur-md"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl relative z-10 w-full max-w-lg overflow-hidden border border-mint-100"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 bg-mint-50 hover:bg-mint-100 rounded-xl transition-colors z-20"
              >
                <X size={16} />
              </button>
              <div className="p-8 space-y-6">
                <div>
                  <span className="px-3 py-1 bg-mint-100 text-mint-700 text-[10px] font-semibold uppercase tracking-wider rounded-full">
                    SmillyClear™ Technology
                  </span>
                  <h3 className="text-2xl font-display text-ink mt-3">Digital craftsmanship at scale</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <Icon className="w-5 h-5 text-mint-600 mb-2" />
                      <h4 className="font-semibold text-sm text-ink">{title}</h4>
                      <p className="text-xs text-ink-muted mt-1 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    document.getElementById('submit')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-ink hover:bg-ink/90 text-white py-3.5 rounded-2xl font-semibold text-sm transition-colors"
                >
                  Submit case
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
