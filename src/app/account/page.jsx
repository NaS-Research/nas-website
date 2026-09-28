import MemberHome from "@/components/member/MemberHome";
import Link from 'next/link';
import {redirect} from 'next/navigation';
import {authClient} from '@/lib/auth/server';
import {authReady} from '@/lib/auth/config.mjs';
import {signOut} from '@/app/login/actions';
import '@/app/login/auth.css';
export const metadata={title:'Your workspace | NaS',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function AccountPage(){
 if(!authReady())redirect('/login');
 const client=await authClient();const {data:{user},error}=await client.auth.getUser();
 if(error||!user)redirect('/login');
 return <><MemberHome /><div className="member-account-bar"><Link href="/login?mode=reset">Reset password</Link><form action={signOut}><button>Log out</button></form></div></>;
}
