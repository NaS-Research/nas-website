import {emptyLibrary,validateLibrary,accountProfile} from './library.mjs';
const reply=(data,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'private, no-store'}});
export async function handleLibrary(request,{authReady,authClient,originAllowed}){
 if(request.method!=='GET'&&!originAllowed(request.headers.get('origin')))return reply({error:'Invalid request origin.'},403);
 try{
  if(!authReady())return reply({error:'Sign in to see your conversations.'},401);
  const client=await authClient();const {data:{user},error}=await client.auth.getUser();if(error||!user)return reply({error:'Sign in to see your conversations.'},401);
  if(request.method==='GET'){
   const {data,error}=await client.from('nicole_libraries').select('library,revision').eq('user_id',user.id).maybeSingle();
   if(error)return reply({error:'Your conversations could not be loaded. Try again.'},503);
   return reply({userId:user.id,library:data?.library||emptyLibrary(),revision:data?.revision||0,profile:accountProfile(user)});
  }
  if(!request.headers.get('content-type')?.includes('application/json'))return reply({error:'JSON required.'},415);
  const reader=request.body?.getReader();if(!reader)return reply({error:'Library required.'},400);
  let size=0;const chunks=[];while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>1600000){await reader.cancel();return reply({error:'Your library is too large.'},413);}chunks.push(value);}
  let input,library;try{input=JSON.parse(Buffer.concat(chunks).toString('utf8'));if(input.userId!==user.id)return reply({error:'Your account changed. Reload before saving.'},409);if(!Number.isSafeInteger(input.revision)||input.revision<0)throw new Error('Invalid revision.');library=validateLibrary(input.library);}catch(e){return reply({error:e.message||'Invalid library.'},400);}
  const {data,error:saveError}=await client.rpc('save_nicole_library',{p_library:library,p_revision:input.revision});
  if(saveError)return reply({error:'Your conversations could not be saved. Try again.'},503);
  if(data===null)return reply({error:'Your conversations changed in another tab or device. Download your unsaved copy, then reload to use the latest version.'},409);
  return reply({revision:data});
 }catch{return reply({error:'Unable to connect to your conversations. Try again.'},503);}
}
