import 'server-only';
import {authReady} from './config.mjs';
import {authClient} from './server';
export async function adminSession(){
 if(!authReady())return {user:null,isAdmin:false,client:null};
 const client=await authClient();
 const {data:{user},error}=await client.auth.getUser();
 if(error||!user)return {user:null,isAdmin:false,client:null};
 const {data,error:roleError}=await client.from('admin_members').select('role').eq('user_id',user.id).maybeSingle();
 return {client,user,isAdmin:!roleError&&data?.role==='admin'};
}
