import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// Tabs Features (interactive tabs)
Features.Tabs = function FeaturesTabs({
  badge,
  title,
  subtitle,
  features = [],
  className = '',
}) {
  const [activeTab, setActiveTab] = useState(0);

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

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === index
                    ? 'bg-green-main text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span>{feature.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                {features[activeTab].title}
              </h3>
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-6">
                {features[activeTab].description}
              </p>
              {features[activeTab].points && (
                <ul className="space-y-3">
                  {features[activeTab].points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-main shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700 dark:text-stone-300">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image */}
            {features[activeTab].image && (
              <div className="rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800">
                <img
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Accordion Features
Features.Accordion = function FeaturesAccordion({
  badge,
  title,
  subtitle,
  features = [],
  image,
  imageAlt = '',
  className = '',
}) {
  const [openIndex, setOpenIndex] = useState(0);

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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Accordion */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  className={`rounded-xl border transition-colors ${
                    isOpen
                      ? 'border-green-main/50 bg-green-lightest/30 dark:bg-green-dark/10'
                      : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/50'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    {Icon && (
                      <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                        isOpen
                          ? 'bg-green-main text-white'
                          : 'bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                        {feature.title}
                      </h3>
                    </div>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="w-5 h-5 text-stone-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-19">
                          <p className="text-stone-600 dark:text-stone-400">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24 rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 lg:block hidden"
            >
              <img src={image} alt={imageAlt} className="w-full h-auto" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

// Timeline Features
Features.Timeline = function FeaturesTimeline({
  badge,
  title,
  subtitle,
  features = [],
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-200 dark:bg-stone-700" />

          <div className="space-y-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot/icon */}
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-green-main text-white flex items-center justify-center shadow-lg">
                    {Icon ? (
                      <Icon className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>

                  <div className="p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Alternating Features (zig-zag layout)
Features.Alternating = function FeaturesAlternating({
  badge,
  title,
  subtitle,
  features = [],
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:[direction:rtl]'
                }`}
              >
                {/* Content */}
                <div className={isEven ? '' : 'lg:[direction:ltr]'}>
                  {Icon && (
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
                      <Icon className="w-6 h-6" />
                    </div>
                  )}
                  <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-stone-600 dark:text-stone-400 mb-6">
                    {feature.description}
                  </p>
                  {feature.points && (
                    <ul className="space-y-3">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-main shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-stone-700 dark:text-stone-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image */}
                {feature.image && (
                  <div className={`rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 ${isEven ? '' : 'lg:[direction:ltr]'}`}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Showcase Features (feature points around a central image)
Features.Showcase = function FeaturesShowcase({
  badge,
  title,
  subtitle,
  image,
  imageAlt = '',
  leftFeatures = [],
  rightFeatures = [],
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-right">
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Center image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={image} alt={imageAlt} className="w-full h-auto" />
            </motion.div>
          )}

          {/* Right features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index}>
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Comparison Features (before/after or vs comparison)
Features.Comparison = function FeaturesComparison({
  badge,
  title,
  subtitle,
  before,
  after,
  className = '',
}) {
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-400 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              {before.label || 'Without'}
            </div>
            <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              {before.title}
            </h3>
            <ul className="space-y-3">
              {before.points?.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-stone-600 dark:text-stone-400">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-green-lightest to-green-light/30 dark:from-green-dark/20 dark:to-green-dark/5 border border-green-main/20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-green-main text-white text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {after.label || 'With AccountMap'}
            </div>
            <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              {after.title}
            </h3>
            <ul className="space-y-3">
              {after.points?.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-main shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700 dark:text-stone-300">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Numbered Features (step by step with large numbers)
Features.Numbered = function FeaturesNumbered({
  badge,
  title,
  subtitle,
  features = [],
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Large number */}
              <span className="text-8xl font-bold text-green-lightest dark:text-green-dark/20 absolute -top-4 -left-2 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative pt-8 pl-4">
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Export variant list
Features.variants = ['cards', 'simple', 'horizontal', 'centered', 'largeIcons', 'iconList', 'bento'];
Features.subComponents = ['Tabs', 'Accordion', 'Timeline', 'Alternating', 'Showcase', 'Comparison', 'Numbered'];
