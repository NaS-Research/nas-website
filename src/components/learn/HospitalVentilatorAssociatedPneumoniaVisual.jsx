export const hospitalVentilatorAssociatedPneumoniaVisualTypes = [
  "definitions-pathogenesis",
  "diagnosis-differential",
  "sampling-microbiology",
  "empiric-risk",
  "hap-empiric-therapy",
  "vap-empiric-therapy",
  "pkpd-individualization",
  "definitive-resistant-pathogens",
  "duration-deescalation",
  "prevention-system",
].map((type) => `hvap-${type}`);

const diagrams = {
  "definitions-pathogenesis": [
    "Syndrome map",
    "Anchor the label to time, airway, and exposure",
    ["Admit", "Hospital clock", "HAP begins at least 48 hours after admission."],
    ["Intubate", "Airway clock", "VAP begins more than 48 hours after intubation."],
    ["Seed", "Microaspiration", "Secretions and biofilm deliver organisms to distal airspaces."],
    ["Select", "Hospital ecology", "Prior therapy and local flora change resistance probability."],
  ],
  "diagnosis-differential": [
    "Diagnostic frame",
    "Separate infection from critical-illness noise",
    ["Observe", "Compatible syndrome", "Imaging, secretions, oxygenation, fever, and leukocytes form a pattern."],
    ["Challenge", "Alternative cause", "Edema, atelectasis, ARDS, embolism, and hemorrhage can imitate pneumonia."],
    ["Distinguish", "VAE from VAP", "A surveillance event does not establish an infectious diagnosis."],
    ["Reassess", "Trajectory", "Discordant response should reopen the diagnostic model."],
  ],
  "sampling-microbiology": [
    "Evidence loop",
    "Make each respiratory result capable of changing care",
    ["Collect", "Timely specimen", "Obtain a quality sample before therapy when urgent care is not delayed."],
    ["Prefer", "Noninvasive VAP sample", "Endotracheal semiquantitative culture is the routine approach."],
    ["Interpret", "Colonization boundary", "Airway growth must fit burden, imaging, host response, and trajectory."],
    ["Own", "Pending result", "Assign the reviewer, expected time, and treatment consequence."],
  ],
  "empiric-risk": [
    "Breadth gate",
    "Let risk and local susceptibility earn every empiric agent",
    ["Retrieve", "Prior isolate", "Individual microbiology can outweigh a broad healthcare label."],
    ["Review", "Recent IV therapy", "Exposure within 90 days raises resistance probability."],
    ["Measure", "Consequence", "Shock and ventilatory failure reduce tolerance for inactive therapy."],
    ["Set", "Local threshold", "Unit susceptibility determines whether one or two gram-negative classes are needed."],
  ],
  "hap-empiric-therapy": [
    "HAP prescription",
    "Translate empiric spectrum into an executable order",
    ["Frame", "MSSA plus gram-negative", "Start with a locally reliable antipseudomonal backbone."],
    ["Gate", "MRSA coverage", "Use patient risk, unit prevalence, and mortality risk."],
    ["Gate", "Second class", "Add only when monotherapy reliability is not adequate."],
    ["Schedule", "Antibiotic time-out", "Reassess diagnosis, exposure, cultures, and every remaining drug."],
  ],
  "vap-empiric-therapy": [
    "VAP prescription",
    "Build from ICU ecology, then contract with evidence",
    ["Cover", "Core ecology", "Address S. aureus, Pseudomonas, and other gram-negative bacilli."],
    ["Add", "MRSA agent", "Choose vancomycin or linezolid when the evidence gate opens."],
    ["Pair", "Complementary classes", "Use dual gram-negative therapy only for defined uncertainty."],
    ["Narrow", "One active target", "Susceptibility and stability should collapse unnecessary combination therapy."],
  ],
  "pkpd-individualization": [
    "Exposure engine",
    "Match the dose to a changing critically ill patient",
    ["Load", "Distribution", "Reach the target promptly despite expanded volume."],
    ["Maintain", "Clearance", "Adjust repeated exposure as renal support and physiology change."],
    ["Extend", "Infusion time", "Improve beta-lactam target attainment with an operationally sound plan."],
    ["Measure", "Patient concentration", "Use observed levels for true dose individualization."],
  ],
  "definitive-resistant-pathogens": [
    "Definitive pathway",
    "Replace the empiric label with organism and mechanism",
    ["Confirm", "Causal isolate", "Decide whether the recovered organism explains invasive pneumonia."],
    ["Resolve", "Resistance mechanism", "Distinguish MRSA, ESBL, DTR Pseudomonas, and CRAB pathways."],
    ["Select", "Best active regimen", "Balance susceptibility, lung exposure, toxicity, and evidence."],
    ["Monitor", "Response and emergence", "Recheck exposure, organ function, and microbiologic trajectory."],
  ],
  "duration-deescalation": [
    "Seven-day framework",
    "Use response to guide narrowing and the final stop",
    ["Review", "48 to 72 hours", "Reassess the diagnosis, specimen, susceptibility, and clinical response."],
    ["Narrow", "De-escalation", "Move to one focused agent when uncertainty resolves."],
    ["Count", "Active treatment days", "Seven days is standard for most improving HAP and VAP."],
    ["Reopen", "Failure", "Look for exposure problems, resistance, complications, and another diagnosis."],
  ],
  "prevention-system": [
    "Prevention system",
    "Reduce device exposure and preserve host function",
    ["Avoid", "Unnecessary intubation", "Use noninvasive support when safe and appropriate."],
    ["Liberate", "Ventilation", "Coordinate sedation reduction, breathing trials, and mobility."],
    ["Clean", "Mechanical oral care", "Use daily toothbrushing without routine chlorhexidine."],
    ["Remove", "Avoidable exposure", "Limit unnecessary tubes, circuit changes, and antimicrobial pressure."],
  ],
};

export default function HospitalVentilatorAssociatedPneumoniaVisual({ type }) {
  const diagram = diagrams[type.replace("hvap-", "")];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;

  return (
    <figure className="chol-visual hospital-ventilator-associated-pneumonia-visual" aria-label={title}>
      <figcaption>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
      </figcaption>
      <div className="chol-visual__grid">
        {nodes.map(([verb, focus, detail], index) => (
          <div key={`${verb}-${focus}`}>
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
