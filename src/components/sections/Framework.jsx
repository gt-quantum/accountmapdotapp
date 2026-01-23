import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const steps = [
  {
    number: '1',
    title: 'Visualize',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    description: 'Import account or location-based data and see everything plotted on a live map. Filter, segment, save views, and share maps so everyone is looking at the same reality.',
  },
  {
    number: '2',
    title: 'Plan',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
        <line x1="9" y1="3" x2="9" y2="18"/>
        <line x1="15" y1="6" x2="15" y2="21"/>
      </svg>
    ),
    description: 'Turn what you see into trips, routes, timelines, and account plans. Add notes, context, and supporting materials directly where planning happens.',
  },
  {
    number: '3',
    title: 'Activate',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
    description: 'Share plans, coordinate with marketing campaigns or events, and move from strategy to execution. Planning becomes visible, reviewable, and actionable.',
  },
];

export default function Framework() {
  return (
    <section style={styles.section} id="how-it-works">
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span style={styles.badge}>How it works</span>
          <h2 style={styles.title}>From account data to real-world action</h2>
        </motion.div>

        <div style={styles.grid}>
          {steps.map((step, i) => (
            <GlassCard key={step.number} delay={i * 0.1}>
              <div style={styles.cardHeader}>
                <div style={styles.numberBadge}>
                  <span style={styles.numberIcon}>{step.icon}</span>
                  <span style={styles.numberText}>{step.number}</span>
                </div>
                <h3 style={styles.cardTitle}>{step.title}</h3>
              </div>
              <p style={styles.cardDescription}>{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 0',
    borderBottom: '1px solid var(--border-color)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '48px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 14px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    backgroundColor: 'var(--accent-secondary-light)',
    color: 'var(--brass-dark)',
    marginBottom: '16px',
    border: '1px solid var(--accent-secondary)',
  },
  title: {
    fontSize: '28px',
    fontWeight: 600,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    color: 'var(--text-primary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  numberBadge: {
    position: 'relative',
    width: '40px',
    height: '40px',
    background: 'var(--accent-primary)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexShrink: 0,
    boxShadow: '0 2px 4px rgba(21, 128, 61, 0.2)',
  },
  numberIcon: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    position: 'absolute',
    bottom: '-6px',
    right: '-6px',
    width: '20px',
    height: '20px',
    background: 'var(--accent-secondary)',
    borderRadius: '50%',
    fontSize: '11px',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 1px 3px rgba(143, 95, 35, 0.3)',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
  cardDescription: {
    fontSize: '15px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    textAlign: 'left',
  },
};
