const diagrams = {
  "asthma-diagnosis": { accent: "#8aa5b7", eyebrow: "Diagnostic logic", title: "Pattern, variability, confirmation, and phenotype", columns: [["Pattern", "Variable symptoms", "Wheeze, dyspnea, tightness, or cough change over time"], ["Prove", "Variable airflow", "Spirometry, peak flow, treatment response, or challenge"], ["Describe", "Traits and mimics", "Type 2 signals, exposure, occupation, and competing disease"]] },
  "asthma-risk": { accent: "#c79a77", eyebrow: "Longitudinal control", title: "Measure impairment and future danger separately", columns: [["Now", "Symptom control", "Day, night, activity, and reliever use over four weeks"], ["Next", "Future risk", "Prior attacks, low airflow, SABA exposure, and inadequate ICS"], ["Verify", "Implementation", "Access, adherence, technique, exposure, and comorbidity"]] },
  "asthma-pharmacology": { accent: "#8da68a", eyebrow: "Airway pharmacology", title: "Relieve smooth muscle and control inflammation", columns: [["Relax", "Beta2 agonism", "Rapid cyclic AMP signaling reverses bronchoconstriction"], ["Control", "Inhaled steroid", "Repeated airway exposure suppresses inflammatory signaling"], ["Deliver", "Device and technique", "Flow, coordination, spacer, access, and preference shape dose"]] },
  "asthma-strategy": { accent: "#c9a45f", eyebrow: "Controller and reliever", title: "Every pathway preserves inhaled corticosteroid exposure", columns: [["Track 1", "ICS-formoterol", "AIR-only for Steps 1 and 2, MART for Steps 3 through 5"], ["Track 2", "ICS-containing alternative", "ICS-SABA or daily ICS-containing control plus reliever"], ["Context", "Guideline and label", "Match evidence to product, age, device, jurisdiction, and limit"]] },
  "asthma-severe": { accent: "#a78da8", eyebrow: "Advanced disease", title: "Optimize first, phenotype second, target third", columns: [["Confirm", "Difficult to treat", "Diagnosis, technique, adherence, access, exposure, and comorbidity"], ["Profile", "Treatable traits", "Allergy, eosinophils, FeNO, polyps, dermatitis, and steroid burden"], ["Target", "Biologic pathway", "IgE, IL-5, IL-4R alpha, or TSLP with response audit"]] },
  "asthma-acute": { accent: "#c56f62", eyebrow: "Acute pathway", title: "Assess, reverse, suppress, reassess, and prevent", columns: [["Triage", "Severity and failure", "Speech, effort, oxygen, airflow, mental status, and quiet chest"], ["Treat", "Airflow and inflammation", "Rapid bronchodilator, selected ipratropium, oxygen, and steroid"], ["Close", "Prevention loop", "ICS-containing regimen, technique, action plan, and early follow-up"]] },
};

export default function AsthmaVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, mechanism, explanation], index) => <div key={name}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{mechanism}</em><p>{explanation}</p>
    </div>)}</div>
  </figure>;
}
