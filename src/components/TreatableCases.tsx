import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Shield, ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

export const treatableCases = [
  {
    id: 'cross-bite',
    title: 'Cross Bite',
    image: '/treatments/cross-bite.webp',
    problem: 'Upper teeth sit inside the lower teeth on one or both sides, causing uneven wear and jaw strain.',
    solution: 'Targeted aligner staging gradually expands the arch and shifts teeth into proper lateral alignment.',
    time: '6–9 months',
    difficulty: 'Moderate',
  },
  {
    id: 'crowding',
    title: 'Crowding',
    image: '/treatments/crowding.webp',
    problem: 'Teeth overlap or twist when there is not enough room in the dental arch.',
    solution: 'Gentle arch expansion and sequential movement create space for a naturally aligned smile.',
    time: '5–7 months',
    difficulty: 'Mild to moderate',
  },
  {
    id: 'over-bite',
    title: 'Over Bite',
    image: '/treatments/over-bite.webp',
    problem: 'Upper front teeth excessively overlap the lower teeth vertically.',
    solution: 'Smart attachments and staged intrusion correct bite depth while maintaining aesthetics.',
    time: '6–8 months',
    difficulty: 'Moderate',
  },
  {
    id: 'open-bite',
    title: 'Open Bite',
    image: '/treatments/open-bite.webp',
    problem: 'Front teeth do not meet when the back teeth are closed, affecting speech and chewing.',
    solution: 'Controlled vertical movements close the open bite for a functional, confident smile.',
    time: '7–10 months',
    difficulty: 'Moderate to severe',
  },
  {
    id: 'diastema',
    title: 'Diastema',
    image: '/treatments/diastema.webp',
    problem: 'Noticeable gaps between teeth, especially the front incisors, affect smile symmetry.',
    solution: 'Precise closing forces unify tooth contacts without compromising facial proportions.',
    time: '4–6 months',
    difficulty: 'Mild',
  },
  {
    id: 'under-bite',
    title: 'Under Bite',
    image: '/treatments/under-bite.webp',
    problem: 'Lower front teeth protrude past the upper teeth, stressing jaw joints and profile balance.',
    solution: 'Digital treatment mapping guides safe anterior correction without invasive surgery in many cases.',
    time: '8–10 months',
    difficulty: 'Severe',
  },
];

interface TreatableCasesProps {
  onOpenAppointment: () => void;
}

export default function TreatableCases({ onOpenAppointment }: TreatableCasesProps) {
  const [activeCase, setActiveCase] = useState<(typeof treatableCases)[number] | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="cases" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint-50/80 via-white to-mint-50/40" />
      <div className="absolute inset-0 pattern-dots opacity-[0.35] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,720px)] h-64 bg-mint-300/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          badge="Clinical capability"
          centered
          subtitle="Six common orthodontic conditions we treat today with custom SmillyClear™ aligner pathways."
        >
          Conditions we <span className="text-gradient-mint italic">treat</span>
        </SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 -mt-2">
          {treatableCases.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <TiltCard className="h-full" intensity={5} hoverScale={1.015}>
                <article className="group h-full flex flex-col rounded-3xl bg-white/90 backdrop-blur-sm border border-mint-100/80 shadow-lg shadow-mint-500/[0.06] hover:shadow-xl hover:shadow-mint-500/10 hover:border-mint-200/90 transition-all duration-400 overflow-hidden">
                  {/* Image frame */}
                  <div className="p-4 pb-0">
                    <div className="relative aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black ring-1 ring-white/10">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(45,212,191,0.12),transparent_55%)]" />
                      <img
                        src={item.image}
                        alt={`${item.title} — 3D dental model`}
                        loading="lazy"
                        decoding="async"
                        className={`relative z-10 w-full h-full object-contain p-4 transition-transform duration-500 ${
                          hoveredId === item.id ? 'scale-[1.04]' : 'scale-100'
                        }`}
                      />
                      <span className="absolute top-3 left-3 z-20 text-[10px] font-semibold uppercase tracking-wider text-white/70 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 pt-4">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-display text-ink leading-tight">{item.title}</h3>
                      <span className="shrink-0 text-[10px] font-semibold text-mint-700 bg-mint-50 border border-mint-100 px-2 py-1 rounded-full">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-ink-muted leading-relaxed line-clamp-2 flex-1">
                      {item.problem}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveCase(item)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mint-600 group/btn hover:text-mint-700 transition-colors"
                    >
                      Learn more
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-mint-50 border border-mint-100 group-hover/btn:bg-mint-100 group-hover/btn:border-mint-200 transition-all">
                        <ArrowRight
                          size={14}
                          className={`transition-transform duration-300 ${
                            hoveredId === item.id ? 'translate-x-0.5' : ''
                          }`}
                        />
                      </span>
                    </button>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 glass-card rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-mint-200/60 shadow-sm"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-11 h-11 rounded-xl bg-mint-100 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-mint-600" />
            </div>
            <p className="text-sm text-ink-muted max-w-xl">
              <span className="font-semibold text-ink">98% success rate</span> — evaluated cases achieve excellent results with clear aligners under specialist oversight.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenAppointment}
            className="shrink-0 inline-flex items-center gap-2 bg-ink hover:bg-ink/90 text-white px-6 py-3 rounded-2xl text-sm font-semibold transition-all active:scale-[0.98]"
          >
            <Sparkles size={16} className="text-mint-300" />
            Check your eligibility
          </button>
        </motion.div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {activeCase && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-ink/45 backdrop-blur-md"
              onClick={() => setActiveCase(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto border border-mint-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCase(null)}
                className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-white text-ink rounded-xl z-20 shadow-md border border-slate-100"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="grid sm:grid-cols-2">
                <div className="relative aspect-square sm:aspect-auto sm:min-h-[280px] bg-gradient-to-br from-slate-900 to-black flex items-center justify-center p-6 sm:rounded-l-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(45,212,191,0.15),transparent_60%)]" />
                  <img
                    src={activeCase.image}
                    alt={activeCase.title}
                    className="relative z-10 max-w-full max-h-[220px] sm:max-h-[260px] object-contain"
                  />
                </div>

                <div className="p-7 sm:p-8 space-y-5">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-mint-600">
                      Treatable case
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display text-ink mt-1">{activeCase.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-mint-50 text-mint-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-mint-100">
                      <Clock size={12} />
                      {activeCase.time}
                    </span>
                    <span className="text-xs font-semibold text-ink-muted bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
                      {activeCase.difficulty}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/80">
                      <span className="text-[10px] font-semibold text-rose-600 uppercase tracking-widest">
                        The concern
                      </span>
                      <p className="text-sm text-ink-muted mt-1.5 leading-relaxed">{activeCase.problem}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-mint-50/80 border border-mint-100">
                      <span className="text-[10px] font-semibold text-mint-700 uppercase tracking-widest">
                        How we treat it
                      </span>
                      <p className="text-sm text-ink-muted mt-1.5 leading-relaxed">{activeCase.solution}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveCase(null);
                      onOpenAppointment();
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white py-4 rounded-2xl font-semibold shadow-lg shadow-mint-500/20 transition-all active:scale-[0.98]"
                  >
                    Book a free consultation
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
