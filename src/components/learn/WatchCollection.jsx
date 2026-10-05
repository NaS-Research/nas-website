"use client";

import { useState } from "react";
import { learningVideos } from "@/data/learningVideos";
import LearningVideoCard from "./LearningVideoCard";
import styles from "./LearningVideos.module.css";

const subjects = [...new Set(learningVideos.map((video) => video.subject))];

export default function WatchCollection() {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("All subjects");
  const [visible, setVisible] = useState(9);
  const filtered = learningVideos.filter((video) =>
    (subject === "All subjects" || video.subject === subject) &&
    `${video.title} ${video.description} ${video.subject}`.toLowerCase().includes(query.trim().toLowerCase())
  );
  function reset() { setQuery(""); setSubject("All subjects"); setVisible(9); }
  return (
    <section className={`nas-shell ${styles.collection}`} aria-label="Video collection">
      <div className={styles.filters}>
        <label className={styles.search}><span aria-hidden="true">⌕</span><span className={styles.srOnly}>Search videos</span><input type="search" placeholder="Search videos, ideas, and topics" value={query} onChange={(event) => { setQuery(event.target.value); setVisible(9); }} /></label>
        <label className={styles.select}><span className={styles.srOnly}>Filter videos by subject</span><select value={subject} onChange={(event) => { setSubject(event.target.value); setVisible(9); }}><option>All subjects</option>{subjects.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      {(query || subject !== "All subjects") && <button className={styles.clear} onClick={reset}>Clear filters</button>}
      <div className={styles.grid}>{filtered.slice(0, visible).map((video) => <LearningVideoCard key={video.id} video={video} />)}</div>
      {!filtered.length && <div className={styles.empty} role="status"><h2>No videos found.</h2><p>Try another topic or clear your filters.</p></div>}
      {filtered.length > visible && <button className={styles.more} onClick={() => setVisible((count) => count + 9)}>More videos</button>}
    </section>
  );
}
