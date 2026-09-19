'use server';
import { redirect } from 'next/navigation';
import { authClient } from '@/lib/auth/server';
import { authReady,providerEnabled,siteOrigin } from '@/lib/auth/config.mjs';
export async function authenticate(previous,form) {
 if (!authReady()) return {error:'Sign-in is not available yet. Please check back soon.'};
 const mode=String(form.get('mode')||'login');
 if (!['login','signup','reset','update'].includes(mode)) return {error:'Please try again.'};
 const email=String(form.get('email')||'').trim();
 const password=String(form.get('password')||'');
 if (mode!=='update' && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254)) return {error:'Enter a valid email address.'};
 if (mode!=='reset' && (!password || password.length>128 || (mode!=='login' && password.length<12))) return {error:'Use a password between 12 and 128 characters.'};
 try {
  const client=await authClient();
  if(mode==='signup') {
   if(form.get('consent')!=='yes') return {error:'Please accept the terms before creating an account.'};
   const {error}=await client.auth.signUp({email,password,options:{emailRedirectTo:`${siteOrigin()}/auth/callback`}});
   if(error) return {error:'We could not complete signup. Try again later, or use password recovery if you already have an account.'};
   return {message:'Check your email to continue. If you already have an account, sign in or reset your password.'};
  }
  if(mode==='reset') {
   await client.auth.resetPasswordForEmail(email,{redirectTo:`${siteOrigin()}/auth/callback?next=reset`});
   return {message:'If an account can receive a reset email, we’ve sent instructions. Check your inbox.'};
  }
  if(mode==='update') {
   const {data:{user},error}=await client.auth.getUser();
   if(error||!user) return {error:'Open a valid password reset link from your email first.'};
   const result=await client.auth.updateUser({password});
   if(result.error) return {error:'Unable to update your password. Request a new reset link and try again.'};
   await client.auth.signOut({scope:'global'});
   return {message:'Password updated. Sign in again with your new password.'};
  }
  const {error}=await client.auth.signInWithPassword({email,password});
  if(error) return {error:'Unable to sign in. Check your email and password, and confirm your email if needed.'};
 } catch { return {error:'Sign-in is temporarily unavailable. Please try again later.'}; }
 redirect('/account');
}
export async function socialSignIn(form) {
 const provider=String(form.get('provider'));
 if(!providerEnabled(provider)) redirect('/login?error=unavailable');
 const client=await authClient();
 const {data,error}=await client.auth.signInWithOAuth({provider,options:{redirectTo:`${siteOrigin()}/auth/callback`}});
 if(error||!data.url) redirect('/login?error=oauth');
 redirect(data.url);
}
export async function signOut() {
 const client=await authClient();
 await client.auth.signOut();
 redirect('/login');
}
