import { motion } from 'framer-motion';

const sizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

const variants = {
  default: 'border-stone-300 border-t-stone-600 dark:border-stone-600 dark:border-t-stone-300',
  primary: 'border-green-light border-t-green-main',
  secondary: 'border-brass-light border-t-brass-main',
  white: 'border-white/30 border-t-white',
};

export default function Spinner({
  size = 'md',
  variant = 'default',
  label,
  className = '',
  ...props
}) {
  return (
    <div
      role="status"
      className={`inline-flex flex-col items-center gap-2 ${className}`}
      {...props}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className={`
          rounded-full border-2
          ${sizes[size]}
          ${variants[variant]}
        `}
      />
      {label && (
        <span className="text-sm text-stone-600 dark:text-stone-400">{label}</span>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Dots variant
Spinner.Dots = function SpinnerDots({ size = 'md', variant = 'default', className = '' }) {
  const dotSizes = {
    xs: 'w-1 h-1',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
  };

  const dotColors = {
    default: 'bg-stone-600 dark:bg-stone-400',
    primary: 'bg-green-main',
    secondary: 'bg-brass-main',
    white: 'bg-white',
  };

  return (
    <div className={`inline-flex items-center gap-1 ${className}`} role="status">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
          }}
          className={`rounded-full ${dotSizes[size]} ${dotColors[variant]}`}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Pulse variant
Spinner.Pulse = function SpinnerPulse({ size = 'md', variant = 'primary', className = '' }) {
  const pulseSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const pulseColors = {
    default: 'bg-stone-500',
    primary: 'bg-green-main',
    secondary: 'bg-brass-main',
    white: 'bg-white',
  };

  return (
    <div className={`relative inline-flex ${className}`} role="status">
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className={`absolute rounded-full ${pulseSizes[size]} ${pulseColors[variant]}`}
      />
      <div className={`rounded-full ${pulseSizes[size]} ${pulseColors[variant]}`} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
