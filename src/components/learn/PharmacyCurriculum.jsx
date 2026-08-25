"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const areas = ["All", "Nutrition", "Foundations", "Cardiovascular", "Renal", "Pulmonary"];

function getArea(collection) {
  const value = `${collection.slug} ${collection.title}`.toLowerCase();
  if (/nutrition|fluid|electrolyte|acid-base|calcium|phosphorus|enteral|parenteral/.test(value)) return "Nutrition";
  if (/kidney|renal|ckd/.test(value)) return "Renal";
  if (/rhinitis|asthma|pulmonary|copd|cystic/.test(value)) return "Pulmonary";
  if (/hypertension|lipid|coronary|platelet|coagulation|thrombo|warfarin|anticoagul|ecg|arrhythm|heart-failure|arterial-disease|stroke/.test(value)) return "Cardiovascular";
  return "Foundations";
}

export default function PharmacyCurriculum({ collections, lessons }) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("All");

  const visibleCollections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return collections.filter((collection) => {
      const matchesArea = area === "All" || getArea(collection) === area;
      const searchable = [collection.title, collection.description, ...(collection.topics || [])].join(" ").toLowerCase();
      return matchesArea && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
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
        <div className="curriculum-filters" aria-label="Filter curriculum by subject area">
          {areas.map((option) => <button className={area === option ? "is-active" : ""} type="button" aria-pressed={area === option} onClick={() => setArea(option)} key={option}>{option}</button>)}
        </div>
        <p className="curriculum-results" aria-live="polite">{visibleCollections.length} {visibleCollections.length === 1 ? "module" : "modules"}</p>
      </div>

      {visibleCollections.length > 0 ? <div className="pharmacy-curriculum__grid">
        {visibleCollections.map((collection) => {
          const published = lessons.filter((lesson) => lesson.collectionSlug === (collection.lessonCollectionSlug || collection.slug));
          return (
            <article className="curriculum-card" id={collection.slug} key={collection.slug}>
              <div className="curriculum-card__topline"><span>{getArea(collection)}</span><span>{collection.lessonCount} lessons</span></div>
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
