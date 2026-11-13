import type { Metadata, Viewport } from "next";
import "./globals.css";
import Tracker from "@/components/Tracker";

export const metadata: Metadata = {
  title: "Atlas Local — Get found on Google in Lekki",
  description:
    "Atlas Local fixes the Google presence of Lekki businesses — Google Business Profile setup, reviews and local search — so customers find you first. Free audit, one-time setup, Lekki, Lagos.",
  other: {
    "color-scheme": "light dark",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Playfair+Display:ital,wght@0,600;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>
        <Tracker />
        {children}
      </body>
    </html>
  );
}
