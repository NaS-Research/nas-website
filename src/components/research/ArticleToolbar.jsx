import ArticleAudioPlayer from "./anatomy-release-preview/ArticleAudioPlayer";
import PublicationActions from "./PublicationActions";
import {getArticleCitation, getArticleReadTime} from "@/lib/articleTools.mjs";
import {getResearchPdfUrl} from "@/data/researchTaxonomy.mjs";
import {publicationArtwork} from "@/data/publicationArtwork";
import styles from "./article-toolbar.module.css";

export default function ArticleToolbar({item}) {
  const readingEstimate = (
    <p className={styles.readingEstimate} aria-label={`Estimated reading time: ${getArticleReadTime(item)}`}>
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>
      </svg>
      {getArticleReadTime(item)}
    </p>
  );
  const actions = (
    <PublicationActions
      compact
      citation={getArticleCitation(item)}
      pdfUrl={getResearchPdfUrl(item)}
      dataUrl={item.reproducibilityUrl}
      dataLabel={item.reproducibilityLabel}
      title={item.title}
      url={`https://nasresearch.bio/research/${item.slug}`}
    />
  );

  return (
    <div className={styles.toolbar} data-article-toolbar>
      {item.narrationSrc ? (
        <ArticleAudioPlayer
          key={item.slug}
          src={item.narrationSrc}
          title={item.title}
          cover={publicationArtwork[item.slug]?.src || "/og.png"}
          actions={actions}
          readingEstimate={readingEstimate}
        />
      ) : (
        <div className={styles.resourceRow}>
          {readingEstimate}
          {actions}
        </div>
      )}
    </div>
  );
}
