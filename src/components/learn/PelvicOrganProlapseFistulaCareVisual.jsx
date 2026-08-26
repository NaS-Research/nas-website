export const pelvicOrganProlapseFistulaCareVisualTypes = [
  "pop-support-map",
  "pop-assessment",
  "pop-conservative",
  "pop-pessary",
  "pop-surgery",
  "pop-continence",
  "pop-mesh",
  "fistula-diagnosis",
  "fistula-repair",
  "fistula-recovery",
];

const diagrams = {
  "pop-support-map": ["Support architecture", "Symptoms emerge when structure, pressure, and function stop working together", ["Suspend", "Apical support", "Cardinal and uterosacral support stabilize the vaginal apex"], ["Reinforce", "Vaginal walls", "Anterior and posterior compartments share fascia with bladder and rectum"], ["Close", "Pelvic floor", "Levator and connective tissue resist downward pressure"], ["Function", "Bladder, bowel, vagina", "The meaningful outcome is function, not anatomy alone"]],
  "pop-assessment": ["Clinical localization", "Translate the symptom into anatomy, function, and decision consequence", ["Listen", "Bulge and pressure", "Ask when symptoms appear and what the patient cannot do"], ["Examine", "POP-Q and tissue", "Measure each compartment and repeat with position when needed"], ["Test", "Only when directed", "Investigate bladder, bowel, pain, bleeding, mass, or renal concerns"], ["Decide", "Shared priorities", "Observation, conservative care, pessary, or surgery follow the patient's goals"]],
  "pop-conservative": ["Conservative pathway", "Reduce pressure, restore control, and treat tissue symptoms", ["Modify", "Load and bowel strain", "Address constipation, cough, lifting, and weight when relevant"], ["Train", "Pelvic floor", "Use supervised, verified contractions over a sustained program"], ["Treat", "Vaginal tissue", "Use local estrogen for appropriate menopause-associated symptoms"], ["Reassess", "Function and burden", "Escalate only when symptoms or goals require another approach"]],
  "pop-pessary": ["Pessary care loop", "A device works only when fitting, ownership, and surveillance remain connected", ["Select", "Shape and function", "Match retention, intercourse goals, dexterity, and anatomy"], ["Fit", "Movement and emptying", "Confirm comfort, retention, voiding, and bowel function"], ["Teach", "Removal and warning signs", "Assign cleaning, follow-up, and urgent symptom instructions"], ["Inspect", "Tissue and device", "Prevent neglect, erosion, incarceration, and rare fistula"]],
  "pop-surgery": ["Procedure selection", "Choose the operation by desired function, support defect, route, and material", ["Define", "Future function", "Clarify intercourse, uterine preference, fertility, recovery, and recurrence tolerance"], ["Reconstruct", "Preserve vaginal patency", "Repair the involved compartments and meaningful apical loss"], ["Obliterate", "Colpocleisis", "Reserve for an informed patient who does not desire future vaginal intercourse"], ["Compare", "Native tissue and sacrocolpopexy", "Use exact route and material language with balanced risk counseling"]],
  "pop-continence": ["Bladder interface", "Prolapse correction can uncover, improve, or create urinary symptoms", ["Reveal", "Occult stress leakage", "Reduce the prolapse during stress testing when the result changes counseling"], ["Clarify", "Complex function", "Use urodynamics selectively when basic assessment cannot resolve the decision"], ["Choose", "Concurrent or staged care", "Balance lower stress leakage risk against voiding and procedural harm"], ["Protect", "Postoperative emptying", "Standardize the voiding trial, residual threshold, and rescue plan"]],
  "pop-mesh": ["Mesh context", "Route, indication, device, anatomy, and symptom determine the relevant evidence", ["Separate", "Transvaginal POP mesh", "These products are no longer marketed in the United States"], ["Distinguish", "Sacrocolpopexy and sling", "Abdominal apical mesh and continence slings are different procedures"], ["Localize", "Exposure, pain, or organ symptoms", "Use examination, operative details, cystoscopy, and imaging selectively"], ["Target", "Revision goal", "Removal is not automatic and cannot guarantee complete symptom relief"]],
  "fistula-diagnosis": ["Fistula localization", "Identify the organs connected before selecting treatment", ["Pattern", "Continuous or positional leakage", "Use timing, normal voiding, urine, stool, and gas to narrow anatomy"], ["Context", "Obstetric, surgical, radiation, malignant", "Etiology predicts tissue loss and healing potential"], ["Confirm", "Dye, cystoscopy, creatinine", "Choose a direct test that can prove the suspected connection"], ["Map", "CT excretory phase or MRI", "Protect the upper tract and define difficult, multiple, or complex paths"]],
  "fistula-repair": ["Repair architecture", "Healthy tissue and protected closure determine durable healing", ["Divert", "Urine and contamination", "Protect skin, kidneys, and the future repair while anatomy is defined"], ["Prepare", "Tissue readiness", "Control infection, inflammation, necrosis, and active disease"], ["Close", "Watertight and tension free", "Separate planes, preserve organs, and use vascular tissue when needed"], ["Protect", "Postoperative drainage", "Maintain catheter patency and document removal or imaging criteria"]],
  "fistula-recovery": ["Recovery system", "Success includes health, function, agency, and social reintegration", ["Heal", "Skin, nutrition, pain", "Begin supportive care before definitive closure when needed"], ["Restore", "Continence and sexual function", "Use rehabilitation and patient-led functional goals"], ["Support", "Trauma and social harm", "Address mental health, relationships, work, access, and stigma"], ["Prevent", "Health-system failure", "Improve obstetric access, injury recognition, referral, and device follow-up"]],
};

export default function PelvicOrganProlapseFistulaCareVisual({ type }) {
  const item = diagrams[type];
  if (!item) return null;
  const [eyebrow, title, ...nodes] = item;
  return (
    <figure className="chol-visual pelvic-care-visual" aria-label={title}>
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
