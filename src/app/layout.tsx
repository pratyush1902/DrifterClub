import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drifter.buzz"),
  title: {
    default: "Drifter | Patna & Bihar Adventure Trips, Treks and Backpacking Community",
    template: "%s | Drifter",
  },
  description:
    "Drifter is Patna's adventure travel community for weekend trips from Bihar, Nepal backpacking, Himalayan treks, pine forest camping, and curated group expeditions from Patna Basecamp.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Drifter Patna",
    "Drifter Club",
    "adventure trips from Patna",
    "Bihar travel community",
    "trekking club in Patna",
    "backpacking trips from Bihar",
    "group trips from Patna",
    "travel agency in Patna for adventure trips",
    "weekend trips from Patna",
    "weekend getaway from Bihar",
    "Patna to Nepal trip",
    "Nepal backpacking from Patna",
    "Secret Himalayan getaway from Patna",
    "Manebhanjan Sandakphu trek from Patna",
    "Patna to Kasol backpacking",
    "Patna to Jibhi trip",
    "Patna to Meghalaya backpacking",
    "Bihar adventure community",
    "Patna trekking club",
  ],
  authors: [{ name: "Drifter Community", url: "https://www.drifter.buzz" }],
  creator: "Drifter Community",
  publisher: "Trevmonk Travelsolution Pvt Ltd",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "NwccIIfj64r8nJvdVerX4JQ1VBzCTFZHeYX1KITdZVk",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.drifter.buzz",
    siteName: "Drifter Community",
    title: "Drifter | Patna & Bihar Adventure Trips, Treks and Backpacking Community",
    description:
      "Join Bihar's curated outdoor tribe. Backpacking drops, weekend forest camping, Nepal trips, and Himalayan expeditions starting directly from Patna Basecamp.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Drifter Expedition Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drifter | Patna & Bihar Adventure Travel Community",
    description:
      "Curated weekend trips, Nepal backpacking, pine forest camping, and mountain treks starting from Patna, Bihar.",
    images: ["https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1A14",
  width: "device-width",
  initialScale: 1,
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.drifter.buzz/#organization",
      name: "Drifter",
      legalName: "Trevmonk Travelsolution Pvt Ltd",
      url: "https://www.drifter.buzz",
      logo: "https://www.drifter.buzz/icon.png",
      sameAs: ["https://www.instagram.com/thedrifter.club/"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7978578168",
        contactType: "customer support",
        areaServed: "IN-BR",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": ["LocalBusiness", "TravelAgency", "SportsActivityLocation"],
      "@id": "https://www.drifter.buzz/#localbusiness",
      name: "Drifter Patna Basecamp",
      url: "https://www.drifter.buzz",
      image: "https://www.drifter.buzz/icon.png",
      telephone: "+91-7978578168",
      priceRange: "INR 1200-18000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Maurya Lok Complex",
        addressLocality: "Patna",
        addressRegion: "Bihar",
        postalCode: "800001",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Patna" },
        { "@type": "State", name: "Bihar" },
      ],
      parentOrganization: { "@id": "https://www.drifter.buzz/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.drifter.buzz/#website",
      url: "https://www.drifter.buzz",
      name: "Drifter",
      publisher: { "@id": "https://www.drifter.buzz/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.drifter.buzz/stories?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
