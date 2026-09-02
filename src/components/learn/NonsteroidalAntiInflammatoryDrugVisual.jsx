const views = {
  "pathway-benefit": ["Arachidonic acid", "COX-1 and COX-2", "PGE2", "Pain and protection"],
  aspirin: ["Aspirin", "Covalent acetylation", "Platelet COX-1", "Persistent effect"],
  "acidic-sar": ["Acidic anchor", "Aromatic region", "COX channel", "Bound conformation"],
  "profens-prodrugs": ["R profen", "S profen", "Bioactivation", "Active species"],
  "cox2-selectivity": ["COX-1 channel", "COX-2 side pocket", "Bulky substituent", "Selectivity tradeoff"],
  "selection-formulations": ["Treatment target", "Route", "Minimum exposure", "Stop date"],
  "gi-bleeding": ["Mucosal defense", "Platelet effect", "Bleeding risk", "Protection plan"],
  "renal-volume": ["Perfusion stress", "Afferent tone", "Filtration", "Volume and potassium"],
  cardiovascular: ["Thrombosis", "Blood pressure", "Congestion", "Dose and duration"],
  "special-interactions": ["Pregnancy timing", "Reaction phenotype", "Lithium", "Methotrexate"],
  "product-monitoring": ["Diclofenac liver", "Celecoxib CYP2C9", "Ketorolac limit", "Salicylate toxicity"],
  "integrated-plan": ["Indication", "Risk matrix", "Selected exposure", "Closed follow-up"],
};

export const nonsteroidalAntiInflammatoryDrugVisualTypes = Object.keys(views).map((key) => `nsaid-${key}`);

export default function NonsteroidalAntiInflammatoryDrugVisual({ type }) {
  const key = type.replace("nsaid-", "");
  const labels = views[key] || views["integrated-plan"];
  const gradientId = `nsaid-gradient-${key}`;
  return <figure className="chol-visual nsaid-visual" aria-label={`NSAID pharmacology visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy">
      <span>COX pharmacology</span>
      <h3>{key.replaceAll("-", " ")}</h3>
      <p>Trace molecular structure through prostanoid biology, patient risk, product choice, and monitored use.</p>
    </div>
    <div className="chol-visual__stage" aria-hidden="true">
      <svg viewBox="0 0 620 300">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1">
            <stop stopColor="#f0cf91" stopOpacity=".9" />
            <stop offset=".5" stopColor="#ba7046" stopOpacity=".72" />
            <stop offset="1" stopColor="#713631" stopOpacity=".44" />
          </linearGradient>
        </defs>
        <path d="M160 152 C194 78 250 59 310 100 C365 57 435 77 466 145 C435 222 368 239 310 198 C253 240 189 220 160 152Z" fill={`url(#${gradientId})`} stroke="#efc98b" strokeOpacity=".5" />
        <circle cx="310" cy="150" r="52" fill="#080808" fillOpacity=".72" stroke="#f1d39f" strokeOpacity=".55" />
        <path d="M270 150 H350 M310 110 V190" stroke="#f5dfba" strokeOpacity=".45" />
        {labels.map((label, index) => {
          const point = [[88, 52], [532, 52], [88, 254], [532, 254]][index];
          const target = [[222, 116], [398, 116], [222, 190], [398, 190]][index];
          return <g key={label}>
            <path d={`M${point[0]} ${point[1]} L${target[0]} ${target[1]}`} fill="none" stroke="#d6a86e" strokeOpacity=".52" />
            <circle cx={target[0]} cy={target[1]} r="6" fill={index < 2 ? "#efc887" : "#a94d3c"} />
            <text x={point[0]} y={point[1] - 12} textAnchor="middle" fill="#f5efe5" fontSize="14">{label}</text>
          </g>;
        })}
      </svg>
    </div>
  </figure>;
}
