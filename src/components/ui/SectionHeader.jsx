import { motion } from 'framer-motion';
import Button from './Button';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  cta,
  ctaSecondary,
  align = 'center',
  size = 'default',
  animated = true,
  className = '',
  children,
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const sizeClasses = {
    sm: {
      title: 'text-2xl sm:text-3xl',
      subtitle: 'text-base',
      maxWidth: 'max-w-2xl',
    },
    default: {
      title: 'text-3xl sm:text-4xl',
      subtitle: 'text-lg',
      maxWidth: 'max-w-3xl',
    },
    lg: {
      title: 'text-4xl sm:text-5xl',
      subtitle: 'text-xl',
      maxWidth: 'max-w-4xl',
    },
    xl: {
      title: 'text-5xl sm:text-6xl',
      subtitle: 'text-xl',
      maxWidth: 'max-w-4xl',
    },
  };

  const Wrapper = animated ? motion.div : 'div';
  const wrapperProps = animated ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`${alignClasses[align]} ${sizeClasses[size].maxWidth} ${className}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
          {badge}
        </span>
      )}

      {title && (
        <h2 className={`${sizeClasses[size].title} font-bold text-stone-900 dark:text-stone-100 tracking-tight`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 ${sizeClasses[size].subtitle} text-stone-600 dark:text-stone-400`}>
          {subtitle}
        </p>
      )}

      {description && (
        <p className="mt-4 text-stone-600 dark:text-stone-400">
          {description}
        </p>
      )}

      {(cta || ctaSecondary) && (
        <div className={`mt-8 flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : ''}`}>
          {cta && (
            <Button variant="primary" href={cta.href}>
              {cta.text}
            </Button>
          )}
          {ctaSecondary && (
            <Button variant="secondary" href={ctaSecondary.href}>
              {ctaSecondary.text}
            </Button>
          )}
        </div>
      )}

      {children}
    </Wrapper>
  );
}

// With eyebrow text above
SectionHeader.WithEyebrow = function SectionHeaderWithEyebrow({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${alignClasses[align]} ${className}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold text-green-main uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
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
    </motion.div>
  );
};

// With underline accent
SectionHeader.Underline = function SectionHeaderUnderline({
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const lineAlignClasses = {
    left: '',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${alignClasses[align]} ${className}`}
    >
      {title && (
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
          {title}
        </h2>
      )}
      <div className={`mt-4 w-16 h-1 rounded-full bg-green-main ${lineAlignClasses[align]}`} />
      {subtitle && (
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

// With background highlight
SectionHeader.Highlight = function SectionHeaderHighlight({
  title,
  highlightedText,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Split title to add highlight
  const parts = highlightedText && title ? title.split(highlightedText) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${alignClasses[align]} ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
        {highlightedText ? (
          <>
            {parts[0]}
            <span className="relative">
              <span className="relative z-10">{highlightedText}</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-green-light/50 dark:bg-green-dark/50 -z-0" />
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

// With icon
SectionHeader.WithIcon = function SectionHeaderWithIcon({
  icon: Icon,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const iconAlignClasses = {
    left: '',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${alignClasses[align]} ${className}`}
    >
      {Icon && (
        <div className={`w-14 h-14 mb-6 rounded-2xl bg-green-lightest dark:bg-green-dark/20 text-green-dark dark:text-green-light flex items-center justify-center ${iconAlignClasses[align]}`}>
          <Icon className="w-7 h-7" />
        </div>
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
    </motion.div>
  );
};

// Split header (title on left, description on right)
SectionHeader.Split = function SectionHeaderSplit({
  badge,
  title,
  description,
  cta,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-8 items-end ${className}`}
    >
      <div>
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
      </div>
      <div className="lg:text-right">
        {description && (
          <p className="text-stone-600 dark:text-stone-400 lg:max-w-md lg:ml-auto">
            {description}
          </p>
        )}
        {cta && (
          <div className="mt-4">
            <Button variant="primary" href={cta.href}>
              {cta.text}
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// With stats below
SectionHeader.WithStats = function SectionHeaderWithStats({
  badge,
  title,
  subtitle,
  stats = [],
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-4xl ${alignClasses[align]} ${className}`}
    >
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

      {stats.length > 0 && (
        <div className={`mt-8 grid grid-cols-2 sm:grid-cols-${stats.length} gap-8 pt-8 border-t border-stone-200 dark:border-stone-700`}>
          {stats.map((stat, index) => (
            <div key={index} className={align === 'center' ? 'text-center' : ''}>
              <div className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                {stat.value}
              </div>
              <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// Common icons for headers
SectionHeader.Icons = {
  Lightning: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Star: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Sparkles: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Rocket: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m6.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
};
