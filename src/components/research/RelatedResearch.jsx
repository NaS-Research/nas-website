import Link from "next/link";
import PublicationArtwork from "./PublicationArtwork";
import "./related-research.css";

export default function RelatedResearch({ items }) {
  if (!items.length) return null;
  return (
    <section className="nas-shell related-research" aria-labelledby="related-research-title" id="related-research">
      <div className="related-research__header">
        <h2 id="related-research-title">Related research</h2>
        <Link href="/research">View all research <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="related-research__grid">
        {items.map(item => (
          <Link className="related-research__card" href={`/research/${item.slug}`} key={item.slug}>
            <div className="related-research__art"><PublicationArtwork slug={item.slug} /></div>
            <p className="related-research__area">{item.area}</p>
            <h3>{item.shortTitle ?? item.title}</h3>
            <div className="related-research__meta"><span>{item.type}</span><time dateTime={item.dateISO}>{item.date}</time></div>
            <span className="related-research__read">Read article <span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
