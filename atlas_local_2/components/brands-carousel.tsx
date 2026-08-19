"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Sparkles,
  Music,
  UtensilsCrossed,
  Building2,
  ShoppingBag,
  Scale,
  Home,
  Dumbbell,
  Coffee,
  Car,
  Scissors,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { icon: Stethoscope, label: "Medical Clinics", count: "120+" },
  { icon: Sparkles, label: "Beauty Spas", count: "85+" },
  { icon: Music, label: "Night Clubs", count: "45+" },
  { icon: UtensilsCrossed, label: "Restaurants", count: "200+" },
  { icon: Building2, label: "Hotels", count: "60+" },
  { icon: ShoppingBag, label: "Retail Stores", count: "150+" },
  { icon: Scale, label: "Law Firms", count: "35+" },
  { icon: Home, label: "Real Estate", count: "70+" },
  { icon: Dumbbell, label: "Gyms & Fitness", count: "55+" },
  { icon: Coffee, label: "Cafés", count: "90+" },
  { icon: Car, label: "Auto Services", count: "40+" },
  { icon: Scissors, label: "Salons", count: "110+" },
];

export function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused) return;

    let animationId: number;
    let scrollPos = el.scrollWidth / 4; // Start in middle
    const speed = 0.4;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= (el.scrollWidth * 3) / 4) {
        scrollPos = el.scrollWidth / 4;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Triple the items for seamless infinite scroll
  const items = [...categories, ...categories, ...categories, ...categories];

  return (
    <section id="industries" className="py-24 bg-brand-bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
            Trusted Across Sectors
          </h2>
          <p className="mt-4 text-brand-text/60 max-w-xl mx-auto">
            From healthcare to hospitality, we understand the unique local search dynamics of every industry.
          </p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-5 overflow-x-auto scrollbar-hide mask-fade-x px-6 relative z-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <motion.div
            key={`${item.label}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % categories.length) * 0.05 }}
            className={cn(
              "flex-shrink-0 w-[200px] p-6 rounded-3xl border border-brand-primary/10 bg-white/80 backdrop-blur-xl",
              "hover:bg-white hover:shadow-xl hover:shadow-brand-accent/5 hover:-translate-y-1 hover:border-brand-accent/20",
              "transition-all duration-500 cursor-default group"
            )}
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-5 group-hover:bg-brand-accent/10 transition-colors duration-500">
              <item.icon className="w-7 h-7 text-brand-primary group-hover:text-brand-accent transition-colors duration-500" />
            </div>
            
            <h3 className="text-lg font-bold text-brand-text mb-1">
              {item.label}
            </h3>
            
            <p className="text-sm text-brand-text/50 font-medium">
              {item.count} clients
            </p>
          </motion.div>
        ))}
      </div>

      {/* Second row scrolling opposite direction */}
      <div className="mt-5 flex gap-5 overflow-x-auto scrollbar-hide mask-fade-x px-6 relative z-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...categories].reverse().map((item, i) => (
          <motion.div
            key={`reverse-${item.label}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={cn(
              "flex-shrink-0 w-[200px] p-6 rounded-3xl border border-brand-primary/10 bg-white/80 backdrop-blur-xl",
              "hover:bg-white hover:shadow-xl hover:shadow-brand-accent/5 hover:-translate-y-1 hover:border-brand-accent/20",
              "transition-all duration-500 cursor-default group"
            )}
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-5 group-hover:bg-brand-accent/10 transition-colors duration-500">
              <item.icon className="w-7 h-7 text-brand-primary group-hover:text-brand-accent transition-colors duration-500" />
            </div>
            
            <h3 className="text-lg font-bold text-brand-text mb-1">
              {item.label}
            </h3>
            
            <p className="text-sm text-brand-text/50 font-medium">
              {item.count} clients
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}