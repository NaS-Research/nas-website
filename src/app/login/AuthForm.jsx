'use client';
import {useActionState,useState} from 'react';
import Link from 'next/link';
import {authenticate,socialSignIn} from './actions';
export default function AuthForm({mode,ready,email,google,apple}) {
 const [state,action,pending]=useActionState(authenticate,{});
 const [showPassword,setShowPassword]=useState(false);
 const signup=mode==='signup',reset=mode==='reset',update=mode==='update';
 if(!email) return <>
  {ready&&google&&<div className="auth-social"><form action={socialSignIn}><input type="hidden" name="provider" value="google"/><button>Continue with Google</button></form></div>}
  {ready&&google&&<p className="auth-provider-note">Use your Google account to sign in or create a NaS account.</p>}
  <p className="auth-provider-note">By continuing, you agree to the <Link href="/legal/terms">Terms</Link> and acknowledge the <Link href="/legal/privacy">Privacy Policy</Link>.</p>
 </>;

 return <>
 {!reset&&!update&&(google||apple)&&<><div className="auth-social">{[['google','Google',google],['apple','Apple',apple]].filter(x=>x[2]).map(([id,name])=><form action={socialSignIn} key={id}><input type="hidden" name="provider" value={id}/><button>Continue with {name}</button></form>)}</div><div className="auth-divider">or use email</div></>}
 <form action={action} className="auth-form"><input type="hidden" name="mode" value={mode}/>
 {signup&&<><label>Full name<input name="fullName" type="text" autoComplete="name" required maxLength={100} disabled={!ready||pending}/></label><label>Institution or affiliation <span className="auth-optional">Optional</span><input name="affiliation" type="text" autoComplete="organization" maxLength={160} disabled={!ready||pending}/></label></>}
 {!update&&<label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} disabled={!ready||pending}/></label>}
 {!reset&&<label>{update?'New password':'Password'}<span className="auth-password"><input name="password" type={showPassword?"text":"password"} autoComplete={signup||update?'new-password':'current-password'} required minLength={signup||update?12:1} maxLength={128} disabled={!ready||pending}/><button type="button" className="auth-password-toggle" aria-label={showPassword?"Hide password":"Show password"} aria-pressed={showPassword} onClick={()=>setShowPassword(value=>!value)} disabled={!ready||pending}>{showPassword?"Hide":"Show"}</button></span>{(signup||update)&&<small>At least 12 characters.</small>}</label>}
 {signup&&<label className="auth-consent"><input type="checkbox" name="consent" value="yes" required disabled={!ready||pending}/><span>I agree to the <Link href="/legal/terms">Terms</Link> and have read the <Link href="/legal/privacy">Privacy Policy</Link>.</span></label>}
 {state.error&&<p className="auth-status" role="alert">{state.error}</p>}{state.message&&<p className="auth-status" role="status">{state.message}</p>}
 <button className="auth-submit" disabled={!ready||pending}>{pending?'Please wait…':signup?'Create account':reset?'Send reset link':update?'Update password':'Sign in'}</button></form>
 <div className="auth-switch">{!signup&&!reset&&!update?<><Link href="/login?mode=reset">Forgot password?</Link><p>New to NaS? <Link href="/login?mode=signup">Create an account</Link></p></>:<Link href="/login">Back to sign in</Link>}</div>
 </>;
}
