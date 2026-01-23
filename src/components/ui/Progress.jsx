import { motion } from 'framer-motion';

const sizes = {
  xs: 'h-1',
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
  xl: 'h-6',
};

const variants = {
  default: 'bg-stone-600 dark:bg-stone-400',
  primary: 'bg-green-main',
  secondary: 'bg-brass-main',
  success: 'bg-green-main',
  warning: 'bg-brass-main',
  error: 'bg-red-500',
  info: 'bg-blue-500',
};

export default function Progress({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'primary',
  showValue = false,
  animated = true,
  striped = false,
  indeterminate = false,
  label,
  className = '',
  ...props
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full ${className}`} {...props}>
      {(label || showValue) && (
        <div className="flex justify-between mb-1">
          {label && (
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm text-stone-600 dark:text-stone-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div
        className={`
          w-full rounded-full overflow-hidden
          bg-stone-200 dark:bg-stone-700
          ${sizes[size]}
        `}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        {indeterminate ? (
          <motion.div
            className={`h-full w-1/3 rounded-full ${variants[variant]}`}
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ) : (
          <motion.div
            className={`
              h-full rounded-full
              ${variants[variant]}
              ${striped ? 'bg-stripes' : ''}
            `}
            initial={animated ? { width: 0 } : false}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}
      </div>
    </div>
  );
}

// Radial/Circular progress
Progress.Radial = function ProgressRadial({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'primary',
  showValue = true,
  strokeWidth,
  className = '',
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    sm: { width: 48, stroke: 4 },
    md: { width: 64, stroke: 6 },
    lg: { width: 96, stroke: 8 },
    xl: { width: 128, stroke: 10 },
  };

  const config = sizes[size];
  const actualStroke = strokeWidth || config.stroke;
  const radius = (config.width - actualStroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const variantColors = {
    default: 'stroke-stone-600 dark:stroke-stone-400',
    primary: 'stroke-green-main',
    secondary: 'stroke-brass-main',
    success: 'stroke-green-main',
    warning: 'stroke-brass-main',
    error: 'stroke-red-500',
    info: 'stroke-blue-500',
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={config.width}
        height={config.width}
        className="-rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={config.width / 2}
          cy={config.width / 2}
          r={radius}
          strokeWidth={actualStroke}
          className="fill-none stroke-stone-200 dark:stroke-stone-700"
        />
        {/* Progress circle */}
        <motion.circle
          cx={config.width / 2}
          cy={config.width / 2}
          r={radius}
          strokeWidth={actualStroke}
          strokeLinecap="round"
          className={`fill-none ${variantColors[variant]}`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      {showValue && (
        <span className="absolute text-sm font-semibold text-stone-700 dark:text-stone-300">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
};

// Steps progress
Progress.Steps = function ProgressSteps({
  steps = [],
  currentStep = 0,
  variant = 'primary',
  className = '',
}) {
  return (
    <div className={`flex items-center w-full ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-1 last:flex-none">
          {/* Step circle */}
          <div
            className={`
              w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm
              transition-colors
              ${index < currentStep
                ? 'bg-green-main text-white'
                : index === currentStep
                  ? 'bg-green-main text-white ring-4 ring-green-light dark:ring-green-dark/30'
                  : 'bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400'
              }
            `}
          >
            {index < currentStep ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              index + 1
            )}
          </div>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div
              className={`
                flex-1 h-1 mx-2
                ${index < currentStep
                  ? 'bg-green-main'
                  : 'bg-stone-200 dark:bg-stone-700'
                }
              `}
            />
          )}
        </div>
      ))}
    </div>
  );
};
