import Link from "next/link";
import DrugLibrary from "@/components/learn/DrugLibrary";
import Footer from "@/components/Footer";
import styles from "@/components/learn/DrugLibraryPagination.module.css";

export const metadata = {
  title: "Drug Library | NaS Learn",
  description: "Browse medication profiles alphabetically, filter by therapeutic class, and search current RxNorm medication concepts.",
  alternates: { canonical: "/learn/pharmacy/drugs" },
    openGraph: { url: "/learn/pharmacy/drugs", siteName: "NaS Research", type: "website", images: [{ url: "/nas-logo-share-v1.png", width: 1200, height: 630, alt: "NaS Research" }] },
};

export default function DrugLibraryPage() {
  return (
    <div className={`nas-page drug-library-page ${styles.page}`}>
      <div data-page-main className="nas-shell">
        <Link href="/learn" className="learning-back drug-library-back">← NaS Learn</Link>
        <DrugLibrary />
      </div>
      <Footer />
    </div>
  );
}
