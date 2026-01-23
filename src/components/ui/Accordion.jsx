import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef } from 'react';

const Accordion = forwardRef(function Accordion({
  children,
  type = 'single',
  collapsible = true,
  defaultValue,
  className = '',
  ...props
}, ref) {
  return (
    <AccordionPrimitive.Root
      ref={ref}
      type={type}
      collapsible={collapsible}
      defaultValue={defaultValue}
      className={`space-y-2 ${className}`}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
});

const AccordionItem = forwardRef(function AccordionItem({
  children,
  value,
  className = '',
  ...props
}, ref) {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      value={value}
      className={`
        rounded-lg border border-stone-200 dark:border-stone-700
        bg-white dark:bg-stone-800/50
        overflow-hidden
        ${className}
      `}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
});

const AccordionTrigger = forwardRef(function AccordionTrigger({
  children,
  className = '',
  ...props
}, ref) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={`
          flex flex-1 items-center justify-between
          px-4 py-3
          text-left text-sm font-medium
          text-stone-900 dark:text-stone-100
          hover:bg-stone-50 dark:hover:bg-stone-800
          transition-colors
          group
          ${className}
        `}
        {...props}
      >
        {children}
        <svg
          className="w-5 h-5 text-stone-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

const AccordionContent = forwardRef(function AccordionContent({
  children,
  className = '',
  ...props
}, ref) {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
      {...props}
    >
      <div className={`px-4 pb-4 text-sm text-stone-600 dark:text-stone-400 ${className}`}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
