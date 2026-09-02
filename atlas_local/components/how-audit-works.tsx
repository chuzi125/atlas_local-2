"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Search, Scale, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "We check your visibility",
    description:
      "We search for the services you offer in your area and compare your presence with relevant competitors.",
    icon: Search,
  },
  {
    number: "02",
    title: "We find the gaps",
    description:
      "We examine your Google Business Profile for missing information, weak customer journeys and opportunities for improvement.",
    icon: Scale,
  },
  {
    number: "03",
    title: "You get a clear action plan",
    description:
      "We'll show you what we'd prioritise, why it matters and what can realistically be improved.",
    icon: Lightbulb,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export function HowAuditWorks() {
  return (
    <SectionWrapper id="audit" bg="primary" className="relative overflow-hidden py-24 lg:py-32">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="audit-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#audit-grid)" />
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
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Before we recommend anything, we look at your business.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-accent">
                <step.icon className="h-5 w-5" />
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-accent">
                Step {step.number}
              </p>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-blue-100/80">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center text-sm text-blue-200/70"
        >
          No obligation. No guaranteed rankings. Just a clear picture of where
          you stand.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
