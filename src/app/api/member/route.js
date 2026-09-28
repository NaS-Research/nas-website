import {NextResponse} from 'next/server';
import {authReady} from '@/lib/auth/config.mjs';
import {authClient} from '@/lib/auth/server';
import {memberCatalog} from '@/lib/member/catalog';
import {validateMutation} from '@/lib/member/validation.mjs';
export const dynamic='force-dynamic';
const respond=(body,status=200)=>NextResponse.json(body,{status,headers:{'Cache-Control':'private, no-store'}});
async function session(){
 if(!authReady())return null;
 const client=await authClient();const {data:{user},error}=await client.auth.getUser();
 return error||!user?null:{client,user};
}
const enrich=row=>({...row,item:memberCatalog.get(row.path)});
export async function GET(request){
 const current=memberCatalog.get(new URL(request.url).searchParams.get('path'))||null;
 try {
  const auth=await session(); if(!auth)return respond({error:'Sign in to save your work.',current},401);
  const {data,error}=await auth.client.from('member_items').select('*').eq('user_id',auth.user.id).order('updated_at',{ascending:false});
  if(error)return respond({error:'Your account storage is not available yet. Please try again later.',current},503);
  const path=new URL(request.url).searchParams.get('path');
  return respond({userId:auth.user.id,items:data.filter(r=>memberCatalog.has(r.path)).map(enrich),current:memberCatalog.get(path)||null});
 }catch{return respond({error:'Unable to load your workspace. Please try again.',current},503);}
}
export async function POST(request){
 if(request.headers.get('origin')!==new URL(request.url).origin)return respond({error:'Invalid request origin.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return respond({error:'JSON required.'},415);
 try {
  const auth=await session(); if(!auth)return respond({error:'Your session has ended. Sign in again to save.'},401);
  const reader=request.body?.getReader();let size=0;const chunks=[];
  if(reader){while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>70000){await reader.cancel();return respond({error:'This entry is too large.'},413);}chunks.push(value);}}
  const text=Buffer.concat(chunks).toString('utf8');
  let body,data;
  try{body=JSON.parse(text);if(body.userId!==auth.user.id)return respond({error:'Your account changed. Reload before saving.'},409);data=validateMutation(body,memberCatalog.get(body.path));}catch(e){return respond({error:e.message||'Invalid entry.'},400);}
  const {data:row,error}=await auth.client.rpc('update_member_item',{p_path:body.path,p_action:body.action,p_data:data});
  if(error)return respond({error:'Changes could not be saved. Please try again.'},503);
  return respond({item:enrich(row)});
 }catch{return respond({error:'Unable to save. Please try again.'},503);}
}
