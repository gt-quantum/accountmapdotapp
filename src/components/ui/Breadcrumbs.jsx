import { forwardRef } from 'react';

const Breadcrumbs = forwardRef(function Breadcrumbs({
  children,
  separator,
  className = '',
  ...props
}, ref) {
  const items = Array.isArray(children) ? children : [children];
  const defaultSeparator = (
    <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <nav ref={ref} aria-label="Breadcrumb" className={className} {...props}>
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && (
              <span className="mx-1" aria-hidden="true">
                {separator || defaultSeparator}
              </span>
            )}
            {item}
          </li>
        ))}
      </ol>
    </nav>
  );
});

Breadcrumbs.Item = forwardRef(function BreadcrumbItem({
  children,
  href,
  current = false,
  icon: Icon,
  className = '',
  ...props
}, ref) {
  const baseClasses = `
    inline-flex items-center gap-1.5 text-sm
    transition-colors
    ${current
      ? 'font-medium text-stone-900 dark:text-stone-100'
      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
    }
    ${className}
  `;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </>
  );

  if (current || !href) {
    return (
      <span
        ref={ref}
        className={baseClasses}
        aria-current={current ? 'page' : undefined}
        {...props}
      >
        {content}
      </span>
    );
  }

  return (
    <a ref={ref} href={href} className={baseClasses} {...props}>
      {content}
    </a>
  );
});

// Home icon helper
Breadcrumbs.HomeIcon = function BreadcrumbHomeIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
};

export default Breadcrumbs;
