import { cvaEvidence } from "./cvaEvidence.mjs";
const root = "/research/nas-cva-001";
const format = value => new Intl.NumberFormat("en-US").format(value);
const percentage = value => (value * 100).toFixed(3);
const definitionNames = {
  T1: "Positive versus benign",
  T1_T2: "Positive versus benign or uncertain",
  T1_T3: "Any cross-band disagreement",
  T4: "Adjacent categories only",
};
const estimates = unit => [
  ["Definition", "Count / eligible denominator", "Fraction", "95% interval"],
  ...cvaEvidence.principal.filter(row => row.unit === unit).map(row => [
    definitionNames[row.definition],
    `${format(row.numerator)} / ${format(row.denominator)}`,
    `${percentage(row.fraction)}%`,
    `${percentage(row.ci_lower)}–${percentage(row.ci_upper)}%`,
  ]),
];
const figureHeights = {"08-cohort-disposition": 948, "01-severity": 1168, "07-condition-distribution": 2204, "03-evaluation-age": 1132, "05-review-status": 948, "06-concentration": 1324, "02-gene-observed-expected": 1805, "04-persistence": 1613};
const figure = (name, alt, caption, afterParagraph) => ({
  src: `${root}/web-figures/${name}.svg`, alt, caption, height: figureHeights[name],
  ...(afterParagraph === undefined ? {} : { afterParagraph }),
});
export const cvaRelease = {
  slug: "clinvar-conflict-atlas",
  title: "The ClinVar Conflict Atlas",
  shortTitle: "The ClinVar Conflict Atlas",
  type: "Publications", area: "Genomics",
  date: "October 10, 2026", dateISO: "2026-10-10",
  version: "1.0.2", pdfVersion: "1.0.1",
  updatedDate: "October 10, 2026", updatedDateISO: "2026-10-10",
  revisionHistory: [{ version: "1.0.1", dateISO: "2026-10-10", note: "Initial public web edition." }],
  revisionNote: "Presentation update: cover artwork loops automatically without play/pause controls. Scientific content, results, and the PDF edition remain unchanged.",
  authors: ["NaS Research"], affiliation: null,
  publicationStatus: "published", readTime: "16 min read", showArticleArtwork: false,
  coverVisual: "cva-molecular-network",
  pdfUrl: "/research/papers/nas-cva-001-clinvar-conflict-atlas-v1.0.1-review.pdf",
  reproducibilityUrl: `${root}/inspection-package-v1.0.1.zip`,
  abstract: "Measuring the severity, distribution, and observed persistence of germline classification disagreement across three preserved ClinVar snapshots.",
  summaryLabel: "Abstract",
  summary: "We measured the severity, distribution, and observed persistence of germline classification disagreement in three preserved ClinVar XML snapshots dated 31 August 2025, 2 March 2026, and 29 August 2026. Primary comparisons kept each variant’s complete condition-identifier set and inheritance context separate and required qualifying records from at least two independent organizations. The latest cohort contained 179,613 eligible units across 154,037 distinct variants. Direct positive-versus-benign disagreement occurred in 224 units (0.125%); any cross-band disagreement occurred in 32,684 units (18.197%). Adjacent-only differences formed a separate category of 34,003 units (18.931%). Follow-up of 29,626 baseline cross-band units identified 719 first observed eligible T0/T4 resolution states, including seven units that later returned to cross-band disagreement; 682 units lost comparable follow-up before an observed resolution. The findings distinguish disagreement severity and snapshot-observed change under explicit eligibility rules. They describe qualifying submitted records, not biological correctness, patient risk, true disagreement onset, or continuous persistence between archives.",
  publicationNote: "NAS-CVA-001, web version 1.0.2. Public web edition of the computational research report. The PDF remains a fixed review-candidate edition. No independent human, expert, clinical, or journal peer review has been completed. Computational verification does not establish biological correctness. Earlier unpublished editions remain preserved.",
  sections: [
    {
      id: "context", title: "The same variant, in the same context",
      paragraphs: [
        "ClinVar preserves submitted interpretations of genetic variants. Those records can differ because of uncertainty, evidence, clinical context, or classification practice. An atlas of disagreement needs to distinguish a direct opposition between pathogenic and benign interpretations from a difference involving uncertain significance or adjacent categories.",
        "The primary comparison keeps the variant, the complete condition-identifier set, and the normalized inheritance context together. A variant submitted for two different conditions is not automatically a disagreement. Each eligible unit requires qualifying germline records from at least two independent organizations. Repeated submissions from one organization do not create additional organizational votes.",
        "The latest preserved XML snapshot is dated 29 August 2026. Under the primary eligibility rules, it contains 179,613 units across 154,037 distinct variants. These denominators describe qualifying submitted records. They are not counts of all ClinVar variants, tested patients, or a representative population.",
        "Positive classifications mean pathogenic or likely pathogenic; benign classifications mean benign or likely benign. Uncertain significance forms a separate band. T1 is direct positive-versus-benign opposition, T2 adds positive-versus-uncertain differences, and T3 captures uncertain-versus-benign differences. T4 describes adjacent differences within the positive or benign bands. The highest present tier assigns the unit’s category; T0 does not require identical source wording.",
      ],
      citationsByParagraph: {0:[1,2], 1:[7], 2:[7], 3:[2,7]},
    },
    {
      id: "findings", title: "The definition changes the answer",
      paragraphs: [
        "Direct positive-versus-benign disagreement is uncommon within this eligible cohort: 224 units, or 0.125%. Expanding the question to include positive classifications opposed by either benign or uncertain classifications gives 5,517 units (3.072%). Any difference across the positive, uncertain, or benign bands occurs in 32,684 units (18.197%).",
        "These are nested definitions. The positive-versus-benign count is already included in the broader counts, so the first three rows should not be added together. Adjacent-only differences form a separate category: 34,003 units (18.931%). An adjacent-category difference is not direct positive-versus-benign opposition.",
        "The table reports unit-level estimates and variant-cluster bootstrap intervals from 2,000 resamples. Clustering retains the relationship between multiple eligible contexts for the same variant. These intervals describe the specified statistical model, not uncertainty about which submitted interpretation is biologically correct.",
      ],
      resultsTable: estimates("units"),
      resultsTableCaption: "Eligible condition–inheritance units, 29 August 2026. 95% variant-cluster bootstrap intervals; 2,000 resamples.",
      figures: [figure("01-severity", "Highest-severity category counts among 179,613 eligible condition–inheritance units", "Figure 1. Highest-severity category per eligible condition–inheritance unit; denominator 179,613. The categories are mutually exclusive. T0 means no derived disagreement, not necessarily identical source labels. P/LP means pathogenic or likely pathogenic; U means uncertain significance; B/LB means benign or likely benign.")],
      citationsByParagraph: {0:[7,8],1:[7],2:[7,8]},
    },
    {
      id: "variants", title: "Counting distinct variants",
      paragraphs: [
        "Counting each distinct variant once changes the denominator to 154,037. There are 224 variants with direct positive-versus-benign disagreement (0.145%) and 31,161 with any cross-band disagreement (20.230%). A variant can contribute more than one condition–inheritance unit, which is why unit and variant fractions differ.",
        "Variant categories use the highest observed severity across the variant’s eligible units. The adjacent-only variant count is therefore 31,073, rather than a count of every variant participating in any T4 unit. The intervals below use a Wilson superpopulation model, separately from the clustered model used for units.",
        "Neither denominator measures a patient’s risk or the probability that a classification is wrong. ClinVar coverage is uneven, submissions are dependent, and primary eligibility excludes contexts with too few qualifying organizations.",
      ],
      resultsTable: estimates("variants"),
      resultsTableCaption: "Distinct eligible variants, 29 August 2026. Highest observed severity per variant; 95% Wilson superpopulation-model intervals.",
      citationsByParagraph: {0:[7,8],1:[7,8]},
    },
    {
      id: "persistence", title: "What three snapshots can show",
      paragraphs: [
        "The preserved XML dates are 31 August 2025, 2 March 2026, and 29 August 2026. Across the three snapshots, the primary cohorts contain 159,438, 169,976, and 179,613 eligible units respectively. Growth in those totals reflects changing coverage and eligibility as well as changes in submitted classifications.",
        "Historical follow-up starts with the same 29,626 baseline units showing cross-band disagreement. The time origin is the baseline observation of a prevalent disagreement—not its true onset. A later record is comparable only when its variant, condition, inheritance, and source context remain compatible.",
        "Across follow-up, 719 baseline units first reached an eligible T0 or T4 state: 452 by the March snapshot and another 267 at the final snapshot. Seven subsequently returned to cross-band disagreement. Consequently, the final observed endpoint contains 712 eligible T0/T4 states, while the cumulative first-observation count is 719. T4 can still contain adjacent-category differences.",
        "Another 682 units lost comparable follow-up before an observed resolution. The loss-to-follow-up sensitivity spans 2.427–4.729%; it does not bound every transient resolution or recurrence between archives. Three snapshots cannot establish continuous persistence, the cause of a change, or the correctness of the later interpretation.",
      ],
      resultsTableCaption: "The same 29,626 baseline cross-band units, observed at the final snapshot.",
      resultsTable: [
        ["Final observed state", "Units"],
        ["Cross-band disagreement", "28,232"],
        ["Adjacent-category difference (T4)", "225"],
        ["No classified disagreement (T0)", "487"],
        ["Ineligible comparison", "512"],
        ["Condition absent", "170"],
      ],
      figures: [figure("04-persistence", "Observed states of baseline cross-band units at three snapshots", "Figure 2. Observed states of the same 29,626 baseline units. The bars show snapshot states, not cumulative first resolutions: 452 eligible T0/T4 states at March and 712 at the final snapshot. There were 719 first observed resolutions across follow-up; seven returned to cross-band disagreement.")],
      citationsByParagraph: {0:[7],1:[7],2:[7],3:[7]},
    },
    {
      id: "age-filter", title: "A smaller count can mean a lost comparison",
      paragraphs: [
        "Evaluation dates offer another view of the records, but they do not identify how long a disagreement has existed. Evaluation age, record-update age, and the unknown duration of disagreement are different quantities. A unit enters an age curve when at least one valid age is available; dates are not required for every assertion.",
        "Restricting comparisons to assertions evaluated within two years leaves 2,296 of the original 32,684 cross-band units in a cross-band state. A further 929 become eligible T0/T4 comparisons. The remaining 29,459 have too few qualifying organizations after filtering.",
        "Most of the reduction therefore comes from lost eligibility. Removing the second qualifying organization is not an observation of agreement. The age-filter result should be read as a change in the retained comparison set, not evidence that older assertions caused disagreement or that excluded units resolved.",
      ],
      resultsTable: [
        ["After the two-year evaluation filter", "Original cross-band units"],
        ["Cross-band disagreement retained", "2,296"],
        ["Eligible T0/T4 comparison", "929"],
        ["Insufficient qualifying organizations", "29,459"],
        ["Original cohort", "32,684"],
      ],
      resultsTableCaption: "Retention of the original 32,684 latest-snapshot cross-band units after a two-year evaluation filter.",
      figures: [figure("03-evaluation-age", "Empirical distributions of oldest and newest valid evaluation dates per eligible unit", "Figure 3. Empirical distributions of oldest and newest nonmissing evaluation dates per eligible unit. Curves omit missing values; units with missing dates remain in the study. Evaluation age is not the duration of disagreement.")],
      citationsByParagraph: {0:[7],1:[7,9],2:[7]},
    },
    {
      id: "distribution", title: "Where the observed differences appear",
      paragraphs: [
        "Exploratory views describe genes, complete condition sets, organizations, and official RCV review-status strata. These views help locate the submitted-record differences; they do not establish their causes or identify classification error.",
        "The gene screen compares observed and expected T1/T2 counts for 691 adequately represented genes with complete leave-one-gene-out reference coverage. Both axes use symmetric logarithmic scaling, with a linear region from zero to one. The graphic is descriptive: it is not a significance ranking or a measure of disease risk.",
        "Review stars partly encode agreement. Differences across official review-status strata are therefore structurally dependent and cannot establish a causal effect of review. An observed zero rate in a stratum does not establish zero clinical risk.",
        "Fractional participation uses separate denominators for genes, complete condition sets, and organizations. Participation does not attribute error. The condition-set view selects fifteen sets by their eligible-variant denominators; a variant may appear in more than one set, and source descriptions are not clinical reinterpretations.",
      ],
      figureGallery: [
        figure("02-gene-observed-expected", "Descriptive observed-versus-expected gene-level T1/T2 counts", "Figure 4. Gene-level observed and expected counts. Symmetric logarithmic axes have a linear region from zero to one; these are not significance or disease-risk rankings.",1),
        figure("05-review-status", "T1/T2 fractions stratified by official RCV review status", "Figure 5. Observed review-status strata. Stars partly encode agreement, so these comparisons do not establish a causal review effect.",2),
        figure("06-concentration", "Fractional disputed participation across genes, condition sets, and organizations", "Figure 6. Fractional participation with domain-specific denominators. Participation does not attribute classification error.",3),
        figure("07-condition-distribution", "T1/T2 fractions for fifteen complete condition sets selected by eligible-variant denominator", "Figure 7. T1/T2 fractions for fifteen condition sets selected by their eligible-variant denominators. Each variant is counted once within a set and can contribute to multiple sets; labels retain their source meaning."),
      ],
      citationsByParagraph: {0:[7],1:[7],2:[3,7],3:[7]},
    },
    {
      id: "methods", title: "From preserved sources to inspectable results",
      paragraphs: [
        "The analysis is bound to 24 dated inputs: matched VCV/RCV XML, tabular exports, a current-snapshot GRCh38 VCF, schemas, and documentation. Retrieval URLs, byte sizes, and SHA-256 hashes identify the exact retrieved inputs. XML dates, release labels, posting dates, and retrieval dates remain distinct. Original-distribution byte identity has not been independently established.",
        "One protocol and four dated addenda preserve the study rules and their provenance. This is internal prespecification, not external registration. A historical source-quality restriction was added after outcome inspection and is disclosed as such. Twelve sensitivities examine alternative choices without replacing the primary definition.",
        "A separate literal SQL implementation reconstructs primary units and tiers and agrees exactly over shared normalized inputs. The replay completed 53 source-to-export stages plus two review-status supplements. Exact export comparisons and pinned scientific dependencies connect the executed code to the preserved results.",
        "The producing workflow also checked 120 prespecified cases against separately extracted raw VCV fields and actual RCV membership. These are computational and source checks within the producing workflow, not independent expert or clinical review. The assertion-disposition figure describes the first applicable reason an extracted assertion passes or fails; passing assertion filters does not itself establish final multi-organization unit eligibility.",
        "The 1,143 VCF representation differences remain recorded among 4,468,152 comparisons. Their 27 eligible primary units remain in the XML-based cohort. Source-field agreement does not establish reference-aware allele normalization. The limited official-rule approximation found 29 nonnull disagreements and 5,961 undecidable VCV/RCV aggregate-record comparisons; it is not validated replication of official aggregation rules.",
        "Supplementing the two proven baseline RCV-only assertions leaves primary eligibility unchanged. In the focused variant-wide sensitivity, VariationID 978268 gains one eligible T4 unit; the other evaluated definitions are unchanged. This secondary result remains separate from the primary estimates.",
      ],
      figures: [figure("08-cohort-disposition", "First-applicable dispositions of extracted assertions", "Figure 8. Mutually exclusive first-applicable dispositions among 6,959,945 extracted assertions. Passing assertion filters does not establish final multi-organization unit eligibility.")],
      citationsByParagraph: {0:[1,6,7],1:[7],2:[7],3:[7],4:[7],5:[7]},
    },
    {
      id: "limits", title: "What the evidence can tell us",
      paragraphs: [
        "The strongest claims concern these preserved eligible records: the distribution of disagreement severity, snapshot-observed persistence and state changes, and exact computational agreement under the frozen inputs and code. The research does not identify which classification is biologically correct.",
        "Uneven archive coverage, dependent organizations and records, changing eligibility, incomplete evaluation dates, and sparse historical observations limit interpretation. Exploratory associations do not establish causation. Some source discrepancies remain unexplained, and unobserved events between archives cannot be excluded.",
        "No independent human, expert, clinical, or journal peer review has been completed. The report is neither clinical guidance nor a deployed clinical atlas, and it does not claim a field-first discovery of classification disagreement. Reproducibility makes the calculations inspectable; it does not turn them into a clinical verdict.",
      ],
      citationsByParagraph: {0:[7],1:[7]},
    },
    {
      id: "materials", title: "Examine and reproduce the research",
      paragraphs: [
        "The complete version 1.0.1 manuscript contains the methods, results, eight figures, source examples, limitations, and references. The curated inspection package includes public analysis code and its lockfile, dated protocol provenance, selected exact result tables, the source-fetch manifest, figure masters, and computational receipts.",
        "The package is not a raw-data mirror or the complete sealed research archive. Reproduction requires downloading the manifest-matched source files. Raw archives, private operational records, internal publication machinery, and linked full-text works are excluded. Earlier unpublished editions remain preserved.",
        "The file manifest identifies each packaged file and its checksum. Replay instructions explain the required sources and execution order. Source attribution and reuse terms preserve the applicable rights; the package does not assign a blanket new license to third-party content. Live ClinVar links may show classifications later than those in the preserved snapshots.",
      ],
      citationsByParagraph: {0:[7,8,9,10],1:[10],2:[5,10,11]},
    },
  ],
  sourceGroups: [
    {title:"Study materials",numbers:[7,8,9,10]},
    {title:"ClinVar and methods documentation",numbers:[1,2,3,6]},
    {title:"Published research",numbers:[4]},
    {title:"Attribution and reuse",numbers:[5,11]},
  ],
  sourcesIntro: "Study documentation and exact computed tables support the numerical claims. ClinVar documentation explains source semantics and does not independently endorse these results. Live database pages may contain later records than the preserved archives.",
  sources: [
    {title:"ClinVar download and identifier guide",url:"https://www.ncbi.nlm.nih.gov/clinvar/docs/ftp_primer/",role:"Source formats and archive identifiers",citation:"NCBI · ClinVar documentation"},
    {title:"ClinVar classification representation",url:"https://www.ncbi.nlm.nih.gov/clinvar/docs/clinsig/",role:"Source classification semantics",citation:"NCBI · ClinVar documentation"},
    {title:"ClinVar review status",url:"https://www.ncbi.nlm.nih.gov/clinvar/docs/review_status/",role:"Review-status semantics",citation:"NCBI · ClinVar documentation"},
    {displayTitle:"ClinVar: updates to support classifications of both germline and somatic variants",title:"Landrum et al. ClinVar updates, 2025",url:"https://doi.org/10.1093/nar/gkae1090",role:"Database context",citation:"Landrum MJ et al. · 2025 · Nucleic Acids Research 53(D1), D1313–D1321"},
    {title:"NCBI data usage and disclaimer policy",url:"https://www.ncbi.nlm.nih.gov/home/about/policies/",role:"Source usage policy",citation:"NCBI · Data usage policy"},
    {title:"VCF 4.1 specification",url:"https://samtools.github.io/hts-specs/VCFv4.1.pdf",role:"Representation format",citation:"SAMtools / HTS specifications · VCF 4.1"},
    {title:"NAS-CVA-001 version 1.0.1 manuscript",url:"/research/papers/nas-cva-001-clinvar-conflict-atlas-v1.0.1-review.pdf",role:"Study methods, results, provenance, and limitations",citation:"NaS Research · 2026 · Version 1.0.1"},
    {title:"Exact principal-estimate table",url:`${root}/tables/principal-estimates-2026-09.csv`,role:"Numerators, denominators, interval models, and exact estimates",citation:"NaS Research · 2026 · Exact computed estimates"},
    {title:"Age-filter retention table",url:`${root}/tables/age-filter-retention-2026-09.csv`,role:"Retained states and eligibility loss",citation:"NaS Research · 2026 · Exact computed retention states"},
    {title:"Curated inspection package",url:`${root}/inspection-package-v1.0.1.zip`,role:"Public code, protocols, selected evidence, and figure masters",links:[{label:"File manifest",url:`${root}/inspection-manifest.json`},{label:"Replay instructions",url:`${root}/REPLAY.md`}],citation:"NaS Research · 2026 · Version 1.0.1"},
    {title:"Source attribution and reuse terms",url:`${root}/REUSE_AND_ATTRIBUTION.md`,role:"Applicable source rights and use limitations",citation:"NaS Research · Source rights and use limitations"},
  ],
};
