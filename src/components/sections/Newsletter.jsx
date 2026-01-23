import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function Newsletter({
  badge,
  title,
  subtitle,
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  successMessage = 'Thanks for subscribing!',
  variant = 'default',
  onSubmit,
  className = '',
}) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(email);
      } else {
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'minimal') {
    return (
      <section className={`py-12 ${className}`}>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              disabled={isSubmitting || isSubmitted}
              className="flex-1"
            />
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitted ? '✓' : isSubmitting ? '...' : buttonText}
            </Button>
          </form>
        </div>
      </section>
    );
  }

  if (variant === 'card') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-green-dark to-green-darkest text-white text-center"
          >
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-green-light/80 mb-6 max-w-lg mx-auto">
                {subtitle}
              </p>
            )}

            {isSubmitted ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-light font-medium"
              >
                {successMessage}
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                />
                <Button
                  type="submit"
                  variant="outline"
                  disabled={isSubmitting}
                  style={{ backgroundColor: 'white', color: 'var(--green-darkest)' }}
                >
                  {isSubmitting ? 'Subscribing...' : buttonText}
                </Button>
              </form>
            )}
            {error && (
              <p className="mt-3 text-sm text-red-300">{error}</p>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 p-4 rounded-lg bg-green-lightest dark:bg-green-dark/20"
          >
            <p className="text-green-dark dark:text-green-light font-medium">
              {successMessage}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              disabled={isSubmitting}
              containerClassName="flex-1"
            />
            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : buttonText}
            </Button>
          </form>
        )}

        <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
