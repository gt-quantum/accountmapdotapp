import { forwardRef } from 'react';

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const Checkbox = forwardRef(function Checkbox({
  size = 'md',
  label,
  description,
  error,
  disabled = false,
  className = '',
  containerClassName = '',
  ...props
}, ref) {
  const checkboxId = props.id || props.name;

  return (
    <div className={`flex items-start ${containerClassName}`}>
      <div className="flex items-center h-5">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          disabled={disabled}
          className={`
            ${sizes[size]}
            rounded border-stone-300 dark:border-stone-600
            text-green-main
            focus:ring-green-main/20 focus:ring-offset-0 focus:ring-4
            disabled:opacity-50 disabled:cursor-not-allowed
            bg-white dark:bg-stone-900
            transition-colors duration-200
            ${className}
          `}
          {...props}
        />
      </div>

      {(label || description) && (
        <div className="ml-3">
          {label && (
            <label
              htmlFor={checkboxId}
              className={`
                text-sm font-medium
                ${disabled ? 'text-stone-400 cursor-not-allowed' : 'text-stone-700 dark:text-stone-300 cursor-pointer'}
              `}
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-stone-500 dark:text-stone-400">{description}</p>
          )}
          {error && (
            <p className="text-sm text-red-500 mt-1">{error}</p>
          )}
        </div>
      )}
    </div>
  );
});

export default Checkbox;
