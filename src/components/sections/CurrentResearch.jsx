import { researchItems } from "@/data/researchLibrary";
import { publicationArtwork } from "@/data/publicationArtwork";
import ResearchGallery from "./ResearchGallery";

// Grow with the publication library; institutional essays stay in their own collection.
export default function CurrentResearch() {
  const studies = researchItems.filter(item =>
    ["Research Report", "Research Note", "White Paper"].includes(item.type) && item.publicationStatus !== "draft"
  ).flatMap(item => {
    const slug = item.slug;
    const artwork = publicationArtwork[slug];
    return item && artwork ? [{
      slug, title: item.shortTitle || item.title, type: item.type,
      area: item.area, image: artwork.src,
    }] : [];
  });
  return <ResearchGallery studies={studies} />;
}
