import Link from "next/link";
import Image from "next/image";

const platformAreas = [
  {
    label: "Learn",
    title: "Curriculum",
    description: "Move through focused modules that connect foundational science, therapeutics, patient care, and current evidence.",
    href: "/learn/pharmacy#curriculum",
    action: "View the curriculum",
  },
  {
    label: "Explore",
    title: "Visual Atlas",
    description: "Inspect anatomy and connect structure to mechanism, treatment, and safety through interactive models.",
    href: "/learn/pharmacy/atlas",
    action: "Open the atlas",
    featured: true,
  },
  {
    label: "Reference",
    title: "Drug Library",
    description: "Search medications, review structured profiles, recognize product appearance, and move into current official labeling.",
    href: "/learn/pharmacy/drugs",
    action: "Search medications",
  },
  {
    label: "Practice",
    title: "Cumulative Review",
    description: "Draw a fresh set from every module, work through direct questions and patient cases, then review the reasoning.",
    href: "/learn/pharmacy/review",
    action: "Start the review",
  },
];

export default function PharmacyPlatformHome() {
  return (
    <section className="pharmacy-platform" aria-labelledby="pharmacy-platform-title">
      <header className="pharmacy-platform__heading">
        <div>
          <p className="nas-section-label">Learning workspace</p>
          <h2 id="pharmacy-platform-title">Learn, see, and test.</h2>
        </div>
        <p>Follow the curriculum, inspect anatomy, find a medication, or test what you know. Every tool connects back to the same body of knowledge.</p>
      </header>
      <div className="pharmacy-platform__grid">
        {platformAreas.map((area) => (
          <Link href={area.href} className={area.featured ? "pharmacy-platform-card is-featured" : "pharmacy-platform-card"} key={area.title}>
            <div className="pharmacy-platform-card__topline"><span>{area.label}</span></div>
            {area.featured && (
              <div className="pharmacy-platform-card__visual" aria-hidden="true">
                <Image src="/learn/models/realistic-heart-preview-hd.jpeg" alt="" fill loading="eager" sizes="(min-width: 48rem) 50vw, 100vw" />
              </div>
            )}
            <div className="pharmacy-platform-card__body">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <strong>{area.action} <span aria-hidden="true">↗</span></strong>
              {area.featured && <small>Heart model by neshallads · CC BY 4.0</small>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
