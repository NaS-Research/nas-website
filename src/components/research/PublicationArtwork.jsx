import Image from "next/image";
import { publicationArtwork } from "@/data/publicationArtwork";

export default function PublicationArtwork({ slug, hero = false }) {
  const art = publicationArtwork[slug];
  if (!art) return null;
  return <figure className={`publication-artwork ${hero ? "publication-artwork--hero" : "publication-artwork--cover"} ${art.mark ? "publication-artwork--mark" : ""}`}>
    <div className="publication-artwork__frame">
      {art.video ? <video src={art.video} poster={art.src} autoPlay loop muted playsInline preload="metadata" aria-label={art.alt} /> : <Image src={art.src} alt={art.alt} fill sizes={hero ? "(max-width: 1200px) 92vw, 1152px" : "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"} priority={hero} />}
    </div>
    {hero && art.caption && <figcaption>{art.caption}</figcaption>}
  </figure>;
}
