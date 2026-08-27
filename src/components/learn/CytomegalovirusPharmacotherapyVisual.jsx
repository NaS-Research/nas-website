export const cytomegalovirusPharmacotherapyVisualTypes = [
  "cmv-biology-host-triage",
  "cmv-diagnosis-compartment",
  "ganciclovir-mechanism-resistance",
  "ganciclovir-intravenous-system",
  "valganciclovir-prodrug-dosing",
  "ganciclovir-valganciclovir-safety",
  "foscarnet-direct-polymerase",
  "cidofovir-nephroprotection",
  "letermovir-prevention",
  "maribavir-refractory-cmv",
  "cmv-end-organ-care",
  "integrated-cmv-system",
].map((type) => `cmv-pharmacotherapy-${type}`);

const diagrams = {
  "cmv-biology-host-triage": { eyebrow: "Clinical state", title: "Classify host and compartment", nodes: ["Host", "Signal", "Compartment", "Urgency"], notes: ["HIV or transplant", "Vision, GI, or CNS", "Prove organ disease", "Protect function now"] },
  "cmv-diagnosis-compartment": { eyebrow: "Diagnostic architecture", title: "Move from detection to disease", nodes: ["Syndrome", "Organ exam", "Tissue or fluid", "Competing cause"], notes: ["Compatible illness", "Eye, gut, or brain", "Specific evidence", "Do not overcall shedding"] },
  "ganciclovir-mechanism-resistance": { eyebrow: "Molecular pathway", title: "Activate, inhibit, interpret", nodes: ["Ganciclovir", "pUL97", "Triphosphate", "pUL54"], notes: ["Guanine analogue", "First phosphate", "Active nucleotide", "Polymerase arrest"] },
  "ganciclovir-intravenous-system": { eyebrow: "Infusion system", title: "Deliver accountable exposure", nodes: ["Calculate", "Reconstitute", "Infuse", "Monitor"], notes: ["Weight and kidneys", "Sterile water", "One hour", "CBC and response"] },
  "valganciclovir-prodrug-dosing": { eyebrow: "Oral exposure", title: "Convert the prodrug with control", nodes: ["Valganciclovir", "Food", "Ganciclovir", "Renal table"], notes: ["L-valyl ester", "Support exposure", "Active antiviral", "Indication specific"] },
  "ganciclovir-valganciclovir-safety": { eyebrow: "Toxicity system", title: "Protect marrow, kidney, and future", nodes: ["Blood counts", "Renal trend", "Reproduction", "Handling"], notes: ["Detect cytopenia", "Recalculate dose", "Counsel current risk", "Use hazardous controls"] },
  "foscarnet-direct-polymerase": { eyebrow: "Kinase-independent route", title: "Block polymerase directly", nodes: ["Foscarnet", "Pyrophosphate site", "Hydration", "Electrolytes"], notes: ["No phosphorylation", "Inhibit pUL54", "Protect kidneys", "Protect heart and brain"] },
  "cidofovir-nephroprotection": { eyebrow: "Renal protection", title: "Make protection part of the dose", nodes: ["Eligibility", "Probenecid", "Normal saline", "Cidofovir"], notes: ["Kidneys and protein", "2, 1, and 1 grams", "Before and after", "Weekly then every other week"] },
  "letermovir-prevention": { eyebrow: "Transplant prevention", title: "Stop CMV DNA packaging", nodes: ["Transplant risk", "Terminase", "480 or 240", "Interactions"], notes: ["HSCT or kidney", "pUL51, 56, and 89", "Cyclosporine decides", "Reconcile every drug"] },
  "maribavir-refractory-cmv": { eyebrow: "Refractory treatment", title: "Inhibit pUL97 without antagonism", nodes: ["Confirm failure", "Maribavir", "400 twice daily", "Monitor response"], notes: ["Post-transplant CMV", "Direct UL97 block", "Review inducers", "Avoid ganciclovir"] },
  "cmv-end-organ-care": { eyebrow: "Compartment therapy", title: "Match route to threatened tissue", nodes: ["Retina", "Gastrointestinal", "Neurologic", "Follow response"], notes: ["Systemic plus local", "Treat tissue disease", "Dual IV therapy", "Duration by organ"] },
  "integrated-cmv-system": { eyebrow: "Clinical loop", title: "Keep every CMV decision auditable", nodes: ["Prove", "Deliver", "Monitor", "Reassess"], notes: ["Host and organ", "Target and exposure", "Toxicity and response", "Resistance and recovery"] },
};

export default function CytomegalovirusPharmacotherapyVisual({ type }) {
  const data = diagrams[type.replace("cmv-pharmacotherapy-", "")];
  if (!data) return null;

  return (
    <figure className="chol-visual cmv-pharmacotherapy-visual" aria-label={data.title}>
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
