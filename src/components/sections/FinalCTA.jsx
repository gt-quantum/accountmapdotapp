import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Decorative map elements */}
        <div style={styles.decorativeContainer}>
          {/* Top left compass */}
          <div style={{ ...styles.decorativeIcon, top: '10%', left: '5%' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
            </svg>
          </div>
          {/* Top right pin */}
          <div style={{ ...styles.decorativeIcon, top: '15%', right: '8%' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          {/* Bottom left map */}
          <div style={{ ...styles.decorativeIcon, bottom: '15%', left: '10%' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
              <line x1="9" y1="3" x2="9" y2="18"/>
              <line x1="15" y1="6" x2="15" y2="21"/>
            </svg>
          </div>
          {/* Bottom right globe */}
          <div style={{ ...styles.decorativeIcon, bottom: '20%', right: '5%' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={styles.content}
        >
          <div style={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Get started today
          </div>
          <h2 style={styles.title}>Plan your GTM activity around reality</h2>
          <p style={styles.subtitle}>
            See your accounts on a map and make better territory decisions.
          </p>
          <Button href="#" size="large">Start free</Button>
          <div style={styles.microcopy}>
            <span style={styles.microcopyItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Set up in minutes
            </span>
            <span style={styles.microcopyItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              No credit card required
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
  },
  decorativeContainer: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
  },
  decorativeIcon: {
    position: 'absolute',
    color: 'var(--accent-secondary)',
    opacity: 0.15,
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 14px',
    borderRadius: '9999px',
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    backgroundColor: 'var(--accent-light)',
    color: 'var(--accent-primary)',
    marginBottom: '20px',
    border: '1px solid var(--green-light)',
  },
  title: {
    fontSize: '36px',
    fontWeight: 700,
    marginBottom: '16px',
    letterSpacing: '-0.02em',
    lineHeight: 1.15,
    color: 'var(--text-primary)',
  },
  subtitle: {
    fontSize: '17px',
    color: 'var(--text-secondary)',
    marginBottom: '32px',
    lineHeight: 1.5,
  },
  microcopy: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    fontSize: '13px',
    color: 'var(--text-muted)',
  },
  microcopyItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: 'var(--success)',
  },
};
