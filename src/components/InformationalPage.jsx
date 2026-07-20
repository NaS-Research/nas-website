import Link from "next/link";
import Footer from "@/components/Footer";

export default function InformationalPage({
  eyebrow,
  title,
  introduction,
  sections,
  sectionLabel = "Areas of focus",
  sectionTitle = "Where we are directing our attention.",
  status = "Independent research · Chicago",
  closingTitle,
  closingCopy,
  actionLabel = "Contact NaS",
  actionHref = "mailto:dalronj.robertson@gmail.com",
}) {
  return (
    <div className="nas-page">
      <section className="nas-hero">
        <div className="nas-shell">
          <p className="nas-kicker">{eyebrow}</p>
          <h1 className="nas-title">{title}</h1>
          <div className="nas-hero-summary">
            <p className="nas-introduction">{introduction}</p>
            <p className="nas-status">{status}</p>
          </div>
        </div>
      </section>

      <section className="nas-content-section">
        <div className="nas-shell">
          <header className="nas-section-heading">
            <p className="nas-section-label">{sectionLabel}</p>
            <h2 className="nas-section-title">{sectionTitle}</h2>
          </header>
          <div className="nas-card-grid">
          {sections.map((section, index) => (
            <article key={section.title} className="nas-card">
              <span className="nas-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="nas-card-title">{section.title}</h3>
              <p className="nas-card-copy">{section.copy}</p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="nas-closing">
        <div className="nas-shell nas-closing-panel">
          <div>
            <h2 className="nas-closing-title">{closingTitle}</h2>
            <p className="nas-closing-copy">{closingCopy}</p>
          </div>
          <Link
            href={actionHref}
            className="nas-button"
          >
            {actionLabel}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
