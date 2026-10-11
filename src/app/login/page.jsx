import Link from 'next/link';
import AuthForm from './AuthForm';
import {authReady,providerEnabled} from '@/lib/auth/config.mjs';
import './auth.css';
export const metadata={title:'Sign in | NaS Workspace',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function LoginPage({searchParams}) {
 const params=await searchParams;
 const mode=['signup','reset','update'].includes(params.mode)?params.mode:'login';
 const ready=authReady();
 const titles={login:'Welcome back.',signup:'Create your account.',reset:'Reset your password.',update:'Choose a new password.'};
 const introductions={login:'Sign in to your scientific workspace.',signup:'One account for your research, reading, and learning.',reset:'We’ll email you a link to choose a new password.',update:'Choose a password you haven’t used before.'};
 return <main className="auth-page"><div className="auth-layout">
  <aside className="auth-story" aria-label="About your workspace"><p className="auth-eyebrow">NaS Workspace</p><h2>A place for your<br />scientific work.</h2><p className="auth-story-description">Follow a question. Keep the sources.<br />Pick up where you left off.</p><ul><li><strong>Keep your reading together.</strong><span>Save papers, articles, and learning resources.</span></li><li><strong>Return to the details.</strong><span>Keep private notes alongside your sources.</span></li><li><strong>Continue your work.</strong><span>Return to what you were exploring.</span></li></ul><Link className="auth-text-link" href="/research">Explore NaS research <span aria-hidden="true">↗</span></Link></aside>
  <section className="auth-card" aria-labelledby="auth-title"><p className="auth-eyebrow auth-mobile-label">NaS Workspace</p><h1 id="auth-title">{titles[mode]}</h1><p className="auth-intro">{introductions[mode]}</p>
   {!ready&&<p className="auth-status" role="status">Account registration is not open yet.</p>}
   {params.error&&<p className="auth-status" role="alert">That sign-in link could not be completed. Please try again or request a new link.</p>}
   <AuthForm key={mode} mode={mode} ready={ready} google={providerEnabled('google')} apple={providerEnabled('apple')}/><Link className="auth-back" href="/workspace">Explore the workspace <span aria-hidden="true">↗</span></Link>
  </section></div></main>;
}
