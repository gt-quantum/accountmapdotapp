import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Spreadsheet chaos',
    description: 'Territory data lives in disconnected spreadsheets that are always out of date.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Invisible geography',
    description: 'CRM filters by city or state, hiding which accounts are actually close together.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Wasted travel time',
    description: 'Reps criss-cross territories because no one can visualize efficient routes.',
  },
];

const comparison = [
  { lists: 'Rows of data', maps: 'Spatial relationships', highlight: false },
  { lists: 'Static filters', maps: 'Dynamic visualization', highlight: false },
  { lists: 'Isolated planning', maps: 'Collaborative context', highlight: true },
];

export default function Problem() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            The problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Lists are for storage.{' '}
            <span className="text-slate-400 dark:text-slate-500">
              Not planning.
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Your CRM stores account data in rows and columns. Great for searching, terrible for understanding where accounts actually are and how to reach them efficiently.
          </p>
        </motion.div>

        {/* Pain points grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-500 dark:text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {point.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: The insight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/5 to-electric-500/5 rounded-3xl blur-xl" />
              <blockquote className="relative text-2xl sm:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed mb-6">
                "Geography is continuous.{' '}
                <span className="bg-gradient-to-r from-green-500 to-electric-500 bg-clip-text text-transparent">
                  Lists are not.
                </span>"
              </blockquote>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Your accounts exist in physical space. Understanding proximity, density, and routes requires seeing them that way — not scrolling through endless rows.
            </p>
          </motion.div>

          {/* Right: Comparison cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {comparison.map((item, index) => (
              <motion.div
                key={item.maps}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                  item.highlight
                    ? 'bg-gradient-to-r from-green-50 to-electric-50 dark:from-green-950/30 dark:to-electric-950/30 border border-green-200 dark:border-green-800'
                    : 'bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {/* Lists side */}
                <div className="flex-1 text-center">
                  <div className="text-slate-400 dark:text-slate-500 text-sm mb-1">Lists show</div>
                  <div className="font-medium text-slate-600 dark:text-slate-400">{item.lists}</div>
                </div>

                {/* Arrow */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  item.highlight
                    ? 'bg-gradient-to-r from-green-500 to-electric-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-400'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Maps side */}
                <div className="flex-1 text-center">
                  <div className={`text-sm mb-1 ${item.highlight ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-500'}`}>
                    Maps show
                  </div>
                  <div className={`font-medium ${item.highlight ? 'text-green-700 dark:text-green-300' : 'text-slate-900 dark:text-white'}`}>
                    {item.maps}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
