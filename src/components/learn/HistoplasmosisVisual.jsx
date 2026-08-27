const palettes = {
  "exposure-biology": ["Spores", "Lung", "Macrophage", "Yeast"],
  "syndromes-severity": ["Pulmonary", "Disseminated", "CNS", "Shock"],
  "diagnosis": ["Urine antigen", "Serum antigen", "Culture", "Tissue"],
  "severe-treatment": ["L-AmB 3 mg/kg", "At least 2 weeks", "Clinical improvement", "Itraconazole"],
  "cns-treatment": ["L-AmB 5 mg/kg", "4 to 6 weeks", "CSF response", "At least 12 months"],
  "itraconazole-system": ["Load", "Formulation", "TDM", "Interactions"],
  "monitoring-response": ["Kidney", "Electrolytes", "Liver", "Antigen"],
  "art-suppression": ["ART", "CD4", "HIV RNA", "Stop criteria"],
  "pulmonary-special": ["Observe", "Treat", "Pregnancy", "Immune risk"],
  "integrated-case": ["Syndrome", "Severity", "Exposure", "Follow-through"],
};

const copy = {
  "exposure-biology": ["From environment to macrophage", "Inhaled microconidia convert to intracellular yeast. Cell-mediated immunity determines whether infection is contained or disseminates."],
  "syndromes-severity": ["One organism, several clinical systems", "Separate self-limited pulmonary illness from progressive pulmonary, disseminated, shock, and CNS disease."],
  diagnosis: ["Build evidence across compartments", "Antigen provides speed. Culture and pathology provide organism evidence. Site-specific sampling defines reach."],
  "severe-treatment": ["Induce, stabilize, then transition", "Severe dissemination begins with exact-formulation amphotericin and changes to itraconazole only after improvement."],
  "cns-treatment": ["The CNS has its own regimen", "Higher-dose, longer amphotericin induction precedes prolonged azole therapy and documented CSF recovery."],
  "itraconazole-system": ["Exposure is designed, not assumed", "Product, food, gastric acidity, interactions, loading, adherence, and drug levels determine effective exposure."],
  "monitoring-response": ["Track toxicity and fungal control together", "Renal and electrolyte injury can emerge during induction while liver, cardiac, interaction, and exposure risks dominate the azole phase."],
  "art-suppression": ["Restore immunity without losing antifungal control", "Coordinate ART early, maintain suppression when indicated, and stop only when every microbiologic and immune criterion is met."],
  "pulmonary-special": ["Not every pulmonary infection needs the same course", "Duration, progression, immune status, pregnancy, and treatment harm determine observation or itraconazole."],
  "integrated-case": ["Make every transition explicit", "A closed-loop plan connects syndrome, severity, product, drug exposure, organ recovery, antigen, ART, and relapse prevention."],
};

export const histoplasmosisVisualTypes = Object.keys(palettes).map((key) => `histoplasmosis-${key}`);

export default function HistoplasmosisVisual({ type }) {
  const key = type.replace("histoplasmosis-", "");
  const labels = palettes[key] || palettes["integrated-case"];
  const [title, description] = copy[key] || copy["integrated-case"];
  return (
    <figure className="chol-visual histo-visual" aria-label={title}>
      <div className="chol-visual__copy">
        <span>Clinical system</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="chol-visual__stage" aria-hidden="true">
        <svg viewBox="0 0 620 300" role="img">
          <defs>
            <radialGradient id={`histo-${key}`} cx="48%" cy="44%" r="58%">
              <stop offset="0" stopColor="#e8c58c" stopOpacity=".9" />
              <stop offset=".55" stopColor="#9e6437" stopOpacity=".55" />
              <stop offset="1" stopColor="#28180f" stopOpacity=".06" />
            </radialGradient>
          </defs>
          <path d="M70 150 C145 35 270 34 310 150 C350 266 475 265 550 150" fill="none" stroke="#d0a465" strokeOpacity=".32" />
          <path d="M70 150 C145 265 270 266 310 150 C350 34 475 35 550 150" fill="none" stroke="#d0a465" strokeOpacity=".17" />
          <circle cx="310" cy="150" r="96" fill={`url(#histo-${key})`} stroke="#d0a465" strokeOpacity=".38" />
          {[0, 1, 2, 3].map((index) => {
            const points = [[116, 72], [504, 72], [116, 228], [504, 228]];
            const [x, y] = points[index];
            return <g key={labels[index]}><circle cx={x} cy={y} r="7" fill={index === 0 ? "#e7bd7d" : "#9e6437"} /><line x1={x} y1={y} x2={310} y2={150} stroke="#d0a465" strokeOpacity=".28" /><text x={x} y={y + (y < 150 ? -18 : 28)} textAnchor="middle" fill="#f3eee6" fontSize="15">{labels[index]}</text></g>;
          })}
          <g fill="#f2d7ad" opacity=".85">
            <circle cx="284" cy="131" r="8" /><circle cx="314" cy="143" r="11" /><circle cx="337" cy="122" r="6" /><circle cx="329" cy="171" r="9" /><circle cx="286" cy="177" r="6" />
          </g>
        </svg>
      </div>
    </figure>
  );
}
