import {readNicoleBody} from './request.mjs';
const respond=(body,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
export async function handleNicoleRequest(request,{originAllowed,authReady,authClient,key,model,contextFor,generate}){
 if(!originAllowed(request.headers.get('origin')))return respond({error:'Reload the page and try again.'},403);
 if(!authReady())return respond({error:'Sign in to talk with Nicole.'},401);
 try{
  const client=await authClient();const {data:{user},error}=await client.auth.getUser();
  if(error||!user)return respond({error:'Sign in to talk with Nicole.'},401);
  let input;try{input=await readNicoleBody(request);}catch{return respond({error:'Enter a question of up to 4,000 characters, or start a new chat if the conversation is full.'},400);}
  if(input.userId!==user.id)return respond({error:'Your account changed. Reload before continuing.'},409);
  if(!key)return respond({error:'Nicole is not connected yet. Please try again later.'},503);
  const {data:allowed,error:limitError}=await client.rpc('consume_nicole_request');
  if(limitError)return respond({error:'Nicole is temporarily unavailable. Please try again later.'},503);
  if(!allowed)return respond({error:'You’ve reached the conversation allowance for now. Please return later.'},429);
  const answer=await generate({key:key,model:model,userId:user.id,input,context:contextFor(input.contextPath,input.question),signal:AbortSignal.any([request.signal,AbortSignal.timeout(55000)])});
  return respond(answer);
 }catch(error){return respond({error:error.name==='TimeoutError'?'Nicole took too long to respond. Please try again.':error.status?error.message:'Nicole couldn’t finish that response. Please try again.'},error.status||502);}
}
