export const brcaRepeatabilityRelease = {
  slug: "pam50-technical-repeatability",
  title: "Technical-repeat sensitivity of fixed-reference PAM50 subtyping",
  shortTitle: "PAM50 technical repeatability",
  type: "Research Report",
  area: "Computational Oncology",
  date: "September 11, 2026",
  dateISO: "2026-09-11",
  version: "1.0.0",
  authors: ["Dalron J. Robertson"],
  affiliation: "NaS Research",
  readTime: "10 min read",
  pdfUrl: "/research/papers/nas-brca-002-pam50-repeatability.pdf",
  reproducibilityUrl: "/research/nas-brca-002/reproducibility.zip",
  reviewState:
    "NAS-BRCA-002 · Internally reviewed with AI assistance · Not peer reviewed · Not for clinical use",
  abstract:
    "A public-data computational study of whether one frozen PAM50 method returns the same breast-cancer subtype label for repeated measurements linked to the same reported tumor RNA source.",
  summary:
    "The frozen method returned matching subtype labels for 131 of 136 registered GSE96058 technical-repeat pairs (96.32%; 95% Wilson interval 91.68%-98.42%). Agreement was 83 of 87 in the prespecified HR-positive/HER2-negative subgroup, 5 of 5 in a small post-result-preregistered TCGA-BRCA check, and 13 of 16 in a preregistered E-TABM-576 cross-platform sensitivity analysis. These separate results measure source-bound repeatability. They do not establish biological truth, clinical accuracy, a population agreement rate, or a cause for differences between datasets.",
  sections: [
    {
      id: "question-and-design",
      title: "Question and design",
      paragraphs: [
        "When two public RNA measurements come from the same reported breast-cancer RNA source, does one frozen PAM50 computer method give them the same subtype label? The study tests repeatability, not whether either label is biologically correct.",
        "All 136 linked GSE96058 pairs were the primary analysis. The 87 HR-positive/HER2-negative pairs were a prespecified secondary analysis. A five-pair TCGA-BRCA check was registered after the original result but before molecular access. E-TABM-576 supplied a separately preregistered 16-pair cross-platform sensitivity analysis. Every registered pair remained in its attempted denominator.",
      ],
    },
    {
      id: "results",
      title: "Repeat-agreement results",
      paragraphs: [
        "Agreement was high but not perfect in the primary dataset. The TCGA-BRCA result is encouraging but highly uncertain because it contains only five pairs. The E-TABM-576 point estimate is numerically lower, but the datasets were not pooled and no between-source difference test was planned or performed.",
      ],
      resultsTableCaption:
        "Separate attempted-pair agreement estimates with two-sided 95% Wilson intervals; cohorts were not pooled.",
      resultsTable: [
        ["Cohort", "Matching / attempted", "Agreement", "95% Wilson interval"],
        ["GSE96058 primary", "131 / 136", "96.32%", "91.68%-98.42%"],
        ["GSE96058 HR+/HER2-", "83 / 87", "95.40%", "88.77%-98.20%"],
        ["TCGA-BRCA external check", "5 / 5", "100.00%", "56.55%-100.00%"],
        ["E-TABM-576 sensitivity", "13 / 16", "81.25%", "56.99%-93.41%"],
      ],
      figures: [
        {
          src: "/research/nas-brca-002/figure-1-agreement.png",
          height: 1181,
          alt: "Four separate technical-repeat agreement estimates with 95 percent Wilson intervals",
          caption:
            "Figure 1. Separate attempted-pair estimates. The five-pair TCGA-BRCA and 16-pair E-TABM-576 intervals are wide. No population rate or clinical claim is made.",
        },
      ],
    },
    {
      id: "cross-platform-sensitivity",
      title: "Cross-platform sensitivity",
      paragraphs: [
        "All 16 registered E-TABM-576 primary pairs were valid. Thirteen retained their labels and three did not, for 81.25% agreement with a 56.99%-93.41% Wilson interval. The median within-pair centered-profile Spearman correlation was 0.619.",
        "A secondary 31-of-39 result reuses profiles and is dependent. Participant-level nonoverlap with GSE96058 was not identifier-verified. Platform, processing, reference, cohort, preservation, and other differences remain entangled, so this analysis does not identify a cause for the lower numerical estimate.",
      ],
    },
    {
      id: "frozen-method",
      title: "Frozen method",
      paragraphs: [
        "GSE96058 and TCGA-BRCA used a fixed 50-gene panel, an immutable GSE81538 reference, five fixed PAM50 centroids, and Spearman correlation without cohort centering. E-TABM-576 used the preregistered 59-reporter collapse and gene-wise centering against 112 singleton profiles before the same fixed-centroid correlation.",
        "No imputation, outcome-guided adaptation, post-result threshold, or pair exclusion was allowed. Complete executions had to be byte-identical. A first TCGA implementation attempt mishandled two exact log2(0.1) boundary values; that provisional output was rejected, disclosed, and never interpreted. The accepted run applied only the tolerance frozen before molecular access.",
      ],
      figures: [
        {
          src: "/research/nas-brca-002/pam50-method-v2.webp",
          height: 1181,
          alt: "Microscopy-informed conceptual cutaway of a breast-cancer cell showing its nucleus, chromatin, organelles, and single-stranded RNA transcripts",
          caption:
            "Conceptual gene-expression artwork. The cell, nucleus, and single-stranded RNA transcripts provide biological context for measuring a fixed 50-gene expression panel. The strands do not identify particular genes or encode measured values. This is not patient tissue, a microscopy result, a literal PAM50 molecule, a data plot, or an additional study result.",
        },
      ],
    },
    {
      id: "score-margins",
      title: "Score margins",
      paragraphs: [
        "The few nonmatching GSE96058 pairs had smaller winning-versus-runner-up score margins than matching pairs. This is descriptive: only five primary and four secondary pairs were nonmatching, no group test was planned, and no reliability cutoff was selected.",
      ],
      figures: [
        {
          src: "/research/nas-brca-002/figure-2-margins.png",
          height: 1181,
          alt: "Median smaller PAM50 subtype-score margin for matching and nonmatching repeat pairs",
          caption:
            "Figure 2. Median smaller subtype-score margins by repeat-label state. Sparse nonmatching groups do not define a reliability threshold.",
        },
      ],
    },
    {
      id: "interpretation-and-limits",
      title: "Interpretation and limits",
      paragraphs: [
        "The evidence supports a narrow source-bound repeatability conclusion: this frozen implementation usually retained its label across the registered repeats, with lower agreement in the separate microarray sensitivity analysis. Search completeness is not claimed, and no larger eligible unchanged-method repeat dataset has been identified.",
        "Technical-repeat agreement cannot identify biological truth or establish diagnostic, prognostic, predictive, treatment, clinical-utility, or general transportability validity. The study did not inspect clinical outcomes, fit a clinical model, choose a patient threshold, or test treatment benefit. The report is not clinical guidance.",
      ],
    },
    {
      id: "reproducibility-and-review",
      title: "Reproducibility and open review",
      paragraphs: [
        "The downloadable package contains the versioned manuscript, checksum receipts, review records, numerical-incident record, search refresh, exact figure and paper builder, and shared NaS renderer and palette. It excludes raw molecular data, identifiers, credentials, outcomes, and controlled records.",
        "NaS performed an AI-assisted internal release audit covering the calculations, methods, provenance, claim boundaries, citations, and every rendered PDF page. That audit is not independent scientific review or journal peer review. Publication begins open post-publication review; substantive corrections will produce a preserved, versioned successor rather than silently replacing this edition.",
      ],
    },
  ],
  sourcesIntro:
    "Dataset records, the original PAM50 description, published repeatability context, and the release manifest are linked below.",
  sources: [
    {
      title: "[1] GSE96058 - NCBI Gene Expression Omnibus",
      url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE96058",
    },
    {
      title: "[2] TCGA-BRCA - NCI Genomic Data Commons",
      url: "https://portal.gdc.cancer.gov/projects/TCGA-BRCA",
    },
    {
      title: "[3] E-TABM-576 - EMBL-EBI BioStudies",
      url: "https://www.ebi.ac.uk/biostudies/arrayexpress/studies/E-TABM-576",
    },
    {
      title: "[4] Parker et al. (2009). Original PAM50 description.",
      url: "https://pubmed.ncbi.nlm.nih.gov/19204204/",
    },
    {
      title: "[5] Published PAM50 repeatability context (2023).",
      url: "https://pubmed.ncbi.nlm.nih.gov/36892725/",
    },
    {
      title: "[6] NAS-BRCA-002 public release manifest",
      url: "/research/nas-brca-002/manifest.json",
    },
  ],
  publicationNote:
    "Public report v1.0.0, published September 11, 2026. The PDF and checksum-bound reproducibility package are the fixed version of record. Candidate review papers v0.4.0, v0.5.0, and v0.5.1 remain preserved and were not public editions. This report is internally reviewed with AI assistance, not independently reviewed or peer reviewed, and not for clinical use.",
  collaboration: {
    eyebrow: "Open review",
    title: "Inspect, reproduce, or challenge the work.",
    body: "Public posting begins outside review. We welcome specific feedback on the frozen method, data provenance, calculations, interpretation boundaries, or reproducibility package.",
    href: "/contact",
    label: "Send research feedback",
  },
};
