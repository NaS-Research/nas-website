import Link from "next/link";
import Footer from "@/components/Footer";
import LearningLibrary from "@/components/learn/LearningLibrary";
import PharmacyCurriculum from "@/components/learn/PharmacyCurriculum";
import { pharmacyCollections, pharmacyLessons } from "@/data/pharmacyLearning";

export const metadata = {
  title: "Pharmacy | NaS Learn",
  description:
    "Study pharmacy through connected, carefully sourced guides covering foundations, therapeutics, calculations, safety, and patient care.",
  alternates: { canonical: "/learn/pharmacy" },
};

export default function PharmacyLearningPage() {
  return (
    <div className="nas-page pharmacy-index-page">
      <header className="pharmacy-index-hero">
        <div className="nas-shell">
          <Link href="/learn" className="learning-back">← NaS Learn</Link>
          <div className="pharmacy-index-hero__heading">
            <div><p className="nas-kicker">Discipline 01</p><h1>Pharmacy</h1></div>
            <div>
              <p>Learn the science of medications as a connected system, from molecular behavior and dosage-form design to therapeutic decisions and patient care.</p>
              <span>Original educational material from NaS Research</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="nas-shell pharmacy-orientation" aria-label="How to use this collection">
          <div><span>Begin</span><strong>Start with foundations</strong></div>
          <div><span>Connect</span><strong>Move across body systems</strong></div>
          <div><span>Apply</span><strong>Use cases and study checks</strong></div>
          <div><span>Verify</span><strong>Follow current sources</strong></div>
        </section>

        <div className="nas-shell">
          <PharmacyCurriculum collections={pharmacyCollections} lessons={pharmacyLessons} />
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
