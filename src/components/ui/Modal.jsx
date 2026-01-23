import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';

const sizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-[calc(100vw-2rem)]',
};

export default function Modal({
  open,
  onOpenChange,
  children,
  size = 'md',
  className = '',
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

Modal.Trigger = function ModalTrigger({ children, asChild = true }) {
  return <Dialog.Trigger asChild={asChild}>{children}</Dialog.Trigger>;
};

Modal.Content = function ModalContent({
  children,
  size = 'md',
  title,
  description,
  showClose = true,
  className = '',
}) {
  return (
    <Dialog.Portal>
      <AnimatePresence>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
        </Dialog.Overlay>
      </AnimatePresence>

      <Dialog.Content asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.3 }}
          className={`
            fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-full ${sizes[size]} z-50
            bg-white dark:bg-stone-900
            rounded-xl shadow-xl
            p-6
            focus:outline-none
            ${className}
          `}
        >
          {showClose && (
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </Dialog.Close>
          )}

          {title && (
            <Dialog.Title className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
              {title}
            </Dialog.Title>
          )}

          {description && (
            <Dialog.Description className="text-sm text-stone-600 dark:text-stone-400 mb-4">
              {description}
            </Dialog.Description>
          )}

          {children}
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

Modal.Close = function ModalClose({ children, asChild = true }) {
  return <Dialog.Close asChild={asChild}>{children}</Dialog.Close>;
};

Modal.Footer = function ModalFooter({ children, className = '' }) {
  return (
    <div className={`flex justify-end gap-3 mt-6 pt-4 border-t border-stone-200 dark:border-stone-700 ${className}`}>
      {children}
    </div>
  );
};
