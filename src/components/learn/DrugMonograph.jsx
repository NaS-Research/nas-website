import Link from "next/link";
import Footer from "@/components/Footer";
import DrugMonographContents from "./DrugMonographContents";
import styles from "./DrugMonograph.module.css";

function Facts({ entries }) {
  return <dl className={styles.facts}>{entries.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>;
}

function ReferenceLinks({ ids, sources }) {
  return <div className={styles.citations}><span>References</span>{ids.map(id => {
    const source = sources.find(item => item.id === id);
    return <a key={id} href={`#reference-${id}`}>{sources.indexOf(source) + 1}<span className={styles.srOnly}>: {source.title}</span></a>;
  })}</div>;
}

function Detail({ block, sources }) {
  return <details className={`${styles.detail} ${block.tone === "warning" ? styles.warning : ""}`} open={block.open || undefined}>
    <summary><h3>{block.title}</h3><span className={styles.toggle} aria-hidden="true" /></summary>
    <div className={styles.detailBody}>
      {block.badge && <span className={styles.badge}>{block.badge}</span>}
      {block.paragraphs?.map(text => <p key={text}>{text}</p>)}
      {block.table && <div className={styles.tableWrap} tabIndex={0} role="region" aria-label={`${block.title} table`}><table><thead><tr>{block.table.headers.map(title => <th scope="col" key={title}>{title}</th>)}</tr></thead><tbody>{block.table.rows.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>}
      {block.items && <ul>{block.items.map(text => <li key={text}>{text}</li>)}</ul>}
      {block.facts && <Facts entries={block.facts} />}
      {block.links && <div className={styles.links}>{block.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.title} <span aria-hidden="true">↗</span></a>)}</div>}
      <ReferenceLinks ids={block.sources} sources={sources} />
    </div>
  </details>;
}

export default function DrugMonograph({ monograph }) {
  const checkedDate = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${monograph.checked}T00:00:00Z`));
  const contents = monograph.sections.map(({ id, title, takeaway }) => ({ id, title, takeaway }));
  contents.push({ id: "references", title: "References", takeaway: "Follow the original sources for current product-specific information." });
  return <div className={`nas-page ${styles.page}`}>
    <div data-page-main>
      <header className={styles.hero}>
        <Link href="/learn/pharmacy/drugs" className={styles.back}>← Drug library</Link>
        <div className={styles.eyebrow}><span>Drug reference</span></div>
        <h1>{monograph.name}</h1>
        <p className={styles.synonym}>{monograph.synonym}</p>
        <p className={styles.intro}>{monograph.description}</p>
        <Facts entries={monograph.facts} />
        <div className={styles.metadata}><span>Sources checked <time dateTime={monograph.checked}>{checkedDate}</time></span><a href="#references">View references <span aria-hidden="true">↗</span></a></div>
      </header>
      <div className={styles.layout}>
        <article className={styles.article} aria-label={`${monograph.name} reference`}>
          <div className={styles.essential}><span className={styles.eyebrow}>Essential safety</span><h2>{monograph.essential.title}</h2><p>{monograph.essential.text}</p><a href={`#${monograph.essential.section}`}>{monograph.essential.link} <span aria-hidden="true">↓</span></a></div>
          {monograph.sections.map((section, index) => <section key={section.id} id={section.id} data-monograph-section className={styles.section} aria-labelledby={`${section.id}-title`}>
            <header className={styles.sectionHeader}><span className={styles.sectionNumber}>{String(index + 1).padStart(2, "0")}</span><div><h2 id={`${section.id}-title`}>{section.title}</h2><p>{section.summary}</p></div></header>
            <div className={styles.details}>{section.blocks.map(block => <Detail key={block.title} block={block} sources={monograph.sources} />)}</div>
          </section>)}
          <section id="references" data-monograph-section className={styles.section} aria-labelledby="references-title">
            <header className={styles.sectionHeader}><span className={styles.sectionNumber}>{String(contents.length).padStart(2, "0")}</span><div><h2 id="references-title">References</h2><p>Original sources for the clinical and product information.</p></div></header>
            <ol className={styles.sourceList}>{monograph.sources.map(source => <li key={source.id} id={`reference-${source.id}`}><span>{source.publisher}</span><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} <span aria-hidden="true">↗</span></a><p>{source.note}</p></li>)}</ol>
          </section>
        </article>
        <DrugMonographContents sections={contents} />
      </div>
    </div>
    <Footer />
  </div>;
}
