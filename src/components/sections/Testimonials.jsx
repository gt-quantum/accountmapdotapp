import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from '../ui/Avatar';

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

export default function Testimonials({
  badge,
  title,
  subtitle,
  testimonials = [],
  columns = 3,
  variant = 'cards',
  autoplay = true,
  autoplayInterval = 5000,
  className = '',
}) {
  const columnClasses = {
    1: 'max-w-2xl mx-auto',
    2: 'sm:grid-cols-2 max-w-4xl mx-auto',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
  };

  // Carousel variant
  if (variant === 'carousel') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <TestimonialCarousel
            testimonials={testimonials}
            autoplay={autoplay}
            autoplayInterval={autoplayInterval}
          />
        </div>
      </section>
    );
  }

  // Wall/Masonry variant
  if (variant === 'wall' || variant === 'masonry') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <TestimonialWall testimonials={testimonials} />
        </div>
      </section>
    );
  }

  // Quote variant (large single quote, rotating)
  if (variant === 'quote') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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

          <TestimonialQuote
            testimonials={testimonials}
            autoplay={autoplay}
            autoplayInterval={autoplayInterval}
          />
        </div>
      </section>
    );
  }

  // Minimal variant
  if (variant === 'minimal') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid gap-8 ${columnClasses[columns]}`}
          >
            {testimonials.map((testimonial, index) => (
              <MinimalTestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Simple variant
  if (variant === 'simple') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid gap-8 ${columnClasses[columns]}`}
          >
            {testimonials.map((testimonial, index) => (
              <SimpleTestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default: cards variant
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className={`grid gap-6 ${columnClasses[columns]}`}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Standard Testimonial Card
function TestimonialCard({ testimonial }) {
  const { quote, author, role, company, avatar, rating } = testimonial;

  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
    >
      {rating && <StarRating rating={rating} />}

      <blockquote className="text-stone-700 dark:text-stone-300 mb-6">
        "{quote}"
      </blockquote>

      <div className="flex items-center gap-3">
        {avatar ? (
          <Avatar src={avatar} name={author} size="md" />
        ) : (
          <Avatar name={author} size="md" />
        )}
        <div>
          <div className="font-semibold text-stone-900 dark:text-stone-100">{author}</div>
          {(role || company) && (
            <div className="text-sm text-stone-600 dark:text-stone-400">
              {role}{role && company && ' at '}{company}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Simple (text-centered) Testimonial Card
function SimpleTestimonialCard({ testimonial }) {
  const { quote, author, role, company, avatar } = testimonial;

  return (
    <motion.div variants={itemVariants} className="text-center">
      <blockquote className="text-lg text-stone-700 dark:text-stone-300 italic mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center justify-center gap-3">
        {avatar && <Avatar src={avatar} name={author} size="md" />}
        <div className="text-left">
          <div className="font-semibold text-stone-900 dark:text-stone-100">{author}</div>
          {(role || company) && (
            <div className="text-sm text-stone-600 dark:text-stone-400">
              {role}{role && company && ', '}{company}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Minimal Testimonial Card
function MinimalTestimonialCard({ testimonial }) {
  const { quote, author, role, company, avatar, logo } = testimonial;

  return (
    <motion.div variants={itemVariants} className="relative">
      {/* Quote icon */}
      <svg
        className="absolute -top-2 -left-2 w-8 h-8 text-green-main/20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <blockquote className="text-stone-700 dark:text-stone-300 pl-6 mb-4">
        {quote}
      </blockquote>

      <div className="flex items-center justify-between pl-6">
        <div className="flex items-center gap-3">
          {avatar ? (
            <Avatar src={avatar} name={author} size="sm" />
          ) : (
            <Avatar name={author} size="sm" />
          )}
          <div>
            <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">{author}</div>
            {(role || company) && (
              <div className="text-xs text-stone-500 dark:text-stone-400">
                {role}{role && company && ', '}{company}
              </div>
            )}
          </div>
        </div>
        {logo && (
          <img src={logo} alt={company} className="h-6 opacity-50 grayscale" />
        )}
      </div>
    </motion.div>
  );
}

// Testimonial Carousel
function TestimonialCarousel({ testimonials, autoplay, autoplayInterval }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, nextSlide]);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Quote icon */}
            <svg
              className="w-12 h-12 mx-auto mb-6 text-green-main/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="text-xl sm:text-2xl text-stone-700 dark:text-stone-300 max-w-3xl mx-auto mb-8">
              "{testimonial.quote}"
            </blockquote>

            {testimonial.rating && (
              <div className="flex justify-center mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
            )}

            <div className="flex items-center justify-center gap-4">
              {testimonial.avatar ? (
                <Avatar src={testimonial.avatar} name={testimonial.author} size="lg" />
              ) : (
                <Avatar name={testimonial.author} size="lg" />
              )}
              <div className="text-left">
                <div className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  {testimonial.author}
                </div>
                {(testimonial.role || testimonial.company) && (
                  <div className="text-stone-600 dark:text-stone-400">
                    {testimonial.role}{testimonial.role && testimonial.company && ', '}{testimonial.company}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5 text-stone-600 dark:text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-green-main'
                  : 'bg-stone-300 dark:bg-stone-600 hover:bg-stone-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5 text-stone-600 dark:text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Testimonial Wall (Masonry)
function TestimonialWall({ testimonials }) {
  // Split testimonials into columns
  const cols = 3;
  const columns = Array.from({ length: cols }, () => []);
  testimonials.forEach((testimonial, index) => {
    columns[index % cols].push(testimonial);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="space-y-4">
          {column.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (colIndex * column.length + index) * 0.05 }}
              className="p-5 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
            >
              {testimonial.rating && <StarRating rating={testimonial.rating} size="sm" />}
              <blockquote className="text-sm text-stone-700 dark:text-stone-300 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-2">
                {testimonial.avatar ? (
                  <Avatar src={testimonial.avatar} name={testimonial.author} size="sm" />
                ) : (
                  <Avatar name={testimonial.author} size="sm" />
                )}
                <div>
                  <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                    {testimonial.author}
                  </div>
                  {(testimonial.role || testimonial.company) && (
                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      {testimonial.role}{testimonial.role && testimonial.company && ', '}{testimonial.company}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

// Large Quote Testimonial (rotating)
function TestimonialQuote({ testimonials, autoplay, autoplayInterval }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, nextSlide]);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Large quote marks */}
          <svg
            className="w-16 h-16 mx-auto mb-8 text-green-main/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900 dark:text-stone-100 leading-relaxed mb-8">
            "{testimonial.quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            {testimonial.avatar ? (
              <Avatar src={testimonial.avatar} name={testimonial.author} size="xl" />
            ) : (
              <Avatar name={testimonial.author} size="xl" />
            )}
            <div className="text-left">
              <div className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                {testimonial.author}
              </div>
              {(testimonial.role || testimonial.company) && (
                <div className="text-lg text-stone-600 dark:text-stone-400">
                  {testimonial.role}{testimonial.role && testimonial.company && ', '}{testimonial.company}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-green-main'
                  : 'bg-stone-300 dark:bg-stone-600 hover:bg-stone-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Star Rating Component
function StarRating({ rating, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${sizeClasses[size]} ${i < rating ? 'text-brass-main' : 'text-stone-200 dark:text-stone-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Featured testimonial (single, large)
Testimonials.Featured = function TestimonialFeatured({
  testimonial,
  className = '',
}) {
  const { quote, author, role, company, avatar } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-center max-w-4xl mx-auto py-16 ${className}`}
    >
      <svg
        className="w-12 h-12 mx-auto mb-6 text-green-main/20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <blockquote className="text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100 leading-relaxed mb-8">
        "{quote}"
      </blockquote>

      <div className="flex items-center justify-center gap-4">
        {avatar ? (
          <Avatar src={avatar} name={author} size="lg" />
        ) : (
          <Avatar name={author} size="lg" />
        )}
        <div className="text-left">
          <div className="text-lg font-semibold text-stone-900 dark:text-stone-100">{author}</div>
          {(role || company) && (
            <div className="text-stone-600 dark:text-stone-400">
              {role}{role && company && ', '}{company}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Marquee/Scrolling Testimonials
Testimonials.Marquee = function TestimonialsMarquee({
  testimonials = [],
  speed = 40,
  pauseOnHover = true,
  className = '',
}) {
  // Duplicate testimonials for seamless loop
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className={`py-16 sm:py-24 overflow-hidden ${className}`}>
      <div
        className={`flex gap-6 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {duplicated.map((testimonial, index) => (
          <div
            key={index}
            className="shrink-0 w-[350px] p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
          >
            {testimonial.rating && <StarRating rating={testimonial.rating} size="sm" />}
            <blockquote className="text-stone-700 dark:text-stone-300 mb-4 line-clamp-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              {testimonial.avatar ? (
                <Avatar src={testimonial.avatar} name={testimonial.author} size="sm" />
              ) : (
                <Avatar name={testimonial.author} size="sm" />
              )}
              <div>
                <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                  {testimonial.author}
                </div>
                {(testimonial.role || testimonial.company) && (
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    {testimonial.role}{testimonial.role && testimonial.company && ', '}{testimonial.company}
                  </div>
                )}
              </div>
            </div>
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

// Split Layout (featured + grid)
Testimonials.Split = function TestimonialsSplit({
  badge,
  title,
  subtitle,
  featured,
  testimonials = [],
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured testimonial */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-green-main to-green-dark text-white"
            >
              <svg
                className="w-12 h-12 mb-6 text-white/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                "{featured.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                {featured.avatar ? (
                  <Avatar src={featured.avatar} name={featured.author} size="lg" />
                ) : (
                  <Avatar name={featured.author} size="lg" />
                )}
                <div>
                  <div className="font-semibold text-lg">{featured.author}</div>
                  {(featured.role || featured.company) && (
                    <div className="text-white/70">
                      {featured.role}{featured.role && featured.company && ', '}{featured.company}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of smaller testimonials */}
          <div className="grid gap-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
              >
                <blockquote className="text-stone-700 dark:text-stone-300 mb-3 line-clamp-2">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-2">
                  {testimonial.avatar ? (
                    <Avatar src={testimonial.avatar} name={testimonial.author} size="sm" />
                  ) : (
                    <Avatar name={testimonial.author} size="sm" />
                  )}
                  <div>
                    <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                      {testimonial.author}
                    </div>
                    {testimonial.company && (
                      <div className="text-xs text-stone-500">{testimonial.company}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Testimonials
Testimonials.Video = function TestimonialsVideo({
  badge,
  title,
  subtitle,
  testimonials = [],
  className = '',
}) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setActiveVideo(index)}
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-stone-100 dark:bg-stone-800 relative">
                {testimonial.thumbnail ? (
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {testimonial.avatar ? (
                      <Avatar src={testimonial.avatar} name={testimonial.author} size="xl" />
                    ) : (
                      <Avatar name={testimonial.author} size="xl" />
                    )}
                  </div>
                )}
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-green-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-4 bg-white dark:bg-stone-800">
                <div className="font-semibold text-stone-900 dark:text-stone-100">
                  {testimonial.author}
                </div>
                {(testimonial.role || testimonial.company) && (
                  <div className="text-sm text-stone-500 dark:text-stone-400">
                    {testimonial.role}{testimonial.role && testimonial.company && ', '}{testimonial.company}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video modal */}
        <AnimatePresence>
          {activeVideo !== null && testimonials[activeVideo]?.videoUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full aspect-video bg-black rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={testimonials[activeVideo].videoUrl}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Logos + Testimonials (company-focused)
Testimonials.Logos = function TestimonialsLogos({
  title,
  testimonials = [],
  className = '',
}) {
  return (
    <section className={`py-16 sm:py-24 bg-stone-50 dark:bg-stone-900/50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-center text-xl font-medium text-stone-600 dark:text-stone-400 mb-12">
            {title}
          </h2>
        )}

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mb-16"
        >
          {testimonials.filter(t => t.logo).map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.logo}
              alt={testimonial.company}
              className="h-8 lg:h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700"
            >
              {testimonial.logo && (
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="h-6 mb-4 grayscale"
                />
              )}
              <blockquote className="text-stone-700 dark:text-stone-300 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                {testimonial.avatar ? (
                  <Avatar src={testimonial.avatar} name={testimonial.author} size="sm" />
                ) : (
                  <Avatar name={testimonial.author} size="sm" />
                )}
                <div>
                  <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-stone-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Highlight Style (with colored highlight in text)
Testimonials.Highlight = function TestimonialsHighlight({
  testimonial,
  highlightColor = 'green',
  className = '',
}) {
  const colorClasses = {
    green: 'bg-green-lightest text-green-dark dark:bg-green-dark/30 dark:text-green-light',
    brass: 'bg-brass-light/30 text-brass-dark dark:bg-brass-dark/30 dark:text-brass-light',
  };

  // Simple highlight: wrap text in ** ** to highlight
  const renderQuote = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return (
          <mark key={i} className={`px-1 rounded ${colorClasses[highlightColor]}`}>
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-4xl mx-auto py-16 text-center ${className}`}
    >
      <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900 dark:text-stone-100 leading-relaxed mb-8">
        "{renderQuote(testimonial.quote)}"
      </blockquote>
      <div className="flex items-center justify-center gap-4">
        {testimonial.avatar ? (
          <Avatar src={testimonial.avatar} name={testimonial.author} size="lg" />
        ) : (
          <Avatar name={testimonial.author} size="lg" />
        )}
        <div className="text-left">
          <div className="text-lg font-semibold text-stone-900 dark:text-stone-100">
            {testimonial.author}
          </div>
          {(testimonial.role || testimonial.company) && (
            <div className="text-stone-600 dark:text-stone-400">
              {testimonial.role}{testimonial.role && testimonial.company && ', '}{testimonial.company}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Export variant list
Testimonials.variants = ['cards', 'simple', 'minimal', 'carousel', 'wall', 'quote'];
Testimonials.subComponents = ['Featured', 'Marquee', 'Split', 'Video', 'Logos', 'Highlight'];
