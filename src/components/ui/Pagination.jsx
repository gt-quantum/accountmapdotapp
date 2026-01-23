import { forwardRef } from 'react';

const Pagination = forwardRef(function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  siblingCount = 1,
  size = 'md',
  className = '',
  ...props
}, ref) {
  const sizes = {
    sm: 'h-8 min-w-8 text-sm',
    md: 'h-10 min-w-10 text-sm',
    lg: 'h-12 min-w-12 text-base',
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < totalPages - 1;

    if (!showLeftEllipsis && showRightEllipsis) {
      // Show pages at start
      for (let i = 1; i <= Math.max(rightSibling, 3); i++) {
        pages.push(i);
      }
      pages.push('ellipsis-right');
      pages.push(totalPages);
    } else if (showLeftEllipsis && !showRightEllipsis) {
      // Show pages at end
      pages.push(1);
      pages.push('ellipsis-left');
      for (let i = Math.min(leftSibling, totalPages - 2); i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (showLeftEllipsis && showRightEllipsis) {
      // Show ellipsis on both sides
      pages.push(1);
      pages.push('ellipsis-left');
      for (let i = leftSibling; i <= rightSibling; i++) {
        pages.push(i);
      }
      pages.push('ellipsis-right');
      pages.push(totalPages);
    } else {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      ref={ref}
      role="navigation"
      aria-label="Pagination"
      className={`flex items-center gap-1 ${className}`}
      {...props}
    >
      {/* First page */}
      {showFirstLast && (
        <PaginationButton
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          size={sizes[size]}
          aria-label="Go to first page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </PaginationButton>
      )}

      {/* Previous page */}
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        size={sizes[size]}
        aria-label="Go to previous page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </PaginationButton>

      {/* Page numbers */}
      {pages.map((page, index) => {
        if (typeof page === 'string') {
          return (
            <span
              key={page}
              className={`${sizes[size]} flex items-center justify-center text-stone-400`}
            >
              ...
            </span>
          );
        }

        return (
          <PaginationButton
            key={page}
            onClick={() => onPageChange(page)}
            active={page === currentPage}
            size={sizes[size]}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </PaginationButton>
        );
      })}

      {/* Next page */}
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        size={sizes[size]}
        aria-label="Go to next page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </PaginationButton>

      {/* Last page */}
      {showFirstLast && (
        <PaginationButton
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          size={sizes[size]}
          aria-label="Go to last page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </PaginationButton>
      )}
    </nav>
  );
});

function PaginationButton({ children, active, disabled, size, className = '', ...props }) {
  return (
    <button
      disabled={disabled}
      className={`
        ${size}
        px-2 rounded-lg font-medium
        transition-colors
        flex items-center justify-center
        ${active
          ? 'bg-green-main text-white'
          : disabled
            ? 'text-stone-300 dark:text-stone-600 cursor-not-allowed'
            : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

// Simple prev/next pagination
Pagination.Simple = function PaginationSimple({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>

      <span className="text-sm text-stone-600 dark:text-stone-400">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
