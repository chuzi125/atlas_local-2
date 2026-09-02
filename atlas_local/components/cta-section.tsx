"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { SectionWrapper } from "./section-wrapper";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTASection() {
  return (
    <SectionWrapper id="contact" bg="primary" className="py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Want to see how your business compares on Google?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Request a free audit and we'll identify some of the biggest
          opportunities on your Google Business Profile.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton
            variant="primary"
            href="https://wa.me/2349134099397"
            className="bg-white text-brand-primary hover:bg-blue-50"
          >
            Request My Free Audit
            <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-blue-200/80 sm:flex-row sm:gap-8">
          <a
            href="tel:+2349134099397"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            +234 913 409 9397
          </a>
          <a
            href="mailto:hello@atlaslocal.bond"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
            hello@atlaslocal.bond
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
