"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Star, 
  Award, 
  Globe, 
  Zap,
  Target,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

const accomplishments = [
  {
    icon: TrendingUp,
    metric: "3.2x",
    label: "Average GMB Views Increase",
    description: "Within 90 days of optimization",
    color: "from-emerald-400/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: Users,
    metric: "500+",
    label: "Businesses Optimized",
    description: "Across 15+ Nigerian cities",
    color: "from-blue-400/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    icon: Star,
    metric: "4.9",
    label: "Average Review Rating",
    description: "After reputation management",
    color: "from-amber-400/20 to-amber-600/5",
    iconColor: "text-amber-400",
  },
  {
    icon: Award,
    metric: "12",
    label: "Industry Awards",
    description: "For local search excellence",
    color: "from-purple-400/20 to-purple-600/5",
    iconColor: "text-purple-400",
  },
  {
    icon: Globe,
    metric: "Top 3",
    label: "Map Pack Ranking",
    description: "For 89% of our clients",
    color: "from-cyan-400/20 to-cyan-600/5",
    iconColor: "text-cyan-400",
  },
  {
    icon: Zap,
    metric: "48hrs",
    label: "Average Response Time",
    description: "For urgent SEO issues",
    color: "from-rose-400/20 to-rose-600/5",
    iconColor: "text-rose-400",
  },
  {
    icon: Target,
    metric: "85%",
    label: "Conversion Lift",
    description: "From profile optimization",
    color: "from-orange-400/20 to-orange-600/5",
    iconColor: "text-orange-400",
  },
  {
    icon: BarChart3,
    metric: "2.1M",
    label: "Monthly Impressions",
    description: "Generated for clients",
    color: "from-indigo-400/20 to-indigo-600/5",
    iconColor: "text-indigo-400",
  },
];

export function AccomplishmentsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate for infinite scroll illusion
  const items = [...accomplishments, ...accomplishments];

  return (
    <section id="accomplishments" className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-4">
            Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
            Results That Speak
          </h2>
          <p className="mt-4 text-brand-text/60 max-w-xl mx-auto">
            Real metrics from real campaigns. Every number represents a business that now dominates its local market.
          </p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scrollbar-hide mask-fade-x px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <motion.div
            key={`${item.label}-${i}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % accomplishments.length) * 0.1 }}
            className={cn(
              "relative flex-shrink-0 w-[300px] md:w-[340px] p-8 rounded-3xl border border-white/20 backdrop-blur-2xl overflow-hidden group cursor-default",
              "bg-gradient-to-br shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",
              item.color
            )}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
            }}
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative z-10">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/10",
                item.iconColor
              )}>
                <item.icon className="w-6 h-6" />
              </div>
              
              <div className="text-5xl font-bold text-white mb-2 tracking-tight">
                {item.metric}
              </div>
              
              <div className="text-lg font-semibold text-white/90 mb-1">
                {item.label}
              </div>
              
              <div className="text-sm text-white/50">
                {item.description}
              </div>
            </div>

            {/* Decorative blur orb */}
            <div className={cn(
              "absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-30",
              item.iconColor.replace("text-", "bg-")
            )} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}