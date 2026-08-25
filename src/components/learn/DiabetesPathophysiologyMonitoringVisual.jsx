const diagrams = {
  "diabetes-physiology": {
    accent: "#d79a72",
    eyebrow: "Glucose network",
    title: "Production, sensing, and disposal move together",
    columns: [
      ["Produce", "Liver and kidney", "Glycogenolysis and gluconeogenesis preserve fuel during fasting"],
      ["Sense", "Islet and gut", "Insulin, glucagon, and incretin signals respond to nutrient state"],
      ["Dispose", "Muscle and adipose", "Uptake, storage, and restrained lipolysis limit circulating glucose"],
    ],
  },
  "diabetes-diagnosis": {
    accent: "#d8b56f",
    eyebrow: "Diagnostic reasoning",
    title: "Measure the glucose state, confirm it, then explain it",
    columns: [
      ["Measure", "Validated laboratory", "A1C, fasting glucose, oral glucose tolerance, or symptomatic random glucose"],
      ["Confirm", "Two abnormal results", "Repeat unless symptoms or crisis make hyperglycemia unequivocal"],
      ["Classify", "Etiology and phenotype", "Tempo, ketosis, antibodies, C-peptide, family history, and exposures"],
    ],
  },
  "diabetes-targets": {
    accent: "#9cae8e",
    eyebrow: "Glycemic goals",
    title: "Balance average exposure, time in range, and safety",
    columns: [
      ["Average", "A1C", "Longer-term glycemic exposure interpreted through red-cell biology"],
      ["Range", "CGM pattern", "Time in range, above range, below range, and variability"],
      ["Safety", "Individual context", "Hypoglycemia, function, burden, comorbidity, and personal priorities"],
    ],
  },
  "diabetes-monitoring": {
    accent: "#78a8b3",
    eyebrow: "Glucose data",
    title: "Capture a reliable signal, read the pattern, then act",
    columns: [
      ["Capture", "BGM and CGM", "Technique, device limits, wear time, and confirmatory testing"],
      ["Read", "AGP sequence", "Review lows first, then range, highs, variability, and repeated timing"],
      ["Act", "One safe change", "Connect the pattern to food, activity, illness, medication, or access"],
    ],
  },
  "diabetes-complications": {
    accent: "#af8aa6",
    eyebrow: "Silent risk",
    title: "Surveillance finds injury before symptoms define it",
    columns: [
      ["Filter", "Kidney", "Pair urinary albumin with estimated filtration and repeat abnormal findings"],
      ["Inspect", "Eye, nerve, and foot", "Use timed retinal review and complete neurologic and vascular examination"],
      ["Protect", "Heart and vessels", "Treat pressure, lipids, tobacco, kidney risk, heart failure, and activity"],
    ],
  },
  "diabetes-longitudinal": {
    accent: "#c87974",
    eyebrow: "Longitudinal safety",
    title: "Detect the low, rescue the person, and redesign the plan",
    columns: [
      ["Detect", "Level and pattern", "Separate alert glucose from clinically significant and assisted events"],
      ["Rescue", "Glucose or glucagon", "Match treatment to consciousness, swallowing safety, and recurrence risk"],
      ["Support", "Life context", "Education, access, cognition, distress, schedule, and trained responders"],
    ],
  },
};

export default function DiabetesPathophysiologyMonitoringVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;

  return (
    <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
      <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
      <div className="chol-visual__grid">
        {diagram.columns.map(([label, mechanism, explanation], index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <em>{mechanism}</em>
            <p>{explanation}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
