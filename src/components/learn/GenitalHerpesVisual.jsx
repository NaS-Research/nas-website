export const genitalHerpesVisualTypes = ["biology-natural-history", "diagnosis-testing", "first-episode", "episodic-therapy", "suppression-transmission", "severe-cns", "hiv-resistance", "pregnancy-delivery", "neonatal-herpes", "counseling-prevention"].map((type) => `genital-herpes-${type}`);

const diagrams = {
  "biology-natural-history": ["Map the viral cycle", "Surface", "Sensory nerve", "Ganglion", "Reactivation"],
  "diagnosis-testing": ["Choose the diagnostic path", "Lesion", "NAAT and type", "Context", "Confirm"],
  "first-episode": ["Control the first episode", "Recognize", "Treat", "Protect", "Reassess"],
  "episodic-therapy": ["Win the early treatment window", "Prodrome", "Self start", "Complete", "Review"],
  "suppression-transmission": ["Balance benefit and residual risk", "Burden", "Preference", "Suppress", "Layer prevention"],
  "severe-cns": ["Escalate invasive disease", "Syndrome", "IV exposure", "Organ support", "Monitor"],
  "hiv-resistance": ["Investigate persistent lesions", "Verify", "Culture", "Consult", "Rescue"],
  "pregnancy-delivery": ["Protect the delivery pathway", "Timing", "Suppress", "Examine", "Deliver"],
  "neonatal-herpes": ["Find the neonatal compartment", "Exposure", "Evaluate", "Treat", "Prove clearance"],
  "counseling-prevention": ["Build an honest prevention plan", "Explain", "Disclose", "Reduce risk", "Support"]
};

const notes = ["Define the biology", "Select the evidence", "Deliver the intervention", "Secure the next decision"];

export default function GenitalHerpesVisual({ type }) {
  const data = diagrams[type.replace("genital-herpes-", "")];
  if (!data) return null;
  return (
    <figure className="chol-visual genital-herpes-visual" aria-label={data[0]}>
      <figcaption><span>Clinical pathway</span><strong>{data[0]}</strong></figcaption>
      <div className="chol-visual__grid">
        {data.slice(1).map((label, index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <em>{notes[index]}</em>
            <p>Connect viral biology, anatomic risk, antiviral exposure, follow-up, and prevention.</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
