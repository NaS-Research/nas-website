import Link from "next/link";

const learningPaths = [
  { number: "01", title: "Pharmacy", description: "Enter the first discipline available in NaS Learn.", href: "/learn/pharmacy" },
  { number: "02", title: "Visual Atlas", description: "Explore anatomy through interactive, clinically connected models.", href: "/learn/pharmacy/atlas" },
  { number: "03", title: "Drug Library", description: "Move from medication identity to mechanism, use, and safety.", href: "/learn/pharmacy/drugs" },
  { number: "04", title: "Practice", description: "Turn study into active recall with focused questions and review.", href: "/learn/pharmacy/review" },
];

export default function HomeLearnFeature() {
  return (
    <section className="home-learn" aria-labelledby="home-learn-title">
      <div className="home-learn__inner">
        <header className="home-learn__header">
          <div><p className="home-learn__kicker">Introducing</p><h2 id="home-learn-title">NaS Learn.</h2></div>
          <div className="home-learn__introduction"><p>A learning platform for the life sciences. Pharmacy is the first discipline.</p><Link href="/learn">Explore NaS Learn <span aria-hidden="true">↗</span></Link></div>
        </header>
        <div className="home-learn__statement"><span>Built for understanding</span><h3>Learn beyond the page.</h3><p>Read the concept, examine the system, test what you know, and return with a sharper question.</p></div>
        <div className="home-learn__paths" aria-label="Explore NaS Learn">
          {learningPaths.map((path) => <Link href={path.href} key={path.title} className="home-learn__path"><span>{path.number}</span><div><h3>{path.title}</h3><p>{path.description}</p></div><i aria-hidden="true">↗</i></Link>)}
        </div>
      </div>
    </section>
  );
}
