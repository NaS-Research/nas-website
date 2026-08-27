export const herpesSimplexVaricellaAntiviralPharmacologyVisualTypes = [
  "herpesvirus-biology-triage",
  "selective-activation-resistance",
  "acyclovir-mechanism-medicinal-chemistry",
  "intravenous-acyclovir-safety",
  "valacyclovir-prodrug-dosing",
  "famciclovir-penciclovir-pharmacology",
  "herpes-labialis-selection",
  "genital-herpes-longitudinal-care",
  "invasive-hsv-pregnancy-neonatal",
  "herpes-zoster-treatment-prevention",
  "integrated-herpesvirus-system",
].map((type) => `herpes-antiviral-${type}`);

const diagrams = {
  "herpesvirus-biology-triage": { eyebrow: "Clinical state", title: "Classify before treating", nodes: ["Virus", "Compartment", "Host", "Urgency"], notes: ["HSV or VZV", "Skin, eye, CNS, viscera", "Age and immunity", "Routine or emergency"] },
  "selective-activation-resistance": { eyebrow: "Selective activation", title: "Build the active triphosphate", nodes: ["Parent analogue", "Viral kinase", "Host kinases", "DNA polymerase"], notes: ["Acyclovir or penciclovir", "First phosphate", "Active triphosphate", "Replication arrest"] },
  "acyclovir-mechanism-medicinal-chemistry": { eyebrow: "Medicinal chemistry", title: "Turn guanine mimicry into viral arrest", nodes: ["Acyclic guanine", "Phosphorylation", "DNA incorporation", "Renal clearance"], notes: ["Selective scaffold", "Activate intracellularly", "Terminate elongation", "Adjust exposure"] },
  "intravenous-acyclovir-safety": { eyebrow: "Infusion system", title: "Protect the kidney and brain", nodes: ["Calculate", "Dilute", "Infuse one hour", "Reassess"], notes: ["Dose and kidneys", "Compatible solution", "Hydration active", "Creatinine and mentation"] },
  "valacyclovir-prodrug-dosing": { eyebrow: "Oral exposure", title: "Match prodrug delivery to syndrome", nodes: ["L-valyl ester", "Acyclovir", "Indication regimen", "Renal schedule"], notes: ["Improve absorption", "Active exposure", "Do not transpose doses", "Use the exact table"] },
  "famciclovir-penciclovir-pharmacology": { eyebrow: "Prodrug pathway", title: "Convert famciclovir to active penciclovir", nodes: ["Famciclovir", "Oxidation", "Penciclovir TP", "Polymerase"], notes: ["Oral prodrug", "Aldehyde oxidase", "Intracellular persistence", "Inhibit viral DNA"] },
  "herpes-labialis-selection": { eyebrow: "Episodic care", title: "Act at the first signal", nodes: ["Prodrome", "Confirm pattern", "Start regimen", "Prevent spread"], notes: ["Tingling or burning", "Protect eye and host", "Exact one-day plan", "Shedding can persist"] },
  "genital-herpes-longitudinal-care": { eyebrow: "Longitudinal care", title: "Choose the therapeutic goal", nodes: ["First episode", "Episodic", "Suppressive", "Transmission"], notes: ["Treat every case", "Start at prodrome", "Reduce recurrence", "Reduce, not erase"] },
  "invasive-hsv-pregnancy-neonatal": { eyebrow: "Urgent pathway", title: "Protect the nervous system and newborn", nodes: ["Recognize", "Start IV therapy", "Coordinate", "Complete course"], notes: ["CNS or perinatal risk", "Do not await final testing", "Neurology and obstetrics", "Own response and duration"] },
  "herpes-zoster-treatment-prevention": { eyebrow: "Zoster system", title: "Treat now and prevent later", nodes: ["Dermatome", "Early antiviral", "Complication screen", "Shingrix"], notes: ["Confirm distribution", "Use zoster exposure", "Eye, ear, CNS, spread", "After acute illness"] },
  "integrated-herpesvirus-system": { eyebrow: "Clinical loop", title: "Keep every exposure accountable", nodes: ["Diagnose", "Deliver", "Monitor", "Reassess"], notes: ["Virus and compartment", "Product and renal plan", "Kidney, brain, skin", "Failure and prevention"] },
};

export default function HerpesSimplexVaricellaAntiviralPharmacologyVisual({ type }) {
  const data = diagrams[type.replace("herpes-antiviral-", "")];
  if (!data) return null;

  return (
    <figure className="chol-visual herpes-antiviral-visual" aria-label={data.title}>
      <figcaption>
        <span>{data.eyebrow}</span>
        <strong>{data.title}</strong>
      </figcaption>
      <div className="chol-visual__grid">
        {data.nodes.map((label, index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <em>{data.notes[index]}</em>
            <p>{index < data.nodes.length - 1 ? "Carry the verified input forward." : "Own the next clinical action."}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
