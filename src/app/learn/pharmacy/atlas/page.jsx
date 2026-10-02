import Footer from "@/components/Footer";
import PharmacyExplorer from "@/components/learn/PharmacyExplorer";

export const metadata = {
  title: "Human Atlas | NaS",
  description: "Explore anatomy, pharmacology, clinical reasoning, safety, and medication interactions through interactive visual models.",
  alternates: { canonical: "/learn/pharmacy/atlas" },
    openGraph: { url: "/learn/pharmacy/atlas", siteName: "NaS Research", type: "website", images: [{ url: "/nas-logo-share-v1.png", width: 1200, height: 630, alt: "NaS Research" }] },
};

export default function PharmacyAtlasPage() {
  return (
    <div className="nas-page pharmacy-atlas-page">
      <div data-page-main className="nas-shell pharmacy-atlas-main">
        <h1 className="sr-only">Human Atlas</h1>
        <PharmacyExplorer />
      </div>
      <Footer />
    </div>
  );
}
