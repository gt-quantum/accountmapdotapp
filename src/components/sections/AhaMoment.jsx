import { motion } from 'framer-motion';
import MapPreview from '../ui/MapPreview';

// Pins with brand style guide colors
const clusterPins = [
  { top: '25%', left: '30%', color: null },           // Primary green
  { top: '32%', left: '38%', color: '#10B981' },      // Success green
  { top: '28%', left: '45%', color: null },           // Primary green
  { top: '55%', left: '60%', color: '#D4953A' },      // Brass/Gold
  { top: '62%', left: '52%', color: '#6B7455' },      // Terrain olive
];

export default function AhaMoment() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <motion.div
            style={styles.text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={styles.title}>
              Seeing your accounts on a map changes how you plan
            </h2>
            <p style={styles.body}>
              The first time users upload a target account list and see it mapped, priorities shift immediately.
            </p>
            <p style={styles.body}>Suddenly it's obvious:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={styles.bullet}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                Where accounts cluster
              </li>
              <li style={styles.listItem}>
                <span style={styles.bullet}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                What's realistic in a trip
              </li>
              <li style={styles.listItem}>
                <span style={styles.bullet}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                Which plans make sense — and which don't
              </li>
            </ul>
            <p style={styles.body}>
              From there, planning feels natural instead of forced.
            </p>
            <p style={styles.quote}>
              <span style={styles.quoteIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </span>
              You're no longer guessing.<br />You're reacting to reality.
            </p>
          </motion.div>

          <motion.div
            style={styles.mapContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MapPreview height="320px" customPins={clusterPins} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 0',
    background: 'var(--bg-secondary)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  text: {},
  title: {
    fontSize: '28px',
    fontWeight: 600,
    marginBottom: '20px',
    letterSpacing: '-0.02em',
    lineHeight: 1.25,
    color: 'var(--text-primary)',
  },
  body: {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    lineHeight: 1.65,
  },
  list: {
    margin: '20px 0',
    paddingLeft: 0,
    listStyle: 'none',
  },
  listItem: {
    fontSize: '15px',
    color: 'var(--text-body)',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  bullet: {
    color: 'var(--accent-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    flexShrink: 0,
  },
  quote: {
    fontSize: '17px',
    color: 'var(--text-primary)',
    fontWeight: 500,
    marginTop: '24px',
    paddingLeft: '16px',
    borderLeft: '3px solid var(--accent-secondary)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  quoteIcon: {
    color: 'var(--accent-secondary)',
    opacity: 0.6,
    flexShrink: 0,
    marginTop: '2px',
  },
  mapContainer: {},
};
