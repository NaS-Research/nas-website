"use client";

import PublicationArtwork from "./PublicationArtwork";
import "./publication-artwork.css";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { matchesResearchType } from "@/data/researchTaxonomy.mjs";

const viewPageSizes = { grid: 6, compact: 7, preview: 3 };

export default function ResearchLibrary({ items, types }) {
  const [activeType, setActiveType] = useState("All");
  const [area, setArea] = useState("All areas");
  const [sort, setSort] = useState("newest");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("grid");

  const [limit, setLimit] = useState(6);
  const toolbar = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.type === "keydown" && event.key !== "Escape") return;
      if (event.type !== "keydown" && toolbar.current?.contains(event.target)) return;
      toolbar.current?.querySelectorAll("details[open]").forEach(detail => {
        detail.open = false;
        if (event.type === "keydown") detail.querySelector("summary")?.focus();
      });
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", close); };
  }, []);
  const change = (setter, value) => { setter(value); setLimit(viewPageSizes[view]); };
  const areas = [...new Set(items.map((item) => item.area))].sort();

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return items
      .filter((item) => matchesResearchType(item, activeType))
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
        if (sort === "title-desc") return b.title.localeCompare(a.title);
        return b.dateISO.localeCompare(a.dateISO);
      });
  }, [activeType, area, items, query, sort]);

  const clearFilters = () => {
    setActiveType("All");
    setArea("All areas");
    setQuery("");
    setLimit(viewPageSizes[view]);
  };

  return (
    <div className="research-library">
      <div className="research-tabs" role="group" aria-label="Research content types">
        {types.map((type) => (
          <button
            key={type}
            type="button"

            aria-pressed={activeType === type}
            className={activeType === type ? "is-active" : ""}
            onClick={() => change(setActiveType, type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="research-toolbar research-toolbar--minimal" ref={toolbar}>
        <div className="research-menu-actions">
          <details className="research-menu" name="research-tools">
            <summary>Filter <span aria-hidden="true">☷</span>{area !== "All areas" && <span className="research-filter-dot" />}</summary>
            <fieldset className="research-popover"><legend>Research area</legend>
              {["All areas", ...areas].map(option => <label key={option}><input type="radio" name="area" aria-label={option} checked={area === option} onChange={() => change(setArea, option)} />{option}</label>)}
            </fieldset>
          </details>
          <details className="research-menu" name="research-tools">
            <summary>Sort <span className="research-menu-chevron" aria-hidden="true">⌄</span></summary>
            <fieldset className="research-popover"><legend className="sr-only">Sort order</legend>
              {[["newest", "Newest → Oldest"], ["oldest", "Oldest → Newest"], ["title", "Alphabetical (A–Z)"], ["title-desc", "Alphabetical (Z–A)"]].map(([value, label]) => <label key={value}><input type="radio" name="sort" aria-label={label} checked={sort === value} onChange={event => { change(setSort, value); const detail = event.currentTarget.closest("details"); detail.open = false; detail.querySelector("summary").focus(); }} />{label}</label>)}
            </fieldset>
          </details>
        </div>
        <label className="research-search"><span className="sr-only">Search research</span><span aria-hidden="true">⌕</span><input type="search" value={query} onChange={event => change(setQuery, event.target.value)} placeholder="Search" /></label>
        <div className="research-layout-icons" role="group" aria-label="Publication layout">
          {[{id: "grid", label: "Cards", path: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z"}, {id: "compact", label: "Compact", path: "M3 5h18 M3 12h18 M3 19h18"}, {id: "preview", label: "Preview", path: "M3 3h18v18H3z M3 14h18 M7 18h10"}].map(option => <button key={option.id} type="button" title={option.label} aria-label={option.label} aria-pressed={view === option.id} onClick={() => { setView(option.id); setLimit(viewPageSizes[option.id]); }}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d={option.path} /></svg></button>)}
        </div>
      </div>

      <div className="research-results-meta" aria-live="polite">
        <span>{Math.min(limit, filteredItems.length)} of {filteredItems.length} entries</span>
        {(activeType !== "All" || area !== "All areas" || query) && (
          <button type="button" onClick={clearFilters}>Clear filters</button>
        )}
      </div>

      {filteredItems.length ? (
        <div className={`research-results research-results--${view}`}>
          {filteredItems.slice(0, limit).map((item) => (
            <Link href={`/research/${item.slug}`} className="research-result" key={item.slug}>
              <PublicationArtwork slug={item.slug} />
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
      {limit < filteredItems.length && <div className="research-load-more"><button type="button" onClick={() => setLimit(current => current + viewPageSizes[view])}>Load more</button></div>}
    </div>
  );
}
