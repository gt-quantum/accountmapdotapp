import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const sizes = {
  sm: { track: 'w-8 h-4', thumb: 'w-3 h-3', translate: 'translate-x-4' },
  md: { track: 'w-11 h-6', thumb: 'w-5 h-5', translate: 'translate-x-5' },
  lg: { track: 'w-14 h-7', thumb: 'w-6 h-6', translate: 'translate-x-7' },
};

const Toggle = forwardRef(function Toggle({
  size = 'md',
  label,
  description,
  checked = false,
  disabled = false,
  onChange,
  className = '',
  containerClassName = '',
  ...props
}, ref) {
  const toggleId = props.id || props.name;
  const sizeConfig = sizes[size];

  return (
    <div className={`flex items-start ${containerClassName}`}>
      <button
        ref={ref}
        type="button"
        role="switch"
        id={toggleId}
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`
          relative inline-flex shrink-0 cursor-pointer rounded-full
          transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-green-main/20
          disabled:opacity-50 disabled:cursor-not-allowed
          ${sizeConfig.track}
          ${checked
            ? 'bg-green-main'
            : 'bg-stone-300 dark:bg-stone-600'
          }
          ${className}
        `}
        {...props}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`
            pointer-events-none inline-block rounded-full
            bg-white shadow-md ring-0
            ${sizeConfig.thumb}
            ${checked ? sizeConfig.translate : 'translate-x-0.5'}
            ${size === 'sm' ? 'mt-0.5' : 'mt-0.5'}
          `}
        />
      </button>

      {(label || description) && (
        <div className="ml-3">
          {label && (
            <label
              htmlFor={toggleId}
              onClick={() => !disabled && onChange?.(!checked)}
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
        </div>
      )}
    </div>
  );
});

export default Toggle;
