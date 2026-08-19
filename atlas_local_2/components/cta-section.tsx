"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { SectionWrapper } from "./section-wrapper";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <SectionWrapper
      id="contact"
      bg="primary"
      className="py-24 lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to show up first?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Book a free strategy call. We will audit your current local presence
          and show you exactly how to outrank your competitors.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton
            variant="primary"
            href="#contact"
            className="bg-white text-brand-primary hover:bg-blue-50"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
