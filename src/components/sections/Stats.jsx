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

  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className={`grid gap-8 ${columnClasses[cols] || 'sm:grid-cols-4'}`}
        >
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} variant={variant} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat, variant }) {
  const { value, label, prefix = '', suffix = '', icon: Icon } = stat;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const isNumber = typeof value === 'number';

  if (variant === 'cards') {
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

  // Default variant
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
