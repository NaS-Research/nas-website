import Link from "next/link";
import HomeComputingFilm from "./HomeComputingFilm";
import styles from "./HomeComputingFeature.module.css";

export default function HomeComputingFeature() {
  return <section id="next-section" className={styles.feature} aria-labelledby="home-computing-title" data-home-computing-feature>
    <HomeComputingFilm />
    <div className={styles.copy}>
      <h2 id="home-computing-title">Building the next stage of NaS computing</h2>
      <p>The infrastructure behind what comes next.</p>
      <Link className={styles.link} href="/research/building-the-next-stage-of-nas-computing">Read the story <span aria-hidden="true">↗</span></Link>
    </div>
  </section>;
}
