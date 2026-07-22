import Link from "next/link";
import Footer from "@/components/Footer";

export default function LegalPage({
  eyebrow,
  title,
  summary,
  effectiveDate,
  sections,
}) {
  return (
    <div className="nas-page legal-page">
      <header className="legal-hero">
        <div className="nas-shell">
          <p className="nas-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <div className="legal-hero__summary">
            <p>{summary}</p>
            <p className="legal-effective-date">Effective {effectiveDate}</p>
          </div>
        </div>
      </header>

      <div className="nas-shell legal-layout">
        <aside className="legal-toc" aria-label={`${title} contents`}>
          <p>In this document</p>
          <nav>
            {sections.map((section, index) => (
              <Link href={`#${section.id}`} key={section.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="legal-content">
          {sections.map((section, index) => (
            <section className="legal-section" id={section.id} key={section.id}>
              <p className="legal-section__number">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.email && (
                <Link className="legal-email" href={`mailto:${section.email}`}>
                  {section.email}
                </Link>
              )}
            </section>
          ))}
        </article>
      </div>

      <section className="legal-related">
        <div className="nas-shell legal-related__inner">
          <p>Related document</p>
          <Link href={title === "Privacy Policy" ? "/legal/terms" : "/legal/privacy"}>
            {title === "Privacy Policy" ? "Terms of Use" : "Privacy Policy"}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
