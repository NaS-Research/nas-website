import Image from "next/image";
import Link from "next/link";
import styles from "./LearnAnatomyStudio.module.css";

export default function LearnAnatomyStudio() {
  return (
    <section className={styles.section} id="anatomy-studio" aria-labelledby="learn-anatomy-title">
      <div className={`nas-shell learning-discipline ${styles.layout}`}>
        <div className="learning-discipline__body">
          <p className="nas-section-label">Anatomy Studio</p>
          <h2 id="learn-anatomy-title">See anatomy in three dimensions.</h2>
          <p>Rotate models of organs and cells, and select landmarks to learn about the structures you see.</p>
          <Link href="/learn/anatomy" className="learning-primary-link">Open Anatomy Studio <span aria-hidden="true">↗</span></Link>
        </div>
        <figure className={styles.model}>
          <Image src="/anatomy-release-preview/model-stills/internal-heart-cutaway-native-1920-9cdb0f92662fc5dd.webp" alt="Three-dimensional heart cutaway showing the inner chambers" width={1920} height={1080} sizes="(max-width: 800px) 92vw, 53vw" />
          <figcaption>Heart cutaway</figcaption>
        </figure>
      </div>
    </section>
  );
}
