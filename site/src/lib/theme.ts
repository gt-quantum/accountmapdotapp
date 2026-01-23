// Account Map App Design System
// "Vintage Cartography" theme - Inspired by antique maps, brass navigation instruments, aged parchment
// Warm, professional, and trustworthy

export const colors = {
  // Primary - Cartographic Green (true forest green, not teal)
  green: {
    lightest: '#F0FDF4',  // Backgrounds, hover states
    light: '#BBF7D0',     // Subtle backgrounds
    main: '#22C55E',      // Buttons, links, accents
    dark: '#15803D',      // Light mode primary CTA
    darkest: '#14532D',   // Text on light green backgrounds
  },

  // Secondary - Compass Brass/Gold (premium accent)
  brass: {
    light: '#F9EDDB',     // Subtle gold backgrounds
    main: '#D4953A',      // Premium features, badges
    dark: '#8F5F23',      // Hover states
  },

  // Neutrals - Warm Stone (warm beige undertones)
  stone: {
    background: '#FAFAF9',   // Page backgrounds
    surface: '#F5F5F4',      // Cards, sections
    border: '#E7E5E4',       // Dividers, outlines
    muted: '#78716C',        // Secondary text
    body: '#44403C',         // Primary text
    headline: '#1C1917',     // Strong emphasis
  },

  // Semantic Colors
  semantic: {
    success: '#10B981',      // Forest Green
    successBg: '#D1FAE5',
    warning: '#C17817',      // Trail Amber
    warningBg: '#FDEFDC',
    error: '#EF4444',        // Warm Red
    errorBg: '#FEE2E2',
    info: '#5B9BD5',         // Sky Blue
    infoBg: '#E0F2FE',
    terrain: '#6B7455',      // Olive/Moss
    terrainBg: '#ECEEE3',
  },

  // Dark mode specific
  dark: {
    background: '#1C1917',
    surface: '#292524',
    border: '#3D3833',
    muted: '#A8A29E',
    text: '#FAFAF9',
  },
};

export const theme = {
  light: {
    background: colors.stone.background,
    backgroundSecondary: colors.stone.surface,
    backgroundTertiary: colors.stone.border,
    text: colors.stone.headline,
    textBody: colors.stone.body,
    textSecondary: colors.stone.muted,
    textMuted: '#A8A29E',
    accentPrimary: colors.green.dark,
    accentHover: colors.green.darkest,
    accentLight: colors.green.lightest,
    accentSecondary: colors.brass.main,
    accentSecondaryHover: colors.brass.dark,
    accentSecondaryLight: colors.brass.light,
    border: colors.stone.border,
    cardBg: 'rgba(255, 255, 255, 0.45)',
    cardBorder: 'rgba(255, 255, 255, 0.5)',
    cardShadow: '0 4px 30px rgba(28, 25, 23, 0.04)',
  },
  dark: {
    background: colors.dark.background,
    backgroundSecondary: colors.dark.surface,
    backgroundTertiary: '#352F2B',
    text: colors.dark.text,
    textBody: '#E7E5E4',
    textSecondary: colors.dark.muted,
    textMuted: '#78716C',
    accentPrimary: colors.green.main,
    accentHover: colors.green.light,
    accentLight: 'rgba(34, 197, 94, 0.1)',
    accentSecondary: colors.brass.main,
    accentSecondaryHover: colors.brass.light,
    accentSecondaryLight: 'rgba(212, 149, 58, 0.15)',
    border: colors.dark.border,
    cardBg: 'rgba(41, 37, 36, 0.6)',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
    cardShadow: '0 4px 30px rgba(0, 0, 0, 0.15)',
  },
};

// Multi-layer shadows with warm brown tones
export const shadows = {
  small: '0 1px 2px rgba(28, 25, 23, 0.04), 0 1px 3px rgba(28, 25, 23, 0.06)',
  card: '0 2px 4px rgba(28, 25, 23, 0.02), 0 4px 12px rgba(28, 25, 23, 0.04)',
  cardHover: '0 4px 8px rgba(28, 25, 23, 0.04), 0 12px 32px rgba(28, 25, 23, 0.08)',
  large: '0 8px 16px rgba(28, 25, 23, 0.06), 0 20px 48px rgba(28, 25, 23, 0.1)',
  xl: '0 12px 24px rgba(28, 25, 23, 0.08), 0 32px 64px rgba(28, 25, 23, 0.12)',
  glass: '0 8px 32px rgba(28, 25, 23, 0.06)',
  // Legacy aliases
  soft: '0 8px 24px rgba(28, 25, 23, 0.06)',
  float: '0 12px 40px rgba(28, 25, 23, 0.08)',
};

export const spacing = {
  xs: '4px',    // Tight (between related items)
  sm: '8px',    // Compact
  md: '12px',   // Default padding
  lg: '16px',   // Standard card padding
  xl: '24px',   // Section spacing
  '2xl': '32px', // Large spacing
  '3xl': '48px',
  '4xl': '64px',
};

export const radius = {
  sm: '4px',     // Compact elements
  md: '8px',     // Standard UI
  lg: '12px',    // Cards, buttons
  xl: '16px',    // Large cards
  '2xl': '24px', // Hero sections, modals
  full: '9999px', // Pills, avatars, badges
};

export const typography = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  codeFontFamily: "'JetBrains Mono', 'Fira Code', monospace",

  // Hero titles
  hero: {
    fontSize: '30px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.15,
  },

  // Page headers
  pageTitle: {
    fontSize: '24px',
    fontWeight: 600,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
  },

  // Section headers
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.25,
  },

  // Body text
  body: {
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0',
    lineHeight: 1.6,
  },

  // Captions/labels
  caption: {
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    lineHeight: 1.4,
  },

  // Small labels
  label: {
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    lineHeight: 1.4,
  },

  // Legacy - card title
  cardTitle: {
    fontSize: '18px',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.25,
  },
};

export const animation = {
  // Durations
  fast: '150ms',
  default: '200ms',
  slow: '300ms',

  // Timing
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',

  // Framer Motion springs
  spring: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 35,
  },
  springGentle: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 25,
  },
};

// Glass morphism effect values
export const glass = {
  light: {
    background: 'rgba(255, 255, 255, 0.55)',
    backdropBlur: '16px',
    border: 'rgba(255, 255, 255, 0.6)',
    highlight: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
  },
  dark: {
    background: 'rgba(41, 37, 36, 0.65)',
    backdropBlur: '16px',
    border: 'rgba(255, 255, 255, 0.1)',
    highlight: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
  },
};

export type Theme = typeof theme.light;
export type ThemeMode = 'light' | 'dark';
