import Link from "next/link";
import Footer from "@/components/Footer";
import LearningCinema from "@/components/learn/LearningCinema";
import LearningLibrary from "@/components/learn/LearningLibrary";
import { pharmacyLessons } from "@/data/pharmacyLearning";

export const metadata = {
  title: "Learn | NaS",
  description:
    "Lessons, models, and references for understanding living systems. Explore the learning library from NaS.",
  alternates: { canonical: "/learn" },
};

export default function LearningPage() {
  return (
    <div className="nas-page learning-index-page">
      <header className="learning-index-hero">
        <div className="nas-shell learning-index-hero__inner">
          <div>
            <p className="nas-kicker">Learn</p>
            <h1>The study of life.</h1>
          </div>
          <div className="learning-index-hero__intro">
            <p>Lessons, models, and references for understanding living systems.</p>
            <span>Our first subject collection explores pharmacy.</span>
          </div>
        </div>
      </header>

      <div data-page-main>
        <section className="nas-shell learning-discipline" aria-labelledby="pharmacy-title">
          <div className="learning-discipline__identity">
            <span>Rx</span>
            <p>Learn</p>
          </div>
          <div className="learning-discipline__body">
            <p className="nas-section-label">Subject collection · Pharmacy</p>
            <h2 id="pharmacy-title">Understand the medicine, the patient, and the system around them.</h2>
            <p>Pharmacy brings chemistry, physiology, evidence, formulation, safety, and human behavior into the same decision. This collection is designed to make those relationships visible.</p>
            <Link href="/learn/pharmacy" className="learning-primary-link">Explore pharmacy <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="learning-discipline__map" aria-label="Pharmacy subject preview">
            <span>Foundations</span><span>Calculations</span><span>Therapeutics</span><span>Safety</span><span>Patient care</span>
          </div>
        </section>

        <LearningCinema />

        <div className="nas-shell" id="library"><LearningLibrary lessons={pharmacyLessons} /></div>

        <section className="learning-standard">
          <div className="nas-shell learning-standard__grid">
            <div><p className="nas-section-label">The NaS standard</p><h2>Designed to be learned, checked, and revised.</h2></div>
            <div className="learning-standard__principles">
              <article><span>01</span><h3>Begin with the mechanism</h3><p>Build understanding before asking for recall.</p></article>
              <article><span>02</span><h3>Connect the decisions</h3><p>Connect scientific principles with the decisions they inform.</p></article>
              <article><span>03</span><h3>Keep the sources visible</h3><p>Every guide carries references, dates, and a revision record.</p></article>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
