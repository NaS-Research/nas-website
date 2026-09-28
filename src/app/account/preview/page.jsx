import {notFound} from 'next/navigation';
import MemberPreview from '@/components/member/MemberPreview';
export const dynamic='force-dynamic';
export const metadata={title:'Workspace design preview | NaS',robots:{index:false,follow:false}};
export default function Preview(){if(process.env.NODE_ENV!=='development')notFound();return <MemberPreview/>;}
