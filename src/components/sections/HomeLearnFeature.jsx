import Link from "next/link";
import "./home-learn.css";

const learningPaths = [
  { number: "01", title: "Pharmacy", description: "Medications, therapeutics, and clinical reasoning.", href: "/learn/pharmacy", detail: "Explore the curriculum" },
  { number: "02", title: "Visual Atlas", description: "Examine anatomy through interactive models.", href: "/learn/pharmacy/atlas", detail: "Explore the atlas" },
  { number: "03", title: "Drug Library", description: "Mechanisms, uses, and safety in one reference.", href: "/learn/pharmacy/drugs", detail: "Browse medications" },
  { number: "04", title: "Practice", description: "Test your understanding with focused questions.", href: "/learn/pharmacy/review", detail: "Start a review" },
];

export default function HomeLearnFeature() {
  return (
    <section className="learn-editorial" aria-labelledby="home-learn-title">
      <div className="learn-editorial__inner">
        <header className="learn-editorial__intro">
          <p className="learn-editorial__brand">NaS <span>Learn</span></p>
          <h2 id="home-learn-title">A closer look<br />at life science.</h2>
          <p className="learn-editorial__description">Study the concepts. Explore the anatomy. Put your understanding into practice.</p>
          <Link className="learn-editorial__explore" href="/learn">Explore NaS Learn <span aria-hidden="true">↗</span></Link>
          <p className="learn-editorial__footnote">Pharmacy · Anatomy · Clinical reasoning</p>
        </header>
        <nav className="learn-editorial__collection" aria-label="NaS Learn learning paths">
          {learningPaths.map((path) => <Link href={path.href} key={path.title} className="learn-editorial__path">
            <span className="learn-editorial__number" aria-hidden="true">{path.number}</span>
            <div><h3>{path.title}</h3><p>{path.description}</p><span className="learn-editorial__detail">{path.detail}</span></div>
            <span className="learn-editorial__arrow" aria-hidden="true">↗</span>
          </Link>)}
        </nav>
      </div>
    </section>
  );
}
