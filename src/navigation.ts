import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { MVP_MODE } from './pages.config';

/**
 * MVP Navigation - Single-page with anchor links
 * Used when MVP_MODE is true in pages.config.ts
 */
const mvpHeaderData = {
  links: [
    { text: 'Features', href: '/#features' },
    { text: 'How It Works', href: '/#how-it-works' },
    { text: 'FAQ', href: '/#faq' },
    { text: 'Demo', href: '/#demo' },
  ],
  actions: [{ text: 'Get Started Free', href: 'https://my.accountmap.app', target: '_blank' }],
};

/**
 * Full Navigation - Multi-page site (disabled for MVP)
 * Kept for reference and future use
 */
const fullHeaderData = {
  links: [
    {
      text: 'Homes',
      links: [
        { text: 'SaaS', href: getPermalink('/homes/saas') },
        { text: 'Startup', href: getPermalink('/homes/startup') },
        { text: 'Mobile App', href: getPermalink('/homes/mobile-app') },
        { text: 'Personal', href: getPermalink('/homes/personal') },
      ],
    },
    {
      text: 'Pages',
      links: [
        { text: 'Features (Anchor Link)', href: getPermalink('/#features') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'About us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy policy', href: getPermalink('/privacy') },
      ],
    },
    {
      text: 'Landing',
      links: [
        { text: 'Lead Generation', href: getPermalink('/landing/lead-generation') },
        { text: 'Long-form Sales', href: getPermalink('/landing/sales') },
        { text: 'Click-Through', href: getPermalink('/landing/click-through') },
        { text: 'Product Details (or Services)', href: getPermalink('/landing/product') },
        { text: 'Coming Soon or Pre-Launch', href: getPermalink('/landing/pre-launch') },
        { text: 'Subscription', href: getPermalink('/landing/subscription') },
      ],
    },
    {
      text: 'Blog',
      links: [
        { text: 'Blog List', href: getBlogPermalink() },
        { text: 'Article', href: getPermalink('get-started-website-with-astro-tailwind-css', 'post') },
        { text: 'Article (with MDX)', href: getPermalink('markdown-elements-demo-post', 'post') },
        { text: 'Category Page', href: getPermalink('tutorials', 'category') },
        { text: 'Tag Page', href: getPermalink('astro', 'tag') },
      ],
    },
    { text: 'Widgets', href: '#' },
  ],
  actions: [{ text: 'Get Started Free', href: 'https://my.accountmap.app', target: '_blank' }],
};

/**
 * Export navigation based on MVP_MODE
 * Toggle MVP_MODE in pages.config.ts to switch between single-page and multi-page
 */
export const headerData = MVP_MODE ? mvpHeaderData : fullHeaderData;

/**
 * Footer data - same for both MVP and full site
 */
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'How It Works', href: '#how-it-works' },
        { text: 'Demo', href: '#demo' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Get Started', href: 'https://my.accountmap.app' },
        { text: 'FAQ', href: '#faq' },
        { text: 'Contact Us', href: '#contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: 'https://my.accountmap.app/terms' },
    { text: 'Privacy Policy', href: 'https://my.accountmap.app/privacy' },
  ],
  // Social links - uncomment when ready
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  // ],
  socialLinks: [],
  footNote: `
    &copy; ${new Date().getFullYear()} Account Map App. All rights reserved.
  `,
};
