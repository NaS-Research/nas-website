import Image from "next/image";
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
            <h2 id="home-learn-title">Pharmacy, built to be explored.</h2>
          </div>
          <div className="home-learn__introduction">
            <p>
              A connected learning environment for understanding medications through
              anatomy, pharmacology, clinical reasoning, safety, and interactions.
            </p>
            <Link href="/learn/pharmacy">
              Enter NaS Learn <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <div className="home-learn__showcase">
          <Link
            href="/learn/pharmacy/atlas"
            className="home-learn__visual"
            aria-label="Open the interactive pharmacy visual atlas"
          >
            <div className="home-learn__visual-bar">
              <span>Interactive anatomy</span>
              <span>Human heart</span>
            </div>
            <div className="home-learn__image-wrap">
              <div className="home-learn__orbit" aria-hidden="true" />
              <Image
                src="/learn/models/realistic-heart-preview.jpeg"
                alt="Detailed anatomical model of the human heart"
                width={1200}
                height={1200}
                sizes="(max-width: 767px) 100vw, 58vw"
                className="home-learn__image"
              />
              <span className="home-learn__visual-cta">
                Open Visual Atlas <span aria-hidden="true">↗</span>
              </span>
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
