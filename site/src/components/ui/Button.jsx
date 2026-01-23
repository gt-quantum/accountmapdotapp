import { motion } from 'framer-motion';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  onClick,
  style: customStyle = {}
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
  };

  const sizeStyles = {
    default: { padding: '10px 20px' },
    large: { padding: '14px 28px', fontSize: '15px' },
  };

  const variantStyles = {
    // Primary - Solid green CTA
    primary: {
      backgroundColor: 'var(--accent-primary)',
      color: 'white',
      boxShadow: '0 1px 2px rgba(28, 25, 23, 0.04), 0 2px 4px rgba(28, 25, 23, 0.06)',
    },
    // Secondary - Text/link style
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--text-secondary)',
      fontWeight: 500,
    },
    // Outline - Glass border effect
    outline: {
      backgroundColor: 'var(--glass-bg)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-small)',
    },
    // Brass/Gold accent for premium actions
    brass: {
      backgroundColor: 'var(--accent-secondary)',
      color: 'white',
      boxShadow: '0 1px 2px rgba(143, 95, 35, 0.1), 0 2px 4px rgba(143, 95, 35, 0.15)',
    },
  };

  const combinedStyle = {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...customStyle,
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      style={combinedStyle}
      whileHover={{
        scale: 1.005,
        y: -2,
        boxShadow: variant === 'primary'
          ? '0 4px 8px rgba(21, 128, 61, 0.15), 0 8px 16px rgba(21, 128, 61, 0.1)'
          : variant === 'brass'
            ? '0 4px 8px rgba(143, 95, 35, 0.15), 0 8px 16px rgba(143, 95, 35, 0.1)'
            : 'var(--shadow-card-hover)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </Component>
  );
}
