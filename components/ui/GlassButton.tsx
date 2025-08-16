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
    primary: 'bg-gradient-to-r from-purple to-lavender text-white hover:shadow-lg hover:shadow-purple/25 hover:scale-105',
    secondary: 'backdrop-blur-lg bg-white/10 border border-white/20 text-navy hover:bg-white/20 hover:text-white',
    ghost: 'text-navy hover:text-purple hover:bg-white/10'
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