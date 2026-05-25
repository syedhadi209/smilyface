import { motion } from 'motion/react';

const stats = [
  { value: '50K+', label: 'Smiles transformed' },
  { value: '6 mo', label: 'Average treatment' },
  { value: '98%', label: 'Success rate' },
];

export default function HeroStats() {
  return (
    <section
      aria-label="Key statistics"
      className="relative border-y border-mint-100/80 bg-gradient-to-r from-mint-50/90 via-white to-sky-50/60"
    >
      <div className="absolute inset-0 pattern-dots opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-mint-200/70">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center py-10 sm:py-12 px-6 text-center"
            >
              <p className="text-3xl sm:text-4xl md:text-[2.75rem] font-display text-ink leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-ink-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
