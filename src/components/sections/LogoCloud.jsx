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

export default function LogoCloud({
  badge,
  title,
  subtitle,
  logos = [],
  columns = 5,
  variant = 'default',
  grayscale = true,
  className = '',
}) {
  const columnClasses = {
    3: 'grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  };

  if (variant === 'simple') {
    return (
      <section className={`py-12 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <p className="text-center text-sm font-medium text-stone-500 dark:text-stone-400 mb-8">
              {title}
            </p>
          )}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid gap-8 items-center justify-items-center ${columnClasses[columns]}`}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  ${grayscale ? 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100' : ''}
                  transition-all duration-300
                `}
              >
                {logo.href ? (
                  <a href={logo.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={logo.src}
                      alt={logo.alt || logo.name || 'Partner logo'}
                      className="h-8 sm:h-10 w-auto object-contain"
                    />
                  </a>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.alt || logo.name || 'Partner logo'}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default variant with header
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

        {/* Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid gap-8 sm:gap-12 items-center justify-items-center ${columnClasses[columns]}`}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`
                ${grayscale ? 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100' : ''}
                transition-all duration-300
              `}
            >
              {logo.href ? (
                <a href={logo.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.src}
                    alt={logo.alt || logo.name || 'Partner logo'}
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt || logo.name || 'Partner logo'}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Scrolling/marquee variant
LogoCloud.Marquee = function LogoCloudMarquee({
  logos = [],
  title,
  speed = 30,
  grayscale = true,
  className = '',
}) {
  // Double the logos for seamless loop
  const doubledLogos = [...logos, ...logos];

  return (
    <section className={`py-12 overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <p className="text-center text-sm font-medium text-stone-500 dark:text-stone-400 mb-8">
            {title}
          </p>
        )}
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 items-center"
        >
          {doubledLogos.map((logo, index) => (
            <div
              key={index}
              className={`
                shrink-0
                ${grayscale ? 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100' : ''}
                transition-all duration-300
              `}
            >
              <img
                src={logo.src}
                alt={logo.alt || logo.name || 'Partner logo'}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
