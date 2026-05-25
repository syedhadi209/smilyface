import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const starterPlanCopy = [
  'Covers both arches with unlimited aligner stages per case.',
  'Built for solo dentists and orthodontic practices with lighter case volume — ideal when you are new to clear aligner therapy.',
];

const volumePlanCopy = [
  'Scaled pricing for practices submitting higher monthly case volume.',
  'Same unlimited steps per arch — costs decrease as your clinic grows.',
];

const INVOICING_FEATURE = 'Per-case invoicing';

const fullArchFeatures = [
  'Unlimited treatment revisions',
  'End-to-end treatment planning tools',
  'Full access to all aligner modules & features',
  INVOICING_FEATURE,
  'One complimentary refinement; additional refinements at $25 each',
  'Dedicated support via email, chat & phone',
];

const pricingPlans = [
  {
    id: 'full-arch',
    name: 'Full Arch',
    price: '35.00',
    description: starterPlanCopy,
    features: fullArchFeatures,
    invoicingBulletOnly: true,
  },
  {
    id: 'both-single-arch',
    name: 'Dual & Single Arch',
    price: '18.00',
    description: starterPlanCopy,
    features: [
      'End-to-end treatment planning tools',
      'Full access to all aligner modules & features',
      'Unlimited treatment revisions',
      'One complimentary refinement; additional refinements at $25 each',
      INVOICING_FEATURE,
      'Dedicated support via email, chat & phone',
    ],
    invoicingBulletOnly: false,
  },
];

const volumePlan = {
  name: 'High-Volume Practices',
  description: volumePlanCopy,
  features: [
    '$50 per case for your first 200 cases each month',
    '$44 per case for cases 201–500 each month',
    '$40 per case for 501+ cases each month',
    'Priority email support for aligner case questions',
    'One complimentary refinement; additional refinements at $25 each',
    INVOICING_FEATURE,
    'Dedicated support via email, chat & phone',
  ],
};

function PricingCard({
  name,
  price,
  description,
  features,
  invoicingBulletOnly = false,
  fullWidth = false,
  delay = 0,
}: {
  name: string;
  price?: string;
  description: string[];
  features: string[];
  invoicingBulletOnly?: boolean;
  fullWidth?: boolean;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col rounded-2xl bg-gradient-to-b from-sky-50 to-cyan-50/80 border border-sky-100 shadow-md shadow-sky-200/40 overflow-hidden ${
        fullWidth ? 'lg:flex-row lg:items-stretch' : ''
      }`}
    >
      <div className={`p-8 sm:p-10 flex flex-col ${fullWidth ? 'lg:w-[42%] lg:border-r lg:border-sky-100' : ''}`}>
        <h3 className="text-2xl sm:text-[1.65rem] font-bold text-ink tracking-tight">{name}</h3>

        {price && (
          <p className="mt-4 text-4xl sm:text-5xl font-bold text-mint-600 tracking-tight">
            $ {price}
          </p>
        )}

        <div className="mt-6 space-y-3 text-sm text-ink-muted leading-relaxed">
          {description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <a
          href="#submit"
          className="mt-8 inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[220px] px-8 py-3 rounded-lg border-2 border-mint-500 text-mint-600 font-semibold text-sm hover:bg-mint-500 hover:text-white transition-colors"
        >
          Start a trial case
        </a>
      </div>

      <ul
        className={`divide-y divide-sky-200/80 bg-white/40 ${
          fullWidth ? 'lg:flex-1 lg:flex lg:flex-col lg:justify-center' : ''
        }`}
      >
        {features.map((feature) => {
          const isInvoicing = feature === INVOICING_FEATURE;
          const showCheck = !(invoicingBulletOnly && isInvoicing);

          return (
            <li
              key={feature}
              className={`flex items-start gap-3 px-8 py-4 text-sm text-ink ${
                fullWidth ? '' : ''
              }`}
            >
              {showCheck ? (
                <CheckCircle2 className="w-5 h-5 text-mint-500 shrink-0 mt-0.5" strokeWidth={2.5} />
              ) : (
                <span className="w-5 h-5 shrink-0 mt-1.5 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink/50" />
                </span>
              )}
              <span className="leading-snug">{feature}</span>
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Investment"
          centered
          subtitle="Straightforward per-case pricing for clinics — unlimited aligner stages, both arches included."
        >
          Plans for every practice size
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pricingPlans.map((plan, idx) => (
            <div key={plan.id}>
              <PricingCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                invoicingBulletOnly={plan.invoicingBulletOnly}
                delay={idx * 0.08}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 lg:mt-8">
          <PricingCard
            name={volumePlan.name}
            description={volumePlan.description}
            features={volumePlan.features}
            fullWidth
            delay={0.16}
          />
        </div>
      </div>
    </section>
  );
}
