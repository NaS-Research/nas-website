import Link from "next/link";

const learningPaths = [
  { number: "01", title: "Visual Atlas", description: "Explore anatomy through interactive, clinically connected models.", href: "/learn/pharmacy/atlas" },
  { number: "02", title: "Drug Library", description: "Move from medication identity to mechanism, use, and safety.", href: "/learn/pharmacy/drugs" },
  { number: "03", title: "Study Guides", description: "Build knowledge through organized lessons and checks for understanding.", href: "/learn/pharmacy#learning-library" },
  { number: "04", title: "Enter NaS Learn", description: "Open the complete pharmacy learning environment.", href: "/learn" },
];

export default function HomeLearnFeature() {
  return (
    <section className="home-learn" aria-labelledby="home-learn-title">
      <div className="home-learn__inner">
        <header className="home-learn__header">
          <div><p className="home-learn__kicker">Introducing</p><h2 id="home-learn-title">NaS Learn.</h2></div>
          <div className="home-learn__introduction"><p>A learning platform for pharmacy. Lessons, drug cards, practice questions, and interactive anatomy live together in one focused place.</p><Link href="/learn">Explore NaS Learn <span aria-hidden="true">↗</span></Link></div>
        </header>
        <div className="home-learn__statement"><span>Pharmacy, connected</span><h3>Read. Explore. Practice.</h3><p>Move from foundational lessons to medication profiles, visual anatomy, and active recall within one learning environment.</p></div>
        <div className="home-learn__paths" aria-label="Explore NaS Learn">
          {learningPaths.map((path) => <Link href={path.href} key={path.title} className="home-learn__path"><span>{path.number}</span><div><h3>{path.title}</h3><p>{path.description}</p></div><i aria-hidden="true">↗</i></Link>)}
        </div>
      </div>
    </section>
  );
}
