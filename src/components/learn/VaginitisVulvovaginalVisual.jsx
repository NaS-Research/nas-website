export const vaginitisVulvovaginalVisualTypes = [
  "vaginitis-diagnostic",
  "vaginitis-bv-biology",
  "vaginitis-bv-treatment",
  "vaginitis-bv-recurrence",
  "vaginitis-trich",
  "vaginitis-vvc-diagnosis",
  "vaginitis-vvc-treatment",
  "vaginitis-vvc-recurrence",
  "vaginitis-modern-vvc",
  "vaginitis-special",
];

const diagrams = {
  "vaginitis-diagnostic": ["Diagnostic architecture", "Move from symptom to defensible cause", ["Hear", "Pattern and context", "Symptoms, exposures, pregnancy, medicines, recurrence"], ["Measure", "pH and examination", "Use objective findings to narrow the field"], ["Identify", "Microscopy or testing", "Match method sensitivity to the organism"], ["Escalate", "Red flags", "Protect cervicitis, upper tract, and noninfectious pathways"]],
  "vaginitis-bv-biology": ["Microbial ecology", "A community shift, not one guilty organism", ["Protect", "Lactobacillus activity", "Lactate and low pH support colonization resistance"], ["Disrupt", "Anaerobic expansion", "Diverse organisms replace the protective community"], ["Persist", "Polymicrobial biofilm", "Adherent communities can survive initial disturbance"], ["Recognize", "Amsel or Nugent", "Combine independent findings rather than trusting odor alone"]],
  "vaginitis-bv-treatment": ["Regimen design", "Choose molecule, route, vehicle, and follow-up", ["Oral", "Metronidazole", "Seven days with systemic interaction review"], ["Local", "Metronidazole gel", "Lower systemic exposure with exact applicator technique"], ["Alternative", "Clindamycin products", "Vehicle determines barrier-method counseling"], ["Single dose", "Secnidazole granules", "Preparation and lactation instructions are part of the dose"]],
  "vaginitis-bv-recurrence": ["Recurrence pathway", "Confirm, control, update, reassess", ["Confirm", "Current syndrome", "Rule out candidiasis, trichomoniasis, and noninfectious disease"], ["Control", "Retreatment or suppression", "Define induction, duration, and stop point"], ["Update", "Partner evidence", "Apply the 2025 ACOG pathway to selected patients"], ["Measure", "Return pattern", "Track symptom-free interval and treatment exposure"]],
  "vaginitis-trich": ["Transmission loop", "Treat the patient and the partner system", ["Detect", "Validated NAAT", "Wet mount alone can miss infection"], ["Treat", "Oral nitroimidazole", "Use the population-specific regimen"], ["Close", "Partner treatment", "Prevent predictable reinfection"], ["Recheck", "Three-month retest", "Separate reinfection from resistance"]],
  "vaginitis-vvc-diagnosis": ["Candida reasoning", "Detection becomes disease only in context", ["Recognize", "Compatible syndrome", "Pruritus, soreness, erythema, edema, external dysuria"], ["Support", "Microscopy or culture", "Match the test to species and complexity"], ["Classify", "Uncomplicated or complicated", "Recurrence, severity, host, and organism change care"], ["Resist", "Colonization error", "A positive test without symptoms is not an indication"]],
  "vaginitis-vvc-treatment": ["Product precision", "The package is an engineered regimen", ["Select", "Topical or oral", "Balance pregnancy, interactions, route, and preference"], ["Verify", "Strength and duration", "One, three, seven, and longer courses are not interchangeable"], ["Teach", "Placement and vehicle", "Leakage, irritation, and barrier compatibility matter"], ["Reassess", "Failure or rapid return", "Return to diagnosis rather than repeating indefinitely"]],
  "vaginitis-vvc-recurrence": ["Longitudinal control", "Induce remission before suppressing recurrence", ["Prove", "Culture and species", "Confirm the organism and complicated phenotype"], ["Induce", "Adequate initial course", "Control active disease before maintenance"], ["Suppress", "Time-limited regimen", "Monitor interactions, organ function, and reproduction"], ["Escalate", "Non-albicans pathway", "Use species-aware therapy and specialist support"]],
  "vaginitis-modern-vvc": ["Modern antifungal map", "New mechanisms, narrow regulatory boundaries", ["Block wall", "Ibrexafungerp", "Glucan synthase inhibition outside the azole pathway"], ["Block sterol", "Oteseconazole", "Selective fungal CYP51 inhibition"], ["Protect", "Reproductive safety", "Pregnancy and reproductive potential define eligibility"], ["Verify", "Label and interactions", "CYP3A, BCRP, food, kidney, and liver details differ"]],
  "vaginitis-special": ["Whole-plan close", "One diagnosis, several human systems", ["Pregnancy", "Current narrative guidance", "Use drug, dose, timing, and indication evidence"], ["Lactation", "Product-specific exposure", "Plan interruptions and restart timing when required"], ["Partners", "Syndrome-specific rules", "Trichomoniasis, BV, and VVC are not managed alike"], ["Follow-up", "Outcome and escalation", "Define improvement, retesting, recurrence, and red flags"]],
};

export default function VaginitisVulvovaginalVisual({ type }) {
  const item = diagrams[type];
  if (!item) return null;
  const [eyebrow, title, ...nodes] = item;
  return (
    <figure className="chol-visual vaginitis-visual" aria-label={title}>
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
