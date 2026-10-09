import Link from "next/link";
import Footer from "@/components/Footer";
import LearningCatalog from "@/components/learn/LearningCatalog";
import { pharmacyModules } from "@/data/pharmacyModules";
import { pharmacyLessons } from "@/data/pharmacyLearning";
import learningCatalogMetadata from "@/data/learningCatalogMetadata.json";
import { pharmacyCumulativeReview } from "@/data/pharmacyCumulativeReview";
import "./library.css";

export const metadata = {
  title: "Learning Library | NaS",
  description: "Explore modules and study guides across mechanisms, living systems, medicines, and care.",
  alternates: { canonical: "/learn/library" },
    openGraph: { url: "/learn/library", siteName: "NaS Research", type: "website", images: [{ url: "/nas-logo-share-v1.png", width: 1200, height: 630, alt: "NaS Research" }] },
};

export default function LearningLibraryPage() {
  const entries = [
    {
      title: "Pharmacy Knowledge Review", description: "Bring mechanisms, monitoring, counseling, calculations, and clinical cases together in a 30-question review.",
      subject: "Across pharmacy", topics: ["Pharmacy", "Clinical reasoning", "Calculations", "Cumulative review"],
      type: "Knowledge review", detail: `${pharmacyCumulativeReview.length} questions · 10 per attempt`, href: "/learn/pharmacy/review",
    },
    ...pharmacyModules.map(module => ({
      title: module.title, description: module.description, subject: module.area || "Foundations",
      topics: module.topics || [], type: "Module", detail: `${module.submodules.length} lessons`,
      href: `/learn/pharmacy/modules/${module.slug}`,
    })),
    ...pharmacyLessons.map(lesson => ({
      title: lesson.title, description: lesson.description, subject: lesson.collection,
      topics: [], type: "Study guide", detail: lesson.readTime,
      href: `/learn/pharmacy/${lesson.slug}`,
    })),
  ].map(entry => ({ ...entry, updatedAt: learningCatalogMetadata[entry.href]?.updatedAt, createdAt: learningCatalogMetadata[entry.href]?.createdAt }));
  return <div className="nas-page learning-catalog-page">
    <header className="learning-index-hero"><div className="nas-shell">
      <Link href="/learn" className="learning-back">← Learn</Link>
      <div className="learning-index-hero__inner"><div><p className="nas-kicker">Learning library</p><h1>Follow your curiosity.</h1></div>
        <div className="learning-index-hero__intro"><p>Find a topic. Understand the mechanism. Build on what you know.</p></div>
      </div>
    </div></header>
    <div className="nas-shell"><LearningCatalog entries={entries} /></div>
    <Footer />
  </div>;
}
