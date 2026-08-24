"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Research", href: "/research" },
  { label: "Programs", href: "/research/programs" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
  { label: "Work with NaS", href: "/support" },
];

const mobileNavigation = [
  ...navigation,
  { label: "Contact", href: "/contact" },
];

function isActivePath(pathname, href) {
  if (href === "/research/programs") {
    return pathname === href;
  }

  if (href === "/research") {
    return pathname === href || (pathname.startsWith("/research/") && pathname !== "/research/programs");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
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
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 48rem)");
    const closeOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header
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

        <Link
          href="/contact"
          className={`nas-navbar__contact ${isActivePath(pathname, "/contact") ? "nas-navbar__contact--active" : ""}`}
        >
          Contact <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          className={`nas-navbar__menu-trigger ${menuOpen ? "nas-navbar__menu-trigger--open" : ""}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="nas-mobile-menu">
          <nav className="nas-mobile-menu__nav" aria-label="Mobile navigation">
            {mobileNavigation.map((item, index) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nas-mobile-menu__link ${active ? "nas-mobile-menu__link--active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.label}</strong>
                  <span aria-hidden="true">↗</span>
                </Link>
              );
            })}
          </nav>

          <Link href="/research/introducing-nas-cortex" className="nas-mobile-menu__current">
            <span>Current work</span>
            <strong>The NaS Cortex</strong>
            <small>Knowledge architecture for the life sciences ↗</small>
          </Link>
        </div>
      )}
    </header>
  );
}
