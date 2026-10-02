import "./learning-cinema.css";

const videoId = "e3WmNwY95h0";
const filmTitle = "How Opioids Work: Pain Relief, Breathing Risk & Naloxone";
const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
const previewUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&rel=0`;

export default function LearningCinema() {
  return <section id="films" className="learning-cinema" aria-labelledby="learning-cinema-title">
    <div className="nas-shell">
      <header className="learning-cinema__heading">
        <p className="nas-section-label">In focus</p>
        <h2 id="learning-cinema-title">See science unfold.</h2>
        <p>A closer look at the ideas that explain life.</p>
      </header>
      <div className="learning-cinema__stage">
        <div className="learning-cinema__screen">
          <iframe
            className="learning-cinema__player"
            src={previewUrl}
            title={`${filmTitle} | NaS Research`}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
      <div className="learning-cinema__caption">
        <div className="learning-cinema__actions">
          <a className="learning-cinema__watch" href={watchUrl} target="_blank" rel="noopener noreferrer">Watch the full film <span aria-hidden="true">↗</span></a>
          <a href="https://www.youtube.com/@NaS_Research" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
        </div>
      </div>
    </div>
  </section>;
}
