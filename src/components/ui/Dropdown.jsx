import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Dropdown = function Dropdown({ children, ...props }) {
  return <DropdownMenu.Root {...props}>{children}</DropdownMenu.Root>;
};

Dropdown.Trigger = forwardRef(function DropdownTrigger({
  children,
  asChild = true,
  className = '',
  ...props
}, ref) {
  return (
    <DropdownMenu.Trigger ref={ref} asChild={asChild} className={className} {...props}>
      {children}
    </DropdownMenu.Trigger>
  );
});

Dropdown.Content = forwardRef(function DropdownContent({
  children,
  align = 'start',
  sideOffset = 4,
  className = '',
  ...props
}, ref) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        asChild
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className={`
            min-w-[180px] z-50
            bg-white dark:bg-stone-800
            border border-stone-200 dark:border-stone-700
            rounded-lg shadow-lg
            py-1
            ${className}
          `}
        >
          {children}
        </motion.div>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
});

Dropdown.Item = forwardRef(function DropdownItem({
  children,
  icon: Icon,
  shortcut,
  destructive = false,
  disabled = false,
  className = '',
  ...props
}, ref) {
  return (
    <DropdownMenu.Item
      ref={ref}
      disabled={disabled}
      className={`
        flex items-center gap-2 px-3 py-2
        text-sm outline-none cursor-pointer
        ${destructive
          ? 'text-red-600 dark:text-red-400 focus:bg-red-50 dark:focus:bg-red-900/20'
          : 'text-stone-700 dark:text-stone-300 focus:bg-stone-100 dark:focus:bg-stone-700'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="text-xs text-stone-400 dark:text-stone-500">{shortcut}</span>
      )}
    </DropdownMenu.Item>
  );
});

Dropdown.Label = forwardRef(function DropdownLabel({
  children,
  className = '',
  ...props
}, ref) {
  return (
    <DropdownMenu.Label
      ref={ref}
      className={`px-3 py-2 text-xs font-medium text-stone-500 dark:text-stone-400 ${className}`}
      {...props}
    >
      {children}
    </DropdownMenu.Label>
  );
});

Dropdown.Separator = forwardRef(function DropdownSeparator({ className = '', ...props }, ref) {
  return (
    <DropdownMenu.Separator
      ref={ref}
      className={`my-1 h-px bg-stone-200 dark:bg-stone-700 ${className}`}
      {...props}
    />
  );
});

Dropdown.CheckboxItem = forwardRef(function DropdownCheckboxItem({
  children,
  checked,
  onCheckedChange,
  className = '',
  ...props
}, ref) {
  return (
    <DropdownMenu.CheckboxItem
      ref={ref}
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={`
        flex items-center gap-2 px-3 py-2
        text-sm outline-none cursor-pointer
        text-stone-700 dark:text-stone-300
        focus:bg-stone-100 dark:focus:bg-stone-700
        ${className}
      `}
      {...props}
    >
      <div className="w-4 h-4 flex items-center justify-center">
        <DropdownMenu.ItemIndicator>
          <svg className="w-4 h-4 text-green-main" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </DropdownMenu.ItemIndicator>
      </div>
      {children}
    </DropdownMenu.CheckboxItem>
  );
});

export default Dropdown;
