export const cervicitisPelvicInflammatoryDiseaseVisualTypes = [
  "pid-anatomy",
  "pid-cervicitis",
  "pid-cervicitis-care",
  "pid-diagnosis",
  "pid-severity",
  "pid-outpatient",
  "pid-inpatient",
  "pid-mgen",
  "pid-special",
  "pid-follow-up",
];

const diagrams = {
  "pid-anatomy": ["Anatomic ascent", "Localize disease before selecting depth", ["Lower", "Cervical inflammation", "Exudate, friability, bleeding, and organism testing"], ["Ascend", "Endometrium and tube", "Upper-tract inflammation may outlast a cervical signal"], ["Expand", "Polymicrobial field", "Gonorrhea, chlamydia, anaerobes, and vaginal flora"], ["Protect", "Tubal architecture", "Early therapy limits scarring and reproductive sequelae"]],
  "pid-cervicitis": ["Recognition map", "Find inflammation and preserve the upper tract", ["See", "Mucopurulent exudate", "Document an objective cervical phenotype"], ["Touch", "Induced bleeding", "Friability is one of the two major signs"], ["Test", "Pathogen and vaginitis panel", "Use NAAT and acknowledge microscopy limits"], ["Lift", "PID assessment", "Pelvic pain and upper-tract tenderness change the pathway"]],
  "pid-cervicitis-care": ["Cervicitis decision", "Risk, testing, treatment, and closure", ["Estimate", "Immediate-treatment risk", "Age, exposure, prevalence, test access, and return reliability"], ["Treat", "Seven-day doxycycline", "Add gonorrhea coverage when risk or prevalence warrants"], ["Resolve", "Results and symptoms", "Treat detected infections and confirm inflammation clears"], ["Close", "Partners and retesting", "Address the prior 60 days and three-month reinfection risk"]],
  "pid-diagnosis": ["Sensitive threshold", "Treat early while the differential remains active", ["Enter", "Pelvic pain and risk", "No better cause identified"], ["Trigger", "One minimum criterion", "Cervical motion, uterine, or adnexal tenderness"], ["Refine", "Supportive evidence", "Fever, leukocytes, inflammation, discharge, or NAAT"], ["Guard", "Urgent alternatives", "Pregnancy, torsion, appendicitis, ectopic pregnancy, and abscess"]],
  "pid-severity": ["Disposition system", "Danger and feasibility decide the setting", ["Hospital", "Pregnancy or abscess", "Escalate the complicated phenotype"], ["Exclude", "Surgical emergency", "Do not let infection hide another urgent cause"], ["Support", "Severe illness or intolerance", "Route must match what the patient can absorb and complete"], ["Measure", "72-hour response", "Nonresponse demands hospitalization and diagnostic reset"]],
  "pid-outpatient": ["Three-part regimen", "One injection, two full oral courses", ["Cover", "Ceftriaxone IM", "Gonococcal coverage begins immediately"], ["Continue", "Doxycycline for 14 days", "Chlamydial and susceptible organism coverage"], ["Extend", "Metronidazole for 14 days", "Anaerobic and concurrent BV coverage"], ["Recheck", "Clinical response", "Improvement must be evident within 72 hours"]],
  "pid-inpatient": ["Parenteral pathway", "Escalate without losing duration", ["Begin", "Broad inpatient regimen", "Ceftriaxone, doxycycline, and metronidazole"], ["Monitor", "Improvement and source control", "Follow fever, tenderness, abscess, and alternate diagnoses"], ["Transition", "Oral completion", "Move after 24 to 48 hours of improvement"], ["Complete", "Fourteen total days", "Discharge changes route, not the therapeutic objective"]],
  "pid-mgen": ["Persistence reset", "Do not confuse more antibiotic with more reasoning", ["Rebuild", "Exposure and adherence", "Confirm partner care, completion, and organism results"], ["Detect", "M. genitalium NAAT", "Use selected testing and resistance guidance"], ["Resist", "Single-dose azithromycin", "Avoid efficient selection of macrolide resistance"], ["Refer", "Noninfectious disease", "Polyps, dysplasia, irritants, and idiopathic inflammation remain"]],
  "pid-special": ["Context map", "Change the right layer of the plan", ["Escalate", "Pregnancy", "Hospital, IV therapy, and specialist consultation"], ["Observe", "IUD in place", "Treat first and reassess before considering removal"], ["Individualize", "Age and HIV", "Use severity rather than demographic reflexes"], ["Clarify", "Beta-lactam allergy", "Characterize the reaction before abandoning ceftriaxone"]],
  "pid-follow-up": ["Closure architecture", "Success spans three timelines", ["Now", "Clinical improvement", "Fever and tenderness improve within 72 hours"], ["Together", "Partner treatment", "Reach contacts from the preceding 60 days"], ["Later", "Three-month retesting", "Detect reinfection after gonococcal or chlamydial PID"], ["Long term", "Reproductive health", "Address pain, recurrence, fertility, and ectopic risk"]],
};

export default function CervicitisPelvicInflammatoryDiseaseVisual({ type }) {
  const item = diagrams[type];
  if (!item) return null;
  const [eyebrow, title, ...nodes] = item;
  return (
    <figure className="chol-visual pid-visual" aria-label={title}>
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
