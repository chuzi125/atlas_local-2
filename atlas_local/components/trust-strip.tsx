"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";

const industries = [
  "Restaurants",
  "Dental",
  "Legal",
  "Home Services",
  "Retail",
  "Healthcare",
];

export function TrustStrip() {
  return (
    <SectionWrapper
      bg="secondary"
      className="border-y border-slate-100 py-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="mb-6 text-sm font-medium uppercase tracking-wider text-slate-500">
          Built for local businesses that depend on being found
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
            >
              {industry}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
