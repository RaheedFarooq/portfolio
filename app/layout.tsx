import type { Metadata } from "next";
import { Bricolage_Grotesque, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Raheed Farooq · Full-Stack Software Engineer",
  description:
    "Full-stack engineer in Berlin building high-traffic TypeScript products end to end: payments, event-driven systems, data pipelines, and the monitoring around them.",
  openGraph: {
    title: "Raheed Farooq · Full-Stack Software Engineer",
    description:
      "High-traffic TypeScript products, end to end. Payments, event-driven systems, pipelines, observability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
