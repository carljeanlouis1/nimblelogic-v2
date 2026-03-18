import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE, FAQ_ITEMS } from "@/lib/constants";

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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VV9MPS1289"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VV9MPS1289');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: SITE.name,
              description:
                "AI-powered voice agents, personal assistants, and business automation services for small businesses. Based in NYC with remote and in-person setup.",
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
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI Automation Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Voice Agent",
                      description:
                        "24/7 AI-powered call answering, lead qualification, and appointment booking.",
                    },
                    price: "199",
                    priceCurrency: "USD",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "199",
                      priceCurrency: "USD",
                      unitText: "MONTH",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Personal Assistant",
                      description:
                        "Custom AI assistant setup — handles email, scheduling, research, and task management.",
                    },
                    price: "349",
                    priceCurrency: "USD",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "349",
                      priceCurrency: "USD",
                      unitText: "ONE_TIME",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Business Operations",
                      description:
                        "End-to-end AI automation for business workflows — from customer intake to invoicing.",
                    },
                    price: "699",
                    priceCurrency: "USD",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "699",
                      priceCurrency: "USD",
                      unitText: "ONE_TIME",
                    },
                  },
                ],
              },
              sameAs: [SITE.linkedin, SITE.twitter],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
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
