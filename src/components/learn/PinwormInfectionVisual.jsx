export const pinwormInfectionVisualTypes = [
  "life-cycle-transmission", "clinical-pattern-differential", "tape-test-diagnosis", "pyrantel-pharmacology",
  "mebendazole-albendazole", "dose-repeat-strategy", "household-hygiene", "special-populations", "monitoring-reinfection",
];

const diagrams = {
  "life-cycle-transmission": ["Transmission loop", "Follow eggs from nocturnal deposition to hand-to-mouth reinfection", ["Deposit", "Perianal skin at night", "Eggs create itching and surface contamination"], ["Transfer", "Hands and nails", "Scratching moves eggs to fingers and objects"], ["Ingest", "Mouth", "Swallowed eggs restart intestinal infection"], ["Persist", "Household objects", "Eggs can remain viable for weeks"]],
  "clinical-pattern-differential": ["Pattern recognition", "Use timing and morphology to separate classic disease from important mimics", ["Support", "Nocturnal perianal itch", "Sleep disruption and household clustering raise probability"], ["Inspect", "Skin and local anatomy", "Rash, fissure, abscess, or bleeding may redirect care"], ["Extend", "Genital and abdominal symptoms", "Migration and alternative disease require assessment"], ["Escalate", "Severe or atypical", "Fever, pain, weight loss, or persistence needs review"]],
  "tape-test-diagnosis": ["Three-morning collection", "Preserve perianal eggs before the morning routine and improve detection through repetition", ["Time", "Immediately after waking", "Before bathing, toileting, or dressing"], ["Sample", "Sticky tape to perianal skin", "Follow the laboratory collection kit"], ["Repeat", "Three consecutive mornings", "Intermittent deposition can be missed once"], ["Protect", "Contain and wash hands", "Reduce collector and household transfer"]],
  "pyrantel-pharmacology": ["Active-base calculation", "Move from body weight to pyrantel base and then to the exact product volume", ["Weigh", "Kilograms", "Use a current measured weight"], ["Dose", "11 mg per kg", "Express the result as pyrantel base"], ["Cap", "Maximum 1,000 mg", "Apply before converting the product"], ["Convert", "Base concentration", "Divide milligrams by milligrams per milliliter"]],
  "mebendazole-albendazole": ["Benzimidazole precision", "Keep organism-specific regimens, administration, and interaction rules distinct", ["Mebendazole", "100 mg once", "Repeat in two weeks"], ["Interaction", "Avoid metronidazole", "Serious skin reactions have been reported"], ["Albendazole", "400 mg once", "Take on an empty stomach for pinworm"], ["Review", "Patient and product", "Age, pregnancy, liver, allergy, and medicines matter"]],
  "dose-repeat-strategy": ["Two-dose logic", "Target active worms now and worms that hatch after surviving eggs", ["Day 0", "First treatment", "Reduce the active worm burden"], ["Between", "Control egg transfer", "Coordinate hands, nails, bathing, and laundry"], ["Day 14", "Repeat treatment", "Target newly hatched worms"], ["Audit", "If symptoms return", "Check dose, household, exposure, and diagnosis"]],
  "household-hygiene": ["Household control", "Pair simultaneous treatment with a sustainable two-week hygiene sequence", ["Hands", "Soap and warm water", "After toilet and diaper care, before food"], ["Morning", "Shower and change", "Remove eggs deposited overnight"], ["Laundry", "Handle gently and heat", "Avoid shaking fabrics"], ["Sustain", "Two weeks after last dose", "Prevent the cycle from restarting"]],
  "special-populations": ["Individual safety", "Coordinate household care without erasing drug-specific differences", ["Child", "Exact age and weight", "Evidence and labeling differ below age two"], ["Pregnancy", "Current risk-benefit review", "Retired letter categories are not used"], ["Lactation", "Drug-specific evidence", "Mebendazole data differ from other options"], ["Comorbidity", "Liver, allergy, swallowing", "Select product and plan individually"]],
  "monitoring-reinfection": ["Close the loop", "Distinguish response, reinfection, execution failure, toxicity, and a wrong diagnosis", ["Trend", "Itch, sleep, worms", "Measure change after each dose"], ["Verify", "Dose and household", "Confirm both dates and calculations"], ["Recheck", "Hygiene and exposure", "Childcare and household cycles can persist"], ["Refer", "Atypical or unresolved", "Broaden the diagnosis and assess toxicity"]],
};

export default function PinwormInfectionVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, ...nodes] = diagram;
  return <figure className="chol-visual pinworm-infection-visual" aria-label={title}>
    <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
    <div className="chol-visual__grid">{nodes.map(([verb, focus, detail], index) => <div key={focus}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{verb}</strong><em>{focus}</em><p>{detail}</p>
    </div>)}</div>
  </figure>;
}
