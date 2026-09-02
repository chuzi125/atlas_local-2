"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    question: "Do you need my Google password?",
    answer:
      "No. Where access is required, you can grant the appropriate access without sharing your password.",
  },
  {
    question: "Can you guarantee #1 on Google?",
    answer:
      "No. Nobody can honestly guarantee a specific ranking. What we can do is identify meaningful opportunities and help you implement them properly.",
  },
  {
    question: "How long does the work take?",
    answer:
      "The implementation timeline depends on the profile and the work required. We'll clarify this before starting.",
  },
  {
    question: "Do I have to continue paying monthly?",
    answer:
      "No. One-time optimisation and ongoing management can be discussed separately depending on what your business needs.",
  },
  {
    question: "What happens during the free audit?",
    answer:
      "We'll review your local presence, identify a few meaningful opportunities and explain what we'd prioritise.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" bg="white" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-accent">
            Common Questions
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
            What you should know.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-100 bg-brand-bg-secondary transition-colors hover:border-slate-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-sm font-semibold text-brand-text">
                  {q.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed text-slate-600">
                        {q.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
