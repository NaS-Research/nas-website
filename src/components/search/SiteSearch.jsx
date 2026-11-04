"use client";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {MAX_QUERY_LENGTH, SEARCH_PROMPTS, PROMPT_INTERVAL_MS} from "@/lib/site-search/engine.mjs";
import "./site-search.css";

export default function SiteSearch({onClose, returnFocusRef}) {
  const dialog = useRef(null), input = useRef(null), requestId = useRef(0);
  const [query,setQuery] = useState(""), [focused,setFocused] = useState(false);
  const [prompt,setPrompt] = useState(0), [results,setResults] = useState([]);
  const [status,setStatus] = useState("idle"), [submitted,setSubmitted] = useState("");
  const [retry,setRetry] = useState(0);
  useEffect(() => {
    const node=dialog.current, previousOverflow=document.body.style.overflow;
    node.showModal(); document.body.style.overflow="hidden"; node.focus();
    return () => {node.close(); document.body.style.overflow=previousOverflow; returnFocusRef.current?.focus({preventScroll:true});};
  }, [returnFocusRef]);
  useEffect(() => {
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    const schedule=() => {
      clearInterval(timer);
      if (!media.matches && !document.hidden && !focused && !query) {
        timer=setInterval(() => setPrompt(value => (value+1)%SEARCH_PROMPTS.length),PROMPT_INTERVAL_MS);
      }
    };
    schedule(); media.addEventListener("change",schedule); document.addEventListener("visibilitychange",schedule);
    return () => {clearInterval(timer);media.removeEventListener("change",schedule);document.removeEventListener("visibilitychange",schedule);};
  },[query,focused]);
  useEffect(() => {
    const id=++requestId.current, controller=new AbortController(), text=query.trim();
    setResults([]); setSubmitted("");
    if (!text) {setStatus("idle");return () => controller.abort();}
    setStatus("loading");
    const timer=setTimeout(async () => {
      try {
        const response=await fetch("/api/search?q="+encodeURIComponent(text),{signal:controller.signal});
        if (!response.ok) throw new Error("Search unavailable");
        const data=await response.json();
        if (id!==requestId.current) return;
        setResults(data.results);setSubmitted(text);setStatus("ready");
      } catch(error) {
        if (error.name!=="AbortError" && id===requestId.current) {setStatus("error");setSubmitted(text);}
      }
    },180);
    return () => {clearTimeout(timer);controller.abort();};
  },[query,retry]);
  function close() {onClose();}
  return <dialog ref={dialog} id="nas-site-search" className="nas-search" tabIndex={-1} aria-label="Search NaS" onCancel={event=>{event.preventDefault();close();}} onKeyDown={event=>{if(event.target===dialog.current&&event.key.length===1&&!event.metaKey&&!event.ctrlKey&&!event.altKey){event.preventDefault();input.current?.focus();setQuery(event.key);}}}>
    <div className="nas-search__top">
      <Link href="/" className="nas-search__brand" onClick={close}>NaS</Link>
      <button type="button" className="nas-search__close" aria-label="Close search" onClick={close}><span aria-hidden="true">×</span></button>
    </div>
    <div className="nas-search__body">
      <form role="search" aria-label="Search public NaS pages" className="nas-search__form" onSubmit={event=>{event.preventDefault();setRetry(value=>value+1);}}>
        <label className="nas-search__field">
          <span className="nas-search__sr">Search NaS</span>
          {!query && <span key={prompt} className="nas-search__prompt" aria-hidden="true">{SEARCH_PROMPTS[prompt]}</span>}
          <input ref={input} type="search" value={query} maxLength={MAX_QUERY_LENGTH} autoComplete="off" enterKeyHint="search"
            onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} onChange={event=>setQuery(event.target.value)}
            aria-controls="nas-search-results" />
        </label>
        <button className="nas-search__submit" type="submit" aria-label="Search" disabled={!query.trim()}><span aria-hidden="true">↑</span></button>
      </form>
      <p className="nas-search__sr" role="status" aria-live="polite">{status==="ready" ? (results.length ? "Search results updated." : "No matching pages found.") : status==="loading" ? "Searching." : ""}</p>
      {status==="idle" && <div className="nas-search__discover"><p>Where would you like to begin?</p><div>{[
        ["Research","/research"],["Products","/products"],["Learning Library","/learn/library"],["Human Atlas","/learn/pharmacy/atlas"],
      ].map(([title,href])=><Link href={href} key={href} onClick={close}>{title}<span aria-hidden="true">↗</span></Link>)}</div></div>}
      {query.trim() && <section className="nas-search__matches" aria-label="Search results">
        <p className="nas-search__eyebrow">Your search</p><h1>{submitted || query.trim()}</h1>
        <div id="nas-search-results" aria-busy={status==="loading"}>
          {status==="loading" && <p className="nas-search__message">Searching NaS…</p>}
          {status==="error" && <div className="nas-search__message" role="alert"><p>Search is temporarily unavailable.</p><button type="button" onClick={()=>setRetry(value=>value+1)}>Try again</button></div>}
          {status==="ready" && !results.length && <p className="nas-search__message">No matching pages yet. Try a topic, product, or article title.</p>}
          {status==="ready" && results.length>0 && <><p className="nas-search__eyebrow">From NaS</p><ul>{results.map(result=><li key={result.href}><Link href={result.href} onClick={close} className="nas-search__result">
            <span className="nas-search__category">{result.category}</span><h2>{result.title}</h2><p>{result.description}</p><span className="nas-search__arrow" aria-hidden="true">↗</span>
          </Link></li>)}</ul></>}
        </div>
      </section>}
    </div>
  </dialog>;
}
