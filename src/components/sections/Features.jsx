import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Features({
  badge,
  title,
  subtitle,
  features = [],
  columns = 3,
  variant = 'cards',
  className = '',
}) {
  const columnClasses = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  // Bento variant
  if (variant === 'bento') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <BentoGrid features={features} />
        </div>
      </section>
    );
  }

  // Large icon variant
  if (variant === 'large-icons' || variant === 'largeIcons') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className={`grid gap-8 ${columnClasses[columns]}`}
          >
            {features.map((feature, index) => (
              <LargeIconCard key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Centered variant
  if (variant === 'centered') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className={`grid gap-8 ${columnClasses[columns]}`}
          >
            {features.map((feature, index) => (
              <CenteredCard key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Icon list variant (compact list with icons)
  if (variant === 'iconList' || variant === 'list') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className={`grid gap-4 ${columnClasses[columns]}`}
          >
            {features.map((feature, index) => (
              <IconListItem key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Simple variant
  if (variant === 'simple') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className={`grid gap-6 ${columnClasses[columns]}`}
          >
            {features.map((feature, index) => (
              <SimpleCard key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Horizontal variant
  if (variant === 'horizontal') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className={`grid gap-6 ${columnClasses[columns]}`}
          >
            {features.map((feature, index) => (
              <HorizontalCard key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default: cards variant
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          viewport={{ once: true, margin: '-100px' }}
          className={`grid gap-6 ${columnClasses[columns]}`}
        >
          {features.map((feature, index) => (
            <CardFeature key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Card Feature (default)
function CardFeature({ feature }) {
  const { icon: Icon, title, description } = feature;

  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 hover:shadow-card-hover transition-shadow"
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
        {title}
      </h3>
      <p className="text-stone-600 dark:text-stone-400">
        {description}
      </p>
    </motion.div>
  );
}

// Simple Feature (no card)
function SimpleCard({ feature }) {
  const { icon: Icon, title, description } = feature;

  return (
    <motion.div variants={itemVariants} className="text-center">
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
        {title}
      </h3>
      <p className="text-stone-600 dark:text-stone-400">
        {description}
      </p>
    </motion.div>
  );
}

// Horizontal Feature
function HorizontalCard({ feature }) {
  const { icon: Icon, title, description } = feature;

  return (
    <motion.div variants={itemVariants} className="flex gap-4">
      {Icon && (
        <div className="shrink-0 w-10 h-10 rounded-lg bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div>
        <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
          {title}
        </h3>
        <p className="text-sm text-stone-600 dark:text-stone-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Large Icon Feature
function LargeIconCard({ feature }) {
  const { icon: Icon, title, description } = feature;

  return (
    <motion.div variants={itemVariants} className="text-center">
      {Icon && (
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-green-lightest to-green-light/30 text-green-dark dark:from-green-dark/30 dark:to-green-dark/10 dark:text-green-light">
          <Icon className="w-10 h-10" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-3">
        {title}
      </h3>
      <p className="text-stone-600 dark:text-stone-400 max-w-sm mx-auto">
        {description}
      </p>
    </motion.div>
  );
}

// Centered Card (with hover effect)
function CenteredCard({ feature }) {
  const { icon: Icon, title, description } = feature;

  return (
    <motion.div
      variants={itemVariants}
      className="p-8 rounded-2xl text-center bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 hover:border-green-main/50 dark:hover:border-green-main/50 transition-colors group"
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
        {title}
      </h3>
      <p className="text-stone-600 dark:text-stone-400">
        {description}
      </p>
    </motion.div>
  );
}

// Icon List Item (compact)
function IconListItem({ feature }) {
  const { icon: Icon, title, description } = feature;

  return (
    <motion.div
      variants={itemVariants}
      className="flex items-start gap-3 p-4 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
    >
      {Icon && (
        <div className="shrink-0 w-8 h-8 rounded-lg bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light flex items-center justify-center">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <div>
        <h4 className="font-medium text-stone-900 dark:text-stone-100">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// Bento Grid
function BentoGrid({ features }) {
  // Take up to 6 features for bento layout
  const gridFeatures = features.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {gridFeatures.map((feature, index) => {
        const { icon: Icon, title, description, image } = feature;

        // First item is large (spans 2 rows)
        if (index === 0) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-span-2 lg:col-span-1 lg:row-span-2 p-6 rounded-2xl bg-gradient-to-br from-green-main to-green-dark text-white relative overflow-hidden group"
            >
              <div className="relative z-10">
                {Icon && (
                  <div className="w-12 h-12 mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white/80">{description}</p>
              </div>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
            </motion.div>
          );
        }

        // Third item spans 2 columns on mobile
        if (index === 2) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-span-2 lg:col-span-1 p-6 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700"
            >
              {Icon && (
                <div className="w-10 h-10 mb-3 rounded-lg bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
              )}
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">{title}</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">{description}</p>
            </motion.div>
          );
        }

        // Regular items
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700"
          >
            {Icon && (
              <div className="w-10 h-10 mb-3 rounded-lg bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">{title}</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">{description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// Pre-built icon components for common features
Features.Icons = {
  Check: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Lightning: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Shield: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Globe: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Chart: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Users: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Cog: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Lock: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
};

// Export variant list
Features.variants = ['cards', 'simple', 'horizontal', 'centered', 'largeIcons', 'iconList', 'bento'];
