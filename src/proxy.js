import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import { authReady } from './lib/auth/config.mjs';
export async function proxy(request) {
 let response = NextResponse.next({request});
 if (authReady()) {
  const client = createServerClient(process.env.SUPABASE_URL,process.env.SUPABASE_PUBLISHABLE_KEY,{
   cookieOptions:{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/'},
   cookies:{getAll:()=>request.cookies.getAll(),setAll:values=>{
    values.forEach(({name,value})=>request.cookies.set(name,value));
    response=NextResponse.next({request});
    values.forEach(({name,value,options})=>response.cookies.set(name,value,options));
   }}
  });
  await client.auth.getUser();
 }
 response.headers.set('Cache-Control','private, no-store');
 return response;
}
export const config={matcher:['/login','/account/:path*','/auth/:path*']};
