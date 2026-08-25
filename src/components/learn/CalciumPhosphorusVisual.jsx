const cards = {
  "mineral-regulation": {
    title: "Four tissues, one mineral economy",
    content: <div className="mineral-visual__regulation">
      <div><span>Parathyroid</span><strong>PTH</strong><small>Responds to ionized calcium and changes kidney and bone handling.</small></div>
      <i aria-hidden="true">↘</i>
      <div><span>Kidney</span><strong>Retain Ca · Excrete PO₄</strong><small>Activates vitamin D and sets the final urinary balance.</small></div>
      <div><span>Intestine</span><strong>Absorb Ca + PO₄</strong><small>Calcitriol increases delivery from the diet.</small></div>
      <i aria-hidden="true">↖</i>
      <div><span>Bone</span><strong>Store · Release · Signal</strong><small>Mineral reservoir and source of FGF23.</small></div>
    </div>,
  },
  "calcium-fractions": {
    title: "Total calcium is a sum, not a physiologic verdict",
    content: <div className="mineral-visual__fractions">
      <div className="mineral-visual__fraction mineral-visual__fraction--active"><strong>≈ 50%</strong><span>Ionized</span><small>Biologically active</small></div>
      <div className="mineral-visual__fraction"><strong>≈ 40%</strong><span>Protein bound</span><small>Mostly albumin</small></div>
      <div className="mineral-visual__fraction"><strong>≈ 10%</strong><span>Complexed</span><small>Citrate, phosphate, other anions</small></div>
      <p>Albumin and pH can change the fractions. Measure ionized calcium when that distinction changes care.</p>
    </div>,
  },
  "hypocalcemia-response": {
    title: "Stabilize, identify, sustain",
    content: <div className="mineral-visual__sequence">{[
      ["01", "Recognize symptoms and ECG risk"],
      ["02", "Give monitored calcium when urgent"],
      ["03", "Check magnesium, phosphate, PTH, vitamin D, and kidney function"],
      ["04", "Correct the cause and transition to durable therapy"],
      ["05", "Recheck calcium and treatment complications"],
    ].map(([number, text]) => <div key={number}><span>{number}</span><strong>{text}</strong></div>)}</div>,
  },
  "hypercalcemia-response": {
    title: "Bridge the emergency to the mechanism",
    content: <div className="mineral-visual__response">
      <div><span>Minutes to hours</span><strong>Assess · Hydrate · Stabilize</strong><small>Individualize fluid and protect organ function.</small></div>
      <div><span>Hours</span><strong>Calcitonin bridge</strong><small>Rapid effect, limited to 48 to 72 hours.</small></div>
      <div><span>Days</span><strong>Antiresorptive effect</strong><small>IV bisphosphonate or denosumab when indicated.</small></div>
      <div><span>Durable control</span><strong>Treat the cause</strong><small>PTH, malignancy, calcitriol, medication, or another mechanism.</small></div>
    </div>,
  },
  "phosphate-balance": {
    title: "Three ways phosphate falls",
    content: <div className="mineral-visual__balance">
      <div><span>Shift inward</span><strong>Insulin · alkalosis · catecholamines</strong></div>
      <div><span>Absorb less</span><strong>Poor intake · malabsorption · binders</strong></div>
      <div><span>Lose more</span><strong>PTH · tubulopathy · medication</strong></div>
      <p><strong>Then ask:</strong> Is it symptomatic? Can the gut be used? Which cation is safe? What does kidney function permit?</p>
    </div>,
  },
  "ckd-mbd": {
    title: "Read the pattern across time",
    content: <div className="mineral-visual__ckd">
      {[["PO₄", "Retention and dietary load"], ["Ca", "Balance and calcium exposure"], ["PTH", "Adaptive or autonomous signal"], ["Vitamin D", "Stores and active hormone"], ["Bone", "Turnover and fracture risk"], ["Vessels", "Calcification burden"]].map(([name, detail]) => <div key={name}><strong>{name}</strong><span>{detail}</span></div>)}
    </div>,
  },
};

export default function CalciumPhosphorusVisual({ type }) {
  const card = cards[type];
  if (!card) return null;
  return <figure className={`mineral-visual mineral-visual--${type}`} aria-labelledby={`${type}-title`}>
    <figcaption><span>Clinical map</span><strong id={`${type}-title`}>{card.title}</strong></figcaption>
    {card.content}
  </figure>;
}
