const stages = [
  { number: "01", title: "Denial", detail: "Receive and reconcile the payer response" },
  { number: "02", title: "Policy", detail: "Select the governed payer rule and version" },
  { number: "03", title: "Evidence", detail: "Link support and expose what is missing" },
  { number: "04", title: "Human review", detail: "Approve the clinical and operational assertions" },
  { number: "05", title: "Appeal", detail: "Submit through the customer's authorized channel" },
  { number: "06", title: "Outcome", detail: "Reconcile the decision and verified payment" },
  { number: "07", title: "Prevention", detail: "Turn recurring causes into upstream tasks" },
];

export default function DenialsWorkflowFigure({ compact = false, theme = "light" }) {
  return (
    <figure
      className={`denials-workflow ${compact ? "denials-workflow--compact" : ""} denials-workflow--${theme}`}
      aria-labelledby={compact ? undefined : "denials-workflow-caption"}
      aria-label={compact ? "NaS Denials workflow from denial through prevention" : undefined}
    >
      <ol>
        {stages.map((stage) => (
          <li key={stage.number}>
            <span className="denials-workflow__number" aria-hidden="true">{stage.number}</span>
            <strong>{stage.title}</strong>
            {!compact && <span>{stage.detail}</span>}
          </li>
        ))}
      </ol>
      {!compact && (
        <figcaption id="denials-workflow-caption">
          Figure 1. Each denial becomes a governed case whose verified outcome can inform prevention.
        </figcaption>
      )}
    </figure>
  );
}
