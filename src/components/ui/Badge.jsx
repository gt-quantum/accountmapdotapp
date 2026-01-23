import { motion } from 'framer-motion';

const variants = {
  default: 'bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-200',
  success: 'bg-green-lightest text-green-darkest dark:bg-green-dark/20 dark:text-green-light',
  warning: 'bg-brass-light text-brass-dark dark:bg-brass-dark/20 dark:text-brass-light',
  error: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  info: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  animated = false,
  className = '',
  ...props
}) {
  const Component = animated ? motion.span : 'span';
  const animationProps = animated ? {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 500, damping: 30 }
  } : {};

  return (
    <Component
      className={`
        inline-flex items-center gap-1.5 font-medium rounded-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...animationProps}
      {...props}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${
          variant === 'success' ? 'bg-green-main' :
          variant === 'warning' ? 'bg-brass-main' :
          variant === 'error' ? 'bg-red-500' :
          variant === 'info' ? 'bg-blue-500' :
          'bg-stone-500'
        }`} />
      )}
      {children}
    </Component>
  );
}
