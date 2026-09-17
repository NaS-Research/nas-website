import ArtworkFilm from "@/components/research/ArtworkFilm";
import Image from "next/image";
import Link from "next/link";
import { researchProjects } from "@/data/researchProjects";

export default function CurrentResearch() {
  return (
    <section id="current-research" className="home-research">
      <div className="home-research__inner">
        <header className="home-research__header"><div><p>Inside NaS Core</p><h2>Current Research</h2></div><div><p>Project records from inside the NaS research system. Completed releases link to their public reports; active studies remain outside the library until their review and release gates are complete.</p><Link href="/research">Read published research <span aria-hidden="true">↗</span></Link></div></header>
        <div className="home-research__grid">
          {researchProjects.map((study) => <article className="home-research__item" key={study.id}><Link href={`/research/projects/${study.slug}`} className="home-research__link"><div className="home-research__media">{study.image ? <Image src={study.image} alt={study.imageAlt} width={1600} height={900} sizes="(max-width: 767px) 92vw, 46vw" /> : <ArtworkFilm src={study.video} alt="" />}</div><div className="home-research__copy"><div className="home-research__meta"><span>{study.id}</span><span>{study.status}</span></div><h3>{study.title}</h3><p>{study.description}</p><span>Read project brief <span aria-hidden="true">↗</span></span></div></Link></article>)}
        </div>
      </div>
    </section>
  );
}
