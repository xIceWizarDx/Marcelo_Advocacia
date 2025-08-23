import React from 'react';
import * as Icons from 'lucide-react';

const variantClasses = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
  success: 'bg-success text-success-foreground hover:bg-success/90',
  warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
  danger: 'bg-error text-error-foreground hover:bg-error/90',
};

const sizeClasses = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
  xs: 'h-8 rounded-md px-2 text-xs',
  xl: 'h-12 rounded-md px-10 text-base',
};

const iconSizeMap = {
  xs: 12,
  sm: 14,
  default: 16,
  lg: 18,
  xl: 20,
  icon: 16,
};

const Button = React.forwardRef(({ className = '', variant = 'default', size = 'default', children, loading = false, iconName = null, iconPosition = 'left', iconSize = null, fullWidth = false, disabled = false, ...props }, ref) => {
  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  const classes = `${base} ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.default} ${fullWidth ? 'w-full' : ''} ${className}`;
  const IconComponent = iconName ? Icons[iconName] : null;
  const calcIconSize = iconSize || iconSizeMap[size] || 16;

  return (
    <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {IconComponent && iconPosition === 'left' && (
        <IconComponent size={calcIconSize} className={children ? 'mr-2' : ''} />
      )}
      {children}
      {IconComponent && iconPosition === 'right' && (
        <IconComponent size={calcIconSize} className={children ? 'ml-2' : ''} />
      )}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
