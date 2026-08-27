"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function PharmacyCurriculum({ areas, collections, lessons }) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("All");

  const visibleCollections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return collections
      .filter((collection) => {
        const matchesArea = area === "All" || collection.area === area;
        const searchable = [collection.area, collection.title, collection.description, ...(collection.topics || [])].join(" ").toLowerCase();
        return matchesArea && (!normalizedQuery || searchable.includes(normalizedQuery));
      })
      .sort((left, right) => Number(right.number) - Number(left.number));
  }, [area, collections, query]);

  return (
    <section className="pharmacy-curriculum" id="curriculum" aria-labelledby="curriculum-title">
      <header className="pharmacy-curriculum__heading">
        <p className="nas-section-label">Curriculum</p>
        <h2 id="curriculum-title">Find the subject you need.</h2>
        <p>Search the complete curriculum or move through it by clinical area. Every module connects focused lessons, knowledge checks, and a fresh assessment.</p>
      </header>

      <div className="curriculum-tools">
        <label className="curriculum-search">
          <span aria-hidden="true">⌕</span>
          <input aria-label="Search curriculum" value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search modules and topics" />
        </label>
        <label className="curriculum-area-filter">
          <span>Subject area</span>
          <select aria-label="Filter curriculum by subject area" value={area} onChange={(event) => setArea(event.target.value)}>
            {areas.map((option) => <option value={option} key={option}>{option === "All" ? "All subject areas" : option}</option>)}
          </select>
        </label>
        <p className="curriculum-results" aria-live="polite">{visibleCollections.length} {visibleCollections.length === 1 ? "module" : "modules"}</p>
      </div>

      {visibleCollections.length > 0 ? <div className="pharmacy-curriculum__grid">
        {visibleCollections.map((collection) => {
          const published = lessons.filter((lesson) => lesson.collectionSlug === (collection.lessonCollectionSlug || collection.slug));
          return (
            <article className="curriculum-card" id={collection.slug} key={collection.slug}>
              <div className="curriculum-card__topline"><span>{collection.area}</span><span>{collection.lessonCount} lessons</span></div>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <ul>{collection.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              <Link className="curriculum-card__open" href={`/learn/pharmacy/modules/${collection.slug}`}><span>Open module</span><span aria-hidden="true">↗</span></Link>
              {published.length > 0 && <div className="curriculum-card__guides">
                {published.map((lesson) => <Link href={`/learn/pharmacy/${lesson.slug}`} key={lesson.slug}><span>{lesson.shortTitle}</span><span aria-hidden="true">↗</span></Link>)}
              </div>}
            </article>
          );
        })}
      </div> : <div className="curriculum-empty"><strong>No modules match.</strong><p>Try another subject area or a broader search.</p><button type="button" onClick={() => { setQuery(""); setArea("All"); }}>Clear filters</button></div>}

      {collections.length > 1 && <Link className="pharmacy-curriculum__review" href="/learn/pharmacy/review">
        <div><span>Cumulative review</span><strong>Test the complete sequence with direct questions and patient cases.</strong></div><span aria-hidden="true">↗</span>
      </Link>}
    </section>
  );
}
