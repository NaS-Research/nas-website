'use client';
import {useActionState,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {authenticate,socialSignIn} from './actions';
export default function AuthForm({mode,ready,email,google,apple,microsoft}) {
 const [state,action,pending]=useActionState(authenticate,{});
 const [showPassword,setShowPassword]=useState(false);
 const signup=mode==='signup',reset=mode==='reset',update=mode==='update';
 const showSocial=ready&&!reset&&!update&&(google||apple||microsoft);
 const social=showSocial&&(
  <div className="auth-social">
   {google&&<form action={socialSignIn}>
    <input type="hidden" name="provider" value="google"/>
    <button type="submit" className="auth-provider-button" aria-label="Sign in with Google" title="Sign in with Google">
     <Image src="/assets/images/google-sign-in-dark-round.svg" width={40} height={40} alt="" unoptimized />
    </button>
   </form>}
   {microsoft&&<form action={socialSignIn}>
    <input type="hidden" name="provider" value="azure"/>
    <button type="submit" className="auth-provider-button" aria-label="Sign in with Microsoft" title="Sign in with Microsoft">
     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
      <circle cx="20" cy="20" r="19.5" fill="#131314"/>
      <path fill="#F25022" d="M11 11h8.5v8.5H11z"/>
      <path fill="#7FBA00" d="M20.5 11H29v8.5h-8.5z"/>
      <path fill="#00A4EF" d="M11 20.5h8.5V29H11z"/>
      <path fill="#FFB900" d="M20.5 20.5H29V29h-8.5z"/>
     </svg>
    </button>
   </form>}
   {apple&&<form action={socialSignIn} className="auth-social-wide">
    <input type="hidden" name="provider" value="apple"/>
    <button type="submit">Continue with Apple</button>
   </form>}
  </div>
 );
 if(!email) return <>
  {social}
  {showSocial&&<p className="auth-provider-note">Use a connected account to sign in or create a NaS account.</p>}
  <p className="auth-provider-note">By continuing, you agree to the <Link href="/legal/terms">Terms</Link> and acknowledge the <Link href="/legal/privacy">Privacy Policy</Link>.</p>
 </>;

 return <>
 <form action={action} className="auth-form"><input type="hidden" name="mode" value={mode}/>
 {signup&&<><label>Full name<input name="fullName" type="text" autoComplete="name" required maxLength={100} disabled={!ready||pending}/></label><label>Institution or affiliation <span className="auth-optional">Optional</span><input name="affiliation" type="text" autoComplete="organization" maxLength={160} disabled={!ready||pending}/></label></>}
 {!update&&<label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} disabled={!ready||pending}/></label>}
 {!reset&&<label>{update?'New password':'Password'}<span className="auth-password"><input name="password" type={showPassword?"text":"password"} autoComplete={signup||update?'new-password':'current-password'} required minLength={signup||update?12:1} maxLength={128} disabled={!ready||pending}/><button type="button" className="auth-password-toggle" aria-label={showPassword?"Hide password":"Show password"} aria-pressed={showPassword} onClick={()=>setShowPassword(value=>!value)} disabled={!ready||pending}>{showPassword?"Hide":"Show"}</button></span>{(signup||update)&&<small>At least 12 characters.</small>}</label>}
 {signup&&<label className="auth-consent"><input type="checkbox" name="consent" value="yes" required disabled={!ready||pending}/><span>I agree to the <Link href="/legal/terms">Terms</Link> and have read the <Link href="/legal/privacy">Privacy Policy</Link>.</span></label>}
 {state.error&&<p className="auth-status" role="alert">{state.error}</p>}{state.message&&<p className="auth-status" role="status">{state.message}</p>}
 <button className="auth-submit" disabled={!ready||pending}>{pending?'Please wait…':signup?'Create account':reset?'Send reset link':update?'Update password':'Sign in'}</button></form>
 <div className="auth-switch">{!signup&&!reset&&!update?<><Link href="/login?mode=reset">Forgot password?</Link><p>New to NaS? <Link href="/login?mode=signup">Create an account</Link></p></>:<Link href="/login">Back to sign in</Link>}</div>
 {showSocial&&<div className="auth-alternative">
  <div className="auth-divider">or</div>
  {social}
 </div>}
 </>;
}
