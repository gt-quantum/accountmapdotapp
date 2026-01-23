import { motion } from 'framer-motion';

const stats = [
  { value: '10K+', label: 'Accounts mapped' },
  { value: '500+', label: 'Sales teams' },
  { value: '40%', label: 'Time saved on planning' },
  { value: '4.9', label: 'Average rating', icon: '★' },
];

export default function Credibility() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.icon && <span className="text-yellow-500">{stat.icon}</span>}
                {stat.value}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-12" />

        {/* Social proof text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
            Trusted by go-to-market teams at
          </p>

          {/* Logo placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {['Snowflake', 'MongoDB', 'Datadog', 'Confluent', 'HashiCorp'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-xl sm:text-2xl font-bold text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-default"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60">
            <svg className="absolute top-6 left-6 w-8 h-8 text-green-500/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 italic pl-8">
              "We went from planning in spreadsheets to actually seeing our territory. Game changer for our field team."
            </blockquote>
            <div className="mt-6 flex items-center gap-3 pl-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-electric-500 flex items-center justify-center text-white font-semibold">
                SK
              </div>
              <div className="text-left">
                <div className="text-slate-900 dark:text-white font-medium">Sarah K.</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">VP of Sales, Enterprise SaaS</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
