import Link from "next/link";

export default function PharmacyCurriculum({ collections, lessons }) {
  return (
    <section className="pharmacy-curriculum" id="curriculum" aria-labelledby="curriculum-title">
      <header className="pharmacy-curriculum__heading">
        <p className="nas-section-label">Focused modules</p>
        <h2 id="curriculum-title">Study one clinical problem at a time.</h2>
        <p>
          Each module turns the lecture material into a complete lesson, short knowledge checks, and a fresh ten question assessment drawn from a larger bank.
        </p>
      </header>

      <div className="pharmacy-curriculum__grid">
        {collections.map((collection) => {
          const published = lessons.filter((lesson) => lesson.collectionSlug === (collection.lessonCollectionSlug || collection.slug));
          return (
            <article className="curriculum-card" id={collection.slug} key={collection.slug}>
              <div className="curriculum-card__topline">
                <span>{collection.number}</span>
                <span>{collection.questionBank ? `${collection.questionBank.length} test questions` : `${published.length} guide${published.length === 1 ? "" : "s"}`}</span>
              </div>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <ul>
                {collection.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
              <Link className="curriculum-card__open" href={`/learn/pharmacy/modules/${collection.slug}`}>
                <span>Open {collection.submodules.length} lessons</span>
                <span aria-hidden="true">↗</span>
              </Link>
              {published.length > 0 && (
                <div className="curriculum-card__guides">
                  {published.map((lesson) => (
                    <Link href={`/learn/pharmacy/${lesson.slug}`} key={lesson.slug}>
                      <span>{lesson.shortTitle}</span>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
      {collections.length > 1 && <Link className="pharmacy-curriculum__review" href="/learn/pharmacy/review">
        <div><span>Cumulative review</span><strong>Test the complete sequence with direct questions and patient cases.</strong></div>
        <span aria-hidden="true">↗</span>
      </Link>}
    </section>
  );
}
