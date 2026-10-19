import {redirect,notFound} from 'next/navigation';
import {adminSession} from '@/lib/auth/admin';
import ActivityConsole from '@/components/admin/ActivityConsole';
import '@/components/admin/activity.css';
export const dynamic='force-dynamic';
export const metadata={title:'Activity | NaS Admin',robots:{index:false,follow:false}};
export default async function AdminPage(){
 const session=await adminSession();
 if(!session.user)redirect('/login');
 if(!session.isAdmin)notFound();
 return <ActivityConsole/>;
}
