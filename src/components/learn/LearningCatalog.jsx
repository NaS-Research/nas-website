"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function LearningCatalog({ entries }) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
  const [limit, setLimit] = useState(12);
  const subjects = [...new Set(entries.map(entry => entry.subject))].sort();
  const results = useMemo(() => entries.filter(entry =>
    (!subject || entry.subject === subject) && (!type || entry.type === type) &&
    `${entry.title} ${entry.description} ${entry.subject} ${entry.topics.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase())
  ), [entries, query, subject, type]);
  function reset() { setQuery(""); setSubject(""); setType(""); setLimit(12); }
  return <section className="learning-library" aria-label="Learning catalog">
    <div className="learning-toolbar">
      <label className="learning-search"><span aria-hidden="true">⌕</span><span className="sr-only">Search the library</span>
        <input type="search" placeholder="Search topics, modules, and guides" value={query} onChange={event => { setQuery(event.target.value); setLimit(12); }} />
      </label>
      <label className="learning-filter"><span className="sr-only">Subject</span><select value={subject} onChange={event => { setSubject(event.target.value); setLimit(12); }}><option value="">All subjects</option>{subjects.map(name => <option key={name}>{name}</option>)}</select></label>
      <label className="learning-filter"><span className="sr-only">Content type</span><select value={type} onChange={event => { setType(event.target.value); setLimit(12); }}><option value="">All formats</option><option>Module</option><option>Study guide</option></select></label>
    </div>
    {(query || subject || type) && <div className="learning-library__meta"><button onClick={reset}>Clear filters</button></div>}
    <div className="learning-results">{results.slice(0, limit).map(entry => <Link className="learning-result" key={entry.href} href={entry.href}>
      <div className="learning-result__body"><p>{entry.subject}</p><h2>{entry.title}</h2><span>{entry.description}</span></div>
      <div className="learning-result__details"><span>{entry.type}</span><span>{entry.detail}</span><strong>Explore ↗</strong></div>
    </Link>)}</div>
    {!results.length && <div className="learning-empty"><p>No results match your search.</p><button onClick={reset}>Clear filters</button></div>}
    {results.length > limit && <div className="learning-library__meta"><button className="learning-primary-link" onClick={() => setLimit(value => value + 12)}>Show more <span aria-hidden="true">↓</span></button></div>}
  </section>;
}
