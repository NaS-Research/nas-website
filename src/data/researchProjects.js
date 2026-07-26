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
    title: "Single-Sample PAM50 Reliability and Abstention",
    shortTitle: "PAM50 Reliability and Abstention",
    area: "Breast cancer research",
    role: "Discovery question",
    status: "Question revision and evidence review",
    statusDetail:
      "The revised question remains proposed. Evidence appraisal and bounded metadata feasibility work are underway before any molecular analysis can be authorized.",
    updatedDate: "July 26, 2026",
    updatedDateISO: "2026-07-26",
    video: "/assets/videos/Lab.mp4",
    description:
      "A proposed research procedure for deciding when a single-sample PAM50 subtype result is analysis-ready, unstable, insufficient, or should be withheld through abstention.",
    question:
      "Can a frozen, patient-independent PAM50 procedure preserve input failures, quantify technical reliability, and abstain on unstable results when transported unchanged from TCGA-BRCA to an external cohort?",
    summary:
      "Many research pipelines return a forced subtype label even when the underlying measurement or classification is unstable. This project is examining whether a transparent reliability layer can preserve that uncertainty before a label enters downstream biological research.",
    facts: [
      { label: "Study role", value: "Discovery question" },
      { label: "Current stage", value: "Phase 0 evidence and feasibility" },
      { label: "Discovery source", value: "TCGA-BRCA, if authorized" },
      { label: "External test", value: "GSE96058, if authorized" },
    ],
    sections: [
      {
        id: "problem",
        eyebrow: "The problem",
        title: "A forced label can hide meaningful uncertainty.",
        paragraphs: [
          "PAM50 is widely used in breast cancer research to assign an intrinsic molecular subtype. Some implementations depend on the other samples being analyzed, which means the same tumor can receive a different result when the surrounding cohort changes.",
          "NaS is investigating a stricter research contract. Instead of returning only one subtype, the proposed output would preserve the leading and second centroid scores, their margin, technical repeatability, data-quality state, reliability state, and an explicit reason to abstain when the evidence is insufficient.",
        ],
      },
      {
        id: "scope",
        eyebrow: "Proposed scope",
        title: "One sample at a time, with uncertainty kept visible.",
        paragraphs: [
          "The proposed population is clinically HR-positive and HER2-negative primary invasive breast tumors with interpretable receptor metadata and expression measurements that satisfy locked PAM50 input requirements.",
          "The method would operate on one sample without reference to the other test samples. Gene mappings, transformations, centroids, numerical tolerances, perturbations, quality rules, margin rules, repeatability rules, and abstention logic would be frozen before molecular values or outcomes are analyzed.",
        ],
        bullets: [
          "Report explicit missing-gene, invalid-mapping, and transformation failures.",
          "Estimate the proportion of samples in reliable, unstable, insufficient-data, and abstain states.",
          "Attempt the complete frozen procedure in GSE96058 without tuning it to validation outcomes.",
          "Separate analytical repeatability from biological truth, prognosis, treatment response, and clinical utility.",
        ],
      },
      {
        id: "phase-zero",
        eyebrow: "Phase 0",
        title: "The question is being tested before the classifier.",
        paragraphs: [
          "The initial evidence review found substantial prior work on PAM50 perturbation, uncertainty, and single-sample classification. That overlap required NaS to narrow the question rather than make a premature novelty claim.",
          "The current work asks whether the exact reliability contract, calibration strategy, abstention states, and unchanged cross-platform transport remain scientifically differentiated and defensible. A no-go decision is a valid outcome if prior methods already resolve the question or if thresholds cannot be justified without using outcomes.",
        ],
      },
      {
        id: "feasibility",
        eyebrow: "Data feasibility",
        title: "Availability is not the same as analysis readiness.",
        paragraphs: [
          "Public TCGA-BRCA expression files and processed GSE96058 artifacts are available, but source availability alone does not establish receptor completeness, PAM50 gene coverage, alias resolution, or compatibility with a locked cross-platform transformation.",
          "The governed feasibility audit therefore remains limited to evidence appraisal and bounded metadata checks. Cohort construction, molecular analysis, outcome analysis, classifier execution, and threshold selection are not authorized at the current gate.",
        ],
      },
      {
        id: "boundaries",
        eyebrow: "Scientific boundaries",
        title: "Reliability is not biological or clinical truth.",
        paragraphs: [
          "A repeatable centroid assignment is not necessarily a biologically correct assignment. Cross-platform differences can be confused with biological differences, and retrospective public cohorts cannot establish clinical utility.",
          "This study is designed as a nonclinical research method. It will not direct patient testing, diagnosis, prognosis, or treatment. Any future biological or clinical claim would require a separate study, independent evidence, and its own review and release record.",
        ],
      },
    ],
    releaseNote:
      "NAS-BRCA-002 is not a publication and has produced no authorized molecular or clinical finding. This page describes the governed question and current research boundary only.",
  },
];

export function getResearchProject(slug) {
  return researchProjects.find((project) => project.slug === slug);
}
