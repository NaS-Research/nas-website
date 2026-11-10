import ArticleAudioPlayer from "@/components/research/anatomy-release-preview/ArticleAudioPlayer";
import styles from "./preview.module.css";
export const metadata={title:"Article toolbar layout preview | NaS Research",robots:{index:false,follow:false}};
function Icon({kind}) {return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{kind==="pdf"?<><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 12h6m-6 4h6"/></>:kind==="data"?<><path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/></>:kind==="citation"?<><rect x="8" y="8" width="11" height="13" rx="2"/><path d="M15 8V3H4v13h4"/></>:<path d="m10 13 4-4m-6 6-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0m2 2 1-1a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0"/>}</svg>}
export default function Preview(){return <main className={styles.preview}>
<div className={styles.tags}>Scientific Infrastructure <span>·</span> Releases</div>
<h1>Introducing Anatomy Studio</h1>
<p className={styles.abstract}>Anatomy Studio is the first part of BioBank, NaS Research’s developing biological library. It begins with computational models for education and research communication.</p>
<p className={styles.byline}>By NaS Research <span>·</span> <small>3 min read</small></p>
<div className={styles.toolbar}><ArticleAudioPlayer src="/research/anatomy-studio/anatomy-studio-narration.mp3" title="Introducing Anatomy Studio" cover="/og.png" actions={<div className={styles.actions} aria-label="Placeholder article resources">{[["pdf","View PDF"],["data","Data & analysis"],["citation","Copy citation"],["share","Share"]].map(([kind,label])=><button type="button" key={kind} title="Layout preview only"><Icon kind={kind}/>{label}</button>)}</div>}/></div>
<p className={styles.note}>Layout preview · PDF and data actions are placeholders</p>
</main>}