// Serialize note writes so an older response cannot overwrite newer typing.
export function createNoteAutosaver({initialText='',save,onChange=()=>{},delay=600,setTimer=setTimeout,clearTimer=clearTimeout}) {
 let text=initialText,ack=initialText,timer,flight=null,error=false,disposed=false;
 const snapshot=()=>({text,dirty:text!==ack,saving:flight!==null,error});
 const emit=()=>{if(!disposed)onChange(snapshot());};
 const cancel=()=>{if(timer!==undefined)clearTimer(timer);timer=undefined;};
 const schedule=()=>{cancel();timer=setTimer(()=>{timer=undefined;void flush();},delay);};
 function flush(){
  cancel();
  if(flight)return flight;
  if(text===ack)return Promise.resolve(true);
  const value=text;
  let succeeded=false;
  flight=Promise.resolve().then(()=>save(value)).then(ok=>{
   succeeded=ok===true;if(succeeded)ack=value;error=!succeeded;return succeeded;
  },()=>{error=true;return false;}).finally(()=>{
   flight=null;emit();
   if(succeeded&&text!==ack){if(disposed)void flush();else schedule();}
  });
  emit();return flight;
 }
 return {
  snapshot,flush,
  edit(value){text=value;error=false;schedule();emit();},
  sync(value){if(!flight&&text===ack){text=ack=value;emit();}},
  hasPending:()=>text!==ack||flight!==null,
  dispose(){disposed=true;cancel();void flush();},
 };
}
