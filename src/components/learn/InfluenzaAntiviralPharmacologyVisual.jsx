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
    eyebrow: "Oseltamivir safety",
    title: "Monitor the host and formulation",
    nodes: ["GI tolerance", "Allergic reaction", "Behavior change", "Host and product"],
    notes: ["Food may help", "Stop suspected reactions", "Assess illness and drug", "Review evidence and ingredients"],
    descriptions: ["Reassess persistent or severe symptoms.", "Treat serious skin or allergic findings.", "Protect against injury; weigh continuation.", "Pregnancy, lactation and suspension sorbitol."],
  },
  "zanamivir-pharmacology-safety": {
    eyebrow: "Zanamivir delivery",
    title: "Treat the device as part of the drug",
    nodes: ["Rotadisk", "Two inhalations", "Airway screen", "Milk protein"],
    notes: ["Flat side up", "5 mg plus 5 mg", "Review asthma and COPD", "Clarify the reaction"],
    descriptions: ["Keep level; pierce when ready.", "Advance and inhale a second blister.", "Stop for wheeze or breathing decline.", "Do not use with true ingredient allergy."],
  },
  "peramivir-pharmacology-administration": {
    eyebrow: "Peramivir infusion",
    title: "Build one controlled infusion",
    nodes: ["Age and weight", "Renal function", "Final volume", "Controlled infusion"],
    notes: ["Apply the dose cap", "Use the age-specific table", "1 to 6 mg per mL", "15 to 30 minutes"],
    descriptions: ["Normal-function child: 12 mg per kg.", "Reduce below 50 mL per minute.", "Check the age/weight volume limit.", "No IV mixing or co-infusion."],
  },
  "baloxavir-target-dosing": {
    eyebrow: "Transcription target",
    title: "Stop viral cap snatching",
    nodes: ["Oral prodrug", "Active baloxavir", "PA endonuclease", "Dose and product"],
    notes: ["Hydrolysis", "Active metabolite", "Block transcription", "Age 5 and older"],
    descriptions: ["Marboxil is part of the molecule.", "Use labeled prodrug milligrams.", "Interrupt the cap-snatching step.", "Check tablet, bottle or packet."],
  },
  "baloxavir-administration-safety": {
    eyebrow: "Exposure protection",
    title: "Protect the single dose",
    nodes: ["Cation screen", "Bottle or packet", "Patient fit", "Reassess"],
    notes: ["Avoid taking together", "Use the correct clock", "Age 5 and older", "Act on serious findings"],
    descriptions: ["Check dairy and mineral products.", "Bottle: 10 hours. Packet: immediate.", "Check illness and population.", "No automatic repeat dose."],
  },
  "integrated-influenza-system": {
    eyebrow: "Longitudinal loop",
    title: "Close the influenza care loop",
    nodes: ["Treat or prevent", "Deliver", "Reassess", "Update guidance"],
    notes: ["Use the right clock", "Verify the regimen", "Act on worsening", "Check current evidence"],
    descriptions: ["Symptoms change the decision.", "Match drug, age and setting.", "Review illness and delivery.", "Keep vaccination in the plan."],
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
            <strong style={(type === "influenza-antiviral-influenza-life-cycle-targets" || type === "influenza-antiviral-influenza-selection-timing" || type === "influenza-antiviral-oseltamivir-mechanism-pk" || type === "influenza-antiviral-oseltamivir-safety-populations" || type === "influenza-antiviral-zanamivir-pharmacology-safety" || type === "influenza-antiviral-peramivir-pharmacology-administration" || type === "influenza-antiviral-baloxavir-target-dosing" || type === "influenza-antiviral-baloxavir-administration-safety" || type === "influenza-antiviral-integrated-influenza-system") ? { fontSize: "14px" } : undefined}>{label}</strong>
            <em style={(type === "influenza-antiviral-oseltamivir-dosing-administration" || type === "influenza-antiviral-influenza-biology-triage" || type === "influenza-antiviral-influenza-life-cycle-targets" || type === "influenza-antiviral-influenza-selection-timing" || type === "influenza-antiviral-oseltamivir-mechanism-pk" || type === "influenza-antiviral-oseltamivir-safety-populations" || type === "influenza-antiviral-zanamivir-pharmacology-safety" || type === "influenza-antiviral-peramivir-pharmacology-administration" || type === "influenza-antiviral-baloxavir-target-dosing" || type === "influenza-antiviral-baloxavir-administration-safety" || type === "influenza-antiviral-integrated-influenza-system") ? { fontSize: "14px" } : undefined}>{data.notes[index]}</em>
            <p style={(type === "influenza-antiviral-oseltamivir-dosing-administration" || type === "influenza-antiviral-influenza-biology-triage" || type === "influenza-antiviral-influenza-life-cycle-targets" || type === "influenza-antiviral-influenza-selection-timing" || type === "influenza-antiviral-oseltamivir-mechanism-pk" || type === "influenza-antiviral-oseltamivir-safety-populations" || type === "influenza-antiviral-zanamivir-pharmacology-safety" || type === "influenza-antiviral-peramivir-pharmacology-administration" || type === "influenza-antiviral-baloxavir-target-dosing" || type === "influenza-antiviral-baloxavir-administration-safety" || type === "influenza-antiviral-integrated-influenza-system") ? { fontSize: "14px" } : undefined}>{data.descriptions?.[index] ?? (index < data.nodes.length - 1 ? "Carry the verified input forward." : "Own the next clinical action.")}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
