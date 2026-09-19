import {NextResponse} from 'next/server';
import {authClient} from '@/lib/auth/server';
import {authReady,siteOrigin} from '@/lib/auth/config.mjs';
export async function GET(request) {
 if(!authReady()) return NextResponse.redirect(new URL('/login',request.url));
 const url=new URL(request.url),token_hash=url.searchParams.get('token_hash'),type=url.searchParams.get('type');
 if(token_hash&&['signup','email','recovery'].includes(type)) {
  const client=await authClient();const {error}=await client.auth.verifyOtp({token_hash,type});
  if(!error)return NextResponse.redirect(new URL(type==='recovery'?'/login?mode=update':'/account',siteOrigin()));
 }
 return NextResponse.redirect(new URL('/login?error=confirmation',siteOrigin()));
}
