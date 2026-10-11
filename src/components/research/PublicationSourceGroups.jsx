import "./publication-sources.css";
export default function PublicationSourceGroups({ sources, groups }) {
  return <div className="publication-source-groups">
    {groups.map(group => <section className="publication-source-group" key={group.title} aria-label={group.title}>
      <h3>{group.title}</h3>
      <ol>
        {group.numbers.map(number => {
          const source = sources[number - 1];
          return <li id={`source-${number}`} value={number} key={number}>
            <span className="publication-source-group__number" aria-hidden="true">{String(number).padStart(2, "0")}</span>
            <div className="publication-source-group__entry">
              <span className="publication-source-group__sr">Source {number}. </span>
              <a className="publication-source-group__title" href={source.url} target="_blank" rel="noreferrer">{source.displayTitle ?? source.title}<span aria-hidden="true"> ↗</span></a>
              {source.citation && <p className="publication-source-group__citation">{source.citation}</p>}
              {source.role && <p className="publication-source-group__role">{source.role}</p>}
              {source.links?.length > 0 && <div className="publication-source-group__links">{source.links.map(link => <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label}<span aria-hidden="true"> ↗</span></a>)}</div>}
            </div>
          </li>;
        })}
      </ol>
    </section>)}
  </div>;
}
