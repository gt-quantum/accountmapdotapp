import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

export default function GlassCard({
  children,
  href,
  delay = 0,
  style: customStyle = {},
  highlight = false,
  brass = false,
}) {
  const { isDarkMode } = useTheme();

  // Determine background based on variant
  let bgColor, borderColor, hoverShadow;

  if (highlight) {
    // Green highlight card
    bgColor = 'var(--accent-primary)';
    borderColor = 'var(--accent-primary)';
    hoverShadow = '0 8px 24px rgba(21, 128, 61, 0.2), 0 16px 48px rgba(21, 128, 61, 0.15)';
  } else if (brass) {
    // Brass/gold accent card (for premium features)
    bgColor = isDarkMode
      ? 'rgba(212, 149, 58, 0.12)'
      : 'rgba(249, 237, 219, 0.8)';
    borderColor = isDarkMode
      ? 'rgba(212, 149, 58, 0.25)'
      : 'rgba(212, 149, 58, 0.3)';
    hoverShadow = '0 8px 24px rgba(143, 95, 35, 0.1), 0 16px 48px rgba(143, 95, 35, 0.08)';
  } else {
    // Default glass card
    bgColor = isDarkMode
      ? 'rgba(41, 37, 36, 0.65)'
      : 'rgba(255, 255, 255, 0.55)';
    borderColor = isDarkMode
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(255, 255, 255, 0.6)';
    hoverShadow = isDarkMode
      ? '0 8px 24px rgba(0, 0, 0, 0.2), 0 16px 48px rgba(0, 0, 0, 0.15)'
      : '0 8px 24px rgba(28, 25, 23, 0.06), 0 16px 48px rgba(28, 25, 23, 0.04)';
  }

  const glassStyle = {
    background: bgColor,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: `1px solid ${borderColor}`,
    borderRadius: '16px',
    boxShadow: isDarkMode
      ? '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15)'
      : '0 2px 4px rgba(28, 25, 23, 0.02), 0 4px 12px rgba(28, 25, 23, 0.04)',
    padding: '24px',
    color: highlight ? 'white' : 'inherit',
    // Top edge highlight for depth
    backgroundImage: highlight ? 'none' : isDarkMode
      ? 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)'
      : 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)',
    ...customStyle,
  };

  const Component = href ? motion.a : motion.div;

  return (
    <Component
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        delay,
      }}
      whileHover={!highlight ? {
        y: -4,
        boxShadow: hoverShadow,
        transition: { duration: 0.2 }
      } : {}}
      style={{ ...glassStyle, textDecoration: 'none', display: 'block' }}
    >
      {children}
    </Component>
  );
}
