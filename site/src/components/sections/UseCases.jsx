import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const useCases = [
  {
    title: 'Sales Reps',
    description: 'Plan territory coverage, trips, and account strategies without guessing or over-filtering spreadsheets. Know where to go, who to visit, and why — before you\'re on the road.',
  },
  {
    title: 'Marketing & ABM',
    description: 'Overlay target accounts with campaigns, events, and regions to coordinate plays with sales. See how geography impacts execution, not just targeting.',
  },
  {
    title: 'Sales Leaders',
    description: 'Review plans, understand coverage, and approve trips or initiatives with full context. Better visibility. Better decisions.',
  },
];

export default function UseCases() {
  return (
    <section style={styles.section} id="use-cases">
      <div style={styles.container}>
        <motion.h2
          style={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Built for real go-to-market work
        </motion.h2>

        <div style={styles.grid}>
          {useCases.map((useCase, i) => (
            <GlassCard key={useCase.title} delay={i * 0.1}>
              <h3 style={styles.cardTitle}>{useCase.title}</h3>
              <p style={styles.cardDescription}>{useCase.description}</p>
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
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: 600,
    marginBottom: '48px',
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    color: 'var(--text-primary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '12px',
    color: 'var(--text-primary)',
    textAlign: 'left',
  },
  cardDescription: {
    fontSize: '15px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    textAlign: 'left',
  },
};
