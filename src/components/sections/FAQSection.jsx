import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection({
  badge,
  title,
  subtitle,
  items = [],
  variant = 'accordion',
  columns = 1,
  defaultOpen = 0,
  className = '',
}) {
  // Variant: Accordion (most common)
  if (variant === 'accordion') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            {badge && <FAQBadge>{badge}</FAQBadge>}
            {title && <FAQTitle>{title}</FAQTitle>}
            {subtitle && <FAQSubtitle>{subtitle}</FAQSubtitle>}
          </div>

          {/* Accordion */}
          <FAQAccordion items={items} defaultOpen={defaultOpen} />
        </div>
      </section>
    );
  }

  // Variant: Two Column (questions on right, intro on left)
  if (variant === 'twoColumn') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Intro */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                {badge && <FAQBadge>{badge}</FAQBadge>}
                {title && <FAQTitle align="left">{title}</FAQTitle>}
                {subtitle && <FAQSubtitle align="left">{subtitle}</FAQSubtitle>}
              </div>
            </div>

            {/* Right - Accordion */}
            <div className="lg:col-span-3">
              <FAQAccordion items={items} defaultOpen={defaultOpen} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variant: Offset (larger intro, accordion below offset)
  if (variant === 'offset') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Left aligned, larger */}
          <div className="max-w-2xl mb-12">
            {badge && <FAQBadge>{badge}</FAQBadge>}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
                {subtitle}
              </p>
            )}
          </div>

          {/* Accordion - Offset to right */}
          <div className="lg:ml-auto lg:max-w-3xl">
            <FAQAccordion items={items} defaultOpen={defaultOpen} />
          </div>
        </div>
      </section>
    );
  }

  // Variant: Grid (cards layout)
  if (variant === 'grid') {
    const columnClasses = {
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-2 lg:grid-cols-3',
    };

    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            {badge && <FAQBadge>{badge}</FAQBadge>}
            {title && <FAQTitle>{title}</FAQTitle>}
            {subtitle && <FAQSubtitle>{subtitle}</FAQSubtitle>}
          </div>

          {/* Grid */}
          <div className={`grid gap-6 ${columnClasses[columns] || 'sm:grid-cols-2'}`}>
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
              >
                <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  {item.question}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variant: Simple List (no accordion, just list)
  if (variant === 'list') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            {badge && <FAQBadge>{badge}</FAQBadge>}
            {title && <FAQTitle>{title}</FAQTitle>}
            {subtitle && <FAQSubtitle>{subtitle}</FAQSubtitle>}
          </div>

          {/* List */}
          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  {item.question}
                </h3>
                <p className="text-stone-600 dark:text-stone-400">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variant: Centered with categories
  if (variant === 'categorized') {
    // Group items by category
    const categories = items.reduce((acc, item) => {
      const cat = item.category || 'General';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});

    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            {badge && <FAQBadge>{badge}</FAQBadge>}
            {title && <FAQTitle>{title}</FAQTitle>}
            {subtitle && <FAQSubtitle>{subtitle}</FAQSubtitle>}
          </div>

          {/* Categorized Accordions */}
          <div className="space-y-12">
            {Object.entries(categories).map(([category, categoryItems], catIndex) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4 pb-2 border-b border-stone-200 dark:border-stone-700">
                  {category}
                </h3>
                <FAQAccordion items={categoryItems} defaultOpen={catIndex === 0 ? 0 : -1} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variant: With Search
  if (variant === 'searchable') {
    return <SearchableFAQ badge={badge} title={title} subtitle={subtitle} items={items} />;
  }

  // Variant: Side by Side (two columns of accordions)
  if (variant === 'sideBySide') {
    const midpoint = Math.ceil(items.length / 2);
    const leftItems = items.slice(0, midpoint);
    const rightItems = items.slice(midpoint);

    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            {badge && <FAQBadge>{badge}</FAQBadge>}
            {title && <FAQTitle>{title}</FAQTitle>}
            {subtitle && <FAQSubtitle>{subtitle}</FAQSubtitle>}
          </div>

          {/* Two Columns */}
          <div className="grid lg:grid-cols-2 gap-8">
            <FAQAccordion items={leftItems} defaultOpen={0} />
            <FAQAccordion items={rightItems} defaultOpen={-1} />
          </div>
        </div>
      </section>
    );
  }

  // Default fallback to accordion
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {badge && <FAQBadge>{badge}</FAQBadge>}
          {title && <FAQTitle>{title}</FAQTitle>}
          {subtitle && <FAQSubtitle>{subtitle}</FAQSubtitle>}
        </div>
        <FAQAccordion items={items} defaultOpen={defaultOpen} />
      </div>
    </section>
  );
}

// Sub-components
function FAQBadge({ children }) {
  return (
    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
      {children}
    </span>
  );
}

function FAQTitle({ children, align = 'center' }) {
  return (
    <h2 className={`text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight ${align === 'left' ? 'text-left' : ''}`}>
      {children}
    </h2>
  );
}

function FAQSubtitle({ children, align = 'center' }) {
  return (
    <p className={`mt-4 text-lg text-stone-600 dark:text-stone-400 ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`}>
      {children}
    </p>
  );
}

function FAQAccordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="divide-y divide-stone-200 dark:divide-stone-700 border-y border-stone-200 dark:border-stone-700">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-stone-900 dark:text-stone-100 group-hover:text-green-dark dark:group-hover:text-green-light transition-colors pr-4">
          {item.question}
        </span>
        <span className="shrink-0 ml-4">
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5 text-stone-500 dark:text-stone-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-stone-600 dark:text-stone-400">
              {typeof item.answer === 'string' ? (
                <p>{item.answer}</p>
              ) : (
                item.answer
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SearchableFAQ({ badge, title, subtitle, items }) {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredItems = items.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      (typeof item.answer === 'string' && item.answer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          {badge && <FAQBadge>{badge}</FAQBadge>}
          {title && <FAQTitle>{title}</FAQTitle>}
          {subtitle && <FAQSubtitle>{subtitle}</FAQSubtitle>}
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-main focus:border-transparent"
            />
          </div>
        </div>

        {/* Results */}
        {filteredItems.length > 0 ? (
          <div className="divide-y divide-stone-200 dark:divide-stone-700 border-y border-stone-200 dark:border-stone-700">
            {filteredItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-stone-500 dark:text-stone-400">
            <svg
              className="w-12 h-12 mx-auto mb-4 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>No questions found matching "{search}"</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Export variants for reference
FAQSection.variants = ['accordion', 'twoColumn', 'offset', 'grid', 'list', 'categorized', 'searchable', 'sideBySide'];
