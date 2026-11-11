'use client';
import {useEffect,useRef,useState} from 'react';
import {platformQuotes,QUOTE_SLIDE_MS,nextQuote,shouldRotate,quoteRotationDelay} from './platform-quotes.mjs';
import styles from './platform-perspectives.module.css';

export default function PlatformPerspectives(){
 const root=useRef(null),[index,setIndex]=useState(0),[paused,setPaused]=useState(false),[reducedMotion,setReducedMotion]=useState(null),[visible,setVisible]=useState(false),[inView,setInView]=useState(false),[hovering,setHovering]=useState(false),[hasMoved,setHasMoved]=useState(false);
 useEffect(()=>{
  const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  const onMotion=()=>setReducedMotion(mq.matches),onVisibility=()=>setVisible(document.visibilityState==='visible');
  onMotion();onVisibility();mq.addEventListener('change',onMotion);document.addEventListener('visibilitychange',onVisibility);
  const observer=new IntersectionObserver(entries=>setInView(entries[0]?.isIntersecting===true),{threshold:.25});observer.observe(root.current);
  return()=>{observer.disconnect();mq.removeEventListener('change',onMotion);document.removeEventListener('visibilitychange',onVisibility);};
 },[]);
 const q=platformQuotes[index];
 const rotating=shouldRotate({paused,reducedMotion,visible,inView,hovering});
 useEffect(()=>{
  if(!rotating)return;
  let timer;
  function advance(){setHasMoved(true);setIndex(i=>nextQuote(i,1));timer=window.setTimeout(advance,quoteRotationDelay(false));}
  timer=window.setTimeout(advance,quoteRotationDelay(true));
  return()=>window.clearTimeout(timer);
 },[rotating]);
 function move(step){setPaused(true);setHasMoved(true);setIndex(i=>nextQuote(i,step));}
 function key(event){if(event.altKey||event.metaKey||event.ctrlKey)return;if(event.key==='ArrowLeft'){event.preventDefault();move(-1);}if(event.key==='ArrowRight'){event.preventDefault();move(1);}if(event.key==='Home'){event.preventDefault();setPaused(true);setHasMoved(true);setIndex(0);}if(event.key==='End'){event.preventDefault();setPaused(true);setHasMoved(true);setIndex(platformQuotes.length-1);}}
 return <section ref={root} id="industry-perspective" className={'publication-section '+styles.section} role="region" aria-roledescription="carousel" aria-labelledby="industry-title" data-quote-carousel data-active-slide={index+1} data-rotation={rotating?'playing':'paused'} data-reduced-motion={reducedMotion===true?'true':'false'} onFocusCapture={event=>{if(!event.target.hasAttribute('data-rotation-control'))setPaused(true);}}>
  <p className={styles.eyebrow}>Industry perspective</p><h2 id="industry-title">Views on the platform</h2>
  <p className={styles.srOnly}>Comments about the platform, not endorsements of NaS. Select a person’s name to find the original source and review configuration. Use the left and right arrow keys to change slides.</p>
  <div className={styles.viewport} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onKeyDown={key} tabIndex="0" role="group" aria-label="Platform quotations">
   <div className={styles.track} style={{'--quote-slide-ms':`${QUOTE_SLIDE_MS}ms`}} aria-live={rotating?'off':'polite'}>
    <figure key={q.id} role="group" aria-roledescription="slide" aria-label={`${index+1} of ${platformQuotes.length}`} className={styles.slide+(hasMoved?' '+styles.moving:'')} data-slide={index+1} data-active="true">
     <blockquote>“{q.quote}”</blockquote><figcaption><a href={`#source-${q.sourceNumber}`} aria-label={`${q.name}, source and context`}>{q.name}</a><span>{q.role}</span></figcaption>
    </figure>
   </div>
  </div>
  <div className={styles.controls} aria-label="Quotation slideshow controls"><div><button type="button" onClick={()=>move(-1)} aria-label="Previous quotation">←</button><button type="button" data-rotation-control onClick={()=>setPaused(p=>!p)} disabled={reducedMotion!==false} aria-label={reducedMotion?'Autoplay disabled for reduced motion':paused?'Play quotation slideshow':'Pause quotation slideshow'}>{reducedMotion?'Manual':paused?'Play':'Pause'}</button><button type="button" onClick={()=>move(1)} aria-label="Next quotation">→</button></div><span aria-hidden="true">{String(index+1).padStart(2,'0')} / 05</span></div>
  <p className={styles.srOnly} role="status" aria-live={rotating?'off':'polite'}>Quotation {index+1} of {platformQuotes.length}{rotating?'':', automatic rotation paused'}.</p>
 </section>;
}
