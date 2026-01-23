import { motion } from 'framer-motion';

const points = [
  'Import from CSV or Google Sheets',
  'Two-way Sheets sync coming soon',
  'Securely share map views with teammates or stakeholders',
  'Use alongside Salesforce, HubSpot, and marketing calendars',
];

export default function Workflows() {
  return (
    <section style={styles.section} id="workflows">
      <div style={styles.container}>
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={styles.title}>Additive, not disruptive</h2>
          <p style={styles.body}>
            Account Map App doesn't replace your CRM, spreadsheets, or planning docs.
          </p>
          <p style={styles.body}>
            It sits between data and execution — turning lists into plans you can actually act on.
          </p>
          <ul style={styles.list}>
            {points.map((point, i) => (
              <li key={i} style={styles.listItem}>
                <span style={styles.check}>✓</span>
                {point}
              </li>
            ))}
          </ul>
          <p style={styles.quote}>
            No migration.<br />No re-platforming.<br />Just better planning.
          </p>
        </motion.div>
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
  list: {
    margin: '32px 0',
    paddingLeft: 0,
    listStyle: 'none',
  },
  listItem: {
    fontSize: '15px',
    color: 'var(--text-secondary)',
    marginBottom: '12px',
    paddingLeft: '28px',
    position: 'relative',
    display: 'flex',
    gap: '8px',
  },
  check: {
    color: '#10b981',
    fontWeight: 600,
    marginLeft: '-28px',
  },
  quote: {
    fontSize: '16px',
    color: 'var(--text-primary)',
    fontWeight: 500,
    marginTop: '32px',
    fontStyle: 'italic',
  },
};
