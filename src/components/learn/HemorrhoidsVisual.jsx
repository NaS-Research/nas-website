export const hemorrhoidsVisualTypes = [
  "anal-cushion-anatomy", "bleeding-differential", "bowel-mechanics", "protectants-astringents",
  "vasoconstrictors-anesthetics", "anti-inflammatory-safety", "dosage-form-technique",
  "thrombosis-prolapse-procedures", "monitoring-referral",
];

const diagrams = {
  "anal-cushion-anatomy": ["Anorectal map", "Locate vascular cushions relative to the dentate line and predict bleeding, pain, prolapse, and thrombosis", ["Support", "Normal anal cushions", "Vascular tissue contributes to continence"], ["Internal", "Above dentate line", "Bleeding and prolapse can be painless"], ["External", "Below dentate line", "Somatic innervation makes thrombosis painful"], ["Distort", "Pressure and support failure", "Straining and bowel dysfunction amplify symptoms"]],
  "bleeding-differential": ["Diagnostic firewall", "Treat bright red blood as a finding that requires context, not proof of hemorrhoids", ["Describe", "Color, amount, timing", "Coating, dripping, mixed stool, or melena"], ["Compare", "Pain and bowel change", "Fissure, abscess, colitis, prolapse, or cancer"], ["Stratify", "Age and risk", "Anemia, weight loss, family history, anticoagulation"], ["Escalate", "Uncertain or severe", "Examination and endoscopy may be needed"]],
  "bowel-mechanics": ["Pressure control", "Reduce shearing and venous engorgement by changing stool consistency and toilet behavior", ["Fiber", "Increase gradually", "Formed soft stool reduces straining"], ["Fluid", "Match clinical needs", "Support fiber without ignoring restrictions"], ["Toilet", "Respond and leave", "Avoid prolonged sitting and force"], ["Track", "Frequency and effort", "Both constipation and diarrhea matter"]],
  "protectants-astringents": ["Surface care", "Use protectants and astringents to reduce friction, moisture, and mild irritation without claiming disease reversal", ["Protect", "Petrolatum or mineral oil", "Separate irritated skin from moisture"], ["Soothe", "Witch hazel", "Temporary astringent symptom relief"], ["Clean", "Water and gentle patting", "Overcleaning worsens irritation"], ["Limit", "Short self-care trial", "Persistent symptoms need diagnosis"]],
  "vasoconstrictors-anesthetics": ["Symptom pharmacology", "Match vascular and sensory targets to temporary relief while respecting cardiovascular and local toxicity", ["Constrict", "Phenylephrine alpha-1", "Temporary reduction in swelling and discomfort"], ["Block", "Pramoxine or local anesthetic", "Sensory signaling falls"], ["Screen", "Pressure, heart, thyroid, glucose", "Systemic sensitivity changes the margin"], ["Avoid", "Layered duplicate actives", "Combinations can hide total exposure"]],
  "anti-inflammatory-safety": ["Short inflammatory rescue", "Use low-potency hydrocortisone briefly and protect against atrophy, sensitization, infection masking, and delayed diagnosis", ["Select", "Hydrocortisone", "Reduce inflammatory itch and swelling"], ["Limit", "Small area and short course", "Perianal skin is sensitive"], ["Inspect", "Infection and broken skin", "Steroid can worsen or mask disease"], ["Stop", "Bleeding or no response", "Do not extend self-treatment indefinitely"]],
  "dosage-form-technique": ["Route precision", "Choose external or intrarectal delivery from the symptom location and follow the exact product label", ["External", "Cream, ointment, wipe", "Treat external perianal symptoms"], ["Internal", "Suppository or labeled applicator", "Delivery must match internal symptoms"], ["Prepare", "Clean gently and pat dry", "Reduce contamination and friction"], ["Verify", "Actives and frequency", "Brand families contain different formulations"]],
  "thrombosis-prolapse-procedures": ["Escalation map", "Recognize when anatomy and severity require office or operative treatment instead of another topical product", ["Thrombosed", "Acute tender external lump", "Timing and severity guide excision discussion"], ["Prolapse", "Internal tissue descends", "Grade and reducibility guide treatment"], ["Office", "Band, sclerose, coagulate", "Internal disease can be treated above the pain line"], ["Operate", "External or advanced combined disease", "Durability trades against pain and recovery"]],
  "monitoring-referral": ["Clinical exit rules", "Track bowel mechanics, bleeding, pain, prolapse, anemia signals, drug risk, and short-interval response", ["Measure", "Bleeding, pain, stool, prolapse", "Use reproducible features"], ["Audit", "Fiber, toilet time, products", "Technique can explain failure"], ["Review", "Pregnancy, age, anticoagulants", "Context changes urgency and treatment"], ["Refer", "One week, recurrent, severe, uncertain", "Protect against missed disease"]],
};

export default function HemorrhoidsVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;
  return <figure className="chol-visual hemorrhoids-visual" aria-label={title}>
    <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
    <div className="chol-visual__grid">{nodes.map(([verb, focus, detail], index) => <div key={focus}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{verb}</strong><em>{focus}</em><p>{detail}</p>
    </div>)}</div>
  </figure>;
}
