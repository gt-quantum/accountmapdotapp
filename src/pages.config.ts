/**
 * Page Visibility Configuration for Account Map App
 *
 * This file controls which pages and navigation items are visible for the current build.
 * Set `hidden: true` to hide a page/route from navigation and exclude from MVP.
 *
 * IMPORTANT: This does NOT delete pages - they remain in the codebase and can be
 * re-enabled by setting `hidden: false` or removing the entry.
 *
 * Pages are still accessible by direct URL unless you add redirect logic.
 */

export interface PageConfig {
  /** The route path (e.g., '/about', '/homes/saas') */
  path: string;
  /** Whether this page is hidden from navigation for MVP */
  hidden: boolean;
  /** Optional note about why it's hidden */
  note?: string;
}

/**
 * Pages hidden for MVP
 * These pages exist in the codebase but are excluded from navigation
 */
export const hiddenPages: PageConfig[] = [
  // Multi-page sections - hidden for single-page MVP
  { path: '/about', hidden: true, note: 'MVP is single-page' },
  { path: '/contact', hidden: true, note: 'MVP is single-page' },
  { path: '/services', hidden: true, note: 'MVP is single-page' },
  { path: '/pricing', hidden: true, note: 'Using anchor link instead' },

  // Home variants - keeping only main index for MVP
  { path: '/homes/saas', hidden: true, note: 'Theme demo page' },
  { path: '/homes/startup', hidden: true, note: 'Theme demo page' },
  { path: '/homes/mobile-app', hidden: true, note: 'Theme demo page' },
  { path: '/homes/personal', hidden: true, note: 'Theme demo page' },

  // Landing page templates - hidden for MVP
  { path: '/landing/lead-generation', hidden: true, note: 'Theme demo page' },
  { path: '/landing/sales', hidden: true, note: 'Theme demo page' },
  { path: '/landing/click-through', hidden: true, note: 'Theme demo page' },
  { path: '/landing/product', hidden: true, note: 'Theme demo page' },
  { path: '/landing/pre-launch', hidden: true, note: 'Theme demo page' },
  { path: '/landing/subscription', hidden: true, note: 'Theme demo page' },

  // Blog - hidden for MVP
  { path: '/blog', hidden: true, note: 'Blog disabled for MVP' },
  { path: '/blog/*', hidden: true, note: 'Blog posts disabled for MVP' },
];

/**
 * Check if a path is hidden for MVP
 */
export function isPageHidden(path: string): boolean {
  return hiddenPages.some(page => {
    if (page.path.endsWith('/*')) {
      // Wildcard match
      const basePath = page.path.slice(0, -2);
      return path.startsWith(basePath) && page.hidden;
    }
    return page.path === path && page.hidden;
  });
}

/**
 * MVP Navigation Mode
 * When true, navigation uses anchor links for single-page experience
 */
export const MVP_MODE = true;
