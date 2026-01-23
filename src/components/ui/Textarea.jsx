import { forwardRef } from 'react';

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const Textarea = forwardRef(function Textarea({
  size = 'md',
  label,
  error,
  hint,
  disabled = false,
  required = false,
  rows = 4,
  resize = 'vertical',
  className = '',
  containerClassName = '',
  ...props
}, ref) {
  const textareaId = props.id || props.name;

  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        ref={ref}
        id={textareaId}
        disabled={disabled}
        required={required}
        rows={rows}
        className={`
          w-full rounded-lg border transition-colors duration-200
          ${sizes[size]}
          ${resizeClasses[resize]}
          ${error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
            : 'border-stone-300 dark:border-stone-600 focus:border-green-main focus:ring-green-main/20'
          }
          ${disabled
            ? 'bg-stone-100 dark:bg-stone-800 cursor-not-allowed opacity-60'
            : 'bg-white dark:bg-stone-900'
          }
          text-stone-900 dark:text-stone-100
          placeholder:text-stone-400 dark:placeholder:text-stone-500
          focus:outline-none focus:ring-4
          ${className}
        `}
        {...props}
      />

      {(error || hint) && (
        <p className={`mt-1.5 text-sm ${error ? 'text-red-500' : 'text-stone-500 dark:text-stone-400'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

export default Textarea;
