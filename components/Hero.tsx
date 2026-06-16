'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Clock, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] hero-mesh overflow-hidden flex items-center pt-28 pb-16 sm:pb-20">
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-mint-300/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
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
              className="mt-10"
            >
              <a
                href="#cases"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-ink bg-white border border-mint-200/80 hover:border-mint-400 hover:bg-mint-50/50 transition-all shadow-sm"
              >
                See Treatable Cases
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0"
          >
            {/* Ambient glow */}
            <div
              className="hero-visual-glow absolute -inset-3 sm:-inset-5 rounded-[1.75rem] sm:rounded-[2.25rem] blur-2xl opacity-70 pointer-events-none"
              aria-hidden
            />

            {/* Photo frame */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2rem] bg-ink shadow-2xl shadow-mint-500/15 ring-1 ring-white/20">
              <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] max-h-[min(72vw,380px)] sm:max-h-[min(52vh,440px)] lg:max-h-[520px]">
                <img
                  src="https://res.cloudinary.com/dezouiujs/image/upload/v1779693507/46-GettyImages-535353721_um2nxc.jpg"
                  alt="Clear orthodontic aligner trays held by a dental professional wearing gloves"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-mint-100 px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-mint-700 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5 text-mint-500" />
                    SmileyClear™
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-12 sm:px-5 sm:pb-5 sm:pt-14 bg-gradient-to-t from-ink/70 to-transparent pointer-events-none">
                  <p className="text-sm sm:text-base font-semibold text-white">Premium clear aligners</p>
                  <p className="text-[11px] sm:text-xs text-white/80 mt-0.5">Expert care · Clinic precision · Invisible comfort</p>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div
              className="pointer-events-none absolute -right-2 -top-2 h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-mint-300/40 bg-mint-100/30 backdrop-blur-sm hidden sm:block"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
