import { motion } from 'framer-motion';

export default function Skeleton({
  width,
  height,
  rounded = 'md',
  animated = true,
  className = '',
  ...props
}) {
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const baseClasses = `
    bg-stone-200 dark:bg-stone-700
    ${roundedClasses[rounded]}
    ${className}
  `;

  const style = {
    width: width || '100%',
    height: height || '1rem',
  };

  if (animated) {
    return (
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className={baseClasses}
        style={style}
        {...props}
      />
    );
  }

  return <div className={baseClasses} style={style} {...props} />;
}

// Pre-built skeleton patterns
Skeleton.Text = function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="0.875rem"
          width={i === lines - 1 ? '75%' : '100%'}
        />
      ))}
    </div>
  );
};

Skeleton.Avatar = function SkeletonAvatar({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <Skeleton
      rounded="full"
      className={`${sizes[size]} ${className}`}
      width="auto"
      height="auto"
    />
  );
};

Skeleton.Card = function SkeletonCard({ className = '' }) {
  return (
    <div className={`p-5 rounded-lg border border-stone-200 dark:border-stone-700 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Skeleton.Avatar />
        <div className="flex-1 space-y-2">
          <Skeleton height="0.875rem" width="40%" />
          <Skeleton height="0.75rem" width="25%" />
        </div>
      </div>
      <Skeleton.Text lines={3} />
      <div className="flex gap-2 mt-4">
        <Skeleton height="2rem" width="5rem" rounded="lg" />
        <Skeleton height="2rem" width="5rem" rounded="lg" />
      </div>
    </div>
  );
};

Skeleton.Image = function SkeletonImage({ aspectRatio = '16/9', className = '' }) {
  return (
    <Skeleton
      rounded="lg"
      className={className}
      style={{ aspectRatio, width: '100%', height: 'auto' }}
      width="100%"
      height="auto"
    />
  );
};
