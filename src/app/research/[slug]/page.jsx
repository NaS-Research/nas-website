import RelatedResearch from "@/components/research/RelatedResearch";
import { getRelatedResearch } from "@/lib/relatedResearch.mjs";
import { publicationSectionTitle } from "@/lib/publicationHeadings";
import NicolePreviewInterface from "@/components/research/NicolePreviewInterface";
import MobileContents from "@/components/research/MobileContents";
import { publicationArtwork } from "@/data/publicationArtwork";
import PublicationArtwork from "@/components/research/PublicationArtwork";
import "@/components/research/publication-artwork.css";
import "./publication-refinements.css";
import "./paper-article.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import CortexNativeVisual from "@/components/research/CortexNativeVisual";
import DenialsWorkflowFigure from "@/components/research/DenialsWorkflowFigure";
import BbbStudyVisual from "@/components/research/BbbStudyVisual";
import PublicationActions from "@/components/research/PublicationActions";
import EvidenceFigure from "@/components/research/EvidenceFigure";
import { Fragment } from "react";
import { getResearchItem, researchItems, researchDrafts } from "@/data/researchLibrary";
import { getResearchPdfUrl } from "@/data/researchTaxonomy.mjs";

function SourceReferences({ references = [] }) {
  if (!references.length) return null;
  return <sup className="publication-source-references">
    {references.map((number, index) => <span key={number}>
      {index > 0 && ", "}<a href={`#source-${number}`} aria-label={`Source ${number}`}>{number}</a>
    </span>)}
  </sup>;
}

function PublicationBlock({ block, sourceRefs }) {
  if (!block.includes("●")) return <p>{block.replaceAll("*", "")}<SourceReferences references={sourceRefs} /></p>;

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

function PublicationFigure({ figure }) {
  if (figure.kind === "evidence") return <EvidenceFigure figure={figure}><SourceReferences references={figure.sourceRefs} /></EvidenceFigure>;
  return <figure className="publication-study-figure">
    <Image src={figure.src} alt={figure.alt} width={2100} height={figure.height} sizes="(max-width: 800px) 100vw, 900px" />
    <figcaption>{figure.caption} <a className="publication-figure-expand" href={figure.src} target="_blank" rel="noopener noreferrer">Open full-size figure ↗</a></figcaption>
  </figure>;
}

export function generateStaticParams() {
  return [...researchItems, ...researchDrafts].map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) return {};
  return {
    title: `${item.title} | NaS Research`,
    description: item.abstract,
    ...(item.publicationStatus === "draft" ? { robots: { index: false, follow: false } } : {}),
    authors: item.authors.map((name) => ({ name })),
    alternates: { canonical: `/research/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.abstract,
      url: `/research/${item.slug}`,
      siteName: "NaS Research",
      type: "article",
      ...(item.publicationStatus === "draft" ? {} : { publishedTime: item.dateISO }),
      authors: item.authors,
      images: [
        {
          url: publicationArtwork[item.slug]?.src || "/og.png",
          alt: `${item.title} by NaS Research`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.abstract,
      images: [publicationArtwork[item.slug]?.src || "/og.png"],
    },
  };
}

export default async function ResearchPublicationPage({ params }) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) notFound();

  const isResearchPublication = ["Research Report", "Research Note", "White Paper"].includes(item.type) || Boolean(item.citable);
  const pdfUrl = getResearchPdfUrl(item);
  const isPaperArticle = item.variant === "paper";
  const isOriginStory = item.variant === "institutional-origin";
  const hasHeroVideo = Boolean(item.heroVideo);
  const hasHeroImage = false;
  const citation = `${item.authors.join(", ")} (${item.date.slice(-4)}). ${item.title}. NaS Research. ${item.version ? `Version ${item.version}. ` : ""}${item.publicationStatus === "draft" ? "Draft. " : ""}https://nasresearch.bio/research/${item.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.abstract,
    ...(item.publicationStatus === "draft" ? { dateCreated: item.dateISO } : { datePublished: item.dateISO }),
    ...(item.updatedDateISO ? { dateModified: item.updatedDateISO } : {}),
    version: item.version,
    image: `https://nasresearch.bio${publicationArtwork[item.slug]?.src || "/og.png"}`,
    mainEntityOfPage: `https://nasresearch.bio/research/${item.slug}`,
    url: `https://nasresearch.bio/research/${item.slug}`,
    author: item.authors.map((name) => ({
      "@type": item.affiliation ? "Person" : "Organization",
      name,
      ...(item.affiliation ? { affiliation: { "@type": "Organization", name: item.affiliation } } : {}),
    })),
    publisher: { "@id": "https://nasresearch.bio/#organization", "@type": "Organization", name: "NaS Research", url: "https://nasresearch.bio" },
  };
  const related = getRelatedResearch(item, researchItems);

  return (
    <div className={`nas-page publication-page${isPaperArticle ? " publication-page--paper" : ""}${item.theme === "dark" ? " publication-page--dark" : ""}`}>
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
        <div className="nas-shell publication-hero__inner">
          <Link href="/research" className="publication-back">← Research library</Link>
          {isPaperArticle && <Image className="publication-paper-mark" src="/assets/images/NaSLogo-transparent-hd.png" alt="NaS gold emblem" width={76} height={76} priority />}
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
              {[item.version ? `${pdfUrl ? "Web version" : "Version"} ${item.version}` : null, item.readTime].filter(Boolean).join(" · ")}
              {item.updatedDate ? ` · Updated ${item.updatedDate}` : ""}
            </p>
          </div>
          <PublicationActions citation={isResearchPublication ? citation : undefined} pdfUrl={pdfUrl} pdfVersion={item.pdfVersion} />
          {item.reviewState && <p className="publication-review-state">{item.reviewState}</p>}
          {item.reproducibilityUrl && <a className="publication-reproduce" href={item.reproducibilityUrl}>Download data and analysis ↗</a>}
        </div>
      </header>

      {!hasHeroVideo && item.showArticleArtwork !== false && <PublicationArtwork slug={item.slug} hero />}
      <MobileContents sections={item.sections.map(({ id, title }) => ({ id, title }))} hasSources={Boolean(item.sources?.length)} hasCitation={isResearchPublication} />
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
                {publicationSectionTitle(section.title)}
              </a>
            ))}
            {item.sources?.length > 0 && <a href="#sources">Sources</a>}
            {isResearchPublication && <a href="#citation">Citation</a>}
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
              {section.level === 2 ? <h3>{publicationSectionTitle(section.title)}</h3> : <h2>{publicationSectionTitle(section.title)}</h2>}
              {(section.blocks ?? section.paragraphs).map((block, index) => (
                <Fragment key={`${section.id}-${index}`}>
                  <PublicationBlock block={block} sourceRefs={section.citationsByParagraph?.[index]} />
                  {section.figures?.filter((figure) => figure.afterParagraph === index).map((figure) => <PublicationFigure figure={figure} key={figure.src} />)}
                </Fragment>
              ))}
              {item.slug === "introducing-nas-workspace" && section.id === "nicole" && <NicolePreviewInterface />}
              {section.resultsTable && <div className="publication-results-table"><table>
                <caption>{section.resultsTableCaption ?? "Primary results with 95% position-cluster bootstrap intervals"}</caption>
                <thead><tr>{section.resultsTable[0].map((cell) => <th scope="col" key={cell}>{cell}</th>)}</tr></thead>
                <tbody>{section.resultsTable.slice(1).map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody>
              </table></div>}
              {section.tableSourceRefs && <p className="publication-table-source">Source<SourceReferences references={section.tableSourceRefs} /></p>}
              {section.figures?.filter((figure) => figure.afterParagraph === undefined).map((figure) => <PublicationFigure figure={figure} key={figure.src} />)}
              {item.workflowFigureSection === section.id && <DenialsWorkflowFigure />}
              {item.slug === "blood-brain-barrier-prediction-audit" && <BbbStudyVisual section={section.id} />}
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
                {item.sources.map((source, index) => (
                  <li id={`source-${index + 1}`} key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.title}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                    {source.citation && <p className="publication-source-citation">{source.citation}</p>}
                    {source.role && <p className="publication-source-role">{source.role}</p>}
                    {source.links?.length > 0 && <div className="publication-source-links">{source.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} ↗</a>)}</div>}
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

          {isResearchPublication && <section id="citation" className="publication-section publication-citation">
            <p className="publication-section-label">Publication details</p>
            <h2>Cite this work</h2>
            <p className="publication-citation__text">{citation}</p>
            <PublicationActions citation={citation} pdfUrl={pdfUrl} pdfVersion={item.pdfVersion}  />
            {publicationArtwork[item.slug]?.creditUrl && <p className="publication-note"><a href={publicationArtwork[item.slug].creditUrl}>Artwork credits and license ↗</a></p>}
            {item.reproducibilityUrl && <a className="publication-resource-link" href={item.reproducibilityUrl}>Download data and analysis <span aria-hidden="true">↗</span></a>}
            <p className="publication-note">
              {item.publicationNote ?? "This web publication is the current version of record. Updates will be reflected through the document’s version history."}
            </p>
          </section>}

          {!isResearchPublication && publicationArtwork[item.slug]?.creditUrl && <p className="publication-note"><a href={publicationArtwork[item.slug].creditUrl}>Artwork credits and license ↗</a></p>}

          {item.revisionNote && <p className="publication-note">{item.revisionNote}</p>}


        </article>
      </div>
      <RelatedResearch items={related} />
      <Footer />
    </div>
  );
}
