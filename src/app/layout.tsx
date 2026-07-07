import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} | Movers in Sunny Isles Beach & South Florida`,
    template: `%s | ${site.name}`,
  },
  description:
    "United Movers is a Sunny Isles Beach moving company handling condo, home, and office moves across Miami-Dade and Broward. Trained crews, flat quotes, and full insurance. Call 786-419-4969.",
  keywords: [
    "movers Sunny Isles Beach",
    "South Florida moving company",
    "condo movers Miami",
    "Aventura movers",
    "long distance movers Florida",
  ],
  openGraph: {
    title: `${site.name} | Movers in Sunny Isles Beach & South Florida`,
    description:
      "Condo, home, and office moves across Miami-Dade and Broward. Trained crews, flat quotes, full insurance.",
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: site.legalName,
  image: `https://${site.domain}/og.jpg`,
  telephone: site.phone,
  email: site.email,
  url: `https://${site.domain}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: ["Miami-Dade County", "Broward County", "Palm Beach County"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
