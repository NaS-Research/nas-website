import styles from "./LearnInteractiveLibrary.module.css";

export default function LearnInteractiveLibrary() {
  return (
    <section className={styles.section} id="interactive-library" aria-labelledby="interactive-library-title">
      <div className={`nas-shell ${styles.layout}`}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Interactive library</p>
          <h2 id="interactive-library-title">Learn by<br />doing.</h2>
        </div>
        <div className={styles.intro}>
          <p className={styles.description}>Explore biological systems, test mechanisms, and build understanding.</p>
          <p className={styles.detail}>A space for interactive models, simulations, and guided learning. Follow a signal. Change a condition. Connect the mechanism to the response.</p>
        </div>
        <ul className={styles.subjects} aria-label="Interactive learning subjects">
          <li><span className={styles.field}>The electrical system</span><span className={styles.subject}>Heart conduction</span></li>
          <li><span className={styles.field}>Across the membrane</span><span className={styles.subject}>Membrane potential</span></li>
          <li><span className={styles.field}>From signal to response</span><span className={styles.subject}>Receptor signaling</span></li>
        </ul>
      </div>
    </section>
  );
}
