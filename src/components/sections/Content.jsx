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

// Overlapping content (image overlaps content card)
Content.Overlap = function ContentOverlap({
  badge,
  title,
  subtitle,
  content,
  image,
  imageAlt = '',
  imagePosition = 'right',
  cta,
  className = '',
}) {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Image (positioned behind) */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`lg:absolute lg:top-8 lg:w-1/2 ${isImageLeft ? 'lg:left-0' : 'lg:right-0'}`}
          >
            {image && (
              <img
                src={image}
                alt={imageAlt}
                className="w-full rounded-2xl shadow-xl"
              />
            )}
          </motion.div>

          {/* Content card (overlapping) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative lg:w-2/3 lg:ml-auto ${isImageLeft ? 'lg:ml-0 lg:mr-auto' : ''} mt-8 lg:mt-0`}
          >
            <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 sm:p-12 shadow-2xl border border-stone-200 dark:border-stone-700">
              {badge && (
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
                  {badge}
                </span>
              )}
              {title && (
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
                  {subtitle}
                </p>
              )}
              {content && (
                <div className="mt-4 text-stone-600 dark:text-stone-400">
                  {typeof content === 'string' ? <p>{content}</p> : content}
                </div>
              )}
              {cta && (
                <div className="mt-8">
                  <Button variant="primary" href={cta.href}>
                    {cta.text}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Browser mockup content
Content.Browser = function ContentBrowser({
  badge,
  title,
  subtitle,
  image,
  imageAlt = '',
  url = 'yourapp.com',
  cta,
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
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
          {cta && (
            <div className="mt-6">
              <Button variant="primary" href={cta.href}>
                {cta.text}
              </Button>
            </div>
          )}
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Browser frame */}
          <div className="bg-stone-800 dark:bg-stone-900 rounded-t-xl p-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 max-w-md mx-auto">
              <div className="bg-stone-700 dark:bg-stone-800 rounded-lg px-4 py-1.5 flex items-center gap-2">
                <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm text-stone-400">{url}</span>
              </div>
            </div>
            <div className="w-16" /> {/* Spacer for symmetry */}
          </div>
          <div className="bg-white dark:bg-stone-900 rounded-b-xl overflow-hidden shadow-2xl border-x border-b border-stone-200 dark:border-stone-700">
            {image ? (
              <img src={image} alt={imageAlt} className="w-full" />
            ) : (
              <div className="aspect-video bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-700 flex items-center justify-center">
                <span className="text-stone-400">Screenshot</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Cards layout content
Content.Cards = function ContentCards({
  badge,
  title,
  subtitle,
  cards = [],
  columns = 3,
  className = '',
}) {
  const columnClasses = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
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
        </motion.div>

        {/* Cards */}
        <div className={`grid gap-6 ${columnClasses[columns]}`}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {card.image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title || ''}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-b-2xl">
                {card.tag && (
                  <span className="text-xs font-medium text-green-main uppercase tracking-wider">
                    {card.tag}
                  </span>
                )}
                {card.title && (
                  <h3 className="mt-2 text-lg font-semibold text-stone-900 dark:text-stone-100">
                    {card.title}
                  </h3>
                )}
                {card.description && (
                  <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                    {card.description}
                  </p>
                )}
                {card.cta && (
                  <a
                    href={card.cta.href}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-green-main hover:text-green-dark transition-colors"
                  >
                    {card.cta.text}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Marquee/scrolling content
Content.Marquee = function ContentMarquee({
  items = [],
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) {
  const marqueeItems = [...items, ...items]; // Duplicate for seamless loop

  return (
    <section className={`py-12 overflow-hidden ${className}`}>
      <div
        className={`flex gap-8 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-4 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm"
          >
            {typeof item === 'string' ? (
              <span className="text-stone-700 dark:text-stone-300 whitespace-nowrap">{item}</span>
            ) : (
              item
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

// Center-aligned content with icon
Content.Centered = function ContentCentered({
  icon: Icon,
  badge,
  title,
  subtitle,
  content,
  cta,
  ctaSecondary,
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {Icon && (
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
            <Icon className="w-8 h-8" />
          </div>
        )}
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
          <p className="mt-4 text-xl text-stone-600 dark:text-stone-400">
            {subtitle}
          </p>
        )}
        {content && (
          <div className="mt-6 text-stone-600 dark:text-stone-400 prose dark:prose-invert mx-auto">
            {typeof content === 'string' ? <p>{content}</p> : content}
          </div>
        )}
        {(cta || ctaSecondary) && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
    </section>
  );
};

// Quote/testimonial style content
Content.Quote = function ContentQuote({
  quote,
  author,
  role,
  company,
  avatar,
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <svg
          className="w-12 h-12 mx-auto mb-8 text-green-main/30"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
          "{quote}"
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          {avatar && (
            <img src={avatar} alt={author} className="w-14 h-14 rounded-full object-cover" />
          )}
          <div className="text-left">
            <div className="font-semibold text-stone-900 dark:text-stone-100">{author}</div>
            {(role || company) && (
              <div className="text-stone-600 dark:text-stone-400">
                {role}{role && company && ', '}{company}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Split with list
Content.SplitList = function ContentSplitList({
  badge,
  title,
  subtitle,
  items = [],
  image,
  imageAlt = '',
  imagePosition = 'right',
  cta,
  className = '',
}) {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

            {items.length > 0 && (
              <div className="mt-8 space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 dark:text-stone-100">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
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
