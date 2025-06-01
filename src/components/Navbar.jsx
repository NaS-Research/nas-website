"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [show, setShow] = useState(true);

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

  return (
    <header className={`fixed inset-x-0 top-0 z-40 bg-transparent transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center h-20 text-neutral-200">
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

        {/* Right‑side controls */}
        <div className="ml-auto flex items-center gap-3">
          {/* Sidebar / menu button */}
          <button
            aria-label="Open menu"
            className="text-neutral-200 p-3.5 rounded-md hover:bg-neutral-700/60 focus:outline-none focus:ring-2 focus:ring-white transition"
          >
            <FiMenu size={26} />
          </button>

          {/* Search button */}
          <button
            aria-label="Search"
            className="text-neutral-200 p-3.5 rounded-md hover:bg-neutral-700/60 focus:outline-none focus:ring-2 focus:ring-white transition"
          >
            <FiSearch size={26} />
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
    </header>
  );
}