import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'nav' | 'disabled';
  className?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ 
  children, 
  variant = "primary", 
  className = "", 
  icon: Icon, 
  onClick,
  disabled 
}: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-sm md:text-base cursor-pointer";
  
  const variants = {
    primary: "bg-red-800 hover:bg-red-700 text-primary-foreground shadow-lg shadow-red-900/20",
    secondary: "bg-transparent border-2 border-stone-500 text-stone-300 hover:border-stone-100 hover:text-stone-100",
    outline: "border border-amber-700/50 text-amber-500 hover:bg-amber-900/20",
    dark: "bg-neutral-800 text-stone-200 hover:bg-muted",
    nav: "bg-red-700 hover:bg-red-600 text-primary-foreground text-xs px-4 py-2 uppercase tracking-wider",
    disabled: "bg-neutral-800 text-stone-600 cursor-not-allowed border border-border"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled || variant === 'disabled'} 
      className={cn(baseStyle, variants[variant], className)}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};
