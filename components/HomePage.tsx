'use client';

import { Zap, Camera, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HeroStats from '@/components/HeroStats';
import SectionHeading from '@/components/SectionHeading';
import OrthodonticSolutions from '@/components/OrthodonticSolutions';
import CaseSubmissionForm from '@/components/CaseSubmissionForm';
import TreatableCases from '@/components/TreatableCases';
import ScrollProgress from '@/components/ScrollProgress';
// import WhyChooseUs from '@/components/WhyChooseUs';

const steps = [
  { num: '01', title: '3D Digital Scan', desc: 'No messy impressions. Thousands of depth points map your teeth in under 3 minutes.' },
  { num: '02', title: 'Custom Treatment Plan', desc: 'Our lab designs each aligner stage with certified orthodontic supervision.' },
  { num: '03', title: 'Wear & Progress', desc: '22 hours daily. Swap sets on schedule and track milestones from your device.' },
];

const testimonials = [
  { name: 'Sarah J.', city: 'Los Angeles, CA', quote: 'I previewed my smile transformation step-by-step before receiving trays. Six months later, my confidence has completely changed.', avatar: 'https://i.pravatar.cc/150?u=sarah1' },
  { name: 'Mark T.', city: 'Austin, TX', quote: 'The laser scan was quick and painless. A modern alternative to braces — I recommend it to everyone.', avatar: 'https://i.pravatar.cc/150?u=mark1' },
  { name: 'Elena R.', city: 'New York, NY', quote: 'I remove them for presentations and nobody notices. The Express plan was absolutely worth it.', avatar: 'https://i.pravatar.cc/150?u=elena1' },
  { name: 'David K.', city: 'Miami, FL', quote: 'Remote monitoring streamlined my check-ups. Transparent pricing and incredible support.', avatar: 'https://i.pravatar.cc/150?u=david1' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <ScrollProgress />

      <Navbar />
      <Hero />
      <HeroStats />
      <OrthodonticSolutions />

      {/* One-page induction section — temporarily hidden */}
      {/* <WhyChooseUs /> */}

      <TreatableCases />

      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading badge="How it works" subtitle="Three simple steps from scan to your dream smile.">
                Your journey to a perfect smile
              </SectionHeading>
              <div className="space-y-10">
                {steps.map((step, idx) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, duration: 0.6 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-mint-50 border border-mint-100 flex items-center justify-center shrink-0 group-hover:bg-mint-100 transition-colors">
                      <span className="text-lg font-display text-mint-600">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink mb-1">{step.title}</h3>
                      <p className="text-sm text-ink-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-mint-500/10 border border-mint-100">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000&auto=format&fit=crop"
                  alt="3D dental scanning technology"
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-4 shadow-xl border border-mint-100">
                <p className="text-sm font-semibold text-ink">3 min scan</p>
                <p className="text-xs text-ink-muted">No impressions needed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="technology" className="py-24 bg-ink text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeading badge="Innovation" light centered subtitle="Premium polymers, optical scanners, and precision force algorithms — mapped with clinical accuracy.">
            Advanced bio-materials
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-4">
            <div className="space-y-5">
              {[
                { icon: Zap, title: 'Smart Force Polymers', desc: 'Balanced, prolonged pressure safely guides teeth into natural symmetry.' },
                { icon: Camera, title: 'Optical Arch Scanning', desc: 'Laser systems capture structure instantly — no uncomfortable impression putty.' },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
                >
                  <div className="w-11 h-11 bg-mint-500/20 text-mint-400 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint-500/30 to-sky-500/20 rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop"
                alt="Clear aligner technology"
                className="relative z-10 w-full rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="submit" className="py-24 bg-mint-50/40 border-y border-mint-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="For clinics" centered subtitle="Share case details and a public STL file link — our team will prepare a diagnostic evaluation within 24 hours.">
            Submit a clinical case
          </SectionHeading>
          <CaseSubmissionForm />
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Patient stories" centered subtitle="Real transformations from patients across the United States.">
            Loved by thousands of smiles
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <div className="h-full p-7 rounded-3xl bg-slate-50/80 border border-slate-100 hover:border-mint-200 hover:shadow-lg hover:shadow-mint-500/5 transition-all flex flex-col">
                  <Quote className="w-8 h-8 text-mint-300 mb-4" />
                  <p className="text-sm text-ink leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-200/80">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full ring-2 ring-mint-200" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-semibold text-sm text-ink">{t.name}</p>
                      <p className="text-[10px] text-ink-muted uppercase tracking-wider font-medium">{t.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-3 text-mint-500 text-xs">★★★★★</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-mint-500 via-mint-600 to-teal-700 p-12 md:p-20 text-center text-white shadow-2xl shadow-mint-500/25"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-display relative z-10 leading-tight mb-6">
              Ready for your dream smile?
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-lg mx-auto relative z-10 mb-10">
              Join thousands who transformed their smile with clinical-grade clear aligners — comfortably and invisibly.
            </p>
            <div className="flex justify-center relative z-10">
              <a
                href="#submit"
                className="bg-white text-mint-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-mint-50 transition-all shadow-xl active:scale-[0.98]"
              >
                Submit a case
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
