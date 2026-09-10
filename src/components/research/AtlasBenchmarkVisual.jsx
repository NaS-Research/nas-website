export default function AtlasBenchmarkVisual() {
  return (
    <figure className="atlas-benchmark-visual">
      <picture className="atlas-benchmark-visual__art">
        <source media="(max-width: 767px)" type="image/avif" srcSet="/research/atlas-rnu42/optical-study-mobile-720.avif 720w, /research/atlas-rnu42/optical-study-mobile-960.avif 960w" sizes="100vw" />
        <source media="(max-width: 767px)" type="image/webp" srcSet="/research/atlas-rnu42/optical-study-mobile-720.webp 720w, /research/atlas-rnu42/optical-study-mobile-960.webp 960w" sizes="100vw" />
        <source type="image/avif" srcSet="/research/atlas-rnu42/optical-study-960.avif 960w, /research/atlas-rnu42/optical-study-1600.avif 1600w" sizes="100vw" />
        <img src="/research/atlas-rnu42/optical-study-1600.webp" srcSet="/research/atlas-rnu42/optical-study-960.webp 960w, /research/atlas-rnu42/optical-study-1600.webp 1600w" sizes="100vw" width="1672" height="941" alt="A delicate transparent glass ribbon with a warm edge reflection against black. Conceptual artwork." fetchPriority="high" decoding="async" />
      </picture>
      <figcaption className="atlas-benchmark-visual__disclosure">Conceptual artwork</figcaption>
    </figure>
  );
}
