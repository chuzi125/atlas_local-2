import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("flex items-center gap-2.5", className)}>
      <img
        src="/Logo.png"
        alt="Atlas Local"
        className="h-8 w-8 object-contain"
      />

      <span className="text-lg font-semibold tracking-tight text-brand-primary">
        Atlas Local
      </span>
    </a>
  );
}
