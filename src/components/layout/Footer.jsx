import { useTheme } from '../../hooks/useTheme';

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Decorative compass element */}
        <div style={styles.compassDecoration}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3, color: 'var(--accent-secondary)' }}>
            <circle cx="12" cy="12" r="10"/>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
          </svg>
        </div>

        <div style={styles.content}>
          <div style={styles.brand}>
            <div style={styles.logoIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <span style={styles.brandName}>Account Map App</span>
          </div>

          <div style={styles.links}>
            <a href="#" style={styles.link}>Privacy</a>
            <span style={styles.divider}>|</span>
            <a href="#" style={styles.link}>Terms</a>
            <span style={styles.divider}>|</span>
            <a href="#" style={styles.link}>Contact</a>
          </div>
        </div>

        <div style={styles.copyright}>
          <span style={{ opacity: 0.6 }}>Made with care for territory planners everywhere</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '40px 0 32px',
    borderTop: '1px solid var(--border-color)',
    position: 'relative',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
  },
  compassDecoration: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--bg-primary)',
    padding: '0 16px',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logoIcon: {
    width: '24px',
    height: '24px',
    background: 'var(--accent-primary)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  brandName: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    letterSpacing: '-0.01em',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontSize: '14px',
    color: 'var(--text-muted)',
  },
  link: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  divider: {
    color: 'var(--border-color)',
  },
  copyright: {
    textAlign: 'center',
    fontSize: '12px',
    color: 'var(--text-muted)',
  },
};
