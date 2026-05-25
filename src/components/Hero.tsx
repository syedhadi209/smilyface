import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Clock, Star } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
}

const stats = [
  { value: '50K+', label: 'Smiles transformed' },
  { value: '6 mo', label: 'Average treatment' },
  { value: '98%', label: 'Success rate' },
];

export default function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] hero-mesh overflow-hidden flex items-center pt-28 pb-20">
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-mint-300/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-mint-200/60 shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-mint-500" />
              <span className="text-xs font-semibold text-mint-700 uppercase tracking-wider">
                Certified Digital Orthodontics
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[4.25rem] font-display text-ink leading-[1.08] tracking-tight"
            >
              Your clearest path to a{' '}
              <span className="text-gradient-mint italic">confident smile</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-ink-muted leading-relaxed max-w-lg"
            >
              Premium invisible aligners custom-designed with 3D precision. Straighten teeth discreetly — eat, smile, and live freely.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onOpenAppointment}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-mint-500/25 transition-all hover:shadow-mint-500/35 active:scale-[0.98]"
              >
                Start Your Free Scan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="#cases"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-ink bg-white border border-mint-200/80 hover:border-mint-400 hover:bg-mint-50/50 transition-all shadow-sm"
              >
                See Treatable Cases
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, text: 'FDA-grade materials' },
                { icon: Clock, text: '24hr treatment plans' },
                { icon: Star, text: '4.9★ patient rating' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-ink-muted">
                  <Icon className="w-4 h-4 text-mint-500" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-mint-500/10 border border-white/80">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                alt="Person with a bright, confident smile"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5 aligner-shine">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mint-400 to-mint-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">SmillyClear™ Aligners</p>
                    <p className="text-xs text-ink-muted">Virtually invisible · Removable · Comfortable</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 md:-left-8 top-1/4 glass-card rounded-2xl px-5 py-4 shadow-xl hidden md:block">
              <p className="text-2xl font-display text-mint-600">6 mo</p>
              <p className="text-xs text-ink-muted font-medium">Avg. treatment time</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-display text-ink">{stat.value}</p>
              <p className="text-xs text-ink-muted mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
