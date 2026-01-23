import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-green-400/20 to-electric-400/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-violet-400/15 to-electric-400/15 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-electric-500/10 border border-green-500/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                The visual way to plan territory
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              See your accounts.{' '}
              <span className="bg-gradient-to-r from-green-500 via-electric-500 to-violet-500 bg-clip-text text-transparent">
                Plan smarter.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
              Stop planning in spreadsheets. Visualize your accounts on a map, plan efficient routes,
              and coordinate go-to-market activity in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-200"
              >
                Start free trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch demo
              </motion.a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Product screenshot in browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Browser mockup */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 dark:shadow-black/40 border border-slate-200/50 dark:border-slate-700/50 bg-white dark:bg-slate-900">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>app.accountmap.com</span>
                  </div>
                </div>
              </div>

              {/* App screenshot - using a placeholder map visualization */}
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
                {/* Map placeholder with gradient overlay */}
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-122.4194,37.7749,10,0/800x500@2x?access_token=pk.placeholder')] bg-cover bg-center opacity-60" />

                {/* Simulated map with pins */}
                <div className="absolute inset-0">
                  {/* Grid overlay for map effect */}
                  <div className="absolute inset-0 bg-grid opacity-30" />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-slate-900/50 to-transparent" />

                  {/* Simulated pins */}
                  <motion.div
                    className="absolute top-[30%] left-[25%]"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500 shadow-lg shadow-green-500/50 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">$</span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute top-[45%] left-[40%]"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-electric-500 shadow-lg shadow-electric-500/50 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">$$$</span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute top-[35%] left-[60%]"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">$</span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute top-[55%] left-[70%]"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  >
                    <div className="w-9 h-9 rounded-full bg-green-500 shadow-lg shadow-green-500/50 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">$$</span>
                    </div>
                  </motion.div>

                  {/* Route line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                      d="M25 30 Q 35 45, 40 45 T 60 35 T 70 55"
                      fill="none"
                      stroke="url(#routeGradient)"
                      strokeWidth="0.5"
                      strokeDasharray="2 1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Floating UI cards */}
                <motion.div
                  className="absolute top-4 left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-3 border border-slate-200 dark:border-slate-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">24 Accounts</div>
                      <div className="text-xs text-slate-500">in view</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-3 border border-slate-200 dark:border-slate-700"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-electric-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">$2.4M Pipeline</div>
                      <div className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        +18% this quarter
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating accent elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-xl shadow-green-500/30 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-electric-500 to-violet-500 shadow-xl shadow-electric-500/30 flex items-center justify-center"
              animate={{ y: [0, 8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Logo cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8">
            Trusted by sales teams at innovative companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Placeholder logos - replace with actual customer logos */}
            {['Salesforce', 'HubSpot', 'Outreach', 'Gong', 'Clari'].map((company, i) => (
              <div key={company} className="text-xl font-bold text-slate-400 dark:text-slate-500 tracking-tight">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
