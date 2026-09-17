import Footer from "@/components/Footer";
import PharmacyExplorer from "@/components/learn/PharmacyExplorer";

export const metadata = {
  title: "Visual Atlas | NaS Learn Pharmacy",
  description: "Explore anatomy, pharmacology, clinical reasoning, safety, and medication interactions through interactive visual models.",
  alternates: { canonical: "/learn/pharmacy/atlas" },
};

export default function PharmacyAtlasPage() {
  return (
    <div className="nas-page pharmacy-atlas-page">
      <div data-page-main className="nas-shell pharmacy-atlas-main">
        <h1 className="sr-only">Visual Atlas</h1>
        <PharmacyExplorer />
      </div>
      <Footer />
    </div>
  );
}
