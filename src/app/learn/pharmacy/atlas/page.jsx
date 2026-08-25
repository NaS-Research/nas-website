import Link from "next/link";
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
      <header className="pharmacy-atlas-hero">
        <div className="nas-shell">
          <Link href="/learn/pharmacy" className="learning-back">← Pharmacy home</Link>
          <p className="nas-kicker">NaS Learn · Pharmacy</p>
          <div>
            <h1>Visual Atlas</h1>
            <p>Use interactive anatomy when spatial context makes the medicine easier to understand.</p>
          </div>
        </div>
      </header>
      <main className="nas-shell pharmacy-atlas-main">
        <PharmacyExplorer />
      </main>
      <Footer />
    </div>
  );
}
