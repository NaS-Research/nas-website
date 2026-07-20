import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import PublicationActions from "@/components/research/PublicationActions";
import { getResearchItem, researchItems } from "@/data/researchLibrary";

function PublicationBlock({ block }) {
  if (!block.includes("●")) return <p>{block.replaceAll("*", "")}</p>;

  const [intro, ...items] = block.split("●").map((part) => part.trim()).filter(Boolean);
  const hasIntro = !block.trimStart().startsWith("●");

  return (
    <>
      {hasIntro && <p>{intro.replaceAll("*", "")}</p>}
      <ul className="publication-list">
        {(hasIntro ? items : [intro, ...items]).map((item) => (
          <li key={item}>{item.replaceAll("*", "")}</li>
        ))}
      </ul>
    </>
  );
}

export function generateStaticParams() {
  return researchItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) return {};
  return {
    title: `${item.title} | NaS Research`,
    description: item.abstract,
    alternates: { canonical: `/research/${item.slug}` },
  };
}

export default async function ResearchPublicationPage({ params }) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) notFound();

  const citation = `${item.authors.join(", ")} (${item.date.slice(-4)}). ${item.title}. NaS Research. Version ${item.version}. https://nasresearch.bio/research/${item.slug}`;
  const related = researchItems.filter((candidate) => candidate.slug !== item.slug && candidate.area === item.area).slice(0, 2);

  return (
    <div className="nas-page publication-page">
      <header className="publication-hero">
        <div className="nas-shell publication-hero__inner">
          <Link href="/research" className="publication-back">← Research library</Link>
          <div className="publication-meta-line">
            <time dateTime={item.dateISO}>{item.date}</time>
            <span>{item.area}</span>
            <span>{item.type}</span>
          </div>
          <h1>{item.title}</h1>
          <p className="publication-abstract">{item.abstract}</p>
          <div className="publication-byline">
            <p>By {item.authors.join(", ")}</p>
            <p>Version {item.version} · {item.readTime}</p>
          </div>
          <PublicationActions citation={citation} pdfUrl={item.pdfUrl} />
        </div>
      </header>

      <main className="nas-shell publication-layout">
        <aside className="publication-toc" aria-label="Publication contents">
          <p>In this publication</p>
          <nav>
            <a href="#summary">Summary</a>
            {item.sections.map((section) => (
              <a
                href={`#${section.id}`}
                className={section.level === 2 ? "publication-toc__subsection" : undefined}
                key={section.id}
              >
                {section.title.replace(/^\d+(?:\.\d+)?\s*/, "")}
              </a>
            ))}
            <a href="#citation">Citation</a>
          </nav>
        </aside>

        <article className="publication-body">
          <section id="summary" className="publication-summary">
            <p className="publication-section-label">Summary</p>
            <p>{item.summary}</p>
            <dl>
              <div><dt>Research area</dt><dd>{item.area}</dd></div>
              <div><dt>Document type</dt><dd>{item.type}</dd></div>
              <div><dt>Version</dt><dd>{item.version}</dd></div>
            </dl>
          </section>

          {item.sections.map((section) => (
            <section
              id={section.id}
              className={`publication-section publication-section--level-${section.level ?? 1}`}
              key={section.id}
            >
              {section.level === 2 ? <h3>{section.title}</h3> : <h2>{section.title}</h2>}
              {(section.blocks ?? section.paragraphs).map((block, index) => (
                <PublicationBlock block={block} key={`${section.id}-${index}`} />
              ))}
            </section>
          ))}

          <section id="citation" className="publication-section publication-citation">
            <h2>Citation</h2>
            <p>{citation}</p>
            <p className="publication-note">
              {item.publicationNote ?? "This web publication is the current version of record. Updates will be reflected through the document’s version history."}
            </p>
          </section>

          {related.length > 0 && (
            <section className="publication-related">
              <p className="publication-section-label">Related research</p>
              {related.map((relatedItem) => (
                <Link href={`/research/${relatedItem.slug}`} key={relatedItem.slug}>
                  <span>{relatedItem.type}</span>
                  <strong>{relatedItem.title}</strong>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
