"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconLayoutSidebar, IconLayoutSidebarRight } from "@tabler/icons-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ComingSoonModal from "@/components/sections/ComingSoonModal";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [homeHeroVisible, setHomeHeroVisible] = useState(isHome);
  const [show, setShow] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      if (currentY > lastY + 10 && currentY > 100) {
        // scrolling down
        setShow(false);
      } else if (currentY < lastY - 10) {
        // scrolling up
        setShow(true);
      }
      lastY = currentY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Shift only <main> when the sidebar toggles and keep the right edge fixed
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const sidebarWidth = window.innerWidth < 640 ? 180 : 240; // w‑48 on mobile, w‑60 otherwise

    if (sidebarOpen) {
      // 1. Freeze current width in pixels so 'auto' → length becomes animatable
      const startWidth = main.getBoundingClientRect().width;
      main.style.transition = "none";
      main.style.width = `${startWidth}px`;
      main.style.marginLeft = "0px";
      main.style.overflowX = "hidden";

      // 2. Next frame: animate both width and margin‑left together
      requestAnimationFrame(() => {
        main.style.transition =
          "margin-left 0.6s cubic-bezier(0.4,0,0.2,1), width 0.6s cubic-bezier(0.4,0,0.2,1)";
        main.style.willChange = "margin-left, width";
        main.style.width = `calc(100% - ${sidebarWidth}px)`;
        main.style.marginLeft = `${sidebarWidth}px`;
      });
    } else {
      // Reverse animation: pixel width → 100% while margin‑left goes to 0
      const startWidth = main.getBoundingClientRect().width;
      main.style.transition = "none";
      main.style.width = `${startWidth}px`;
      main.style.marginLeft = `${sidebarWidth}px`;

      requestAnimationFrame(() => {
        main.style.transition =
          "margin-left 0.6s cubic-bezier(0.4,0,0.2,1), width 0.6s cubic-bezier(0.4,0,0.2,1)";
        main.style.willChange = "margin-left, width";
        main.style.width = "";
        main.style.marginLeft = "";
      });
    }

    return () => {
      if (main) {
        main.style.marginLeft = "";
        main.style.width = "";
        main.style.overflowX = "";
        main.style.willChange = "";
        main.style.transition = "";
      }
    };
  }, [sidebarOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-60 bg-black transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="relative z-50 mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 flex items-center h-20 text-neutral-200">
        {/* Homepage uses the wordmark because the emblem is already the hero centerpiece. */}
        <Link
          href="/"
          aria-label="NaS home"
          className="relative flex h-[60px] w-[60px] items-center transition-transform duration-150 ease-out hover:scale-105 active:scale-95"
        >
          <span
            aria-hidden="true"
            className={`absolute left-1 text-[1.35rem] font-semibold tracking-[-0.045em] text-neutral-100 transition-all duration-500 ${
              showHomeWordmark ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
            }`}
          >
            NaS
          </span>
          <Image
            src="/assets/images/NaSLogonbg.png"
            alt=""
            width={60}
            height={60}
            className={`absolute inset-0 rounded-full object-cover transition-all duration-500 ${
              showHomeWordmark ? "translate-y-1 scale-90 opacity-0" : "translate-y-0 scale-100 opacity-100"
            }`}
            priority
          />
        </Link>

        {/* Sidebar / menu button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setSidebarOpen(prev => !prev)}
          className="group ml-3 p-3.5 rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition"
        >
          {sidebarOpen ? (
            <IconLayoutSidebarRight className="w-6 h-6 text-neutral-200 opacity-60 group-hover:opacity-100 transition-opacity duration-150" />
          ) : (
            <IconLayoutSidebar className="w-6 h-6 text-neutral-200 opacity-60 group-hover:opacity-100 transition-opacity duration-150" />
          )}
        </button>

        {/* Right‑side controls */}
        <div className="ml-auto flex items-center gap-3">
          {/* Search button */}
          <button
            aria-label="Search"
            className="group p-3.5 rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition"
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-neutral-200 opacity-60 group-hover:opacity-100 transition-opacity duration-150" />
          </button>

          {/* Log‑in link */}
          <button
            className="px-6 py-2.5 rounded-full bg-neutral-800/80 text-base font-medium text-neutral-200 hover:bg-neutral-700/80 focus:outline-none transition active:scale-95 transform transition-transform duration-100 cursor-pointer"
            onClick={() => setShowModal(true)}
            type="button"
          >
            Log&nbsp;in
          </button>
        </div>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/90 backdrop-blur-2xl backdrop-saturate-200 sm:backdrop-blur-none sm:bg-black/80"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-48 sm:w-60 bg-black text-neutral-200 transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4 px-8 pt-[20vh] text-xl">
          <Link href="/research" onClick={() => setSidebarOpen(false)}>Research</Link>
          <Link href="/support" onClick={() => setSidebarOpen(false)}>Support</Link>
          <Link href="/about" onClick={() => setSidebarOpen(false)}>About NaS</Link>
          <Link href="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link>
        </nav>
      </aside>
      {/* Coming Soon Modal */}
      <ComingSoonModal open={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}
