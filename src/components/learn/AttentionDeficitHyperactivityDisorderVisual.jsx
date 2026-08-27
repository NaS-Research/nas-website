const views = {
  "diagnosis-lifespan": ["Symptoms", "Onset", "Settings", "Impairment"],
  "differential-baseline": ["Sleep", "Mood", "Substances", "Medical"],
  "behavior-environment": ["Home", "School", "Work", "Skills"],
  "stimulant-pharmacology": ["DAT", "NET", "Release", "Response"],
  "formulation-engineering": ["Onset", "Coverage", "Delivery", "Food"],
  "titration-monitoring": ["Function", "Pulse", "Growth", "Sleep"],
  "stimulant-stewardship": ["Assess", "Store", "Never share", "Dispose"],
  "atomoxetine-pgx": ["CYP2D6", "Exposure", "Delay", "Monitor"],
  "alpha2-agonists": ["Signal", "Sedation", "Pressure", "Taper"],
  "viloxazine-selection": ["NRI", "CYP1A2", "Mood", "Titrate"],
  "special-populations": ["Preschool", "Adults", "Tics", "Pregnancy"],
  "integrated-outcomes": ["Attention", "Function", "Safety", "Autonomy"],
};

export const attentionDeficitHyperactivityDisorderVisualTypes = Object.keys(views).map(
  (key) => `attention-deficit-hyperactivity-disorder-${key}`,
);

export default function AttentionDeficitHyperactivityDisorderVisual({ type }) {
  const key = type.replace("attention-deficit-hyperactivity-disorder-", "");
  const labels = views[key] || views["diagnosis-lifespan"];

  return (
    <figure className="chol-visual adhd-visual" aria-label={`ADHD visual: ${key.replaceAll("-", " ")}`}>
      <div className="chol-visual__copy">
        <span>Executive control network</span>
        <h3>{key.replaceAll("-", " ")}</h3>
        <p>Connect neurobiology, daily function, treatment exposure, and safety.</p>
      </div>
      <div className="chol-visual__stage" aria-hidden="true">
        <svg viewBox="0 0 620 300">
          <path d="M108 150 C170 42 257 58 310 150 C363 242 450 258 512 150" fill="none" stroke="#efd19a" strokeWidth="3.5" strokeOpacity=".65" />
          <path d="M108 150 C170 258 257 242 310 150 C363 58 450 42 512 150" fill="none" stroke="#9e665e" strokeWidth="3" strokeOpacity=".52" />
          <circle cx="310" cy="150" r="38" fill="none" stroke="#efd19a" strokeOpacity=".3" />
          {labels.map((label, index) => {
            const point = [[108, 70], [512, 70], [108, 230], [512, 230]][index];
            return <g key={label}><path d={`M${point[0]} ${point[1]} Q310 150 310 150`} fill="none" stroke="#c99a62" strokeOpacity=".25" /><circle cx={point[0]} cy={point[1]} r="5" fill={index === 0 ? "#f2d59d" : "#9e665e"} /><text x={point[0]} y={point[1] - 15} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>;
          })}
        </svg>
      </div>
    </figure>
  );
}
