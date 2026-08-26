export const gynecologicOncologyVisualTypes = [
  "gyn-onc-foundations",
  "gyn-onc-molecular",
  "gyn-onc-ovarian-primary",
  "gyn-onc-ovarian-maintenance",
  "gyn-onc-endometrial-local",
  "gyn-onc-endometrial-advanced",
  "gyn-onc-cervical-local",
  "gyn-onc-cervical-recurrent",
  "gyn-onc-toxicity",
  "gyn-onc-survivorship",
];

const diagrams = {
  "gyn-onc-foundations": ["Disease architecture", "Name the state before selecting treatment", ["Locate", "Primary tissue", "Ovary, tube, peritoneum, endometrium, cervix, vulva, or vagina"], ["Classify", "Histology and grade", "Define the tumor rather than the organ alone"], ["Map", "Stage and operability", "Show where disease is and what local treatment can accomplish"], ["Declare", "Intent and sequence", "Curative, adjuvant, neoadjuvant, maintenance, control, or palliation"]],
  "gyn-onc-molecular": ["Precision system", "A biomarker must change a validated decision", ["Repair", "BRCA and HRD", "Match platinum response and PARP indication"], ["Immunity", "MMR, MSI, and PD-L1", "Connect assay to checkpoint evidence and hereditary risk"], ["Classify", "POLE, p53, and HER2", "Refine endometrial prognosis and targeted therapy"], ["Target", "FRalpha and KRAS", "Use companion testing in the correct ovarian histology"]],
  "gyn-onc-ovarian-primary": ["Primary pathway", "Clear tumor, deliver platinum, prepare maintenance", ["Assess", "Resectability", "Choose primary surgery or neoadjuvant therapy"], ["Reduce", "Cytoreduction", "Aim for safe maximal removal of macroscopic disease"], ["Treat", "Carboplatin and paclitaxel", "Design renal exposure, premedication, marrow, and nerve monitoring"], ["Prepare", "Response and biomarkers", "Move from primary therapy into a matched maintenance decision"]],
  "gyn-onc-ovarian-maintenance": ["Ovarian transition", "Response becomes a biomarker-directed next state", ["Maintain", "BRCA or HRD pathway", "Use a product-specific PARP indication"], ["Reclassify", "Platinum response", "Read interval, prior benefit, and residual toxicity together"], ["Deliver", "FRalpha ADC", "Confirm companion test and protect the ocular surface"], ["Differentiate", "KRAS-mutated LGSOC", "Use the accelerated co-pack only in its defined histology"]],
  "gyn-onc-endometrial-local": ["Localized risk", "Surgery reveals the recurrence architecture", ["Sample", "Tissue and histology", "Diagnosis begins with endometrial tissue"], ["Stage", "Surgery and nodes", "Define invasion, spread, and residual risk"], ["Refine", "Molecular class", "Integrate POLE, MMR, p53, and pathology"], ["Target", "Adjuvant modality", "Match observation, radiation, or chemotherapy to relapse pattern"]],
  "gyn-onc-endometrial-advanced": ["Systemic selection", "Choose speed, target, and evidence", ["Backbone", "Carboplatin and paclitaxel", "Build the first-line cytotoxic platform"], ["Activate", "Checkpoint therapy", "Match pembrolizumab, dostarlimab, or dMMR durvalumab"], ["Modulate", "Hormone dependence", "Use endocrine pressure in selected indolent disease"], ["Direct", "HER2-positive serous", "Add trastuzumab with disease-specific testing and cardiac monitoring"]],
  "gyn-onc-cervical-local": ["Cervical continuum", "Prevention and curative therapy occupy different layers", ["Prevent", "HPV vaccination", "Reduce oncogenic infection before invasive disease"], ["Detect", "Screening and diagnosis", "Move abnormal tests into tissue and stage"], ["Remove", "Selected early disease", "Use fertility-aware or definitive surgery"], ["Control", "Chemoradiation", "Complete external beam, brachytherapy, cisplatin, and selected pembrolizumab"]],
  "gyn-onc-cervical-recurrent": ["Recurrence map", "Re-stage before assigning systemic control", ["Recover", "Local salvage", "Find selected isolated disease still open to curative treatment"], ["Select", "PD-L1 pathway", "Add pembrolizumab to the appropriate chemotherapy backbone"], ["Protect", "Bevacizumab boundary", "Interrogate fistula, bleeding, wound, bowel, renal, and vascular risk"], ["Deliver", "Tisotumab ADC", "Make ocular prophylaxis and monitoring part of every infusion"]],
  "gyn-onc-toxicity": ["Safety architecture", "Attribute the mechanism before responding", ["Calculate", "Carboplatin AUC", "Link target exposure to renal clearance"], ["Differentiate", "Marrow, nerve, kidney, and vessel", "Identify the component and cumulative pattern"], ["Intercept", "Immune and ocular toxicity", "Use organ-specific early recognition and protocol care"], ["Sustain", "Whole-person support", "Integrate fertility, symptoms, function, access, and goals"]],
  "gyn-onc-survivorship": ["Longitudinal care", "Preserve health, function, and agency across every transition", ["Plan", "Fertility and menopause", "Address reproductive goals and treatment effects before therapy"], ["Relieve", "Symptoms and function", "Integrate palliative expertise with active anticancer treatment"], ["Follow", "Survivorship", "Monitor recurrence, late effects, sexual health, and preventive care"], ["Revisit", "Goals and access", "Use shared decisions, trials, and practical support as disease changes"]],
};

export default function GynecologicOncologyVisual({ type }) {
  const item = diagrams[type];
  if (!item) return null;
  const [eyebrow, title, ...nodes] = item;
  return (
    <figure className="chol-visual gyn-onc-visual" aria-label={title}>
      <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
      <div className="chol-visual__grid">
        {nodes.map(([verb, focus, detail], index) => (
          <div key={focus}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{verb}</strong>
            <em>{focus}</em>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
