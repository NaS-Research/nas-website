export const travelHealthPlanningVisualTypes = [
  "itinerary-risk", "pretravel-timing", "medications-documents", "vaccines", "yellow-fever",
  "exposure-prevention", "vector-malaria", "malaria-medicines", "altitude", "mobility-emergency-return",
];

const diagrams = {
  "itinerary-risk": ["Exposure map", "Translate the actual journey into location, time, activity, and host-specific risks", ["Where", "Subnational stops", "Cities, rural areas, borders, altitude, and transit"], ["When", "Dates and season", "Transmission and entry rules can change"], ["How", "Lodging and activities", "Exposure follows what the traveler does"], ["Who", "Individual clinical margin", "Health and access shape every recommendation"]],
  "pretravel-timing": ["Departure countdown", "Use the time before departure to sequence testing, vaccines, medicines, documents, and contingency plans", ["Weeks", "Series and specialist review", "Create options while time is available"], ["Days", "Prioritize feasible protection", "Late consultation still reduces risk"], ["Hours", "Make essentials executable", "Carry medicines, bite prevention, and illness actions"], ["After", "Document residual risk", "Protection can remain incomplete"]],
  "medications-documents": ["Continuity system", "Keep authentic therapy identifiable, legal, available, and usable across every border", ["Identify", "Original labeled container", "Preserve drug, dose, prescriber, and directions"], ["Carry", "With the traveler", "Protect against checked-bag loss and delay"], ["Document", "List, prescription, letter", "Support customs and emergency care"], ["Verify", "Law and product quality", "Transit rules and counterfeit risk matter"]],
  "vaccines": ["Vaccine architecture", "Build routine protection first, then add itinerary-specific products and formal documentation", ["Routine", "Close standard gaps", "Common diseases remain travel threats"], ["Recommend", "Match the exposure", "Destination, activity, season, and host decide"], ["Require", "Entry documentation", "Legal rules do not equal complete protection"], ["Screen", "Safety and timing", "Live vaccines need individual review"]],
  "yellow-fever": ["Three decisions", "Separate disease exposure, vaccine safety, and border documentation", ["Risk", "Where transmission occurs", "Use current subnational evidence"], ["Benefit", "Protection against disease", "Compare with traveler susceptibility"], ["Harm", "Vaccine adverse events", "Contraindications and precautions matter"], ["Entry", "ICVP or waiver", "Destination acceptance remains uncertain"]],
  "exposure-prevention": ["Protection layers", "Reduce preventable exposure when no single vaccine or medicine can cover the journey", ["Ingest", "Food and water", "Safe preparation and hand hygiene"], ["Contact", "Animals and blood", "Avoid bites, scratches, and unsterile equipment"], ["Inhale", "Crowds and air quality", "Vaccines, ventilation, masks, and planning"], ["Injure", "Environment and activity", "Freshwater, heat, sun, footwear, and emergency access"]],
  "vector-malaria": ["Bite barrier", "Combine skin, clothing, lodging, and itinerary-specific malaria prevention", ["Skin", "EPA-registered repellent", "Choose an active and duration by label"], ["Gear", "Permethrin", "Treat clothing and nets, never skin"], ["Room", "Screens and net", "Reduce exposure during vector activity"], ["Drug", "When malaria risk warrants", "Chemoprophylaxis adds but does not replace barriers"]],
  "malaria-medicines": ["Regimen fit", "Choose among destination-approved options and complete every before, during, and after-travel dose", ["Map", "Transmission and resistance", "Exact location constrains options"], ["Match", "Patient and medicine", "Health, interactions, timing, and adherence"], ["Test", "Quantitative G6PD", "Required for primaquine and tafenoquine"], ["Escalate", "Fever after exposure", "Urgent malaria testing even after prophylaxis"]],
  "altitude": ["Altitude safety", "Control ascent and distinguish mild acclimatization failure from cerebral or pulmonary emergency", ["Ascend", "Increase sleeping height gradually", "Fitness does not prevent illness"], ["Pause", "Symptoms begin", "Do not continue upward"], ["Support", "Acetazolamide when indicated", "Accelerate ventilation and acclimatization"], ["Descend", "HACE or HAPE", "Neurologic or resting respiratory symptoms are urgent"]],
  "mobility-emergency-return": ["Travel safety loop", "Prevent in-transit harm and make illness abroad or after return actionable", ["Move", "Reduce immobility", "Calf exercise and walking fit most travelers"], ["Stratify", "VTE and chronic disease", "Add measures according to baseline risk"], ["Prepare", "Insurance and reputable care", "Know where and how to obtain help"], ["Report", "Complete travel history", "Dates and exposures guide urgent diagnosis"]],
};

export default function TravelHealthPlanningVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;
  return <figure className="chol-visual travel-health-planning-visual" aria-label={title}>
    <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
    <div className="chol-visual__grid">{nodes.map(([verb, focus, detail], index) => <div key={focus}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{verb}</strong><em>{focus}</em><p>{detail}</p>
    </div>)}</div>
  </figure>;
}
