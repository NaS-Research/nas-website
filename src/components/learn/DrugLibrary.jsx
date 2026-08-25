"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { coreDrugs } from "@/data/drugLibrary";
import DrugQuestionBank from "@/components/learn/DrugQuestionBank";

const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const studySystems = ["All systems", ...new Set(coreDrugs.map((drug) => drug.system).filter(Boolean))];
const studyClasses = ["All classes", ...new Set(coreDrugs.map((drug) => drug.className).filter(Boolean))];

function displayName(name) {
  return name.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function DrugLibrary() {
  const [mode, setMode] = useState("core");
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("All");
  const [collectionSize, setCollectionSize] = useState("300");
  const [system, setSystem] = useState("All systems");
  const [classFilter, setClassFilter] = useState("All classes");
  const [limit, setLimit] = useState(36);
  const [rxResults, setRxResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [serviceUnavailable, setServiceUnavailable] = useState(false);

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();
    return coreDrugs.filter((drug) => {
      const matchesLetter = letter === "All" || drug.generic.startsWith(letter.toLowerCase());
      const matchesQuery = !normalized || `${drug.generic} ${drug.brand || ""} ${drug.className || ""}`.toLowerCase().includes(normalized);
      const matchesCollection = drug.number <= Number(collectionSize);
      const matchesSystem = system === "All systems" || drug.system === system;
      const matchesClass = classFilter === "All classes" || drug.className === classFilter;
      return matchesLetter && matchesQuery && matchesCollection && matchesSystem && matchesClass;
    });
  }, [classFilter, collectionSize, letter, query, system]);

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
        setServiceUnavailable(Boolean(payload.unavailable));
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

  function changeMode(nextMode) {
    setMode(nextMode);
    setQuery("");
    setLetter("All");
    setCollectionSize("300");
    setSystem("All systems");
    setClassFilter("All classes");
    setLimit(36);
  }

  return (
    <section className="drug-library" aria-labelledby="drug-library-title">
      <header className="drug-library__hero">
        <div>
          <p className="nas-section-label">Medication library</p>
          <h1 id="drug-library-title">Know the drug. See the product. Connect the science.</h1>
        </div>
        <p>Study the ranked top 300 outpatient medications, then search the current RxNorm vocabulary beyond the curated card set.</p>
      </header>

      <div className="drug-library__tabs" role="tablist" aria-label="Drug collections">
        <button type="button" role="tab" aria-selected={mode === "core"} className={mode === "core" ? "is-active" : ""} onClick={() => changeMode("core")}>
          Top drugs <span>300</span>
        </button>
        <button type="button" role="tab" aria-selected={mode === "all"} className={mode === "all" ? "is-active" : ""} onClick={() => changeMode("all")}>
          All medications <span>RxNorm</span>
        </button>
        <button type="button" role="tab" aria-selected={mode === "questions"} className={mode === "questions" ? "is-active" : ""} onClick={() => changeMode("questions")}>
          Questions <span>24</span>
        </button>
      </div>

      {mode !== "questions" && <div className="drug-library__toolbar">
        <label>
          <span className="sr-only">Search medications</span>
          <i aria-hidden="true">⌕</i>
          <input value={query} onChange={(event) => { setQuery(event.target.value); setLimit(36); }} placeholder={mode === "core" ? "Search generic, brand, or class" : "Search the national medication vocabulary"} />
        </label>
        <p>{mode === "core" ? `${filtered.length} medications` : "Current RxNorm concepts"}</p>
      </div>}

      {mode === "core" ? (
        <>
          <div className="drug-library__filter-deck">
            <div className="drug-library__collections" aria-label="Select ranked medication collection">
              {["100", "200", "300"].map((size) => <button type="button" className={collectionSize === size ? "is-active" : ""} onClick={() => { setCollectionSize(size); setLimit(36); }} key={size}>Top {size}</button>)}
            </div>
            <label className="drug-library__class-filter">
              <span>Completed profile class</span>
              <select value={classFilter} onChange={(event) => { setClassFilter(event.target.value); setSystem("All systems"); setLetter("All"); setLimit(36); }}>
                {studyClasses.map((item) => <option value={item} key={item}>{item}</option>)}
              </select>
            </label>
          </div>
          <div className="drug-library__categories" aria-label="Filter completed profiles by body system">
            {studySystems.map((item) => <button type="button" className={system === item ? "is-active" : ""} onClick={() => { setSystem(item); setClassFilter("All classes"); setLetter("All"); setLimit(36); }} key={item}>{item}</button>)}
          </div>
          <div className="drug-library__letters" aria-label="Filter by first letter">
            {letters.map((item) => <button type="button" className={letter === item ? "is-active" : ""} onClick={() => { setLetter(item); setLimit(36); }} key={item}>{item}</button>)}
          </div>
          <div className="drug-library__grid">
            {filtered.slice(0, limit).map((drug) => (
              <article className={`drug-card ${drug.appearance ? "drug-card--featured" : ""}`} key={drug.generic}>
                <div className="drug-card__number">{String(drug.number).padStart(3, "0")}</div>
                <div className="drug-card__body">
                  <span>{drug.className || "Medication profile"}</span>
                  <h2>{displayName(drug.generic)}</h2>
                  {drug.brand && <p>{drug.brand}</p>}
                  {drug.commonUses && <em>{drug.commonUses.slice(0, 2).join(" · ")}</em>}
                </div>
                {drug.brand ? (
                  <Link href={`/learn/pharmacy/drugs/${drug.slug}`}>Study profile <span aria-hidden="true">↗</span></Link>
                ) : (
                  <a href={`https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(drug.generic)}`} target="_blank" rel="noreferrer">Official labels <span aria-hidden="true">↗</span></a>
                )}
              </article>
            ))}
          </div>
          {filtered.length === 0 && <div className="drug-library__empty"><strong>No medications match these filters.</strong><p>Try another ranked collection, class, system, letter, or search term.</p></div>}
          {limit < filtered.length && <button type="button" className="drug-library__more" onClick={() => setLimit((value) => value + 36)}>Load more medications</button>}
        </>
      ) : mode === "all" ? (
        <div className="drug-library__rxnorm" aria-live="polite">
          {query.trim().length < 2 && <div className="drug-library__prompt"><strong>Search beyond the core set.</strong><p>Enter a generic name, brand name, strength, or dosage form.</p></div>}
          {searching && <div className="drug-library__prompt"><strong>Searching RxNorm</strong><p>Checking the current national medication vocabulary.</p></div>}
          {!searching && serviceUnavailable && <div className="drug-library__prompt"><strong>Search is temporarily unavailable.</strong><p>The ranked Top 300 collection remains available above.</p></div>}
          {!searching && !serviceUnavailable && query.trim().length >= 2 && rxResults.map((drug) => (
            <a className="drug-library__rxnorm-result" href={`https://mor.nlm.nih.gov/RxNav/search?searchBy=RXCUI&searchTerm=${drug.rxcui}`} target="_blank" rel="noreferrer" key={drug.rxcui}>
              <span>RxCUI {drug.rxcui}</span><strong>{drug.name}</strong><i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      ) : (
        <DrugQuestionBank />
      )}

      <p className="drug-library__source">Ranked collections use the <a href="https://clincalc.com/DrugStats/Top300Drugs.aspx" target="_blank" rel="noreferrer">ClinCalc Top 300 Drugs of 2024</a>, DrugStats Database version 2026.08, based on the Medical Expenditure Panel Survey. Live search uses publicly available data from the <a href="https://www.nlm.nih.gov/research/umls/rxnorm/index.html" target="_blank" rel="noreferrer">U.S. National Library of Medicine RxNorm</a>. Neither source endorses or recommends this product. Medication appearance and labeling vary by manufacturer and product.</p>
    </section>
  );
}
