import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)}>
      <img
        src="/logo.png"
        alt="Atlas Local"
        width={32}
        height={32}
        className="h-8 w-8 object-contain shrink-0"
      />
      <span className="text-lg font-semibold tracking-tight text-brand-primary">
        Atlas Local
      </span>
    </Link>
  );
}
