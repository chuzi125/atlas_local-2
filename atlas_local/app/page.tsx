import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { WhatWeDo } from "@/components/what-we-do";
import { HowAuditWorks } from "@/components/how-audit-works";
import { SampleAudit } from "@/components/sample-audit";
import { WhoItsFor } from "@/components/who-its-for";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <WhatWeDo />
      <HowAuditWorks />
      <SampleAudit />
      <WhoItsFor />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
