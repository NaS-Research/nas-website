import {NextResponse} from 'next/server';
import {authClient} from '@/lib/auth/server';
import {authReady,siteOrigin} from '@/lib/auth/config.mjs';
export async function GET(request) {
 if(!authReady()) return NextResponse.redirect(new URL('/login',request.url));
 const url=new URL(request.url),code=url.searchParams.get('code');
 if(code){const client=await authClient();const {error}=await client.auth.exchangeCodeForSession(code);if(!error)return NextResponse.redirect(new URL(url.searchParams.get('next')==='reset'?'/login?mode=update':'/account',siteOrigin()));}
 return NextResponse.redirect(new URL('/login?error=callback',siteOrigin()));
}
