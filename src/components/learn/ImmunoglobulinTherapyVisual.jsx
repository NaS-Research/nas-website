export const immunoglobulinTherapyVisualTypes = [
  "ig-foundations",
  "ig-roles",
  "ig-ivig",
  "ig-scig",
  "ig-selection",
  "ig-reactions",
  "ig-toxicity",
  "ig-monitoring",
  "ig-populations",
  "ig-continuity",
];

const diagrams = {
  "ig-foundations": ["Biologic architecture", "Pooled IgG becomes a temporary, patient-specific antibody system", ["Collect", "Donor repertoire", "Many plasma donors contribute broad polyclonal recognition"], ["Purify", "Controlled manufacturing", "Screening, testing, purification, and pathogen reduction lower risk"], ["Engage", "Fab and Fc biology", "Antigen binding and immune regulation support different clinical roles"], ["Clear", "Finite exposure", "Route, protein loss, inflammation, and individual clearance shape duration"]],
  "ig-roles": ["Clinical purpose", "The indication determines the product, dose, route, endpoint, and evidence standard", ["Replace", "Antibody failure", "Reduce serious and recurrent infection in a defined immune deficiency"], ["Modulate", "Immune disease", "Use disease-specific evidence and an explicit response measure"], ["Protect", "Postexposure", "Select the named pathogen-specific hyperimmune product"], ["Renew", "Ongoing value", "Continue only when benefit, need, and safety remain visible"]],
  "ig-ivig": ["IVIG prescription", "Translate grams into a fully controlled infusion", ["Define", "Product and indication", "Verify the exact label, route, regimen, and treatment goal"], ["Calculate", "Weight and total dose", "State the method, exact grams, schedule, and rounding"], ["Program", "Rate and monitoring", "Start low, escalate by label, and reassess at each step"], ["Trace", "Lot and response", "Record vials, rates, reactions, intervention, and outcome"]],
  "ig-scig": ["Subcutaneous system", "Slower absorption changes exposure, technique, and the patient's role", ["Convert", "Label-specific dose", "Do not infer bioavailability or schedule from equal milliliters"], ["Deliver", "Sites and equipment", "Match volume, rate, needle, pump, and aseptic technique"], ["Distinguish", "Conventional or facilitated", "Protect the dual-component sequence and ramp-up when used"], ["Support", "Home competence", "Validate technique and build routine, urgent, and emergency pathways"]],
  "ig-selection": ["Product matrix", "Choose from indication, formulation, access, risk, and lived feasibility", ["License", "Indication and route", "Confirm exact approved use and age before comparing convenience"], ["Formulate", "Concentration and excipients", "Review volume, stabilizer, sodium, osmolality, pH, and IgA"], ["Protect", "Organ and reaction risk", "Integrate kidney, cardiac, thrombotic, allergy, and prior tolerance"], ["Access", "Supply and setting", "Treat substitution or home transition as a new clinical plan"]],
  "ig-reactions": ["Reaction pathway", "Classify severity before deciding whether an infusion can continue", ["Pause", "Stop exposure", "Slow or stop immediately while airway, breathing, and circulation are assessed"], ["Classify", "Mild or dangerous", "Separate rate symptoms from anaphylaxis, vascular, pulmonary, and hemolytic events"], ["Treat", "Syndrome-specific care", "Use epinephrine promptly for anaphylaxis and escalate emergencies"], ["Learn", "Future prevention", "Document phenotype, product, rate, intervention, outcome, and rechallenge decision"]],
  "ig-toxicity": ["High-consequence map", "Risk begins before the dose and can continue after the patient leaves", ["Vascular", "Thrombosis and viscosity", "Use hydration, minimum practical rate, mobility, and symptom surveillance"], ["Renal", "Kidney injury", "Match product and rate to renal function, volume, and nephrotoxins"], ["Immune", "Hemolysis and meningitis", "Recognize delayed laboratory and neurologic syndromes"], ["Pulmonary", "TRALI or overload", "Stop treatment and distinguish noncardiogenic injury from volume stress"]],
  "ig-monitoring": ["Interpretation calendar", "Every result needs timing, context, a decision threshold, and an owner", ["Respond", "Clinical endpoint", "Track infections or disease-specific function before chasing a number"], ["Expose", "IgG concentration", "Interpret route, dose, interval, collection time, and protein loss"], ["Correct", "Serology interference", "Identify passively transferred antibodies before diagnosing disease"], ["Schedule", "Vaccines", "Use CDC product- and dose-specific intervals for MMR and varicella"]],
  "ig-populations": ["Patient adaptation", "Change the operational plan only where the patient factor changes risk", ["Age", "Children and older adults", "Respect product age limits, growth, frailty, organ function, and support"], ["Body", "Weight and volume", "State the dosing weight and balance hydration with cardiac tolerance"], ["Organ", "Kidney and cardiovascular", "Select concentration, rate, dose division, setting, and monitoring together"], ["Perinatal", "Pregnancy and lactation", "Use current narrative evidence and disease guidance, never legacy letters"]],
  "ig-continuity": ["Continuity record", "A safe next dose should never depend on guessing", ["Reconcile", "Complete exposure", "Capture product, route, grams, rate, sites, lot, reactions, and response"], ["Transition", "New product or setting", "Recheck conversion, label, risk, equipment, training, and observation"], ["Steward", "Clinical value", "Prevent duplication, optimize interval, reduce waste, and define renewal"], ["Own", "Next decision", "Name responsibility for supply, labs, vaccines, adverse events, and follow-up"]],
};

export default function ImmunoglobulinTherapyVisual({ type }) {
  const item = diagrams[type];
  if (!item) return null;
  const [eyebrow, title, ...nodes] = item;
  return (
    <figure className="chol-visual immunoglobulin-visual" aria-label={title}>
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
