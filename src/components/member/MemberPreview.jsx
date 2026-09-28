'use client';
import {useState} from 'react';
import MemberHome from './MemberHome';
import {MemberPreviewProvider} from './MemberProvider';
const examples=[
 {path:'/learn/pharmacy/drug-formulations-and-routes',item:{title:'Routes and dosage forms',type:'module',sections:['two-different-decisions','what-formulation-controls','study-check']},saved:true,progress:{lastSection:'two-different-decisions',visited:['two-different-decisions']},notes:{'':'Example note: revisit the differences between routes.'},practices:{}},
 {path:'/research/pam50-technical-repeatability',item:{title:'PAM50 technical repeatability',type:'paper',sections:[]},saved:true,progress:{},notes:{},practices:{}},
 {path:'/learn/pharmacy/atlas',item:{title:'Human Atlas',type:'tool',sections:[]},saved:true,progress:{},notes:{},practices:{}},
];
export default function MemberPreview(){const [items,setItems]=useState(examples);return <MemberPreviewProvider value={{status:'ready',items,message:'Design preview only. Sample entries are not account data.',saving:false,retry:()=>{},save:async(path,action,data)=>{if(action==='save')setItems(old=>old.map(i=>i.path===path?{...i,saved:data.saved}:i));return true;}}}><p style={{position:'relative',padding:'100px 24px 0',marginBottom:-100,color:'#c9b386',textAlign:'center',fontSize:12}}>Development preview · Sample content · No account data or syncing</p><MemberHome/></MemberPreviewProvider>}
