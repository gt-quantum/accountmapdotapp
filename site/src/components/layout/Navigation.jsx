import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'FAQs', href: '#faq' },
];

export default function Navigation() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <a href="/" style={styles.logo}>
            <div style={styles.logoIcon}>
              {/* Simple map pin icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            Account Map App
          </a>

          <ul style={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={styles.navLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={styles.navActions}>
            <button
              onClick={toggleTheme}
              style={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
            <a href="#" style={styles.btnPrimary}>Start free</a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={styles.menuButton}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={styles.mobileMenu}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={styles.mobileNavLink}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border-color)',
    padding: '14px 0',
  },
  navContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: 600,
    fontSize: '17px',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    letterSpacing: '-0.01em',
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    background: 'var(--accent-primary)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    boxShadow: '0 2px 4px rgba(21, 128, 61, 0.15)',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
  },
  navLink: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  navActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  themeToggle: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '8px',
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    fontSize: '16px',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    backgroundColor: 'var(--accent-primary)',
    color: 'white',
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 1px 2px rgba(28, 25, 23, 0.04), 0 2px 4px rgba(28, 25, 23, 0.06)',
  },
  menuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    padding: '4px',
  },
  mobileMenu: {
    position: 'fixed',
    top: '65px',
    left: 0,
    right: 0,
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border-color)',
    padding: '16px 24px',
    zIndex: 99,
  },
  mobileNavLink: {
    display: 'block',
    padding: '12px 0',
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontSize: '16px',
    borderBottom: '1px solid var(--border-color)',
  },
};
