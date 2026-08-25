"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { coreDrugs } from "@/data/drugLibrary";
import DrugQuestionBank from "@/components/learn/DrugQuestionBank";

const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const studyCategories = ["All categories", "Cardiovascular", "Endocrine", "Neurology and psychiatry", "Respiratory", "Gastrointestinal"];

function displayName(name) {
  return name.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function DrugLibrary() {
  const [mode, setMode] = useState("core");
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("All");
  const [category, setCategory] = useState("All categories");
  const [limit, setLimit] = useState(36);
  const [rxResults, setRxResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [serviceUnavailable, setServiceUnavailable] = useState(false);

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();
    return coreDrugs.filter((drug) => {
      const matchesLetter = letter === "All" || drug.generic.startsWith(letter.toLowerCase());
      const matchesQuery = !normalized || `${drug.generic} ${drug.brand || ""} ${drug.className || ""}`.toLowerCase().includes(normalized);
      const matchesCategory = category === "All categories" || drug.system === category;
      return matchesLetter && matchesQuery && matchesCategory;
    });
  }, [category, letter, query]);

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
    setCategory("All categories");
    setLimit(36);
  }

  return (
    <section className="drug-library" aria-labelledby="drug-library-title">
      <header className="drug-library__hero">
        <div>
          <p className="nas-section-label">Medication library</p>
          <h1 id="drug-library-title">Know the drug. See the product. Connect the science.</h1>
        </div>
        <p>Study the core 200, then search the current RxNorm vocabulary for medications beyond the card set.</p>
      </header>

      <div className="drug-library__tabs" role="tablist" aria-label="Drug collections">
        <button type="button" role="tab" aria-selected={mode === "core"} className={mode === "core" ? "is-active" : ""} onClick={() => changeMode("core")}>
          Core 200 <span>200</span>
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
          <div className="drug-library__categories" aria-label="Filter by therapeutic category">
            {studyCategories.map((item) => <button type="button" className={category === item ? "is-active" : ""} onClick={() => { setCategory(item); setLetter("All"); setLimit(36); }} key={item}>{item}</button>)}
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
          {limit < filtered.length && <button type="button" className="drug-library__more" onClick={() => setLimit((value) => value + 36)}>Load more medications</button>}
        </>
      ) : mode === "all" ? (
        <div className="drug-library__rxnorm" aria-live="polite">
          {query.trim().length < 2 && <div className="drug-library__prompt"><strong>Search beyond the core set.</strong><p>Enter a generic name, brand name, strength, or dosage form.</p></div>}
          {searching && <div className="drug-library__prompt"><strong>Searching RxNorm</strong><p>Checking the current national medication vocabulary.</p></div>}
          {!searching && serviceUnavailable && <div className="drug-library__prompt"><strong>Search is temporarily unavailable.</strong><p>The Core 200 remains available above.</p></div>}
          {!searching && !serviceUnavailable && query.trim().length >= 2 && rxResults.map((drug) => (
            <a className="drug-library__rxnorm-result" href={`https://mor.nlm.nih.gov/RxNav/search?searchBy=RXCUI&searchTerm=${drug.rxcui}`} target="_blank" rel="noreferrer" key={drug.rxcui}>
              <span>RxCUI {drug.rxcui}</span><strong>{drug.name}</strong><i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      ) : (
        <DrugQuestionBank />
      )}

      <p className="drug-library__source">This product uses publicly available data from the U.S. National Library of Medicine. NLM does not endorse or recommend this product. Medication appearance and labeling vary by manufacturer and product.</p>
    </section>
  );
}
