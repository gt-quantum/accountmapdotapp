import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

export default function Tooltip({
  children,
  content,
  side = 'top',
  align = 'center',
  delayDuration = 200,
  className = '',
}) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={4}
            asChild
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className={`
                z-50 px-3 py-1.5
                text-sm text-white
                bg-stone-900 dark:bg-stone-700
                rounded-md shadow-lg
                ${className}
              `}
            >
              {content}
              <TooltipPrimitive.Arrow className="fill-stone-900 dark:fill-stone-700" />
            </motion.div>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

// For more complex tooltip usage
Tooltip.Provider = TooltipPrimitive.Provider;
Tooltip.Root = TooltipPrimitive.Root;

Tooltip.Trigger = forwardRef(function TooltipTrigger({ children, asChild = true, ...props }, ref) {
  return (
    <TooltipPrimitive.Trigger ref={ref} asChild={asChild} {...props}>
      {children}
    </TooltipPrimitive.Trigger>
  );
});

Tooltip.Content = forwardRef(function TooltipContent({
  children,
  side = 'top',
  align = 'center',
  className = '',
  ...props
}, ref) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        side={side}
        align={align}
        sideOffset={4}
        className={`
          z-50 px-3 py-1.5
          text-sm text-white
          bg-stone-900 dark:bg-stone-700
          rounded-md shadow-lg
          animate-in fade-in-0 zoom-in-95
          ${className}
        `}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-stone-900 dark:fill-stone-700" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
});
