import { forwardRef } from 'react';

const Table = forwardRef(function Table({
  children,
  striped = false,
  hoverable = false,
  compact = false,
  bordered = false,
  className = '',
  ...props
}, ref) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        ref={ref}
        className={`
          w-full text-left
          ${compact ? 'text-sm' : 'text-base'}
          ${className}
        `}
        data-striped={striped}
        data-hoverable={hoverable}
        data-bordered={bordered}
        {...props}
      >
        {children}
      </table>
    </div>
  );
});

Table.Head = forwardRef(function TableHead({ children, className = '', ...props }, ref) {
  return (
    <thead
      ref={ref}
      className={`
        bg-stone-50 dark:bg-stone-800
        border-b border-stone-200 dark:border-stone-700
        ${className}
      `}
      {...props}
    >
      {children}
    </thead>
  );
});

Table.Body = forwardRef(function TableBody({ children, className = '', ...props }, ref) {
  return (
    <tbody
      ref={ref}
      className={`
        divide-y divide-stone-200 dark:divide-stone-700
        [table[data-striped="true"]_&>tr:nth-child(even)]:bg-stone-50
        dark:[table[data-striped="true"]_&>tr:nth-child(even)]:bg-stone-800/50
        [table[data-hoverable="true"]_&>tr]:hover:bg-stone-100
        dark:[table[data-hoverable="true"]_&>tr]:hover:bg-stone-800
        ${className}
      `}
      {...props}
    >
      {children}
    </tbody>
  );
});

Table.Row = forwardRef(function TableRow({ children, selected = false, className = '', ...props }, ref) {
  return (
    <tr
      ref={ref}
      className={`
        transition-colors
        ${selected ? 'bg-green-lightest dark:bg-green-dark/20' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </tr>
  );
});

Table.Header = forwardRef(function TableHeader({
  children,
  sortable = false,
  sorted,
  onSort,
  align = 'left',
  className = '',
  ...props
}, ref) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <th
      ref={ref}
      className={`
        px-4 py-3
        text-xs font-semibold uppercase tracking-wider
        text-stone-600 dark:text-stone-400
        ${alignClasses[align]}
        ${sortable ? 'cursor-pointer select-none hover:text-stone-900 dark:hover:text-stone-200' : ''}
        ${className}
      `}
      onClick={sortable ? onSort : undefined}
      {...props}
    >
      <div className={`flex items-center gap-1 ${align === 'right' ? 'justify-end' : align === 'center' ? 'justify-center' : ''}`}>
        {children}
        {sortable && (
          <span className="text-stone-400">
            {sorted === 'asc' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : sorted === 'desc' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            )}
          </span>
        )}
      </div>
    </th>
  );
});

Table.Cell = forwardRef(function TableCell({
  children,
  align = 'left',
  className = '',
  ...props
}, ref) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <td
      ref={ref}
      className={`
        px-4 py-3
        text-stone-700 dark:text-stone-300
        ${alignClasses[align]}
        ${className}
      `}
      {...props}
    >
      {children}
    </td>
  );
});

Table.Footer = forwardRef(function TableFooter({ children, className = '', ...props }, ref) {
  return (
    <tfoot
      ref={ref}
      className={`
        bg-stone-50 dark:bg-stone-800
        border-t border-stone-200 dark:border-stone-700
        ${className}
      `}
      {...props}
    >
      {children}
    </tfoot>
  );
});

export default Table;
