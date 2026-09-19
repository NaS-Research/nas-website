import Link from 'next/link';
import AuthForm from './AuthForm';
import {authReady,providerEnabled} from '@/lib/auth/config.mjs';
import './auth.css';
export const metadata={title:'Log in | NaS',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function LoginPage({searchParams}) {
 const params=await searchParams;
 const mode=['signup','reset','update'].includes(params.mode)?params.mode:'login';
 const ready=authReady();
 const titles={login:'Welcome back.',signup:'Your place at NaS.',reset:'Reset your password.',update:'Choose a new password.'};
 return <div className="auth-page"><section className="auth-card"><p className="auth-eyebrow">NaS Account</p><h1>{titles[mode]}</h1><p className="auth-intro">{mode==='signup'?'Create your account with an email address.':mode==='login'?'Sign in to your NaS account.':'Keep access to your account secure.'}</p>
 {!ready&&<p className="auth-status" role="status">Account access is being prepared. Sign-up and login are not available yet.</p>}
 {params.error&&<p className="auth-status" role="alert">That sign-in link could not be completed. Please try again or request a new link.</p>}
 <AuthForm key={mode} mode={mode} ready={ready} google={providerEnabled('google')} apple={providerEnabled('apple')}/><Link className="auth-back" href="/workspace">Back to Workspace ↗</Link>
 </section></div>;
}
