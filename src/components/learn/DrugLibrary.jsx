"use client";

import Link from "next/link";
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
  const classMenuRef = useRef(null);
  const [mode, setMode] = useState("core");
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("All");
  const [therapeuticClass, setTherapeuticClass] = useState("All classes");
  const [limit, setLimit] = useState(36);
  const [rxResults, setRxResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [serviceUnavailable, setServiceUnavailable] = useState(false);

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
    setTherapeuticClass("All classes");
    setLimit(36);
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

      <div className="drug-library__tabs" role="tablist" aria-label="Drug collections">
        <button type="button" role="tab" aria-selected={mode === "core"} className={mode === "core" ? "is-active" : ""} onClick={() => changeMode("core")}>
          Drug library
        </button>
        <button type="button" role="tab" aria-selected={mode === "all"} className={mode === "all" ? "is-active" : ""} onClick={() => changeMode("all")}>
          Medication search <span>RxNorm</span>
        </button>
        <button type="button" role="tab" aria-selected={mode === "questions"} className={mode === "questions" ? "is-active" : ""} onClick={() => changeMode("questions")}>
          Questions <span>{drugQuestions.length}</span>
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
          <details className="drug-library__class-menu" ref={classMenuRef}>
            <summary>
              <span>Therapeutic class</span>
              <strong>
                {therapeuticClass !== "All classes" && <i style={{ "--drug-class-color": getTherapeuticClassColor(therapeuticClass) }} aria-hidden="true" />}
                {therapeuticClass}
              </strong>
              <b aria-hidden="true">⌄</b>
            </summary>
            <div className="drug-library__class-options" aria-label="Filter medications by therapeutic class">
              {studyClasses.map((item) => (
                <button
                  type="button"
                  className={therapeuticClass === item ? "is-active" : ""}
                  style={item === "All classes" ? undefined : { "--drug-class-color": getTherapeuticClassColor(item) }}
                  onClick={() => {
                    setTherapeuticClass(item);
                    setLetter("All");
                    setLimit(36);
                    classMenuRef.current?.removeAttribute("open");
                  }}
                  key={item}
                >
                  {item !== "All classes" && <i aria-hidden="true" />}
                  <span>{item}</span>
                  {therapeuticClass === item && <b aria-hidden="true">✓</b>}
                </button>
              ))}
            </div>
          </details>
          <div className="drug-library__letters" aria-label="Filter by first letter">
            {letters.map((item) => <button type="button" className={letter === item ? "is-active" : ""} onClick={() => { setLetter(item); setLimit(36); }} key={item}>{item}</button>)}
          </div>
          <div className="drug-library__grid">
            {filtered.slice(0, limit).map((drug) => (
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
          {limit < filtered.length && <button type="button" className="drug-library__more" onClick={() => setLimit((value) => value + 36)}>Load more medications</button>}
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

      <p className="drug-library__source">The initial catalog was seeded from the <a href="https://clincalc.com/DrugStats/Top300Drugs.aspx" target="_blank" rel="noreferrer">ClinCalc DrugStats Database</a> and is expanded as additional medication profiles are reviewed. Therapeutic filters follow the NaS pharmacy study-card taxonomy. Live search uses RxNorm. These sources do not endorse or recommend this product. Medication appearance and labeling vary by manufacturer and product.</p>
    </section>
  );
}
