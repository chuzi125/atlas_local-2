"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { CTAButton } from "./cta-button";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

const findings = [
  {
    type: "issue",
    title: "Only 12 reviews",
    detail: "Competitors in your area have 150–400 recent reviews.",
  },
  {
    type: "issue",
    title: "Core services aren't clearly listed",
    detail: "Opportunity: Make it easier for Google and customers to understand what's offered.",
  },
  {
    type: "issue",
    title: "Weak customer journey",
    detail: "Opportunity: Reduce friction between discovery and contact.",
  },
];

export function SampleAudit() {
  return (
    <SectionWrapper bg="white" className="py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-accent">
            Sample Audit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
            See what a real Atlas Local audit looks like.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
            Every business is different. That's why we don't send generic "SEO
            reports." We look at your actual profile, your actual local market
            and the businesses competing for the same customers.
          </p>
          <div className="mt-8">
            <CTAButton variant="primary" href="#contact">
              Request Your Free Audit
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </motion.div>

        {/* Audit card mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Sample Audit Report
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Lagos-based wellness spa
                </p>
              </div>
              <span className="rounded-full bg-brand-bg-secondary px-3 py-1 text-xs font-semibold text-brand-primary">
                Example
              </span>
            </div>

            <div className="space-y-4">
              {findings.map((finding, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-slate-100 bg-brand-bg-secondary p-4"
                >
                  <div className="mt-0.5 shrink-0">
                    {finding.type === "issue" ? (
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    ) : (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-text">
                      {finding.title}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {finding.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-4">
              <p className="text-sm font-semibold text-brand-accent">
                Recommended priority:
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Implement a systematic review request process and update service
                listings with detailed descriptions and pricing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
