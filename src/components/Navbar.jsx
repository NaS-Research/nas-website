"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./navigation.css";

const navigation = [
  { label: "Research", href: "/research" },
  { label: "Products", href: "/products" },
  { label: "Learn", href: "/learn" },
];
const sections = [
 { title:"Discover", links:[["Research library","/research"],["Research areas","/research/areas"],["Product overview","/products"]] },
 { title:"The institution", links:[["Our purpose","/about"],["Work with NaS","/support"]] },
 { title:"NaS Learn", links:[["Pharmacy","/learn/pharmacy"],["Visual Atlas","/learn/pharmacy/atlas"],["Drug Library","/learn/pharmacy/drugs"],["Practice","/learn/pharmacy/review"]] },
];

function isActivePath(pathname, href) {
  if (href === "/workspace") return pathname === "/workspace" || pathname === "/learn" || pathname.startsWith("/learn/");
  if (href === "/products") {
    return pathname === href;
  }

  if (href === "/research") {
    return pathname === href || (pathname.startsWith("/research/") && pathname !== "/products");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar({ authEnabled = false }) {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const triggerRef = useRef(null);
  const isHome = pathname === "/";
  const [homeHeroVisible, setHomeHeroVisible] = useState(isHome);
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const showHomeWordmark = isHome && homeHeroVisible;

  useEffect(() => {
    if (!isHome) {
      setHomeHeroVisible(false);
      return undefined;
    }

    const hero = document.querySelector(".home-mark-hero");
    if (!hero) {
      setHomeHeroVisible(false);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHomeHeroVisible(entry.isIntersecting && entry.intersectionRatio > 0.35);
      },
      { threshold: [0, 0.35, 0.7] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (!menuOpen) {
        if (currentY > lastY + 10 && currentY > 120) {
          setShow(false);
        } else if (currentY < lastY - 10) {
          setShow(true);
        }
      }

      lastY = currentY;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setShow(true);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") { setMenuOpen(false); triggerRef.current?.focus(); }
      if (event.key === "Tab") {
        const links = [...headerRef.current.querySelectorAll('a[href],button')].filter(el => el.getClientRects().length);
        const first = links[0], last = links[links.length-1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);


  return (
    <header ref={headerRef}
      className={`nas-navbar ${show || menuOpen ? "nas-navbar--visible" : "nas-navbar--hidden"} ${
        scrolled ? "nas-navbar--scrolled" : ""
      } ${menuOpen ? "nas-navbar--open" : ""}`}
    >
      <nav className="nas-navbar__inner" aria-label="Primary navigation">
        <Link href="/" aria-label="NaS home" className="nas-navbar__brand">
          <span
            aria-hidden="true"
            className={`nas-navbar__wordmark ${showHomeWordmark ? "nas-navbar__brand-layer--visible" : ""}`}
          >
            NaS
          </span>
          <Image
            src="/assets/images/NaSLogonbg.png"
            alt=""
            width={56}
            height={56}
            className={`nas-navbar__mark ${!showHomeWordmark ? "nas-navbar__brand-layer--visible" : ""}`}
            priority
          />
        </Link>

        <div className="nas-navbar__links">
          {navigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nas-navbar__link ${active ? "nas-navbar__link--active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href={authEnabled ? "/account" : "/login"} className="nas-nav-login">Log in</Link>
        <Link href="/workspace" className="nas-nav-workspace" onClick={() => setMenuOpen(false)}>Workspace <span aria-hidden="true">↗</span></Link>
        <button ref={triggerRef} type="button" className="nas-nav-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen} aria-controls="nas-navigation-panel"
          onClick={() => { setMenuOpen(open => !open); setShow(true); }}>
          {menuOpen ? "Close" : "Menu"}<span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>
      {menuOpen && <>
        <div className="nas-nav-backdrop" onClick={() => { setMenuOpen(false); triggerRef.current?.focus(); }} />
        <div id="nas-navigation-panel" className="nas-nav-panel">
          <nav aria-label="Explore NaS" onClick={event => { if(event.target.closest('a')) setMenuOpen(false); }}>
            <p className="nas-nav-eyebrow">Explore NaS</p>
            <div className="nas-nav-grid">
              <div className="nas-nav-primary">{[...navigation,{label:"About NaS",href:"/about"}].map(item => <Link key={item.href} href={item.href} aria-current={isActivePath(pathname,item.href) ? "page" : undefined}>{item.label}</Link>)}</div>
              <div>{sections.slice(0,2).map(section => <div className="nas-nav-group" key={section.title}><h2>{section.title}</h2>{section.links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}</div>
              <div className="nas-nav-group"><h2>{sections[2].title}</h2>{sections[2].links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}</div>
            </div>
            <div className="nas-nav-bottom"><span>Research and tools for the life sciences.</span><Link href="/workspace">Open Workspace ↗</Link></div>
          </nav>
        </div>
      </>}
    </header>
  );
}
