"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { cancelPageScroll, scrollPageTo } from "@/lib/pageScroll.mjs";

export default function PageNavigationMotion() {
  const pathname = usePathname();
  useEffect(() => {
    // Only intercept navigation within the current document. Other routes,
    // modified clicks, downloads, and browser history keep their native behavior.
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!anchor || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self") || anchor.hasAttribute("data-native-scroll")) return;
      const href = anchor.getAttribute("href");
      if (!href.includes("#")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return;
      let id;
      try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
      const target = id ? document.getElementById(id) : document.body;
      if (!target) return;
      event.preventDefault();
      if (url.href !== location.href) history.pushState(history.state, "", url.href);
      scrollPageTo(target);
    };
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", cancelPageScroll);
    window.addEventListener("hashchange", cancelPageScroll);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", cancelPageScroll);
      window.removeEventListener("hashchange", cancelPageScroll);
      cancelPageScroll();
    };
  }, [pathname]);
  return null;
}
