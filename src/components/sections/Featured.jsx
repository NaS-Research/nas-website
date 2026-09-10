import Image from "next/image";
import Link from "next/link";

const features = [
  { href: "/research/alphagenome-atlas-rnu4-2", label: "Research note", detail: "September 9, 2026", title: "AlphaGenome Atlas in RNU4-2", description: "What 435 variants reveal about prediction and experimental agreement.", image: "/research/atlas-rnu42/figure-2-performance.png", imageAlt: "AlphaGenome Atlas and CADD benchmark results with uncertainty intervals", paper: true },
  { href: "/research/introducing-nas-denials", label: "White paper", detail: "September 5, 2026", title: "Introducing NaS Denials", description: "A software foundation for specialty denial prevention and appeals.", image: "/research/denials/paper-cover.png", imageAlt: "NaS Denials white paper cover", paper: true },
  { href: "/research/introducing-nas-cortex", label: "White paper", detail: "May 12, 2025", title: "The NaS Cortex", description: "A proposed knowledge architecture for the life sciences.", image: "/research/cortex/visuals/nicole-digital-cortex-hero.png", imageAlt: "Conceptual illustration of the NaS Cortex architecture" },
];

export default function Featured() {
  return (
    <section id="next-section" className="home-featured home-featured--refined" aria-labelledby="latest-work-title">
      <div className="home-featured__inner">
        <header className="home-editorial-heading"><div><p className="home-latest-kicker">From NaS Research</p><h2 id="latest-work-title">Latest work.</h2></div><Link className="home-library-link" href="/research">Explore our publications <span aria-hidden="true">↗</span></Link></header>
        <div className="home-featured__grid">
          {features.map((feature) => (
            <Link href={feature.href} className="home-featured__item" key={feature.href}>
              <div className={`home-featured__item-media ${feature.paper ? "home-featured__item-media--paper" : ""}`}>
                <Image src={feature.image} alt={feature.imageAlt} width={900} height={650} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" />
              </div>
              <div className="home-featured__item-copy"><p><span>{feature.label}</span><span>{feature.detail}</span></p><h3>{feature.title}</h3><p className="home-feature-description">{feature.description}</p><span className="home-arrow" aria-hidden="true">↗</span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
