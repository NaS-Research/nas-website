"use client";
import {useEffect,useId,useRef,useState} from 'react';
import {initialSlide,nextSlide,centeredScrollLeft,nearestSlide,acceptableStill,CAROUSEL_DURATION,carouselEase} from '@/lib/anatomy-release-preview/deck.mjs';
import styles from './release.module.css';
export default function ModelImageDeck({slides}){
 const count=slides.length,loop=count>1,shift=loop?2:0,id=useId(),rail=useRef(null),logical=useRef(initialSlide(count)),animation=useRef(null),scrollFrame=useRef(null),queue=useRef([]),busy=useRef(false),mounted=useRef(true);
 const [active,setActive]=useState(()=>initialSlide(count)),[moving,setMoving]=useState(false),[activeTrack,setActiveTrack]=useState(()=>initialSlide(count)+(count>1?2:0));
 const track=loop?[...slides.slice(-2),...slides,...slides.slice(0,2)]:slides;
 const realIndex=t=>((t-shift)%count+count)%count;
 const target=t=>{const e=rail.current;return e?.children[t]?centeredScrollLeft(e.children[t],e):0;};
 const mark=t=>{const index=realIndex(t);logical.current=index;setActive(index);setActiveTrack(t);};
 const settle=t=>{const e=rail.current;if(!e)return;const actual=realIndex(t)+shift;e.scrollLeft=target(actual);mark(actual);};
 const cancel=()=>{if(animation.current!==null)cancelAnimationFrame(animation.current);animation.current=null;busy.current=false;if(mounted.current)setMoving(false);queue.current=[];if(rail.current)rail.current.style.scrollSnapType='';};
 const runNext=()=>{const e=rail.current;if(!e||busy.current||!queue.current.length||!mounted.current)return;const action=queue.current.shift(),from=logical.current,to=nextSlide(from,action,count);let t=to+shift;if(loop&&(action==='next'||action==='ArrowRight')&&from===count-1)t=count+shift;if(loop&&(action==='previous'||action==='ArrowLeft')&&from===0)t=shift-1;
  const finish=()=>{if(!mounted.current)return;e.style.scrollSnapType='';settle(t);busy.current=false;setMoving(false);animation.current=null;runNext();};
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){e.scrollLeft=target(t);finish();return;}
  busy.current=true;setMoving(true);e.style.scrollSnapType='none';const start=e.scrollLeft,end=target(t),began=performance.now();const step=now=>{if(!mounted.current)return;const progress=Math.min(1,(now-began)/CAROUSEL_DURATION);e.scrollLeft=start+(end-start)*carouselEase(progress);if(progress<1)animation.current=requestAnimationFrame(step);else finish();};animation.current=requestAnimationFrame(step);
 };
 const enqueue=action=>{if(queue.current.length<16)queue.current.push(action);runNext();};
 const update=()=>{if(scrollFrame.current!==null)return;scrollFrame.current=requestAnimationFrame(()=>{scrollFrame.current=null;const e=rail.current;if(!e)return;const b=e.getBoundingClientRect(),t=nearestSlide(Array.from(e.children,n=>n.getBoundingClientRect()),b.left+b.width/2);mark(t);if(!busy.current&&loop&&(t<shift||t>=count+shift)&&Math.abs(e.scrollLeft-target(t))<2)settle(t);});};
 useEffect(()=>{mounted.current=true;const e=rail.current;const resize=()=>{cancel();settle(logical.current+shift);};const observer=new ResizeObserver(resize);if(e)observer.observe(e);resize();return()=>{mounted.current=false;cancel();if(scrollFrame.current!==null)cancelAnimationFrame(scrollFrame.current);observer.disconnect();};},[count]);
 if(!count)return null;
 return <section className={styles.deck} aria-label="Biological model imagery" aria-roledescription="carousel" aria-busy={moving}>
 <div className={styles.deckControls}>{['previous','next'].map(direction=><button key={direction} type="button" aria-controls={id} aria-label={direction==='previous'?'Previous model image':'Next model image'} disabled={count<2} onClick={()=>enqueue(direction)}><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={direction==='previous'?'M19 12H5m7-7-7 7 7 7':'M5 12h14m-7-7 7 7-7 7'}/></svg></button>)}</div>
 <div className={styles.deckRail} ref={rail} id={id} tabIndex={0} aria-label="Browse model images with the arrow keys or swipe" onPointerDown={cancel} onScroll={update} onKeyDown={event=>{if(event.target!==event.currentTarget||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();enqueue(event.key);}}>
 {track.map((slide,t)=>{const clone=loop&&(t<shift||t>=count+shift);return <figure key={(clone?'edge':'model')+'-'+t+'-'+slide.id} className={styles.slide} role={clone?'presentation':'group'} aria-roledescription={clone?undefined:'slide'} aria-label={clone?undefined:slide.title} aria-hidden={clone?true:undefined} inert={clone?true:undefined} data-clone={clone?'true':undefined} data-active={t===activeTrack}><div className={styles.slideImage} data-kind={slide.kind}>{acceptableStill(slide)?<img src={slide.src} alt={clone?'':slide.alt} width={slide.nativeWidth} height={slide.nativeHeight} loading={t===shift?'eager':'lazy'}/>:<div className={styles.assetPending}><span>{slide.title}</span><p>Model still pending</p></div>}</div><figcaption>{slide.isPlaceholder?`${slide.title} · Preview placeholder`:slide.title}</figcaption></figure>;})}
 </div><p className={styles.srOnly} aria-live="polite" aria-atomic="true">{slides[active]?.title}</p></section>;
}
