// A single bounded request, retried after settlement. No credentials or source polling here.
export function startActivityPolling({onSnapshot,onState,onAuthLost,fetcher=fetch,windowTarget=window,documentTarget=document,schedule=setTimeout,cancel=clearTimeout,clock=Date.now}){
 let stopped=false,inFlight=false,timer,deadline,controller,authLost=false;
 const online=()=>windowTarget.navigator?.onLine!==false;
 async function update(){
  if(stopped||inFlight||authLost)return;
  cancel(timer);
  if(!online()){onState({state:'offline',message:'Browser offline. Last report retained.'});return;}
  inFlight=true;controller=new AbortController();
  try{
   const next=await Promise.race([
    (async()=>{
     const response=await fetcher('/api/admin/activity',{cache:'no-store',signal:controller.signal});
     if(response.status===401||response.status===403)throw Object.assign(new Error(response.status===401?'Session ended. Sign in again.':'Administrator access required.'),{auth:true});
     if(!response.ok)throw Error('Connection interrupted. Last report retained.');
     const data=await response.json();
     if(!Array.isArray(data?.sources))throw Error('Invalid activity response. Last report retained.');
     return data;
    })(),
    new Promise((_,reject)=>{deadline=schedule(()=>{controller.abort();reject(Error('Activity request timed out. Reconnecting automatically.'));},15000);})
   ]);
   if(stopped)return;
   // A response completed after an offline event cannot establish current connectivity.
   if(!online()){onState({state:'offline',message:'Browser offline. Last report retained.'});return;}
   onSnapshot(next);onState({state:'connected',message:'',lastSuccessAt:clock()});
  }catch(error){
   if(stopped)return;
   if(error.auth){authLost=true;onAuthLost();onState({state:'unauthorized',message:error.message});}
   else onState({state:online()?'interrupted':'offline',message:online()?(error.name==='AbortError'?'Connection interrupted. Reconnecting automatically.':error.message):'Browser offline. Last report retained.'});
  }finally{
   cancel(deadline);inFlight=false;
   if(!stopped&&!authLost&&online())timer=schedule(update,10000);
  }
 }
 function wake(){if(documentTarget.visibilityState!=='hidden')update();}
 function offline(){cancel(timer);controller?.abort();if(!stopped&&!authLost)onState({state:'offline',message:'Browser offline. Last report retained.'});}
 windowTarget.addEventListener('online',wake);windowTarget.addEventListener('offline',offline);
 windowTarget.addEventListener('focus',wake);documentTarget.addEventListener('visibilitychange',wake);
 update();
 return()=>{stopped=true;cancel(timer);cancel(deadline);controller?.abort();windowTarget.removeEventListener('online',wake);windowTarget.removeEventListener('offline',offline);windowTarget.removeEventListener('focus',wake);documentTarget.removeEventListener('visibilitychange',wake);};
}
