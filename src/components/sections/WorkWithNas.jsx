import Link from "next/link";

const opportunities = [
  { title: "Contribute something useful", copy: "Expert review, research infrastructure, responsible access to resources, a defined collaboration, or a serious introduction can materially strengthen the work.", video: "/assets/videos/Coding.mp4" },
  { title: "Begin with a specific idea", copy: "Tell us who you are, what you can contribute, the research it relates to, and what scientific outcome your involvement could help enable.", video: "/assets/videos/ChicagoFour.mp4" },
];

export default function WorkWithNas() {
  return (
    <section className="home-work">
      <div className="home-work__inner">
        <header className="home-work__header"><div><p>Work with NaS</p><h2>Help make the work stronger.</h2></div><div><p>NaS welcomes serious contributions of expertise, criticism, infrastructure, resources, and focused collaboration. We do not currently operate a public donation program.</p><div className="home-work__actions"><Link href="/support" className="home-work__primary">Ways to contribute <span aria-hidden="true">↗</span></Link><Link href="/contact" className="home-work__secondary">Contact NaS <span aria-hidden="true">↗</span></Link></div></div></header>
        <div className="home-work__grid">
          {opportunities.map((opportunity, index) => <article className="home-work__item" key={opportunity.title}><div className="home-work__media"><video src={opportunity.video} autoPlay loop muted playsInline aria-hidden="true" /></div><div className="home-work__copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{opportunity.title}</h3><p>{opportunity.copy}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
