'use client';
import {useState} from 'react';
import Link from 'next/link';
import MemberHome from './MemberHome';
import {MemberPreviewProvider} from './MemberProvider';
const examples=[
 {path:'/learn/pharmacy/drug-formulations-and-routes',item:{title:'Routes and dosage forms',type:'module',sections:['two-different-decisions','what-formulation-controls','study-check']},saved:true,progress:{lastSection:'two-different-decisions',visited:['two-different-decisions']},notes:{'':'Example note: revisit the differences between routes.'},practices:{}},
 {path:'/research/pam50-technical-repeatability',item:{title:'PAM50 technical repeatability',type:'paper',sections:[]},saved:true,progress:{},notes:{},practices:{}},
 {path:'/learn/pharmacy/atlas',item:{title:'Human Atlas',type:'tool',sections:[]},saved:true,progress:{},notes:{},practices:{}},
];
export default function MemberPreview(){const [empty,setEmpty]=useState(false);const [items,setItems]=useState(examples);return <MemberPreviewProvider value={{status:'ready',items:empty?[]:items,message:'',saving:false,retry:()=>{},save:async(path,action,data)=>{if(action==='save')setItems(old=>old.map(i=>i.path===path?{...i,saved:data.saved}:i));return true;}}}><div className="workspace-preview-controls"><span>Design preview · Sample account</span><div><button aria-pressed={!empty} onClick={()=>setEmpty(false)}>With activity</button><button aria-pressed={empty} onClick={()=>setEmpty(true)}>New account</button></div></div><MemberHome displayName="Dalron" accountControls={<><span>Sample account</span><Link href="/workspace">About the workspace ↗</Link></>}/></MemberPreviewProvider>}