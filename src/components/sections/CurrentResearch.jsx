import { researchItems } from "@/data/researchLibrary";
import { publicationArtwork } from "@/data/publicationArtwork";
import ResearchGallery from "./ResearchGallery";

// Editorial selection: public releases only, never unpublished project records.
const selectedSlugs = [
  "pam50-technical-repeatability",
  "alphagenome-atlas-rnu4-2",
  "introducing-nas-cortex",
  "introducing-nas-denials",
];

export default function CurrentResearch() {
  const studies = selectedSlugs.flatMap(slug => {
    const item = researchItems.find(entry => entry.slug === slug);
    const artwork = publicationArtwork[slug];
    return item && artwork ? [{
      slug, title: item.shortTitle || item.title, type: item.type,
      area: item.area, image: artwork.src,
    }] : [];
  });
  return <ResearchGallery studies={studies} />;
}
