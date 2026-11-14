import MemberHome from "@/components/member/MemberHome";
import Link from 'next/link';
import {memberName,memberFirstName} from '@/lib/member/presentation.mjs';
import {redirect} from 'next/navigation';
import {adminSession} from '@/lib/auth/admin';
import {authReady,emailEnabled} from '@/lib/auth/config.mjs';
import {signOut} from '@/app/login/actions';
import '@/app/login/auth.css';
export const metadata={title:'Your workspace | NaS',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function AccountPage({searchParams}){
 if(!authReady())redirect('/login');
 const session=await adminSession();const {user}=session;
 if(!user)redirect('/login');
 const displayName=memberName(user);
 const {tab}=await searchParams;
 return <MemberHome displayName={memberFirstName(user)} initialTab={tab==='saved'?'Saved':'Continue'} accountControls={<>{session.isAdmin&&<Link href="/account/admin">Admin activity ↗</Link>}<span className="member-identity">Signed in as {displayName||user.email}</span>{emailEnabled()&&<Link href="/login?mode=reset">Reset password</Link>}<form action={signOut}><button>Log out</button></form></>}/>;
}
