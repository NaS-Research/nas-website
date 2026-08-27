export const nucleosideReverseTranscriptaseInhibitorVisualTypes = [
  "nrti-medicinal-chemistry",
  "nrti-activation-mechanism",
  "nrti-resistance-backbone",
  "tenofovir-prodrug-pharmacology",
  "tdf-administration-safety",
  "taf-use-tradeoffs",
  "lamivudine-emtricitabine",
  "hbv-hiv-coinfection",
  "abacavir-hypersensitivity",
  "zidovudine-legacy-nrtis",
  "nrti-mitochondrial-toxicity",
  "nrti-selection-monitoring",
].map((type) => `nrti-${type}`);

const diagrams = {
  "nrti-medicinal-chemistry": { eyebrow: "Medicinal chemistry", title: "Follow scaffold to interrupted synthesis", nodes: ["Mimic", "Activate", "Incorporate", "Terminate"], notes: ["Nucleoside or nucleotide", "Phosphate state", "RT substrate site", "No productive extension"] },
  "nrti-activation-mechanism": { eyebrow: "Intracellular mechanism", title: "Build the active inhibitor", nodes: ["Enter", "Phosphorylate", "Compete", "Stop DNA"], notes: ["Parent or prodrug", "Host enzymes", "Natural substrate", "Chain termination"] },
  "nrti-resistance-backbone": { eyebrow: "Backbone integrity", title: "Preserve complete activity", nodes: ["History", "Mutations", "Active pair", "Anchor"], notes: ["All prior exposure", "M184V, K65R, TAMs", "Verified NRTIs", "Complete regimen"] },
  "tenofovir-prodrug-pharmacology": { eyebrow: "Prodrug delivery", title: "Compare exposure compartments", nodes: ["TDF", "Plasma TFV", "TAF", "Cellular TFV-DP"], notes: ["Earlier release", "Higher exposure", "Greater stability", "Efficient delivery"] },
  "tdf-administration-safety": { eyebrow: "Renal bone pathway", title: "Detect proximal injury early", nodes: ["Exposure", "Tubule", "Solute loss", "Bone"], notes: ["Plasma tenofovir", "Cell injury", "Phosphate and glucose", "BMD and symptoms"] },
  "taf-use-tradeoffs": { eyebrow: "Comparative selection", title: "Balance every tradeoff", nodes: ["Kidney", "Bone", "Lipids", "Product"], notes: ["Usually improved", "Usually improved", "Often higher than TDF", "Booster and label"] },
  "lamivudine-emtricitabine": { eyebrow: "Cytidine analogs", title: "Use as alternatives, not partners", nodes: ["3TC", "FTC", "Shared RT target", "Product rules"], notes: ["HIV and HBV", "HIV and HBV", "Overlapping resistance", "Renal and dose"] },
  "hbv-hiv-coinfection": { eyebrow: "Dual-virus care", title: "Protect both treatment plans", nodes: ["Screen", "Dual activity", "Complete ART", "Safe change"], notes: ["HBV status", "TFV plus 3TC or FTC", "Suppress HIV", "Prevent flare"] },
  "abacavir-hypersensitivity": { eyebrow: "Preventable harm", title: "Never create the second exposure", nodes: ["Test", "Recognize", "Stop", "Never restart"], notes: ["HLA-B*5701", "Multisystem pattern", "When suspected", "Permanent record"] },
  "zidovudine-legacy-nrtis": { eyebrow: "Treatment history", title: "Read legacy toxicity forward", nodes: ["ZDV", "ddI", "d4T", "Current options"], notes: ["Marrow and muscle", "Pancreas and nerves", "Fat and nerves", "Safer backbones"] },
  "nrti-mitochondrial-toxicity": { eyebrow: "Host off-target", title: "Connect the systemic syndrome", nodes: ["Polymerase gamma", "Low ATP", "Lactate", "Organ injury"], notes: ["Mitochondrial DNA", "Oxidative failure", "Acid burden", "Liver, muscle, nerve"] },
  "nrti-selection-monitoring": { eyebrow: "Clinical synthesis", title: "Choose, monitor, and preserve", nodes: ["Virus", "Person", "Product", "Follow-up"], notes: ["Resistance and HBV", "Organ and reproductive", "Label and access", "Response and safety"] },
};

export default function NucleosideReverseTranscriptaseInhibitorVisual({ type }) {
  const data = diagrams[type.replace("nrti-", "")];
  if (!data) return null;

  return (
    <figure className="chol-visual nrti-visual" aria-label={data.title}>
      <figcaption>
        <span>{data.eyebrow}</span>
        <strong>{data.title}</strong>
      </figcaption>
      <div className="chol-visual__grid">
        {data.nodes.map((label, index) => (
          <div key={`${label}-${index}`}>
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
