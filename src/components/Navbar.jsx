"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IconLayoutSidebar, IconLayoutSidebarRight } from "@tabler/icons-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Shift only <main> when the sidebar toggles
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    if (sidebarOpen) {
      main.style.transition = "transform 0.5s ease-in-out, width 0.5s ease-in-out";
      main.style.transform = "translateX(240px)";  // width of sidebar (w-60)
      main.style.width = "calc(100% - 240px)";
      main.style.overflowX = "hidden";
    } else {
      main.style.transform = "";
      main.style.width = "";
      main.style.overflowX = "";
    }

    return () => {
      if (main) {
        main.style.transform = "";
        main.style.overflowX = "";
      }
    };
  }, [sidebarOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-60 bg-black transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="relative z-50 mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 flex items-center h-20 text-neutral-200">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform duration-150 ease-out hover:scale-110 active:scale-95">
          <Image
            src="/assets/images/NaSLogonbg.png"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full object-cover"
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
          <Link
            href="/login"
            className="px-6 py-2.5 rounded-full bg-neutral-800/80 text-base font-medium text-neutral-200 hover:bg-neutral-700/80 focus:outline-none focus:ring-2 focus:ring-white transition"
          >
            Log&nbsp;in
          </Link>
        </div>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/80"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-60 bg-black text-neutral-200 transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4 px-8 pt-[20vh] text-xl">
          <Link href="/research" onClick={() => setSidebarOpen(false)}>Research</Link>
          <Link href="/support" onClick={() => setSidebarOpen(false)}>Support</Link>
          <Link href="/careers" onClick={() => setSidebarOpen(false)}>Careers</Link>
          <Link href="/about" onClick={() => setSidebarOpen(false)}>About NaS</Link>
          <Link href="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link>
        </nav>
      </aside>
    </header>
  );
}