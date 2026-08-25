import Link from "next/link";

const learningPaths = [
  {
    number: "01",
    title: "Visual Atlas",
    description: "Explore anatomy through interactive, clinically connected models.",
    href: "/learn/pharmacy/atlas",
  },
  {
    number: "02",
    title: "Drug Library",
    description: "Move from medication identity to mechanism, use, and safety.",
    href: "/learn/pharmacy/drugs",
  },
  {
    number: "03",
    title: "Study Guides",
    description: "Build knowledge through organized lessons and checks for understanding.",
    href: "/learn/pharmacy#learning-library",
  },
];

export default function HomeLearnFeature() {
  return (
    <section className="home-learn" aria-labelledby="home-learn-title">
      <div className="home-learn__inner">
        <header className="home-learn__header">
          <div>
            <p className="home-learn__kicker">Introducing</p>
            <h2 id="home-learn-title">NaS Learn.</h2>
          </div>
          <div className="home-learn__introduction">
            <p>
              A learning platform for pharmacy. Lessons, drug cards, practice questions,
              and interactive anatomy live together in one focused place.
            </p>
            <Link href="/learn">
              Explore NaS Learn <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <div className="home-learn__showcase">
          <Link
            href="/learn"
            className="home-learn__workspace"
            aria-label="Explore the NaS Learn platform"
          >
            <div className="home-learn__workspace-bar">
              <span>NaS Learn</span>
              <span>Pharmacy</span>
            </div>
            <div className="home-learn__module">
              <div className="home-learn__module-index" aria-hidden="true">NaS</div>
              <div className="home-learn__module-copy">
                <span>The platform</span>
                <h3>Read. Explore. Practice.</h3>
                <p>Move from foundational lessons to medication profiles, visual anatomy, and active recall within one learning environment.</p>
              </div>

              <div className="home-learn__concept-path" aria-label="Medication learning pathway">
                <span><small>01</small><strong>Lessons</strong></span>
                <i aria-hidden="true">→</i>
                <span><small>02</small><strong>Drug cards</strong></span>
                <i aria-hidden="true">→</i>
                <span><small>03</small><strong>Visual atlas</strong></span>
                <i aria-hidden="true">→</i>
                <span><small>04</small><strong>Questions</strong></span>
              </div>

              <div className="home-learn__module-footer">
                <div><span>Study</span><span>Visualize</span><span>Recall</span></div>
                <strong>Open NaS Learn <span aria-hidden="true">↗</span></strong>
              </div>
            </div>
          </Link>

          <div className="home-learn__paths" aria-label="Explore NaS Learn">
            <p className="home-learn__paths-label">Inside NaS Learn</p>
            {learningPaths.map((path) => (
              <Link href={path.href} key={path.title} className="home-learn__path">
                <span>{path.number}</span>
                <div>
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                </div>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
