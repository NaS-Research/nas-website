// Keep the poster until real view updates stop and the initial Bounds animation has settled.
export function createPresentationGate({onReady,now,schedule,cancel,requestFrame,cancelFrame,minSettleMs=400,quietMs=100}) {
 let first=null,timer=null,frame=null,done=false,disposed=false;
 function clear(){if(timer!==null)cancel(timer);if(frame!==null)cancelFrame(frame);timer=null;frame=null;}
 return Object.freeze({
  observe(){if(disposed||done)return;if(first===null)first=now();clear();
   timer=schedule(()=>{timer=null;frame=requestFrame(()=>{frame=null;if(disposed||done)return;done=true;onReady();});},Math.max(quietMs,minSettleMs-(now()-first)));},
  dispose(){disposed=true;clear();},
 });
}
