import Link from "next/link";
import ArtworkFilm from "@/components/research/ArtworkFilm";
import { aiHospitalBillingEssay as essay } from "@/data/aiHospitalBillingEssay";
import { publicationArtwork } from "@/data/publicationArtwork";
import styles from "./HomeBillingFeature.module.css";

export default function HomeBillingFeature() {
  const artwork = publicationArtwork[essay.slug];
  return <section className={styles.feature} aria-labelledby="home-billing-title">
    <div className={`nas-shell ${styles.inner}`}>
      <div className={styles.copy}>
        <p className={styles.kicker}>Latest perspective · NaS Research</p>
        <h2 id="home-billing-title">{essay.title}</h2>
        <p className={styles.summary}>{essay.abstract}</p>
        <p className={styles.meta}>{essay.type} <span aria-hidden="true">·</span> {essay.readTime}</p>
        <Link className={styles.link} href={`/research/${essay.slug}`}>Read the essay <span aria-hidden="true">↗</span></Link>
      </div>
      <div className={styles.artwork}>
        <ArtworkFilm src={artwork.previewFilm} poster={artwork.heroSrc} alt={artwork.alt} showControl />
      </div>
    </div>
  </section>;
}
