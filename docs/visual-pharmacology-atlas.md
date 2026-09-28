# Visual pharmacology atlas

The default Visual Atlas tab now teaches drug effects. Anatomy exploration and the existing pharmacology workspaces remain accessible as separate tabs.

## Shipped lesson scope

- Dicyclomine (oral): eight region-based teaching points, baseline/drug comparison, context scenarios, reasoning questions, label-reported trial rates and source links.
- Albuterol (inhalation aerosol): four region-based teaching points, baseline/drug comparison, beta-blocker and potassium-losing-diuretic scenarios, reasoning questions and source links.
- Library search routes mapped medicines to their visual lessons and other medicines to their existing label profiles. Drug profiles for the two mapped medicines link back to the atlas. `?drug=dicyclomine` and `?drug=albuterol` select lessons.
- Optional current-label lookup uses the site's existing openFDA/DailyMed endpoint. Generic-name results can include formulations or combinations beyond the specific lesson's source product.

These are authored, source-grounded lessons, not a live generative model, commercial DrugBank integration, patient-specific simulator or exhaustive adverse-effect catalog. The 3D color, schematic motion and context outlines are qualitative. Skin/sweat locations explicitly declare that sweat-gland geometry is absent. Systemic and additional label events are addressed below the map with links to full sources. Clinical content has not received independent clinician review in this change.

## Implementation

`src/data/drugAtlas.js` keeps lesson text, source provenance, trial data, region selectors, scenarios and questions together. `DrugEffectsAtlas.jsx` coordinates views; `DrugMechanismVisual.jsx` renders the schematic tissue/receptor responses. `public/learn/body-atlas/teaching.js` handles anatomical highlighting and projected, keyboard-accessible markers in the existing Three.js viewer. No new dependency or service credential was added.

## Validation

- `node --test scripts/test-drug-atlas.mjs`: verifies anatomical target resolution, scenario references, question choices and the dicyclomine/placebo trial pairs and context.
- Production build: `npm run build -- --webpack`.
- Browser checks: lesson switching, albuterol deep link, baseline state, hot-weather scenario, question feedback, unmapped-drug library search, desktop and 390px page sizing.
- Local label API probes returned populated profiles and five DailyMed records for both medicines.

The source data can be extended with additional medicines. Each new map needs explicit anatomical selectors, evidence categories, source verification, coherent questions and clinical review before being represented as a reviewed teaching resource.

## Reference-driven workspace refinement

The drug explorer now uses three columns: medicine and scenario controls, a central visualization with whole-body/tissue/receptor scales, and illustrated effect cards. Selecting a card updates the anatomical selection and opens its tissue schematic. On small screens, cards precede the model and selection scrolls to the visualization. Baseline comparisons, mechanism explanations, evidence, and reasoning questions retain the existing authored lesson data. The circular thumbnails are schematic illustrations, not anatomical photography.

## Molecular journey

A seven-chapter journey now provides an orbitable procedural Three.js membrane scene, receptor and drug symbols, baseline comparison, chapter playback, and a return to the body map. Dicyclomine illustrates muscarinic antagonism; albuterol illustrates receptor activation, Gs, adenylyl cyclase, cAMP, and airway relaxation. All pathway states are qualitative. Geometry, motion, particle numbers, and spatial relationships are illustrative, not experimental structures or pharmacokinetic calculations. No live generative AI service is involved.

Additional mechanism cross-check: https://pubmed.ncbi.nlm.nih.gov/172625/ (albuterol and the cyclic AMP system); https://pubmed.ncbi.nlm.nih.gov/9817738/ (beta-adrenoceptor signaling). Both journeys link to their existing DailyMed label source in the UI.

## Anatomy foundation

The anatomy workspace now has a six-organ guide alongside the full structure index. Guided selections group the heart's four chamber meshes, five lung lobes, both kidneys, or the named liver, stomach, and pancreas meshes. Learners can isolate, restore context, refocus, and explore sourced function steps. A movable coronal, sagittal, or transverse clipping plane operates on the bundled geometry; cut faces remain open and no histological or scan data is implied. Section picking ignores clipped intersections. Layer opacity, exploded views, individual structure search, and the detailed heart lab remain available. `?mode=anatomy` opens the workspace directly.

Validation: `node --test scripts/test-anatomy-lessons.mjs scripts/test-drug-atlas.mjs` verifies organ membership against the actual model catalog and existing drug data invariants.
