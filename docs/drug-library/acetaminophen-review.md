# Acetaminophen structured reference

Source check: October 1, 2026. This is a focused oral reference, not a comprehensive prescribing monograph. It does not assert independent pharmacist sign-off or automated currency monitoring.

## Section review

- Identification and indications: single-ingredient Tylenol Extra Strength Drug Facts, DailyMed set ID `17cfa99d-abb2-4d77-9e0e-e77109fbb61a`. The previous generic-name API result was a four-ingredient cold product; the structured route bypasses that reader. Other drug pages retain their existing behavior.
- Immediate-release dosing: the linked 500 mg product specifies two caplets every six hours, six caplets in 24 hours unless physician-directed, age 12 and older. Six times 500 mg is 3,000 mg; the FDA 4,000 mg ceiling does not replace the lower product limit.
- Extended-release dosing: DailyMed set ID `5d7d1300-bcb8-466a-880b-310b360ee132`; two 650 mg caplets every eight hours, six in 24 hours (3,900 mg), swallow whole. This label says **do not use under 12**, unlike the immediate-release label's **ask a doctor** direction.
- Pediatric suspension: DailyMed set ID `3162733b-9382-39f1-e063-6294a90ac420`. Strength 160 mg per 5 mL; transcribed product-specific weight/age bands and volumes checked; repeat every four hours, at most five doses in 24 hours; under two years or under 24 lb requires a doctor. No universal infant regimen inferred.
- Safety and counseling: FDA acetaminophen safety page and MedlinePlus. Duplicate ingredients, hepatic injury, alcohol, severe skin reactions, escalation intervals, and urgent overdose response retained. Product contraindications are distinguished from IV contraindications.
- Boxed warning, interactions, organ impairment, and pharmacology: DailyMed injection set ID `8481d9f3-d2a5-457f-b92c-99445d063c8f`. IV warning and trial findings explicitly labeled as IV; adult half-life 2.4 hours is identified as an IV-study mean, not a universal oral value. No IV dosing protocol is provided.
- Pregnancy: FDA September 22, 2025 communication distinguishes association from causation; ACOG's official practice-advisory search result supports its contrasting professional guidance. Direct ACOG page retrieval was restricted. Links to both retained; no blanket claim of proven safety or causal harm. FDA's general safety page and newer communication have different emphasis; the dated communication is explicitly identified.
- Lactation: current LactMed page, revised April 15, 2026. The search-indexed PDF showed a January revision; the current HTML was used.
- Product and storage: exact 500 mg label; packager Kenvue, white oval unscored 19 mm, imprint TYLENOL/500, example NDC 50580-378-02 (100 caplets), 20–25°C. Product photos are linked to original sources rather than represented by generated pill imagery.

## Content maintenance

The monograph stores section content separately from presentation, includes references for every subsection, and displays the source-check date. A new revision requires source review and a date update; these fixed summaries do not automatically change when external labels change.

## Release checks

Production build and rendered desktop/mobile checks are required before release. Verify sticky rail positioning, active section updates, keyboard/native disclosure behavior, pediatric table visibility, source anchors, absence of horizontal overflow, and an unchanged representative legacy drug page. Confirm the deployed route separately after pushing.
