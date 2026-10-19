import {NextResponse} from 'next/server';
import {adminSession} from '@/lib/auth/admin';
export const dynamic='force-dynamic';
const respond=(body,status=200)=>NextResponse.json(body,{status,headers:{'Cache-Control':'private, no-store'}});
export async function GET(){
 try{
  const session=await adminSession();
  if(!session.user)return respond({error:'Sign in to continue.'},401);
  if(!session.isAdmin)return respond({error:'Administrator access required.'},403);
  const {data,error}=await session.client.from('admin_activity_snapshots').select('source,device,received_at,payload').order('source');
  if(error)return respond({error:'Activity is temporarily unavailable.'},503);
  return respond({sources:data,checkedAt:new Date().toISOString()});
 }catch{return respond({error:'Activity is temporarily unavailable.'},503);}
}
