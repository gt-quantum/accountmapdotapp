import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function FeatureList({
  badge,
  title,
  subtitle,
  features = [],
  variant = 'alternating',
  className = '',
}) {
  // Variant: Alternating (image alternates sides)
  if (variant === 'alternating') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {(badge || title || subtitle) && (
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
          )}

          {/* Features */}
          <div className="space-y-24">
            {features.map((feature, index) => (
              <AlternatingFeature
                key={index}
                feature={feature}
                index={index}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variant: Stacked (all images on same side)
  if (variant === 'stacked') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {(badge || title || subtitle) && (
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
          )}

          {/* Features */}
          <div className="space-y-24">
            {features.map((feature, index) => (
              <AlternatingFeature
                key={index}
                feature={feature}
                index={index}
                reversed={false}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variant: Centered (image above, content below)
  if (variant === 'centered') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {(badge || title || subtitle) && (
            <div className="text-center mb-16">
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

          {/* Features */}
          <div className="space-y-24">
            {features.map((feature, index) => (
              <CenteredFeature key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variant: Timeline (vertical line connecting features)
  if (variant === 'timeline') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {(badge || title || subtitle) && (
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
          )}

          {/* Timeline Features */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-700" />

            <div className="space-y-12">
              {features.map((feature, index) => (
                <TimelineFeature
                  key={index}
                  feature={feature}
                  index={index}
                  isLast={index === features.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variant: Cards (features in card layout with icons)
  if (variant === 'cards') {
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

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <CardFeature key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variant: Bento (bento grid layout)
  if (variant === 'bento') {
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

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <BentoFeature
                key={index}
                feature={feature}
                index={index}
                isLarge={index === 0 || feature.large}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default fallback to alternating
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <AlternatingFeature
              key={index}
              feature={feature}
              index={index}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-components
function AlternatingFeature({ feature, index, reversed }) {
  const { badge, title, description, image, imageAlt, bullets = [], cta, icon: Icon } = feature;

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? '' : ''}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={reversed ? 'lg:order-2' : ''}
      >
        {Icon && (
          <div className="w-12 h-12 mb-6 rounded-xl bg-green-lightest dark:bg-green-dark/20 text-green-dark dark:text-green-light flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
        )}
        {badge && (
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
            {badge}
          </span>
        )}
        {title && (
          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            {title}
          </h3>
        )}
        {description && (
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
            {description}
          </p>
        )}
        {bullets.length > 0 && (
          <ul className="mt-6 space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5 text-green-main" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-stone-700 dark:text-stone-300">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        {cta && (
          <div className="mt-8">
            <Button variant="primary" href={cta.href}>
              {cta.text}
            </Button>
          </div>
        )}
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={reversed ? 'lg:order-1' : ''}
      >
        {image && (
          <div className="relative">
            <img
              src={image}
              alt={imageAlt || title || ''}
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 rounded-2xl bg-green-light/30 dark:bg-green-dark/30" />
          </div>
        )}
      </motion.div>
    </div>
  );
}

function CenteredFeature({ feature, index }) {
  const { badge, title, description, image, imageAlt, bullets = [], cta } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-center"
    >
      {image && (
        <div className="mb-8">
          <img
            src={image}
            alt={imageAlt || title || ''}
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      )}
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
          {badge}
        </span>
      )}
      {title && (
        <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
          {title}
        </h3>
      )}
      {description && (
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {bullets.length > 0 && (
        <ul className="mt-6 inline-flex flex-wrap justify-center gap-x-8 gap-y-3">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-main" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-stone-700 dark:text-stone-300">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <div className="mt-8">
          <Button variant="primary" href={cta.href}>
            {cta.text}
          </Button>
        </div>
      )}
    </motion.div>
  );
}

function TimelineFeature({ feature, index, isLast }) {
  const { title, description, image, icon: Icon } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-20"
    >
      {/* Dot */}
      <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-green-main border-4 border-white dark:border-stone-900 -translate-x-1/2" />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          {title && (
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-stone-600 dark:text-stone-400">
              {description}
            </p>
          )}
        </div>
        {image && (
          <div>
            <img
              src={image}
              alt={title || ''}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function CardFeature({ feature, index }) {
  const { title, description, image, icon: Icon, cta } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative p-6 rounded-2xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 overflow-hidden"
    >
      {image && (
        <div className="mb-6 -mx-6 -mt-6">
          <img
            src={image}
            alt={title || ''}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      {Icon && !image && (
        <div className="w-12 h-12 mb-4 rounded-xl bg-green-lightest dark:bg-green-dark/20 text-green-dark dark:text-green-light flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
      )}
      {title && (
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-stone-600 dark:text-stone-400">
          {description}
        </p>
      )}
      {cta && (
        <div className="mt-4">
          <a
            href={cta.href}
            className="text-green-dark dark:text-green-light font-medium hover:underline inline-flex items-center gap-1"
          >
            {cta.text}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </motion.div>
  );
}

function BentoFeature({ feature, index, isLarge }) {
  const { title, description, image, icon: Icon, cta } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`
        relative p-6 rounded-2xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 overflow-hidden
        ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
      `}
    >
      {image && isLarge && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title || ''}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-stone-800 to-transparent" />
        </div>
      )}
      <div className={`relative ${isLarge ? 'h-full flex flex-col justify-end' : ''}`}>
        {Icon && (
          <div className="w-10 h-10 mb-4 rounded-lg bg-green-lightest dark:bg-green-dark/20 text-green-dark dark:text-green-light flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
        )}
        {title && (
          <h3 className={`font-bold text-stone-900 dark:text-stone-100 mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
            {title}
          </h3>
        )}
        {description && (
          <p className={`text-stone-600 dark:text-stone-400 ${isLarge ? '' : 'text-sm'}`}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// Export variants
FeatureList.variants = ['alternating', 'stacked', 'centered', 'timeline', 'cards', 'bento'];

// Common icons
FeatureList.Icons = {
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
};
