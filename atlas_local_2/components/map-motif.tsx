import { cn } from "@/lib/utils";

export function MapMotif({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#0E2A47"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        <circle cx="12%" cy="22%" r="2.5" fill="#2D7FF9" opacity="0.5" />
        <circle cx="88%" cy="72%" r="2.5" fill="#2D7FF9" opacity="0.5" />
        <circle cx="50%" cy="48%" r="3.5" fill="#0E2A47" opacity="0.4" />

        <line
          x1="12%"
          y1="22%"
          x2="50%"
          y2="48%"
          stroke="#2D7FF9"
          strokeWidth="0.5"
          opacity="0.25"
        />
        <line
          x1="50%"
          y1="48%"
          x2="88%"
          y2="72%"
          stroke="#2D7FF9"
          strokeWidth="0.5"
          opacity="0.25"
        />

        <text
          x="13%"
          y="21%"
          fontSize="7"
          fill="#0E2A47"
          opacity="0.35"
          fontFamily="monospace"
        >
          34°S 58°W
        </text>
        <text
          x="89%"
          y="71%"
          fontSize="7"
          fill="#0E2A47"
          opacity="0.35"
          fontFamily="monospace"
        >
          40°N 74°W
        </text>
      </svg>
    </div>
  );
}
