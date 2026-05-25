import { useState } from 'react';
import {
  CheckCircle2,
  Sparkles,
  Smartphone,
  Award,
  Zap,
  Camera,
  Quote,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HeroStats from './components/HeroStats';
import SectionHeading from './components/SectionHeading';
import OrthodonticSolutions from './components/OrthodonticSolutions';
import ConsultationModal from './components/ConsultationModal';
import CaseSubmissionForm from './components/CaseSubmissionForm';
import TreatableCases from './components/TreatableCases';
import TiltCard from './components/TiltCard';

const benefits = [
  { icon: Sparkles, title: 'Virtually Invisible', desc: 'SmillyClear™ high-clarity material disappears in everyday conversations.', color: 'bg-mint-50 text-mint-600' },
  { icon: Award, title: 'Expert Oversight', desc: 'Every plan is designed, approved, and monitored by licensed orthodontic specialists.', color: 'bg-sky-50 text-sky-600' },
  { icon: CheckCircle2, title: 'Lifestyle Freedom', desc: 'Remove aligners for meals, events, and photos. Oral hygiene stays simple.', color: 'bg-emerald-50 text-emerald-600' },
  { icon: Smartphone, title: 'Remote Tracking', desc: 'Share progress from your phone — fewer clinic visits, same expert care.', color: 'bg-violet-50 text-violet-600' },
];

const steps = [
  { num: '01', title: '3D Digital Scan', desc: 'No messy impressions. Thousands of depth points map your teeth in under 3 minutes.' },
  { num: '02', title: 'Custom Treatment Plan', desc: 'Our lab designs each aligner stage with certified orthodontic supervision.' },
  { num: '03', title: 'Wear & Progress', desc: '22 hours daily. Swap sets on schedule and track milestones from your device.' },
];

const pricingPlans = [
  {
    tag: 'Mild cases',
    name: 'Express',
    price: '$1,299',
    sub: 'From $99/mo · 0% APR',
    desc: 'Minor spacing, aesthetic alignment, or mild post-treatment shifts.',
    features: ['Up to 12 aligner trays', '3D treatment preview', 'Satisfaction guarantee'],
    cta: 'Get started',
    featured: false,
  },
  {
    tag: 'Most popular',
    name: 'Complete Smile',
    price: '$1,850',
    sub: 'From $149/mo · 0% APR',
    desc: 'Full bite correction — crowding, spacing, and depth simultaneously.',
    features: ['Full aligner series', 'Specialist oversight', 'Retainers included', 'Free replacements'],
    cta: 'Book free consultation',
    featured: true,
  },
  {
    tag: 'For clinics',
    name: 'CAD Integration',
    price: '$599',
    sub: 'Per diagnostic export',
    desc: 'For practices managing intraoral STL data in-house.',
    features: ['24-hour digital blueprint', 'Clinical sheets download', 'Movement logs'],
    cta: 'Upload STL file',
    featured: false,
    link: '#submit',
  },
];

const testimonials = [
  { name: 'Sarah J.', city: 'Lahore', quote: 'I previewed my smile transformation step-by-step before receiving trays. Six months later, my confidence has completely changed.', avatar: 'https://i.pravatar.cc/150?u=sarah1' },
  { name: 'Mark T.', city: 'Islamabad', quote: 'The laser scan was quick and painless. A modern alternative to braces — I recommend it to everyone.', avatar: 'https://i.pravatar.cc/150?u=mark1' },
  { name: 'Elena R.', city: 'Karachi', quote: 'I remove them for presentations and nobody notices. The Express plan was absolutely worth it.', avatar: 'https://i.pravatar.cc/150?u=elena1' },
  { name: 'David K.', city: 'Faisalabad', quote: 'Remote monitoring streamlined my check-ups. Transparent pricing and incredible support.', avatar: 'https://i.pravatar.cc/150?u=david1' },
];

export default function App() {
  const [showAppointment, setShowAppointment] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-surface">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-mint-400 via-mint-500 to-sky-400 z-[9999] origin-left"
      />

      <Navbar />
      <ConsultationModal isOpen={showAppointment} onClose={() => setShowAppointment(false)} />

      <Hero />
      <HeroStats />
      <OrthodonticSolutions />

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Why Smilly Face" centered subtitle="Invisible aligners designed for real life — not just straight teeth.">
            The smarter way to straighten
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc, color }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
              >
                <TiltCard className="h-full">
                  <div className="h-full p-8 rounded-3xl bg-white border border-slate-100 hover:border-mint-200 hover:shadow-xl hover:shadow-mint-500/5 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-5`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TreatableCases onOpenAppointment={() => setShowAppointment(true)} />

      {/* Process */}
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

      {/* Technology */}
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

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Investment" centered subtitle="Premium clear aligners without traditional markup — honest pricing for patients and clinics.">
            Transparent treatment pricing
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={plan.featured ? 'md:-mt-4 md:mb-4' : ''}
              >
                <TiltCard className="h-full" hoverScale={plan.featured ? 1.02 : 1.015}>
                  <div
                    className={`h-full p-8 rounded-3xl flex flex-col ${
                      plan.featured
                        ? 'bg-gradient-to-br from-ink to-slate-800 text-white shadow-2xl shadow-ink/20 border border-mint-500/20'
                        : 'bg-white border border-slate-100 hover:border-mint-200 hover:shadow-xl hover:shadow-mint-500/5 transition-all'
                    }`}
                  >
                    {plan.featured && (
                      <span className="self-start text-[10px] font-semibold uppercase tracking-widest bg-mint-500 text-white px-3 py-1 rounded-full mb-4">
                        {plan.tag}
                      </span>
                    )}
                    {!plan.featured && (
                      <span className="text-[10px] font-semibold text-ink-muted uppercase tracking-widest mb-2">{plan.tag}</span>
                    )}
                    <h4 className={`text-2xl font-display mb-2 ${plan.featured ? 'text-white' : 'text-ink'}`}>{plan.name}</h4>
                    <p className={`text-xs mb-6 leading-relaxed ${plan.featured ? 'text-white/60' : 'text-ink-muted'}`}>{plan.desc}</p>
                    <div className={`py-5 mb-6 border-y ${plan.featured ? 'border-white/10' : 'border-slate-100'}`}>
                      <span className={`text-4xl font-display ${plan.featured ? 'text-mint-300' : 'text-ink'}`}>{plan.price}</span>
                      <span className={`text-xs block mt-1 ${plan.featured ? 'text-white/50' : 'text-ink-muted'}`}>{plan.sub}</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className={`flex items-center gap-2 text-xs font-medium ${plan.featured ? 'text-white/80' : 'text-ink-muted'}`}>
                          <CheckCircle2 size={14} className="text-mint-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    {plan.link ? (
                      <a
                        href={plan.link}
                        className={`w-full text-center py-3.5 rounded-2xl font-semibold text-sm transition-all ${
                          plan.featured
                            ? 'bg-mint-500 hover:bg-mint-400 text-white'
                            : 'bg-mint-50 text-mint-700 hover:bg-mint-100 border border-mint-200'
                        }`}
                      >
                        {plan.cta}
                      </a>
                    ) : (
                      <button
                        onClick={() => setShowAppointment(true)}
                        className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all active:scale-[0.98] ${
                          plan.featured
                            ? 'bg-mint-500 hover:bg-mint-400 text-white shadow-lg shadow-mint-500/25'
                            : 'bg-ink hover:bg-ink/90 text-white'
                        }`}
                      >
                        {plan.cta}
                      </button>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case submission */}
      <section id="submit" className="py-24 bg-mint-50/40 border-y border-mint-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="For clinics" centered subtitle="Upload 3D STL scans or patient photos for a diagnostic evaluation within 24 hours.">
            Submit a clinical case
          </SectionHeading>
          <CaseSubmissionForm />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Patient stories" centered subtitle="Real transformations from patients across Pakistan.">
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

      {/* CTA */}
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
