import { forwardRef } from 'react';

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const Input = forwardRef(function Input({
  type = 'text',
  size = 'md',
  label,
  error,
  hint,
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  required = false,
  className = '',
  containerClassName = '',
  ...props
}, ref) {
  const inputId = props.id || props.name;

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="w-5 h-5 text-stone-400" />
          </div>
        )}

        <input
          ref={ref}
          type={type}
          id={inputId}
          disabled={disabled}
          required={required}
          className={`
            w-full rounded-lg border transition-colors duration-200
            ${sizes[size]}
            ${Icon && iconPosition === 'left' ? 'pl-10' : ''}
            ${Icon && iconPosition === 'right' ? 'pr-10' : ''}
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

        {Icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon className="w-5 h-5 text-stone-400" />
          </div>
        )}
      </div>

      {(error || hint) && (
        <p className={`mt-1.5 text-sm ${error ? 'text-red-500' : 'text-stone-500 dark:text-stone-400'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

export default Input;
