export const cryptococcalMeningitisVisualTypes = ["biology-presentation", "diagnosis-antigenemia", "induction-pharmacology", "intracranial-pressure", "response-consolidation", "maintenance-art", "safety-interactions", "special-sites", "integrated-case"].map((type) => `cryptococcal-meningitis-${type}`);
const diagrams = {
  "biology-presentation": ["Inhaled yeast", "Advanced immune loss", "CNS dissemination", "Subacute meningitis"],
  "diagnosis-antigenemia": ["Serum CrAg", "Lumbar puncture", "Opening pressure", "CSF culture"],
  "induction-pharmacology": ["Liposomal amphotericin", "Flucytosine", "Fungal killing", "Toxicity control"],
  "intracranial-pressure": ["Measure", "Drain", "Recheck", "Escalate diversion"],
  "response-consolidation": ["Induce", "Prove sterility", "Fluconazole 800 mg", "Consolidate 8 weeks"],
  "maintenance-art": ["Fluconazole 200 mg", "Delay ART 4 to 6 weeks", "Restore immunity", "Stop after criteria"],
  "safety-interactions": ["Kidney", "Electrolytes", "Marrow", "CYP and QT"],
  "special-sites": ["CNS", "Disseminated", "Pulmonary", "Antigenemia"],
  "integrated-case": ["Kill fungus", "Control pressure", "Stage therapy", "Restore host control"],
};
export default function CryptococcalMeningitisVisual({ type }) { const nodes = diagrams[type.replace("cryptococcal-meningitis-", "")]; if (!nodes) return null; return <figure className="chol-visual cryptococcal-meningitis-visual" aria-label="Cryptococcal meningitis pathway"><figcaption><span>Fungal CNS pathway</span><strong>{nodes[0]} to {nodes[3]}</strong></figcaption><div className="chol-visual__grid">{nodes.map((label, index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{index < 3 ? "Carry evidence forward" : "Own the clinical action"}</em><p>{index < 3 ? "The next decision depends on this step." : "Document the response."}</p></div>)}</div></figure>; }
