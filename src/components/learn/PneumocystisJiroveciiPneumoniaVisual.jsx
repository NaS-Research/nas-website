export const pneumocystisJiroveciiPneumoniaVisualTypes = [
  "pneumocystis-host-pathogenesis",
  "pneumocystis-recognition-diagnosis",
  "pneumocystis-severity-oxygenation",
  "tmp-smx-pjp-pharmacology",
  "moderate-severe-pjp-treatment",
  "mild-moderate-pjp-treatment",
  "adjunctive-corticosteroids",
  "alternative-agent-safety",
  "primary-prophylaxis",
  "secondary-prophylaxis-immune-recovery",
  "treatment-response-failure",
  "integrated-pjp-system",
].map((type) => `pneumocystis-pneumonia-${type}`);

const diagrams = {
  "pneumocystis-host-pathogenesis": { eyebrow: "Host biology", title: "Trace immune loss to alveolar injury", nodes: ["Immune state", "Organism burden", "Alveolar response", "Gas exchange"], notes: ["HIV or non-HIV", "Susceptible host", "Diffusion barrier", "Exertional to resting hypoxemia"] },
  "pneumocystis-recognition-diagnosis": { eyebrow: "Diagnostic architecture", title: "Move from syndrome to respiratory proof", nodes: ["Compatible host", "Imaging", "Respiratory sample", "Integrated result"], notes: ["Risk plus symptoms", "Ground-glass pattern", "Induced sputum or BAL", "PCR burden and differential"] },
  "pneumocystis-severity-oxygenation": { eyebrow: "Gas exchange", title: "Calculate before classifying", nodes: ["Room-air ABG", "Estimate PAO2", "Calculate A-a", "Assign severity"], notes: ["PaO2 and PaCO2", "150 minus PaCO2 over 0.8", "PAO2 minus PaO2", "Treatment and steroid path"] },
  "tmp-smx-pjp-pharmacology": { eyebrow: "Preferred pharmacology", title: "Block folate and control exposure", nodes: ["Sulfamethoxazole", "Trimethoprim", "TMP mg/kg/day", "Safety loop"], notes: ["Dihydropteroate synthase", "Dihydrofolate reductase", "15 to 20", "Kidney, electrolytes, marrow"] },
  "moderate-severe-pjp-treatment": { eyebrow: "Hypoxemic disease", title: "Secure early active exposure", nodes: ["IV TMP-SMX", "Steroid screen", "Respiratory support", "Twenty-one days"], notes: ["Preferred regimen", "PaO2 or A-a", "Trend the patient", "Then prophylaxis"] },
  "mild-moderate-pjp-treatment": { eyebrow: "Oral treatment", title: "Make absorption believable", nodes: ["Classify", "Select", "Administer", "Follow"], notes: ["Stable physiology", "TMP-SMX or alternative", "Food and G6PD matter", "Labs and urgent return"] },
  "adjunctive-corticosteroids": { eyebrow: "Inflammation control", title: "Deliver the complete steroid pathway", nodes: ["Qualify", "Start", "Taper", "Monitor"], notes: ["PaO2 below 70 or A-a 35", "Ideally within 72 hours", "40, 40, then 20", "Oxygen and toxicity"] },
  "alternative-agent-safety": { eyebrow: "Alternative therapy", title: "Match each option to its hazards", nodes: ["Pentamidine", "Oxidant drugs", "Atovaquone", "Response"], notes: ["Kidney, glucose, ECG", "G6PD and methemoglobin", "Food and absorption", "Do not hide failure"] },
  "primary-prophylaxis": { eyebrow: "First-episode prevention", title: "Let current risk choose prophylaxis", nodes: ["Start", "Select", "Recover", "Restart"], notes: ["CD4 and ART context", "TMP-SMX preferred", "Sustained immune response", "CD4 plus HIV RNA"] },
  "secondary-prophylaxis-immune-recovery": { eyebrow: "Recurrence prevention", title: "Link treatment to immune recovery", nodes: ["Finish therapy", "Begin prophylaxis", "Start ART", "Reassess"], notes: ["Complete 21 days", "No prevention gap", "Within two weeks", "Sustained CD4 and RNA"] },
  "treatment-response-failure": { eyebrow: "Failure analysis", title: "Name the failure before changing", nodes: ["Early course", "Objective trend", "Competing cause", "Change safely"], notes: ["Inflammation can worsen", "ABG after 4 to 8 days", "BAL and differential", "Efficacy or toxicity"] },
  "integrated-pjp-system": { eyebrow: "Clinical loop", title: "Keep every PCP decision accountable", nodes: ["Prove", "Treat", "Monitor", "Prevent"], notes: ["Host, lung, oxygen", "Regimen plus steroid", "Response and toxicity", "ART and prophylaxis"] },
};

export default function PneumocystisJiroveciiPneumoniaVisual({ type }) {
  const data = diagrams[type.replace("pneumocystis-pneumonia-", "")];
  if (!data) return null;

  return (
    <figure className="chol-visual pneumocystis-pneumonia-visual" aria-label={data.title}>
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
