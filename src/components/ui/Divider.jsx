export default function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  className = '',
  ...props
}) {
  const variants = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  if (orientation === 'vertical') {
    return (
      <div
        className={`
          inline-block h-full w-px
          bg-stone-200 dark:bg-stone-700
          ${className}
        `}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div className={`flex items-center gap-4 ${className}`} {...props}>
        <div className={`flex-1 border-t border-stone-200 dark:border-stone-700 ${variants[variant]}`} />
        <span className="text-sm text-stone-500 dark:text-stone-400 shrink-0">{label}</span>
        <div className={`flex-1 border-t border-stone-200 dark:border-stone-700 ${variants[variant]}`} />
      </div>
    );
  }

  return (
    <hr
      className={`
        border-t border-stone-200 dark:border-stone-700
        ${variants[variant]}
        ${className}
      `}
      {...props}
    />
  );
}
