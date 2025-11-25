import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function GlassButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: GlassButtonProps) {
  const baseClasses = 'relative overflow-hidden rounded-full font-medium transition-all duration-300 group';
  
  const variants = {
    primary: 'bg-gradient-to-r color-text-white hover:shadow-lg hover:shadow-navy/25 hover:scale-105  border hover:border-black border-navy/25 ',
    secondary: 'bg-gradient-to-r color-text-white hover:shadow-xl hover:shadow-black/15 hover:scale-105  border hover:border-black border-navy/25',
    ghost: 'text-navy hover:text-black hover:bg-white/10 hover:shadow-lg hover:shadow-navy/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-lavender to-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
}