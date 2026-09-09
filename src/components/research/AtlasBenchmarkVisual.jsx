export default function AtlasBenchmarkVisual() {
  return (
    <figure className="atlas-benchmark-visual">
      <div className="atlas-benchmark-visual__label"><span>NAS-AGA-001</span><span>RNU4-2</span></div>
      <picture className="atlas-benchmark-visual__art">
        <source type="image/avif" srcSet="/research/atlas-rnu42/sequence-sculpture-960.avif 960w, /research/atlas-rnu42/sequence-sculpture-1600.avif 1600w, /research/atlas-rnu42/sequence-sculpture-2400.avif 2400w" sizes="(max-width: 767px) 94vw, 50vw" />
        <img src="/research/atlas-rnu42/sequence-sculpture-1600.webp" srcSet="/research/atlas-rnu42/sequence-sculpture-960.webp 960w, /research/atlas-rnu42/sequence-sculpture-1600.webp 1600w, /research/atlas-rnu42/sequence-sculpture-2400.webp 2400w" sizes="(max-width: 767px) 94vw, 50vw" width="1600" height="1400" alt="A suspended ribbon of precisely spaced gold and platinum plates, rendered as a conceptual sequence sculpture." decoding="async" />
      </picture>
      <figcaption className="atlas-benchmark-visual__footer">
        <p><strong>Prediction. Experiment. Perspective.</strong><span>435 transcript variants · 145 positions</span></p>
        <span className="atlas-benchmark-visual__disclosure">Conceptual artwork</span>
      </figcaption>
    </figure>
  );
}
