"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Sparkles, Stethoscope, Hotel, Briefcase } from "lucide-react";

const niches = [
  {
    title: "Spas & Beauty",
    description:
      "Customers actively search for treatments and nearby providers. We help them find you first.",
    icon: Sparkles,
  },
  {
    title: "Clinics & Healthcare Practices",
    description:
      "Make it easier for potential patients to find accurate information and contact your practice.",
    icon: Stethoscope,
  },
  {
    title: "Hotels & Short Lets",
    description:
      "Improve the information customers see when comparing places to stay.",
    icon: Hotel,
  },
  {
    title: "Professional Services",
    description:
      "For businesses such as law firms and other location-dependent services.",
    icon: Briefcase,
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WhoItsFor() {
  return (
    <SectionWrapper
      id="who-its-for"
      bg="secondary"
      className="py-24 lg:py-32"
    >
      <div className="mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl"
        >
          Best suited for businesses where location matters.
        </motion.h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {niches.map((niche) => (
          <motion.div
            key={niche.title}
            variants={item}
            className="rounded-2xl border border-slate-100 bg-white p-8 transition-colors hover:border-brand-accent/20"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-brand-bg-secondary text-brand-primary">
              <niche.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-brand-text">
              {niche.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {niche.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
