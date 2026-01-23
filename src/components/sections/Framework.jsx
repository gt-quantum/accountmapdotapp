import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Import & Visualize',
    description: 'Connect your CRM or upload a CSV. See every account plotted on an interactive map in seconds. Filter by segment, stage, or any custom field.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: 'green',
  },
  {
    number: '02',
    title: 'Plan & Prioritize',
    description: 'Draw territories, plan routes, and identify clusters. See which accounts are truly reachable together — not just in the same city.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: 'electric',
  },
  {
    number: '03',
    title: 'Execute & Coordinate',
    description: 'Share maps with your team. Align field activity with marketing events. Turn strategy into coordinated, visible action.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'violet',
  },
];

const colorClasses = {
  green: {
    bg: 'bg-green-500',
    light: 'bg-green-50 dark:bg-green-950/50',
    text: 'text-green-500',
    border: 'border-green-200 dark:border-green-800',
    gradient: 'from-green-500 to-green-600',
  },
  electric: {
    bg: 'bg-electric-500',
    light: 'bg-electric-50 dark:bg-electric-950/50',
    text: 'text-electric-500',
    border: 'border-electric-200 dark:border-electric-800',
    gradient: 'from-electric-500 to-electric-600',
  },
  violet: {
    bg: 'bg-violet-500',
    light: 'bg-violet-50 dark:bg-violet-950/50',
    text: 'text-violet-500',
    border: 'border-violet-200 dark:border-violet-800',
    gradient: 'from-violet-500 to-violet-600',
  },
};

export default function Framework() {
  return (
    <section className="relative py-24 lg:py-32" id="how-it-works">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-violet-500/10 border border-green-500/20 text-sm font-medium text-slate-700 dark:text-slate-300 mb-6">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            From data to{' '}
            <span className="bg-gradient-to-r from-green-500 via-electric-500 to-violet-500 bg-clip-text text-transparent">
              action
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Three simple steps to transform how your team plans and executes territory strategy.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-green-500 via-electric-500 to-violet-500 opacity-20" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 pt-6">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Card container */}
                  <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group">
                    {/* Number badge - positioned outside overflow */}
                    <div className={`absolute -top-3 left-8 px-4 py-1 rounded-full bg-gradient-to-r ${colors.gradient} text-white text-sm font-bold shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${colors.light} ${colors.text} flex items-center justify-center mb-6 mt-2 group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            See it in action
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
