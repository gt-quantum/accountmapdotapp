import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

export default function Problem() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={styles.title}>
            Lists are good for storage.<br />They're terrible for planning.
          </h2>
          <p style={styles.body}>
            Most GTM planning happens in spreadsheets, CRM filters, and static lists.
          </p>
          <p style={styles.body}>
            Those tools are fine for storing data — but they don't help you answer practical questions like:
          </p>
          <ul style={styles.questions}>
            <li style={styles.questionItem}>
              <span style={styles.arrow}>→</span>
              Which accounts are actually close to each other?
            </li>
            <li style={styles.questionItem}>
              <span style={styles.arrow}>→</span>
              What's reachable in a single trip or day?
            </li>
            <li style={styles.questionItem}>
              <span style={styles.arrow}>→</span>
              How do events, customers, and prospects overlap geographically?
            </li>
          </ul>
          <p style={styles.body}>
            Filtering by city, region, or territory hides reality.
          </p>
          <p style={styles.callout}>
            Geography is continuous.<br />Lists are not.
          </p>
        </motion.div>

        <div style={styles.cards}>
          <GlassCard style={styles.card} delay={0}>
            <span style={styles.cardText}>Lists show rows</span>
          </GlassCard>
          <GlassCard style={styles.card} delay={0.1}>
            <span style={styles.cardText}>Maps show relationships</span>
          </GlassCard>
          <GlassCard style={styles.card} highlight delay={0.2}>
            <span style={styles.cardText}>Planning requires seeing both</span>
          </GlassCard>
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
    maxWidth: '720px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 600,
    marginBottom: '24px',
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    color: 'var(--text-primary)',
  },
  body: {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    marginBottom: '24px',
    lineHeight: 1.7,
  },
  questions: {
    margin: '24px 0',
    paddingLeft: 0,
    listStyle: 'none',
  },
  questionItem: {
    fontSize: '15px',
    color: 'var(--text-secondary)',
    marginBottom: '12px',
    paddingLeft: '24px',
    position: 'relative',
    display: 'flex',
    gap: '8px',
  },
  arrow: {
    color: 'var(--accent-primary)',
    marginLeft: '-24px',
  },
  callout: {
    fontSize: '16px',
    color: 'var(--text-primary)',
    fontWeight: 500,
    margin: '32px 0',
    fontStyle: 'italic',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginTop: '40px',
  },
  card: {
    padding: '20px',
    textAlign: 'center',
  },
  cardText: {
    fontSize: '14px',
    fontWeight: 500,
  },
};
