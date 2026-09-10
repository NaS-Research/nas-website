import "./publication-refinements.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import CortexNativeVisual from "@/components/research/CortexNativeVisual";
import DenialsWorkflowFigure from "@/components/research/DenialsWorkflowFigure";
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
    authors: item.authors.map((name) => ({ name })),
    alternates: { canonical: `/research/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.abstract,
      url: `/research/${item.slug}`,
      siteName: "NaS Research",
      type: "article",
      publishedTime: item.dateISO,
      authors: item.authors,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${item.title} by NaS Research`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.abstract,
      images: ["/og.png"],
    },
  };
}

export default async function ResearchPublicationPage({ params }) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) notFound();

  const isOriginStory = item.variant === "institutional-origin";
  const hasHeroVideo = Boolean(item.heroVideo);
  const hasHeroImage = Boolean(item.heroImage);
  const citation = `${item.authors.join(", ")} (${item.date.slice(-4)}). ${item.title}. NaS Research. Version ${item.version}. https://nasresearch.bio/research/${item.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.abstract,
    datePublished: item.dateISO,
    url: `https://nasresearch.bio/research/${item.slug}`,
    author: item.authors.map((name) => ({
      "@type": item.affiliation ? "Person" : "Organization",
      name,
      ...(item.affiliation ? { affiliation: { "@type": "Organization", name: item.affiliation } } : {}),
    })),
    publisher: { "@type": "Organization", name: "NaS Research", url: "https://nasresearch.bio" },
  };
  const related = researchItems.filter((candidate) => candidate.slug !== item.slug && candidate.area === item.area).slice(0, 2);

  return (
    <div className="nas-page publication-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className={`publication-hero ${isOriginStory ? "publication-hero--origin" : ""} ${hasHeroVideo ? "publication-hero--place" : ""} ${hasHeroImage ? "publication-hero--visual" : ""}`}>
        {hasHeroVideo && (
          <>
            <video
              className="publication-hero__place-video"
              src={item.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
            <div className="publication-hero__place-shade" aria-hidden="true" />
          </>
        )}
        {hasHeroImage && (
          <>
            <div
              className="publication-hero__visual-image"
              style={{ "--publication-hero-image": `url("${item.heroImage}")` }}
              aria-hidden="true"
            />
            <div className="publication-hero__visual-shade" aria-hidden="true" />
          </>
        )}
        {isOriginStory && (
          <div className="publication-hero__origin-mark" aria-hidden="true">
            <Image
              src="/assets/images/NaSLogo-transparent.png"
              alt=""
              width={800}
              height={800}
              priority
            />
          </div>
        )}
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
            <p>By {item.authors.join(", ")}{item.affiliation && <span> · {item.affiliation}</span>}</p>
            <p>
              Version {item.version} · {item.readTime}
              {item.updatedDate ? ` · Updated ${item.updatedDate}` : ""}
            </p>
          </div>
          <PublicationActions citation={citation} pdfUrl={item.pdfUrl} showPdfStatus={item.pdfStatus !== "none"} />
          {item.reviewState && <p className="publication-review-state">{item.reviewState}</p>}
          {item.reproducibilityUrl && <a className="publication-reproduce" href={item.reproducibilityUrl}>Download data and analysis ↗</a>}
        </div>
      </header>

      <div className="nas-shell publication-layout">
        <aside className="publication-toc" aria-label="Publication contents">
          <details className="publication-contents" open>
          <summary>In this publication</summary>
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
            {item.sources?.length > 0 && <a href="#sources">Sources</a>}
            <a href="#citation">Citation</a>
          </nav>
          </details>
        </aside>

        <article className="publication-body">
          <section id="summary" className="publication-summary">
            <p className="publication-section-label">Summary</p>
            <p>{item.summary}</p>

          </section>

          {item.pullQuote && (
            <blockquote className="publication-pullquote">
              <span aria-hidden="true">“</span>
              <p>{item.pullQuote}</p>
              <cite>{item.pullQuoteAttribution ?? item.authors.join(", ")}</cite>
            </blockquote>
          )}

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
              {section.resultsTable && <div className="publication-results-table"><table>
                <caption>Primary results with 95% position-cluster bootstrap intervals</caption>
                <thead><tr>{section.resultsTable[0].map((cell) => <th scope="col" key={cell}>{cell}</th>)}</tr></thead>
                <tbody>{section.resultsTable.slice(1).map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody>
              </table></div>}
              {section.figures?.map((figure) => <figure className="publication-study-figure" key={figure.src}>
                <Image src={figure.src} alt={figure.alt} width={2100} height={figure.height} sizes="(max-width: 800px) 100vw, 900px" />
                <figcaption>{figure.caption} <a className="publication-figure-expand" href={figure.src} target="_blank" rel="noopener noreferrer">Open full-size figure ↗</a></figcaption>
              </figure>)}
              {item.workflowFigureSection === section.id && <DenialsWorkflowFigure />}
              {item.visualsBySection?.[section.id]?.map((visual) => (
                <CortexNativeVisual visual={visual} key={visual.kind === "table" ? visual.number : visual.title} />
              ))}
            </section>
          ))}

          {item.sources?.length > 0 && (
            <section id="sources" className="publication-section publication-sources">
              <h2>Sources and further reading</h2>
              <p>
                {item.sourcesIntro ?? "This publication draws on the institutional and government sources listed below. Links open in a new tab."}
              </p>
              <ol>
                {item.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.title}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {item.collaboration && (
            <section className="publication-collaboration" aria-labelledby="publication-collaboration-title">
              <p className="publication-section-label">{item.collaboration.eyebrow}</p>
              <h2 id="publication-collaboration-title">{item.collaboration.title}</h2>
              <p>{item.collaboration.body}</p>
              <Link className="publication-collaboration__action" href={item.collaboration.href}>
                {item.collaboration.label} <span aria-hidden="true">↗</span>
              </Link>
            </section>
          )}

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
      </div>
      <Footer />
    </div>
  );
}
