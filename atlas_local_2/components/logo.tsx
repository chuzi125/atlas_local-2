import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt="Atlas Local"
        width={140}
        height={32}
        className="h-8 w-auto"
        priority
      />
      
    </a>
  );
}
