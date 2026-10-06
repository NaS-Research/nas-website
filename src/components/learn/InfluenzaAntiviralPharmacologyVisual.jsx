export const influenzaAntiviralPharmacologyVisualTypes = [
  "influenza-biology-triage",
  "influenza-life-cycle-targets",
  "influenza-selection-timing",
  "oseltamivir-mechanism-pk",
  "oseltamivir-dosing-administration",
  "oseltamivir-safety-populations",
  "zanamivir-pharmacology-safety",
  "peramivir-pharmacology-administration",
  "baloxavir-target-dosing",
  "baloxavir-administration-safety",
  "integrated-influenza-system",
].map((type) => `influenza-antiviral-${type}`);

const diagrams = {
  "influenza-biology-triage": {
    eyebrow: "Clinical state",
    title: "Recognize who cannot wait",
    nodes: ["Syndrome", "Host risk", "Severity", "Complication"],
    notes: ["Consider mimics", "Priority treatment", "Setting and trajectory", "Urgent reassessment"],
  },
  "influenza-life-cycle-targets": {
    eyebrow: "Viral targets",
    title: "Distinguish the target from the response",
    nodes: ["Neuraminidase", "PA endonuclease", "M2 channel", "Clinical response"],
    notes: ["Virion release", "Viral transcription", "Historical influenza A target", "Reassess before assigning resistance"],
    descriptions: ["Oseltamivir, zanamivir and peramivir.", "Baloxavir inhibits cap snatching.", "Adamantanes are not recommended.", "Check exposure, host and complications."],
  },
  "influenza-selection-timing": {
    eyebrow: "Antiviral selection",
    title: "Match timing, setting and delivery",
    nodes: ["Priority", "Setting", "Delivery", "Evidence limits"],
    notes: ["Treat promptly", "Hospitalized oseltamivir", "Verify age and route", "Check population and illness"],
    descriptions: ["Two days is not a universal cutoff.", "Oral or enteric is the routine choice.", "Check device, absorption and interactions.", "Convenience does not establish benefit."],
  },
  "oseltamivir-mechanism-pk": {
    eyebrow: "Oseltamivir disposition",
    title: "Activate, inhibit, eliminate",
    nodes: ["Ester prodrug", "Hepatic esterases", "Active carboxylate", "Renal clearance"],
    notes: ["Oseltamivir phosphate", "Ester hydrolysis", "Neuraminidase inhibition", "Filtration and secretion"],
    descriptions: ["Absorbed after oral administration.", "Predominantly hepatic activation.", "Limits progeny viral-particle release.", "Review the renal dosing regimen."],
  },
  "oseltamivir-dosing-administration": {
    eyebrow: "Dose system",
    title: "Convert the order into delivery",
    nodes: ["Indication", "Age and weight", "6 mg per mL", "Renal schedule"],
    notes: ["Treatment or prophylaxis", "Age-specific dose", "Calculate volume", "Preserve the calendar"],
  },
  "oseltamivir-safety-populations": {
    eyebrow: "Safety map",
    title: "Monitor the host and formulation",
    nodes: ["GI tolerance", "Immune reaction", "Behavior change", "Special population"],
    notes: ["Food may help", "Stop serious reactions", "Evaluate infection too", "Pregnancy and sorbitol"],
  },
  "zanamivir-pharmacology-safety": {
    eyebrow: "Inhaled system",
    title: "Treat the device as part of the drug",
    nodes: ["Rotadisk", "Two inhalations", "Airway screen", "Milk protein"],
    notes: ["Load correctly", "Build 10 mg", "Avoid bronchospasm risk", "Verify true allergy"],
  },
  "peramivir-pharmacology-administration": {
    eyebrow: "Intravenous system",
    title: "Build one controlled infusion",
    nodes: ["Weight", "Renal function", "Dilution", "15 to 30 minutes"],
    notes: ["Calculate once", "Reduce if required", "1 to 6 mg per mL", "Monitor the infusion"],
  },
  "baloxavir-target-dosing": {
    eyebrow: "Transcription target",
    title: "Stop viral cap snatching",
    nodes: ["Marboxil prodrug", "Active baloxavir", "PA endonuclease", "Weight dose"],
    notes: ["Oral delivery", "Hydrolysis", "Block transcription", "Single exposure"],
  },
  "baloxavir-administration-safety": {
    eyebrow: "Exposure protection",
    title: "Protect the single dose",
    nodes: ["Cation screen", "Prepare correctly", "Age boundary", "Population fit"],
    notes: ["Avoid chelation", "Observe 10 hours", "Use from age 5", "Respect evidence limits"],
  },
  "integrated-influenza-system": {
    eyebrow: "Longitudinal loop",
    title: "Reassess the complete treatment system",
    nodes: ["Treat or prevent", "Deliver", "Reassess", "Update guidance"],
    notes: ["Define the goal", "Verify dose and route", "Detect deterioration", "Use seasonal evidence"],
  },
};

export default function InfluenzaAntiviralPharmacologyVisual({ type }) {
  const data = diagrams[type.replace("influenza-antiviral-", "")];
  if (!data) return null;

  return (
    <figure className="chol-visual influenza-antiviral-visual" aria-label={data.title}>
      <figcaption>
        <span>{data.eyebrow}</span>
        <strong>{data.title}</strong>
      </figcaption>
      <div className="chol-visual__grid">
        {data.nodes.map((label, index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong style={(type === "influenza-antiviral-influenza-life-cycle-targets" || type === "influenza-antiviral-influenza-selection-timing" || type === "influenza-antiviral-oseltamivir-mechanism-pk") ? { fontSize: "14px" } : undefined}>{label}</strong>
            <em style={(type === "influenza-antiviral-oseltamivir-dosing-administration" || type === "influenza-antiviral-influenza-biology-triage" || type === "influenza-antiviral-influenza-life-cycle-targets" || type === "influenza-antiviral-influenza-selection-timing" || type === "influenza-antiviral-oseltamivir-mechanism-pk") ? { fontSize: "14px" } : undefined}>{data.notes[index]}</em>
            <p style={(type === "influenza-antiviral-oseltamivir-dosing-administration" || type === "influenza-antiviral-influenza-biology-triage" || type === "influenza-antiviral-influenza-life-cycle-targets" || type === "influenza-antiviral-influenza-selection-timing" || type === "influenza-antiviral-oseltamivir-mechanism-pk") ? { fontSize: "14px" } : undefined}>{data.descriptions?.[index] ?? (index < data.nodes.length - 1 ? "Carry the verified input forward." : "Own the next clinical action.")}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
