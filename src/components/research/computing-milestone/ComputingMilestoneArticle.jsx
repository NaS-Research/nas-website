import Link from 'next/link';
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

function Capacity({kind,title,oldValue,newValue,oldLabel,newLabel,note}){
  return <figure className={styles.capacity} aria-labelledby={kind+'-title'}>
    <p className={styles.eyebrow}>{kind==='memory'?'Unified memory':'Internal storage'}</p>
    <h3 id={kind+'-title'}>{title}</h3>
    <div className={styles.chart} aria-hidden="true">
      <div className={styles.chartLabel}><span>M1 Mac mini</span><strong>{oldLabel}</strong></div>
      <div className={styles.track}><span className={styles.oldBar} style={{width:(oldValue/newValue*100)+'%'}}/></div>
      <div className={styles.chartLabel}><span>Ordered Mac Studio</span><strong>{newLabel}</strong></div>
      <div className={styles.track}><span className={styles.newBar} style={{width:'100%'}}/></div>
      <div className={styles.axis}><span>0 GB</span><span>{newLabel}</span></div>
    </div>
    <table className={styles.srOnly}><caption>{kind==='memory'?'Unified memory':'Internal SSD'} capacity</caption><thead><tr><th>Workstation</th><th>Capacity</th></tr></thead><tbody><tr><th>M1 Mac mini</th><td>{oldLabel}</td></tr><tr><th>Ordered Mac Studio</th><td>{newLabel}</td></tr></tbody></table>
    <figcaption>{note} Previous configuration: NaS. Ordered platform: <a href="https://www.apple.com/mac-studio/specs/">Apple specifications</a>.</figcaption>
  </figure>;
}
function CapacityFigures(){return <div className={styles.capacityGroup}>
  <Capacity kind="memory" title="6× the unified-memory capacity" oldValue={16} newValue={96} oldLabel="16 GB" newLabel="96 GB" note="Configured capacity, not a performance benchmark."/>
  <Capacity kind="storage" title="256 GB → 2 TB" oldValue={256} newValue={2000} oldLabel="256 GB" newLabel="2 TB" note="Nominal internal SSD capacity; formatted capacity is lower."/>
</div>;}
function Workflow(){return <figure className={styles.workflow} aria-labelledby="workflow-title">
  <p className={styles.eyebrow}>From question to tool</p><h3 id="workflow-title">A connected research cycle</h3>
  <ol>{['Scientific questions','Data & knowledge','Models & methods','Evaluation','Research tools'].map((step,index)=><li key={step}><span>{String(index+1).padStart(2,'0')}</span><strong>{step}</strong></li>)}</ol>
  <div className={styles.feedback}><span aria-hidden="true">↶</span> Evaluation feeds back into models & methods</div>
  <figcaption>A conceptual workflow, not measured results or a claim that the new workstation is deployed.</figcaption>
</figure>;}
function Industry(){return <section id="industry-perspective" className={styles.industry}>
  <p className={styles.eyebrow}>Industry perspective</p><h2>Views on the platform</h2>
  <p className={styles.quoteIntro}>Comments about Mac Studio and M5 Ultra, not endorsements of NaS.</p>
  <div className={styles.quoteGrid}>
    <figure><blockquote>“the new Mac Studio is our most powerful Mac ever.”</blockquote><figcaption><strong>Johny Srouji</strong><span>Apple chief hardware officer · August 25, 2026</span><a href="https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/">Apple announcement ↗</a><p>Manufacturer perspective. A product-family claim, not a claim that NaS ordered the top configuration.</p></figcaption></figure>
    <figure><blockquote>“For local AI, the M5 Ultra is seriously impressive, though that may still be a niche use case for some.”</blockquote><figcaption><strong>Andrew E. Freedman</strong><span>Tom’s Hardware · September 21, 2026</span><a href="https://www.tomshardware.com/desktops/mini-pcs/apple-mac-studio-m5-ultra-review">Read the review ↗</a><p>Review tested a 36-core CPU / 80-core GPU, 256 GB system, distinct from NaS’s 30/64-core, 96 GB configuration.</p></figcaption></figure>
  </div>
</section>;}
export default function ComputingMilestoneArticle(){
  const contents=[...article.sections,{id:'industry-perspective',title:'Industry perspective'}];
  return <><main className={styles.page+' publication-page'}>
    <header className={styles.hero}>
      <div className={styles.breadcrumb}><Link href="/research">← Research library</Link><span>Unlisted review · Not in the Research library</span></div>
      <div className={styles.metadata}><span>{article.category}</span><span>{article.format}</span></div>
      <h1>{article.title}</h1><p className={styles.subtitle}>{article.subtitle}</p>
      <div className={styles.byline}><span>By {article.byline}</span><span>On order</span></div>
    </header>
    <figure className={styles.cover}><img src="/research/building-the-next-stage-of-nas-computing/cover.svg" width="1600" height="900" alt="Sixteen gigabytes of unified memory at the starting point and ninety-six gigabytes in the ordered M5 Ultra workstation."/><figcaption>A larger computational foundation for the next questions.</figcaption></figure>
    <div className={styles.reading}>
      <PublicationContents sections={contents} hasSources={false} hasCitation={false} summaryLabel="Introduction"/>
      <MobileContents sections={contents} hasSources={false} hasCitation={false} summaryLabel="Introduction"/>
      <article className={styles.prose} aria-label={article.title}>
        <div id="summary">{article.intro.map((text,index)=><p key={index}><Inline text={text}/></p>)}</div>
        {article.sections.map((section,index)=><section key={section.id} id={section.id}><h2>{section.title}</h2>{section.paragraphs.map((text,i)=><p key={i}><Inline text={text}/></p>)}{index===1&&<CapacityFigures/>}{index===2&&<Workflow/>}</section>)}
        <Industry/>
        <aside className={styles.status}><span>Next stage</span><p>Delivery, setup and workload-specific evaluation are ahead. Research remains paused.</p></aside>
      </article>
    </div>
    <nav className={styles.related} aria-label="Further reading"><p>Continue reading</p><Link href="/research/introducing-nas-cortex">The NaS Cortex <span>↗</span></Link><Link href="/research/introducing-nas-workspace">Introducing NaS Workspace <span>↗</span></Link></nav>
  </main><Footer/></>;
}
