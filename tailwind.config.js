import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Theme CSS variable colors
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',

        // Brand: Cartographic Green
        'brand-green': {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },

        // Brand: Compass Brass/Gold
        'brand-gold': {
          400: '#E5A84D',
          500: '#D4953A',
          600: '#B87B2E',
          700: '#8F5F23',
        },

        // Brand: Warm Stone Neutrals (replacing cool grays)
        'warm-stone': {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          950: '#0C0A09',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      borderRadius: {
        'brand-sm': '0.5rem',
        'brand-md': '0.75rem',
        'brand-lg': '1rem',
      },

      boxShadow: {
        // Warm multi-layer shadows using rgba(28, 25, 23, x)
        'warm-sm': '0 1px 2px 0 rgba(28, 25, 23, 0.05)',
        'warm': '0 1px 3px 0 rgba(28, 25, 23, 0.1), 0 1px 2px -1px rgba(28, 25, 23, 0.1)',
        'warm-md': '0 4px 6px -1px rgba(28, 25, 23, 0.1), 0 2px 4px -2px rgba(28, 25, 23, 0.1)',
        'warm-lg': '0 10px 15px -3px rgba(28, 25, 23, 0.1), 0 4px 6px -4px rgba(28, 25, 23, 0.1)',
        'warm-xl': '0 20px 25px -5px rgba(28, 25, 23, 0.1), 0 8px 10px -6px rgba(28, 25, 23, 0.1)',
        'warm-2xl': '0 25px 50px -12px rgba(28, 25, 23, 0.25)',
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
