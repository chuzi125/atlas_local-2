"use client";

import { SectionWrapper } from "./section-wrapper";
import {
  Stethoscope,
  Sparkles,
  Music,
  Scissors,
  Hotel,
  Car,
  UtensilsCrossed,
  Dumbbell,
  GraduationCap,
  ShoppingBag,
  Building2,
  Wrench,
} from "lucide-react";

const categories = [
  { label: "Clinics", icon: Stethoscope },
  { label: "Spas", icon: Sparkles },
  { label: "Clubs", icon: Music },
  { label: "Salons", icon: Scissors },
  { label: "Hotels", icon: Hotel },
  { label: "Auto Shops", icon: Car },
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Gyms", icon: Dumbbell },
  { label: "Schools", icon: GraduationCap },
  { label: "Retail", icon: ShoppingBag },
  { label: "Law Firms", icon: Building2 },
  { label: "Home Services", icon: Wrench },
];

// Duplicate for seamless loop
const allCategories = [...categories, ...categories];

export function BrandsCarousel() {
  return (
    <SectionWrapper bg="white" className="py-20 lg:py-28">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Industries We Serve
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-brand-text sm:text-3xl">
          Built for every local business
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee">
          {allCategories.map((cat, i) => (
            <div
              key={`${cat.label}-${i}`}
              className="mx-3 flex shrink-0 items-center gap-3 rounded-2xl border border-slate-100 bg-brand-bg-secondary px-6 py-4 transition-colors hover:border-brand-accent/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-primary">
                <cat.icon className="h-5 w-5" />
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-brand-text">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
