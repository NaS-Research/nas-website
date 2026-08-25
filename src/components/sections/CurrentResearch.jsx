import Link from "next/link";
import { researchProjects } from "@/data/researchProjects";

export default function CurrentResearch() {
  return (
    <section id="current-research" className="home-research">
      <div className="home-research__inner">
        <header className="home-research__header"><div><p>Inside NaS Core</p><h2>Current Research</h2></div><div><p>Work now underway inside the NaS research system. These studies remain outside the publication library until their review and release gates are complete.</p><Link href="/research">Read published research <span aria-hidden="true">↗</span></Link></div></header>
        <div className="home-research__grid">
          {researchProjects.map((study) => <article className="home-research__item" key={study.id}><Link href={`/research/projects/${study.slug}`} className="home-research__link"><div className="home-research__media"><video src={study.video} autoPlay loop muted playsInline aria-hidden="true" /></div><div className="home-research__copy"><div className="home-research__meta"><span>{study.id}</span><span>{study.status}</span></div><h3>{study.title}</h3><p>{study.description}</p><span>Read project brief <span aria-hidden="true">↗</span></span></div></Link></article>)}
        </div>
      </div>
    </section>
  );
}
