"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { TrendingUp, MapPin, Star, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    value: "340+",
    label: "Local Businesses Ranked",
    description: "Across Nigeria and West Africa",
    icon: TrendingUp,
  },
  {
    value: "92%",
    label: "Top 3 Map Pack Rate",
    description: "Within 90 days of engagement",
    icon: MapPin,
  },
  {
    value: "4.9★",
    label: "Average Review Score",
    description: "After review strategy implementation",
    icon: Star,
  },
  {
    value: "12K+",
    label: "Reviews Generated",
    description: "Through systematic campaigns",
    icon: Users,
  },
  {
    value: "6+",
    label: "Years of Focus",
    description: "Exclusively on local search",
    icon: Award,
  },
  {
    value: "48h",
    label: "Response Time",
    description: "For all client inquiries",
    icon: Clock,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Accomplishments() {
  return (
    <SectionWrapper
      id="results"
      bg="primary"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="accomplish-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#accomplish-grid)" />
        </svg>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-accent">
            Track Record
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Numbers that speak
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            We measure success in rankings, reviews, and revenue — not vanity metrics.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-accent">
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-4xl font-bold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-blue-100">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-blue-200/70">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
