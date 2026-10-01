import styles from "./UrticariaVisual.module.css";

// Original decision diagrams. Numeric values refer to the reviewed US labels.
const diagrams = {
  "recognize-wheals": { title: "Two clocks, two questions", kind: "compare", nodes: [
    ["One wheal", "Usually clears within 24 hours", "Does the same spot disappear without a lasting mark?"],
    ["The illness", "Beyond six weeks is chronic", "New short-lived wheals can continue for months."],
    ["Deeper swelling", "May last up to 72 hours", "Airway symptoms require immediate action, whatever the duration."],
  ] },
  "emergency-triage": { title: "Triage before itch treatment", kind: "priority", nodes: [
    ["Emergency", "Breathing, throat or circulation symptoms", "Suspect anaphylaxis: prompt epinephrine and emergency help. Do not wait for a tablet."],
    ["Emergency airway care", "Progressive tongue or throat swelling", "Protect the airway even without wheals or a known mechanism."],
    ["After danger is excluded", "Stable skin symptoms", "Classify the eruption and choose an appropriate treatment plan."],
  ] },
  "focused-workup": { title: "A focused investigation starts with a question", nodes: [
    ["History", "Timing, medicines and reproducible exposures", "Use photographs when the examination is normal."],
    ["Pattern", "Acute, chronic or inducible", "Basic chronic-disease tests differ from an acute self-limited episode."],
    ["Clue", "Persistent lesions or isolated swelling", "Target further investigation to the suspected alternative diagnosis."],
  ] },
  "h1-foundation": { title: "Check the dose that actually reaches the patient", nodes: [
    ["Select", "Plain second-generation H1 drug", "Match age, organ function and tolerability."],
    ["Deliver", "Correct product and administration", "Fexofenadine: water, not fruit juice; avoid simultaneous Al/Mg antacids."],
    ["Observe", "Symptoms and alertness", "Reliable use and safe daily functioning both matter."],
  ] },
  "levocetirizine-dose": { title: "Keep milligrams and milliliters separate", kind: "calculation", nodes: [
    ["Prescribed", "1.25 mg", "Example using the reviewed oral solution."],
    ["Concentration", "0.5 mg/mL", "Verify the actual dispensed bottle."],
    ["Volume", "1.25 ÷ 0.5 = 2.5 mL", "An oral syringe measures volume; renal eligibility still needs review."],
  ] },
  "supervised-updosing": { title: "A calculated ceiling is not a starting dose", kind: "priority", nodes: [
    ["Start", "Appropriate standard-dose treatment", "Confirm diagnosis, administration and adherence."],
    ["If uncontrolled", "Supervised off-label increase, up to fourfold", "Check the selected drug, clearance and tolerability."],
    ["If still uncontrolled", "Specialist reassessment and escalation", "Do not exceed the fourfold boundary or default to chronic steroids."],
  ] },
  "sedating-antihistamines": { title: "Bedtime does not erase the next day", kind: "compare", nodes: [
    ["Desired", "Less itch and better sleep", "Measure whether the underlying disease is controlled."],
    ["Undesired", "Sedation, confusion or impaired driving", "Review hydroxyzine's QT restrictions and cumulative sedatives."],
  ] },
  "omalizumab-csu": { title: "Identify the indication before choosing the dose", kind: "compare", nodes: [
    ["CSU label", "150 or 300 mg every four weeks", "Subcutaneous; independent of weight and IgE."],
    ["Guideline preference", "Start at 300 mg every four weeks", "An antihistamine add-on; higher exposure is off-label."],
    ["Administration", "Anaphylaxis precautions remain", "Clinic initiation; home use requires a clinician's risk assessment."],
  ] },
  "dupilumab-treatment": { title: "Separate initiation from maintenance", kind: "calculation", nodes: [
    ["Adult loading", "600 mg once", "Two 300 mg subcutaneous injections."],
    ["Adult maintenance", "300 mg every two weeks", "One 300 mg device per scheduled maintenance dose."],
    ["Before each injection", "Product, timing and safety", "Check the device instructions, storage and prescribed calendar."],
  ] },
  "remibrutinib-safety": { title: "Four checks before an oral targeted treatment", kind: "checks", nodes: [
    ["Liver", "Avoid Child-Pugh A, B or C", "Mild impairment is included."],
    ["Interactions", "CYP3A4 and P-glycoprotein", "Avoid strong/moderate CYP3A4 inhibitors and inducers; monitor sensitive P-gp substrates."],
    ["Bleeding", "Symptoms, antithrombotics and procedures", "Coordinate a three-to-seven-day hold before and after procedures."],
    ["Delivery", "25 mg twice daily, whole tablet", "Skip missed doses; avoid live vaccines."],
  ] },
  "adjunct-boundaries": { title: "An add-on needs a reason and an evidence check", kind: "compare", nodes: [
    ["H2 blocker", "Uncertain routine benefit", "The guideline cannot recommend for or against H1 plus H2 treatment."],
    ["Systemic steroid", "Selected short rescue only", "Chronic or depot treatment is not the maintenance strategy."],
    ["Ciclosporin", "Specialist off-label alternative", "Refractory disease, adverse effects and monitoring determine suitability."],
  ] },
  "individualize-care": { title: "CSU age eligibility differs by medicine", kind: "compare", nodes: [
    ["Dupilumab", "Age 2 and older", "Current US indication; age/weight dosing and full eligibility still apply."],
    ["Omalizumab", "Age 12 and older", "Do not import the younger food-allergy indication."],
    ["Remibrutinib", "Adults", "Pediatric safety and effectiveness are not established."],
  ] },
  "measure-and-review": { title: "Control is more than a single score", nodes: [
    ["Wheals and itch", "UAS7: 0 to 42", "Track seven consecutive days consistently."],
    ["Swelling and function", "Assess alongside UAS7", "Include angioedema, sleep, work and daily burden."],
    ["Treatment harm", "Check at every review", "Bleeding or severe sedation still matters when hives improve."],
  ] },
};

const pediatricBands = [
  { age: "2–5 years", note: "No loading dose", rows: [
    ["5 to <15 kg", "None", "200 mg every 4 weeks"],
    ["15 to <30 kg", "None", "300 mg every 4 weeks"],
  ] },
  { age: "6–17 years", note: "Loading dose changes with the weight band", rows: [
    ["15 to <30 kg", "600 mg", "300 mg every 4 weeks"],
    ["30 to <60 kg", "400 mg", "200 mg every 2 weeks"],
    ["60 kg or more", "600 mg", "300 mg every 2 weeks"],
  ] },
];

export const urticariaVisualTypes = [...Object.keys(diagrams), "dupilumab-pediatrics"].map(slug => `urticaria-${slug}`);

export default function UrticariaVisual({ type }) {
  const slug = type?.replace(/^urticaria-/, "");
  if (slug === "dupilumab-pediatrics") return (
    <figure className={styles.figure} aria-label="Pediatric dupilumab CSU dose selection">
      <figcaption><span>Age → weight → schedule</span><strong>Same weight. Different loading plan.</strong></figcaption>
      {pediatricBands.map(band => <section key={band.age} className={styles.band} aria-label={band.age}>
        <header><h4>{band.age}</h4><p>{band.note}</p></header>
        {band.rows.map(([weight, loading, maintenance]) => <dl key={weight} className={styles.doseRow}>
          <div><dt>Weight</dt><dd>{weight}</dd></div>
          <div><dt>Loading</dt><dd>{loading}</dd></div>
          <div><dt>Maintenance</dt><dd>{maintenance}</dd></div>
        </dl>)}
      </section>)}
      <p className={styles.note}>Subcutaneous CSU dosing from the April 2026 US label. Confirm the diagnosis and prescription. Unlisted age/weight combinations need specialist clarification.</p>
    </figure>
  );
  const diagram = diagrams[slug];
  if (!diagram) return null;
  return (
    <figure className={`${styles.figure} ${diagram.kind === "priority" ? styles.priority : ""}`} aria-label={diagram.title}>
      <figcaption><span>{diagram.kind === "calculation" ? "Dose reasoning" : "Clinical decision"}</span><strong>{diagram.title}</strong></figcaption>
      <div className={styles.nodes}>
        {diagram.nodes.map(([label, focus, detail], index) => <div className={styles.node} key={label}>
          <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
          <h4>{label}</h4><strong>{focus}</strong><p>{detail}</p>
        </div>)}
      </div>
      <p className={styles.note}>Apply the complete lesson and product-specific instructions.</p>
    </figure>
  );
}
