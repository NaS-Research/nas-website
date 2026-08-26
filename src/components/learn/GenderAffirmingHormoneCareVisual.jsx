export const genderAffirmingHormoneCareVisualTypes = [
  "gender-care-goals",
  "gender-baseline",
  "gender-estradiol",
  "gender-androgen-reduction",
  "gender-feminizing",
  "gender-testosterone",
  "gender-masculinizing",
  "gender-reproductive",
  "gender-long-term",
  "gender-continuity",
];

const diagrams = {
  "gender-care-goals": ["Goal architecture", "The person defines the outcome and the care system protects informed choice", ["Name", "Desired changes", "Identify what matters now and what remains optional"], ["Bound", "Limits and irreversibility", "Separate likely, variable, coupled, and lasting effects"], ["Design", "Pace and route", "Match formulation and tempo to goals and access"], ["Revisit", "Evolving priorities", "Update the plan as experience, health, and identity change"]],
  "gender-baseline": ["Baseline system", "Every assessment item should change a treatment or safety decision", ["Inventory", "Health and medicines", "Find modifiable risks without pathologizing identity"], ["Preserve", "Fertility options", "Discuss gametes and reproductive goals before exposure"], ["Protect", "Pregnancy and STI risk", "Use anatomy and sexual practices rather than assumptions"], ["Link", "Tests to regimen", "Order CBC, potassium, kidney, hormone, or metabolic tests with purpose"]],
  "gender-estradiol": ["Estradiol pathway", "Molecule, route, clock, and clinical response form one exposure model", ["Choose", "17 beta estradiol", "Avoid ethinyl estradiol and obsolete high-risk substitution"], ["Route", "Oral, transdermal, injectable", "Compare first pass, stability, peaks, technique, and access"], ["Reduce", "Thrombotic risk", "Prefer transdermal delivery when age or VTE history raises concern"], ["Interpret", "Timed concentrations", "Read estradiol and testosterone beside dose timing and goals"]],
  "gender-androgen-reduction": ["Suppression map", "Adjuncts act at different points and cannot be interchanged", ["Block", "Spironolactone", "Join androgen goals to kidney, potassium, and pressure safety"], ["Suppress", "GnRH pathway", "Reduce gonadal production with calendar and bone awareness"], ["Convert", "5-alpha reductase", "Target dihydrotestosterone without broad suppression"], ["Justify", "Any adjunct", "Require a defined benefit, evidence boundary, and stop rule"]],
  "gender-feminizing": ["Feminizing follow-up", "Different tissues respond on different clocks", ["Observe", "Desired and unwanted change", "Track breast, body, skin, hair, sexual, and mood outcomes"], ["Measure", "Estradiol and testosterone", "Time values to route and administration"], ["Triage", "Vascular symptoms", "Separate acute emergency assessment from routine monitoring"], ["Audit", "Exposure system", "Verify product, technique, access, assay, and goal before escalation"]],
  "gender-testosterone": ["Testosterone system", "Product-specific pharmacokinetics drive technique and monitoring", ["Verify", "Product and concentration", "Prevent cross-product dose and route errors"], ["Teach", "Injection or skin delivery", "Protect sterile use, sharps, drying, covering, and transfer"], ["Time", "Peak, midpoint, trough", "Label the laboratory result with the dosing clock"], ["Protect", "CBC and blood pressure", "Address erythrocytosis, hypoxia, pressure, and product risk"]],
  "gender-masculinizing": ["Masculinizing follow-up", "Outcome assessment needs a differential diagnosis", ["Track", "Tissue timelines", "Separate reversible and lasting voice, hair, skin, and body effects"], ["Investigate", "Bleeding", "Consider exposure, pregnancy, infection, and structural causes"], ["Care", "Genital tissue", "Address dryness, pain, urinary symptoms, and pelvic function"], ["Audit", "Response and safety", "Verify technique, timing, CBC, pressure, sleep, and goals"]],
  "gender-reproductive": ["Reproductive continuity", "Hormone care and reproductive care remain connected", ["Preserve", "Gametes before treatment", "Protect future options without assuming a parenting goal"], ["Prevent", "Unwanted pregnancy", "Hormones and amenorrhea do not replace contraception"], ["Support", "Pregnancy and menstrual goals", "Stop testosterone in pregnancy and treat bleeding directly"], ["Restore", "Fertility when desired", "Use specialist care because recovery is variable"]],
  "gender-long-term": ["Long-term prevention", "Identity does not replace anatomy, exposure, symptoms, or conventional risk", ["Map", "Organs present", "Record tissues, surgery, hormone exposure, and preferred language"], ["Screen", "Cancer and symptoms", "Apply current tissue-specific guidance"], ["Sustain", "Bone health", "Prevent prolonged hypogonadism and assess fracture risk"], ["Prevent", "Cardiovascular disease", "Treat standard risks plus route, pressure, and hematocrit effects"]],
  "gender-continuity": ["Continuity architecture", "Every transition needs an exact regimen and a named owner", ["Reconcile", "Product and last dose", "Preserve concentration, route, interval, and monitoring"], ["Coordinate", "Surgery and acute illness", "Balance interruption harm with procedure-specific risk"], ["Reduce harm", "Self-sourced exposure", "Replace punishment with safer products, testing, and trust"], ["Handoff", "Supply and follow-up", "Document next dose, warnings, tests, and responsibility"]],
};

export default function GenderAffirmingHormoneCareVisual({ type }) {
  const item = diagrams[type];
  if (!item) return null;
  const [eyebrow, title, ...nodes] = item;
  return (
    <figure className="chol-visual gender-care-visual" aria-label={title}>
      <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
      <div className="chol-visual__grid">
        {nodes.map(([verb, focus, detail], index) => (
          <div key={focus}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{verb}</strong>
            <em>{focus}</em>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
