import Link from 'next/link';
import PublicationContents from '@/components/research/PublicationContents';
import MobileContents from '@/components/research/MobileContents';
import '@/components/research/publication-navigation.css';
import {Fragment} from 'react';
import Footer from '@/components/Footer';
import ModelImageDeck from './ModelImageDeck';
import ModelEditorialStills from './ModelEditorialStills';
import {editorialStills} from '@/lib/anatomy-release-preview/editorial-media.mjs';
import {articleModelAssets,buildArticleModelSlides} from '@/lib/anatomy-release-preview/interactive-model.mjs';
import {anatomyStudioReleasePreview as article} from '@/data/anatomyStudioReleasePreview.mjs';
import {physicianPerspective} from '@/lib/anatomy-release-preview/media.mjs';
import {formatPhysicianQuote} from '@/lib/anatomy-release-preview/deck.mjs';
import styles from './release.module.css';
export default function AnatomyStudioReleasePreview(){const models=buildArticleModelSlides(articleModelAssets),gallerySlides=models;return <><main className={styles.article+' publication-page'} data-publication-version={article.version}>
 <header className={styles.hero}><div className={styles.meta}><Link href="/research?type=Releases">Release</Link><span>NaS Research</span></div><h1>{article.title}</h1><p className={styles.dek}>{article.abstract}</p><p className={styles.byline}>By {article.authors.join(', ')}</p></header>
 <div className={styles.readingSurface}><div className={styles.readingLayout}><PublicationContents sections={article.sections} hasSources={false} hasCitation={false} summaryLabel="Introduction"/><MobileContents avoidOverlapSelector={'figure[data-active="true"] canvas'} sections={article.sections} hasSources={false} hasCitation={false} summaryLabel="Introduction"/><article className="publication-body"><div id="summary" className={styles.prose}>{article.introParagraphs.map(text=><p key={text}>{text}</p>)}</div>
 <div className={styles.prose}><section id={article.sections[0].id}><h2>{article.sections[0].title}</h2>{article.sections[0].paragraphs.map(text=><p key={text}>{text}</p>)}</section></div>
 <ModelEditorialStills images={editorialStills}/>
 <section className={styles.perspective} aria-label="Physician perspective">{physicianPerspective?<figure aria-label="Draft quotation for review; not approved by the attributed physician."><blockquote>{formatPhysicianQuote(physicianPerspective.quote)}</blockquote><figcaption>{physicianPerspective.attribution}</figcaption></figure>:<div><p>Physician perspective</p><span>Quotation and attribution awaiting approval</span></div>}</section>
 {article.sections.slice(1).map(section=><Fragment key={section.id}><div className={styles.prose}><section id={section.id}><h2>{section.title}</h2>{section.paragraphs.map(text=><p key={text}>{text}</p>)}</section></div>{section.id==='building-biobank'&&<ModelImageDeck slides={gallerySlides}/>}</Fragment>)}
 <div className={styles.prose}><Link className={styles.cta} href={article.cta.href}>{article.cta.label}<span aria-hidden="true">↗</span></Link></div>
 </article></div></div></main><Footer/></>;}
