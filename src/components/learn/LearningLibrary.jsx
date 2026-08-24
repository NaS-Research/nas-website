"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function LearningLibrary({ lessons }) {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState("All collections");

  const collections = [...new Set(lessons.map((lesson) => lesson.collection))].sort();
  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return lessons.filter((lesson) => {
      const matchesCollection = collection === "All collections" || lesson.collection === collection;
      const matchesQuery = !normalizedQuery || `${lesson.title} ${lesson.description} ${lesson.collection}`
        .toLowerCase()
        .includes(normalizedQuery);
      return matchesCollection && matchesQuery;
    });
  }, [collection, lessons, query]);

  return (
    <section className="learning-library" aria-labelledby="learning-library-title">
      <div className="learning-library__heading">
        <div>
          <p className="nas-section-label">Learning library</p>
          <h2 id="learning-library-title">Start with what is available now.</h2>
        </div>
        <p>
          Every published guide is written for the web, reviewed, sourced, and connected to the larger curriculum.
        </p>
      </div>

      <div className="learning-toolbar">
        <label className="learning-search">
          <span aria-hidden="true">⌕</span>
          <span className="sr-only">Search learning guides</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides and concepts"
          />
        </label>
        <label className="learning-filter">
          <span className="sr-only">Filter by collection</span>
          <select value={collection} onChange={(event) => setCollection(event.target.value)}>
            <option>All collections</option>
            {collections.map((name) => <option key={name}>{name}</option>)}
          </select>
        </label>
      </div>

      <div className="learning-library__meta" aria-live="polite">
        <span>{results.length} {results.length === 1 ? "guide" : "guides"}</span>
        {(query || collection !== "All collections") && (
          <button type="button" onClick={() => { setQuery(""); setCollection("All collections"); }}>
            Clear filters
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <div className="learning-results">
          {results.map((lesson, index) => (
            <Link href={`/learn/pharmacy/${lesson.slug}`} className="learning-result" key={lesson.slug}>
              <div className="learning-result__number">{String(index + 1).padStart(2, "0")}</div>
              <div className="learning-result__body">
                <p>{lesson.collection}</p>
                <h3>{lesson.title}</h3>
                <span>{lesson.description}</span>
              </div>
              <div className="learning-result__details">
                <span>{lesson.level}</span>
                <span>{lesson.readTime}</span>
                <strong>Study guide ↗</strong>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="learning-empty">
          <p>No guides match that search.</p>
          <button type="button" onClick={() => { setQuery(""); setCollection("All collections"); }}>
            Reset the library
          </button>
        </div>
      )}
    </section>
  );
}
