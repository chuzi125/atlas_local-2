"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { CTAButton } from "./cta-button";
import { MobileNav } from "./mobile-nav";
import { Menu, X, Phone } from "lucide-react";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "The Audit", href: "#audit" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 16);
      setTopBarVisible(currentY < lastScrollY || currentY < 60);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top announcement bar */}
      <div
        className={cn(
          "fixed left-0 right-0 top-0 z-50 bg-brand-primary transition-transform duration-300",
          !topBarVisible && "-translate-y-full"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-blue-100 sm:text-sm">
          <Phone className="h-3.5 w-3.5" />
          <span>Free audits available this week.</span>
          <a
            href="tel:+2349134099397"
            className="font-semibold text-white underline underline-offset-2"
          >
            +234 913 409 9397
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300",
          topBarVisible ? "top-9" : "top-0",
          scrolled || !topBarVisible
            ? "border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between">
            <Logo />

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-500 transition-colors hover:text-brand-primary"
                >
                  {link.label}
                </a>
              ))}
              <CTAButton variant="primary" href="#contact">
                Get a Free Audit
              </CTAButton>
            </div>

            <button
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-50 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>
      </header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
