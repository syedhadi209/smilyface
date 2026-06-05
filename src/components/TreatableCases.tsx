import { useState } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'motion/react';
import { X, Clock, Shield, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

/** Lighter Cloudinary delivery for card thumbnails */
function optimizeImage(url: string, width = 480) {
  if (!url.includes('res.cloudinary.com')) return url;
  return url.replace('/upload/', `/upload/w_${width},q_auto,f_auto/`);
}

export const treatableCases = [
  {
    id: 'cross-bite',
    title: 'Cross Bite',
    image: 'https://res.cloudinary.com/dezouiujs/image/upload/v1779733517/cross-bite_xlli2f.webp',
    problem: 'Upper teeth sit inside the lower teeth on one or both sides, causing uneven wear and jaw strain.',
    solution: 'Targeted aligner staging gradually expands the arch and shifts teeth into proper lateral alignment.',
    time: '6–9 months',
    difficulty: 'Moderate',
  },
  {
    id: 'crowding',
    title: 'Crowding',
    image: 'https://res.cloudinary.com/dezouiujs/image/upload/v1779733517/crowding_eguaww.webp',
    problem: 'Teeth overlap or twist when there is not enough room in the dental arch.',
    solution: 'Gentle arch expansion and sequential movement create space for a naturally aligned smile.',
    time: '5–7 months',
    difficulty: 'Mild to moderate',
  },
  {
    id: 'over-bite',
    title: 'Over Bite',
    image: 'https://res.cloudinary.com/dezouiujs/image/upload/v1779733517/over-bite_oertfc.webp',
    problem: 'Upper front teeth excessively overlap the lower teeth vertically.',
    solution: 'Smart attachments and staged intrusion correct bite depth while maintaining aesthetics.',
    time: '6–8 months',
    difficulty: 'Moderate',
  },
  {
    id: 'open-bite',
    title: 'Open Bite',
    image: 'https://res.cloudinary.com/dezouiujs/image/upload/v1779733517/open-bite_ko8sse.webp',
    problem: 'Front teeth do not meet when the back teeth are closed, affecting speech and chewing.',
    solution: 'Controlled vertical movements close the open bite for a functional, confident smile.',
    time: '7–10 months',
    difficulty: 'Moderate to severe',
  },
  {
    id: 'diastema',
    title: 'Diastema',
    image: 'https://res.cloudinary.com/dezouiujs/image/upload/v1779733517/diastema_ntosz2.webp',
    problem: 'Noticeable gaps between teeth, especially the front incisors, affect smile symmetry.',
    solution: 'Precise closing forces unify tooth contacts without compromising facial proportions.',
    time: '4–6 months',
    difficulty: 'Mild',
  },
  {
    id: 'under-bite',
    title: 'Under Bite',
    image: 'https://res.cloudinary.com/dezouiujs/image/upload/v1779733517/under-bite_hmdpob.webp',
    problem: 'Lower front teeth protrude past the upper teeth, stressing jaw joints and profile balance.',
    solution: 'Digital treatment mapping guides safe anterior correction without invasive surgery in many cases.',
    time: '8–10 months',
    difficulty: 'Severe',
  },
];

export default function TreatableCases() {
  const [activeCase, setActiveCase] = useState<(typeof treatableCases)[number] | null>(null);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="cases"
        className="py-28 relative overflow-hidden"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '0 1200px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-mint-50/80 via-white to-mint-50/40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,720px)] h-64 bg-mint-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeading
            badge="Clinical capability"
            centered
            subtitle="Six common orthodontic conditions we treat today with custom SmileyClear™ aligner pathways."
          >
            Conditions we <span className="text-gradient-mint italic">treat</span>
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 -mt-2">
            {treatableCases.map((item, idx) => (
              <article
                key={item.id}
                className="group h-full flex flex-col rounded-3xl bg-white border border-mint-100/80 shadow-md shadow-mint-500/5 hover:shadow-lg hover:border-mint-200 transition-[box-shadow,border-color] duration-300 overflow-hidden"
              >
                <div className="p-4 pb-0">
                  <div className="relative aspect-[5/4] rounded-2xl overflow-hidden bg-slate-950 ring-1 ring-white/10">
                    <img
                      src={optimizeImage(item.image)}
                      alt={`${item.title} — 3D dental model`}
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={384}
                      className="w-full h-full object-contain p-4 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-white/80 bg-black/40 px-2.5 py-1 rounded-full">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

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
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mint-600 hover:text-mint-700 transition-colors"
                  >
                    Learn more
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-mint-50 border border-mint-100 group-hover:bg-mint-100 transition-colors">
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl px-6 py-5 flex items-center gap-3 border border-mint-200/60 bg-white shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-mint-100 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-mint-600" />
            </div>
            <p className="text-sm text-ink-muted max-w-xl">
              <span className="font-semibold text-ink">98% success rate</span> — evaluated cases achieve excellent results with clear aligners under specialist oversight.
            </p>
          </div>
        </div>

        <AnimatePresence>
          {activeCase && (
            <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-ink/50"
                onClick={() => setActiveCase(null)}
              />
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto border border-mint-100"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveCase(null)}
                  className="absolute top-4 right-4 p-2.5 bg-white hover:bg-slate-50 text-ink rounded-xl z-20 shadow-md border border-slate-100"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="grid sm:grid-cols-2">
                  <div className="relative aspect-square sm:aspect-auto sm:min-h-[280px] bg-slate-950 flex items-center justify-center p-6 sm:rounded-l-3xl overflow-hidden">
                    <img
                      src={optimizeImage(activeCase.image, 640)}
                      alt={activeCase.title}
                      className="relative z-10 max-w-full max-h-[220px] sm:max-h-[260px] object-contain"
                      loading="eager"
                      decoding="async"
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
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </LazyMotion>
  );
}
