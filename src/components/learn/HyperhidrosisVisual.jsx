export const hyperhidrosisVisualTypes = [
  "sweat-control-physiology", "primary-secondary-diagnosis", "antiperspirant-technique",
  "topical-anticholinergics", "anticholinergic-safety", "site-directed-procedures",
  "systemic-event-therapy", "site-patient-selection", "monitoring-referral",
];

const diagrams = {
  "sweat-control-physiology": ["Neural control", "Trace heat sensing and sympathetic cholinergic signaling from hypothalamus to eccrine sweat", ["Sense", "Heat and emotion", "Central circuits set the response"], ["Signal", "Sympathetic cholinergic nerve", "Acetylcholine reaches the gland"], ["Secrete", "Muscarinic receptor", "Eccrine coils move fluid to skin"], ["Cool", "Evaporation", "Sweat protects core temperature"]],
  "primary-secondary-diagnosis": ["Diagnostic split", "Separate focal primary disease from generalized or secondary sweating before suppressing the symptom", ["Map", "Focal or generalized", "Axillae, palms, soles, face, or whole body"], ["Time", "Onset and sleep", "Primary disease is often longstanding and bilateral"], ["Search", "Medication and disease", "Endocrine, infection, malignancy, neurologic, and drug causes"], ["Measure", "Life interference", "Severity is defined by function, not sweat alone"]],
  "antiperspirant-technique": ["Duct control", "Make aluminum antiperspirant work by matching chemistry to dry skin and a tolerable schedule", ["Dry", "Bedtime skin", "Moisture increases irritation"], ["Apply", "Thin even film", "Treat the sweating field"], ["Occlude", "Temporary duct plugs", "Sweat output falls with repeated use"], ["Maintain", "Lowest useful frequency", "Step down after control"]],
  "topical-anticholinergics": ["Local receptor blockade", "Compare glycopyrronium cloth and sofpironium gel by product, delivery, metabolism, and transfer risk", ["Block", "Muscarinic signaling", "Eccrine stimulation decreases"], ["Deliver", "Cloth or metered gel", "Axillary labeling is product specific"], ["Limit", "Skin and systemic exposure", "Broken skin and occlusion increase risk"], ["Wash", "Hands after use", "Prevent eye transfer and mydriasis"]],
  "anticholinergic-safety": ["Safety circuit", "Screen conditions, additive burden, heat exposure, urinary symptoms, and vision before and during treatment", ["Screen", "Glaucoma and obstruction", "Some conditions can worsen"], ["Sum", "Anticholinergic burden", "Other medicines add toxicity"], ["Watch", "Heat and anhidrosis", "Cooling can fail"], ["Stop", "Retention or blurred vision", "Escalate promptly"]],
  "site-directed-procedures": ["Escalation ladder", "Match focal anatomy and prior response to botulinum toxin, iontophoresis, or energy-based treatment", ["Inject", "Axillary botulinum toxin", "Acetylcholine release is blocked"], ["Immerse", "Palmar or plantar iontophoresis", "Repeated current sessions reduce output"], ["Heat", "Axillary gland treatment", "Durability trades against procedure risk"], ["Refer", "Specialist technique", "Site and device determine safety"]],
  "systemic-event-therapy": ["Whole-body tradeoff", "Use systemic or event-specific therapy only when distribution and burden justify wider physiologic effects", ["Generalize", "Multifocal disease", "Topical reach may be inadequate"], ["Titrate", "Oral anticholinergic", "Lowest useful exposure"], ["Target", "Performance trigger", "Selected patients may use event therapy"], ["Protect", "Heat, cognition, bladder", "Systemic benefit has systemic cost"]],
  "site-patient-selection": ["Precision selection", "Choose therapy from site, age, severity, comorbidity, routine, access, and patient priorities", ["Axilla", "Topical first", "Cloth, gel, antiperspirant, or procedure"], ["Palm and sole", "Iontophoresis or procedure", "Function and pain shape choice"], ["Face and scalp", "Transfer and ocular risk", "Specialist planning matters"], ["Patient", "Shared decision", "Burden, cost, and preference drive adherence"]],
  "monitoring-referral": ["Outcome loop", "Track sweat control, function, adverse effects, adherence, and secondary-cause signals over time", ["Baseline", "Site and severity", "Document interference and triggers"], ["Trial", "Technique and interval", "Give each strategy a defined test"], ["Review", "Benefit and toxicity", "Do not count dryness alone"], ["Escalate", "Red flags or failure", "Reassess cause and treatment level"]],
};

export default function HyperhidrosisVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;
  return <figure className="chol-visual hyperhidrosis-visual" aria-label={title}>
    <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
    <div className="chol-visual__grid">{nodes.map(([verb, focus, detail], index) => <div key={focus}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{verb}</strong><em>{focus}</em><p>{detail}</p>
    </div>)}</div>
  </figure>;
}
