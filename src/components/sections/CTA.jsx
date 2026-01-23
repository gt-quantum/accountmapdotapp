import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function CTA({
  badge,
  title,
  subtitle,
  cta,
  ctaSecondary,
  features = [],
  image,
  imageAlt = '',
  backgroundImage,
  variant = 'simple',
  align = 'center',
  overlay = true,
  className = '',
}) {
  // Variant: Simple (centered text + buttons)
  if (variant === 'simple') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {badge && <CTABadge>{badge}</CTABadge>}
            {title && <CTATitle>{title}</CTATitle>}
            {subtitle && <CTASubtitle>{subtitle}</CTASubtitle>}

            {(cta || ctaSecondary) && (
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {cta && (
                  <Button variant="primary" size="large" href={cta.href}>
                    {cta.text}
                  </Button>
                )}
                {ctaSecondary && (
                  <Button variant="secondary" size="large" href={ctaSecondary.href}>
                    {ctaSecondary.text}
                  </Button>
                )}
              </div>
            )}

            {features.length > 0 && <CTAFeatures features={features} centered />}
          </motion.div>
        </div>
      </section>
    );
  }

  // Variant: Stacked (on dark panel)
  if (variant === 'stacked') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-stone-900 dark:bg-stone-100 px-8 py-16 sm:px-16 text-center"
          >
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute left-0 top-0 h-full" viewBox="0 0 400 400">
                <defs>
                  <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="2" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>

            <div className="relative">
              {badge && (
                <span className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-green-main/20 text-green-light">
                  {badge}
                </span>
              )}
              {title && (
                <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-stone-900 tracking-tight">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-4 text-lg text-stone-300 dark:text-stone-600 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}

              {(cta || ctaSecondary) && (
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {cta && (
                    <Button variant="primary" size="large" href={cta.href}>
                      {cta.text}
                    </Button>
                  )}
                  {ctaSecondary && (
                    <Button variant="outline" size="large" href={ctaSecondary.href} className="!border-white/30 !text-white dark:!border-stone-300 dark:!text-stone-900 hover:!bg-white/10">
                      {ctaSecondary.text}
                    </Button>
                  )}
                </div>
              )}

              {features.length > 0 && (
                <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-stone-300 dark:text-stone-600">
                      <svg className="w-4 h-4 text-green-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Variant: Split (with image on side)
  if (variant === 'split') {
    const isImageLeft = align === 'right';

    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isImageLeft ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={isImageLeft ? 'lg:order-2' : ''}
            >
              {badge && <CTABadge>{badge}</CTABadge>}
              {title && <CTATitle align="left">{title}</CTATitle>}
              {subtitle && <CTASubtitle align="left">{subtitle}</CTASubtitle>}

              {(cta || ctaSecondary) && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {cta && (
                    <Button variant="primary" size="large" href={cta.href}>
                      {cta.text}
                    </Button>
                  )}
                  {ctaSecondary && (
                    <Button variant="secondary" size="large" href={ctaSecondary.href}>
                      {ctaSecondary.text}
                    </Button>
                  )}
                </div>
              )}

              {features.length > 0 && <CTAFeatures features={features} />}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isImageLeft ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={isImageLeft ? 'lg:order-1' : ''}
            >
              {image && (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full rounded-2xl shadow-xl"
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Variant: Background Image
  if (variant === 'background') {
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {badge && (
              <span className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/20 text-white">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}

            {(cta || ctaSecondary) && (
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {cta && (
                  <Button variant="primary" size="large" href={cta.href}>
                    {cta.text}
                  </Button>
                )}
                {ctaSecondary && (
                  <Button variant="outline" size="large" href={ctaSecondary.href} className="!border-white !text-white hover:!bg-white/10">
                    {ctaSecondary.text}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Variant: Gradient
  if (variant === 'gradient') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-dark to-green-main px-8 py-16 sm:px-16 text-center"
          >
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/10" />

            <div className="relative">
              {badge && (
                <span className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/20 text-white">
                  {badge}
                </span>
              )}
              {title && (
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}

              {(cta || ctaSecondary) && (
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {cta && (
                    <Button variant="secondary" size="large" href={cta.href} className="!bg-white !text-green-dark hover:!bg-stone-100">
                      {cta.text}
                    </Button>
                  )}
                  {ctaSecondary && (
                    <Button variant="outline" size="large" href={ctaSecondary.href} className="!border-white !text-white hover:!bg-white/10">
                      {ctaSecondary.text}
                    </Button>
                  )}
                </div>
              )}

              {features.length > 0 && (
                <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Variant: Banner (full-width minimal)
  if (variant === 'banner') {
    return (
      <section className={`py-8 bg-stone-900 dark:bg-stone-100 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {badge && (
                <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-green-main text-white">
                  {badge}
                </span>
              )}
              <p className="text-white dark:text-stone-900 text-center sm:text-left">
                {title}
                {subtitle && <span className="text-stone-400 dark:text-stone-600 ml-2">{subtitle}</span>}
              </p>
            </div>
            {cta && (
              <Button variant="primary" size="default" href={cta.href} className="shrink-0">
                {cta.text}
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Variant: With Newsletter Form
  if (variant === 'newsletter') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {badge && <CTABadge>{badge}</CTABadge>}
            {title && <CTATitle>{title}</CTATitle>}
            {subtitle && <CTASubtitle>{subtitle}</CTASubtitle>}

            <CTANewsletterForm buttonText={cta?.text} />

            {features.length > 0 && <CTAFeatures features={features} centered />}
          </motion.div>
        </div>
      </section>
    );
  }

  // Variant: Two Column
  if (variant === 'twoColumn') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Title and Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {badge && <CTABadge>{badge}</CTABadge>}
              {title && <CTATitle align="left">{title}</CTATitle>}
              {subtitle && <CTASubtitle align="left">{subtitle}</CTASubtitle>}
            </motion.div>

            {/* Right - Buttons and Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:text-right"
            >
              {(cta || ctaSecondary) && (
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  {cta && (
                    <Button variant="primary" size="large" href={cta.href}>
                      {cta.text}
                    </Button>
                  )}
                  {ctaSecondary && (
                    <Button variant="secondary" size="large" href={ctaSecondary.href}>
                      {ctaSecondary.text}
                    </Button>
                  )}
                </div>
              )}

              {features.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                      <svg className="w-4 h-4 text-green-main" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Default fallback to simple
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && <CTABadge>{badge}</CTABadge>}
        {title && <CTATitle>{title}</CTATitle>}
        {subtitle && <CTASubtitle>{subtitle}</CTASubtitle>}
        {(cta || ctaSecondary) && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {cta && (
              <Button variant="primary" size="large" href={cta.href}>
                {cta.text}
              </Button>
            )}
            {ctaSecondary && (
              <Button variant="secondary" size="large" href={ctaSecondary.href}>
                {ctaSecondary.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Sub-components
function CTABadge({ children }) {
  return (
    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
      {children}
    </span>
  );
}

function CTATitle({ children, align = 'center' }) {
  return (
    <h2 className={`text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight ${align === 'left' ? 'text-left' : ''}`}>
      {children}
    </h2>
  );
}

function CTASubtitle({ children, align = 'center' }) {
  return (
    <p className={`mt-4 text-lg text-stone-600 dark:text-stone-400 ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`}>
      {children}
    </p>
  );
}

function CTAFeatures({ features, centered = false }) {
  return (
    <div className={`mt-8 flex flex-wrap gap-x-6 gap-y-3 ${centered ? 'justify-center' : ''}`}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
          <svg className="w-4 h-4 text-green-main" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}

function CTANewsletterForm({ buttonText = 'Subscribe' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-8 p-4 rounded-lg bg-green-lightest dark:bg-green-dark/20 text-green-dark dark:text-green-light">
        Thanks for subscribing! Check your inbox to confirm.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button type="submit" variant="primary" size="large">
        {buttonText}
      </Button>
    </form>
  );
}

// Export variants for reference
CTA.variants = ['simple', 'stacked', 'split', 'background', 'gradient', 'banner', 'newsletter', 'twoColumn'];
