import Link from "next/link";

export default function PharmacyCurriculum({ collections, lessons }) {
  return (
    <section className="pharmacy-curriculum" aria-labelledby="curriculum-title">
      <header className="pharmacy-curriculum__heading">
        <p className="nas-section-label">Curriculum map</p>
        <h2 id="curriculum-title">Build the foundation, then connect the systems.</h2>
        <p>
          Move from foundational principles into therapeutics, safety, and patient care without losing the relationships between them.
        </p>
      </header>

      <div className="pharmacy-curriculum__grid">
        {collections.map((collection) => {
          const published = lessons.filter((lesson) => lesson.collectionSlug === collection.slug);
          return (
            <article className="curriculum-card" id={collection.slug} key={collection.slug}>
              <div className="curriculum-card__topline">
                <span>{collection.number}</span>
                <span>{published.length ? `${published.length} guide${published.length === 1 ? "" : "s"}` : collection.topics.length + " topics"}</span>
              </div>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <ul>
                {collection.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
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
    </section>
  );
}
