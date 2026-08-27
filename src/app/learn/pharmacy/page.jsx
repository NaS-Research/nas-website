import Link from "next/link";
import Footer from "@/components/Footer";
import LearningLibrary from "@/components/learn/LearningLibrary";
import PharmacyCurriculum from "@/components/learn/PharmacyCurriculum";
import PharmacyPlatformHome from "@/components/learn/PharmacyPlatformHome";
import { pharmacyLessons } from "@/data/pharmacyLearning";
import { pharmacyCurriculumAreas, pharmacyModules } from "@/data/pharmacyModules";

export const metadata = {
  title: "Pharmacy | NaS Learn",
  description:
    "Study pharmacy through a sequenced curriculum covering drug action, organ systems, therapeutics, safety, and patient care.",
  alternates: { canonical: "/learn/pharmacy" },
};

export default function PharmacyLearningPage() {
  const curriculumCollections = pharmacyModules.map((module) => ({
    slug: module.slug,
    number: module.number,
    title: module.title,
    description: module.description,
    topics: module.topics,
    lessonCount: module.submodules.length,
    lessonCollectionSlug: module.lessonCollectionSlug,
    area: module.area,
  }));
  const curriculumLessons = pharmacyLessons.map((lesson) => ({
    slug: lesson.slug,
    shortTitle: lesson.shortTitle,
    collectionSlug: lesson.collectionSlug,
  }));

  return (
    <div className="nas-page pharmacy-index-page">
      <header className="pharmacy-index-hero">
        <div className="nas-shell">
          <Link href="/learn" className="learning-back">← NaS Learn</Link>
          <div className="pharmacy-index-hero__heading">
            <div><p className="nas-kicker">NaS Learn</p><h1>Pharmacy</h1></div>
            <div>
              <p>Learn the science of medications as a connected system, from molecular behavior and dosage-form design to therapeutic decisions and patient care.</p>
              <span>Original educational material from NaS Research</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="nas-shell pharmacy-orientation" aria-label="How to use this collection">
          <div><span>Begin</span><strong>Understand drug action</strong></div>
          <div><span>Sequence</span><strong>Learn system by system</strong></div>
          <div><span>Apply</span><strong>Work through therapeutics</strong></div>
          <div><span>Practice</span><strong>Test what you know</strong></div>
        </section>

        <div className="nas-shell">
          <PharmacyPlatformHome />
          <PharmacyCurriculum areas={pharmacyCurriculumAreas} collections={curriculumCollections} lessons={curriculumLessons} />
          <LearningLibrary lessons={pharmacyLessons} />
        </div>

        <section className="pharmacy-use-note">
          <div className="nas-shell pharmacy-use-note__inner">
            <p className="nas-section-label">Educational use</p>
            <p>NaS Learn supports education and scientific discussion. It does not replace current prescribing information, institutional policy, clinical guidelines, or professional judgment.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
