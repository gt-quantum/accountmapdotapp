import { motion } from 'framer-motion';
import Button from '../ui/Button';
import MapPreview from '../ui/MapPreview';

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.heroContent}>
          <motion.div
            style={styles.heroText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              style={styles.badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span style={styles.badgeIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </span>
              Territory planning made visual
            </motion.div>

            <h1 style={styles.title}>
              Account Mapping<br />& Territory Planning
            </h1>
            <p style={styles.subtitle}>
              Visualize, plan, and coordinate go-to-market activity around your accounts — on a map.
            </p>
            <div style={styles.heroButtons}>
              <Button href="#" size="large">Start free</Button>
              <Button href="#" variant="secondary">View example map →</Button>
            </div>
            <div style={styles.microcopy}>
              <span style={styles.microcopyItem}>
                <span style={styles.check}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                No credit card required
              </span>
              <span style={styles.microcopyItem}>
                <span style={styles.check}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                Set up in minutes
              </span>
            </div>
          </motion.div>

          <motion.div
            style={styles.heroImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MapPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: '100px 0 80px',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  heroText: {},
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
  badgeIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--accent-secondary)',
  },
  title: {
    fontSize: '44px',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: '16px',
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)',
  },
  subtitle: {
    fontSize: '18px',
    color: 'var(--text-secondary)',
    marginBottom: '32px',
    lineHeight: 1.55,
    maxWidth: '420px',
  },
  heroButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
  },
  microcopy: {
    display: 'flex',
    gap: '24px',
    fontSize: '13px',
    color: 'var(--text-muted)',
  },
  microcopyItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  check: {
    color: 'var(--success)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {},
};
