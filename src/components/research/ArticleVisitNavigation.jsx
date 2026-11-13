"use client";

import {useEffect, useLayoutEffect, useMemo, useRef} from 'react';
import {usePathname} from 'next/navigation';

// Research articles intentionally start as fresh documents. Media HTTP caching
// stays enabled; only the router's retained article UI state is bypassed.
export default function ArticleVisitNavigation({paths}) {
  const pathname = usePathname();
  const articles = useMemo(() => new Set(paths), [paths]);
  const previousPath = useRef(pathname);
  useLayoutEffect(() => {
    previousPath.current = pathname;
    if (!articles.has(pathname) || location.hash) return;
    const restoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    return () => { history.scrollRestoration = restoration; };
  }, [pathname, articles]);
  useEffect(() => {
    let reloadPending = false;
    const reload = () => {
      if (reloadPending) return;
      reloadPending = true;
      window.location.reload();
    };
    const onClick = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!anchor || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin || !articles.has(url.pathname)) return;
      if (url.pathname === location.pathname && url.hash) return;
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(url.href);
    };
    const onHistory = () => {
      const returning = previousPath.current !== location.pathname;
      previousPath.current = location.pathname;
      if (returning && articles.has(location.pathname)) reload();
    };
    const onShow = event => { if (event.persisted && articles.has(location.pathname)) reload(); };
    const onHide = () => { reloadPending = false; };
    document.addEventListener('click', onClick, true);
    window.addEventListener('popstate', onHistory);
    window.addEventListener('pageshow', onShow);
    window.addEventListener('pagehide', onHide);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('popstate', onHistory);
      window.removeEventListener('pageshow', onShow);
      window.removeEventListener('pagehide', onHide);
    };
  }, [articles]);
  return null;
}
