import Link from 'next/link';
import Footer from '@/components/Footer';
import StudioClient from '@/components/anatomy-studio/StudioClient';
export const metadata={title:'The Anatomy Studio | NaS Research',description:'Explore organ and cell models in three dimensions. Rotate each model and select illustrative organ regions to learn more.',alternates:{canonical:'/learn/anatomy'}};
export default function AnatomyStudioPage(){return <div className="nas-page"><div className="nas-shell" style={{paddingTop:24,paddingBottom:16}}><Link href="/learn#interactive-library" className="nas-text-link">← Learn</Link></div><StudioClient publicAccess/><Footer/></div>;}
