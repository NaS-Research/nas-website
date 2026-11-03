// Keep logical selection independent of transient scroll geometry during resize.
export function createDeckLayoutGuard({readWidth,readSelection,recenter,cancelMotion,onSettled=()=>{},schedule=requestAnimationFrame,cancelFrame=cancelAnimationFrame}){
 let width=null,epoch=0,scrollFrame=null,layoutFrame=null,suppressed=false,disposed=false;
 const clear=()=>{if(scrollFrame!==null)cancelFrame(scrollFrame);if(layoutFrame!==null)cancelFrame(layoutFrame);scrollFrame=layoutFrame=null;};
 const changed=()=>width!==readWidth();
 const resize=()=>{
  if(disposed||(!changed()&&width!==null))return;
  const selected=readSelection(),version=++epoch;width=readWidth();suppressed=true;clear();cancelMotion();recenter(selected);
  // Two layout frames let responsive sizing and scroll anchoring finish first.
  layoutFrame=schedule(()=>{if(disposed||version!==epoch)return;
   if(changed()){resize();return;}recenter(selected);
   layoutFrame=schedule(()=>{if(disposed||version!==epoch)return;
    if(changed()){resize();return;}recenter(selected);layoutFrame=null;suppressed=false;onSettled();
   });
  });
 };
 return {resize,get pending(){return suppressed;},scroll(commit){
  if(disposed)return;
  // A scroll RAF can run before ResizeObserver sees the new rail width.
  if(changed()){resize();return;}
  if(suppressed||scrollFrame!==null)return;
  const version=epoch;
  scrollFrame=schedule(()=>{if(disposed||version!==epoch)return;scrollFrame=null;
   if(changed()){resize();return;}if(!suppressed)commit();
  });
 },dispose(){disposed=true;++epoch;clear();}};
}
