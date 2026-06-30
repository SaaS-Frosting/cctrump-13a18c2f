import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'red' | 'amber';
}

export const Badge = ({ children, color = "red" }: BadgeProps) => (
  <span className={cn(
    "inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full",
    color === 'red' 
      ? 'bg-red-900/80 text-red-600 border border-red-700' 
      : 'bg-amber-900/50 text-amber-500 border border-amber-700'
  )}>
    {children}
  </span>
);
