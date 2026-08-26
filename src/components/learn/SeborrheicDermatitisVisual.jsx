export const seborrheicDermatitisVisualTypes = [
  "seborrheic-biology", "phenotype-differential", "scalp-shampoo-therapy",
  "non-scalp-antifungals", "anti-inflammatory-control", "roflumilast-pde4",
  "special-populations", "product-safety-technique", "maintenance-monitoring",
];

const diagrams = {
  "seborrheic-biology": ["Disease system", "Connect sebum, Malassezia, barrier response, and inflammation without reducing the disorder to poor hygiene", ["Habitat", "Sebum-rich skin", "Scalp, face, ears, and chest"], ["Microbiome", "Malassezia participates", "A normal resident in an altered host response"], ["Barrier", "Irritation and scale", "Turnover and lipid disruption amplify symptoms"], ["Cycle", "Chronic relapsing inflammation", "Control and maintenance have different jobs"]],
  "phenotype-differential": ["Pattern recognition", "Read morphology, distribution, age, host status, and hair findings before selecting treatment", ["Scalp", "Flake, scale, itch", "Dandruff is the mild scalp end"], ["Face", "Brows, folds, ears", "Vehicle and steroid risk change"], ["Mimic", "Psoriasis, tinea, contact", "Hair loss or pustules change the diagnosis"], ["Escalate", "Eye, infection, systemic risk", "Do not self-treat a dangerous pattern"]],
  "scalp-shampoo-therapy": ["Scalp treatment", "Match active ingredient, wash pattern, contact time, hair texture, and maintenance plan", ["Antifungal", "Ketoconazole or ciclopirox", "Reduce the yeast-linked disease signal"], ["OTC", "Selenium sulfide or zinc", "Follow the exact label"], ["Scale", "Salicylic acid or tar", "Useful for selected thick scale"], ["Technique", "Reach the scalp", "Leave on only as directed, then rinse"]],
  "non-scalp-antifungals": ["Site and vehicle", "The face, folds, beard, ears, and chest need treatments designed for skin rather than hair", ["Cream", "Localized facial disease", "Thin application to affected skin"], ["Foam or gel", "Hair-bearing areas", "Vehicle can improve reach and adherence"], ["Boundary", "Avoid eye and mucosa", "External-use instructions still matter"], ["Response", "Reassess rather than overapply", "Irritation can mimic a flare"]],
  "anti-inflammatory-control": ["Inflammation control", "Use the least hazardous anti-inflammatory strategy that fits the site and flare", ["Steroid", "Rapid short-course control", "Potency, site, and duration govern risk"], ["Face and folds", "Thin skin absorbs more", "Avoid prolonged unsupervised use"], ["Steroid-sparing", "Calcineurin inhibitor", "Off-label clinician-directed option"], ["Exit", "Return to maintenance", "Do not let rescue therapy become routine"]],
  "roflumilast-pde4": ["PDE4 inhibition", "Follow topical roflumilast from intracellular signaling to once-daily seborrheic dermatitis treatment", ["Target", "PDE4", "Raises intracellular cyclic AMP"], ["Effect", "Inflammatory signaling falls", "Treats itch, scale, and discoloration"], ["Form", "0.3 percent foam", "Scalp and body application"], ["Safety", "Label-specific screening", "Liver impairment and flammability matter"]],
  "special-populations": ["Adapt the plan", "Age, skin tone, hair texture, pregnancy, lactation, immune status, and neurologic disease alter assessment and delivery", ["Infant", "Cradle cap", "Gentle scale care, no adult shampoo assumption"], ["Hair", "Coils and protective styles", "Build a feasible scalp schedule"], ["Skin tone", "Erythema may look different", "Track pigment change and texture"], ["Host", "Immune or neurologic risk", "Lower the threshold for evaluation"]],
  "product-safety-technique": ["Use the product well", "Translate a label into safe application, exposure control, and response monitoring", ["Prepare", "Read the active ingredient", "Avoid accidental duplication"], ["Apply", "Scalp, not only hair", "Use product-specific contact time"], ["Protect", "Eyes, broken skin, flame", "Warnings vary by formulation"], ["Observe", "Irritation and discoloration", "Stop or adjust when harm exceeds benefit"]],
  "maintenance-monitoring": ["Longitudinal control", "Separate induction, rescue, and maintenance while measuring what matters to the patient", ["Control", "Reduce itch and visible scale", "Start with an active regimen"], ["Maintain", "Intermittent preventive use", "Relapse is expected, not failure"], ["Measure", "Site, symptoms, pigment, sleep", "Follow function as well as appearance"], ["Reconsider", "Poor response or red flags", "Recheck diagnosis, technique, and adherence"]],
};

export default function SeborrheicDermatitisVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;
  return <figure className="chol-visual seborrheic-dermatitis-visual" aria-label={title}>
    <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
    <div className="chol-visual__grid">{nodes.map(([verb, focus, detail], index) => <div key={focus}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{verb}</strong><em>{focus}</em><p>{detail}</p>
    </div>)}</div>
  </figure>;
}
