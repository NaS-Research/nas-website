export default function EvidenceFigure({ figure, children }) {
  return (
    <figure className="publication-evidence-figure" aria-labelledby={`${figure.id}-caption`}>
      <picture>
        <source media="(max-width: 767px)" srcSet={figure.mobileSrc} width={figure.mobileWidth} height={figure.mobileHeight} />
        <img src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} loading="lazy" decoding="async" />
      </picture>
      <figcaption id={`${figure.id}-caption`}>
        <strong>Figure {figure.number}. </strong>{figure.caption}{children}
        <span className="publication-evidence-figure__links">
          <a href={figure.src} target="_blank" rel="noopener noreferrer">Open figure (SVG) ↗</a>
          {figure.dataUrl && <a href={figure.dataUrl} download>Reported values and calculations (CSV) ↓</a>}
        </span>
      </figcaption>
    </figure>
  );
}
