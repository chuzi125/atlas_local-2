import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt="Atlas Local"
        width={32}
        height={32}
        priority
      />

      <span className="text-lg font-semibold tracking-tight text-brand-primary">
        Atlas Local
      </span>
    </a>
  );
}
