import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const faqs = [
  {
    question: 'Is this a replacement for Salesforce or HubSpot?',
    answer: 'No. It complements your CRM by making account data usable for planning.',
  },
  {
    question: 'Can I share maps with people outside my team?',
    answer: 'Yes. You can generate secure, view-only map links.',
  },
  {
    question: 'Is this only for sales teams?',
    answer: 'No. Sales, marketing, and GTM teams all use it — often together.',
  },
  {
    question: 'How accurate is the geocoding?',
    answer: 'Addresses are automatically geocoded and can be adjusted if needed.',
  },
  {
    question: 'Can I plan trips and routes?',
    answer: 'Yes. Trip and route planning are core to the product.',
  },
];

export default function FAQ() {
  return (
    <section style={styles.section} id="faq">
      <div style={styles.container}>
        <motion.h2
          style={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Common questions
        </motion.h2>

        <div style={styles.grid}>
          {faqs.map((faq, i) => (
            <GlassCard key={i} style={styles.card} delay={i * 0.05}>
              <h4 style={styles.question}>{faq.question}</h4>
              <p style={styles.answer}>{faq.answer}</p>
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
    background: 'var(--bg-secondary)',
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
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  card: {
    padding: '24px',
    textAlign: 'left',
  },
  question: {
    fontSize: '15px',
    fontWeight: 600,
    marginBottom: '8px',
    color: 'var(--text-primary)',
  },
  answer: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    lineHeight: 1.5,
  },
};
