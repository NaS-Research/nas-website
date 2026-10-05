import Image from "next/image";
import { videoWatchUrl } from "@/data/learningVideos";
import styles from "./LearningVideos.module.css";

export default function LearningVideoCard({ video }) {
  return (
    <article className={styles.card}>
      <a className={styles.videoLink} href={videoWatchUrl(video.id)} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${video.title} on YouTube (opens in a new tab)`}>
        <div className={styles.thumbnail}>
          <Image src={`https://i.ytimg.com/vi/${video.id}/hq720.jpg`} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" />
          <span className={styles.play} aria-hidden="true">▶</span>
          <span className={styles.duration}><span className={styles.srOnly}>Duration: </span>{video.duration}</span>
        </div>
        <p className={styles.subject}>{video.subject}</p>
        <h3>{video.title}</h3>
        <p className={styles.description}>{video.description}</p>
        <span className={styles.watchLink}>Watch on YouTube <span aria-hidden="true">↗</span></span>
      </a>
    </article>
  );
}
