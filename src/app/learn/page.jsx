import Link from "next/link";
import Footer from "@/components/Footer";
import LearningLibrary from "@/components/learn/LearningLibrary";
import { pharmacyLessons } from "@/data/pharmacyLearning";

export const metadata = {
  title: "NaS Learn | Pharmacy and Life Science Education",
  description:
    "Explore carefully sourced, connected learning guides from NaS Research, beginning with pharmacy.",
  alternates: { canonical: "/learn" },
};

export default function LearningPage() {
  return (
    <div className="nas-page learning-index-page">
      <header className="learning-index-hero">
        <div className="nas-shell learning-index-hero__inner">
          <div>
            <p className="nas-kicker">NaS Learn</p>
            <h1>Knowledge should connect.</h1>
          </div>
          <div className="learning-index-hero__intro">
            <p>An educational system for understanding medications, disease, biology, and the decisions that connect them.</p>
            <span>Pharmacy, understood as a connected science.</span>
          </div>
        </div>
      </header>

      <main>
        <section className="nas-shell learning-discipline" aria-labelledby="pharmacy-title">
          <div className="learning-discipline__identity">
            <span>Rx</span>
            <p>NaS Learn</p>
          </div>
          <div className="learning-discipline__body">
            <p className="nas-section-label">Pharmacy</p>
            <h2 id="pharmacy-title">Understand the medicine, the patient, and the system around them.</h2>
            <p>Pharmacy brings chemistry, physiology, evidence, formulation, safety, and human behavior into the same decision. This collection is designed to make those relationships visible.</p>
            <Link href="/learn/pharmacy" className="learning-primary-link">Enter Pharmacy <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="learning-discipline__map" aria-label="Pharmacy subject preview">
            <span>Foundations</span><span>Calculations</span><span>Therapeutics</span><span>Safety</span><span>Patient care</span>
          </div>
        </section>

        <div className="nas-shell"><LearningLibrary lessons={pharmacyLessons} /></div>

        <section className="learning-standard">
          <div className="nas-shell learning-standard__grid">
            <div><p className="nas-section-label">The NaS standard</p><h2>Designed to be learned, checked, and revised.</h2></div>
            <div className="learning-standard__principles">
              <article><span>01</span><h3>Begin with the mechanism</h3><p>Build understanding before asking for recall.</p></article>
              <article><span>02</span><h3>Connect the decisions</h3><p>Show how evidence becomes therapy, monitoring, and counseling.</p></article>
              <article><span>03</span><h3>Keep the sources visible</h3><p>Every guide carries references, dates, and a revision record.</p></article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
