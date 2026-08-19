import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Local — Premium Local SEO & Google Maps Optimization",
  description: "Dominate local search. We optimize Google Business Profiles and local SEO for clinics, spas, clubs, and businesses across Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}