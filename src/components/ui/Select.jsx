import { forwardRef } from 'react';

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const Select = forwardRef(function Select({
  size = 'md',
  label,
  error,
  hint,
  options = [],
  placeholder = 'Select an option',
  disabled = false,
  required = false,
  className = '',
  containerClassName = '',
  ...props
}, ref) {
  const selectId = props.id || props.name;

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          disabled={disabled}
          required={required}
          className={`
            w-full rounded-lg border transition-colors duration-200 appearance-none
            ${sizes[size]}
            pr-10
            ${error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-stone-300 dark:border-stone-600 focus:border-green-main focus:ring-green-main/20'
            }
            ${disabled
              ? 'bg-stone-100 dark:bg-stone-800 cursor-not-allowed opacity-60'
              : 'bg-white dark:bg-stone-900'
            }
            text-stone-900 dark:text-stone-100
            focus:outline-none focus:ring-4
            ${className}
          `}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron icon */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-stone-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {(error || hint) && (
        <p className={`mt-1.5 text-sm ${error ? 'text-red-500' : 'text-stone-500 dark:text-stone-400'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

export default Select;
