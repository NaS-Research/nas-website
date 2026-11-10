import ArticleAudioPlayer from "./anatomy-release-preview/ArticleAudioPlayer";
import PublicationActions from "./PublicationActions";
import {getArticleCitation, getArticleReadTime} from "@/lib/articleTools.mjs";
import {getResearchPdfUrl} from "@/data/researchTaxonomy.mjs";
import {publicationArtwork} from "@/data/publicationArtwork";
import styles from "./article-toolbar.module.css";

export function ArticleReadingEstimate({item}) {
  return <p className={styles.readingEstimate} aria-label={`Estimated reading time: ${getArticleReadTime(item)}`}>
    {getArticleReadTime(item)}
  </p>;
}

export default function ArticleToolbar({item}) {
  const actions = (
    <PublicationActions
      compact
      citation={getArticleCitation(item)}
      pdfUrl={getResearchPdfUrl(item)}
      dataUrl={item.narrationSrc ? undefined : item.reproducibilityUrl}
      dataLabel={item.reproducibilityLabel}
      title={item.title}
      url={`https://nasresearch.bio/research/${item.slug}`}
    />
  );

  return (
    <div className={`${styles.toolbar}${item.narrationSrc ? "" : ` ${styles.resourcesOnly}`}`} data-article-toolbar>
      {item.narrationSrc ? (
        <ArticleAudioPlayer
          key={item.slug}
          src={item.narrationSrc}
          title={item.title}
          cover={publicationArtwork[item.slug]?.src || "/og.png"}
          actions={actions}
        />
      ) : (
        <div className={styles.resourceRow}>
          {actions}
        </div>
      )}
      {item.narrationSrc && item.reproducibilityUrl && <a className={styles.dataDownload} href={item.reproducibilityUrl}>
        {item.reproducibilityLabel || "Download data & analysis"}
        <span aria-hidden="true">↗</span>
      </a>}
    </div>
  );
}
