import Link from "next/link";
import "./institute-intro.css";

export default function Featured() {
  return (
    <section id="next-section" className="institute-intro" aria-labelledby="institute-intro-title">
      <div className="institute-intro__inner">
        <div className="institute-intro__eyebrow"><span>NaS</span><span>Research · Tools · Education</span></div>
        <h2 id="institute-intro-title">For the questions<br /><span>still open.</span></h2>
        <div className="institute-intro__closing">
          <p className="institute-intro__statement">Research, tools, and education<br />for the life sciences.</p>
          <div className="institute-intro__body">
            <Link href="/workspace">Explore the workspace <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
