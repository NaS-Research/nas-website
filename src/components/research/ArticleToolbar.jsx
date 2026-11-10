import ArticleAudioPlayer from "./anatomy-release-preview/ArticleAudioPlayer";
import PublicationActions from "./PublicationActions";
import {getArticleCitation, getArticleReadTime} from "@/lib/articleTools.mjs";
import {getResearchPdfUrl} from "@/data/researchTaxonomy.mjs";
import {publicationArtwork} from "@/data/publicationArtwork";
import styles from "./article-toolbar.module.css";

export function ArticleByline({item}) {
  return <div className={styles.byline}>
    <span>By {item.authors.join(", ")}{item.affiliation && ` · ${item.affiliation}`}</span>
    <span className={styles.metadataDot} aria-hidden="true">·</span>
    <span className={styles.readingEstimate} aria-label={`Estimated reading time: ${getArticleReadTime(item)}`}>{getArticleReadTime(item)}</span>
  </div>;
}

export default function ArticleToolbar({item}) {
  const pdfUrl = getResearchPdfUrl(item);
  const hasMaterials = Boolean(pdfUrl || item.reproducibilityUrl);
  const hasAudio = Boolean(item.narrationSrc);
  const citation = getArticleCitation(item);
  const url = `https://nasresearch.bio/research/${item.slug}`;
  const audioActions = !hasMaterials ? (
    <PublicationActions compact citation={citation} title={item.title} url={url}/>
  ) : null;

  return (
    <div className={styles.toolbar} data-article-toolbar data-audio-only={hasAudio && !hasMaterials}>
      {(!hasAudio || hasMaterials) && <PublicationActions
        compact
        prominentPdf
        hideShare={hasAudio}
        citation={citation}
        pdfUrl={pdfUrl}
        dataUrl={item.reproducibilityUrl}
        dataLabel={item.reproducibilityLabel}
        title={item.title}
        url={url}
      />}
      {hasAudio && <ArticleAudioPlayer
        key={item.slug}
        src={item.narrationSrc}
        title={item.title}
        cover={publicationArtwork[item.slug]?.src || "/og.png"}
        actions={audioActions}
      />}
    </div>
  );
}
