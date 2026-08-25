import Link from "next/link";
import Image from "next/image";

const platformAreas = [
  {
    number: "01",
    label: "Interactive",
    title: "Visual Atlas",
    description: "Rotate anatomical models, focus structures, and change the lens from anatomy to pharmacology, clinical care, safety, and interactions.",
    href: "/learn/pharmacy/atlas",
    action: "Open the atlas",
    featured: true,
  },
  {
    number: "02",
    label: "Reference",
    title: "Drug Library",
    description: "Search medications, review structured profiles, recognize product appearance, and move into current official labeling.",
    href: "/learn/pharmacy/drugs",
    action: "Search medications",
  },
  {
    number: "03",
    label: "Learn",
    title: "Study Guides",
    description: "Read connected lessons built for the web, with objectives, comparisons, sources, and knowledge checks.",
    href: "/learn/pharmacy#learning-library",
    action: "Browse the library",
  },
  {
    number: "04",
    label: "Organize",
    title: "Curriculum",
    description: "Follow a pharmacy-school sequence from drug action through organ systems, infectious disease, oncology, and acute care.",
    href: "/learn/pharmacy#curriculum",
    action: "View the curriculum",
  },
  {
    number: "05",
    label: "Practice",
    title: "Knowledge Checks",
    description: "Commit to an answer, reveal the reasoning, and connect foundational knowledge to practical pharmacy decisions.",
    href: "/learn/pharmacy/drug-formulations-and-routes#study-check",
    action: "Start a study check",
  },
];

export default function PharmacyPlatformHome() {
  return (
    <section className="pharmacy-platform" aria-labelledby="pharmacy-platform-title">
      <header className="pharmacy-platform__heading">
        <div>
          <p className="nas-section-label">Learning workspace</p>
          <h2 id="pharmacy-platform-title">Choose what the question requires.</h2>
        </div>
        <p>Read deeply, inspect anatomy, find a medication, or test the idea. Each tool supports the same connected body of knowledge.</p>
      </header>
      <div className="pharmacy-platform__grid">
        {platformAreas.map((area) => (
          <Link href={area.href} className={area.featured ? "pharmacy-platform-card is-featured" : "pharmacy-platform-card"} key={area.title}>
            <div className="pharmacy-platform-card__topline"><span>{area.number}</span><span>{area.label}</span></div>
            {area.featured && (
              <div className="pharmacy-platform-card__visual" aria-hidden="true">
                <Image src="/learn/models/realistic-heart-preview.jpeg" alt="" fill loading="eager" sizes="(min-width: 70rem) 45vw, 80vw" />
                <span className="pharmacy-platform-card__orbit pharmacy-platform-card__orbit--one" />
                <span className="pharmacy-platform-card__orbit pharmacy-platform-card__orbit--two" />
              </div>
            )}
            <div className="pharmacy-platform-card__body">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <strong>{area.action} <span aria-hidden="true">↗</span></strong>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
