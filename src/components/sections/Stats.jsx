import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

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

export default function Stats({
  badge,
  title,
  subtitle,
  stats = [],
  variant = 'default',
  columns,
  className = '',
}) {
  const cols = columns || stats.length;
  const columnClasses = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
    5: 'sm:grid-cols-3 lg:grid-cols-5',
    6: 'sm:grid-cols-3 lg:grid-cols-6',
  };

  // Cards variant
  if (variant === 'cards') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {(badge || title || subtitle) && (
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
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid gap-6 ${columnClasses[cols] || 'sm:grid-cols-4'}`}
          >
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // With icons variant
  if (variant === 'icons' || variant === 'withIcons') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {(badge || title || subtitle) && (
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
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid gap-8 ${columnClasses[cols] || 'sm:grid-cols-4'}`}
          >
            {stats.map((stat, index) => (
              <StatWithIcon key={index} stat={stat} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // With trend indicators variant
  if (variant === 'trends' || variant === 'withTrends') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {(badge || title || subtitle) && (
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
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid gap-6 ${columnClasses[cols] || 'sm:grid-cols-4'}`}
          >
            {stats.map((stat, index) => (
              <StatWithTrend key={index} stat={stat} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Progress bars variant
  if (variant === 'progress' || variant === 'progressBars') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {(badge || title || subtitle) && (
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
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <StatWithProgress key={index} stat={stat} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Dark/highlight variant
  if (variant === 'dark' || variant === 'highlight') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-stone-900 dark:bg-stone-800 p-8 sm:p-12">
            {(badge || title || subtitle) && (
              <div className="text-center max-w-3xl mx-auto mb-12">
                {badge && (
                  <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-main/20 text-green-light">
                    {badge}
                  </span>
                )}
                {title && (
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="mt-4 text-lg text-stone-400">
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid gap-8 ${columnClasses[cols] || 'sm:grid-cols-4'}`}
            >
              {stats.map((stat, index) => (
                <DarkStatItem key={index} stat={stat} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Inline/compact variant
  if (variant === 'inline' || variant === 'compact') {
    return (
      <section className={`py-12 border-y border-stone-200 dark:border-stone-700 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16"
          >
            {stats.map((stat, index) => (
              <InlineStatItem key={index} stat={stat} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(badge || title || subtitle) && (
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
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className={`grid gap-8 ${columnClasses[cols] || 'sm:grid-cols-4'}`}
        >
          {stats.map((stat, index) => (
            <DefaultStatItem key={index} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Default Stat Item
function DefaultStatItem({ stat }) {
  const { value, label, prefix = '', suffix = '' } = stat;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isNumber = typeof value === 'number';

  return (
    <motion.div ref={ref} variants={itemVariants} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-2">
        {prefix}
        {isNumber ? <AnimatedNumber value={value} isInView={isInView} /> : value}
        {suffix}
      </div>
      <div className="text-stone-600 dark:text-stone-400">{label}</div>
    </motion.div>
  );
}

// Stat Card
function StatCard({ stat }) {
  const { value, label, prefix = '', suffix = '', icon: Icon } = stat;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isNumber = typeof value === 'number';

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-center"
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-1">
        {prefix}
        {isNumber ? <AnimatedNumber value={value} isInView={isInView} /> : value}
        {suffix}
      </div>
      <div className="text-sm text-stone-600 dark:text-stone-400">{label}</div>
    </motion.div>
  );
}

// Stat with Icon
function StatWithIcon({ stat }) {
  const { value, label, prefix = '', suffix = '', icon: Icon, description } = stat;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isNumber = typeof value === 'number';

  return (
    <motion.div ref={ref} variants={itemVariants} className="flex items-start gap-4">
      {Icon && (
        <div className="shrink-0 w-14 h-14 rounded-xl bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light flex items-center justify-center">
          <Icon className="w-7 h-7" />
        </div>
      )}
      <div>
        <div className="text-3xl font-bold text-stone-900 dark:text-stone-100">
          {prefix}
          {isNumber ? <AnimatedNumber value={value} isInView={isInView} /> : value}
          {suffix}
        </div>
        <div className="text-stone-900 dark:text-stone-100 font-medium">{label}</div>
        {description && (
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

// Stat with Trend Indicator
function StatWithTrend({ stat }) {
  const { value, label, prefix = '', suffix = '', trend, trendValue } = stat;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isNumber = typeof value === 'number';

  const trendUp = trend === 'up';
  const trendDown = trend === 'down';

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-stone-500 dark:text-stone-400">{label}</span>
        {trend && (
          <span className={`
            flex items-center gap-1 text-sm font-medium px-2 py-0.5 rounded-full
            ${trendUp ? 'bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light' : ''}
            ${trendDown ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' : ''}
          `}>
            {trendUp && (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {trendDown && (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {trendValue}
          </span>
        )}
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
        {prefix}
        {isNumber ? <AnimatedNumber value={value} isInView={isInView} /> : value}
        {suffix}
      </div>
    </motion.div>
  );
}

// Stat with Progress Bar
function StatWithProgress({ stat }) {
  const { value, label, prefix = '', suffix = '', progress, maxProgress = 100, color = 'green' } = stat;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isNumber = typeof value === 'number';

  const progressPercent = progress !== undefined ? (progress / maxProgress) * 100 : 0;

  const colorClasses = {
    green: 'bg-green-main',
    blue: 'bg-blue-500',
    brass: 'bg-brass-main',
    red: 'bg-red-500',
  };

  return (
    <motion.div ref={ref} variants={itemVariants}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-stone-900 dark:text-stone-100">{label}</span>
        <span className="text-2xl font-bold text-stone-900 dark:text-stone-100">
          {prefix}
          {isNumber ? <AnimatedNumber value={value} isInView={isInView} /> : value}
          {suffix}
        </span>
      </div>
      <div className="h-3 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${colorClasses[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${progressPercent}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

// Dark Stat Item
function DarkStatItem({ stat }) {
  const { value, label, prefix = '', suffix = '', icon: Icon } = stat;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isNumber = typeof value === 'number';

  return (
    <motion.div ref={ref} variants={itemVariants} className="text-center">
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-green-main/20 text-green-light">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
        {prefix}
        {isNumber ? <AnimatedNumber value={value} isInView={isInView} /> : value}
        {suffix}
      </div>
      <div className="text-stone-400">{label}</div>
    </motion.div>
  );
}

// Inline Stat Item
function InlineStatItem({ stat }) {
  const { value, label, prefix = '', suffix = '' } = stat;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isNumber = typeof value === 'number';

  return (
    <motion.div ref={ref} variants={itemVariants} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
        {prefix}
        {isNumber ? <AnimatedNumber value={value} isInView={isInView} /> : value}
        {suffix}
      </div>
      <div className="text-sm text-stone-600 dark:text-stone-400">{label}</div>
    </motion.div>
  );
}

// Animated Number Component
function AnimatedNumber({ value, isInView }) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const ref = useRef(null);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString();
      }
    });
    return unsubscribe;
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

// Pre-built icons for stats
Stats.Icons = {
  Users: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Chart: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Globe: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Clock: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Star: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Building: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

// Export variant list
Stats.variants = ['default', 'cards', 'icons', 'trends', 'progress', 'dark', 'inline'];
