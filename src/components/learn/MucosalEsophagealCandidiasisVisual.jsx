const visualData = {
  "ecology-syndrome": ["Colonization", "Oral disease", "Esophageal disease", "Invasive disease"],
  "oral-diagnosis": ["Removable plaque", "Erythema", "Host drivers", "Mimics"],
  "esophageal-diagnosis": ["Odynophagia", "Dysphagia", "Empiric trial", "Endoscopy"],
  "oropharyngeal-treatment": ["Fluconazole", "Miconazole", "Clotrimazole", "Nystatin"],
  "esophageal-treatment": ["Systemic therapy", "14 to 21 days", "Route", "Response"],
  "refractory-disease": ["Exposure", "Species", "Susceptibility", "Alternative cause"],
  "safety-pk": ["Renal", "Liver", "QT", "Interactions"],
  "prevention-art": ["ART", "Driver correction", "No routine prophylaxis", "Suppression review"],
  "pregnancy-populations": ["Trimester", "Topical", "Amphotericin", "Specialist"],
  "integrated-case": ["Compartment", "Host", "Therapy", "Follow-through"],
};

const descriptions = {
  "ecology-syndrome": "Move from commensal ecology to disease only when the tissue compartment and host response support it.",
  "oral-diagnosis": "Oral patterns are visible, but a white lesion is not a diagnosis until the morphology and host fit.",
  "esophageal-diagnosis": "Swallowing pain shifts the problem into a deeper compartment that demands systemic exposure.",
  "oropharyngeal-treatment": "Match systemic or local therapy to severity, host, technique, and adherence.",
  "esophageal-treatment": "Fluconazole is the preferred systemic backbone, with route and alternatives shaped by the patient.",
  "refractory-disease": "Nonresponse is an investigation across organism, exposure, adherence, interaction, and competing diagnosis.",
  "safety-pk": "Useful antifungal exposure sits inside renal, hepatic, electrical, and metabolic constraints.",
  "prevention-art": "Durable prevention comes from immune restoration and driver correction, not universal azole exposure.",
  "pregnancy-populations": "Treatment must protect maternal control while using current trimester and product evidence.",
  "integrated-case": "Close every loop from compartment recognition to response, escalation, and recurrence prevention.",
};

export const mucosalEsophagealCandidiasisVisualTypes = Object.keys(visualData).map((key) => `mucosal-esophageal-candidiasis-${key}`);

export default function MucosalEsophagealCandidiasisVisual({ type }) {
  const key = type.replace("mucosal-esophageal-candidiasis-", "");
  const labels = visualData[key] || visualData["integrated-case"];
  return (
    <figure className="chol-visual candida-visual" aria-label={`Candidiasis visual: ${key.replaceAll("-", " ")}`}>
      <div className="chol-visual__copy">
        <span>Compartment map</span>
        <h3>{key.replaceAll("-", " ")}</h3>
        <p>{descriptions[key] || descriptions["integrated-case"]}</p>
      </div>
      <div className="chol-visual__stage" aria-hidden="true">
        <svg viewBox="0 0 620 300">
          <defs><linearGradient id={`candida-${key}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#efd6ac" /><stop offset="1" stopColor="#8f5a36" /></linearGradient></defs>
          <path d="M310 35 C250 35 222 74 226 112 C230 149 274 160 278 194 C282 224 254 238 250 268 L370 268 C366 238 338 224 342 194 C346 160 390 149 394 112 C398 74 370 35 310 35Z" fill="none" stroke="#c99b61" strokeOpacity=".35" />
          <path d="M310 58 C278 58 264 79 268 103 C272 126 299 137 300 165 L320 165 C321 137 348 126 352 103 C356 79 342 58 310 58Z" fill={`url(#candida-${key})`} fillOpacity=".5" />
          <path d="M306 162 L306 250 M314 162 L314 250" stroke="#e7c48c" strokeOpacity=".65" />
          {labels.map((label, index) => {
            const x = index % 2 === 0 ? 100 : 520;
            const y = index < 2 ? 85 : 220;
            return <g key={label}><line x1={x} y1={y} x2={index % 2 === 0 ? 272 : 348} y2={index < 2 ? 112 : 205} stroke="#c99b61" strokeOpacity=".32" /><circle cx={x} cy={y} r="6" fill={index === 0 ? "#efd6ac" : "#9f6741"} /><text x={x} y={y - 16} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>;
          })}
        </svg>
      </div>
    </figure>
  );
}
