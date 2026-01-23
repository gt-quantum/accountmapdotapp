import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  variant = 'cards',
  showToggle = false,
  yearlyDiscount = 20,
  className = '',
}) {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // Cards variant (default)
  if (variant === 'cards' || variant === 'default') {
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

            {/* Billing Toggle */}
            {showToggle && (
              <BillingToggle
                billingPeriod={billingPeriod}
                setBillingPeriod={setBillingPeriod}
                yearlyDiscount={yearlyDiscount}
              />
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
              <PricingCard
                key={index}
                plan={plan}
                billingPeriod={billingPeriod}
                yearlyDiscount={yearlyDiscount}
              />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Comparison table variant
  if (variant === 'comparison') {
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

            {showToggle && (
              <BillingToggle
                billingPeriod={billingPeriod}
                setBillingPeriod={setBillingPeriod}
                yearlyDiscount={yearlyDiscount}
              />
            )}
          </div>

          {/* Comparison Table */}
          <ComparisonTable
            plans={plans}
            billingPeriod={billingPeriod}
            yearlyDiscount={yearlyDiscount}
          />
        </div>
      </section>
    );
  }

  // Horizontal variant (side by side cards)
  if (variant === 'horizontal') {
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

            {showToggle && (
              <BillingToggle
                billingPeriod={billingPeriod}
                setBillingPeriod={setBillingPeriod}
                yearlyDiscount={yearlyDiscount}
              />
            )}
          </div>

          {/* Horizontal Cards */}
          <div className="space-y-6">
            {plans.map((plan, index) => (
              <HorizontalPricingCard
                key={index}
                plan={plan}
                billingPeriod={billingPeriod}
                yearlyDiscount={yearlyDiscount}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Compact variant (smaller cards)
  if (variant === 'compact') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {showToggle && (
              <BillingToggle
                billingPeriod={billingPeriod}
                setBillingPeriod={setBillingPeriod}
                yearlyDiscount={yearlyDiscount}
              />
            )}
          </div>

          {/* Compact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {plans.map((plan, index) => (
              <CompactPricingCard
                key={index}
                plan={plan}
                billingPeriod={billingPeriod}
                yearlyDiscount={yearlyDiscount}
              />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default fallback
  return null;
}

// Billing Period Toggle
function BillingToggle({ billingPeriod, setBillingPeriod, yearlyDiscount }) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-stone-900 dark:text-stone-100' : 'text-stone-500'}`}>
        Monthly
      </span>
      <button
        onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
        className="relative w-14 h-7 rounded-full bg-stone-200 dark:bg-stone-700 transition-colors"
        aria-label="Toggle billing period"
      >
        <motion.div
          className="absolute top-1 left-1 w-5 h-5 rounded-full bg-green-main"
          animate={{ x: billingPeriod === 'yearly' ? 28 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </button>
      <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-stone-900 dark:text-stone-100' : 'text-stone-500'}`}>
        Yearly
      </span>
      {yearlyDiscount > 0 && (
        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
          Save {yearlyDiscount}%
        </span>
      )}
    </div>
  );
}

// Standard Pricing Card
function PricingCard({ plan, billingPeriod, yearlyDiscount }) {
  const {
    name,
    description,
    price,
    yearlyPrice,
    period = '/month',
    features = [],
    cta = 'Get Started',
    ctaLink = '#',
    popular = false,
    highlighted = false,
  } = plan;

  const displayPrice = billingPeriod === 'yearly' && yearlyPrice !== undefined
    ? yearlyPrice
    : billingPeriod === 'yearly' && typeof price === 'number'
      ? Math.round(price * 12 * (1 - yearlyDiscount / 100) / 12)
      : price;

  const displayPeriod = billingPeriod === 'yearly' ? '/month' : period;

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
        <AnimatePresence mode="wait">
          <motion.span
            key={`${billingPeriod}-${displayPrice}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`text-4xl font-bold ${highlighted ? '' : 'text-stone-900 dark:text-stone-100'}`}
          >
            {typeof displayPrice === 'number' ? `$${displayPrice}` : displayPrice}
          </motion.span>
        </AnimatePresence>
        {typeof displayPrice === 'number' && (
          <span className={highlighted ? 'text-stone-300 dark:text-stone-600' : 'text-stone-600 dark:text-stone-400'}>
            {displayPeriod}
          </span>
        )}
        {billingPeriod === 'yearly' && typeof price === 'number' && (
          <div className={`text-xs mt-1 ${highlighted ? 'text-stone-400 dark:text-stone-500' : 'text-stone-500'}`}>
            Billed annually (${Math.round(displayPrice * 12)}/year)
          </div>
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
              {typeof feature === 'string' ? feature : feature.text}
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

// Horizontal Pricing Card
function HorizontalPricingCard({ plan, billingPeriod, yearlyDiscount }) {
  const {
    name,
    description,
    price,
    yearlyPrice,
    period = '/month',
    features = [],
    cta = 'Get Started',
    ctaLink = '#',
    popular = false,
    highlighted = false,
  } = plan;

  const displayPrice = billingPeriod === 'yearly' && yearlyPrice !== undefined
    ? yearlyPrice
    : billingPeriod === 'yearly' && typeof price === 'number'
      ? Math.round(price * 12 * (1 - yearlyDiscount / 100) / 12)
      : price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        relative p-6 rounded-2xl flex flex-col lg:flex-row lg:items-center gap-6
        ${highlighted
          ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 ring-2 ring-green-main'
          : 'bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700'
        }
      `}
    >
      {popular && (
        <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-medium rounded-full bg-green-main text-white">
          Most Popular
        </span>
      )}

      {/* Plan Info */}
      <div className="lg:w-48 shrink-0">
        <h3 className={`text-xl font-semibold ${highlighted ? '' : 'text-stone-900 dark:text-stone-100'}`}>
          {name}
        </h3>
        {description && (
          <p className={`text-sm mt-1 ${highlighted ? 'text-stone-300 dark:text-stone-600' : 'text-stone-600 dark:text-stone-400'}`}>
            {description}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="lg:w-32 shrink-0">
        <span className={`text-3xl font-bold ${highlighted ? '' : 'text-stone-900 dark:text-stone-100'}`}>
          {typeof displayPrice === 'number' ? `$${displayPrice}` : displayPrice}
        </span>
        {typeof displayPrice === 'number' && (
          <span className={`text-sm ${highlighted ? 'text-stone-300 dark:text-stone-600' : 'text-stone-600 dark:text-stone-400'}`}>
            {period}
          </span>
        )}
      </div>

      {/* Features */}
      <div className="flex-1">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className={`w-4 h-4 shrink-0 ${highlighted ? 'text-green-light' : 'text-green-main'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className={`text-sm ${highlighted ? 'text-stone-200 dark:text-stone-700' : 'text-stone-600 dark:text-stone-400'}`}>
                {typeof feature === 'string' ? feature : feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="lg:w-36 shrink-0">
        <Button
          as="a"
          href={ctaLink}
          variant={highlighted ? 'secondary' : 'primary'}
          className="w-full justify-center"
        >
          {cta}
        </Button>
      </div>
    </motion.div>
  );
}

// Compact Pricing Card
function CompactPricingCard({ plan, billingPeriod, yearlyDiscount }) {
  const {
    name,
    price,
    yearlyPrice,
    period = '/mo',
    features = [],
    cta = 'Start',
    ctaLink = '#',
    highlighted = false,
  } = plan;

  const displayPrice = billingPeriod === 'yearly' && yearlyPrice !== undefined
    ? yearlyPrice
    : billingPeriod === 'yearly' && typeof price === 'number'
      ? Math.round(price * 12 * (1 - yearlyDiscount / 100) / 12)
      : price;

  return (
    <motion.div
      variants={itemVariants}
      className={`
        p-5 rounded-xl text-center
        ${highlighted
          ? 'bg-green-main text-white ring-2 ring-green-main ring-offset-2 dark:ring-offset-stone-900'
          : 'bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700'
        }
      `}
    >
      <h3 className={`font-semibold mb-2 ${highlighted ? '' : 'text-stone-900 dark:text-stone-100'}`}>
        {name}
      </h3>
      <div className="mb-4">
        <span className={`text-3xl font-bold ${highlighted ? '' : 'text-stone-900 dark:text-stone-100'}`}>
          {typeof displayPrice === 'number' ? `$${displayPrice}` : displayPrice}
        </span>
        {typeof displayPrice === 'number' && (
          <span className={highlighted ? 'text-white/80' : 'text-stone-500'}>
            {period}
          </span>
        )}
      </div>
      <ul className="text-sm space-y-2 mb-4">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className={highlighted ? 'text-white/90' : 'text-stone-600 dark:text-stone-400'}>
            {typeof feature === 'string' ? feature : feature.text}
          </li>
        ))}
      </ul>
      <Button
        as="a"
        href={ctaLink}
        variant={highlighted ? 'secondary' : 'outline'}
        size="sm"
        className="w-full justify-center"
      >
        {cta}
      </Button>
    </motion.div>
  );
}

// Comparison Table
function ComparisonTable({ plans, billingPeriod, yearlyDiscount }) {
  // Collect all unique features from all plans
  const allFeatures = [];
  const featureMap = new Map();

  plans.forEach(plan => {
    (plan.features || []).forEach(feature => {
      const featureText = typeof feature === 'string' ? feature : feature.text;
      const featureKey = featureText.toLowerCase().trim();

      if (!featureMap.has(featureKey)) {
        featureMap.set(featureKey, featureText);
        allFeatures.push({ key: featureKey, text: featureText });
      }
    });
  });

  // Check if plan has feature
  const planHasFeature = (plan, featureKey) => {
    return (plan.features || []).some(f => {
      const text = typeof f === 'string' ? f : f.text;
      return text.toLowerCase().trim() === featureKey;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-auto"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left text-stone-500 dark:text-stone-400 font-medium border-b border-stone-200 dark:border-stone-700">
              Features
            </th>
            {plans.map((plan, index) => {
              const displayPrice = billingPeriod === 'yearly' && plan.yearlyPrice !== undefined
                ? plan.yearlyPrice
                : billingPeriod === 'yearly' && typeof plan.price === 'number'
                  ? Math.round(plan.price * 12 * (1 - yearlyDiscount / 100) / 12)
                  : plan.price;

              return (
                <th
                  key={index}
                  className={`p-4 text-center border-b border-stone-200 dark:border-stone-700 ${
                    plan.highlighted ? 'bg-green-lightest dark:bg-green-dark/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <span className="inline-block px-2 py-0.5 mb-2 text-xs font-medium rounded-full bg-green-main text-white">
                      Popular
                    </span>
                  )}
                  <div className="font-semibold text-stone-900 dark:text-stone-100">{plan.name}</div>
                  <div className="text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                    {typeof displayPrice === 'number' ? `$${displayPrice}` : displayPrice}
                    {typeof displayPrice === 'number' && (
                      <span className="text-sm font-normal text-stone-500">/mo</span>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature, fIndex) => (
            <tr key={fIndex} className={fIndex % 2 === 0 ? 'bg-stone-50 dark:bg-stone-800/30' : ''}>
              <td className="p-4 text-sm text-stone-700 dark:text-stone-300">
                {feature.text}
              </td>
              {plans.map((plan, pIndex) => (
                <td
                  key={pIndex}
                  className={`p-4 text-center ${plan.highlighted ? 'bg-green-lightest/50 dark:bg-green-dark/10' : ''}`}
                >
                  {planHasFeature(plan, feature.key) ? (
                    <svg className="w-5 h-5 mx-auto text-green-main" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mx-auto text-stone-300 dark:text-stone-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-4 border-t border-stone-200 dark:border-stone-700"></td>
            {plans.map((plan, index) => (
              <td
                key={index}
                className={`p-4 text-center border-t border-stone-200 dark:border-stone-700 ${
                  plan.highlighted ? 'bg-green-lightest/50 dark:bg-green-dark/10' : ''
                }`}
              >
                <Button
                  as="a"
                  href={plan.ctaLink || '#'}
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="sm"
                >
                  {plan.cta || 'Get Started'}
                </Button>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </motion.div>
  );
}

// Export variant list
Pricing.variants = ['cards', 'comparison', 'horizontal', 'compact'];
