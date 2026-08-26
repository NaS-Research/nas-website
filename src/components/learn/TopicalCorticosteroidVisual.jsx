export const topicalCorticosteroidVisualTypes = [
  "corticosteroid-mechanism",
  "potency-classification",
  "vehicle-delivery",
  "site-selection",
  "fingertip-dosing",
  "application-schedule",
  "local-adverse-effects",
  "systemic-absorption",
  "special-populations",
  "monitoring-steroid-sparing",
];

const diagrams = {
  "corticosteroid-mechanism": ["Cellular control", "A glucocorticoid crosses the membrane, binds its receptor, changes transcription, and quiets inflammatory signaling", ["Enter", "Lipophilic drug crosses skin and cell membranes", "Vehicle and barrier determine delivery"], ["Bind", "Cytosolic glucocorticoid receptor", "The complex changes location and activity"], ["Regulate", "Inflammatory gene transcription", "Cytokines and eicosanoid signaling decline"], ["Resolve", "Erythema, edema, and pruritus improve", "Diagnosis still determines whether suppression is appropriate"]],
  "potency-classification": ["Potency is a formulation property", "Molecule, concentration, vehicle, assay, and product determine class, so a drug name alone is insufficient", ["Low", "Hydrocortisone examples", "Useful where safety margin is narrow"], ["Middle", "Many prescription formulations", "Match disease, site, and duration"], ["High", "Thick plaques and resistant sites", "Risk rises with area and exposure"], ["Super-high", "Clobetasol examples", "Strict label limits and monitoring apply"]],
  "vehicle-delivery": ["Delivery architecture", "The same active ingredient can behave differently when the vehicle changes hydration, evaporation, spread, and occlusion", ["Ointment", "Greasy and occlusive", "Often useful for dry thick lesions"], ["Cream", "Balanced and acceptable", "Preservatives can matter"], ["Solution", "Low residue on hair-bearing skin", "Alcohol can sting disrupted skin"], ["Foam or gel", "Rapid spread and drying", "Flammability and product directions matter"]],
  "site-selection": ["Site-risk matrix", "Thin skin, folds, thick plaques, hair, infection, and diagnostic uncertainty change the formulation and potency decision", ["Thin", "Face, eyelids, folds, genitals", "Use a larger safety margin"], ["Thick", "Palms, soles, lichenified plaques", "Delivery can be difficult"], ["Hair", "Scalp and dense hair", "Solution, foam, oil, or shampoo may improve reach"], ["Uncertain", "Tinea, rosacea, acne, infection", "Confirm before suppressing inflammation"]],
  "fingertip-dosing": ["Quantity translation", "The fingertip unit converts vague instructions into an amount tied to body area", ["Measure", "Tip to distal finger crease", "Assumes a standard nozzle"], ["Mass", "About one-half gram", "An approximation, not a universal package constant"], ["Coverage", "About two percent adult body area", "Roughly two adult handprints"], ["Course", "Area times frequency times days", "Prescribe enough without uncontrolled excess"]],
  "application-schedule": ["Course design", "Diagnosis, label, potency, response, duration, and maintenance plan define the schedule", ["Start", "Apply to active disease as directed", "Do not substitute more frequent use for reassessment"], ["Review", "Track control and toxicity", "Stop or step down when the goal is reached"], ["Maintain", "Proactive intermittent therapy when prescribed", "Not every disease needs continuous daily steroid"], ["Escalate", "Failure, infection, or uncertainty", "Recheck the diagnosis before increasing exposure"]],
  "local-adverse-effects": ["Local toxicity map", "Potency, duration, site, occlusion, and barrier damage determine the pattern of cutaneous injury", ["Structure", "Atrophy, striae, telangiectasia, purpura", "Thin skin is more vulnerable"], ["Inflammation", "Acneiform, rosacea, perioral dermatitis", "Steroid suppression can reshape disease"], ["Defense", "Masked or worsened infection", "Tinea incognito is a diagnostic warning"], ["Repair", "Delayed healing and pigment change", "Follow the tissue trajectory"]],
  "systemic-absorption": ["HPA risk stack", "Potency, area, duration, occlusion, barrier loss, multiple products, age, and organ reserve accumulate", ["Entry", "Inflamed or disrupted barrier", "Percutaneous absorption increases"], ["Dose", "Large area or high potency", "Total weekly grams matter"], ["Amplify", "Occlusion and prolonged use", "Hydration increases penetration"], ["Effect", "HPA suppression, Cushing features, hyperglycemia", "Withdrawal can expose adrenal insufficiency"]],
  "special-populations": ["Reserve and exposure", "Children, older adults, pregnancy, lactation, and fragile skin require product-specific selection rather than one universal rule", ["Children", "Higher surface area relative to mass", "Systemic exposure can rise"], ["Older skin", "Atrophy and purpura risk", "Use a deliberate site and duration plan"], ["Pregnancy", "Smallest effective exposure", "Use current product evidence, not retired letters"], ["Lactation", "Prevent infant contact and ingestion", "Nipple use requires a feeding plan"]],
  "monitoring-steroid-sparing": ["Control without drift", "Define the target, measure exposure, protect the barrier, and add nonsteroid options when repeated control is needed", ["Target", "Severity, itch, sleep, function", "Know what success means"], ["Exposure", "Potency, grams, area, days, occlusion", "Reconcile every product"], ["Barrier", "Moisturizer and trigger control", "Foundational care lowers treatment burden"], ["Alternative", "TCI, PDE4, JAK, or disease-specific therapy", "Choose by indication, age, site, and safety"]],
};

export default function TopicalCorticosteroidVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;

  return (
    <figure className="chol-visual topical-corticosteroid-visual" aria-label={title}>
      <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
      <div className="chol-visual__grid">
        {nodes.map(([value, focus, detail], index) => <div key={focus}><span>{String(index + 1).padStart(2, "0")}</span><strong>{value}</strong><em>{focus}</em><p>{detail}</p></div>)}
      </div>
    </figure>
  );
}
