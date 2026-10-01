import Link from "next/link";
import styles from "./LearnDrugLibrary.module.css";

const profile = "/learn/pharmacy/drugs/acetaminophen";

export default function LearnDrugLibrary() {
  return (
    <section className={styles.section} id="drug-library" aria-labelledby="drug-library-title">
      <div className={`nas-shell ${styles.layout}`}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Drug library</p>
          <h2 id="drug-library-title">A closer look<br />at medicines.</h2>
          <p className={styles.description}>From the active ingredient to the product label. Find a medication and explore the information behind it.</p>
          <form action="/learn/pharmacy/drugs" method="get" className={styles.search} role="search" aria-label="Find a medication">
            <label htmlFor="learn-drug-search" className="sr-only">Generic name, brand name, or therapeutic class</label>
            <input id="learn-drug-search" type="search" name="q" placeholder="Search a medication" maxLength={160} required />
            <button type="submit" aria-label="Search the drug library">↗</button>
          </form>
          <Link href="/learn/pharmacy/drugs" className={styles.browse}>Browse the drug library <span aria-hidden="true">↗</span></Link>
        </div>

        <article className={styles.profile} aria-labelledby="featured-drug-title">
          <div className={styles.profileTop}><span>Inside a drug profile</span><span aria-hidden="true">NaS</span></div>
          <div className={styles.profileIdentity}>
            <h3 id="featured-drug-title">Acetaminophen</h3>
            <p>Paracetamol · APAP</p>
            <span className={styles.className}>Nonopioid analgesic · Antipyretic</span>
          </div>
          <nav className={styles.sections} aria-label="Explore the acetaminophen profile">
            <Link href={`${profile}#indications`}><span>Indications</span><span aria-hidden="true">↗</span></Link>
            <Link href={`${profile}#dosage`}><span>Dosage and administration</span><span aria-hidden="true">↗</span></Link>
            <Link href={`${profile}#safety`}><span>Warnings and precautions</span><span aria-hidden="true">↗</span></Link>
          </nav>
          <div className={styles.profileBottom}>
            <p>Product-specific guidance.<br />Sources alongside the details.</p>
            <Link href={profile}>Explore the profile <span aria-hidden="true">↗</span></Link>
          </div>
        </article>
      </div>
    </section>
  );
}
