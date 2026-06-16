'use client';

import { motion } from 'motion/react';
import {
  Award,
  Users,
  Lightbulb,
  Monitor,
  Crosshair,
  Timer,
  Headphones,
  Tag,
  Globe,
  Workflow,
  Shield,
  Zap,
  Handshake,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Reason = {
  num: string;
  title: string;
  icon: LucideIcon;
  accent: string;
};

const reasons: Reason[] = [
  { num: '01', title: 'Expert orthodontic oversight', icon: Award, accent: 'bg-mint-500' },
  { num: '02', title: '50,000+ smiles transformed', icon: Users, accent: 'bg-sky-500' },
  { num: '03', title: 'Clear aligner innovation', icon: Lightbulb, accent: 'bg-violet-500' },
  { num: '04', title: 'Advanced digital planning', icon: Monitor, accent: 'bg-indigo-500' },
  { num: '05', title: 'Precision treatment design', icon: Crosshair, accent: 'bg-rose-500' },
  { num: '06', title: 'Rapid case turnaround', icon: Timer, accent: 'bg-amber-500' },
  { num: '07', title: 'Dedicated clinic support', icon: Headphones, accent: 'bg-emerald-500' },
  { num: '08', title: 'White-label partnerships', icon: Tag, accent: 'bg-cyan-600' },
  { num: '09', title: 'UK & Canada presence', icon: Globe, accent: 'bg-orange-500' },
  { num: '10', title: 'End-to-end digital workflow', icon: Workflow, accent: 'bg-teal-600' },
];

const pillars = [
  { label: 'Experience', icon: Award },
  { label: 'Precision', icon: Shield },
  { label: 'Efficiency', icon: Zap },
  { label: 'Partnership', icon: Handshake },
];

const ORBIT_RADIUS = 41;

function orbitPosition(index: number, total: number) {
  const angle = (index / total) * 360 - 90;
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + ORBIT_RADIUS * Math.cos(rad)}%`,
    top: `${50 + ORBIT_RADIUS * Math.sin(rad)}%`,
  };
}

function ReasonCard({ reason, compact = false }: { reason: Reason; compact?: boolean }) {
  const Icon = reason.icon;

  return (
    <div
      className={`flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-md shadow-slate-200/60 border border-white/80 ${
        compact ? 'px-3.5 py-2.5 max-w-[220px]' : 'px-4 py-3'
      }`}
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0 ${reason.accent}`}
      >
        {reason.num}
      </div>
      <Icon size={16} className="text-ink-muted shrink-0" strokeWidth={2} />
      <span className={`font-semibold text-ink leading-snug ${compact ? 'text-xs' : 'text-sm'}`}>
        {reason.title}
      </span>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="benefits" className="relative py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-white to-mint-50/40 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, color-mix(in srgb, var(--color-mint-300) 18%, transparent) 0%, transparent 45%),
            radial-gradient(circle at 80% 20%, color-mix(in srgb, #38bdf8 14%, transparent) 0%, transparent 40%),
            linear-gradient(135deg, transparent 48%, color-mix(in srgb, var(--color-mint-200) 25%, transparent) 49%, transparent 51%)
          `,
        }}
      />
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Mobile & tablet layout */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 bg-mint-100 text-mint-700 border border-mint-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-mint-500" />
              Why smileyfacealigner
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-ink leading-tight">
              10 reasons{' '}
              <span className="text-gradient-mint italic block sm:inline">to choose us</span>
            </h2>
            <p className="mt-4 text-base text-ink-muted max-w-xl mx-auto leading-relaxed">
              Clinical-grade clear aligners backed by specialist planning, fast workflows, and dedicated support for clinics worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-sm mb-10"
          >
            <div className="absolute inset-4 rounded-full border border-mint-200/60 border-dashed" />
            <div className="relative mx-auto w-56 h-56 rounded-full bg-white shadow-xl shadow-mint-500/10 border border-mint-100 flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dezouiujs/image/upload/v1779693507/46-GettyImages-535353721_um2nxc.jpg"
                alt="Clear aligner on dental model"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
              >
                <ReasonCard reason={reason} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop orbital layout */}
        <div className="hidden lg:block">
          <div className="relative mx-auto w-full max-w-6xl aspect-square min-h-[720px]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none text-mint-300/50"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.15"
                strokeDasharray="0.6 1.2"
              />
              {reasons.map((_, idx) => {
                const pos = orbitPosition(idx, reasons.length);
                return (
                  <circle
                    key={idx}
                    cx={parseFloat(pos.left)}
                    cy={parseFloat(pos.top)}
                    r="0.55"
                    fill="currentColor"
                    className="text-mint-400"
                  />
                );
              })}
            </svg>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-[min(100%,320px)]"
            >
              <h2 className="text-5xl xl:text-6xl font-display text-ink leading-[1.05]">
                10 reasons
              </h2>
              <p className="text-3xl xl:text-4xl font-display text-gradient-mint italic mt-1">
                to choose us
              </p>
              <div className="mt-6 mx-auto w-44 h-44 xl:w-52 xl:h-52 rounded-full bg-white shadow-2xl shadow-mint-500/15 border-4 border-white ring-2 ring-mint-100 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dezouiujs/image/upload/v1779693507/46-GettyImages-535353721_um2nxc.jpg"
                  alt="Clear aligner on dental model"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-5 text-sm text-ink-muted leading-relaxed px-4">
                Specialist-led planning, premium SmileyClear™ materials, and a partnership built around your clinic.
              </p>
            </motion.div>

            {reasons.map((reason, idx) => {
              const pos = orbitPosition(idx, reasons.length);
              return (
                <motion.div
                  key={reason.num}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.45 }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={pos}
                >
                  <ReasonCard reason={reason} compact />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Value pillars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 rounded-2xl bg-ink text-white overflow-hidden shadow-xl shadow-ink/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            {pillars.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 px-6 py-8 text-center sm:text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-mint-300 shrink-0">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
