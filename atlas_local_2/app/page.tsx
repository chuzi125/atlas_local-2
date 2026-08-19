import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AccomplishmentsCarousel } from "@/components/accomplishments-carousel";
import { BrandsCarousel } from "@/components/brands-carousel";
import { LocationPresence } from "@/components/location-presence";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AccomplishmentsCarousel />
      <BrandsCarousel />
      <LocationPresence />
      <ContactFooter />
    </main>
  );
}