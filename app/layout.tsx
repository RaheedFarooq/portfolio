import type { Metadata } from "next";
import { Bricolage_Grotesque, Spline_Sans_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://raheedfarooq.vercel.app"),
  title: "Raheed Farooq · Full-Stack Software Engineer",
  description:
    "Full-stack engineer in Berlin building high-traffic TypeScript products end to end: payments, event-driven systems, data pipelines, and the monitoring around them.",
  alternates: { canonical: "/" },
  verification: { google: "-tabTm3AdZm0NdQapl7Wg3m4fA12M4EVnP_3GBwpu9w" },
  openGraph: {
    title: "Raheed Farooq · Full-Stack Software Engineer",
    description:
      "High-traffic TypeScript products, end to end. Payments, event-driven systems, pipelines, observability.",
    url: "https://raheedfarooq.vercel.app",
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raheed Farooq",
  jobTitle: "Full-Stack Software Engineer",
  url: "https://raheedfarooq.vercel.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  sameAs: [
    "https://github.com/RaheedFarooq",
    "https://de.linkedin.com/in/raheed-farooq",
    "https://www.toptal.com/developers/resume/raheed-farooq",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
