import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "secondary" | "primary";
}

export function SectionWrapper({
  children,
  className,
  id,
  bg = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full px-4 sm:px-6 lg:px-8",
        bg === "secondary" && "bg-brand-bg-secondary",
        bg === "primary" && "bg-brand-primary",
        bg === "white" && "bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
