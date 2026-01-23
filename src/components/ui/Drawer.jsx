import { createContext, useContext, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DrawerContext = createContext(null);

const positions = {
  left: {
    container: 'left-0 top-0 h-full',
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
  },
  right: {
    container: 'right-0 top-0 h-full',
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
  },
  top: {
    container: 'top-0 left-0 w-full',
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '-100%' },
  },
  bottom: {
    container: 'bottom-0 left-0 w-full',
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
  },
};

const sizes = {
  sm: { left: 'w-64', right: 'w-64', top: 'h-48', bottom: 'h-48' },
  md: { left: 'w-80', right: 'w-80', top: 'h-64', bottom: 'h-64' },
  lg: { left: 'w-96', right: 'w-96', top: 'h-80', bottom: 'h-80' },
  xl: { left: 'w-[480px]', right: 'w-[480px]', top: 'h-96', bottom: 'h-96' },
  full: { left: 'w-full', right: 'w-full', top: 'h-full', bottom: 'h-full' },
};

export default function Drawer({
  open,
  onClose,
  position = 'right',
  size = 'md',
  children,
}) {
  return (
    <DrawerContext.Provider value={{ open, onClose, position, size }}>
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            {children}
          </>
        )}
      </AnimatePresence>
    </DrawerContext.Provider>
  );
}

Drawer.Content = forwardRef(function DrawerContent({
  children,
  className = '',
  ...props
}, ref) {
  const { onClose, position, size } = useContext(DrawerContext);
  const positionConfig = positions[position];
  const sizeClass = sizes[size][position];

  return (
    <motion.div
      ref={ref}
      initial={positionConfig.initial}
      animate={positionConfig.animate}
      exit={positionConfig.exit}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className={`
        fixed z-50
        ${positionConfig.container}
        ${sizeClass}
        bg-white dark:bg-stone-900
        shadow-2xl
        flex flex-col
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Drawer.Header = forwardRef(function DrawerHeader({
  children,
  showClose = true,
  className = '',
  ...props
}, ref) {
  const { onClose } = useContext(DrawerContext);

  return (
    <div
      ref={ref}
      className={`
        flex items-center justify-between
        px-6 py-4
        border-b border-stone-200 dark:border-stone-700
        ${className}
      `}
      {...props}
    >
      <div className="font-semibold text-stone-900 dark:text-stone-100">
        {children}
      </div>
      {showClose && (
        <button
          onClick={onClose}
          className="p-2 -mr-2 rounded-lg text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          aria-label="Close drawer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
});

Drawer.Body = forwardRef(function DrawerBody({
  children,
  className = '',
  ...props
}, ref) {
  return (
    <div
      ref={ref}
      className={`flex-1 overflow-y-auto p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Drawer.Footer = forwardRef(function DrawerFooter({
  children,
  className = '',
  ...props
}, ref) {
  return (
    <div
      ref={ref}
      className={`
        px-6 py-4
        border-t border-stone-200 dark:border-stone-700
        bg-stone-50 dark:bg-stone-800/50
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});
