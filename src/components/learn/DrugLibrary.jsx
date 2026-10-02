"use client";

import Link from "next/link";
import styles from "./DrugLibraryPagination.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { coreDrugs } from "@/data/drugLibrary";
import { drugQuestions } from "@/data/drugQuestions";
import { getTherapeuticClassColor, therapeuticClasses } from "@/data/drugTherapeuticClasses";
import DrugQuestionBank from "@/components/learn/DrugQuestionBank";

const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const studyClasses = ["All classes", ...therapeuticClasses.map((item) => item.name).filter((item) => coreDrugs.some((drug) => drug.therapeuticClass === item))];

function displayName(name) {
  return name.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function DrugLibrary() {
  const toolbarRef = useRef(null);
  const resultsRef = useRef(null);
  const [mode, setMode] = useState("core");
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("All");
  const [therapeuticClass, setTherapeuticClass] = useState("All classes");
  const [page, setPage] = useState(1);
  const [rxResults, setRxResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [serviceUnavailable, setServiceUnavailable] = useState(false);

  useEffect(() => {
    const initialQuery = new URLSearchParams(window.location.search).get("q");
    if (initialQuery) setQuery(initialQuery.trim().slice(0, 160));
  }, []);

  useEffect(() => {
    const closeMenus = (event) => {
      if (event.type === "keydown" && event.key !== "Escape") return;
      if (event.type !== "keydown" && toolbarRef.current?.contains(event.target)) return;
      toolbarRef.current?.querySelectorAll("details[open]").forEach((menu) => {
        menu.open = false;
        if (event.type === "keydown") menu.querySelector("summary")?.focus();
      });
    };
    document.addEventListener("pointerdown", closeMenus);
    document.addEventListener("keydown", closeMenus);
    return () => {
      document.removeEventListener("pointerdown", closeMenus);
      document.removeEventListener("keydown", closeMenus);
    };
  }, []);

  const activeFilterCount = Number(letter !== "All") + Number(therapeuticClass !== "All classes");
  const clearFilters = () => {
    setQuery("");
    setLetter("All");
    setTherapeuticClass("All classes");
    setPage(1);
  };

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();
    return coreDrugs
      .filter((drug) => {
        const matchesLetter = letter === "All" || drug.generic.startsWith(letter.toLowerCase());
        const matchesQuery = !normalized || `${drug.generic} ${drug.brand || ""} ${drug.className || ""} ${drug.therapeuticClass}`.toLowerCase().includes(normalized);
        const matchesClass = therapeuticClass === "All classes" || drug.therapeuticClass === therapeuticClass;
        return matchesLetter && matchesQuery && matchesClass;
      })
      .sort((a, b) => a.generic.localeCompare(b.generic));
  }, [letter, query, therapeuticClass]);

  useEffect(() => {
    if (mode !== "all" || query.trim().length < 2) {
      setRxResults([]);
      setSearching(false);
      setServiceUnavailable(false);
      return undefined;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setSearching(true);
      try {
        const response = await fetch(`/api/drugs/search?q=${encodeURIComponent(query.trim())}`, { signal: controller.signal });
        const payload = await response.json();
        setRxResults(payload.results || []);
        setServiceUnavailable(!response.ok || Boolean(payload.unavailable));
      } catch (error) {
        if (error.name !== "AbortError") setServiceUnavailable(true);
      } finally {
        setSearching(false);
      }
    }, 280);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [mode, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / 9));
  const currentPage = Math.min(page, pageCount);

  function changePage(nextPage) {
    setPage(nextPage);
    resultsRef.current?.focus({ preventScroll: true });
    resultsRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  }

  function changeMode(nextMode) {
    setMode(nextMode);
    setQuery("");
    setLetter("All");
    setTherapeuticClass("All classes");
    setPage(1);
  }

  return (
    <section className="drug-library" aria-labelledby="drug-library-title">
      <header className="drug-library__hero">
        <div>
          <p className="nas-section-label">Medication library</p>
          <h1 id="drug-library-title">Know the drug. See the product. Connect the science.</h1>
        </div>
        <p>Browse a growing medication library organized by generic name and therapeutic class, or search the current RxNorm vocabulary.</p>
      </header>

      <div className={styles.toolbar} ref={toolbarRef}>
        {mode !== "questions" ? <label className={styles.search}>
          <span className="sr-only">{mode === "core" ? "Search medications" : "Search RxNorm"}</span>
          <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
          <input type="search" maxLength={160} value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder={mode === "core" ? "Search medications" : "Search RxNorm"} />
        </label> : <span className={styles.modeTitle}>Medication questions</span>}
        <div className={styles.actions}>
          {mode === "core" && <details className={styles.menu} name="drug-library-tools">
            <summary>
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /><path d="M8 3v6M16 9v6M8 15v6" /></svg>
              Filter {activeFilterCount > 0 && <span className={styles.filterCount}>{activeFilterCount}</span>}
            </summary>
            <div className={styles.popover}>
              <label className={styles.classLabel} htmlFor="drug-class">Therapeutic class</label>
              <select id="drug-class" value={therapeuticClass} onChange={(event) => { setTherapeuticClass(event.target.value); setPage(1); }}>
                {studyClasses.map((item) => <option key={item}>{item}</option>)}
              </select>
              <fieldset className={styles.alphabet}>
                <legend>Starts with</legend>
                <div>{letters.map((item) => <button type="button" aria-pressed={letter === item} onClick={() => { setLetter(item); setPage(1); }} key={item}>{item}</button>)}</div>
              </fieldset>
              <div className={styles.popoverFooter}>
                <button type="button" onClick={clearFilters}>Reset</button>
                <button type="button" onClick={(event) => { const menu = event.currentTarget.closest("details"); menu.open = false; menu.querySelector("summary").focus(); }}>Show {filtered.length} medications</button>
              </div>
            </div>
          </details>}
          <details className={styles.menu} name="drug-library-tools">
            <summary aria-label="More medication tools" title="More medication tools"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /></svg></summary>
            <div className={`${styles.popover} ${styles.tools}`}>
              <p>Explore medicines</p>
              {[{ id: "core", label: "Drug library", detail: `${coreDrugs.length} reviewed profiles`, icon: "M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-3H4V4Zm16 0h-4a3 3 0 0 0-3 3m0 14a4 4 0 0 1 4-3h3V4Z" }, { id: "all", label: "RxNorm search", detail: "National medication vocabulary", icon: "M15 3h6v6M21 3l-9 9M10 5H4v15h15v-6" }, { id: "questions", label: "Practice questions", detail: `${drugQuestions.length} questions`, icon: "M8 8a4 4 0 0 1 8 0c0 3-4 3-4 6m0 3v2" }].map((item) => <button type="button" aria-pressed={mode === item.id} key={item.id} onClick={(event) => { const menu = event.currentTarget.closest("details"); menu.open = false; changeMode(item.id); menu.querySelector("summary").focus(); }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={item.icon} /></svg>
                <span><strong>{item.label}</strong><small>{item.detail}</small></span><b aria-hidden="true">{mode === item.id ? "✓" : "↗"}</b>
              </button>)}
            </div>
          </details>
        </div>
      </div>
      {mode !== "questions" && <div className={styles.meta}>
        <p role="status" aria-live="polite">{mode === "core" ? `${filtered.length} medications${letter !== "All" ? ` · ${letter}` : ""}${therapeuticClass !== "All classes" ? ` · ${therapeuticClass}` : ""}` : "RxNorm · National medication vocabulary"}</p>
        {mode === "core" && (query || activeFilterCount > 0) && <button type="button" onClick={clearFilters}>Clear filters <span aria-hidden="true">×</span></button>}
        {mode === "all" && <button type="button" onClick={() => changeMode("core")}>Back to library</button>}
      </div>}

      {mode === "core" ? (
        <>
          <div className={`drug-library__grid ${styles.results}`} ref={resultsRef} tabIndex={-1} aria-label="Medication results">
            {filtered.slice((currentPage - 1) * 9, currentPage * 9).map((drug) => (
              <article className={`drug-card ${drug.appearance ? "drug-card--featured" : ""}`} key={drug.generic}>
                <div className="drug-card__body">
                  <span><i className="drug-card__class-dot" style={{ "--drug-class-color": getTherapeuticClassColor(drug.therapeuticClass) }} aria-hidden="true" />{drug.therapeuticClass}</span>
                  <h2>{displayName(drug.generic)}</h2>
                  {drug.brand && <p>{drug.brand}</p>}
                  {drug.commonUses && <em>{drug.commonUses.slice(0, 2).join(" · ")}</em>}
                </div>
                <Link href={`/learn/pharmacy/drugs/${drug.slug}`}>{drug.brand ? "Study profile" : "Open profile"} <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <div className="drug-library__empty"><strong>No medications match these filters.</strong><p>Try another therapeutic class, letter, or search term.</p></div>}
          {filtered.length > 0 && <nav className={styles.pagination} aria-label="Medication pages">
            <button type="button" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>← Previous</button>
            <p role="status" aria-live="polite">Page {currentPage} of {pageCount}</p>
            <button type="button" disabled={currentPage === pageCount} onClick={() => changePage(currentPage + 1)}>Next →</button>
          </nav>}
        </>
      ) : mode === "all" ? (
        <div className="drug-library__rxnorm" aria-live="polite">
          {query.trim().length < 2 && <div className="drug-library__prompt"><strong>Search beyond the core set.</strong><p>Enter a generic name, brand name, strength, or dosage form.</p></div>}
          {searching && <div className="drug-library__prompt"><strong>Searching RxNorm</strong><p>Checking the current national medication vocabulary.</p></div>}
          {!searching && serviceUnavailable && <div className="drug-library__prompt"><strong>Search is temporarily unavailable.</strong><p>The NaS medication library remains available above.</p></div>}
          {!searching && !serviceUnavailable && query.trim().length >= 2 && rxResults.map((drug) => (
            <a className="drug-library__rxnorm-result" href={`https://mor.nlm.nih.gov/RxNav/search?searchBy=RXCUI&searchTerm=${drug.rxcui}`} target="_blank" rel="noreferrer" key={drug.rxcui}>
              <span>RxCUI {drug.rxcui}</span><strong>{drug.name}</strong><i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      ) : (
        <DrugQuestionBank />
      )}

      <aside className={styles.sourceNote} aria-label="Library sources and use">
        <p className={styles.sourceTitle}>Sources &amp; use</p>
        <p>The initial catalog was seeded from the <a href="https://clincalc.com/DrugStats/Top300Drugs.aspx" target="_blank" rel="noreferrer">ClinCalc DrugStats Database</a> and is expanded as additional medication profiles are reviewed. Live search uses RxNorm. These sources do not endorse or recommend this product. Medication appearance and labeling vary by manufacturer and product.</p>
      </aside>
    </section>
  );
}
