import 'server-only';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { authReady } from './config.mjs';
export async function authClient() {
 if (!authReady()) throw new Error('Authentication is not configured');
 const store = await cookies();
 return createServerClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, {
  cookieOptions: { httpOnly:true, sameSite:'lax', secure:process.env.NODE_ENV === 'production', path:'/' },
  cookies: { getAll:()=>store.getAll(), setAll:values=>{ try {values.forEach(({name,value,options})=>store.set(name,value,options));} catch { /* Server components cannot write cookies; proxy refreshes them. */ } } }
 });
}
