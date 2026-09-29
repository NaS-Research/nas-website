import Link from "next/link";
import "./home-learn.css";

const learningPaths = [
  { number: "01", title: "Learning Library", description: "Lessons across the life sciences.", href: "/learn/library", detail: "Browse the library" },
  { number: "02", title: "Human Atlas", description: "The human body, in three dimensions.", href: "/learn/pharmacy/atlas", detail: "Explore the atlas" },
  { number: "03", title: "Drug Library", description: "Mechanisms, uses, and safety.", href: "/learn/pharmacy/drugs", detail: "Browse medications" },
  { number: "04", title: "Knowledge Review", description: "Questions that build understanding.", href: "/learn/pharmacy/review", detail: "Start a review" },
];

export default function HomeLearnFeature() {
  return (
    <section className="learn-editorial" aria-labelledby="home-learn-title">
      <div className="learn-editorial__inner">
        <header className="learn-editorial__intro">
          <p className="learn-editorial__brand">Learn</p>
          <h2 id="home-learn-title">The study<br />of life.</h2>
          <Link className="learn-editorial__explore" href="/learn">Explore learning <span aria-hidden="true">↗</span></Link>
        </header>
        <nav className="learn-editorial__collection" aria-label="Learning resources">
          {learningPaths.map((path) => <Link href={path.href} key={path.title} className="learn-editorial__path">
            <span className="learn-editorial__number" aria-hidden="true">{path.number}</span>
            <div><h3>{path.title}</h3><p>{path.description}</p></div>
            <span className="learn-editorial__arrow" aria-hidden="true">↗</span>
          </Link>)}
        </nav>
      </div>
    </section>
  );
}
