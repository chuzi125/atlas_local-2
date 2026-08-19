"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import {
  MapPin,
  Globe,
  Search,
  Star,
  MessageSquare,
  Link2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Google Business Profile",
    description:
      "Complete optimization of your GBP to maximize impressions, engagement, and conversion from local searchers.",
    icon: MapPin,
  },
  {
    title: "Maps Optimization",
    description:
      "Technical and strategic ranking improvements to get you into the top 3 map pack where the majority of clicks happen.",
    icon: Globe,
  },
  {
    title: "Local SEO",
    description:
      "On-page, off-page, and technical SEO built specifically for local search intent and geographic relevance.",
    icon: Search,
  },
  {
    title: "Review Strategy",
    description:
      "Systematic generation and management of reviews that build trust, improve rankings, and convert browsers.",
    icon: Star,
  },
  {
    title: "AI Customer Engagement",
    description:
      "WhatsApp automation and AI-powered responses that turn inquiries into bookings while you focus on operations.",
    icon: MessageSquare,
  },
  {
    title: "Citation Management",
    description:
      "Consistent NAP data across 50+ directories and platforms that reinforce your geographic authority.",
    icon: Link2,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
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

export function Services() {
  return (
    <SectionWrapper id="services" bg="white" className="py-24 lg:py-32">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl"
        >
          Everything you need to{" "}
          <span className="text-brand-accent">own local search</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-slate-600"
        >
          A complete local search system designed to put your business in front
          of customers at the exact moment they are ready to buy.
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="group relative rounded-2xl border border-slate-100 bg-brand-bg-secondary p-8 transition-colors hover:border-brand-accent/20"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white text-brand-primary">
              <service.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-brand-text">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {service.description}
            </p>
            <div className="mt-4 flex items-center text-sm font-medium text-brand-accent opacity-0 transition-opacity group-hover:opacity-100">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
