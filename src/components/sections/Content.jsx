import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Content({
  badge,
  title,
  subtitle,
  content,
  image,
  imageAlt = '',
  imagePosition = 'right',
  cta,
  ctaSecondary,
  features = [],
  variant = 'default',
  className = '',
}) {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          grid lg:grid-cols-2 gap-12 lg:gap-16 items-center
          ${isImageLeft ? '' : ''}
        `}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isImageLeft ? 'lg:order-2' : ''}
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
            {content && (
              <div className="mt-4 text-stone-600 dark:text-stone-400 prose dark:prose-invert">
                {typeof content === 'string' ? <p>{content}</p> : content}
              </div>
            )}

            {features.length > 0 && (
              <ul className="mt-6 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-green-main" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-stone-700 dark:text-stone-300">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {(cta || ctaSecondary) && (
              <div className="mt-8 flex flex-wrap gap-4">
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
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isImageLeft ? 'lg:order-1' : ''}
          >
            {image && (
              <div className="relative">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full rounded-2xl shadow-xl"
                />
                {/* Optional decorative elements */}
                <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 rounded-2xl bg-green-light/30 dark:bg-green-dark/30" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Alternating content sections
Content.Alternating = function ContentAlternating({
  sections = [],
  className = '',
}) {
  return (
    <div className={className}>
      {sections.map((section, index) => (
        <Content
          key={index}
          {...section}
          imagePosition={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </div>
  );
};

// Full-width content with background image
Content.FullWidth = function ContentFullWidth({
  badge,
  title,
  subtitle,
  cta,
  backgroundImage,
  overlay = true,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section
      className={`relative py-24 sm:py-32 ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-stone-900/70" />
      )}

      <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${alignClasses[align]}`}>
        {badge && (
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-white/20 text-white">
            {badge}
          </span>
        )}
        {title && (
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="mt-8">
            <Button variant="primary" size="large" href={cta.href}>
              {cta.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
