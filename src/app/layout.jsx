import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  /* ---------- Basic identity ---------- */
  title: "NaS Research | Computational Tools for Life‑Science",
  description:
    "NaS Research builds open computational tools, AI models, and automated systems that accelerate discovery across biology, medicine, and biotechnology.",
  authors: [{ name: "NaS Research", url: "https://nasresearch.bio" }],
  keywords: [
    "NaS Research",
    "NaS",
    "computational biology",
    "AI drug discovery",
    "life‑science engineering",
    "robotic labs",
    "bioinformatics",
    "high‑performance computing",
    "biotechnology",
    "precision medicine"
  ],
  metadataBase: new URL("https://nasresearch.bio"),

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#000000" }],
  },

  /* ---------- Open Graph / social preview ---------- */
  openGraph: {
    title: "NaS Research",
    description:
      "Building computational tools and AI-driven platforms for next‑generation life‑science research.",
    url: "https://nasresearch.bio",
    siteName: "NaS Research",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: new URL("/og.png", new URL("https://nasresearch.bio")).href,
        width: 1200,
        height: 630,
        alt: "NaS Research site preview",
      },
    ],
  },

  /* ---------- SEO helpers ---------- */
  alternates: { canonical: "https://nasresearch.bio" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  /* ---------- Structured Data (JSON-LD) ---------- */
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NaS Research",
    "url": "https://nasresearch.bio",
    "sameAs": [
      "https://www.linkedin.com/company/nasresearch/",
      "https://www.instagram.com/nasresearch/"
    ],
    "founder": {
      "@type": "Person",
      "name": "Dalron J. Robertson"
    }
  }
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicons & PWA assets */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96"  href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-red-500 min-h-screen antialiased">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}