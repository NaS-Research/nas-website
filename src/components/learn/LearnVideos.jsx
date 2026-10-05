import Link from "next/link";
import { getLatestLearningVideos } from "@/lib/learningVideoFeed";
import LearningVideoSlider from "./LearningVideoSlider";
import styles from "./LearningVideos.module.css";

export default async function LearnVideos() {
  const videos = (await getLatestLearningVideos()).slice(0, 9);
  return (
    <section className={`nas-shell ${styles.feature}`} aria-labelledby="learn-videos-title">
      <header className={styles.heading}>
        <div><p className="nas-section-label">Watch</p><h2 id="learn-videos-title">A new way to see it.</h2><p>The latest films from NaS Research.</p></div>
        <Link className={styles.collectionLink} href="/learn/watch">Explore all videos <span aria-hidden="true">↗</span></Link>
      </header>
      <LearningVideoSlider videos={videos} />
    </section>
  );
}
