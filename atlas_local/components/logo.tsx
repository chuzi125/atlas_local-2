import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary">
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
        <div className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
      </div>
      <span className="text-lg font-semibold tracking-tight text-brand-primary">
        Atlas Local
      </span>
    </a>
  );
}
