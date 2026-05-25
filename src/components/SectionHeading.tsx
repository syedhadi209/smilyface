import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  children: ReactNode;
  badge?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ children, badge, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {badge && (
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 ${
            light
              ? 'bg-white/10 text-mint-300 border border-white/10'
              : 'bg-mint-100 text-mint-700 border border-mint-200/60'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-mint-400' : 'bg-mint-500'}`} />
            {badge}
          </span>
        )}
        <h2 className={`text-4xl md:text-[2.75rem] font-display leading-[1.15] tracking-tight ${
          light ? 'text-white' : 'text-ink'
        }`}>
          {children}
        </h2>
        {subtitle && (
          <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/60' : 'text-ink-muted'}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
