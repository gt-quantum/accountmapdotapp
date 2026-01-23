import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function HeroSection({
  badge,
  title,
  subtitle,
  cta,
  ctaSecondary,
  image,
  imageAlt = '',
  videoUrl,
  backgroundImage,
  features = [],
  variant = 'centered',
  align = 'center',
  overlay = true,
  className = '',
  children,
}) {
  // Variant: Centered (default)
  if (variant === 'centered') {
    return (
      <section className={`py-20 sm:py-32 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {badge && <HeroBadge>{badge}</HeroBadge>}
            {title && <HeroTitle>{title}</HeroTitle>}
            {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}

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

            {features.length > 0 && <HeroFeatures features={features} centered />}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16"
            >
              <img
                src={image}
                alt={imageAlt}
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}

          {children}
        </div>
      </section>
    );
  }

  // Variant: Split (image on side)
  if (variant === 'split') {
    const isImageLeft = align === 'right';

    return (
      <section className={`py-20 sm:py-32 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isImageLeft ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={isImageLeft ? 'lg:order-2' : ''}
            >
              {badge && <HeroBadge>{badge}</HeroBadge>}
              {title && <HeroTitle align="left">{title}</HeroTitle>}
              {subtitle && <HeroSubtitle align="left">{subtitle}</HeroSubtitle>}

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

              {features.length > 0 && <HeroFeatures features={features} />}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isImageLeft ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={isImageLeft ? 'lg:order-1' : ''}
            >
              {image && (
                <div className="relative">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 rounded-2xl bg-green-light/30 dark:bg-green-dark/30" />
                </div>
              )}
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Variant: With Background Image
  if (variant === 'background') {
    return (
      <section
        className={`relative py-32 sm:py-48 ${className}`}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/20 text-white border border-white/30">
                {badge}
              </span>
            )}
            {title && (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}

            {(cta || ctaSecondary) && (
              <div className="mt-10 flex flex-wrap justify-center gap-4">
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

  // Variant: With Video Background
  if (variant === 'video') {
    return (
      <section className={`relative py-32 sm:py-48 overflow-hidden ${className}`}>
        {/* Video Background */}
        {videoUrl && (
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            {overlay && <div className="absolute inset-0 bg-stone-900/60" />}
          </div>
        )}

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/20 text-white border border-white/30">
                {badge}
              </span>
            )}
            {title && (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}

            {(cta || ctaSecondary) && (
              <div className="mt-10 flex flex-wrap justify-center gap-4">
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

  // Variant: With Phone Mockup
  if (variant === 'phone') {
    return (
      <section className={`py-20 sm:py-32 overflow-hidden ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {badge && <HeroBadge>{badge}</HeroBadge>}
              {title && <HeroTitle align="left">{title}</HeroTitle>}
              {subtitle && <HeroSubtitle align="left">{subtitle}</HeroSubtitle>}

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

              {features.length > 0 && <HeroFeatures features={features} />}
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <PhoneMockup image={image} />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Variant: With Form
  if (variant === 'withForm') {
    return (
      <section className={`py-20 sm:py-32 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {badge && <HeroBadge>{badge}</HeroBadge>}
              {title && <HeroTitle align="left">{title}</HeroTitle>}
              {subtitle && <HeroSubtitle align="left">{subtitle}</HeroSubtitle>}
              {features.length > 0 && <HeroFeatures features={features} />}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroForm cta={cta} />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Variant: Gradient
  if (variant === 'gradient') {
    return (
      <section className={`relative py-32 sm:py-48 bg-gradient-to-br from-green-dark via-green-main to-green-light ${className}`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/20 text-white border border-white/30">
                {badge}
              </span>
            )}
            {title && (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}

            {(cta || ctaSecondary) && (
              <div className="mt-10 flex flex-wrap justify-center gap-4">
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
              <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default fallback to centered
  return (
    <section className={`py-20 sm:py-32 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && <HeroBadge>{badge}</HeroBadge>}
          {title && <HeroTitle>{title}</HeroTitle>}
          {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

// Sub-components
function HeroBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light border border-green-light/50 dark:border-green-dark/50">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      {children}
    </span>
  );
}

function HeroTitle({ children, align = 'center' }) {
  return (
    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight ${align === 'center' ? '' : 'text-left'}`}>
      {children}
    </h1>
  );
}

function HeroSubtitle({ children, align = 'center' }) {
  return (
    <p className={`mt-6 text-xl text-stone-600 dark:text-stone-400 ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
      {children}
    </p>
  );
}

function HeroFeatures({ features, centered = false }) {
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

function HeroForm({ cta }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-green-lightest dark:bg-green-dark/20 text-center">
        <svg className="w-12 h-12 mx-auto mb-4 text-green-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">You're on the list!</h3>
        <p className="mt-2 text-stone-600 dark:text-stone-400">We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl bg-white dark:bg-stone-800 shadow-xl border border-stone-200 dark:border-stone-700">
      <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
        Get early access
      </h3>
      <p className="text-stone-600 dark:text-stone-400 mb-6">
        Join the waitlist and be the first to know when we launch.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="primary" size="large" className="w-full justify-center">
          {cta?.text || 'Join Waitlist'}
        </Button>
      </form>
      <p className="mt-4 text-xs text-stone-500 dark:text-stone-400 text-center">
        No spam, unsubscribe anytime.
      </p>
    </div>
  );
}

function PhoneMockup({ image }) {
  return (
    <div className="relative w-72">
      {/* Phone frame */}
      <div className="relative bg-stone-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="bg-stone-800 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
          {image ? (
            <img src={image} alt="App screenshot" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-light to-green-main flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <p className="font-semibold">Your App</p>
              </div>
            </div>
          )}
        </div>
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-stone-900 rounded-full" />
      </div>
    </div>
  );
}

// Export variants for easy reference
HeroSection.variants = ['centered', 'split', 'background', 'video', 'phone', 'withForm', 'gradient'];
