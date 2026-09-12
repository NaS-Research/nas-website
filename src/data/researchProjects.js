export const researchProjects = [
  {
    slug: "nas-brca-001",
    id: "NAS-BRCA-001",
    title: "Qualifying NaS Core Through a TCGA-BRCA Survival Study",
    shortTitle: "TCGA-BRCA Survival Qualification",
    area: "Oncology",
    role: "Platform qualification",
    status: "Pre-publication review",
    statusDetail:
      "A governed analysis run has been completed. Findings remain withheld while the results and release record are reviewed.",
    updatedDate: "July 26, 2026",
    updatedDateISO: "2026-07-26",
    video: "/assets/videos/Coding.mp4",
    description:
      "A governed study using public TCGA-BRCA clinical data to test whether NaS Core can preserve provenance, enforce analysis gates, reproduce established evidence, and retain limitations from question through release.",
    question:
      "Can NaS reproducibly recover the established association between advanced pathologic stage and poorer overall survival using governed public TCGA-BRCA clinical data?",
    summary:
      "This is a qualification study, not a search for a new clinical claim. It asks whether the NaS research system can execute a prespecified analysis honestly and reproducibly before we rely on that system for discovery work.",
    facts: [
      { label: "Study role", value: "Platform qualification" },
      { label: "Design", value: "Retrospective observational analysis" },
      { label: "Data", value: "Public TCGA-BRCA clinical data" },
      { label: "Protocol", value: "Preregistered, version 1.1.0" },
    ],
    sections: [
      {
        id: "purpose",
        eyebrow: "Purpose",
        title: "The system must earn our confidence.",
        paragraphs: [
          "Before NaS Core supports a novel discovery study, it must demonstrate that it can carry a scientific question through governed data access, deterministic cohort construction, prespecified analysis, diagnostics, review, and release.",
          "NAS-BRCA-001 uses a well-established relationship as a demanding systems test. The scientific direction is known. The challenge is whether the complete research record remains traceable, reproducible, and honest when the analysis encounters missing data, exclusions, warnings, or failed assumptions.",
        ],
      },
      {
        id: "design",
        eyebrow: "Study design",
        title: "A prespecified survival analysis using open clinical data.",
        paragraphs: [
          "The study is a retrospective secondary analysis of adults in the Genomic Data Commons TCGA-BRCA project. It requests open clinical fields only. No controlled genomic files are used.",
          "The primary comparison groups pathologic stages I and II as early stage, and stages III and IV as advanced stage. Overall survival is derived from death or the last documented follow-up. Age at diagnosis is the prespecified covariate.",
        ],
        bullets: [
          "Primary model: age-adjusted Cox proportional hazards regression.",
          "Primary estimand: adjusted hazard ratio for advanced versus early stage with a 95 percent confidence interval.",
          "Supporting analyses: Kaplan-Meier estimates, log-rank testing, categorical stage analysis, and five prespecified sensitivity analyses.",
          "Missing-data strategy: complete-case analysis with no imputation and a retained exclusion record.",
        ],
      },
      {
        id: "gates",
        eyebrow: "Analysis gates",
        title: "A model result is not automatically an interpretable result.",
        paragraphs: [
          "The analysis is required to test proportional hazards, examine the functional form of age, identify influential observations, retain convergence warnings, and report the number of participants and deaths in each exposure group.",
          "The primary estimate cannot be interpreted if either group has fewer than ten deaths, the model fails to converge, or the stage coefficient cannot be estimated. Prespecified sensitivity analyses remain part of the record even when they weaken, contradict, or complicate the primary result.",
        ],
      },
      {
        id: "provenance",
        eyebrow: "Reproducibility",
        title: "Every material step is bound to a versioned record.",
        paragraphs: [
          "The workflow verifies source manifests and checksums before cohort construction. It records the selected diagnosis, original stage value, survival fields, exclusions, code revision, environment, parameters, and hashes for generated artifacts.",
          "Outcome-bearing artifacts remain outside the code repository in controlled external storage. The public website will not expose numerical results until the review and release gates are complete.",
        ],
      },
      {
        id: "limitations",
        eyebrow: "Limitations",
        title: "What this study cannot establish.",
        paragraphs: [
          "This retrospective observational analysis cannot establish that stage causes mortality. TCGA recruitment, treatment era, eligibility, and follow-up can limit generalizability. Overall survival does not distinguish breast cancer death from death due to other causes.",
          "The early-versus-advanced contrast simplifies disease stage, AJCC staging editions can differ across participants, and excluding records with unusable or zero-day survival can introduce additional limitations. These constraints remain part of the final interpretation.",
        ],
      },
    ],
    releaseNote:
      "No scientific finding or numerical result from NAS-BRCA-001 is published on this page. The project will enter the research library only after its results, limitations, and immutable release record complete review.",
  },
  {
    slug: "nas-brca-002",
    id: "NAS-BRCA-002",
    title: "Technical-Repeat Sensitivity of Fixed-Reference PAM50 Subtyping",
    shortTitle: "PAM50 Technical Repeatability",
    area: "Breast cancer research",
    role: "Computational repeatability study",
    status: "Public report v1.0.0 · Open review",
    statusDetail:
      "The computational analysis and versioned public report are complete. The methods, results, and reproducibility package are open for public review. The report is not for clinical use.",
    updatedDate: "September 11, 2026",
    updatedDateISO: "2026-09-11",
    video: "/assets/videos/Coding.mp4",
    description:
      "A public-data computational study of whether one frozen PAM50 method returns the same subtype label for repeated measurements linked to the same reported breast-tumor RNA source.",
    question:
      "When two public RNA measurements come from the same reported breast-cancer RNA source, does one frozen PAM50 computer method give them the same subtype label?",
    summary:
      "NAS-BRCA-002 measures source-bound technical repeatability, not biological or clinical truth. It preserves every registered pair, uses frozen methods, reports uncertainty, and keeps RNA-seq and microarray results separate.",
    facts: [
      { label: "Primary analysis", value: "GSE96058 · 136 pairs" },
      { label: "Prespecified subgroup", value: "HR+/HER2- · 87 pairs" },
      { label: "External check", value: "TCGA-BRCA · 5 pairs" },
      { label: "Sensitivity analysis", value: "E-TABM-576 · 16 pairs" },
    ],
    sections: [
      {
        id: "design",
        eyebrow: "Study design",
        title: "The same source, measured again.",
        paragraphs: [
          "The study asks a narrow question: when public records describe repeated expression measurements linked to the same tumor RNA source, does one frozen computer method return the same PAM50 subtype label?",
          "All 136 linked GSE96058 pairs were primary. The 87 HR-positive/HER2-negative pairs were secondary. A five-pair TCGA-BRCA check and a 16-pair E-TABM-576 cross-platform sensitivity analysis were registered separately and never pooled with the primary result.",
        ],
      },
      {
        id: "method",
        eyebrow: "Frozen method",
        title: "No outcome-guided changes and no post-result cutoff.",
        paragraphs: [
          "GSE96058 and TCGA-BRCA used the fixed 50-gene panel, immutable GSE81538 reference, five fixed PAM50 centroids, Spearman scoring, and no cohort centering. E-TABM-576 used its preregistered reporter collapse and singleton-profile centering contract before the same fixed-centroid scoring.",
          "Every registered pair stayed in its attempted denominator. The study did not impute missing values, inspect outcomes, adapt the method to results, or select a clinical or reliability threshold.",
        ],
        bullets: [
          "GSE96058 primary: 131 of 136 matching labels, 96.32%.",
          "HR-positive/HER2-negative secondary: 83 of 87, 95.40%.",
          "TCGA-BRCA external check: 5 of 5, with a wide interval.",
          "E-TABM-576 sensitivity: 13 of 16, 81.25%.",
        ],
      },
      {
        id: "interpretation",
        eyebrow: "Interpretation",
        title: "High repeatability in one source, lower in a separate sensitivity analysis.",
        paragraphs: [
          "The primary GSE96058 analysis showed high but imperfect agreement. The E-TABM-576 sensitivity estimate was numerically lower, but no between-source test was planned or performed, and platform, processing, reference, cohort, and preservation differences remain entangled.",
          "The five-pair TCGA-BRCA result retained every label but remains imprecise. Its 95% Wilson interval extends down to 56.55%, so it is an external check rather than a broad validation claim.",
        ],
      },
      {
        id: "reproducibility",
        eyebrow: "Reproducibility",
        title: "The report, code, evidence record, and hashes are public.",
        paragraphs: [
          "The public package contains the versioned manuscript, builders, figures, checksum receipts, audit records, source-bound evidence, and deterministic manifest. It excludes raw molecular data, identifiers, outcomes, credentials, and controlled records.",
          "Three committed builds reproduced the same PDF, manifest, and ZIP bytes. Every PDF page and the website's desktop and mobile layouts were visually inspected before release.",
        ],
      },
      {
        id: "boundaries",
        eyebrow: "Scientific boundaries",
        title: "Repeatability is not biological or clinical truth.",
        paragraphs: [
          "Technical-repeat agreement cannot establish diagnostic accuracy, prognosis, treatment response, clinical utility, biological truth, a population agreement rate, or general transportability.",
          "This is a fully computational, public-data-only study. NaS handled no specimen and accessed no clinical outcome or controlled record. The report is not clinical guidance.",
        ],
      },
    ],
    publicationUrl: "/research/pam50-technical-repeatability",
    releaseHeading: "Public report v1.0.0 is available.",
    releaseNote:
      "NAS-BRCA-002 is published as a computational research report with its methods, results, and reproducibility package open for public review. The fixed PDF and reproducibility package are the version of record; substantive corrections will create a preserved successor rather than silently replacing this edition.",
  },
];

export function getResearchProject(slug) {
  return researchProjects.find((project) => project.slug === slug);
}
