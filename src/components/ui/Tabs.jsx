import * as TabsPrimitive from '@radix-ui/react-tabs';
import { forwardRef } from 'react';

const variants = {
  underline: {
    list: 'border-b border-stone-200 dark:border-stone-700',
    trigger: `
      px-4 py-2 -mb-px
      border-b-2 border-transparent
      data-[state=active]:border-green-main
      data-[state=active]:text-green-dark dark:data-[state=active]:text-green-light
    `,
  },
  pills: {
    list: 'bg-stone-100 dark:bg-stone-800 p-1 rounded-lg',
    trigger: `
      px-4 py-2 rounded-md
      data-[state=active]:bg-white dark:data-[state=active]:bg-stone-700
      data-[state=active]:shadow-sm
    `,
  },
  bordered: {
    list: 'gap-2',
    trigger: `
      px-4 py-2 rounded-lg border
      border-stone-200 dark:border-stone-700
      data-[state=active]:border-green-main
      data-[state=active]:bg-green-lightest dark:data-[state=active]:bg-green-dark/20
    `,
  },
};

const Tabs = forwardRef(function Tabs({
  children,
  defaultValue,
  value,
  onValueChange,
  className = '',
  ...props
}, ref) {
  return (
    <TabsPrimitive.Root
      ref={ref}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={className}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
});

const TabsList = forwardRef(function TabsList({
  children,
  variant = 'underline',
  className = '',
  ...props
}, ref) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={`
        flex items-center
        ${variants[variant].list}
        ${className}
      `}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  );
});

const TabsTrigger = forwardRef(function TabsTrigger({
  children,
  value,
  variant = 'underline',
  disabled = false,
  className = '',
  ...props
}, ref) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      value={value}
      disabled={disabled}
      className={`
        text-sm font-medium
        text-stone-600 dark:text-stone-400
        hover:text-stone-900 dark:hover:text-stone-200
        transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-main/50
        ${variants[variant].trigger}
        ${className}
      `}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
});

const TabsContent = forwardRef(function TabsContent({
  children,
  value,
  className = '',
  ...props
}, ref) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      value={value}
      className={`
        mt-4
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-main/50
        ${className}
      `}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
});

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export default Tabs;
