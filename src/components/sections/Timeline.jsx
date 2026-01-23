import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function Timeline({
  badge,
  title,
  subtitle,
  items = [],
  variant = 'default',
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

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-700 -translate-x-1/2" />

          {items.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              variant={variant}
              isLeft={index % 2 === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, variant, isLeft }) {
  const { title, description, date, icon: Icon, status } = item;

  const statusColors = {
    completed: 'bg-green-main text-white',
    current: 'bg-brass-main text-white ring-4 ring-brass-light dark:ring-brass-dark/30',
    upcoming: 'bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400',
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`
        relative flex items-start gap-6 mb-8 last:mb-0
        sm:flex-row ${isLeft ? 'sm:flex-row-reverse' : ''}
      `}
    >
      {/* Content */}
      <div className={`flex-1 ml-12 sm:ml-0 ${isLeft ? 'sm:text-right sm:pr-12' : 'sm:pl-12'}`}>
        {date && (
          <span className="text-sm text-green-dark dark:text-green-light font-medium">
            {date}
          </span>
        )}
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mt-1">
          {title}
        </h3>
        {description && (
          <p className="text-stone-600 dark:text-stone-400 mt-2">
            {description}
          </p>
        )}
      </div>

      {/* Dot/Icon */}
      <div
        className={`
          absolute left-4 sm:left-1/2 -translate-x-1/2
          w-8 h-8 rounded-full flex items-center justify-center
          ${statusColors[status] || statusColors.completed}
          transition-all duration-300
        `}
      >
        {Icon ? (
          <Icon className="w-4 h-4" />
        ) : (
          <span className="text-xs font-bold">{index + 1}</span>
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden sm:block flex-1" />
    </motion.div>
  );
}

// Steps variant (horizontal)
Timeline.Steps = function TimelineSteps({
  steps = [],
  currentStep = 0,
  className = '',
}) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold
                ${index < currentStep
                  ? 'bg-green-main text-white'
                  : index === currentStep
                    ? 'bg-green-main text-white ring-4 ring-green-light'
                    : 'bg-stone-200 dark:bg-stone-700 text-stone-500'
                }
              `}
            >
              {index < currentStep ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <span className={`mt-2 text-sm ${index <= currentStep ? 'text-stone-900 dark:text-stone-100 font-medium' : 'text-stone-500'}`}>
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`
                flex-1 h-1 mx-4
                ${index < currentStep ? 'bg-green-main' : 'bg-stone-200 dark:bg-stone-700'}
              `}
            />
          )}
        </div>
      ))}
    </div>
  );
};
