"use client";

import usePublicationSection from './usePublicationSection';

export default function PublicationContents({ sections, hasSources, hasCitation }) {
  const links = [{ id: 'summary', title: 'Summary' }, ...sections,
    ...(hasSources ? [{ id: 'sources', title: 'Sources' }] : []),
    ...(hasCitation ? [{ id: 'citation', title: 'Citation' }] : [])];
  const active = usePublicationSection(links.map(section => section.id));
  return <aside className="publication-toc" aria-label="Publication contents">
    <details className="publication-contents" open>
      <summary>In this publication</summary>
      <nav>{links.map(section => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? 'location' : undefined} className={section.level === 2 ? 'publication-toc__subsection' : undefined}>{section.title}</a>)}</nav>
    </details>
  </aside>;
}
