import { motion } from 'framer-motion';
import Button from '../ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Pricing({
  badge,
  title,
  subtitle,
  plans = [],
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {badge && (
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
              {subtitle}
            </p>
          )}
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ plan }) {
  const {
    name,
    description,
    price,
    period = '/month',
    features = [],
    cta = 'Get Started',
    ctaLink = '#',
    popular = false,
    highlighted = false,
  } = plan;

  return (
    <motion.div
      variants={itemVariants}
      className={`
        relative p-8 rounded-2xl
        ${highlighted
          ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900'
          : 'bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700'
        }
      `}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium rounded-full bg-green-main text-white">
          Most Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-semibold mb-2 ${highlighted ? '' : 'text-stone-900 dark:text-stone-100'}`}>
          {name}
        </h3>
        {description && (
          <p className={`text-sm ${highlighted ? 'text-stone-300 dark:text-stone-600' : 'text-stone-600 dark:text-stone-400'}`}>
            {description}
          </p>
        )}
      </div>

      <div className="mb-6">
        <span className={`text-4xl font-bold ${highlighted ? '' : 'text-stone-900 dark:text-stone-100'}`}>
          {typeof price === 'number' ? `$${price}` : price}
        </span>
        {typeof price === 'number' && (
          <span className={highlighted ? 'text-stone-300 dark:text-stone-600' : 'text-stone-600 dark:text-stone-400'}>
            {period}
          </span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 shrink-0 mt-0.5 ${highlighted ? 'text-green-light' : 'text-green-main'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className={`text-sm ${highlighted ? 'text-stone-200 dark:text-stone-700' : 'text-stone-600 dark:text-stone-400'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        as="a"
        href={ctaLink}
        variant={highlighted ? 'secondary' : 'primary'}
        size="lg"
        className="w-full justify-center"
      >
        {cta}
      </Button>
    </motion.div>
  );
}
