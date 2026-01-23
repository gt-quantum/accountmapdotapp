import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default function Integrations({
  badge,
  title,
  subtitle,
  integrations = [],
  columns = 4,
  variant = 'cards',
  className = '',
}) {
  const columnClasses = {
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
    5: 'sm:grid-cols-2 lg:grid-cols-5',
    6: 'sm:grid-cols-3 lg:grid-cols-6',
  };

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

        {/* Integrations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid gap-4 ${columnClasses[columns]}`}
        >
          {integrations.map((integration, index) => (
            <IntegrationItem
              key={index}
              integration={integration}
              variant={variant}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IntegrationItem({ integration, variant }) {
  const { name, logo, description, status, href } = integration;

  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  if (variant === 'simple') {
    return (
      <motion.div variants={itemVariants}>
        <Wrapper
          {...wrapperProps}
          className="flex flex-col items-center p-4 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
        >
          {logo && (
            <img src={logo} alt={name} className="w-12 h-12 object-contain mb-2" />
          )}
          <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
            {name}
          </span>
        </Wrapper>
      </motion.div>
    );
  }

  // Default: cards
  return (
    <motion.div variants={itemVariants}>
      <Wrapper
        {...wrapperProps}
        className={`
          flex flex-col items-center p-6 rounded-xl
          bg-white dark:bg-stone-800/50
          border border-stone-200 dark:border-stone-700
          hover:shadow-card-hover hover:border-stone-300 dark:hover:border-stone-600
          transition-all
          ${href ? 'cursor-pointer' : ''}
        `}
      >
        {logo && (
          <img src={logo} alt={name} className="w-12 h-12 object-contain mb-3" />
        )}
        <span className="font-medium text-stone-900 dark:text-stone-100 text-center">
          {name}
        </span>
        {description && (
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400 text-center">
            {description}
          </p>
        )}
        {status && (
          <span className={`
            mt-3 px-2 py-0.5 text-xs font-medium rounded-full
            ${status === 'available'
              ? 'bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light'
              : status === 'coming'
                ? 'bg-brass-light text-brass-dark dark:bg-brass-dark/20 dark:text-brass-light'
                : 'bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400'
            }
          `}>
            {status === 'available' ? 'Available' : status === 'coming' ? 'Coming Soon' : status}
          </span>
        )}
      </Wrapper>
    </motion.div>
  );
}

// Featured integration with more details
Integrations.Featured = function IntegrationsFeatured({
  badge,
  title,
  subtitle,
  integrations = [],
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
            >
              <div className="flex items-center gap-4 mb-4">
                {integration.logo && (
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="w-12 h-12 object-contain"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                    {integration.name}
                  </h3>
                  {integration.category && (
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {integration.category}
                    </p>
                  )}
                </div>
              </div>
              {integration.description && (
                <p className="text-stone-600 dark:text-stone-400 text-sm">
                  {integration.description}
                </p>
              )}
              {integration.features && (
                <ul className="mt-4 space-y-2">
                  {integration.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                      <svg className="w-4 h-4 text-green-main" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
