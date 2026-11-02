"use client";
import dynamic from 'next/dynamic';
const Studio = dynamic(() => import('./StudioReview'), {ssr:false,
 loading:() => <p role="status">Preparing The Anatomy Studio…</p>});
export default function StudioClient({publicAccess=false}) { return <Studio publicAccess={publicAccess} />; }
