"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { MapMotif } from "./map-motif";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-white pt-24">
      <MapMotif />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-brand-text sm:text-5xl lg:text-6xl">
            When customers search for businesses like yours,{" "}
            <span className="text-brand-accent">do they find you?</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Atlas Local helps Nigerian businesses improve their visibility on
            Google Search and Maps — so more of the people already looking for
            your services can find and contact you.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton variant="primary" href="#contact">
              Get a Free Google Maps Audit
            </CTAButton>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            See how your profile compares with businesses already ranking around
            you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
