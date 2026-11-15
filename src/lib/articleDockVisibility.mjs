// A shared reading-position signal for bookmark and Nicole article launchers.
export function observeArticleDocks(win,doc,onChange){
 const reading=doc.querySelector('.publication-body');
 if(!reading){onChange({article:false,visible:true});return()=>{};}
 let frame,poll,last;
 const settled=()=>{const intro=win.__nasComputingReveal;return !intro||(intro.isSettled?intro.isSettled():intro.status().finished);};
 function measure(){frame=undefined;const ready=settled();const visible=ready&&reading.getBoundingClientRect().top<=96;if(last!==visible){last=visible;onChange({article:true,visible});}if(ready&&poll!==undefined){win.clearInterval(poll);poll=undefined;}}
 const schedule=()=>{if(frame===undefined)frame=win.requestAnimationFrame(measure);};
 const observer=new win.ResizeObserver(schedule);observer.observe(reading);const page=reading.closest('.publication-page');if(page)observer.observe(page);
 win.addEventListener('scroll',schedule,{passive:true});win.addEventListener('resize',schedule);win.addEventListener('pageshow',schedule);doc.addEventListener('visibilitychange',schedule);
 measure();if(!settled())poll=win.setInterval(measure,100);
 return()=>{observer.disconnect();win.removeEventListener('scroll',schedule);win.removeEventListener('resize',schedule);win.removeEventListener('pageshow',schedule);doc.removeEventListener('visibilitychange',schedule);if(frame!==undefined)win.cancelAnimationFrame(frame);if(poll!==undefined)win.clearInterval(poll);};
}
