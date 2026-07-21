"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const typeGroups = {
  Publications: ["Publication", "Technical Report", "White Paper"],
  "Model Cards": ["Model Card"],
  "Research Notes": ["Research Note"],
  Releases: ["Release", "Founder's Letter"],
};

export default function ResearchLibrary({ items, types }) {
  const [activeType, setActiveType] = useState("All");
  const [area, setArea] = useState("All areas");
  const [sort, setSort] = useState("newest");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("list");

  const areas = [...new Set(items.map((item) => item.area))].sort();

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return items
      .filter((item) => activeType === "All" || typeGroups[activeType]?.includes(item.type))
      .filter((item) => area === "All areas" || item.area === area)
      .filter((item) =>
        !normalizedQuery ||
        `${item.title} ${item.abstract} ${item.area} ${item.type}`
          .toLowerCase()
          .includes(normalizedQuery)
      )
      .sort((a, b) => {
        if (sort === "oldest") return a.dateISO.localeCompare(b.dateISO);
        if (sort === "title") return a.title.localeCompare(b.title);
        return b.dateISO.localeCompare(a.dateISO);
      });
  }, [activeType, area, items, query, sort]);

  const clearFilters = () => {
    setActiveType("All");
    setArea("All areas");
    setQuery("");
  };

  return (
    <div className="research-library">
      <div className="research-tabs" role="tablist" aria-label="Research content types">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            role="tab"
            aria-selected={activeType === type}
            className={activeType === type ? "is-active" : ""}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="research-toolbar">
        <label className="research-search">
          <span className="sr-only">Search research</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search research"
          />
        </label>

        <div className="research-controls">
          <label>
            <span className="sr-only">Filter by research area</span>
            <select value={area} onChange={(event) => setArea(event.target.value)}>
              <option>All areas</option>
              {areas.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Sort research</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="title">Title A–Z</option>
            </select>
          </label>
          <div className="research-view-toggle" aria-label="Display style">
            <button type="button" className={view === "list" ? "is-active" : ""} onClick={() => setView("list")} aria-label="List view">☷</button>
            <button type="button" className={view === "grid" ? "is-active" : ""} onClick={() => setView("grid")} aria-label="Grid view">⊞</button>
          </div>
        </div>
      </div>

      <div className="research-results-meta" aria-live="polite">
        <span>{filteredItems.length} {filteredItems.length === 1 ? "entry" : "entries"}</span>
        {(activeType !== "All" || area !== "All areas" || query) && (
          <button type="button" onClick={clearFilters}>Clear filters</button>
        )}
      </div>

      {filteredItems.length ? (
        <div className={`research-results research-results--${view}`}>
          {filteredItems.map((item) => (
            <Link href={`/research/${item.slug}`} className="research-result" key={item.slug}>
              <div className="research-result__meta">
                <span>{item.area}</span>
                <time dateTime={item.dateISO}>{item.date}</time>
              </div>
              <div className="research-result__content">
                <p className="research-result__type">{item.type}</p>
                <h2>{item.title}</h2>
                <p>{item.abstract}</p>
                <span className="research-result__read">Read online <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="research-empty">
          <p>No research matches those filters.</p>
          <button type="button" onClick={clearFilters}>Reset the directory</button>
        </div>
      )}
    </div>
  );
}
