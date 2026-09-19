import Link from 'next/link';
import {redirect} from 'next/navigation';
import {authClient} from '@/lib/auth/server';
import {authReady} from '@/lib/auth/config.mjs';
import {signOut} from '@/app/login/actions';
import '@/app/login/auth.css';
export const metadata={title:'Your account | NaS',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function AccountPage(){
 if(!authReady())redirect('/login');
 const client=await authClient();const {data:{user},error}=await client.auth.getUser();
 if(error||!user)redirect('/login');
 return <div className="auth-page"><section className="auth-card"><p className="auth-eyebrow">NaS Account</p><h1>You’re signed in.</h1><p className="auth-intro">{user.email}</p><div className="auth-account-links"><Link href="/workspace">Open Workspace ↗</Link><Link href="/learn">Explore NaS Learn ↗</Link><Link href="/login?mode=reset">Reset password ↗</Link></div><p className="auth-intro">Learning progress currently stays in this browser. Account syncing is not available yet.</p><form action={signOut}><button className="auth-submit">Log out</button></form></section></div>;
}
