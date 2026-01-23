# Website Build Template

A comprehensive starting template for building modern, performant websites using the GT Strategies tech stack.

---

## Quick Start

```bash
# Clone/create new project
npm create astro@latest my-site -- --template minimal

# Install dependencies
npm install react react-dom @astrojs/react framer-motion @astrojs/cloudflare

# Start development
npm run dev
```

---

## Tech Stack Overview

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | Astro 5.x | Static site generation, routing, build system |
| **UI Library** | React 19.x | Interactive components |
| **Animation** | Framer Motion 12.x | Spring-based animations |
| **Styling** | CSS + Inline Styles | Global CSS variables + component styles |
| **Deployment** | Cloudflare | Serverless deployment via Workers/Pages |
| **Language** | TypeScript | Type safety |

---

## Project Structure

```
project-root/
├── .astro/                    # Astro generated (gitignored)
├── .vscode/
│   ├── extensions.json        # Recommended: astro-build.astro-vscode
│   └── launch.json            # Debug configuration
├── dist/                      # Production build output (gitignored)
├── public/                    # Static assets (copied as-is)
│   ├── favicon.svg
│   ├── fonts/
│   ├── images/
│   └── downloads/
├── src/
│   ├── pages/                 # File-based routing
│   │   ├── index.astro
│   │   └── [dynamic]/[slug].astro
│   ├── layouts/
│   │   └── BaseLayout.astro   # Master layout
│   ├── components/
│   │   ├── layout/            # Navigation, headers, footers
│   │   ├── ui/                # Reusable UI primitives
│   │   └── [feature]/         # Feature-specific components
│   ├── content/               # Content collections (Markdown + frontmatter)
│   │   └── config.ts          # Collection schemas
│   ├── lib/
│   │   └── theme.ts           # Design system tokens
│   └── styles/
│       ├── global.css         # Global styles, variables, resets
│       └── animations.css     # Animation utilities
├── astro.config.mjs           # Astro configuration
├── tsconfig.json              # TypeScript configuration
├── package.json
└── .gitignore
```

---

## Configuration Files

### `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [react()],
  adapter: cloudflare(),
  output: 'static', // or 'server' for SSR
});
```

### `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  },
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

### `package.json`

```json
{
  "name": "my-site",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^5.16.0",
    "@astrojs/cloudflare": "^12.0.0",
    "@astrojs/react": "^4.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^12.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0"
  }
}
```

### `.gitignore`

```
dist/
.astro/
node_modules/
npm-debug.log*
.env
.env.production
.DS_Store
.wrangler/
```

### `.vscode/extensions.json`

```json
{
  "recommendations": ["astro-build.astro-vscode"]
}
```

---

## Design System Template

### `src/lib/theme.ts`

```typescript
// GT Strategies Design System
// Warm, editorial palette - no pure black/white, no cool grays

export const theme = {
  light: {
    // Core backgrounds - warm cream/beige tones
    background: '#F3EEE7',
    backgroundSecondary: '#EBE6DE',
    backgroundTertiary: '#E3DED5',

    // Typography - warm browns
    text: '#2C2824',
    textMuted: '#6B6560',
    activeText: '#2C2824',
    inactiveText: '#A09A94',

    // Lines & dividers
    line: '#2C2824',
    dot: '#2C2824',
    divider: '#B5AFA6',

    // Interactive elements
    socialIcon: '#7A756E',
    headerButton: '#6B6560',
  },
  dark: {
    // Core backgrounds - warm dark browns, cinematic
    background: '#1A1714',
    backgroundSecondary: '#211E1A',
    backgroundTertiary: '#2A2622',

    // Typography - warm off-whites
    text: '#E3E0DB',
    textMuted: '#A8A49E',
    activeText: '#E3E0DB',
    inactiveText: '#6E6A64',

    // Lines & dividers
    line: '#E3E0DB',
    dot: '#E3E0DB',
    divider: '#605B55',

    // Interactive elements
    socialIcon: '#908C86',
    headerButton: '#A8A49E',
  },
};

// Shadows (primarily for light mode)
export const shadows = {
  soft: '0 8px 24px rgba(44, 40, 36, 0.06)',
  float: '0 12px 40px rgba(44, 40, 36, 0.08)',
  card: '0 4px 12px rgba(44, 40, 36, 0.04)',
};

// Spacing (8px grid)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

// Border radius
export const radius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

// Typography
export const typography = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  pageTitle: {
    fontSize: '48px',
    fontWeight: 600,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
  },
  sectionHeader: {
    fontSize: '24px',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.2,
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 500,
    letterSpacing: '0',
    lineHeight: 1.2,
  },
  body: {
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0',
    lineHeight: 1.6,
  },
  navActive: {
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0.2px',
    lineHeight: 1.4,
  },
  navInactive: {
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: '0.2px',
    lineHeight: 1.4,
  },
  caption: {
    fontSize: '13px',
    fontWeight: 400,
    letterSpacing: '0.1px',
    lineHeight: 1.4,
  },
};

// Animation presets (for Framer Motion)
export const animation = {
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
  fade: {
    duration: 0.2,
  },
  standard: {
    duration: 0.3,
    ease: 'easeOut' as const,
  },
};

// Breakpoints
export const breakpoints = {
  mobile: '768px',
  tablet: '1000px',
  desktop: '1200px',
};

// Type exports
export type Theme = typeof theme.light;
export type ThemeMode = 'light' | 'dark';
```

---

## Global Styles Template

### `src/styles/global.css`

```css
/* ===== CSS RESET ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-height: 100vh;
  line-height: 1.5;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

/* ===== CSS VARIABLES ===== */
:root {
  /* Layout */
  --sidebar-width: 147px;
  --header-height: 77px;
  --content-padding: 48px;
  --layout-gap: 24px;

  /* Light Theme (default) */
  --color-background: #F3EEE7;
  --color-surface: #FFFFFF;
  --color-text: #2C2824;
  --color-text-muted: #6B6560;
  --color-accent: #4A7C59;
  --color-border: rgba(44, 40, 36, 0.12);
}

[data-theme="dark"] {
  --color-background: #1A1714;
  --color-surface: #242220;
  --color-text: #E3E0DB;
  --color-text-muted: #9A9590;
  --color-accent: #6B9B7A;
  --color-border: rgba(227, 224, 219, 0.12);
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* ===== RESPONSIVE LAYOUT ===== */
@media (max-width: 1000px) {
  :root {
    --sidebar-width: 100px;
    --content-padding: 32px;
  }
}

@media (max-width: 768px) {
  :root {
    --sidebar-width: 60px;
    --header-height: 60px;
    --content-padding: 24px;
    --layout-gap: 16px;
  }
}
```

### `src/styles/animations.css`

```css
/* ===== ANIMATION SYSTEM ===== */

/* On-load animations (add .animate-ready to trigger) */
.animate-on-load {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-load.animate-ready {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered delays */
.delay-1 { transition-delay: 0.12s; }
.delay-2 { transition-delay: 0.24s; }
.delay-3 { transition-delay: 0.36s; }
.delay-4 { transition-delay: 0.48s; }
.delay-5 { transition-delay: 0.60s; }

/* Scroll-triggered reveals */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .animate-on-load,
  .reveal {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
```

---

## Base Layout Template

### `src/layouts/BaseLayout.astro`

```astro
---
import '../styles/global.css';
import '../styles/animations.css';
import { ViewTransitions } from 'astro:transitions';
import Navigation from '../components/layout/Navigation.jsx';

interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Site description' } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title}</title>
    <ViewTransitions />

    <!-- Prevent theme flash -->
    <script is:inline>
      (function() {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
      })();
    </script>
  </head>
  <body>
    <Navigation client:load transition:persist />

    <main class="main-content" transition:animate="fade">
      <slot />
    </main>
  </body>
</html>

<style>
  .main-content {
    margin-left: var(--sidebar-width);
    padding: var(--content-padding);
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    .main-content {
      margin-left: 0;
      padding-top: calc(var(--header-height) + var(--content-padding));
    }
  }
</style>
```

---

## Content Collections Setup

### `src/content/config.ts`

```typescript
import { defineCollection, z } from 'astro:content';

// Example: Blog posts collection
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Example: Projects collection
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    status: z.enum(['active', 'completed', 'archived']).default('completed'),
    tags: z.array(z.string()).optional(),
    date: z.coerce.date(),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// Example: Resources collection
const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    resourceType: z.enum(['pdf', 'template', 'tool', 'video', 'guide']),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    fileUrl: z.string().optional(),
    videoUrl: z.string().optional(),
    previewImage: z.string().optional(),
  }),
});

export const collections = { posts, projects, resources };
```

### Example Content File: `src/content/posts/my-first-post.md`

```markdown
---
title: "My First Post"
description: "An introduction to the site"
date: 2024-01-15
tags: ["announcement", "intro"]
featured: true
coverImage: "/images/post-cover.jpg"
---

# Welcome

This is the content of my post written in Markdown.

## Section Header

Regular paragraph text with **bold** and *italic* formatting.
```

---

## React Component Patterns

### Glassmorphism Card Component (Signature Style)

```jsx
// src/components/ui/GlassCard.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../lib/theme';

const GlassCard = ({ children, href, backgroundImage, delay = 0 }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync with document theme
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.getAttribute('data-theme') === 'dark');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  // Glassmorphic card base styles - very transparent
  const glassCard = {
    background: isDarkMode
      ? 'rgba(45, 42, 38, 0.2)'
      : 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.3)'}`,
    borderRadius: '16px',
    boxShadow: isDarkMode
      ? '0 4px 30px rgba(0, 0, 0, 0.1)'
      : '0 4px 30px rgba(0, 0, 0, 0.02)',
    padding: '24px',
    position: 'relative',
    overflow: 'hidden',
  };

  // If card has background image
  const withImage = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  // Overlay for image cards (maintains readability)
  const imageOverlay = backgroundImage ? (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: isDarkMode
        ? 'linear-gradient(135deg, rgba(30, 27, 23, 0.85) 0%, rgba(45, 42, 38, 0.7) 100%)'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(250, 249, 247, 0.7) 100%)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    }} />
  ) : null;

  const Component = href ? motion.a : motion.div;

  return (
    <Component
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        delay
      }}
      whileHover={{ y: -4, boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08)' }}
      style={{ ...glassCard, ...withImage, textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      {imageOverlay}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </Component>
  );
};

export default GlassCard;
```

### Animated Background Component

```jsx
// src/components/backgrounds/SilkFabricBackground.jsx
import { useEffect, useRef } from 'react';

// Silk Fabric Background
// Soft, sheer layers with gentle organic motion
// Matches the warm cream/blush tones of the design system

export default function SilkFabricBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Fabric layer configuration
    const layers = [
      { points: 5, baseY: 0.75, amplitude: 80, frequency: 0.8, speed: 0.15, phase: 0, color: 'rgba(180, 170, 165, 0.18)' },
      { points: 6, baseY: 0.6, amplitude: 60, frequency: 1.0, speed: 0.12, phase: 1, color: 'rgba(195, 185, 175, 0.15)' },
      { points: 5, baseY: 0.45, amplitude: 70, frequency: 0.7, speed: 0.18, phase: 2, color: 'rgba(210, 200, 190, 0.12)' },
      { points: 4, baseY: 0.3, amplitude: 50, frequency: 0.9, speed: 0.1, phase: 3, color: 'rgba(225, 218, 210, 0.1)' },
      { points: 5, baseY: 0.18, amplitude: 40, frequency: 1.1, speed: 0.14, phase: 4, color: 'rgba(240, 235, 228, 0.08)' },
    ];

    // Dark mode layers (warm dark tones)
    const darkLayers = [
      { points: 5, baseY: 0.75, amplitude: 80, frequency: 0.8, speed: 0.15, phase: 0, color: 'rgba(60, 55, 50, 0.25)' },
      { points: 6, baseY: 0.6, amplitude: 60, frequency: 1.0, speed: 0.12, phase: 1, color: 'rgba(55, 50, 45, 0.2)' },
      { points: 5, baseY: 0.45, amplitude: 70, frequency: 0.7, speed: 0.18, phase: 2, color: 'rgba(50, 45, 40, 0.15)' },
      { points: 4, baseY: 0.3, amplitude: 50, frequency: 0.9, speed: 0.1, phase: 3, color: 'rgba(45, 40, 35, 0.12)' },
      { points: 5, baseY: 0.18, amplitude: 40, frequency: 1.1, speed: 0.14, phase: 4, color: 'rgba(40, 35, 30, 0.1)' },
    ];

    const drawFabricLayer = (layer, time) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const { points, baseY, amplitude, frequency, speed, phase, color } = layer;

      // Generate control points
      const controlPoints = [];
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * width;
        const y = height * baseY +
          Math.sin(i * frequency + time * speed + phase) * amplitude +
          Math.sin(i * frequency * 0.5 + time * speed * 0.7 + phase) * amplitude * 0.4;
        controlPoints.push({ x, y });
      }

      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(controlPoints[0].x, controlPoints[0].y);

      // Draw smooth bezier curves through points
      for (let i = 0; i < controlPoints.length - 1; i++) {
        const current = controlPoints[i];
        const next = controlPoints[i + 1];
        const cpX = (current.x + next.x) / 2;
        ctx.bezierCurveTo(cpX, current.y, cpX, next.y, next.x, next.y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      // Gradient fill for fabric-like appearance
      const gradient = ctx.createLinearGradient(0, height * baseY - amplitude, 0, height);
      const opacity = parseFloat(color.match(/[\d.]+\)$/)[0]);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.5, color.replace(/[\d.]+\)$/, (opacity * 1.2) + ')'));
      gradient.addColorStop(1, color.replace(/[\d.]+\)$/, (opacity * 0.5) + ')'));

      ctx.fillStyle = gradient;
      ctx.fill();
    };

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const time = (timestamp - startTime) / 1000;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Check current theme
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const currentLayers = isDark ? darkLayers : layers;

      // Background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, width * 0.3, height);
      if (isDark) {
        bgGradient.addColorStop(0, '#1a1714');
        bgGradient.addColorStop(0.5, '#1e1b17');
        bgGradient.addColorStop(1, '#211e1a');
      } else {
        bgGradient.addColorStop(0, '#fcfaf7');
        bgGradient.addColorStop(0.3, '#f8f5f0');
        bgGradient.addColorStop(0.7, '#f3efe8');
        bgGradient.addColorStop(1, '#ebe5dc');
      }

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw fabric layers
      currentLayers.forEach(layer => drawFabricLayer(layer, time));

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
```

### Theme-Aware Hook (Reusable Pattern)

```jsx
// src/hooks/useTheme.js
import { useState, useEffect } from 'react';
import { theme } from '../lib/theme';

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.getAttribute('data-theme') === 'dark');
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  return {
    isDarkMode,
    currentTheme: isDarkMode ? theme.dark : theme.light,
    toggleTheme: () => {
      const newTheme = isDarkMode ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    },
  };
}
```

### Animation Variants (Stagger Pattern)

```jsx
// src/lib/animations.js

// Container that staggers children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

// Individual items that animate in
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]  // Custom easing
    }
  }
};

// Usage in component:
// <motion.div variants={containerVariants} initial="hidden" animate="visible">
//   {items.map(item => (
//     <motion.div key={item.id} variants={itemVariants}>
//       {item.content}
//     </motion.div>
//   ))}
// </motion.div>
```

### Basic Component with Framer Motion

```jsx
// src/components/ui/Card.jsx
import { motion } from 'framer-motion';

const Card = ({ title, description, href, delay = 0 }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        delay
      }}
      whileHover={{ y: -4 }}
      style={styles.card}
    >
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </motion.a>
  );
};

const styles = {
  card: {
    display: 'block',
    padding: '24px',
    backgroundColor: 'var(--color-surface)',
    borderRadius: '12px',
    border: '1px solid var(--color-border)',
    textDecoration: 'none',
    color: 'inherit',
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '8px',
    color: 'var(--color-text)',
  },
  description: {
    fontSize: '14px',
    color: 'var(--color-text-muted)',
    lineHeight: 1.5,
  },
};

export default Card;
```

### Theme-Aware Component with Observer

```jsx
// src/components/ui/ThemeAwareCard.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeAwareCard = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial check
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const backgroundColor = isDark
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.02)';

  return (
    <motion.div
      style={{ ...styles.card, backgroundColor }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

const styles = {
  card: {
    padding: '24px',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    transition: 'background-color 0.3s ease',
  },
};

export default ThemeAwareCard;
```

---

## Page Templates

### Static Page: `src/pages/about.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import AboutSection from '../components/about/AboutSection.jsx';
---

<BaseLayout title="About | Site Name">
  <AboutSection client:load />
</BaseLayout>
```

### Dynamic Route: `src/pages/posts/[slug].astro`

```astro
---
import { getCollection, getEntry } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<BaseLayout title={post.data.title}>
  <article>
    <h1>{post.data.title}</h1>
    <time>{post.data.date.toLocaleDateString()}</time>
    <Content />
  </article>
</BaseLayout>
```

### Listing Page: `src/pages/posts/index.astro`

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import Card from '../../components/ui/Card.jsx';

const posts = await getCollection('posts', ({ data }) => !data.draft);
const sortedPosts = posts.sort((a, b) => b.data.date - a.data.date);
---

<BaseLayout title="Posts | Site Name">
  <h1>All Posts</h1>
  <div class="grid">
    {sortedPosts.map((post, i) => (
      <Card
        client:load
        title={post.data.title}
        description={post.data.description}
        href={`/posts/${post.slug}`}
        delay={i * 0.1}
      />
    ))}
  </div>
</BaseLayout>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 32px;
  }
</style>
```

---

## Navigation Component Template

### `src/components/layout/Navigation.jsx`

```jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navigation = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');

    // Listen for Astro page transitions
    document.addEventListener('astro:after-swap', () => {
      setCurrentPath(window.location.pathname);
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav style={styles.sidebar}>
        <div style={styles.logo}>
          <a href="/">Logo</a>
        </div>

        <ul style={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                style={{
                  ...styles.navLink,
                  color: currentPath === item.href
                    ? 'var(--color-text)'
                    : 'var(--color-text-muted)',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={toggleTheme} style={styles.themeToggle}>
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Mobile Header */}
      <header style={styles.mobileHeader}>
        <a href="/" style={styles.mobileLogo}>Logo</a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={styles.menuButton}
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={styles.mobileMenu}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} style={styles.mobileNavLink}>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const styles = {
  sidebar: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: 'var(--sidebar-width)',
    height: '100vh',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-background)',
    zIndex: 100,
  },
  logo: {
    marginBottom: '48px',
  },
  navList: {
    listStyle: 'none',
    flex: 1,
  },
  navLink: {
    display: 'block',
    padding: '12px 0',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.2s ease',
  },
  themeToggle: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
  },
  mobileHeader: {
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 'var(--header-height)',
    padding: '0 24px',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'var(--color-background)',
    borderBottom: '1px solid var(--color-border)',
    zIndex: 100,
  },
  mobileLogo: {
    textDecoration: 'none',
    fontWeight: 600,
    color: 'var(--color-text)',
  },
  menuButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  mobileMenu: {
    position: 'fixed',
    top: 'var(--header-height)',
    left: 0,
    right: 0,
    backgroundColor: 'var(--color-background)',
    borderBottom: '1px solid var(--color-border)',
    padding: '16px 24px',
    zIndex: 99,
  },
  mobileNavLink: {
    display: 'block',
    padding: '12px 0',
    textDecoration: 'none',
    color: 'var(--color-text)',
  },
};

// Add media query styles via CSS or conditional rendering
export default Navigation;
```

---

## Deployment Commands

### Development
```bash
npm run dev              # Start dev server at localhost:4321
```

### Production Build
```bash
npm run build            # Build to ./dist/
npm run preview          # Preview production build locally
```

### Deploy to Cloudflare
```bash
# Option 1: Cloudflare Pages (recommended)
# Connect GitHub repo in Cloudflare dashboard

# Option 2: Wrangler CLI
npx wrangler pages deploy ./dist
```

---

## Checklist: New Project Setup

1. [ ] Create project: `npm create astro@latest`
2. [ ] Install dependencies: React, Framer Motion, Cloudflare adapter
3. [ ] Configure `astro.config.mjs` with React and Cloudflare
4. [ ] Set up `tsconfig.json` for TypeScript + React JSX
5. [ ] Create folder structure (pages, components, layouts, lib, styles, content)
6. [ ] Add global CSS with variables and reset
7. [ ] Add animation CSS utilities
8. [ ] Create theme system in `lib/theme.ts`
9. [ ] Build BaseLayout with ViewTransitions and theme handling
10. [ ] Create Navigation component
11. [ ] Set up content collections in `content/config.ts`
12. [ ] Add VS Code extension recommendation
13. [ ] Configure `.gitignore`
14. [ ] Create initial pages (index, about, etc.)
15. [ ] Deploy to Cloudflare

---

## Key Patterns Summary

| Pattern | Implementation |
|---------|----------------|
| **Routing** | File-based in `/src/pages/` |
| **Dynamic routes** | `[slug].astro` with `getStaticPaths()` |
| **Content management** | Markdown + Zod schemas in `/src/content/` |
| **Interactive components** | React with `client:load` directive |
| **Animations** | Framer Motion springs + CSS transitions |
| **Theme switching** | `data-theme` attribute + localStorage |
| **Page transitions** | Astro ViewTransitions + `transition:persist` |
| **Responsive design** | CSS variables + media queries |
| **Styling** | CSS variables + inline styles in components |
| **Deployment** | Static build + Cloudflare adapter |

---

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro + React Guide](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Framer Motion](https://www.framer.com/motion/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
