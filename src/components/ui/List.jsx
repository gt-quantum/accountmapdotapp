import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function List({
  items = [],
  variant = 'bullet',
  columns = 1,
  icon,
  iconColor = 'green',
  size = 'md',
  animated = true,
  className = '',
}) {
  const columnClasses = {
    1: '',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
  };

  const sizeClasses = {
    sm: 'text-sm gap-2',
    md: 'text-base gap-3',
    lg: 'text-lg gap-4',
  };

  const iconColorClasses = {
    green: 'text-green-main',
    brass: 'text-brass-main',
    blue: 'text-blue-500',
    stone: 'text-stone-500',
  };

  const Wrapper = animated ? motion.ul : 'ul';
  const wrapperProps = animated ? {
    variants: containerVariants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  } : {};

  const ItemWrapper = animated ? motion.li : 'li';
  const itemProps = animated ? { variants: itemVariants } : {};

  // Variant: Bullet (simple bullets)
  if (variant === 'bullet') {
    return (
      <Wrapper
        {...wrapperProps}
        className={`grid ${columnClasses[columns]} ${sizeClasses[size]} ${className}`}
      >
        {items.map((item, index) => (
          <ItemWrapper
            key={index}
            {...itemProps}
            className="flex items-start gap-3"
          >
            <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 shrink-0`} />
            <span className="text-stone-700 dark:text-stone-300">
              {typeof item === 'string' ? item : item.text}
            </span>
          </ItemWrapper>
        ))}
      </Wrapper>
    );
  }

  // Variant: Check (checkmarks)
  if (variant === 'check') {
    return (
      <Wrapper
        {...wrapperProps}
        className={`grid ${columnClasses[columns]} ${sizeClasses[size]} ${className}`}
      >
        {items.map((item, index) => (
          <ItemWrapper
            key={index}
            {...itemProps}
            className="flex items-start gap-3"
          >
            <svg
              className={`w-5 h-5 shrink-0 mt-0.5 ${iconColorClasses[iconColor]}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-stone-700 dark:text-stone-300">
              {typeof item === 'string' ? item : item.text}
            </span>
          </ItemWrapper>
        ))}
      </Wrapper>
    );
  }

  // Variant: X (cross/negative)
  if (variant === 'x') {
    return (
      <Wrapper
        {...wrapperProps}
        className={`grid ${columnClasses[columns]} ${sizeClasses[size]} ${className}`}
      >
        {items.map((item, index) => (
          <ItemWrapper
            key={index}
            {...itemProps}
            className="flex items-start gap-3"
          >
            <svg
              className="w-5 h-5 shrink-0 mt-0.5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-stone-700 dark:text-stone-300">
              {typeof item === 'string' ? item : item.text}
            </span>
          </ItemWrapper>
        ))}
      </Wrapper>
    );
  }

  // Variant: Numbered
  if (variant === 'numbered') {
    return (
      <Wrapper
        {...wrapperProps}
        className={`grid ${columnClasses[columns]} ${sizeClasses[size]} ${className}`}
      >
        {items.map((item, index) => (
          <ItemWrapper
            key={index}
            {...itemProps}
            className="flex items-start gap-3"
          >
            <span className={`
              w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-sm font-medium
              bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light
            `}>
              {index + 1}
            </span>
            <span className="text-stone-700 dark:text-stone-300 pt-0.5">
              {typeof item === 'string' ? item : item.text}
            </span>
          </ItemWrapper>
        ))}
      </Wrapper>
    );
  }

  // Variant: Icon (custom icons per item)
  if (variant === 'icon') {
    return (
      <Wrapper
        {...wrapperProps}
        className={`grid ${columnClasses[columns]} ${sizeClasses[size]} ${className}`}
      >
        {items.map((item, index) => {
          const ItemIcon = typeof item === 'object' ? item.icon : icon;
          return (
            <ItemWrapper
              key={index}
              {...itemProps}
              className="flex items-start gap-3"
            >
              {ItemIcon && (
                <span className={`shrink-0 ${iconColorClasses[iconColor]}`}>
                  <ItemIcon className="w-5 h-5 mt-0.5" />
                </span>
              )}
              <span className="text-stone-700 dark:text-stone-300">
                {typeof item === 'string' ? item : item.text}
              </span>
            </ItemWrapper>
          );
        })}
      </Wrapper>
    );
  }

  // Variant: Description (with title and description)
  if (variant === 'description') {
    return (
      <Wrapper
        {...wrapperProps}
        className={`grid ${columnClasses[columns]} gap-6 ${className}`}
      >
        {items.map((item, index) => {
          const ItemIcon = typeof item === 'object' ? item.icon : icon;
          return (
            <ItemWrapper
              key={index}
              {...itemProps}
              className="flex items-start gap-4"
            >
              {ItemIcon && (
                <span className={`
                  shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                  bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light
                `}>
                  <ItemIcon className="w-5 h-5" />
                </span>
              )}
              <div>
                <h4 className="font-semibold text-stone-900 dark:text-stone-100">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    {item.description}
                  </p>
                )}
              </div>
            </ItemWrapper>
          );
        })}
      </Wrapper>
    );
  }

  // Variant: Inline (horizontal list)
  if (variant === 'inline') {
    return (
      <Wrapper
        {...wrapperProps}
        className={`flex flex-wrap gap-x-6 gap-y-2 ${sizeClasses[size]} ${className}`}
      >
        {items.map((item, index) => (
          <ItemWrapper
            key={index}
            {...itemProps}
            className="flex items-center gap-2"
          >
            <svg
              className={`w-4 h-4 ${iconColorClasses[iconColor]}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-stone-600 dark:text-stone-400">
              {typeof item === 'string' ? item : item.text}
            </span>
          </ItemWrapper>
        ))}
      </Wrapper>
    );
  }

  // Variant: Divider (with divider lines)
  if (variant === 'divider') {
    return (
      <Wrapper
        {...wrapperProps}
        className={`divide-y divide-stone-200 dark:divide-stone-700 ${className}`}
      >
        {items.map((item, index) => (
          <ItemWrapper
            key={index}
            {...itemProps}
            className={`flex items-start gap-3 py-4 ${index === 0 ? 'pt-0' : ''} ${index === items.length - 1 ? 'pb-0' : ''}`}
          >
            <svg
              className={`w-5 h-5 shrink-0 mt-0.5 ${iconColorClasses[iconColor]}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <span className="text-stone-700 dark:text-stone-300">
                {typeof item === 'string' ? item : item.text || item.title}
              </span>
              {typeof item === 'object' && item.description && (
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                  {item.description}
                </p>
              )}
            </div>
          </ItemWrapper>
        ))}
      </Wrapper>
    );
  }

  // Default fallback to bullet
  return (
    <Wrapper
      {...wrapperProps}
      className={`grid ${columnClasses[columns]} ${sizeClasses[size]} ${className}`}
    >
      {items.map((item, index) => (
        <ItemWrapper
          key={index}
          {...itemProps}
          className="flex items-start gap-3"
        >
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
          <span className="text-stone-700 dark:text-stone-300">
            {typeof item === 'string' ? item : item.text}
          </span>
        </ItemWrapper>
      ))}
    </Wrapper>
  );
}

// Checklist with interactive checkboxes
List.Checklist = function ListChecklist({
  items = [],
  onChange,
  className = '',
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={item.checked || false}
            onChange={(e) => onChange?.(index, e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-stone-300 dark:border-stone-600 text-green-main focus:ring-green-main"
          />
          <span className={`${item.checked ? 'line-through text-stone-400' : 'text-stone-700 dark:text-stone-300'}`}>
            {item.text || item}
          </span>
        </li>
      ))}
    </ul>
  );
};

// Comparison list (pros/cons)
List.Comparison = function ListComparison({
  pros = [],
  cons = [],
  prosTitle = 'Pros',
  consTitle = 'Cons',
  className = '',
}) {
  return (
    <div className={`grid sm:grid-cols-2 gap-8 ${className}`}>
      <div>
        <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-green-lightest text-green-main flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          {prosTitle}
        </h4>
        <List variant="check" items={pros} iconColor="green" />
      </div>
      <div>
        <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          {consTitle}
        </h4>
        <List variant="x" items={cons} />
      </div>
    </div>
  );
};

// Export variants
List.variants = ['bullet', 'check', 'x', 'numbered', 'icon', 'description', 'inline', 'divider'];

// Common icons for use with icon variant
List.Icons = {
  Check: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  Star: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Lightning: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Shield: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Globe: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Clock: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};
