import Link from "next/link";
import WorkspacePreviewFilm from "./WorkspacePreviewFilm";
import "./institute-intro.css";

export default function Featured() {
  return (
    <section id="next-section" className="home-workspace" aria-labelledby="home-workspace-title">
      <div className="home-workspace__inner">
        <div className="home-workspace__copy">
          <p className="home-workspace__eyebrow">The NaS workspace</p>
          <h2 id="home-workspace-title">Room for your<br />next <span>question.</span></h2>
          <p className="home-workspace__description">Research tools, learning, and a personal library for scientists, clinicians, and curious minds.</p>
          <Link href="/workspace" className="home-workspace__link">Explore the workspace <span aria-hidden="true">↗</span></Link>
        </div>
        <WorkspacePreviewFilm />
      </div>
    </section>
  );
}
