import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function Banner({
  text,
  cta,
  dismissible = true,
  variant = 'default',
  icon,
  onDismiss,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  const variants = {
    default: 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900',
    primary: 'bg-green-main text-white',
    secondary: 'bg-brass-main text-white',
    gradient: 'bg-gradient-to-r from-green-dark to-green-main text-white',
    warning: 'bg-brass-light text-brass-dark',
    info: 'bg-blue-500 text-white',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`overflow-hidden ${className}`}
        >
          <div className={`${variants[variant]} px-4 py-3`}>
            <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 text-sm">
              {icon && <span className="shrink-0">{icon}</span>}

              <p className="text-center flex-1">
                {text}
                {cta && (
                  <>
                    {' '}
                    <a
                      href={cta.href}
                      className="font-semibold underline underline-offset-2 hover:no-underline"
                    >
                      {cta.text} →
                    </a>
                  </>
                )}
              </p>

              {dismissible && (
                <button
                  onClick={handleDismiss}
                  className="shrink-0 p-1 rounded hover:bg-white/20 transition-colors"
                  aria-label="Dismiss banner"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Floating banner (fixed position)
Banner.Floating = function BannerFloating({
  text,
  cta,
  dismissible = true,
  position = 'bottom',
  variant = 'default',
  onDismiss,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  const positionClasses = {
    top: 'top-4',
    bottom: 'bottom-4',
  };

  const variants = {
    default: 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900',
    primary: 'bg-green-main text-white',
    secondary: 'bg-brass-main text-white',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: position === 'top' ? -20 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === 'top' ? -20 : 20 }}
          className={`
            fixed left-4 right-4 ${positionClasses[position]}
            z-50 mx-auto max-w-2xl
            ${className}
          `}
        >
          <div className={`
            ${variants[variant]}
            px-4 py-3 rounded-xl shadow-xl
            flex items-center justify-between gap-4
          `}>
            <p className="text-sm flex-1">{text}</p>

            <div className="flex items-center gap-3 shrink-0">
              {cta && (
                <a
                  href={cta.href}
                  className="text-sm font-semibold underline underline-offset-2 hover:no-underline"
                >
                  {cta.text}
                </a>
              )}
              {dismissible && (
                <button
                  onClick={handleDismiss}
                  className="p-1 rounded hover:bg-white/20 transition-colors"
                  aria-label="Dismiss"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Cookie consent style banner
Banner.Cookie = function BannerCookie({
  text = 'We use cookies to improve your experience.',
  acceptText = 'Accept',
  declineText = 'Decline',
  learnMoreLink,
  onAccept,
  onDecline,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    setIsVisible(false);
    onDecline?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`
            fixed bottom-4 left-4 right-4 z-50
            mx-auto max-w-lg
            ${className}
          `}
        >
          <div className="bg-white dark:bg-stone-800 rounded-xl shadow-xl border border-stone-200 dark:border-stone-700 p-4">
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
              {text}
              {learnMoreLink && (
                <>
                  {' '}
                  <a href={learnMoreLink} className="underline hover:no-underline">
                    Learn more
                  </a>
                </>
              )}
            </p>
            <div className="flex gap-3">
              <Button variant="primary" size="default" onClick={handleAccept}>
                {acceptText}
              </Button>
              <Button variant="secondary" size="default" onClick={handleDecline}>
                {declineText}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
