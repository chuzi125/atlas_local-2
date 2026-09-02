import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlaslocal.bond"),
  title: "Atlas Local — Free Google Maps Audit for Nigerian Businesses",
  description:
    "When customers search for businesses like yours, do they find you? Get a free Google Maps audit and see how your profile compares with competitors already ranking around you.",
  keywords: [
    "local SEO Nigeria",
    "Google Maps optimization",
    "Google Business Profile",
    "local search audit",
    "Nigeria business visibility",
  ],
  authors: [{ name: "Atlas Local" }],
  openGraph: {
    title: "Atlas Local — Free Google Maps Audit for Nigerian Businesses",
    description:
      "Get a free Google Maps audit and see how your profile compares with competitors already ranking around you.",
    type: "website",
    locale: "en_NG",
    siteName: "Atlas Local",
    url: "https://atlaslocal.bond",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Local — Free Google Maps Audit for Nigerian Businesses",
    description: "See how your business compares on Google Maps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
