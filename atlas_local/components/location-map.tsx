"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { MapPin } from "lucide-react";

export function LocationMap() {
  return (
    <SectionWrapper bg="secondary" className="py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-accent">
            Regional Presence
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
            Rooted in Lagos. <br />
            <span className="text-brand-accent">Serving Nigeria.</span>
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
            Our team is based in Lagos and works directly with businesses across
            the South-West, South-South, and the Federal Capital Territory.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10">
                <MapPin className="h-3.5 w-3.5 text-brand-accent" />
              </div>
              <div>
                <p className="font-semibold text-brand-text">Lagos</p>
                <p className="text-sm text-slate-500">Primary operations & client base</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                <MapPin className="h-3.5 w-3.5 text-brand-primary" />
              </div>
              <div>
                <p className="font-semibold text-brand-text">Ogun, Oyo, Osun, Ekiti, Ondo, Edo, Delta</p>
                <p className="text-sm text-slate-500">Active service coverage</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10">
                <MapPin className="h-3.5 w-3.5 text-brand-accent" />
              </div>
              <div>
                <p className="font-semibold text-brand-text">Abuja FCT</p>
                <p className="text-sm text-slate-500">Federal presence & consulting</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <svg
              viewBox="0 0 500 520"
              className="mx-auto h-auto w-full max-w-md"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Base Nigeria outline — simplified stylized shape */}
              <path
                d="M120 80 
                   Q180 60 240 70 
                   Q320 55 380 90 
                   Q420 130 430 190 
                   Q445 260 420 330 
                   Q400 400 350 440 
                   Q280 480 200 470 
                   Q130 460 90 400 
                   Q60 330 70 250 
                   Q75 170 100 110 
                   Z"
                fill="#F8FAFC"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />

              {/* State boundaries — simplified */}
              {/* Lagos (small coastal) */}
              <path
                d="M95 385 L125 380 L130 405 L105 415 Z"
                fill="#2D7FF9"
                fillOpacity="0.15"
                stroke="#2D7FF9"
                strokeWidth="1.5"
              />
              {/* Ogun */}
              <path
                d="M95 385 L125 380 L135 350 L110 340 L85 360 Z"
                fill="#2D7FF9"
                fillOpacity="0.08"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Oyo */}
              <path
                d="M85 360 L110 340 L130 300 L100 290 L70 320 Z"
                fill="#2D7FF9"
                fillOpacity="0.06"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Osun */}
              <path
                d="M130 300 L160 295 L170 330 L140 340 L135 350 Z"
                fill="#2D7FF9"
                fillOpacity="0.06"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Ekiti */}
              <path
                d="M160 295 L190 285 L195 320 L170 330 Z"
                fill="#2D7FF9"
                fillOpacity="0.06"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Ondo */}
              <path
                d="M110 340 L130 300 L160 295 L170 330 L140 340 L135 350 L125 380 Z"
                fill="#2D7FF9"
                fillOpacity="0.06"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Edo */}
              <path
                d="M170 330 L195 320 L210 350 L190 370 L180 360 Z"
                fill="#2D7FF9"
                fillOpacity="0.06"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Delta */}
              <path
                d="M190 370 L210 350 L230 360 L220 390 L200 395 Z"
                fill="#2D7FF9"
                fillOpacity="0.06"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              {/* Abuja FCT */}
              <path
                d="M220 220 L245 215 L250 240 L225 245 Z"
                fill="#0E2A47"
                fillOpacity="0.12"
                stroke="#0E2A47"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />

              {/* Lagos pulse marker */}
              <g>
                <circle cx="110" cy="400" r="12" fill="#2D7FF9" fillOpacity="0.15">
                  <animate
                    attributeName="r"
                    values="12;20;12"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="fillOpacity"
                    values="0.15;0;0.15"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="110" cy="400" r="5" fill="#2D7FF9" />
                <circle cx="110" cy="400" r="2.5" fill="white" />
              </g>

              {/* Abuja marker */}
              <g>
                <circle cx="232" cy="230" r="6" fill="#0E2A47" />
                <circle cx="232" cy="230" r="2.5" fill="white" />
              </g>

              {/* Labels */}
              <text
                x="110"
                y="430"
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#0E2A47"
                fontFamily="var(--font-geist-sans), system-ui, sans-serif"
              >
                Lagos
              </text>
              <text
                x="232"
                y="250"
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#0E2A47"
                fontFamily="var(--font-geist-sans), system-ui, sans-serif"
              >
                Abuja
              </text>

              {/* Coordinate labels — cartography motif */}
              <text
                x="420"
                y="460"
                textAnchor="end"
                fontSize="8"
                fill="#94A3B8"
                fontFamily="monospace"
              >
                6°N 3°E
              </text>
            </svg>

            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-accent" />
                Primary Hub
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-primary" />
                Federal Presence
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-300" />
                Service Area
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
