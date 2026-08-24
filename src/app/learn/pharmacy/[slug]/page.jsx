import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getPharmacyLesson, pharmacyLessons } from "@/data/pharmacyLearning";

export function generateStaticParams() {
  return pharmacyLessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lesson = getPharmacyLesson(slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} | NaS Learn`,
    description: lesson.description,
    alternates: { canonical: `/learn/pharmacy/${lesson.slug}` },
    openGraph: { title: `${lesson.title} | NaS Learn`, description: lesson.description, type: "article", images: [] },
    twitter: { card: "summary", title: `${lesson.title} | NaS Learn`, description: lesson.description, images: [] },
  };
}

function LessonSection({ section }) {
  return (
    <section id={section.id} className="lesson-section">
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.callout && <aside className="lesson-callout"><span>{section.callout.label}</span><p>{section.callout.text}</p></aside>}
      {section.points && <ul className="lesson-points">{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
      {section.comparison && (
        <div className="lesson-table-wrap" tabIndex="0" role="region" aria-label="Common route comparison">
          <table className="lesson-table">
            <thead><tr><th>Route</th><th>Typical purpose</th><th>What to examine</th></tr></thead>
            <tbody>{section.comparison.map((row) => <tr key={row.route}><th scope="row">{row.route}</th><td>{row.purpose}</td><td>{row.watch}</td></tr>)}</tbody>
          </table>
        </div>
      )}
      {section.steps && (
        <div className="lesson-steps">
          {section.steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
        </div>
      )}
      {section.questions && (
        <div className="lesson-questions">
          {section.questions.map((item, index) => <details key={item.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}</summary><p>{item.answer}</p></details>)}
        </div>
      )}
    </section>
  );
}

export default async function PharmacyLessonPage({ params }) {
  const { slug } = await params;
  const lesson = getPharmacyLesson(slug);
  if (!lesson) notFound();

  const learningResourceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title,
    description: lesson.description,
    url: `https://nasresearch.bio/learn/pharmacy/${lesson.slug}`,
    educationalLevel: lesson.level,
    learningResourceType: "Study guide",
    datePublished: lesson.dateISO,
    dateModified: lesson.reviewedDateISO,
    provider: { "@type": "Organization", name: "NaS Research", url: "https://nasresearch.bio" },
  };

  return (
    <div className="nas-page pharmacy-lesson-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceJsonLd).replace(/</g, "\\u003c") }} />
      <header className="lesson-hero">
        <div className="nas-shell lesson-hero__inner">
          <Link href="/learn/pharmacy" className="learning-back">← Pharmacy</Link>
          <div className="lesson-hero__meta"><span>{lesson.collection}</span><span>{lesson.level}</span><span>{lesson.readTime}</span></div>
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>
          <div className="lesson-hero__dates">
            <span>Published <time dateTime={lesson.dateISO}>{lesson.date}</time></span>
            <span>Clinically reviewed <time dateTime={lesson.reviewedDateISO}>{lesson.reviewedDate}</time></span>
            <span>Version {lesson.version}</span>
          </div>
        </div>
      </header>

      <main className="nas-shell lesson-layout">
        <aside className="lesson-navigation" aria-label="Guide contents">
          <p>In this guide</p>
          <nav>
            <a href="#objectives">Learning objectives</a><a href="#orientation">Orientation</a>
            {lesson.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title.replace(/^\d+\.\s*/, "")}</a>)}
            <a href="#takeaways">Key takeaways</a><a href="#references">References</a>
          </nav>
        </aside>

        <article className="lesson-body">
          <section id="objectives" className="lesson-objectives">
            <p className="nas-section-label">Learning objectives</p>
            <h2>By the end of this guide, you should be able to:</h2>
            <ol>{lesson.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ol>
          </section>

          <section id="orientation" className="lesson-orientation">
            {lesson.keyIdeas.map((idea) => <div key={idea.label}><span>{idea.label}</span><strong>{idea.value}</strong></div>)}
          </section>

          {lesson.sections.map((section) => <LessonSection section={section} key={section.id} />)}

          <section id="takeaways" className="lesson-takeaways">
            <p className="nas-section-label">Key takeaways</p><h2>Carry the framework forward.</h2>
            <ol>{lesson.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ol>
          </section>

          <section id="references" className="lesson-references">
            <p className="nas-section-label">References</p><h2>Source material and further reading</h2>
            <p>This guide is original educational material informed by the sources below. Product specific decisions should use the most current approved labeling and professional guidance.</p>
            <ol>{lesson.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}<span aria-hidden="true">↗</span></a></li>)}</ol>
          </section>

          <aside className="lesson-disclaimer">
            <strong>Educational use only</strong>
            <p>This material is not medical advice and does not replace current prescribing information, institutional policy, clinical guidelines, or professional judgment.</p>
          </aside>
        </article>
      </main>
      <Footer />
    </div>
  );
}
