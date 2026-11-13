import {galleryInterval,galleryCaptions} from './computing-gallery-markup.mjs';
export function mountComputingGallery(root,win=window,doc=document){
 if(!root || root.dataset.cgEnhanced==='true')return ()=>{};
 const slides=[...root.querySelectorAll('[data-cg-slide]')],dots=[...root.querySelectorAll('[data-cg-dot]')];
 const caption=root.querySelector('[data-cg-caption]'),status=root.querySelector('[data-cg-status]'),credit=root.querySelector('[data-cg-credit]');
 const video=root.querySelector('[data-cg-video]'),reduced=win.matchMedia('(prefers-reduced-motion: reduce)');
 let index=0,timer=null,visible=false,hovered=false,focused=false,paused=false,disposed=false;
 const listeners=[];
 function on(target,type,fn){target.addEventListener(type,fn);listeners.push([target,type,fn]);}
 function clear(){if(timer!==null)win.clearTimeout(timer);timer=null;}
 function moving(){return visible&&!doc.hidden&&!reduced.matches&&!paused&&!hovered&&!focused;}
 function update(){
  clear();root.dataset.cgMotion=String(moving());
  if(video){
   if(index===1&&visible&&!doc.hidden&&!reduced.matches&&!paused){
    if(!video.getAttribute('src'))video.src=video.dataset.src;
    video.play().catch(()=>{});
   }else video.pause();
  }
  if(moving())timer=win.setTimeout(()=>show((index+1)%slides.length),galleryInterval);
 }
 function show(next,manual=false){
  index=(next+slides.length)%slides.length;root.dataset.activeSlide=String(index);
  slides.forEach((slide,i)=>{const active=i===index;slide.dataset.active=String(active);slide.setAttribute('aria-hidden',String(!active));slide.inert=!active;});
  dots.forEach((dot,i)=>dot.setAttribute('aria-pressed',String(i===index)));
  if(caption)caption.textContent=galleryCaptions[index];if(credit)credit.hidden=index!==1;
  if(manual&&status)status.textContent=`Slide ${index+1} of ${slides.length}: ${galleryCaptions[index]}`;
  update();
 }
 dots.forEach((dot,i)=>on(dot,'click',()=>show(i,true)));
 on(root,'keydown',e=>{
  if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){
   e.preventDefault();show(e.key==='Home'?0:e.key==='End'?slides.length-1:index+(e.key==='ArrowRight'?1:-1),true);
  }else if(e.key===' '&&e.target===root){e.preventDefault();paused=!paused;update();}
 });
 on(root,'pointerenter',e=>{if(e.pointerType!=='touch'){hovered=true;update();}});
 on(root,'pointerleave',()=>{hovered=false;update();});
 on(root,'focusin',()=>{focused=true;update();});
 on(root,'focusout',()=>{focused=root.contains(doc.activeElement);win.queueMicrotask(()=>{if(!disposed){focused=root.contains(doc.activeElement);update();}});});
 on(doc,'visibilitychange',update);on(reduced,'change',update);
 const observer=new win.IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update();},{threshold:.25});observer.observe(root);
 root.dataset.cgEnhanced='true';show(0);
 return ()=>{disposed=true;clear();observer.disconnect();for(const [target,type,fn] of listeners)target.removeEventListener(type,fn);video?.pause();delete root.dataset.cgEnhanced;root.dataset.cgMotion='false';};
}
