"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPin, Navigation, Building } from "lucide-react";

const nigeriaStates = [
  { name: "Lagos", x: 140, y: 380, size: 8, primary: true, clients: 180 },
  { name: "Ogun", x: 125, y: 360, size: 5, primary: false, clients: 45 },
  { name: "Oyo", x: 100, y: 340, size: 5, primary: false, clients: 38 },
  { name: "Osun", x: 120, y: 345, size: 4, primary: false, clients: 22 },
  { name: "Ekiti", x: 135, y: 335, size: 4, primary: false, clients: 15 },
  { name: "Ondo", x: 150, y: 355, size: 4, primary: false, clients: 28 },
  { name: "Edo", x: 170, y: 370, size: 4, primary: false, clients: 19 },
  { name: "Delta", x: 165, y: 385, size: 4, primary: false, clients: 24 },
  { name: "Abuja FCT", x: 200, y: 280, size: 6, primary: true, clients: 95 },
  { name: "Rivers", x: 185, y: 395, size: 5, primary: false, clients: 52 },
  { name: "Kano", x: 220, y: 150, size: 5, primary: false, clients: 31 },
  { name: "Kaduna", x: 210, y: 200, size: 4, primary: false, clients: 27 },
];

export function LocationPresence() {
  return (
    <section id="presence" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-4">
            Nationwide Reach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
            Rooted in Lagos,{" "}
            <span className="text-brand-accent">Reaching Nigeria</span>
          </h2>
          <p className="mt-4 text-brand-text/60 max-w-xl mx-auto">
            Our optimization network spans the South-West corridor with deep presence in Lagos, and strategic coverage across Abuja and key commercial hubs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative bg-brand-primary rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl">
              {/* Map background grid */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Nigeria SVG Map */}
              <svg
                viewBox="0 0 320 450"
                className="w-full h-auto relative z-10"
                style={{ maxHeight: "500px" }}
              >
                {/* Simplified Nigeria outline */}
                <path
                  d="M 180 50 
                     L 200 60 L 220 80 L 240 100 L 250 130 
                     L 245 160 L 250 190 L 260 220 L 255 250 
                     L 245 280 L 235 310 L 225 340 L 215 370 
                     L 200 400 L 180 420 L 160 430 L 140 425 
                     L 120 415 L 100 400 L 85 380 L 75 350 
                     L 70 320 L 65 290 L 60 260 L 55 230 
                     L 50 200 L 55 170 L 65 140 L 80 110 
                     L 100 85 L 120 65 L 150 55 Z"
                  fill="rgba(255,255,255,0.05)"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                />

                {/* Lagos axis highlight - southwestern region glow */}
                <ellipse
                  cx="140"
                  cy="370"
                  rx="55"
                  ry="45"
                  fill="url(#lagosGradient)"
                  opacity="0.4"
                />
                
                {/* Abuja splash */}
                <ellipse
                  cx="200"
                  cy="280"
                  rx="35"
                  ry="30"
                  fill="url(#abujaGradient)"
                  opacity="0.3"
                />

                {/* Connection lines from Abuja to Lagos axis */}
                <line
                  x1="200"
                  y1="280"
                  x2="140"
                  y2="380"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
                <line
                  x1="200"
                  y1="280"
                  x2="125"
                  y2="360"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />

                <defs>
                  <radialGradient id="lagosGradient">
                    <stop offset="0%" stopColor="#2D7FF9" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#2D7FF9" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="abujaGradient">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#2D7FF9" />
                  </linearGradient>
                </defs>

                {/* State markers */}
                {nigeriaStates.map((state, i) => (
                  <motion.g
                    key={state.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    {/* Pulse ring for primary cities */}
                    {state.primary && (
                      <circle
                        cx={state.x}
                        cy={state.y}
                        r={state.size * 3}
                        fill="none"
                        stroke={state.name === "Lagos" ? "#2D7FF9" : "#10B981"}
                        strokeWidth="1"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          values={`${state.size * 2};${state.size * 4};${state.size * 2}`}
                          dur="3s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.3;0;0.3"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    
                    {/* Core dot */}
                    <circle
                      cx={state.x}
                      cy={state.y}
                      r={state.size}
                      fill={state.name === "Lagos" ? "#2D7FF9" : state.name === "Abuja FCT" ? "#10B981" : "rgba(255,255,255,0.6)"}
                      className="drop-shadow-lg"
                    />
                    
                    {/* Label */}
                    <text
                      x={state.x + (state.x > 160 ? 12 : -12)}
                      y={state.y + 4}
                      textAnchor={state.x > 160 ? "start" : "end"}
                      fill="white"
                      fontSize="11"
                      fontWeight={state.primary ? "700" : "500"}
                      opacity="0.9"
                    >
                      {state.name}
                    </text>
                    
                    {/* Client count tooltip-style */}
                    {state.primary && (
                      <g transform={`translate(${state.x - 25}, ${state.y - 28})`}>
                        <rect
                          x="0"
                          y="0"
                          width="50"
                          height="20"
                          rx="6"
                          fill="rgba(255,255,255,0.15)"
                          stroke="rgba(255,255,255,0.2)"
                        />
                        <text
                          x="25"
                          y="14"
                          textAnchor="middle"
                          fill="white"
                          fontSize="10"
                          fontWeight="600"
                        >
                          {state.clients}+ clients
                        </text>
                      </g>
                    )}
                  </motion.g>
                ))}

                {/* Legend */}
                <g transform="translate(20, 20)">
                  <circle cx="6" cy="6" r="5" fill="#2D7FF9" />
                  <text x="16" y="10" fill="white" fontSize="11" opacity="0.8">Primary Hub</text>
                  <circle cx="6" cy="24" r="5" fill="#10B981" />
                  <text x="16" y="28" fill="white" fontSize="11" opacity="0.8">Strategic Node</text>
                  <circle cx="6" cy="42" r="4" fill="rgba(255,255,255,0.6)" />
                  <text x="16" y="46" fill="white" fontSize="11" opacity="0.8">Active Region</text>
                </g>
              </svg>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 right-6 glass-dark rounded-2xl p-4 max-w-[180px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Navigation className="w-4 h-4 text-brand-accent" />
                  <span className="text-white/60 text-xs font-medium">Coverage</span>
                </div>
                <div className="text-2xl font-bold text-white">12 States</div>
                <div className="text-xs text-white/50 mt-1">South-West focus corridor</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                city: "Lagos",
                role: "Headquarters & Primary Market",
                clients: "180+",
                desc: "Ikeja, Lekki, Victoria Island, Yaba, Surulere — full metro coverage",
                color: "bg-brand-accent",
                icon: MapPin,
              },
              {
                city: "Abuja",
                role: "Strategic Northern Node",
                clients: "95+",
                desc: "Wuse, Maitama, Garki, Gwarinpa — federal district dominance",
                color: "bg-emerald-500",
                icon: Building,
              },
              {
                city: "South-West Corridor",
                role: "Ibadan · Abeokuta · Akure · Benin",
                clients: "150+",
                desc: "Deep penetration across Oyo, Ogun, Ondo, Edo, Osun, Ekiti, Delta",
                color: "bg-purple-500",
                icon: Navigation,
              },
            ].map((location) => (
              <div
                key={location.city}
                className="group p-6 rounded-3xl bg-white border border-brand-primary/5 hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", location.color + "/10")}>
                    <location.icon className={cn("w-5 h-5", location.color.replace("bg-", "text-"))} />
                  </div>
                  <span className="text-2xl font-bold text-brand-text">{location.clients}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-1">{location.city}</h3>
                <p className="text-sm font-medium text-brand-accent mb-2">{location.role}</p>
                <p className="text-sm text-brand-text/50 leading-relaxed">{location.desc}</p>
              </div>
            ))}

            <div className="p-6 rounded-3xl bg-brand-primary text-white">
              <h4 className="font-bold mb-2">Expanding Reach</h4>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Currently onboarding partners in Port Harcourt, Kano, and Kaduna. 
                Full national coverage by Q2 2026.
              </p>
              <div className="flex gap-2">
                {["Rivers", "Kano", "Kaduna"].map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}