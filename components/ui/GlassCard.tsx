import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl ',
        hover && 'hover:bg-white/20 hover:border-navy/30 hover:scale-105 transition-all duration-500 ',
        className
      )}
    >
      {children}
    </div>
  );
}