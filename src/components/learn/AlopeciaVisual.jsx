export const alopeciaVisualTypes = [
  "hair-cycle", "phenotype-differential", "androgenetic-alopecia", "topical-minoxidil",
  "systemic-pattern-therapy", "effluvium-medication", "alopecia-areata", "scarring-traction-infection",
  "monitoring-support",
];

const diagrams = {
  "hair-cycle": ["Follicle timing", "Follow a follicle through growth, regression, rest, release, and renewed growth", ["Anagen", "Active growth", "Long duration defines scalp length"], ["Catagen", "Regression", "Matrix activity contracts"], ["Telogen", "Rest", "The club hair remains retained"], ["Exogen", "Release", "Shedding can lag a trigger by months"]],
  "phenotype-differential": ["Diagnostic map", "Classify pattern, tempo, inflammation, follicular openings, breakage, and body distribution", ["Patterned", "Gradual miniaturization", "Central, crown, or frontal geometry"], ["Diffuse", "Global shedding", "Trigger history is central"], ["Patchy", "Immune or infectious", "Examine hairs, skin, and nails"], ["Scarring", "Follicular openings disappear", "Early treatment protects remaining follicles"]],
  "androgenetic-alopecia": ["Androgen biology", "Connect local DHT signaling to genetically susceptible follicle miniaturization", ["Convert", "Testosterone to DHT", "Five alpha reductase supplies the signal"], ["Bind", "Androgen receptor", "Susceptibility differs by follicle"], ["Shorten", "Anagen contracts", "Terminal hairs become finer"], ["Persist", "Chronic progression", "Maintenance preserves response"]],
  "topical-minoxidil": ["Follicle stimulation", "Translate topical delivery, sulfation, potassium-channel signaling, and sustained use into counseling", ["Deliver", "Dry scalp application", "Product-specific dose and schedule"], ["Activate", "Minoxidil sulfate", "Follicular sulfotransferase matters"], ["Signal", "Potassium-channel opening", "Growth-phase support follows"], ["Maintain", "Continue treatment", "Stopping removes the benefit"]],
  "systemic-pattern-therapy": ["Systemic selection", "Match mechanism, reproductive risk, monitoring, and off-label status to the patient", ["Finasteride", "Type 2 enzyme inhibition", "Lowers scalp and serum DHT"], ["Antiandrogen", "Spironolactone", "Selected patients need potassium review"], ["Oral minoxidil", "Off-label vasodilator", "Pressure, pulse, edema, and hair growth matter"], ["Procedure", "Transplant or device", "Evidence and candidacy differ"]],
  "effluvium-medication": ["Shedding timeline", "Connect trigger timing to the hair-cycle compartment and expected recovery", ["Telogen", "Delayed diffuse shedding", "Often begins months after a stressor"], ["Anagen", "Rapid matrix injury", "Chemotherapy is a classic cause"], ["Drug", "Exposure chronology", "Do not stop essential therapy blindly"], ["Recover", "Remove or resolve trigger", "Regrowth still takes time"]],
  "alopecia-areata": ["Immune privilege", "Follow autoimmune follicle attack from focal patches to severe disease and targeted therapy", ["Recognize", "Smooth patches and exclamation hairs", "Nails and other body hair add evidence"], ["Local", "Corticosteroid strategy", "Extent and age guide delivery"], ["Systemic", "JAK pathway inhibition", "Severe disease has approved options"], ["Protect", "Screen and monitor risk", "Immune modulation requires a safety system"]],
  "scarring-traction-infection": ["Protect follicles", "Separate reversible shaft stress from inflammatory destruction and follicular infection", ["Traction", "Repeated tension", "Early change can prevent permanence"], ["CCCA or FFA", "Inflammatory scarring", "Symptoms can precede visible loss"], ["Tinea", "Hair and follicle infection", "Systemic antifungal exposure is required"], ["Urgency", "Pain, pustules, loss of ostia", "Biopsy or culture may define treatment"]],
  "monitoring-support": ["Longitudinal care", "Measure biology, treatment exposure, safety, function, and patient goals over realistic timelines", ["Baseline", "Standardized image and history", "Anchor future comparisons"], ["Monitor", "Density, shedding, symptoms", "Use the same site and lighting"], ["Safety", "Product-specific surveillance", "Reproductive and systemic risk vary"], ["Support", "Camouflage and psychosocial care", "Appearance-related burden is clinical"]],
};

export default function AlopeciaVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;
  return <figure className="chol-visual alopecia-visual" aria-label={title}>
    <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
    <div className="chol-visual__grid">{nodes.map(([verb, focus, detail], index) => <div key={focus}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{verb}</strong><em>{focus}</em><p>{detail}</p>
    </div>)}</div>
  </figure>;
}
