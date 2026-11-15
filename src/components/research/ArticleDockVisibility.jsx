"use client";
import {createContext,useContext,useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import {observeArticleDocks} from '@/lib/articleDockVisibility.mjs';
import './article-docks.css';
const Context=createContext({article:false,visible:true});
export const useArticleDockVisibility=()=>useContext(Context);
export default function ArticleDockVisibility({children}){
 const path=usePathname();const pendingArticle=path.startsWith('/research/');
 const [state,setState]=useState({path,article:pendingArticle,visible:!pendingArticle});
 useEffect(()=>{if(!path.startsWith('/research/')){setState({path,article:false,visible:true});return;}return observeArticleDocks(window,document,next=>setState(old=>old.path===path&&old.article===next.article&&old.visible===next.visible?old:{path,...next}));},[path]);
 const value=state.path===path?state:{article:pendingArticle,visible:!pendingArticle};
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
