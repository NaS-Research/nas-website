import { aiHospitalBillingCohortTable } from "./aiHospitalBillingEvidence.js";

export const aiHospitalBillingEssay = {
  slug: "ai-hospital-billing-evidence",
  title: "AI, Hospital Billing, and the Standard of Evidence",
  shortTitle: "AI and hospital billing",
  type: "Institutional Essay",
  area: "Healthcare Operations",
  date: "October 1, 2026",
  dateISO: "2026-10-01",
  version: "1.3",
  authors: ["NaS Research"],
  readTime: "9 min read",
  variant: "paper",
  theme: "dark",
  showArticleArtwork: true,
  citable: true,
  pdfUrl: null,
  pdfStatus: "none",
  abstract:
    "NaS’s perspective on AI-assisted billing: accurate records, justified payment, accountable decisions, and a standard of value that reaches the patient.",
  summary:
    "Healthcare automation should make the record more accurate, decisions easier to examine, and the work of caring for people less burdensome. Rising payments deserve scrutiny. So do automated denials. NaS believes both should be judged through the same evidence: what happened, what the record supports, which rule applies, and how the decision affects the patient.",
  pullQuote:
    "Every consequential claim should remain connected to its supporting evidence and to a person accountable for the decision.",
  pullQuoteAttribution: "NaS Research",
  publicationNote:
    "An institutional perspective based on sources reviewed on October 1, 2026. NaS did not access the underlying patient records or independently reproduce BCBSA’s spending estimate. The recommendations express NaS’s position; they are not findings from a NaS clinical study.",
  sourcesIntro:
    "Each reference links to the original publication and identifies its role in this article. The BCBSA and AHA documents express their organizations’ positions. The charts retain the report’s values, identify calculations, and link to the relevant sources. NaS’s assessments and proposed review process are identified separately.",
  sections: [
    {
      id: "the-question-for-nas",
      title: "The question for NaS",
      paragraphs: [
        "A hospital can receive more money after documenting a condition that was already present. An insurer can spend less after challenging that documentation. Neither financial result, by itself, tells us whether the patient received better care or whether the payment decision was correct.",
        "That is the question raised by the recent debate over AI-assisted hospital billing. For NaS, it reaches beyond reimbursement. It concerns how a clinical observation becomes a diagnosis, how a diagnosis becomes a financial claim, and what evidence survives that process.",
        "Our interest in computing and automation begins with the work they can improve: understanding disease, supporting sound decisions, and giving people more time for useful scientific and clinical work. A system should be judged by the accuracy of its outputs and the consequences of its use. Faster production of paperwork is an incomplete measure of progress.",
      ],
    },
    {
      id: "the-spending-estimate",
      title: "What the spending estimate measures",
      paragraphs: [
        "On September 24, 2026, the Blue Cross Blue Shield Association (BCBSA) announced an estimated $942 million in additional Blue System spending associated with rising inpatient coding complexity. Its white paper covers Q1 2023 through Q4 2025 and describes the added spending over two years against a 2023 baseline. Secondary diagnoses that shifted stays into higher-paying categories accounted for $653 million, approximately 70% of the estimate.",
        "For major bowel procedures, Figure 2 and the table compare hospitals in the highest quartile of coding growth with other hospitals. This is not a verified comparison of AI users and nonusers.",
        "The estimate concerns insurer spending. It does not measure patients’ direct bills or establish how much of the increase was improper payment.",
      ],
      citationsByParagraph: { 0: [1, 2], 1: [2], 2: [1] },
      resultsTableCaption:
        "BCBSA’s major bowel-procedure cohort, 2025. Descriptive comparisons; the table does not establish causation or statistical significance.",
      resultsTable: aiHospitalBillingCohortTable,
      tableSourceRefs: [2],
      figures: [
        {
          kind: "evidence", id: "spending-composition", number: 1, afterParagraph: 0,
          src: "/research/ai-hospital-billing/v1.1/spending-composition.svg",
          mobileSrc: "/research/ai-hospital-billing/v1.1/spending-composition-mobile.svg",
          width: 960, height: 422, mobileWidth: 420, mobileHeight: 470,
          alt: "BCBSA estimates $942 million in added spending. Secondary-diagnosis shifts account for $653 million, or 69.3%. The calculated remainder is $289 million, or 30.7%.",
          caption: "BCBSA's spending estimate. NaS calculated the remainder and shares from the reported totals. Added spending is not a measure of improper payment.",
          sourceRefs: [1, 2],
          dataUrl: "/research/ai-hospital-billing/v1.1/spending-composition.csv",
        },
        {
          kind: "evidence", id: "cohort-comparison", number: 2,
          src: "/research/ai-hospital-billing/v1.1/cohort-comparison.svg",
          mobileSrc: "/research/ai-hospital-billing/v1.1/cohort-comparison-mobile.svg",
          width: 960, height: 557, mobileWidth: 420, mobileHeight: 540,
          alt: "Top-quartile hospitals minus other hospitals: complex coding plus 10.6 percentage points, ICU use minus 1.7, transfusion minus 0.3, reoperation plus 0.2. Median stay is 4.0 days in both groups.",
          caption: "NaS calculated percentage-point differences from BCBSA's 2025 cohort table. These descriptive comparisons do not establish causation or statistical significance. Median stay is shown separately because its unit is days.",
          sourceRefs: [2],
          dataUrl: "/research/ai-hospital-billing/v1.1/cohort-comparison.csv",
        },
      ],
    },
    {
      id: "reading-the-evidence",
      title: "Reading the evidence carefully",
      paragraphs: [
        "Our assessment: the public three-page report does not disclose a reproducible spending model, full cohort denominators, detailed risk adjustment, or hospital-level AI adoption dates. These omissions limit independent evaluation of the estimate and attribution to AI.",
        "A useful next study would connect actual adoption dates to changes in coding, compare trends before and after adoption with suitable comparison hospitals, and examine the underlying charts. It would separate genuine changes in patient illness, improved documentation, changes in payment rules, and unsupported diagnoses. Uncertainty should be reported alongside the estimate.",
        "BCBSA represents organizations that pay these claims. That financial interest makes independent scrutiny necessary; it does not make the findings false. The same principle applies to hospitals and vendors that benefit from higher reimbursement. Institutional interests should prompt better methods and clearer disclosure, rather than determine whose evidence we accept.",
      ],
      citationsByParagraph: { 0: [2] },
    },
    {
      id: "diagnosis-and-treatment",
      title: "A diagnosis does not imply one treatment",
      paragraphs: [
        "Anemia provides an important example. The 2023 AABB international guidelines support restrictive transfusion strategies for many patients and emphasize the overall clinical context. A patient can have anemia without needing a blood transfusion. Therefore, an unchanged transfusion rate cannot, on its own, determine whether an anemia diagnosis was valid.",
        "The current official inpatient coding rules also recognize clinically significant conditions that require evaluation, diagnostic procedures, additional monitoring or nursing care, treatment, or a longer stay. A condition can matter to care without producing a new major procedure. Conversely, an abnormal laboratory result alone is not sufficient: the provider must indicate its clinical significance. Code assignment generally rests on the accountable provider’s diagnostic statement, with clarification when documentation conflicts. Historical claims require the rules applicable to their encounters.",
        "Our interpretation is that treatment patterns can help identify cases worth reviewing, while the chart and applicable rules remain necessary to resolve them. We should not create an incentive to perform an unnecessary intervention simply to make a diagnosis appear financially defensible.",
      ],
      citationsByParagraph: { 0: [3], 1: [4] },
    },
    {
      id: "documentation-and-payment",
      title: "Better documentation can justify higher payment",
      paragraphs: [
        "The American Hospital Association (AHA), in an August 2026 fact sheet that predates this BCBSA release, argues that coding trends also reflect older and sicker patients, the movement of less complex care into outpatient settings, and improvements in documentation. It also criticizes automated insurer downcoding. These are the hospital association’s positions, rather than an independent rebuttal of the September cohort.",
        "A valid diagnosis that was previously omitted can legitimately change reimbursement. We should distinguish that correction from adding a diagnosis the record cannot support. The relevant standard is the documented encounter and the governing rules, applied consistently whether the result raises or lowers payment.",
        "At the same time, correct billing under an existing contract does not settle whether the payment design rewards the right things. An individual claim can be payable while a reimbursement system still encourages excessive administrative effort. Those are separate questions, requiring different evidence and different remedies.",
      ],
      citationsByParagraph: { 0: [5] },
    },
    {
      id: "automation-and-accountability",
      title: "Automation needs an accountable record",
      paragraphs: [
        "An ambient scribe drafts notes from an encounter. A coding tool maps documented information to codes. A documentation query asks a clinician to clarify the record. These functions have different failure modes. A claim about one should not automatically be extended to every system sold under the label of healthcare AI.",
        "The 2026 AHIMA/ACDIS guidance applies compliant query principles to technology-generated prompts. Queries should use relevant clinical indicators, avoid leading the provider or referring to reimbursement, and preserve independent clinical judgment. The guidance is a professional practice resource; it explicitly cautions against using it alone as a rationale for claim denial or payment recovery.",
        "NaS’s position is that any consequential change should preserve the original record, the evidence cited, the proposed change, the reviewer’s reasoning, and the final decision. Figure 3 shows how we would apply this standard to a hospital claim and an insurer’s concern. Missing evidence and conflicting information should remain visible. Reviewers need the authority and time to reject a suggestion, with a way to correct mistakes after acceptance.",
        "A human approval button is an incomplete safeguard if the evidence is hidden, the recommendation is framed to secure agreement, or the reviewer is expected to process more work than can be examined responsibly. The quality of review depends on the conditions under which people make the decision.",
      ],
      citationsByParagraph: { 1: [6] },
      figures: [
        {
          kind: "evidence", id: "evidence-review-workflow", number: 3, afterParagraph: 2,
          src: "/research/ai-hospital-billing/v1.1/evidence-review-workflow.svg",
          mobileSrc: "/research/ai-hospital-billing/v1.1/evidence-review-workflow-mobile.svg",
          width: 960, height: 672, mobileWidth: 420, mobileHeight: 900,
          alt: "A hospital claim and an insurer concern feed into the same evidence review. A qualified reviewer examines the clinical record, applicable rules, and missing or conflicting information. A reasoned decision is followed by correction and appeal.",
          caption: "NaS's proposed review process. Both sides should explain their position against the same record and applicable rules, with a documented decision and a usable route to correction. This diagram presents a recommendation, not a measured outcome.",
        },
      ],
    },
    {
      id: "the-insurer-standard",
      title: "The same standard applies to insurers",
      paragraphs: [
        "If software helps challenge a claim, the challenge should identify the disputed statement, the relevant evidence, and the applicable policy. A suspicion generated from a population pattern should lead to proportionate investigation. It should not automatically become a conclusion about an individual patient.",
        "We believe coverage and payment review should include a usable correction and appeal process. The reasons must be intelligible to the people responsible for care and to the patient affected. Review should distinguish an unsupported diagnosis from a valid diagnosis with incomplete documentation, and a coding dispute from a question about coverage.",
        "Preventing improper payment and securing justified payment are both legitimate goals. If opposing systems simply generate more challenges and longer replies, the apparent efficiency of each organization can become more work for everyone else. We would measure the total work needed to reach a defensible decision, including the effort shifted onto clinical staff and patients.",
      ],
    },
    {
      id: "patient-and-scientific-value",
      title: "The patient and the scientific record",
      paragraphs: [
        "NaS’s commitment to service and respect for human life puts the patient at the center of this assessment. The patient should not have to become an expert in medical coding to understand a bill or obtain a review. An administrative system earns trust when it can explain what happened and correct an error without making the affected person carry the entire burden.",
        "There is also a research implication. When analysts use coded diagnoses as a measure of disease burden, a change in documentation can be mistaken for a change in illness. Our methodological recommendation is to track how records were created and, where feasible, check important findings against clinical information that was collected independently of the billing workflow.",
        "That distinction matters for institutions building scientific datasets and predictive models. A richer record can improve analysis when the additions are valid and well understood. It can also introduce a new source of variation if the documentation process changes unnoticed. More information requires an account of where it came from and what it represents.",
      ],
    },
    {
      id: "measuring-value",
      title: "What we would measure",
      paragraphs: [
        "We would assess a healthcare administrative tool against a defined workflow and a prespecified baseline. The evaluation should include independent clinical and coding review, disagreement resolution, and the consequences of errors in both directions.",
        "● Record accuracy: supported additions, missed conditions, contradictions, and corrections after review. ● Decision quality: whether the outcome follows the evidence and applicable policy, including appropriate payment and appropriate rejection. ● Work required: total staff time, review effort, repeat queries, appeals, and time to resolution. ● Patient consequences: delays where relevant, financial responsibility, explanation quality, and access to correction. ● Financial results: allowed amounts, payments, reversals, operating costs, and independently reconciled receipts.",
        "An increase in revenue may be valuable to a provider. A decrease in spending may be valuable to a payer. Neither should be reported as a system-wide saving without accounting for the consequences elsewhere. Likewise, administrative improvements should be described as administrative improvements unless clinical benefits have actually been evaluated.",
        "We would also examine whether performance differs across settings and patient groups. A tool that reduces average handling time but makes difficult cases harder to resolve needs that limitation reported. The people most dependent on careful review should remain visible in the evaluation.",
      ],
    },
    {
      id: "our-own-responsibility",
      title: "Our own responsibility",
      paragraphs: [
        "NaS is developing research software and NaS Denials, a workbench intended to connect policy, clinical evidence, qualified review, and payment outcomes. That work gives us a stake in this debate. The standard we propose must apply to our own systems.",
        "NaS Denials remains under development. We are not presenting customer-validated recovery outcomes here. Its intended role is to help people examine the record and make defensible decisions. A proposed appeal is not an established entitlement; a payer-reported payment is not automatically verified cash received.",
        "As we develop these tools, we intend to preserve the difference between a source and an interpretation, a suggestion and an approved decision, and an engineering test and an outcome demonstrated in practice. These distinctions make it possible to discover where a system fails and improve it without overstating what it has achieved.",
        "The billing debate is worth pursuing because accurate records and fair payment matter. Our contribution should be to make the evidence easier to examine, the work less burdensome, and the decisions more accountable to the people they affect. That is the standard by which we want NaS to be judged.",
      ],
    },
  ],
  sources: [
    {
      title: "Analysis examines AI in hospital billing as spike in complex patients adds nearly $1 billion in extra costs",
      url: "https://www.bcbs.com/about-us/association-news/bcbsa-analysis-ai-coding-tools-affects-healthcare-costs",
      citation: "Blue Cross Blue Shield Association. September 24, 2026. Association announcement.",
      role: "Source of the headline spending estimate and BCBSA's interpretation.",
    },
    {
      title: "Hospital Coding Intensity Analysis: Major Bowel Procedures",
      url: "https://www.bcbs.com/media/pdf/BCBSA-AI-Coding-Intensity-Whitepaper.pdf",
      citation: "Birkmeyer C, Wennberg D, Kamons K, Chalker L. Blue Cross Blue Shield Association. September 2026. Pages 1-3.",
      role: "Primary report for the chart and table values; page 1 for spending and page 3 for cohort comparisons.",
    },
    {
      title: "Red Blood Cell Transfusion: 2023 AABB International Guidelines",
      url: "https://jamanetwork.com/journals/jama/article-abstract/2810754",
      citation: "Carson JL, Stanworth SJ, Guyatt G, et al. JAMA. 2023;330(19):1892-1902. Published online October 12, 2023. DOI: 10.1001/jama.2023.12914.",
      role: "Clinical context for why an anemia diagnosis does not necessarily require transfusion.",
      links: [
        { label: "DOI", url: "https://doi.org/10.1001/jama.2023.12914" },
        { label: "Open abstract via ISBT", url: "https://www.isbtweb.org/resource/red-blood-cell-transfusion-2023-aabb-international-guidelines.html" },
      ],
    },
    {
      title: "ICD-10-CM Official Guidelines for Coding and Reporting, FY 2027",
      url: "https://www.cms.gov/files/document/fy-2027-icd-10-cm-coding-guidelines.pdf",
      citation: "Centers for Medicare & Medicaid Services and National Center for Health Statistics. Effective October 1, 2026 through September 30, 2027. Section I.A.19, page 12; Section III, pages 110-111.",
      role: "Official rules for code assignment and reporting additional diagnoses. Earlier encounters require their applicable edition.",
    },
    {
      title: "Fact Sheet: Artificial Intelligence and Coding Intensity",
      url: "https://www.aha.org/fact-sheets/2026-07-31-fact-sheet-artificial-intelligence-and-coding-intensity",
      citation: "American Hospital Association. August 2026. Fact sheet.",
      role: "Hospital association perspective, published before the September BCBSA report.",
      links: [{ label: "Fact sheet PDF", url: "https://www.aha.org/system/files/media/file/2026/08/fact-sheet-artificial-intelligence-and-coding-intensity.pdf" }],
    },
    {
      title: "Guidelines for Achieving a Compliant Query Practice, 2026 update",
      url: "https://acdis.org/system/files/resources/DES-1622_ACDIS-AHIMA_Guidelines-Compliant-Query-Practice_positionpaper.pdf",
      citation: "American Health Information Management Association and Association of Clinical Documentation Integrity Specialists. August 2026. Sections I, V, and XI; technology guidance on pages 22-24.",
      role: "Professional guidance on compliant documentation queries, including technology-generated prompts.",
    },
  ],
};
