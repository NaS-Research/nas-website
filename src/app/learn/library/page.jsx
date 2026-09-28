import Link from "next/link";
import Footer from "@/components/Footer";
import LearningCatalog from "@/components/learn/LearningCatalog";
import { pharmacyModules } from "@/data/pharmacyModules";
import { pharmacyLessons } from "@/data/pharmacyLearning";
import "./library.css";

export const metadata = {
  title: "Learning Library | NaS",
  description: "Explore modules and study guides across mechanisms, living systems, medicines, and care.",
  alternates: { canonical: "/learn/library" },
};

export default function LearningLibraryPage() {
  const entries = [
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
  ].sort((a, b) => a.title.localeCompare(b.title));
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
