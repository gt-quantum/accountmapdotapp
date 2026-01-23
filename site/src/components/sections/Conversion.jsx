import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Conversion() {
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
          <h2 style={styles.title}>Start free. See if it clicks.</h2>
          <p style={styles.body}>
            Most users understand the value within minutes of uploading their first account list.
          </p>
          <p style={styles.body}>
            That's why getting started is free.
          </p>
          <p style={styles.body}>
            Explore the map. Build a plan. Upgrade only if it's genuinely useful.
          </p>
          <Button href="#" size="large">Start free</Button>
          <p style={styles.microcopy}>No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
  },
  content: {
    maxWidth: '560px',
    margin: '0 auto',
  },
  title: {
    fontSize: '32px',
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
  microcopy: {
    marginTop: '12px',
    fontSize: '13px',
    color: 'var(--text-muted)',
  },
};
