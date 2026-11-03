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
import {previewSlides,previewDemo,physicianPerspective} from '@/lib/anatomy-release-preview/media.mjs';
import {demoReady,formatPhysicianQuote} from '@/lib/anatomy-release-preview/deck.mjs';
import styles from './release.module.css';
export default function AnatomyStudioReleasePreview(){const models=buildArticleModelSlides(articleModelAssets),gallerySlides=models.length?models:previewSlides;return <><main className={styles.article+' publication-page'}>
 <header className={styles.hero}><p className={styles.draft}>Private article preview · Version {article.version}</p><div className={styles.meta}><Link href="/research?type=Releases">Release</Link><time dateTime={article.dateISO}>{article.date}</time><span>NaS Research</span></div><h1>{article.title}</h1><p className={styles.dek}>{article.abstract}</p><p className={styles.byline}>By {article.authors.join(', ')}</p></header>
 <div className={styles.readingLayout}><PublicationContents sections={article.sections} hasSources={false} hasCitation={false} summaryLabel="Introduction"/><MobileContents sections={article.sections} hasSources={false} hasCitation={false} summaryLabel="Introduction"/><article className="publication-body"><div id="summary" className={styles.prose}>{article.introParagraphs.map(text=><p key={text}>{text}</p>)}</div>
 <div className={styles.prose}><section id={article.sections[0].id}><h2>{article.sections[0].title}</h2>{article.sections[0].paragraphs.map(text=><p key={text}>{text}</p>)}</section></div>
 <section className={styles.demo} aria-label="Anatomy Studio demonstration">{demoReady(previewDemo)?<video controls playsInline preload="none" poster={previewDemo.poster} aria-label="Anatomy Studio rotation and landmark demonstration"><source src={previewDemo.src} type={previewDemo.mimeType||"video/mp4"}/>{previewDemo.captions&&<track kind="captions" src={previewDemo.captions} srcLang="en" label="English" default/>}<a href={previewDemo.src}>Open the Studio demonstration</a></video>:<div className={styles.demoPending}><span>Studio demonstration</span><p>Recorded demonstration pending</p></div>}</section>
 <section className={styles.perspective} aria-label="Physician perspective">{physicianPerspective?<figure aria-label="Draft quotation for review; not approved by the attributed physician."><blockquote>{formatPhysicianQuote(physicianPerspective.quote)}</blockquote><figcaption>{physicianPerspective.attribution}</figcaption></figure>:<div><p>Physician perspective</p><span>Quotation and attribution awaiting approval</span></div>}</section>
 {article.sections.slice(1).map(section=><Fragment key={section.id}><div className={styles.prose}><section id={section.id}><h2>{section.title}</h2>{section.paragraphs.map(text=><p key={text}>{text}</p>)}</section></div>{section.id==='building-biobank'&&<><ModelEditorialStills images={editorialStills}/><ModelImageDeck slides={gallerySlides}/></>}</Fragment>)}
 <div className={styles.prose}><Link className={styles.cta} href={article.cta.href}>{article.cta.label}<span aria-hidden="true">↗</span></Link></div>
 </article></div></main><Footer/></>;}
