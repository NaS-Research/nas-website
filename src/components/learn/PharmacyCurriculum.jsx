import Link from "next/link";

export default function PharmacyCurriculum({ collections, lessons }) {
  return (
    <section className="pharmacy-curriculum" id="curriculum" aria-labelledby="curriculum-title">
      <header className="pharmacy-curriculum__heading">
        <p className="nas-section-label">Therapeutics sequence</p>
        <h2 id="curriculum-title">Learn in the order the knowledge builds.</h2>
        <p>
          Begin with drug action, then move through organ systems, infectious disease, oncology, and acute care. Each block prepares you for the next.
        </p>
      </header>

      <div className="pharmacy-curriculum__grid">
        {collections.map((collection) => {
          const published = lessons.filter((lesson) => lesson.collectionSlug === (collection.lessonCollectionSlug || collection.slug));
          return (
            <article className="curriculum-card" id={collection.slug} key={collection.slug}>
              <div className="curriculum-card__topline">
                <span>{collection.number}</span>
                <span>{published.length ? `${published.length} guide${published.length === 1 ? "" : "s"}` : `Block ${collection.number}`}</span>
              </div>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <ul>
                {collection.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
              <Link className="curriculum-card__open" href={`/learn/pharmacy/modules/${collection.slug}`}>
                <span>Explore {collection.submodules.length} submodules</span>
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
      <Link className="pharmacy-curriculum__review" href="/learn/pharmacy/review">
        <div><span>Cumulative review</span><strong>Test the complete sequence with direct questions and patient cases.</strong></div>
        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
