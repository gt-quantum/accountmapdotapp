# Website Build Prompt

Use this prompt to start a new site build in Claude Code. Copy everything below the line, then add your layout structure and copy at the end.

---

## Instructions for Claude

Build a website using this exact tech stack and design system. Follow these specifications precisely.

## Tech Stack (Required)

```bash
npm create astro@latest my-site -- --template minimal
npm install react react-dom @astrojs/react framer-motion @astrojs/cloudflare
```

**Framework:** Astro 5.x with React integration
**Styling:** Inline styles in React components + CSS variables
**Animation:** Framer Motion with spring physics
**Deployment:** Cloudflare Pages

## Project Structure

```
src/
├── pages/           # File-based routing (.astro files)
├── layouts/
│   └── BaseLayout.astro
├── components/
│   ├── layout/      # Navigation, headers
│   ├── backgrounds/ # Animated background
│   └── ui/          # Reusable components
├── content/         # Markdown content collections
│   └── config.ts    # Zod schemas
├── lib/
│   └── theme.ts     # Design tokens
├── hooks/
│   └── useTheme.js  # Theme hook
└── styles/
    └── global.css   # CSS variables, reset
```

## Design System

### Color Palette (Warm, Editorial - NO pure black/white, NO cool grays)

```typescript
// src/lib/theme.ts
export const theme = {
  light: {
    background: '#F3EEE7',           // Warm cream
    backgroundSecondary: '#EBE6DE',
    backgroundTertiary: '#E3DED5',
    text: '#2C2824',                 // Warm dark brown
    textMuted: '#6B6560',
    divider: '#B5AFA6',
  },
  dark: {
    background: '#1A1714',           // Dark brown (not black)
    backgroundSecondary: '#211E1A',
    backgroundTertiary: '#2A2622',
    text: '#E3E0DB',                 // Warm off-white
    textMuted: '#A8A49E',
    divider: '#605B55',
  },
};

export const shadows = {
  soft: '0 8px 24px rgba(44, 40, 36, 0.06)',
  card: '0 4px 12px rgba(44, 40, 36, 0.04)',
};

export const spacing = { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px', '2xl': '48px' };
export const radius = { sm: '4px', md: '8px', lg: '12px', xl: '16px' };
```

### Typography

```typescript
export const typography = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  pageTitle: { fontSize: '48px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 },
  sectionHeader: { fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.2 },
  cardTitle: { fontSize: '18px', fontWeight: 500, lineHeight: 1.2 },
  body: { fontSize: '16px', fontWeight: 400, lineHeight: 1.6 },
  caption: { fontSize: '13px', fontWeight: 400, letterSpacing: '0.1px', lineHeight: 1.4 },
};
```

### Animation (Framer Motion Springs)

```typescript
export const animation = {
  spring: { type: 'spring', stiffness: 400, damping: 35 },
  springGentle: { type: 'spring', stiffness: 200, damping: 25 },
};
```

## Global CSS

```css
/* src/styles/global.css */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --sidebar-width: 147px;
  --header-height: 77px;
  --content-padding: 48px;
}

:root, [data-theme="light"] {
  --color-background: #F3EEE7;
  --color-text: #2C2824;
  --color-text-muted: #6B6560;
  --color-divider: #B5AFA6;
}

[data-theme="dark"] {
  --color-background: #1A1714;
  --color-text: #E3E0DB;
  --color-text-muted: #A8A49E;
  --color-divider: #605B55;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

body { min-height: 100vh; background-color: transparent; }
a { color: inherit; text-decoration: none; }
button { background: none; border: none; cursor: pointer; font: inherit; }
ul, ol { list-style: none; }

@media (max-width: 768px) {
  :root { --sidebar-width: 60px; --header-height: 60px; --content-padding: 24px; }
}
```

## Core Components

### BaseLayout.astro

```astro
---
import '../styles/global.css';
import { ViewTransitions } from 'astro:transitions';
import Navigation from '../components/layout/Navigation.jsx';
import SilkFabricBackground from '../components/backgrounds/SilkFabricBackground.jsx';

const { title, description = '' } = Astro.props;
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
    <script is:inline>
      (function() {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
      })();
    </script>
  </head>
  <body>
    <SilkFabricBackground client:load transition:persist />
    <Navigation client:load transition:persist />
    <main style="margin-left: var(--sidebar-width); padding: var(--content-padding);" transition:animate="fade">
      <slot />
    </main>
  </body>
</html>
```

### useTheme Hook

```jsx
// src/hooks/useTheme.js
import { useState, useEffect } from 'react';
import { theme } from '../lib/theme';

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const check = () => setIsDarkMode(document.documentElement.getAttribute('data-theme') === 'dark');
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
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

### Glassmorphism Card Style

```jsx
// Use this pattern for cards throughout the site
const glassCard = (isDarkMode) => ({
  background: isDarkMode ? 'rgba(45, 42, 38, 0.2)' : 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.3)'}`,
  borderRadius: '16px',
  boxShadow: isDarkMode ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 30px rgba(0, 0, 0, 0.02)',
});

// For cards with background images, add overlay:
const imageOverlay = (isDarkMode) => ({
  position: 'absolute',
  inset: 0,
  background: isDarkMode
    ? 'linear-gradient(135deg, rgba(30, 27, 23, 0.85) 0%, rgba(45, 42, 38, 0.7) 100%)'
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(250, 249, 247, 0.7) 100%)',
  backdropFilter: 'blur(8px)',
});
```

### Animated Background

```jsx
// src/components/backgrounds/SilkFabricBackground.jsx
import { useEffect, useRef } from 'react';

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

    const layers = [
      { baseY: 0.75, amplitude: 80, frequency: 0.8, speed: 0.15, phase: 0 },
      { baseY: 0.6, amplitude: 60, frequency: 1.0, speed: 0.12, phase: 1 },
      { baseY: 0.45, amplitude: 70, frequency: 0.7, speed: 0.18, phase: 2 },
      { baseY: 0.3, amplitude: 50, frequency: 0.9, speed: 0.1, phase: 3 },
    ];

    const getLayerColor = (i, isDark) => {
      const lightColors = ['rgba(180,170,165,0.18)', 'rgba(195,185,175,0.15)', 'rgba(210,200,190,0.12)', 'rgba(225,218,210,0.1)'];
      const darkColors = ['rgba(60,55,50,0.25)', 'rgba(55,50,45,0.2)', 'rgba(50,45,40,0.15)', 'rgba(45,40,35,0.12)'];
      return isDark ? darkColors[i] : lightColors[i];
    };

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const time = (timestamp - startTime) / 1000;
      const { innerWidth: w, innerHeight: h } = window;
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, w * 0.3, h);
      if (isDark) {
        bg.addColorStop(0, '#1a1714'); bg.addColorStop(1, '#211e1a');
      } else {
        bg.addColorStop(0, '#fcfaf7'); bg.addColorStop(0.5, '#f5f1eb'); bg.addColorStop(1, '#ebe5dc');
      }
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Draw layers
      layers.forEach((layer, i) => {
        const { baseY, amplitude, frequency, speed, phase } = layer;
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 50) {
          const y = h * baseY + Math.sin(x * 0.01 * frequency + time * speed + phase) * amplitude;
          x === 0 ? ctx.lineTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = getLayerColor(i, isDark);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationId); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }} />;
}
```

### Animation Patterns

```jsx
// Stagger children on page load
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
};

// Card hover
whileHover={{ y: -4, boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08)' }}

// Spring transition
transition={{ type: 'spring', stiffness: 400, damping: 35 }}
```

## Config Files

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [react()],
  adapter: cloudflare(),
});
```

### tsconfig.json

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": { "jsx": "react-jsx", "jsxImportSource": "react" },
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

## Content Collections (if needed)

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
```

---

## YOUR SITE SPECIFICATION

[Describe your layout structure, pages, and copy here. Be specific about:
- Navigation structure (sidebar? top nav? pages?)
- Home page layout (grid? sections? what goes where?)
- Other pages needed
- Any specific components or features
- Copy/content for each section]
