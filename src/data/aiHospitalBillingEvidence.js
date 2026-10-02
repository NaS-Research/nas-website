// Reported values and explicit calculations for the article's figures.
// Financial totals cover the Blue System; cohort comparisons cover bowel procedures.
export const aiHospitalBillingEvidence = {
  spending: {
    totalMillions: 942,
    secondaryDiagnosisMillions: 653,
    baseline: "2023",
    period: "Two years against the 2023 baseline",
    scope: "Blue System inpatient claims",
    sourceUrl: "https://www.bcbs.com/media/pdf/BCBSA-AI-Coding-Intensity-Whitepaper.pdf",
    sourcePages: "1",
  },
  cohort: {
    period: "2025",
    scope: "Major bowel procedures (DRGs 329-331)",
    group: "Top quartile of coding growth",
    comparison: "Other hospitals",
    sourceUrl: "https://www.bcbs.com/media/pdf/BCBSA-AI-Coding-Intensity-Whitepaper.pdf",
    sourcePages: "3",
    measures: [
      { key: "complex", label: "Stays coded as complex", chartLabel: "Complex coding", unit: "%", top: 75.6, other: 65.0 },
      { key: "icu", label: "ICU use", chartLabel: "ICU use", unit: "%", top: 11.5, other: 13.2 },
      { key: "transfusion", label: "Transfusion", chartLabel: "Transfusion", unit: "%", top: 3.6, other: 3.9 },
      { key: "reoperation", label: "Reoperation", chartLabel: "Reoperation", unit: "%", top: 1.7, other: 1.5 },
      { key: "stay", label: "Median hospital stay", chartLabel: "Median stay", unit: "days", top: 4.0, other: 4.0 },
    ],
  },
  workflow: {
    title: "One evidence standard for both sides",
    subtitle: "NaS's proposed review process",
    inputs: [
      { title: "Hospital claim", detail: ["Diagnosis or code", "Clinical support"] },
      { title: "Insurer concern", detail: ["Disputed point", "Policy and reason"] },
    ],
    stages: [
      { title: "Evidence review", detail: ["Clinical record and applicable rules", "Missing or conflicting information", "Qualified reviewer and reasoning"] },
      { title: "Reasoned decision", detail: ["Support, clarification, or challenge", "Explain payment and patient impact"] },
      { title: "Correction and appeal", detail: ["Retain evidence, decision, outcome"] },
    ],
  },
};

const formatValue = (value, unit) => `${value.toFixed(1)}${unit === "%" ? "%" : ` ${unit}`}`;

export const aiHospitalBillingCohortTable = [
  ["Measure", aiHospitalBillingEvidence.cohort.group, aiHospitalBillingEvidence.cohort.comparison],
  ...aiHospitalBillingEvidence.cohort.measures.map(({ label, top, other, unit }) => [label, formatValue(top, unit), formatValue(other, unit)]),
];
