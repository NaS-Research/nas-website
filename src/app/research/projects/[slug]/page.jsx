import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import {
  getResearchProject,
  researchProjects,
} from "@/data/researchProjects";

export function generateStaticParams() {
  return researchProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getResearchProject(slug);
  if (!project) return {};

  return {
    title: `${project.id}: ${project.shortTitle} | NaS Research`,
    description: project.description,
    alternates: { canonical: `/research/projects/${project.slug}` },
    openGraph: {
      title: `${project.id}: ${project.shortTitle}`,
      description: project.description,
      type: "article",
      url: `/research/projects/${project.slug}`,
    },
  };
}

export default async function ResearchProjectPage({ params }) {
  const { slug } = await params;
  const project = getResearchProject(slug);
  if (!project) notFound();

  const otherProjects = researchProjects.filter(
    (candidate) => candidate.slug !== project.slug,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: project.title,
    identifier: project.id,
    description: project.description,
    url: `https://nasresearch.bio/research/projects/${project.slug}`,
    memberOf: {
      "@type": "Organization",
      name: "NaS Research",
      url: "https://nasresearch.bio",
    },
  };

  return (
    <div className="nas-page project-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="project-hero">
        <video
          className="project-hero__video"
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="project-hero__shade" aria-hidden="true" />

        <div className="nas-shell project-hero__inner">
          <Link href="/#current-research" className="project-back">
            ← Current research
          </Link>

          <div className="project-identity">
            <span>{project.id}</span>
            <span>{project.area}</span>
            <span>{project.role}</span>
          </div>

          <h1>{project.title}</h1>
          <p className="project-hero__description">{project.description}</p>

          <div className="project-status">
            <span className="project-status__indicator" aria-hidden="true" />
            <div>
              <p>{project.status}</p>
              <span>{project.statusDetail}</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="nas-shell project-overview">
          <div className="project-overview__lead">
            <p className="project-label">Research question</p>
            <h2>{project.question}</h2>
            <p>{project.summary}</p>
          </div>

          <dl className="project-facts">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            <div>
              <dt>Public record updated</dt>
              <dd>
                <time dateTime={project.updatedDateISO}>
                  {project.updatedDate}
                </time>
              </dd>
            </div>
          </dl>
        </section>

        <div className="nas-shell project-layout">
          <aside className="project-toc" aria-label="Project brief contents">
            <p>In this project brief</p>
            <nav>
              {project.sections.map((section, index) => (
                <a href={`#${section.id}`} key={section.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.eyebrow}
                </a>
              ))}
              <a href="#release-boundary">
                <span>{String(project.sections.length + 1).padStart(2, "0")}</span>
                Release boundary
              </a>
            </nav>
          </aside>

          <article className="project-brief">
            {project.sections.map((section, index) => (
              <section id={section.id} className="project-section" key={section.id}>
                <div className="project-section__heading">
                  <p>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {section.eyebrow}
                  </p>
                  <h2>{section.title}</h2>
                </div>

                <div className="project-section__content">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <section id="release-boundary" className="project-release">
              <p className="project-label">Release boundary</p>
              <h2>Current research is not published evidence.</h2>
              <p>{project.releaseNote}</p>
              <div className="project-release__actions">
                <Link href="/research" className="nas-button">
                  Read published research
                </Link>
                <Link href="/research/programs" className="project-text-link">
                  Explore the research program <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </section>

            {otherProjects.length > 0 && (
              <section className="project-related">
                <p className="project-label">Related current research</p>
                {otherProjects.map((related) => (
                  <Link
                    href={`/research/projects/${related.slug}`}
                    key={related.slug}
                  >
                    <span>{related.id}</span>
                    <strong>{related.shortTitle}</strong>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </section>
            )}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
