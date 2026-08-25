import Link from "next/link";
import DrugLibrary from "@/components/learn/DrugLibrary";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Drug Library | NaS Learn",
  description: "Study ranked Top 100, 200, and 300 medication collections, filter completed profiles by class, and search current RxNorm medication concepts.",
  alternates: { canonical: "/learn/pharmacy/drugs" },
};

export default function DrugLibraryPage() {
  return (
    <div className="nas-page drug-library-page">
      <main className="nas-shell">
        <Link href="/learn/pharmacy" className="learning-back drug-library-back">← Pharmacy</Link>
        <DrugLibrary />
      </main>
      <Footer />
    </div>
  );
}
