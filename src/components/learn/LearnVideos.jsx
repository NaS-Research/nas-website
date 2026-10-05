import Link from "next/link";
import { learningVideos } from "@/data/learningVideos";
import LearningVideoCard from "./LearningVideoCard";
import styles from "./LearningVideos.module.css";

export default function LearnVideos() {
  return (
    <section className={`nas-shell ${styles.feature}`} aria-labelledby="learn-videos-title">
      <header className={styles.heading}>
        <div><p className="nas-section-label">Watch</p><h2 id="learn-videos-title">A new way to see it.</h2><p>Short films that bring scientific ideas into focus.</p></div>
        <Link className={styles.collectionLink} href="/learn/watch">Explore all videos <span aria-hidden="true">↗</span></Link>
      </header>
      <div className={styles.grid}>{learningVideos.slice(0, 3).map((video) => <LearningVideoCard key={video.id} video={video} />)}</div>
    </section>
  );
}
