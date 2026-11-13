'use client';
import {useCallback,useEffect,useRef,useState} from 'react';
import {platformQuotes,QUOTE_SLIDE_MS,nextQuote,shouldRotate,quoteRotationDelay} from './platform-quotes.mjs';
import styles from './platform-perspectives.module.css';

export default function PlatformPerspectives(){
 const root=useRef(null),[index,setIndex]=useState(0),[paused,setPaused]=useState(false),[reducedMotion,setReducedMotion]=useState(null),[visible,setVisible]=useState(false),[inView,setInView]=useState(false),[hovering,setHovering]=useState(false),[phase,setPhase]=useState('idle'),[focused,setFocused]=useState(false);
 useEffect(()=>{
  const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  const onMotion=()=>setReducedMotion(mq.matches),onVisibility=()=>setVisible(document.visibilityState==='visible');
  onMotion();onVisibility();mq.addEventListener('change',onMotion);document.addEventListener('visibilitychange',onVisibility);
  const observer=new IntersectionObserver(entries=>setInView(entries[0]?.isIntersecting===true),{threshold:.25});observer.observe(root.current);
  return()=>{observer.disconnect();mq.removeEventListener('change',onMotion);document.removeEventListener('visibilitychange',onVisibility);};
 },[]);
 const target=useRef(null),current=useRef(0);
 const requestQuote=useCallback(next=>{
  const base=target.current??current.current;
  const value=typeof next==='function'?next(base):next;
  if(value===base)return;
  if(reducedMotion===true){current.current=value;target.current=null;setIndex(value);setPhase('idle');return;}
  target.current=value;setPhase('out');
 },[reducedMotion]);
 useEffect(()=>{
  if(reducedMotion===true){
   if(target.current!==null){current.current=target.current;setIndex(current.current);target.current=null;}
   setPhase('idle');return;
  }
  if(phase==='idle')return;
  const timer=window.setTimeout(()=>{
   if(phase==='out'){
    if(target.current!==null){current.current=target.current;setIndex(current.current);target.current=null;}
    setPhase('in');
   }else setPhase('idle');
  },QUOTE_SLIDE_MS/2);
  return()=>window.clearTimeout(timer);
 },[phase,reducedMotion]);
 const q=platformQuotes[index];
 const rotating=shouldRotate({paused,reducedMotion,visible,inView,hovering,focused});
 useEffect(()=>{
  if(!rotating)return;
  let timer;
  function advance(){requestQuote(i=>nextQuote(i,1));timer=window.setTimeout(advance,quoteRotationDelay(false));}
  timer=window.setTimeout(advance,quoteRotationDelay(true));
  return()=>window.clearTimeout(timer);
 },[rotating,requestQuote]);
 function move(step){setPaused(true);requestQuote(i=>nextQuote(i,step));}
 function key(event){if(event.altKey||event.metaKey||event.ctrlKey)return;if((event.key===' '||event.key==='Spacebar')&&event.target===event.currentTarget){event.preventDefault();setPaused(p=>!p);}if(event.key==='ArrowLeft'){event.preventDefault();move(-1);}if(event.key==='ArrowRight'){event.preventDefault();move(1);}if(event.key==='Home'){event.preventDefault();setPaused(true);requestQuote(0);}if(event.key==='End'){event.preventDefault();setPaused(true);requestQuote(platformQuotes.length-1);}}
 return <section ref={root} id="industry-perspective" className={styles.section} role="region" aria-roledescription="carousel" aria-label="Platform quotations" aria-describedby="platform-quote-instructions" data-quote-carousel data-active-slide={index+1} data-rotation={rotating?'playing':'paused'} data-reduced-motion={reducedMotion===true?'true':'false'} onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFocused(false);}}>
  <p className={styles.srOnly} id="platform-quote-instructions">Comments about the platform, not endorsements of NaS. Select a person’s name for the original source and context. Automatic slides advance every five seconds and pause while hovered or focused. Use left and right arrow keys to change slides, Home and End for the first and last, and Space to toggle automatic rotation. Reduced motion disables automatic rotation.</p>
  <div className={styles.viewport} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onKeyDown={key} tabIndex="0" role="group" aria-label="Platform quotations">
   <div className={styles.track} style={{'--quote-fade-ms':`${QUOTE_SLIDE_MS/2}ms`}} aria-live={rotating?'off':'polite'}>
    <figure key={q.id} role="group" aria-roledescription="slide" aria-label={`${index+1} of ${platformQuotes.length}`} className={styles.slide+(phase==='out'?' '+styles.fadingOut:phase==='in'?' '+styles.fadingIn:'')} data-slide={index+1} data-active="true">
     <blockquote>“{q.quote}”</blockquote><figcaption><a href={`#source-${q.sourceNumber}`} aria-label={`${q.name}, source and context`}>{q.name}</a><span>{q.role}</span></figcaption>
    </figure>
   </div>
  </div>

  <p className={styles.srOnly} role="status" aria-live={rotating?'off':'polite'}>Quotation {index+1} of {platformQuotes.length}{rotating?'':', automatic rotation paused'}.</p>
 </section>;
}
