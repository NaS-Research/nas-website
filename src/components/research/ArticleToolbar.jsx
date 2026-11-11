import ArticleAudioPlayer from "./anatomy-release-preview/ArticleAudioPlayer";
import PublicationActions from "./PublicationActions";
import {getArticleCitation, getArticleReadTime} from "@/lib/articleTools.mjs";
import {getResearchPdfUrl} from "@/data/researchTaxonomy.mjs";
import {publicationArtwork} from "@/data/publicationArtwork";
import styles from "./article-toolbar.module.css";

export function ArticleByline({item}) {
  return <div className={styles.byline}>
    <span>By {item.authors.join(", ")}{item.affiliation && ` · ${item.affiliation}`}</span>
    <span className={styles.readingEstimate} aria-label={`Estimated reading time: ${getArticleReadTime(item)}`}>{getArticleReadTime(item)}</span>
  </div>;
}

export default function ArticleToolbar({item}) {
  const hasAudio = Boolean(item.narrationSrc);
  const actions = <PublicationActions compact
    citation={getArticleCitation(item)}
    pdfUrl={getResearchPdfUrl(item)}
    dataUrl={item.reproducibilityUrl}
    dataLabel="Data & analysis"
    title={item.title}
    url={`https://nasresearch.bio/research/${item.slug}`}/>;
  return <div className={styles.toolbar} data-article-toolbar data-has-audio={hasAudio}>
    {hasAudio ? <ArticleAudioPlayer
      key={item.slug}
      src={item.narrationSrc}
      title={item.title}
      cover={publicationArtwork[item.slug]?.src || "/og.png"}
      actions={actions}
    /> : actions}
  </div>;
}
