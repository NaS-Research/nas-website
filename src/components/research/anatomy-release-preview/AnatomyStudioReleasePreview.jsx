import {ArticleReadingEstimate} from "@/components/research/ArticleToolbar";
import Link from 'next/link';
import RelatedResearch from '@/components/research/RelatedResearch';
import {getRelatedResearch} from '@/lib/relatedResearch.mjs';
import {researchItems} from '@/data/researchLibrary';
import PublicationContents from '@/components/research/PublicationContents';
import MobileContents from '@/components/research/MobileContents';
import '@/components/research/publication-navigation.css';
import {Fragment} from 'react';
import Footer from '@/components/Footer';
import ModelImageDeck from './ModelImageDeck';
import ModelEditorialStills from './ModelEditorialStills';
import {editorialStills} from '@/lib/anatomy-release-preview/editorial-media.mjs';
import {articleModelAssets,buildArticleModelSlides} from '@/lib/anatomy-release-preview/interactive-model.mjs';
import {anatomyStudioReleasePreview,anatomyStudioReleasePublic} from '@/data/anatomyStudioReleasePreview.mjs';
import {physicianPerspective,physicianPerspectiveVisible} from '@/lib/anatomy-release-preview/media.mjs';
import {formatPhysicianQuote} from '@/lib/anatomy-release-preview/deck.mjs';
import styles from './release.module.css';
function PhysicianPerspective(){return <section className={styles.perspective} aria-label="Physician perspective" data-quote-placement="building-biobank">{physicianPerspective?<figure aria-label={physicianPerspective.reviewerApproved ? "Physician quotation" : "Draft quotation for review; not approved by the attributed physician."}><blockquote>{formatPhysicianQuote(physicianPerspective.quote)}</blockquote><figcaption>{physicianPerspective.attribution}</figcaption></figure>:<div><p>Physician perspective</p><span>Quotation and attribution awaiting approval</span></div>}</section>;}
export default function AnatomyStudioReleasePreview({published=false,articleToolbar=null}){const article=published?anatomyStudioReleasePublic:anatomyStudioReleasePreview;const models=buildArticleModelSlides(articleModelAssets),gallerySlides=models,related=getRelatedResearch(article,researchItems);return <><main className={styles.article+' publication-page'} data-publication-version={article.version}>
 <header className={styles.hero}><div className={styles.meta}><Link href={`/research?area=${encodeURIComponent(article.area)}`}>{article.area}</Link><span aria-hidden="true">·</span><Link href={`/research?type=${encodeURIComponent(article.type)}`}>{article.type}</Link></div><h1>{article.title}</h1><p className={styles.dek}>{article.abstract}</p><p className={styles.byline}>By {article.authors.join(', ')}</p><ArticleReadingEstimate item={article}/>{articleToolbar}</header>
 <div className={styles.readingSurface} data-article-reading-surface tabIndex={-1}><div className={styles.readingLayout}><PublicationContents sections={article.sections} hasSources={false} hasCitation={false} summaryLabel="Introduction"/><MobileContents avoidOverlapSelector={'figure[data-active="true"] canvas'} sections={article.sections} hasSources={false} hasCitation={false} summaryLabel="Introduction"/><article className="publication-body"><div id="summary" className={styles.prose}>{article.introParagraphs.map(text=><p key={text}>{text}</p>)}</div>
 <div className={styles.prose}><section id={article.sections[0].id}><h2>{article.sections[0].title}</h2>{article.sections[0].paragraphs.map(text=><p key={text}>{text}</p>)}</section></div>
 <ModelEditorialStills images={editorialStills}/>

 {article.sections.slice(1).map(section=><Fragment key={section.id}><div className={styles.prose}><section id={section.id}><h2>{section.title}</h2>{section.paragraphs.map(text=><Fragment key={text}><p>{text}</p>{physicianPerspectiveVisible(published)&&section.id==='building-biobank'&&text.endsWith('These uses require different choices of framing, detail and explanation.')&&<PhysicianPerspective/>}</Fragment>)}</section></div>{section.id==='building-biobank'&&<ModelImageDeck slides={gallerySlides}/>}</Fragment>)}
 <div className={styles.prose}><Link className={styles.cta} href={article.cta.href}>{article.cta.label}<span aria-hidden="true">↗</span></Link></div>
 </article></div><RelatedResearch items={related}/></div></main><Footer/></>;}
