import { motion } from 'framer-motion';

const sizes = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl',
  '2xl': 'w-20 h-20 text-2xl',
};

const statusColors = {
  online: 'bg-green-main',
  offline: 'bg-stone-400',
  busy: 'bg-red-500',
  away: 'bg-brass-main',
};

export default function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  status,
  rounded = 'full',
  animated = false,
  className = '',
  ...props
}) {
  const Component = animated ? motion.div : 'div';

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };

  const animationProps = animated ? {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 500, damping: 30 }
  } : {};

  return (
    <Component
      className={`relative inline-flex ${className}`}
      {...animationProps}
      {...props}
    >
      <div
        className={`
          ${sizes[size]}
          ${roundedClasses[rounded]}
          overflow-hidden flex items-center justify-center
          bg-gradient-to-br from-green-light to-green-main
          text-white font-medium
        `}
      >
        {src ? (
          <img
            src={src}
            alt={alt || name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>

      {status && (
        <span
          className={`
            absolute bottom-0 right-0
            w-3 h-3 rounded-full
            border-2 border-white dark:border-stone-900
            ${statusColors[status]}
          `}
        />
      )}
    </Component>
  );
}

// Avatar group for stacking
Avatar.Group = function AvatarGroup({ children, max = 5, size = 'md', className = '' }) {
  const avatars = Array.isArray(children) ? children : [children];
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className={`flex -space-x-3 ${className}`}>
      {visible.map((avatar, index) => (
        <div key={index} className="ring-2 ring-white dark:ring-stone-900 rounded-full">
          {avatar}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={`
            ${sizes[size]}
            rounded-full flex items-center justify-center
            bg-stone-200 dark:bg-stone-700
            text-stone-600 dark:text-stone-300
            font-medium ring-2 ring-white dark:ring-stone-900
          `}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};
