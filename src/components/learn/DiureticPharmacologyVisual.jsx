const diagrams = {
  "diuretic-nephron-map": { eyebrow: "Nephron transport", title: "Site determines capacity, electrolyte pattern, and response.", accent: "#77a4bb", columns: [["Proximal tubule", "Carbonic anhydrase + osmoles", "Bicarbonate and water handling"], ["Thick ascending limb", "NKCC2", "High-capacity salt and divalent cation effects"], ["Distal convoluted tubule", "NCC", "Moderate sodium loss and calcium retention"], ["Collecting duct", "ENaC + aldosterone", "Potassium and acid secretion"]] },
  "diuretic-loop": { eyebrow: "Loop diuretics", title: "Block NKCC2 where salt transport capacity is high.", accent: "#c47d68", columns: [["Transport", "NKCC2 inhibition", "Na, K, and Cl reabsorption fall"], ["Medullary gradient", "Diluting segment disrupted", "Water excretion changes"], ["Minerals", "Lumen-positive voltage falls", "Calcium and magnesium losses rise"], ["Safety", "Volume + electrolytes + hearing", "Dose, rate, kidney function, interactions"]] },
  "diuretic-thiazide": { eyebrow: "Thiazide-like therapy", title: "Block NCC and build a longer blood-pressure strategy.", accent: "#c3a165", columns: [["Transport", "NCC inhibition", "Distal sodium delivery rises"], ["Potassium", "Collecting-duct secretion", "Hypokalemic alkalosis risk"], ["Calcium", "Urinary loss falls", "Distinct from loop effect"], ["Metabolic", "Glucose + urate + sodium", "Monitor patient-specific risk"]] },
  "diuretic-potassium": { eyebrow: "Collecting duct", title: "Preserve potassium by reducing ENaC-driven secretion.", accent: "#8ba679", columns: [["Spironolactone", "Mineralocorticoid receptor", "Slow genomic antagonism"], ["Eplerenone", "More selective receptor profile", "CYP3A exposure matters"], ["Amiloride", "ENaC block", "Direct luminal action"], ["Safety", "Hyperkalemia + acidosis", "Kidney function and regimen burden"]] },
  "diuretic-other": { eyebrow: "Specialized diuresis", title: "Not every water-removing drug is a natriuretic.", accent: "#9a8ab9", columns: [["Acetazolamide", "Carbonic anhydrase", "Bicarbonaturia and acidosis"], ["Mannitol", "Filtered osmole", "Compartment shifts before excretion"], ["Tolvaptan", "V2 antagonism", "Electrolyte-free water excretion"], ["SGLT2 inhibition", "Proximal glucose and sodium", "Modest natriuresis within broader outcomes"]] },
  "diuretic-integration": { eyebrow: "Response and resistance", title: "Measure congestion, delivery, intake, and compensation.", accent: "#c98b78", columns: [["Deliver", "Absorption + secretion", "Drug must reach the tubular lumen"], ["Respond", "Urine sodium + output", "Early objective effect"], ["Compensate", "RAAS + distal hypertrophy", "Post-diuretic retention and resistance"], ["Protect", "Weight + pressure + labs", "Perfusion and electrolyte safety"]] },
};

export default function DiureticPharmacologyVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
