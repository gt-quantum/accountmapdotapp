import { motion } from 'framer-motion';

export default function Credibility() {
  return (
    <motion.section
      style={styles.credibility}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div style={styles.container}>
        Used by sales reps and go-to-market teams to plan territory coverage, trips, and account strategies more intentionally.
      </div>
    </motion.section>
  );
}

const styles = {
  credibility: {
    textAlign: 'center',
    padding: '40px 0',
    color: 'var(--text-secondary)',
    fontSize: '15px',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
  },
};
