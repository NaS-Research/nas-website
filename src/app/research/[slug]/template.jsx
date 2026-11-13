"use client";

import {Fragment, useLayoutEffect, useState} from 'react';

// Next templates remount article client state on route changes. Browser history
// can restore the whole document without routing, so handle that visit as well.
export default function ResearchArticleVisit({children}) {
  const [visit, setVisit] = useState(0);
  useLayoutEffect(() => {
    let frame = 0;
    const top = () => {
      if (!window.location.hash) window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    };
    const restore = event => {
      if (!event.persisted) return;
      setVisit(value => value + 1);
      top();
      frame = window.requestAnimationFrame(top);
    };
    top();
    window.addEventListener('pageshow', restore);
    return () => { window.removeEventListener('pageshow', restore); window.cancelAnimationFrame(frame); };
  }, []);
  return <Fragment key={visit}>{children}</Fragment>;
}
