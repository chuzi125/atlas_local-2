import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function CTAButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-brand-primary text-white hover:bg-brand-primary/90 hover:shadow-lg hover:shadow-brand-primary/10",
    secondary:
      "bg-brand-bg-secondary text-brand-text border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {variant === "primary" && <ArrowRight className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {variant === "primary" && <ArrowRight className="h-4 w-4" />}
    </button>
  );
}
