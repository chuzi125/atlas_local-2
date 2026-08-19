"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#accomplishments" },
  { label: "Industries", href: "#industries" },
  { label: "Presence", href: "#presence" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className={cn(
              "w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300",
              scrolled ? "bg-brand-primary" : "bg-white/20"
            )}>
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors duration-300",
              scrolled ? "text-brand-primary" : "text-white"
            )}>
              Atlas Local
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10",
                  scrolled ? "text-brand-primary/80 hover:text-brand-primary" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                "ml-3 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                scrolled
                  ? "bg-brand-primary text-white hover:bg-brand-primary/90"
                  : "bg-white text-brand-primary hover:bg-white/90"
              )}
            >
              Get Audit
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-brand-primary" : "text-white"
            )}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-dark pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-white/90 hover:bg-white/10 text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-4 py-3 rounded-xl bg-brand-accent text-white text-center font-semibold"
              >
                Get Free Audit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}