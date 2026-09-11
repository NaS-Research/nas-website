import PublicationArtwork from "@/components/research/PublicationArtwork";
import "@/components/research/publication-artwork.css";
import Link from "next/link";

const features = [
  { href: "/research/pam50-technical-repeatability", label: "Research report", detail: "September 11, 2026", title: "PAM50 technical repeatability", description: "A frozen subtype method tested across public technical-repeat data." },
  { href: "/research/alphagenome-atlas-rnu4-2", label: "Research note", detail: "September 9, 2026", title: "AlphaGenome Atlas in RNU4-2", description: "What 435 variants reveal about prediction and experimental agreement." },
  { href: "/research/introducing-nas-denials", label: "White paper", detail: "September 5, 2026", title: "Introducing NaS Denials", description: "A software foundation for specialty denial prevention and appeals." },
];

export default function Featured() {
  return (
    <section id="next-section" className="home-featured home-featured--refined" aria-labelledby="latest-work-title">
      <div className="home-featured__inner">
        <header className="home-editorial-heading"><div><p className="home-latest-kicker">From NaS Research</p><h2 id="latest-work-title">Latest work.</h2></div><Link className="home-library-link" href="/research">Explore our publications <span aria-hidden="true">↗</span></Link></header>
        <div className="home-featured__grid">
          {features.map((feature) => (
            <Link href={feature.href} className="home-featured__item" key={feature.href}>
              <PublicationArtwork slug={feature.href.split("/").pop()} />
              <div className="home-featured__item-copy"><p><span>{feature.label}</span><span>{feature.detail}</span></p><h3>{feature.title}</h3><p className="home-feature-description">{feature.description}</p><span className="home-arrow" aria-hidden="true">↗</span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
