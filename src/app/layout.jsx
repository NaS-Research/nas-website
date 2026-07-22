import "./globals.css";
import Navbar from "@/components/Navbar";

const siteDescription =
  "NaS Research builds systems, knowledge foundations, and scientific instruments for investigating difficult questions across the life sciences.";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NaS Research",
  url: "https://nasresearch.bio",
  logo: "https://nasresearch.bio/web-app-manifest-512x512.png",
  description: siteDescription,
  foundingLocation: {
    "@type": "Place",
    name: "Chicago, Illinois",
  },
  sameAs: [
    "https://www.linkedin.com/company/nasresearch/",
    "https://www.instagram.com/nasresearch/",
  ],
  founder: {
    "@type": "Person",
    name: "Dalron J. Robertson",
  },
};

export const metadata = {
  /* ---------- Basic identity ---------- */
  title: "NaS Research | Life Science Research",
  description: siteDescription,
  authors: [{ name: "NaS Research", url: "https://nasresearch.bio" }],
  creator: "NaS Research",
  publisher: "NaS Research",
  category: "Science and research",
  keywords: [
    "NaS Research",
    "NaS",
    "life science research",
    "scientific discovery",
    "scientific infrastructure",
    "biomedical research",
    "knowledge systems",
    "research tools",
    "Chicago research",
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
    description: siteDescription,
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

  twitter: {
    card: "summary_large_image",
    title: "NaS Research",
    description: siteDescription,
    images: ["/og.png"],
  },

  /* ---------- SEO helpers ---------- */
  alternates: { canonical: "https://nasresearch.bio" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
