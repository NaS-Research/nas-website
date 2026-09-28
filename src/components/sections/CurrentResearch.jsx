import { researchItems } from "@/data/researchLibrary";
import { publicationArtwork } from "@/data/publicationArtwork";
import ResearchGallery from "./ResearchGallery";

// Include the full public library, including releases and institutional essays.
export default function CurrentResearch() {
  const studies = researchItems.filter(item =>
    item.publicationStatus !== "draft"
  ).flatMap(item => {
    const slug = item.slug;
    const artwork = publicationArtwork[slug];
    return item && artwork ? [{
      slug, title: item.shortTitle || item.title, type: item.type,
      area: item.area, image: artwork.src, workspaceFilm: Boolean(artwork.workspaceFilm), mark: Boolean(artwork.mark),
    }] : [];
  });
  return <ResearchGallery studies={studies} />;
}
