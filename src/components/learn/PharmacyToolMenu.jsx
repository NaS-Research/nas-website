"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Squares2X2Icon,ChevronUpIcon } from "@heroicons/react/24/outline";
import { useMember } from "@/components/member/MemberProvider";

export default function PharmacyToolMenu({embedded=false,detailsRef,onOpen}) {
  const fallbackRef = useRef(null);
  const menuRef = detailsRef || fallbackRef;
  const member = useMember();
  const isModule = member?.current?.path===member?.pathname && member?.current?.type==='module';
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || embedded) return;
    const updateHeight = () => document.documentElement.style.setProperty(
      "--pharmacy-tools-height", `${menu.getBoundingClientRect().height}px`
    );
    const observer = new ResizeObserver(updateHeight);
    observer.observe(menu);
    updateHeight();
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--pharmacy-tools-height");
    };
  }, [embedded,isModule,member?.pathname]);
  useEffect(() => {
    const menu=menuRef.current;
    if(!menu)return;
    const dismiss=event=>{
      if(event.type==='keydown'&&event.key!=='Escape')return;
      if(event.type==='pointerdown'&&menu.contains(event.target))return;
      if(!menu.open)return;
      menu.open=false;
      if(event.type==='keydown')menu.querySelector('summary')?.focus();
    };
    document.addEventListener('pointerdown',dismiss);
    document.addEventListener('keydown',dismiss);
    return()=>{document.removeEventListener('pointerdown',dismiss);document.removeEventListener('keydown',dismiss);};
  },[embedded,isModule,member?.pathname]);
  if(!embedded&&isModule)return null;
  return (
<details ref={menuRef} className={embedded?"pharmacy-tool-menu pharmacy-tool-menu--embedded":"pharmacy-tool-menu pharmacy-tool-menu--standalone"} onToggle={event=>{if(event.currentTarget.open)onOpen?.();}}>
        <summary>
          {embedded?<><Squares2X2Icon aria-hidden="true"/><strong>Tools</strong><ChevronUpIcon className="pharmacy-tools-chevron" aria-hidden="true"/></>:<><span>Learn</span><strong>Open tools</strong><i aria-hidden="true">+</i></>}
        </summary>
        <nav aria-label="Learning tools">
          <Link href="/learn"><span>01</span>NaS Learn</Link>
          <Link href="/learn/pharmacy/atlas"><span>02</span>Human Atlas</Link>
          <Link href="/learn/pharmacy/drugs"><span>03</span>Drug library</Link>
          <Link href="/learn/library"><span>04</span>Learning library</Link>
          <Link href="/learn/pharmacy/review"><span>05</span>Knowledge review</Link>
        </nav>
      </details>
  );
}
