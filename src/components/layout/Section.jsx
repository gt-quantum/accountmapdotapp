import { motion } from 'framer-motion';
import Container from './Container';

export default function Section({
  children,
  id,
  size = 'default',
  padding = 'default',
  background = 'transparent',
  containerSize = 'default',
  animated = false,
  className = '',
  ...props
}) {
  const paddingSizes = {
    none: '',
    sm: 'py-8 sm:py-12',
    default: 'py-12 sm:py-16 lg:py-20',
    lg: 'py-16 sm:py-24 lg:py-32',
  };

  const backgrounds = {
    transparent: '',
    white: 'bg-white dark:bg-stone-900',
    muted: 'bg-stone-50 dark:bg-stone-900/50',
    dark: 'bg-stone-900 dark:bg-stone-950',
    gradient: 'bg-gradient-to-b from-white to-stone-50 dark:from-stone-900 dark:to-stone-950',
    green: 'bg-green-lightest dark:bg-green-darkest/20',
  };

  const Component = animated ? motion.section : 'section';
  const animationProps = animated ? {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  } : {};

  return (
    <Component
      id={id}
      className={`
        ${paddingSizes[padding]}
        ${backgrounds[background]}
        ${className}
      `}
      {...animationProps}
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </Component>
  );
}

// Section header helper
Section.Header = function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignClasses[align]} ${className}`}>
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
  );
};
