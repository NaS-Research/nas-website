# Cushing syndrome audit

Status: verified locally on 2026-09-24. Started after adrenal-insufficiency commit fabf4c3. This is an evidence-traced editorial review, not independent pharmacist certification. Earlier entries below preserve the review chronology; closing findings supersede their pending statuses.

## Initial content inspection

Read all 10 lessons, embedded checks, key points and visual definitions; all 34 assessment concept records and four-dimension generation logic (136 generated questions). The current bank uses unrelated concept distractors and always places the answer first; replacement with focused alternatives is pending. Read private book printed 635/PDF643 text, previously visually inspected in the adrenal-pharmacology audit. The book supplies a short syndrome/iatrogenic overview; the broader NaS endogenous-disease content is retained for source verification.

## First findings and corrections

Night-shift salivary testing was presented as solvable by merely adjusting collection timing. Corrected the lesson and generated concept to consider the test unsuitable and choose an appropriate alternative with endocrine guidance. The primary 2008 guideline's indexed passage directly distinguishes shift workers from people with consistently late bedtimes. The full publisher page failed and PMC returned a browser challenge; neither is claimed as a complete full-text read. Source: https://academic.oup.com/jcem/article/93/5/1526/2598096 . Further reconciliation with the 2021 consensus remains pending.

Read the accessible Endocrine Society treatment recommendations through medical-therapy selection, including recommendation 6.1b. Narrowed pituitary tumor surveillance after bilateral adrenalectomy to known Cushing disease and presumed occult ectopic secretion, with separate surveillance for a confirmed ectopic source. Source: https://www.endocrine.org/clinical-practice-guidelines/treatment-of-cushing-syndrome . Read accessible diagnosis recommendations on complementary testing, concordance and special populations; complete final diagnostic reconciliation remains pending.

Verified the existing relacorilant indication boundary against FDA's current orphan-indication listing (not approved for endogenous Cushing) and March 25, 2026 oncology approval entry. Added the two FDA references to the module. No full relacorilant label review claimed.

Repaired the absent flow/node CSS classes using the established visual grid and scoped responsive styling, after reading the relevant installed Next.js CSS-module guide. Rendered verification remains pending.

## Remaining work

Read current drug labels and reconcile indications, doses, contraindications, monitoring and interactions; verify medicinal chemistry from appropriate primary sources; finish diagnostic/localization and treatment/long-term guidance review; replace generated distractors, cover any added topics, independently verify numbers; inspect all changed figures and learner interactions on desktop/mobile; run build and structural checks; only then mark verified and commit. No push or deployment performed.


## Drug-label and assessment pass

Read current linked Isturisa (November 2025) sections 1-5.3 and interaction section 7; Recorlev (June 2023) sections 1-4 including the dose-interruption table; Korlym (September 2024) sections 1-5.8; and subcutaneous Signifor (July 2024) sections 1-5.5 plus its updated malabsorption warning. These are specified section reads, not full-label completion. Added concise drug-specific dosing, monitoring and safety paragraphs, preserving the original broader mechanism teaching. Osilodrostat's April 2025 indication expansion encompasses adult endogenous Cushing syndrome rather than only pituitary disease. Mifepristone's clinical endpoint now explicitly includes suspected adrenal insufficiency instead of the less precise phrase glucocorticoid withdrawal.

Replaced 136 repetitive generated items with 34 focused cases, topic-specific alternatives and rotating correct positions. Added four cases on osilodrostat interactions, Recorlev baseline QT exclusion, pasireotide formulation mismatch, and mifepristone rescue despite high cortisol. Bank now 38; structural audit has no hard errors or source gaps. Count-based advisories remain subject to final coverage review.

Primary-source sections: the four DailyMed links already included in module references. Independent numerical checks: twice-daily osilodrostat ceiling 30 x 2 = 60 mg/day; levoketoconazole ceiling 600 x 2 = 1200 mg/day; baseline Recorlev case 490 ms exceeds 470 ms. These checks do not replace clinical dose selection.

Direct PubMed consensus retrieval returned no article body. Direct PMC consensus and CYP11B1 structure-paper opens returned browser challenges; not counted as complete reads. Alternative accessible primary-source retrieval remains in progress. Figure/embedded-check QA is running at local port 3124; screenshots and build have not yet been reviewed.


## First rendered QA result

The desktop/mobile figure and embedded-check run completed successfully (10 sections each, HTTP 200, no page errors or horizontal overflow; all feedback and review anchors worked). Visually inspected all 20 figure captures. The intended desktop columns and mobile stack are present with readable wrapping. Floating sitewide tools/sign-in controls overlap some lower text at captured scroll positions, as in the prior module; a separate scrolling readability check remains required. Practice scoring/reset and final build remain pending.

Public Europe PMC API retrieval also failed (Python certificate-store error; system HTTPS client returned HTTP 500). No full-text read inferred from those failures. Indexed primary consensus excerpt independently supports using an alternative to late-night salivary testing for shift workers, but specialist and chemistry closure remains open.


## Accessible consensus review

Retrieved the 2021 Pituitary Society author manuscript from https://semco.org.ar/wp-content/uploads/2023/06/cushing-disease.pdf . Verified its title, authorship context and DOI against the indexed original. Read diagnostic testing and localization passages (PDF pages 3-7), cabergoline passage (pages 16-17), and etomidate passage (page 15). This is not a claim to have read all 54 pages. Confirmed the night-shift correction; added active hypercortisolism as a prerequisite for IPSS and cabergoline behavioral/escape monitoring. Revised absolute ICU-only language to closely monitored inpatient care, usually ICU, because the consensus describes selected low-dose use outside ICU. No unsupervised or outpatient infusion recommendation is introduced.

Practice checks completed on desktop and mobile: 10 correctly scored answers in each view and a new attempt cleared feedback and changed the question set. Scrolling readability check is still running. Final build must follow final content changes.

Added original cases for active-phase IPSS and cabergoline impulse-control symptoms (bank now 40). The pre-final-change readability run found all 1,633 paragraph words accessible on each viewport; final text additions need the closing pass.


## Chemistry evidence pass

Read the abstract and Figure 2 caption of Garrido et al. (2014), PMID 24508512, including experimental human CYP17A1 ketoconazole binding evidence. This supports the coordinating-nitrogen mechanism without treating a bacterial structure as a human adrenal structure. Read the indexed primary results passage 2.3.1 from the 2021 CYP11B1 mutant/metyrapone crystallography study, which directly identifies pyridyl nitrogen coordination to heme iron. Full article access remains unavailable, so only the identified passage is counted; no mutant structure is displayed or represented as native human enzyme. Added both references. Remaining chemistry checks include the unsupported comparative adjective for osilodrostat potency and historical-agent roles; these are not closed merely by the new citations.


## Closing reconciliation and validation

Read the consensus medical selection/monitoring passages (PDF pages 18-21), radiation and bilateral adrenalectomy passages (pages 21-23), and surgery/recurrence recommendations (pages 10-12). The retained source-directed operations, replacement until HPA recovery, lifelong recurrence follow-up, delayed radiation response, and post-adrenalectomy hormone replacement/surveillance agree with those passages and the Endocrine Society recommendations. No full-manuscript read is claimed.

Qualified osilodrostat's comparative enzyme potency as **in vitro** and explicitly separated it from comparative clinical safety/outcomes. Evidence was the indexed primary passage in the steroidogenic CYP selectivity study (PMC10757358), not a full-paper read. Read the human trilostane study abstract (PMID 6297208); the aminoglutethimide citation (PMID 5953457) was verified only at indexed title/metadata level. These historical references support historical context, not a present-day dosing recommendation. Current treatment selection is supported by the consensus and current labels. No unavailable full article was counted as read.

Final integrated lesson review covered all 10 sections, their 10 checks and figures, and all 40 assessment cases with answer keys, alternatives and explanations. Coverage includes recognition/exposure; testing limitations and cyclic disease; ACTH branches; imaging/IPSS; infection, thrombosis and metabolic urgency; surgery and recurrence; chemistry/indication boundaries; inhibitor safety and interactions; secretion versus receptor endpoints; and adrenalectomy/surveillance. Two-question lesson advisories reflect focused ACTH and definitive-care coverage, not missing lesson mapping. Assessment count is not a proxy for depth. Drug doses are adult label examples, with stated organ-function/interaction constraints; no pediatric extrapolation is taught.

Independent arithmetic: 30 mg twice daily = 60 mg/day; 600 mg twice daily = 1200 mg/day; 490 ms exceeds 470 ms. The Korlym ceiling requires both daily and weight-based limits, with lower label-specific limits where applicable.

Final structural audit: 40 questions; no hard errors or source gaps. Production build compiled, checked TypeScript and generated all 556 static pages. Desktop/mobile figure run inspected every figure (20 captures total), with working navigation, check feedback and review anchors, HTTP 200, no page errors or horizontal overflow. Practice scoring/reset passed 10/10 in each viewport. Final scrolling readability pass checked all 1,676 paragraph words on each viewport with zero inaccessible words. Floating global tools can cover lower text at a fixed scroll position; the scrolling pass confirmed access, and no global UI modification was included in this module commit.

Source-book coverage: printed 635/PDF 643's short Cushing overview is reconciled; the more extensive existing NaS material was retained and checked against the sources above. Chapter 46's autoimmune overview remains open. No deployment or push performed; exact-destination push authorization remains unresolved separately from local completion.
