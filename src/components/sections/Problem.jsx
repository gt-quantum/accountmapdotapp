import { motion } from 'framer-motion';

const insights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Beyond the spreadsheet',
    description: 'Stop scrolling rows. Start seeing relationships.',
    gradient: 'from-green-500 to-emerald-600',
    glow: 'shadow-green-500/30',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Spatial intelligence',
    description: 'See which accounts cluster. Plan routes that make sense.',
    gradient: 'from-electric-500 to-blue-600',
    glow: 'shadow-electric-500/30',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant clarity',
    description: 'Turn territory data into visual strategy in seconds.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/30',
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-electric-500/10 to-violet-500/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            The shift
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            From rows and columns{' '}
            <span className="bg-gradient-to-r from-green-400 via-electric-400 to-violet-400 bg-clip-text text-transparent">
              to real geography
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Your accounts exist in physical space. It's time your planning tools reflected that.
          </p>
        </motion.div>

        {/* Insight cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative"
            >
              {/* Card with glow effect */}
              <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon with glow */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${insight.gradient} text-white flex items-center justify-center mb-4 shadow-lg ${insight.glow} group-hover:scale-110 transition-all duration-300`}>
                  {insight.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {insight.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {insight.description}
                </p>

                {/* Decorative corner gradient */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${insight.gradient} opacity-0 blur-2xl group-hover:opacity-30 transition-all duration-700`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote section with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-electric-500 to-violet-500 rounded-2xl opacity-20 blur-lg" />

          <div className="relative p-8 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-white/10">
            <blockquote className="text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-4">
              "Geography is continuous.{' '}
              <span className="bg-gradient-to-r from-green-400 to-electric-400 bg-clip-text text-transparent">
                Lists are not.
              </span>"
            </blockquote>
            <p className="text-slate-400">
              Understanding proximity, density, and routes requires seeing your accounts in space — not scrolling through endless rows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
