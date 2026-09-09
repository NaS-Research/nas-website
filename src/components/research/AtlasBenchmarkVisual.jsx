export default function AtlasBenchmarkVisual() {
  return (
    <div className="atlas-benchmark-visual">
      <div className="atlas-benchmark-visual__label"><span>NAS-AGA-001</span><span>Research note</span></div>
      <svg viewBox="0 0 600 240" fill="none" aria-hidden="true">
        {Array.from({ length: 31 }, (_, i) => {
          const x = 30 + i * 18;
          const offset = Math.sin(i * Math.PI / 10) * 67;
          return <g key={i}>
            <line x1={x} y1={120 + offset} x2={x} y2={120 - offset} stroke="#c7a069" strokeOpacity=".28" />
            <circle cx={x} cy={120 + offset} r="4.5" fill="#c7a069" />
            <circle cx={x} cy={120 - offset} r="3" fill="#e8e8e8" />
          </g>;
        })}
      </svg>
      <p className="atlas-benchmark-visual__name">RNU4-2</p>
      <p className="atlas-benchmark-visual__caption">From predicted impact to measured effect.</p>
      <div className="atlas-benchmark-visual__stats"><p><strong>435</strong><span>transcript variants</span></p><p><strong>145</strong><span>positions</span></p><p><strong>2</strong><span>scores compared</span></p></div>
    </div>
  );
}
