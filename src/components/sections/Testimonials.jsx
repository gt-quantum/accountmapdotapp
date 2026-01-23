import { motion } from 'framer-motion';
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
  className = '',
}) {
  const columnClasses = {
    1: 'max-w-2xl mx-auto',
    2: 'sm:grid-cols-2 max-w-4xl mx-auto',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
  };

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

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className={`grid gap-6 ${columnClasses[columns]}`}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              variant={variant}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, variant }) {
  const { quote, author, role, company, avatar, rating } = testimonial;

  if (variant === 'simple') {
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

  // Default: cards
  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
    >
      {rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-brass-main' : 'text-stone-200 dark:text-stone-700'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

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
