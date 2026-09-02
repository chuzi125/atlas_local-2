"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { MapPin, BarChart3, Phone, Star } from "lucide-react";

const items = [
  {
    title: "Google Business Profile",
    description:
      "Business information, categories, services, photos and other profile details that help customers understand what you offer.",
    icon: MapPin,
  },
  {
    title: "Google Maps Visibility",
    description:
      "Identify how your business compares with relevant local competitors and optimise legitimate areas of improvement.",
    icon: BarChart3,
  },
  {
    title: "Customer Contact Paths",
    description:
      "Make it easier for customers to call, visit your website or take the appropriate next step.",
    icon: Phone,
  },
  {
    title: "Reviews & Reputation",
    description:
      "Help you build a better system for requesting and responding to genuine customer reviews.",
    icon: Star,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WhatWeDo() {
  return (
    <SectionWrapper id="what-we-do" bg="white" className="py-24 lg:py-32">
      <div className="mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl"
        >
          We improve the places customers look before contacting you.
        </motion.h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariant}
            className="rounded-2xl border border-slate-100 bg-brand-bg-secondary p-8 transition-colors hover:border-brand-accent/20"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white text-brand-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-brand-text">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
