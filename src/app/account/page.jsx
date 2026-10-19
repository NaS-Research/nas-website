import MemberHome from "@/components/member/MemberHome";
import Link from 'next/link';
import {redirect} from 'next/navigation';
import {adminSession} from '@/lib/auth/admin';
import {authReady,emailEnabled} from '@/lib/auth/config.mjs';
import {signOut} from '@/app/login/actions';
import '@/app/login/auth.css';
export const metadata={title:'Your workspace | NaS',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function AccountPage(){
 if(!authReady())redirect('/login');
 const session=await adminSession();const {user}=session;
 if(!user)redirect('/login');
 const profileName=user.user_metadata?.full_name;
 const displayName=typeof profileName==='string'&&profileName.trim()?profileName.trim().slice(0,100):user.email;
 return <><MemberHome /><div className="member-account-bar">{session.isAdmin&&<Link href="/account/admin">Admin activity ↗</Link>}<span className="member-identity">Signed in as {displayName}</span>{emailEnabled()&&<Link href="/login?mode=reset">Reset password</Link>}<form action={signOut}><button>Log out</button></form></div></>;
}
