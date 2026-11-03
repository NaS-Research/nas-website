"use client";
import {useCallback,useEffect,useId,useRef,useState} from 'react';
import {initialSlide,nextSlide,centeredScrollLeft,nearestSlide,acceptableStill} from '@/lib/anatomy-release-preview/deck.mjs';
import styles from './release.module.css';
export default function ModelImageDeck({slides}){
 const rail=useRef(null),activeRef=useRef(initialSlide(slides.length)),frame=useRef(null),id=useId();const [active,setActive]=useState(()=>initialSlide(slides.length));
 const go=useCallback((index,instant=false)=>{const element=rail.current,slide=element?.children[index];if(!slide)return;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;element.scrollTo({left:centeredScrollLeft(slide,element),behavior:instant||reduce?'instant':'smooth'});},[]);
 const update=()=>{if(frame.current!==null)return;frame.current=requestAnimationFrame(()=>{frame.current=null;const element=rail.current;if(!element)return;const box=element.getBoundingClientRect();const index=nearestSlide(Array.from(element.children,item=>item.getBoundingClientRect()),box.left+box.width/2);activeRef.current=index;setActive(index);});};
 useEffect(()=>{const observer=new ResizeObserver(()=>go(activeRef.current,true));if(rail.current)observer.observe(rail.current);return()=>{observer.disconnect();if(frame.current!==null)cancelAnimationFrame(frame.current);};},[go]);
 useEffect(()=>{const index=Math.min(activeRef.current,Math.max(0,slides.length-1));activeRef.current=index;setActive(index);go(index,true);},[slides.length,go]);
 if(!slides.length)return null;
 return <section className={styles.deck} aria-label="Biological model imagery" aria-roledescription="carousel">
  <div className={styles.deckControls}><button type="button" aria-controls={id} aria-label="Previous model image" disabled={active===0} onClick={()=>go(nextSlide(active,'previous',slides.length))}><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m7-7-7 7 7 7"/></svg></button><button type="button" aria-controls={id} aria-label="Next model image" disabled={active===slides.length-1} onClick={()=>go(nextSlide(active,'next',slides.length))}><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg></button></div>
  <div className={styles.deckRail} ref={rail} id={id} tabIndex={0} aria-label="Browse model images with the arrow keys or swipe" onScroll={update} onKeyDown={event=>{if(event.target!==event.currentTarget||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();go(nextSlide(active,event.key,slides.length));}}>
   {slides.map((slide,index)=><figure key={slide.id} className={styles.slide} role="group" aria-roledescription="slide" aria-label={slide.title} data-active={index===active}><div className={styles.slideImage} data-kind={slide.kind}>{acceptableStill(slide)?<img src={slide.src} alt={slide.alt} width={slide.nativeWidth} height={slide.nativeHeight} loading={index===0?'eager':'lazy'}/>:<div className={styles.assetPending}><span>{slide.title}</span><p>Model still pending</p></div>}</div><figcaption>{slide.isPlaceholder?`${slide.title} · Preview placeholder`:slide.title}</figcaption></figure>)}
  </div><p className={styles.srOnly} aria-live="polite" aria-atomic="true">{slides[active]?.title}</p>
 </section>;
}
