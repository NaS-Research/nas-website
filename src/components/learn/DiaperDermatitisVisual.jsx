export const diaperDermatitisVisualTypes = [
  "barrier-pathophysiology", "morphology-differential", "change-clean-dry", "skin-protectant-barriers",
  "candida-antifungals", "anti-inflammatory-safety", "bacterial-other-causes", "special-populations",
  "monitoring-referral",
];

const diagrams = {
  "barrier-pathophysiology": ["Occluded microenvironment", "Follow moisture, enzymes, pH, friction, and occlusion from exposure to barrier failure", ["Wet", "Urine and stool contact", "Hydration increases permeability"], ["Alter", "pH and fecal enzymes", "Protease and lipase activity rises"], ["Rub", "Friction and maceration", "Convex surfaces receive repeated stress"], ["Break", "Inflamed barrier", "Secondary Candida or bacteria can join"]],
  "morphology-differential": ["Pattern recognition", "Use folds, margins, satellites, erosions, pustules, and distribution to identify the dominant process", ["Irritant", "Convex contact surfaces", "Folds are often relatively spared"], ["Candida", "Folds plus satellites", "Beefy inflammation extends beyond contact"], ["Bacterial", "Crust, pustule, tenderness", "Impetigo and perianal strep need evaluation"], ["Other", "Persistent or unusual pattern", "Contact, psoriasis, deficiency, or systemic disease"]],
  "change-clean-dry": ["Exposure control", "Reduce contact time and friction without overcleaning already injured skin", ["Change", "Promptly after urine or stool", "Superabsorbent diapers reduce exposure"], ["Clean", "Water or gentle fragrance-free wipe", "Pat rather than scrub"], ["Dry", "Air time and gentle drying", "Avoid heat injury"], ["Repeat", "Every change", "Prevention is continuous care"]],
  "skin-protectant-barriers": ["Physical protection", "Build a continuous layer that separates injured skin from wetness and irritants", ["Petrolatum", "Occlusive barrier", "Spreads easily with each change"], ["Zinc oxide", "Protectant paste", "Higher solids increase persistence"], ["Apply", "Thick visible layer", "Remove only soiled material"], ["Avoid", "Aggressive scrubbing", "Preserve the barrier already in place"]],
  "candida-antifungals": ["Secondary yeast", "Recognize Candida morphology, select a topical antifungal, and reassess early response", ["Pattern", "Folds and satellite papules", "Often follows barrier damage or antibiotics"], ["Treat", "Nystatin or azole", "Use age and product-specific directions"], ["Protect", "Continue barrier care", "Antifungal does not replace exposure control"], ["Recheck", "No improvement", "Confirm diagnosis or mixed disease"]],
  "anti-inflammatory-safety": ["Short rescue", "Use low-potency anti-inflammatory treatment only when inflammation warrants the added risk", ["Select", "Hydrocortisone 0.5 to 1 percent", "Short clinician-directed course"], ["Limit", "Thin layer and brief duration", "Occlusion increases absorption"], ["Avoid", "Potent combination products", "Atrophy and systemic exposure can follow"], ["Exit", "Return to barrier care", "Steroid does not prevent recurrence"]],
  "bacterial-other-causes": ["Reopen the diagnosis", "Atypical morphology and treatment failure can reveal bacterial, allergic, inflammatory, nutritional, or systemic disease", ["Impetigo", "Honey crust or bullae", "Needs cause-specific care"], ["Perianal strep", "Bright painful ring", "Testing and systemic therapy may be needed"], ["Contact", "Product-shaped eruption", "Wipes, fragrances, and preservatives matter"], ["Systemic", "Widespread or persistent disease", "Consider deficiency or immune disease"]],
  "special-populations": ["Change the safety margin", "Age, prematurity, diarrhea, antibiotics, immune status, mobility, and incontinence alter exposure and risk", ["Newborn", "Thin immature barrier", "Lower threshold for clinical review"], ["Diarrhea", "Frequent enzyme-rich stool", "Change and protect more often"], ["Antibiotic", "Candida risk rises", "Use morphology, not prophylactic antifungal"], ["Older child or adult", "Incontinence-associated dermatitis", "Pressure and wound care may coexist"]],
  "monitoring-referral": ["Response system", "Track morphology, discomfort, function, exposure control, and red flags over a short expected timeline", ["Measure", "Area, folds, satellites, erosion", "Use reproducible descriptions"], ["Comfort", "Pain, sleep, feeding", "Function reflects severity"], ["Respond", "Improvement within days", "Technique and diagnosis should align"], ["Refer", "Severe, infected, persistent", "Protect against missed disease"]],
};

export default function DiaperDermatitisVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;
  return <figure className="chol-visual diaper-dermatitis-visual" aria-label={title}>
    <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
    <div className="chol-visual__grid">{nodes.map(([verb, focus, detail], index) => <div key={focus}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{verb}</strong><em>{focus}</em><p>{detail}</p>
    </div>)}</div>
  </figure>;
}
