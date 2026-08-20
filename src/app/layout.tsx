import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://thedrifter.club"),
  title: {
    default: "Drifter | Bihar's Modern Adventure & Backpacking Community",
    template: "%s | Drifter",
  },
  description:
    "Drifter is Bihar's premier outdoor adventure community based in Patna. We organize curated expedition drops, pine forest camping, Himalayan treks, and weekend getaways from Patna.",
  keywords: [
    "Drifter Patna",
    "Drifter Club",
    "weekend trips from Patna",
    "Patna to Nepal trip",
    "Nepal backpacking from Patna",
    "Netarhat camping from Patna",
    "Patna to Kasol backpacking",
    "Patna to Jibhi trip",
    "Patna to Meghalaya backpacking",
    "Bihar adventure community",
    "Patna trekking club",
  ],
  authors: [{ name: "Drifter Community", url: "https://thedrifter.club" }],
  creator: "Drifter Community",
  publisher: "Trevmonk Travelsolution Pvt Ltd",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "NwccIIfj64r8nJvdVerX4JQ1VBzCTFZHeYX1KITdZVk",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thedrifter.club",
    siteName: "Drifter Community",
    title: "Drifter | Bihar's Modern Adventure & Backpacking Community",
    description:
      "Join Bihar's curated outdoor tribe. Backpacking drops, weekend forest camping, and Himalayan expeditions starting directly from Patna Basecamp.",
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
    title: "Drifter | Bihar's Modern Adventure Community",
    description:
      "Curated backpacking drops, pine forest camping, and mountain treks starting from Patna, Bihar.",
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
      </body>
    </html>
  );
}
