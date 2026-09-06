export const denialsRelease = {
  slug: "introducing-nas-denials",
  title: "Introducing NaS Denials",
  shortTitle: "NaS Denials",
  type: "White Paper",
  area: "Healthcare Operations",
  date: "September 5, 2026",
  dateISO: "2026-09-05",
  version: "1.0",
  authors: ["NaS Research"],
  readTime: "12 min read",
  pdfUrl: "/research/papers/introducing-nas-denials.pdf",
  workflowFigureSection: "workflow",
  abstract:
    "A specialty denial prevention and appeals platform designed to connect payer policy, clinical evidence, human review, and payment outcomes in one accountable workflow.",
  summary:
    "NaS Denials is a software foundation under development for specialty practices and revenue-cycle teams. It is designed to assemble evidence for human-reviewed appeals, identify recurring causes of denials, and carry verified outcomes back into prevention. The repository passes local engineering tests with synthetic data. It has not been validated with a customer, authorized to handle electronic protected health information in a customer deployment, or shown to recover money in practice. NaS is seeking qualified design partners for that next stage.",
  pullQuote:
    "A denial should become a traceable case with a policy, an evidence record, a human decision, and a measurable outcome.",
  pullQuoteAttribution: "NaS Research",
  publicationNote:
    "Published September 5, 2026. Public sources and repository evidence were rechecked on that date. The PDF is the version of record. Product status and limitations are stated as of publication and will change only through versioned updates.",
  collaboration: {
    eyebrow: "Design partner release",
    title: "Help test NaS Denials in a real specialty workflow",
    body:
      "We are looking for specialty practices, revenue-cycle leaders, billing companies, and qualified denial reviewers willing to define one narrow validation cohort. Initial conversations do not require patient information. We begin with workflow, volume, payer mix, available records, and the standard against which the system should be tested.",
    href: "/contact",
    label: "Contact NaS about a design partnership",
  },
  sections: [
    {
      id: "payment-friction",
      title: "1 Payment friction after care",
      paragraphs: [
        "The United States spent $5.3 trillion on health care in 2024. Hospital care and physician and clinical services accounted for approximately $2.7 trillion of that total. The financial system surrounding that care remains fragmented across clinical records, claim transactions, clearinghouses, payer rules, remittance files, portals, faxes, and manual work queues.",
        "Claims denials are one visible result. KFF found that HealthCare.gov insurers denied 20 percent of in-network claims in 2023, although the rate varied widely by insurer and state. Fewer than 1 percent of those denied claims were appealed. These Marketplace figures should not be treated as a universal denial rate for every payer or provider, but they show the scale and variability of payment friction.",
        "The cost extends beyond unpaid claims. In its 2026 Costs of Caring report, the American Hospital Association estimated that hospitals spent nearly $18 billion overturning denials in 2025. In its 2024 Index, CAQH estimated a $20.5 billion annual savings opportunity from moving the medical and dental administrative transactions it studied from manual or partially electronic modes to fully electronic transactions. Neither estimate measures the market for NaS Denials, but both show the scale of administrative payment friction. The exact opportunity differs by organization, while the operating problem is familiar: staff must determine what happened, locate the governing rule, reconstruct the record, meet a deadline, and prove the eventual financial result.",
      ],
    },
    {
      id: "where-work-breaks",
      title: "2 Where the current workflow breaks",
      paragraphs: [
        "Clearinghouses are effective at transmitting transactions and applying broad edits. Practice-management systems track balances and work queues. Electronic health records contain much of the clinical record. Outsourced revenue-cycle teams add expertise and labor. Payer portals expose status and submission channels. Each component matters, but none necessarily owns the complete path from a payer's reason for denial to the evidence used in response and the cash ultimately received.",
        "The missing unit is an accountable case. A denial case should preserve the claim and remittance source, the exact payer product and policy version, the relevant chart evidence, missing or contradictory information, the filing deadline, the human decision, the submitted packet, the payer outcome, and any later reversal or payment. Without that lineage, organizations may repeat preventable errors or report theoretical opportunity as recovered revenue.",
      ],
    },
    {
      id: "what-we-are-building",
      title: "3 What we are building",
      paragraphs: [
        "NaS Denials is designed as an evidence-linked workbench for specialty denial prevention and appeals. The current software foundation is designed to accept controlled claim, remittance, denial, authorization, policy, and chart inputs; normalize a case; identify the governed policy selected for that case; label supporting, missing, uncertain, or contradictory evidence; recommend an operational path; and prepare a draft packet for qualified human review.",
        "The system distinguishes an appeal from correction, resubmission, escalation, review, and write-off. It does not assume that every unpaid claim is recoverable. It does not independently determine coverage, change a chart or billing code, make a clinical attestation, or submit an appeal. Consequential assertions remain with qualified people designated by the customer.",
        "The same evidence structure can later run before billing. When a recurring denial points to missing authorization, incomplete documentation, or another correctable upstream condition, the platform can create a prevention task while the relevant encounter is still actionable. That prevention workflow remains advisory and preserves the source, policy version, and final human action.",
      ],
    },
    {
      id: "workflow",
      title: "4 The operating workflow",
      paragraphs: [
        "The first product is a managed software workflow. NaS and the customer define one exact queue, use controlled file exports before deep integration, and keep the customer's existing staff responsible for decisions and submissions.",
        "● Intake controlled 837 claim files or claim exports, 835 remittances, denial letters, authorization records, governed policy material, and relevant chart documents. Production use of X12 transactions will require an approved validation service and deployment.● Reconcile every accepted source record and preserve its hash and location.● Classify the denial and select the exact payer, product, jurisdiction, policy version, procedure scope, and appeal level.● Show evidence with page or field citations and label missing, inaccessible, uncertain, or contradictory information.● Route the case to a qualified reviewer and require separate approval before a packet can be treated as ready.● Record external submission and payer decisions as human attestations rather than claiming the software submitted them.● Count recovery only when a matching remittance supports incremental, payment-dated cash, net of later reversals.",
      ],
    },
    {
      id: "specialty-scope",
      title: "5 A platform for specialties that begins with one narrow queue",
      paragraphs: [
        "The design is not limited to orthopedics. The same case and evidence model is intended to be adapted for gastroenterology, oncology, cardiology, radiology, rheumatology, neurology, infusion, dermatology, and other specialty settings. Each new specialty, payer product, procedure scope, and policy family will require its own governed rules and validation. Billing companies may also be able to use the platform across multiple clients, provided each customer's data, policies, permissions, and outcomes remain isolated.",
        "A broad platform still needs narrow validation. Payer policies differ by product and jurisdiction. Specialties document medical necessity differently. Authorization rules, coding context, appeal windows, source systems, and reviewer responsibilities vary. A system that performs well for one procedure and payer cannot safely claim the same performance everywhere without new evidence.",
        "Orthopedic knee MRI denials are the current engineering reference because CMS National Coverage Determination 220.2 provides a public MRI coverage reference and Medicare publishes its first-level redetermination process. That process generally allows 120 days from receipt of the initial claim determination to request redetermination. The NCD is not a knee-specific medical-necessity checklist, and the synthetic engineering rules are not presented as Medicare coverage criteria. These sources are starting references, not a complete specialty policy set or proof that a particular claim is covered.",
        "Orthopedics is a hypothesis for finding the first validation partner, not a restriction. The first real customer may establish a different specialty if its denial volume, records, qualified reviewers, and outcome data make a stronger test.",
      ],
    },
    {
      id: "system-design",
      title: "6 Evidence before automation",
      paragraphs: [
        "NaS uses deterministic logic for identity, permissions, policy applicability, deadlines, arithmetic, approval boundaries, and payment reconciliation. Models may assist with bounded extraction, classification, and drafting, but every consequential output must retain its source and uncertainty. Missing evidence stays missing. A plausible sentence is not evidence.",
        "The current software foundation implements tenant-scoped access controls, governed policy versions, quarantine-first document intake, human review states, appeal packet controls, hash-chained audit records, retention workflows, operational alerts, and remittance-based recovery reconciliation. On September 5, 2026, the repository passed 224 automated tests locally. A fresh run of the 100-case engineering-created synthetic cohort matched its provisional answer key for evidence state and citation precision, with zero unsupported assertions in that cohort.",
        "Those results are engineering regression evidence, not customer validation. The score artifact is labeled not eligible for sales claim. Synthetic cases cannot establish payer accuracy, clinical reliability, staff time saved, overturn rates, recovered cash, or commercial value.",
      ],
    },
    {
      id: "safety-and-privacy",
      title: "7 Safety privacy and accountability",
      paragraphs: [
        "A vendor that creates, receives, maintains, or transmits protected health information on behalf of a covered entity is generally a business associate. HHS guidance states that cloud service providers handling electronic protected health information on behalf of covered entities or business associates need appropriate business associate agreements, and that covered entities and business associates must conduct risk analyses. HHS does not endorse or recognize private HIPAA Security Rule certifications.",
        "NaS has implemented and locally tested specific software controls, including tenant-scoped authorization, quarantine-first intake, human approval boundaries, retention logic, and audit integrity checks. Those engineering tests are not a finding of HIPAA compliance. NaS has not completed the contracts, approved cloud deployment, vendor agreements, documented operating evidence, independent penetration testing, incident and recovery exercises, or customer security acceptance required for an electronic protected health information deployment. A fresh internal readiness check on September 5, 2026 therefore returned blocked from ePHI. Prospective partners should share only workflow descriptions, aggregate non-patient statistics, and synthetic examples until NaS and the customer approve a formal data path. Do not send NaS patient records or other patient-level data at this stage.",
        "The safety model keeps qualified humans responsible for clinical assertions, coding judgments, final appeal approval, and external submission. It also separates potential value, payer-approved value, and verified recovered cash. These boundaries are product requirements, not temporary limitations to be removed for convenience.",
      ],
    },
    {
      id: "validation-program",
      title: "8 The design partner program",
      paragraphs: [
        "The next stage is a retrospective diagnostic followed by a shadow pilot. A suitable partner has a meaningful denial queue, an identifiable economic buyer, access to the underlying records and remittance outcomes, and qualified people who can review the work independently.",
        "NaS and the partner will select one payer product, procedure scope, denial family, jurisdiction, and appeal level. Before reviewing software output, two qualified reviewers will independently label a frozen set of historical cases and adjudicate disagreements. The system will then be measured against those labels for state accuracy, citation precision, contradiction and missing-evidence recall, unsupported assertions, substantive correction rate, and active review time.",
        "If the retrospective evidence supports proceeding, the product will run in shadow mode on new cases while the existing team remains responsible for every decision and submission. The pilot will measure reviewer acceptance, corrections, missed deadlines, payer outcomes, revised remittances, days to cash, staff time, and verified incremental payment. Failure to meet the prespecified thresholds will produce a stop or change decision, not a marketing claim.",
      ],
    },
    {
      id: "who-we-want-to-work-with",
      title: "9 Who we want to work with",
      paragraphs: [
        "We are opening conversations with independent specialty practices, multispecialty groups, management services organizations, ambulatory surgery and imaging operators, and specialty billing companies. The most useful first contact is usually a chief financial officer, practice administrator, revenue-cycle leader, billing manager, or experienced denial specialist rather than a physician who does not own the payment workflow.",
        "Physicians remain essential. They can identify where a documentation request is clinically sensible, where administrative work interrupts care, and where software would create unsafe extra work. A design partnership should include them without making them responsible for correcting a stream of machine-generated drafts.",
        "An initial conversation does not require a commitment or patient data. We want to understand denial volume by payer and reason, current staffing, available source records, appeal outcomes, and the practical standard a useful system would need to meet. That is enough to determine whether a focused validation project is possible.",
      ],
    },
    {
      id: "what-comes-next",
      title: "10 What comes next",
      paragraphs: [
        "NaS will earn the right to broaden the platform one workflow at a time. The immediate work is to secure a design partner, complete the legal and security path for approved data, deploy the system in an accepted environment, and test it against real historical records and prospective shadow cases.",
        "Deeper connections to electronic health records, clearinghouses, payer services, and products such as Epic can follow validated demand. CMS API requirements for certain medical prior authorizations generally begin in 2027 for impacted payers and exclude drug prior authorizations. Those requirements may improve data exchange without eliminating evidence assembly, exception management, human accountability, or outcome reconciliation.",
        "The underlying product will remain independent of any single record system because the evidence required to resolve a denial often spans clinical, billing, remittance, policy, and payer sources.",
        "We are publishing this work now to invite scrutiny and collaboration before results exist. Practices and billing organizations that want to test a narrow, accountable denial workflow can contact NaS to begin with a nonconfidential discussion.",
      ],
    },
  ],
  sources: [
    {
      title: "Centers for Medicare and Medicaid Services National Health Expenditure Fact Sheet",
      url: "https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/nhe-fact-sheet",
    },
    {
      title: "KFF Claims Denials and Appeals in ACA Marketplace Plans in 2023",
      url: "https://www.kff.org/private-insurance/claims-denials-and-appeals-in-aca-marketplace-plans-in-2023/",
    },
    {
      title: "American Hospital Association 2026 Costs of Caring Report",
      url: "https://www.aha.org/system/files/media/file/2026/03/Costs-of-Caring-2026.pdf",
    },
    {
      title: "CAQH 2024 Index Report",
      url: "https://www.caqh.org/hubfs/Index/2024%20Index%20Report/CAQH_IndexReport_2024_FINAL.pdf",
    },
    {
      title: "Centers for Medicare and Medicaid Services Prior Authorization Final Rule",
      url: "https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-prior-authorization-final-rule-cms-0057-f",
    },
    {
      title: "Centers for Medicare and Medicaid Services National Coverage Determination 220.2 Magnetic Resonance Imaging",
      url: "https://www.cms.gov/medicare-coverage-database/view/ncd.aspx?ncdid=177&ncdver=6",
    },
    {
      title: "Centers for Medicare and Medicaid Services First Level Medicare Redetermination",
      url: "https://www.cms.gov/medicare/appeals-grievances/fee-for-service/first-level-appeal-redetermination-medicare-contractor",
    },
    {
      title: "United States Department of Health and Human Services Guidance on HIPAA and Cloud Computing",
      url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html",
    },
    {
      title: "United States Department of Health and Human Services Business Associates Guidance",
      url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html",
    },
    {
      title: "United States Department of Health and Human Services Security Rule Certification Guidance",
      url: "https://www.hhs.gov/hipaa/for-professionals/faq/2003/are-we-required-to-certify-our-organizations-compliance-with-the-standards/index.html",
    },
  ],
};
