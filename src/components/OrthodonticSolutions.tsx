import { motion } from 'motion/react';
import { Shield, Cpu, Activity, Clock, Sparkles } from 'lucide-react';

const features = [
  { icon: Cpu, title: 'AI-Powered Planning', desc: 'Predictive 3D modeling maps optimal tooth movement for every stage of treatment.' },
  { icon: Shield, title: 'Expert Review', desc: 'Licensed orthodontists verify every plan before your aligners are manufactured.' },
  { icon: Activity, title: 'Live Dashboard', desc: 'Track progress remotely with secure digital check-ins from your phone.' },
  { icon: Clock, title: '24-Hour Turnaround', desc: 'From scan upload to interactive treatment preview in under one business day.' },
];

export default function OrthodonticSolutions() {
  return (
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
              smileyfacealigner streamlines orthodontic workflows with specialist-approved clear aligner treatments at transparent pricing.
            </p>
            <p className="text-sm text-ink-muted leading-relaxed mb-8">
              Unmatched dimensional accuracy, real-time case tracking, and dedicated clinical support — so you can focus on what matters: beautiful smiles.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-4 rounded-2xl bg-mint-50/80 border border-mint-100">
                  <Icon className="w-5 h-5 text-mint-600 mb-2" />
                  <h4 className="font-semibold text-sm text-ink mb-1">{title}</h4>
                  <p className="text-xs text-ink-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
