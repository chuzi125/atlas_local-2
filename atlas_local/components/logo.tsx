import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import logoImg from "../../public/logo.png"; // Relative path from components/ to public/

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src={logoImg}
        alt="Atlas Local"
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 object-contain"
        priority
      />
      <span className="text-lg font-semibold tracking-tight text-brand-primary">
        Atlas Local
      </span>
    </Link>
  );
}

