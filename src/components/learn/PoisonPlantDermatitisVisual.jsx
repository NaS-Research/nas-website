export const poisonPlantDermatitisVisualTypes = [
  "toxicodendron-exposure",
  "urushiol-immunology",
  "rash-pattern",
  "skin-decontamination",
  "fomite-control",
  "itch-relief",
  "topical-steroid-use",
  "severe-rash-triage",
  "complication-check",
  "exposure-prevention",
];

const diagrams = {
  "toxicodendron-exposure": ["Exposure network", "Urushiol can move from damaged plants to skin directly, indirectly, or through contaminated smoke", ["Direct", "Plant oil on skin", "Roots, stems, leaves, and fruit can contain urushiol"], ["Indirect", "Tools, clothing, shoes, and pets", "The carrier can trigger a later exposure"], ["Airborne", "Smoke and contaminated particles", "Respiratory exposure changes urgency"], ["Persistent", "Dead plants and dirty surfaces", "The oil can remain active long after the outing"]],
  "urushiol-immunology": ["Delayed immune circuit", "A lipophilic catechol hapten enters skin, modifies proteins, and activates a T cell response", ["Entry", "Urushiol crosses the barrier", "Prompt washing matters before absorption"], ["Hapten", "Skin proteins are modified", "The oil becomes immunologically visible"], ["Memory", "T cells become sensitized", "Later exposure can react faster"], ["Eruption", "Cytokines recruit inflammation", "Papules, vesicles, edema, and itch follow"]],
  "rash-pattern": ["Pattern recognition", "Timing, geometry, distribution, and exposure history distinguish Toxicodendron dermatitis from its mimics", ["Delay", "Hours to several days", "It is not an immediate histamine rash"], ["Lines", "Streaks and geometric patches", "Plant contact often leaves a map"], ["Vesicles", "Itchy papules and blisters", "Blister fluid is not contagious"], ["Spread", "New sites appear over time", "Different doses and contaminated objects explain the sequence"]],
  "skin-decontamination": ["First minutes", "Remove the source, wash gently and thoroughly, clean nails, and prevent recontact", ["Remove", "Take off exposed clothing", "Use gloves when handling it"], ["Wash", "Soap or appropriate cleanser plus water", "Act as soon as possible"], ["Nails", "Clean beneath fingernails", "Oil can be transferred by scratching"], ["Rinse", "Use plenty of water", "Do not let oily wash solution remain on skin"]],
  "fomite-control": ["Break the transfer chain", "Every exposed object is treated as a potential reservoir until cleaned", ["Clothing", "Wash separately with detergent", "Handle with gloves"], ["Tools", "Clean handles and working surfaces", "Invisible oil can persist"], ["Pets", "Rinse contaminated fur safely", "The animal can carry oil to people"], ["Household", "Shoes, leashes, packs, and seats", "Trace the whole exposure route"]],
  "itch-relief": ["Symptom strategy", "Cool the skin, protect blisters, reduce inflammation, and avoid sensitizing topical products", ["Cool", "Compresses, showers, short baths", "Heat and sweating can worsen itch"], ["Soothe", "Calamine, oatmeal, aluminum acetate", "Match drying care to weeping lesions"], ["Protect", "Leave blister roofs intact", "Open skin needs gentle care"], ["Avoid", "Topical antihistamines and scratching", "Both can worsen the course"]],
  "topical-steroid-use": ["Label-directed corticosteroid use", "Low-potency OTC hydrocortisone can temporarily relieve a small mild rash when the site and patient are appropriate", ["Select", "Mild and limited disease", "Face, eyes, mouth, and genitals require caution"], ["Apply", "Thin layer at labeled frequency", "More product is not more effective"], ["Limit", "Follow the product duration", "Persistent or recurrent rash needs review"], ["Monitor", "Atrophy, irritation, infection, worsening", "Site and occlusion change absorption"]],
  "severe-rash-triage": ["Escalation ladder", "Airway symptoms, smoke exposure, critical sites, widespread disease, severe swelling, fever, and infection require more than self-care", ["Emergency", "Breathing or swallowing difficulty", "Call emergency services"], ["Urgent", "Eyes, mouth, genitals, face swelling", "Function and mucosa are at risk"], ["Extensive", "Large or multiple body areas", "Prescription therapy may be required"], ["Systemic", "Fever, pus, tenderness, severe pain", "Look beyond uncomplicated dermatitis"]],
  "complication-check": ["Reassessment framework", "A changing rash is interpreted by trajectory, source control, morphology, symptoms, and treatment response", ["Expected", "Pruritic linear vesicles", "Often resolves over several weeks"], ["Recontact", "Fresh lesions after dirty gear", "Decontaminate the reservoir"], ["Infection", "Pus, tenderness, fever, spreading pain", "Scratching can disrupt the barrier"], ["Mimic", "Pain, dermatomal lesions, drug eruption", "Uncertain diagnosis needs examination"]],
  "exposure-prevention": ["Prevention system", "Identification, barriers, work practices, decontamination, and smoke avoidance work together", ["Identify", "Use local plant resources", "One leaf rule does not identify every species"], ["Cover", "Long sleeves, pants, boots, gloves", "Clean protective equipment after use"], ["Barrier", "Labeled bentoquatam before exposure", "It does not treat an established rash"], ["Never burn", "Urushiol can travel in smoke", "Dead plants can still expose people"]],
};

export default function PoisonPlantDermatitisVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;

  return (
    <figure className="chol-visual poison-plant-visual" aria-label={title}>
      <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
      <div className="chol-visual__grid">
        {nodes.map(([value, focus, detail], index) => <div key={focus}><span>{String(index + 1).padStart(2, "0")}</span><strong>{value}</strong><em>{focus}</em><p>{detail}</p></div>)}
      </div>
    </figure>
  );
}
