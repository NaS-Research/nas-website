// Wait for a real, stable camera/model transform, not silence from the render loop.
function transform(view){
 if(!view||![view.position,view.target,view.scale].every(a=>Array.isArray(a)&&a.length===3&&a.every(Number.isFinite))||![view.theta,view.phi,view.distance,view.fov].every(Number.isFinite)||view.distance<=0||view.fov<=0)return null;
 return [...view.position,...view.target,...view.scale,view.theta,view.phi,view.distance,view.fov];
}
export function createPresentationGate({onReady,now,schedule,cancel,requestFrame,cancelFrame,minSettleMs=400,quietMs=100,epsilon=1e-5}) {
 let first=null,timer=null,frame=null,anchor=null,done=false,disposed=false;
 function clear(){if(timer!==null)cancel(timer);if(frame!==null)cancelFrame(frame);timer=null;frame=null;}
 return Object.freeze({
  observe(view){if(disposed||done)return;const next=transform(view);if(!next)return;
   // Frame counters and identical render notifications do not represent camera motion.
   if(anchor&&next.every((value,i)=>Math.abs(value-anchor[i])<=epsilon))return;
   anchor=next;if(first===null)first=now();clear();
   timer=schedule(()=>{timer=null;frame=requestFrame(()=>{frame=null;if(disposed||done)return;done=true;onReady();});},Math.max(quietMs,minSettleMs-(now()-first)));},
  dispose(){disposed=true;clear();},
 });
}
