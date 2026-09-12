import Image from "next/image";
import CityCoverVideo from "./CityCoverVideo";
import ArtworkFilm from "./ArtworkFilm";
import { publicationArtwork } from "@/data/publicationArtwork";

export default function PublicationArtwork({ slug, hero = false }) {
  const art = publicationArtwork[slug];
  if (!art) return null;
  const imageSrc = hero ? (art.heroSrc ?? art.src) : art.src;
  const imageAlt = hero ? (art.heroAlt ?? art.alt) : art.alt;
  return <figure className={`publication-artwork ${hero ? "publication-artwork--hero" : "publication-artwork--cover"} ${art.mark ? "publication-artwork--mark" : ""}`}>
    <div className="publication-artwork__frame">
      {art.film ? <ArtworkFilm src={art.film} poster={imageSrc} alt={imageAlt} showControl={hero} /> : art.video ? <CityCoverVideo src={art.video} poster={imageSrc} alt={imageAlt} /> : <Image src={imageSrc} alt={imageAlt} fill sizes={hero ? "(max-width: 1200px) 92vw, 1152px" : "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"} priority={hero} />}
    </div>
  </figure>;
}
