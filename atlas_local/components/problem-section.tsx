"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Search } from "lucide-react";

export function ProblemSection() {
  return (
    <SectionWrapper bg="secondary" className="py-20 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brand-primary">
          <Search className="h-5 w-5" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
          Your customers are already searching.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Every day, people search Google for services, restaurants, clinics,
          hotels and businesses near them. The question is whether your business
          gives them enough reason — and enough information — to choose you.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
