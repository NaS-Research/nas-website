import Link from "next/link";
import { InteractiveModel } from "@/components/research/anatomy-release-preview/ArticleInteractiveModel";
import { PUBLIC_STUDIO_ORGANS } from "@/lib/anatomy-studio/public-registry.mjs";
import styles from "./LearnAnatomyStudio.module.css";

const kidneyModel = PUBLIC_STUDIO_ORGANS.find(model => model.id === "kidneys");

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
          <InteractiveModel asset={kidneyModel} />
          <figcaption>Kidneys</figcaption>
        </figure>
      </div>
    </section>
  );
}
