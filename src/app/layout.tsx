import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "NimbleLogic AI — 24/7 AI Voice Agent & Automation | NYC",
  description:
    "Never miss another service call. AI-powered voice agent that books appointments, captures leads, and sounds human. Live demo: (856) 666-3692. Based in NYC.",
  keywords: [
    "AI voice agent",
    "AI receptionist",
    "AI phone answering",
    "AI automation NYC",
    "AI assistant",
    "business automation",
  ],
  openGraph: {
    title: "NimbleLogic AI — 24/7 AI Voice Agent & Automation | NYC",
    description:
      "Never miss another service call. AI-powered voice agent that books appointments, captures leads, and sounds human. Live demo: (856) 666-3692.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NimbleLogic AI — 24/7 AI Voice Agent & Automation | NYC",
    description:
      "Never miss another service call. AI-powered voice agent that books appointments, captures leads, and sounds human.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: SITE.name,
              description:
                "AI-powered voice agents, personal assistants, and business automation services.",
              url: SITE.url,
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
              areaServed: "United States",
              serviceType: [
                "AI Voice Agent",
                "AI Personal Assistant",
                "AI Business Operations",
              ],
            }),
          }}
        />
      </head>
      <body className="noise-overlay">
        {children}
      </body>
    </html>
  );
}
