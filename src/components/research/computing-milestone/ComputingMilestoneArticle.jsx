import Link from 'next/link';
import {Fragment} from 'react';
import PlatformPerspectives from './PlatformPerspectives';
import ComputingBenchmark from './ComputingBenchmark';
import ArticleToolbar,{ArticleByline} from '@/components/research/ArticleToolbar';
import PublicationSourceGroups from '@/components/research/PublicationSourceGroups';
import PublicationActions from '@/components/research/PublicationActions';
import {getArticleCitation} from '@/lib/articleTools.mjs';
import {researchPresentationHistory} from '@/data/researchPresentationHistory.mjs';
import '@/app/research/[slug]/publication-refinements.css';
import Footer from '@/components/Footer';
import PublicationContents from '@/components/research/PublicationContents';
import MobileContents from '@/components/research/MobileContents';
import '@/components/research/publication-navigation.css';
import {computingMilestoneArticle as article} from '@/data/computingMilestoneArticle.mjs';
import styles from './computing-milestone.module.css';

function Inline({text}) {
  const pieces=text.split(/(\[[^\]]+\]\(https:\/\/[^)]+\))/g);
  return pieces.map((piece,index)=>{
    const match=piece.match(/^\[([^\]]+)\]\((https:\/\/[^)]+)\)$/);
    if(!match)return piece;
    const italic=match[1].startsWith('*')&&match[1].endsWith('*');
    return <a key={index} href={match[2]}>{italic?<em>{match[1].slice(1,-1)}</em>:match[1]}</a>;
  });
}

const steps=[['Scientific','questions'],['Data &','knowledge'],['Models &','methods'],['Evaluation'],['Research','tools']];
function Workflow(){return <figure className={styles.workflow} aria-labelledby="workflow-title"><p className={styles.eyebrow}>From question to tool</p><h3 id="workflow-title">A connected research cycle</h3>
 <svg className={styles.workflowDesktop} viewBox="0 0 1000 240" aria-hidden="true"><defs><marker id="workflow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10" fill="none" stroke="currentColor"/></marker></defs>{steps.map((label,i)=><g key={i}>{i<4&&<path d={'M'+(110+i*200)+' 105H'+(285+i*200)} markerEnd="url(#workflow-arrow)"/>}<circle cx={100+i*200} cy="105" r="5"/><text x={100+i*200} y="85" textAnchor="middle" className={styles.stepNumber}>{String(i+1).padStart(2,'0')}</text><text x={100+i*200} y="145" textAnchor="middle">{label.map((line,j)=><tspan key={line} x={100+i*200} dy={j?'1.35em':0}>{line}</tspan>)}</text></g>)}<path d="M700 94V40H500V94" markerEnd="url(#workflow-arrow)"/><text x="600" y="24" textAnchor="middle" className={styles.feedbackLabel}>Evaluate and refine</text></svg>
 <svg className={styles.workflowMobile} viewBox="0 0 320 500" aria-hidden="true"><defs><marker id="workflow-mobile-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10" fill="none" stroke="currentColor"/></marker></defs>{steps.map((label,i)=><g key={i}>{i<4&&<path d={'M28 '+(50+i*100)+'V'+(126+i*100)} markerEnd="url(#workflow-mobile-arrow)"/>}<circle cx="28" cy={40+i*100} r="5"/><text x="60" y={25+i*100} className={styles.stepNumber}>{String(i+1).padStart(2,'0')}</text><text x="60" y={51+i*100}>{label.join(' ')}</text></g>)}<path d="M20 340H5V240H20" markerEnd="url(#workflow-mobile-arrow)"/></svg>
 <ol className={styles.srOnly}>{steps.map(label=><li key={label.join(' ')}>{label.join(' ')}</li>)}</ol><p className={styles.figureNote}>Evaluation feeds back into models &amp; methods.</p><figcaption>A conceptual workflow, not measured results or a claim that the new workstation is deployed.</figcaption></figure>;}
const canonicalUrl='https://nasresearch.bio/preview/building-the-next-stage-of-nas-computing';
const item={...article,authors:[article.byline],introParagraphs:article.intro,abstract:article.subtitle,publicationStatus:'draft',dateISO:'2026-11-11',canonicalUrl};
const sources=[
 {title:'Mac Studio technical specifications',url:'https://www.apple.com/mac-studio/specs/',role:'Manufacturer specifications for the configured platform; previous workstation configuration supplied by NaS.'},
 {title:'Apple introduces new Mac Studio with M5 Max and M5 Ultra',url:'https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/',citation:'Apple Newsroom · August 25, 2026',role:'Source of Johny Srouji’s manufacturer perspective, not an endorsement of NaS.'},
 {title:'Apple Mac Studio M5 Ultra review',url:'https://www.tomshardware.com/desktops/mini-pcs/apple-mac-studio-m5-ultra-review',citation:'Andrew E. Freedman · Tom’s Hardware · September 21, 2026',role:'Review of a distinct 36-core CPU / 80-core GPU, 256 GB configuration.'},
 {title:'Review: M5 Ultra Mac Studio: Pure, unadulterated power',url:'https://www.computerworld.com/article/4225059/review-m5-ultra-mac-studio-pure-unadulterated-power.html',citation:'Jonny Evans · Computerworld · September 22, 2026',role:'Quotation from a review of a 36-core CPU / 80-core GPU, 256 GB, 4 TB machine, distinct from NaS’s configuration.'},
 {title:'The M5 Ultra Mac Studio tears through our benchmark tests',url:'https://www.theverge.com/tech/998040/apple-mac-studio-m5-ultra-initial-impressions-testing-review',citation:'Antonio G. Di Benedetto · The Verge · September 21, 2026',role:'Reviewer’s personal experience with a 36-core CPU / 80-core GPU, 256 GB, 4 TB unit, not a universal ranking or NaS result.'},
 {title:'M5 Ultra Mac Studio Review: The Dream Mac for Local AI Agents',url:'https://www.macstories.net/stories/m5-ultra-mac-studio-review-the-dream-mac-for-local-ai-agents/',citation:'Federico Viticci · MacStories · September 21, 2026',role:'First-person review of a 256 GB system, distinct from NaS’s 96 GB configuration. All platform quotations are third-party perspectives, not endorsements of NaS.'},
 {title:'The NaS Cortex: A Knowledge Architecture for the Life Sciences',url:'https://nasresearch.bio/research/introducing-nas-cortex',role:'Historical architecture and staged computing roadmap.'},
 {title:'Introducing the NaS workspace',url:'https://nasresearch.bio/research/introducing-nas-workspace',role:'The connected research and learning environment.'},
 {title:'About NaS Research',url:'https://nasresearch.bio/about',role:'Institutional vision and long-term ambitions.'}
];
export default function ComputingMilestoneArticle(){
 const contents=article.sections;
 const citation=getArticleCitation(item);
 const structuredData={'@context':'https://schema.org','@type':'Article',headline:article.title,description:article.subtitle,dateCreated:item.dateISO,creativeWorkStatus:'Draft',url:canonicalUrl,mainEntityOfPage:canonicalUrl,author:{'@type':'Organization',name:article.byline},publisher:{'@type':'Organization',name:'NaS Research',url:'https://nasresearch.bio'},image:'https://nasresearch.bio/research/building-the-next-stage-of-nas-computing/cover.svg'};
 return <><div className={'nas-page publication-page '+styles.page} data-article-slug={article.slug} data-presentation-version={researchPresentationHistory[0].version}>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}}/>
  <header className="publication-hero"><div className="nas-shell publication-hero__inner">
   <Link href="/research" className="publication-back">← Research library</Link>
   <p className={styles.review}>Unlisted review · Not in the Research library</p>
   <div className="publication-meta-line"><Link href="/research?area=Scientific%20Infrastructure">{article.category}</Link><Link href="/research?type=Research%20Notes">{article.format}</Link></div>
   <h1>{article.title}</h1><p className="publication-abstract">{article.subtitle}</p><ArticleByline item={item}/>
  </div></header>
  <figure className={styles.cover}><img src="/research/building-the-next-stage-of-nas-computing/cover.svg" width="1600" height="900" alt="Sixteen gigabytes of unified memory at the starting point and ninety-six gigabytes in the M5 Ultra workstation configuration."/><figcaption>A larger computational foundation for the next questions.</figcaption></figure>
  <div className="publication-toolbar-after-artwork" data-toolbar-placement="after-lead-visual"><ArticleToolbar item={item}/></div>
  <MobileContents sections={contents} hasSources hasCitation summaryLabel="Introduction"/>
  <div className="nas-shell publication-layout"><PublicationContents sections={contents} hasSources hasCitation summaryLabel="Introduction"/>
   <article className="publication-body" aria-label={article.title}>
    <section id="summary" className="publication-summary"><p className="publication-section-label">Introduction</p>{article.intro.map((text,index)=><p key={index}><Inline text={text}/></p>)}</section>
    {article.sections.map((section,index)=><Fragment key={section.id}>{index===1&&<PlatformPerspectives/>}<section className="publication-section" id={section.id}><h2>{section.title}</h2>{section.paragraphs.map((text,i)=><p key={i}><Inline text={text}/></p>)}{index===1&&<ComputingBenchmark/>}{index===2&&<Workflow/>}</section></Fragment>)}
    <section id="sources" className="publication-section publication-sources"><h2>Sources and further reading</h2><p>Platform specifications and perspectives are distinguished from NaS’s institutional plans. Links open in a new tab.</p><PublicationSourceGroups sources={sources} groups={[{title:'Platform specifications and industry perspectives',numbers:[1,2,3,4,5,6]},{title:'NaS context and institutional direction',numbers:[7,8,9]}]}/></section>
    <section id="citation" className="publication-section publication-citation"><p className="publication-section-label">Publication details</p><h2>Cite this work</h2><p className="publication-citation__text">{citation}</p><PublicationActions citation={citation} title={article.title} url={canonicalUrl}/></section>
    <aside className={styles.status}><span>Next stage</span><p>Workload-specific evaluation will establish the capabilities of the new platform. Research remains paused.</p></aside>
   </article>
  </div>
 </div><Footer/></>;
}
