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
            <p className="home-learn__kicker">NaS Learn</p>
            <h2 id="home-learn-title">Learn the medicine. See the whole system.</h2>
          </div>
          <div className="home-learn__introduction">
            <p>
              Pharmacy becomes clearer when mechanism, anatomy, evidence, and patient
              care are studied together. NaS Learn is built around those connections.
            </p>
            <Link href="/learn/pharmacy">
              Enter NaS Learn <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <div className="home-learn__showcase">
          <Link
            href="/learn/pharmacy/drug-formulations-and-routes"
            className="home-learn__workspace"
            aria-label="Study drug formulations and routes in NaS Learn"
          >
            <div className="home-learn__workspace-bar">
              <span>Connected learning</span>
              <span>Pharmacy · Foundations</span>
            </div>
            <div className="home-learn__module">
              <div className="home-learn__module-index" aria-hidden="true">01</div>
              <div className="home-learn__module-copy">
                <span>Current module</span>
                <h3>Drug formulations and routes</h3>
                <p>Follow a medicine from dosage form to delivery, absorption, and clinical use.</p>
              </div>

              <div className="home-learn__concept-path" aria-label="Medication learning pathway">
                <span><small>01</small><strong>Dosage form</strong></span>
                <i aria-hidden="true">→</i>
                <span><small>02</small><strong>Route</strong></span>
                <i aria-hidden="true">→</i>
                <span><small>03</small><strong>Absorption</strong></span>
                <i aria-hidden="true">→</i>
                <span><small>04</small><strong>Clinical effect</strong></span>
              </div>

              <div className="home-learn__module-footer">
                <div><span>Read</span><span>Explore</span><span>Test</span></div>
                <strong>Open module <span aria-hidden="true">↗</span></strong>
              </div>
            </div>
          </Link>

          <div className="home-learn__paths" aria-label="Explore NaS Learn">
            <p className="home-learn__paths-label">One system, multiple ways to learn</p>
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
