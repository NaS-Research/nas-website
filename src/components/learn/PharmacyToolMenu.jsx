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
          <span>Pharmacy</span>
          <strong>Open tools</strong>
          <i aria-hidden="true">+</i>
        </summary>
        <nav aria-label="Pharmacy tools">
          <Link href="/learn/pharmacy"><span>01</span>Home</Link>
          <Link href="/learn/pharmacy/atlas"><span>02</span>Visual atlas</Link>
          <Link href="/learn/pharmacy/drugs"><span>03</span>Drug library</Link>
          <Link href="/learn/pharmacy#curriculum"><span>04</span>Curriculum</Link>
          <Link href="/learn/pharmacy#learning-library"><span>05</span>Study guides</Link>
        </nav>
      </details>
  );
}
