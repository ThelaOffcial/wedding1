import type { Metadata, Viewport } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });

export const metadata: Metadata = {
  title: "Nethmi & Kavindu | 14th February 2027",
  description: "Join us at the Crystal Ballroom, Cinnamon Grand Colombo, to celebrate the wedding of Nethmi & Kavindu.",
  openGraph: {
    title: "Nethmi & Kavindu are getting married",
    description: "14th February 2027 · Cinnamon Grand Colombo",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#FBF7EE", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
