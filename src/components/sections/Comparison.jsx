import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Comparison({
  badge,
  title,
  subtitle,
  features = [],
  plans = [],
  highlightedPlan,
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

        {/* Comparison Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            {/* Header */}
            <thead>
              <tr>
                <th className="py-4 px-4 text-left text-sm font-medium text-stone-500 dark:text-stone-400 border-b border-stone-200 dark:border-stone-700">
                  Features
                </th>
                {plans.map((plan, index) => (
                  <th
                    key={index}
                    className={`
                      py-4 px-4 text-center border-b
                      ${plan.name === highlightedPlan
                        ? 'bg-green-lightest dark:bg-green-dark/20 border-green-light dark:border-green-dark'
                        : 'border-stone-200 dark:border-stone-700'
                      }
                    `}
                  >
                    <div className="font-semibold text-stone-900 dark:text-stone-100">
                      {plan.name}
                    </div>
                    {plan.price && (
                      <div className="text-sm text-stone-500 dark:text-stone-400">
                        {typeof plan.price === 'number' ? `$${plan.price}/mo` : plan.price}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((feature, featureIndex) => (
                <motion.tr
                  key={featureIndex}
                  variants={itemVariants}
                  className="border-b border-stone-100 dark:border-stone-800"
                >
                  <td className="py-4 px-4 text-sm text-stone-700 dark:text-stone-300">
                    {feature.name}
                    {feature.tooltip && (
                      <span className="ml-1 text-stone-400 cursor-help" title={feature.tooltip}>
                        ⓘ
                      </span>
                    )}
                  </td>
                  {plans.map((plan, planIndex) => {
                    const value = feature.values?.[plan.name] ?? feature.values?.[planIndex];
                    return (
                      <td
                        key={planIndex}
                        className={`
                          py-4 px-4 text-center text-sm
                          ${plan.name === highlightedPlan
                            ? 'bg-green-lightest/50 dark:bg-green-dark/10'
                            : ''
                          }
                        `}
                      >
                        <FeatureValue value={value} />
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureValue({ value }) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 mx-auto text-green-main" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    );
  }

  if (value === false) {
    return (
      <svg className="w-5 h-5 mx-auto text-stone-300 dark:text-stone-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  }

  return (
    <span className="text-stone-700 dark:text-stone-300">{value}</span>
  );
}

// Simple two-column comparison (us vs them)
Comparison.VsThem = function ComparisonVsThem({
  badge,
  title,
  subtitle,
  us = { name: 'Us', features: [] },
  them = { name: 'Others', features: [] },
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Us */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-green-lightest dark:bg-green-dark/20 border-2 border-green-main"
          >
            <h3 className="text-xl font-semibold text-green-dark dark:text-green-light mb-4">
              {us.name}
            </h3>
            <ul className="space-y-3">
              {us.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 mt-0.5 text-green-main" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-stone-700 dark:text-stone-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Them */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
          >
            <h3 className="text-xl font-semibold text-stone-600 dark:text-stone-400 mb-4">
              {them.name}
            </h3>
            <ul className="space-y-3">
              {them.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 mt-0.5 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-stone-500 dark:text-stone-400">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
