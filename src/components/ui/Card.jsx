import { motion } from 'framer-motion';

const variants = {
  default: 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700',
  elevated: 'bg-white dark:bg-stone-800 shadow-card hover:shadow-card-hover',
  outlined: 'bg-transparent border-2 border-stone-300 dark:border-stone-600',
  ghost: 'bg-stone-100/50 dark:bg-stone-800/50',
};

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  rounded = 'lg',
  animated = false,
  hover = false,
  className = '',
  onClick,
  ...props
}) {
  const Component = animated ? motion.div : 'div';

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
  };

  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  } : {};

  const hoverProps = hover ? {
    whileHover: { y: -4, transition: { duration: 0.2 } }
  } : {};

  return (
    <Component
      className={`
        ${variants[variant]}
        ${paddingClasses[padding]}
        ${roundedClasses[rounded]}
        ${hover ? 'cursor-pointer transition-shadow duration-200' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      {...animationProps}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  );
}

// Sub-components for structured cards
Card.Header = function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-lg font-semibold text-stone-900 dark:text-stone-100 ${className}`}>
      {children}
    </h3>
  );
};

Card.Description = function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-sm text-stone-600 dark:text-stone-400 mt-1 ${className}`}>
      {children}
    </p>
  );
};

Card.Body = function CardBody({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-4 pt-4 border-t border-stone-200 dark:border-stone-700 ${className}`}>
      {children}
    </div>
  );
};
