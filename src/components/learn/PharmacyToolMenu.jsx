"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function PharmacyToolMenu() {
  const menuRef = useRef(null);
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
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
  }, []);
  return (
<details ref={menuRef} className="pharmacy-tool-menu">
        <summary>
          <span>Learn</span>
          <strong>Open tools</strong>
          <i aria-hidden="true">+</i>
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
