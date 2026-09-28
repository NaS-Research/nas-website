import Link from "next/link";
import Footer from "@/components/Footer";
import LearningCinema from "@/components/learn/LearningCinema";

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
          </div>
        </div>
      </header>

      <div data-page-main>
        <section className="nas-shell learning-discipline" id="library" aria-labelledby="library-title">
          <div className="learning-discipline__identity">
            <span>01</span>
            <p>Learn</p>
          </div>
          <div className="learning-discipline__body">
            <p className="nas-section-label">Learning library</p>
            <h2 id="library-title">From mechanism to understanding.</h2>
            <p>Explore the connections between living systems, medicines, and care. Find a focused module or follow a subject further.</p>
            <Link href="/learn/library" className="learning-primary-link">Explore the library <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="learning-discipline__map" aria-label="Learning topics">
            <span>Mechanisms</span><span>Living systems</span><span>Medicines</span><span>Evidence</span><span>Care</span>
          </div>
        </section>

        <LearningCinema />


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
