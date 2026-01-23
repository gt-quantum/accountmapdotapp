import { forwardRef } from 'react';

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const Radio = forwardRef(function Radio({
  size = 'md',
  label,
  description,
  error,
  disabled = false,
  className = '',
  containerClassName = '',
  ...props
}, ref) {
  const radioId = props.id || `${props.name}-${props.value}`;

  return (
    <div className={`flex items-start ${containerClassName}`}>
      <div className="flex items-center h-5">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          disabled={disabled}
          className={`
            ${sizes[size]}
            border-stone-300 dark:border-stone-600
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
              htmlFor={radioId}
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

// Radio group wrapper
Radio.Group = function RadioGroup({
  name,
  value,
  onChange,
  options = [],
  size = 'md',
  direction = 'vertical',
  disabled = false,
  className = '',
}) {
  return (
    <div
      className={`
        flex ${direction === 'vertical' ? 'flex-col space-y-3' : 'flex-row space-x-6'}
        ${className}
      `}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          description={option.description}
          checked={value === option.value}
          onChange={() => onChange?.(option.value)}
          disabled={disabled || option.disabled}
          size={size}
        />
      ))}
    </div>
  );
};

export default Radio;
