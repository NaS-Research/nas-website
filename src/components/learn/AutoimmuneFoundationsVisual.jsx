import styles from "./AutoimmuneFoundationsVisual.module.css";

const maps = {
  "autoimmune-clinical-pattern": ["Ask three different questions", ["Diagnosis", "What explains the clinical pattern?"], ["Activity", "What is happening now?"], ["Safety", "What risks accompany this treatment?"]],
  "autoimmune-inflammation-markers": ["Inflammation does not name the disease", ["ESR", "Red-cell sedimentation"], ["CRP", "Inflammatory protein"], ["Interpretation", "History, examination and test context"]],
  "autoimmune-autoantibodies": ["An antibody result needs context", ["ANA", "Nuclear targets; positivity is not a lupus diagnosis"], ["RF", "IgG target; negativity does not exclude RA"], ["Clinical decision", "Use findings together, not an isolated result"]],
  "autoimmune-infection-screening": ["From a test to a prevention plan", ["Before", "Identify drug, exposures and infection history"], ["Assess", "Interpret the relevant screening results"], ["Act", "Coordinate prevention, treatment or monitoring"]],
  "autoimmune-vaccination": ["Separate safety from immune response", ["Vaccine", "Live or non-live?"], ["Treatment", "Which agents, doses and duration?"], ["Timing", "Use vaccine-specific and therapy-specific guidance"]],
  "autoimmune-follow-up": ["Follow benefit and harm separately", ["Response", "Symptoms, function and disease-specific findings"], ["Safety", "Regimen-specific checks and new symptoms"], ["Reassess", "Disease, toxicity and infection remain distinct possibilities"]],
};

export default function AutoimmuneFoundationsVisual({ type }) {
  const map = maps[type];
  if (!map) return null;
  const [title, ...items] = map;
  return <figure className="chol-visual" aria-label={title}>
    <figcaption><span>Clinical reasoning</span><strong>{title}</strong></figcaption>
    <div className={`chol-visual__grid ${styles.grid}`}>{items.map(([heading, detail], index) => <div key={heading}><span>{String(index + 1).padStart(2, "0")}</span><strong>{heading}</strong><p>{detail}</p></div>)}</div>
  </figure>;
}
