import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceTileCard from "../components/ServiceTileCard";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";
import FilterTabs from "../components/FilterTabs";
import { videoServiceCards, videoProjects, videoCategories, type VideoProject, type VideoCategory } from "../data/videoProduction";

const ACC = "var(--clr-video)";
const ACC_GLOW = "var(--clr-video-glow)";
const ACC_BORDER = "var(--clr-video-border)";

/* Showreel fake project for modal */
const SHOWREEL: VideoProject = {
  id: "showreel",
  client: "Rocklike Techventures",
  title: "Production Showreel 2024",
  category: "Brand Film",
  thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=675&fit=crop&auto=format",
  duration: "3:47",
  year: 2024,
};

const PROCESS_STEPS = [
  { n: "01", label: "Brief", desc: "We dig into your goals, audience, and message." },
  { n: "02", label: "Pre-Production", desc: "Script, storyboard, location, casting, schedule." },
  { n: "03", label: "Production", desc: "Shoot days — directed, lit, and captured precisely." },
  { n: "04", label: "Post-Production", desc: "Edit, colour grade, sound design, motion graphics." },
  { n: "05", label: "Delivery", desc: "All formats, all platforms, all specs — on time." },
];

/* Inline sub-components */
function Eyebrow({ children, color = ACC }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
      <span style={{ display: "block", width: "2rem", height: "2px", backgroundColor: color, flexShrink: 0 }} />
      <span style={{ fontFamily: "var(--font-fine)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color }}>{children}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.25rem, 4vw, 4rem)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-display)", color: "var(--text-primary)", margin: 0 }}>
      {children}
    </h2>
  );
}

export default function VideoProduction() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

  const filteredVideos = activeCategory === "All" ? videoProjects : videoProjects.filter((v) => v.category === activeCategory);
  const regularCards = videoServiceCards.slice(0, 12);
  const featuredCard = videoServiceCards[12];

  return (
    <main>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="vp-hero">
        <div className="vp-hero__bg" aria-hidden>
          <div className="vp-hero__bg-img" />
          <div className="vp-hero__overlay" />
          <div className="vp-hero__glow vp-hero__glow--blue" />
          <div className="vp-hero__glow vp-hero__glow--dark" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "1.5rem" }}>
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Video Production" }]} accent={ACC} />
        </div>

        <div className="container vp-hero__inner">
          <div className="vp-hero__left">
            <Eyebrow>Video Production & Content Creation</Eyebrow>

            <h1 className="vp-hero__h1">
              Stories That<br />
              <span style={{ color: ACC }}>Move People.</span>
            </h1>

            <p className="vp-hero__sub">
              Cinematic production across every format — from 15-second paid social to 30-minute brand documentaries. We build the visual stories that make audiences stop, feel, and act.
            </p>

            <div className="vp-hero__stats">
              {[["1,200+", "Videos Produced"], ["09+", "Years"], ["13", "Video Formats"]].map(([v, l]) => (
                <div key={l} className="vp-hero__stat">
                  <span className="vp-hero__stat-val">{v}</span>
                  <span className="vp-hero__stat-label">{l}</span>
                </div>
              ))}
            </div>

            <div className="vp-hero__actions">
              <Link to="/contact" className="vp-btn vp-btn--primary">
                Commission Your Story
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <button className="vp-btn vp-btn--ghost" onClick={() => setActiveVideo(SHOWREEL)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 2L11 7L3 12V2Z" fill="currentColor" /></svg>
                Watch Showreel
              </button>
            </div>
          </div>

          {/* Right — cinematic image frame */}
          <div className="vp-hero__right">
            <div className="vp-hero__frame">
              <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop&auto=format" alt="Cinematic video production" className="vp-hero__frame-img" />
              <div className="vp-hero__frame-overlay" aria-hidden />
              {/* Play button overlay */}
              <button className="vp-hero__play" onClick={() => setActiveVideo(SHOWREEL)} aria-label="Play showreel">
                <div className="vp-hero__play-ring" />
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 3L19 11L5 19V3Z" fill="white" /></svg>
              </button>
              {/* Corner badge */}
              <div className="vp-hero__badge">
                <span className="vp-hero__badge-dot" />
                <span>Showreel 2024</span>
                <span className="vp-hero__badge-dur">3:47</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          13 SERVICE TILES
      ══════════════════════════════════════════ */}
      <section id="services" className="vp-services section">
        <div className="container">
          <div className="vp-services__header">
            <div>
              <Eyebrow>What We Produce</Eyebrow>
              <SectionTitle>13 Formats.{" "}<span style={{ color: "var(--text-secondary)" }}>One Cinematic Standard.</span></SectionTitle>
            </div>
            <p className="vp-services__sub">
              Every format on this list is something we've produced, tested, and shipped for real clients. Pick the one that fits your goal — or let us recommend the right format for your brief.
            </p>
          </div>

          {/* First 12 in 4-col grid */}
          <div className="vp-services__grid">
            {regularCards.map((card) => (
              <ServiceTileCard key={card.id} card={card} accent={ACC} accentGlow={ACC_GLOW} accentBorder={ACC_BORDER} />
            ))}
          </div>

          {/* 13th card — featured full-width */}
          <div className="vp-services__featured">
            <div className="vp-services__featured-inner">
              <div className="vp-services__featured-glow" aria-hidden />
              <div className="vp-services__featured-left">
                <span className="vp-services__featured-num">13</span>
                <div>
                  <p className="vp-services__featured-eyebrow" style={{ color: ACC }}>Anything Else</p>
                  <h3 className="vp-services__featured-title">{featuredCard.title}</h3>
                  <p className="vp-services__featured-desc">{featuredCard.description}</p>
                </div>
              </div>
              <div className="vp-services__featured-right">
                <ul className="vp-services__featured-list">
                  {featuredCard.deliverables.map((d) => (
                    <li key={d} className="vp-services__featured-item">
                      <span className="vp-services__featured-dot" style={{ backgroundColor: ACC }} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="vp-btn vp-btn--primary" style={{ marginTop: "1.5rem" }}>
                  Tell Us Your Brief
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SHOWREEL
      ══════════════════════════════════════════ */}
      <section className="vp-showreel section">
        <div className="container">
          <div className="vp-showreel__header">
            <Eyebrow>Our Work</Eyebrow>
            <SectionTitle>See What We Make.</SectionTitle>
          </div>

          {/* Main player */}
          <button className="vp-showreel__player" onClick={() => setActiveVideo(SHOWREEL)} aria-label="Play 2024 production showreel">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&h=788&fit=crop&auto=format" alt="2024 Showreel" className="vp-showreel__player-img" />
            <div className="vp-showreel__player-overlay" aria-hidden />

            {/* Label */}
            <div className="vp-showreel__label">
              <span className="vp-showreel__rec" aria-hidden />
              <span>ROCKLIKE SHOWREEL 2024</span>
            </div>

            {/* Play button */}
            <div className="vp-showreel__play">
              <div className="vp-showreel__play-ring" />
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 4L22 14L6 24V4Z" fill="white" /></svg>
            </div>

            {/* Duration */}
            <div className="vp-showreel__duration">3:47</div>
          </button>

          {/* Thumbnail strip */}
          <div className="vp-showreel__strip">
            {videoProjects.slice(0, 4).map((v) => (
              <button key={v.id} className="vp-showreel__thumb" onClick={() => setActiveVideo(v)}>
                <img src={v.thumbnail} alt={v.title} className="vp-showreel__thumb-img" />
                <div className="vp-showreel__thumb-overlay" aria-hidden />
                <div className="vp-showreel__thumb-info">
                  <span className="vp-showreel__thumb-client">{v.client}</span>
                  <span className="vp-showreel__thumb-dur">{v.duration}</span>
                </div>
                <div className="vp-showreel__thumb-play">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 1.5L8.5 5L2 8.5V1.5Z" fill="white" /></svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VIDEO PORTFOLIO
      ══════════════════════════════════════════ */}
      <section className="vp-portfolio section">
        <div className="container">
          <div className="vp-portfolio__header">
            <div>
              <Eyebrow>Recent Productions</Eyebrow>
              <SectionTitle>Work We're Proud Of.</SectionTitle>
            </div>
            <FilterTabs options={videoCategories} active={activeCategory} onChange={setActiveCategory} accent={ACC} />
          </div>

          <div className="vp-portfolio__grid">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} onPlay={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS STRIP
      ══════════════════════════════════════════ */}
      <section className="vp-process section">
        <div className="container">
          <Eyebrow>How It Works</Eyebrow>
          <div className="vp-process__grid">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.n} className="vp-process__step">
                <div className="vp-process__step-header">
                  <span className="vp-process__step-num" style={{ color: ACC }}>{s.n}</span>
                  {i < PROCESS_STEPS.length - 1 && <div className="vp-process__connector" />}
                </div>
                <h3 className="vp-process__step-title">{s.label}</h3>
                <p className="vp-process__step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="vp-cta section">
        <div className="container">
          <div className="vp-cta__inner">
            <div className="vp-cta__glow" aria-hidden />
            <div className="vp-cta__watermark" aria-hidden>FILM</div>
            <div className="vp-cta__content">
              <Eyebrow>Start a Project</Eyebrow>
              <h2 className="vp-cta__h2">
                Have a Story<br />
                <span style={{ color: ACC }}>Worth Telling?</span>
              </h2>
              <p className="vp-cta__sub">
                Every great brand has a film it hasn't made yet. Let's make yours. We take creative briefs from a 15-second reel to a full-scale documentary.
              </p>
              <div className="vp-cta__actions">
                <Link to="/contact" className="vp-btn vp-btn--primary vp-btn--lg">
                  Commission Your Story
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link to="/services" className="vp-btn vp-btn--outline">All Services</Link>
              </div>
              <div className="vp-cta__tags">
                {["Brand Films", "Commercials", "Reels", "UGC", "Documentaries", "AI Video"].map((t) => (
                  <span key={t} className="vp-cta__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      <style>{`
        /* ─── Shared buttons ─── */
        .vp-btn {
          display: inline-flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: var(--radius-sm); text-decoration: none;
          transition: all var(--ease-base); white-space: nowrap;
          border: none; cursor: pointer;
        }
        .vp-btn--primary {
          background-color: var(--clr-video); color: #fff;
          padding: 0.875rem 1.875rem;
          box-shadow: 0 0 24px var(--clr-video-glow);
        }
        .vp-btn--primary:hover { opacity: 0.88; }
        .vp-btn--lg { padding: 1.125rem 2.5rem; font-size: 0.875rem; }
        .vp-btn--ghost {
          background: transparent; color: var(--text-muted);
          padding: 0.875rem 1.5rem; border: 1px solid var(--border-strong);
        }
        .vp-btn--ghost:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.25); }
        .vp-btn--outline {
          background: transparent; color: var(--clr-video);
          padding: 1.125rem 2rem; border: 1.5px solid var(--clr-video);
        }
        .vp-btn--outline:hover { background-color: var(--clr-video); color: #fff; }

        /* ─── Hero ─── */
        .vp-hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center;
          overflow: hidden; background-color: var(--surface-0);
        }
        .vp-hero__bg { position: absolute; inset: 0; pointer-events: none; }
        .vp-hero__bg-img {
          position: absolute; inset: 0;
          background: url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop&auto=format') center/cover;
          opacity: 0.06;
        }
        .vp-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--surface-0) 40%, transparent 100%);
        }
        .vp-hero__glow { position: absolute; border-radius: 50%; }
        .vp-hero__glow--blue {
          top: -15%; left: -5%; width: 55vw; height: 55vw; max-width: 700px; max-height: 700px;
          background: radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%);
        }
        .vp-hero__glow--dark {
          bottom: -10%; right: 20%; width: 40vw; height: 40vw; max-width: 500px;
          background: radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%);
        }
        .vp-hero__inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
          padding-top: calc(var(--nav-height) + 5rem); padding-bottom: 5rem;
          position: relative; z-index: 1; width: 100%;
        }
        .vp-hero__left { display: flex; flex-direction: column; }
        .vp-hero__h1 {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(3rem, 5.5vw, 5.75rem);
          line-height: var(--leading-tight); letter-spacing: var(--tracking-display);
          color: var(--text-primary); margin: 0 0 1.5rem;
        }
        .vp-hero__sub {
          font-family: var(--font-body); font-size: clamp(0.9375rem, 1.4vw, 1.0625rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary);
          max-width: 44ch; margin: 0 0 2rem;
        }
        .vp-hero__stats {
          display: flex; gap: 2rem; margin-bottom: 2.5rem; flex-wrap: wrap;
        }
        .vp-hero__stat { display: flex; flex-direction: column; gap: 0.2rem; }
        .vp-hero__stat-val {
          font-family: var(--font-display); font-weight: 900;
          font-size: 2rem; line-height: 1; color: var(--text-primary);
          letter-spacing: var(--tracking-tight);
        }
        .vp-hero__stat-label {
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted);
        }
        .vp-hero__actions { display: flex; align-items: center; gap: 0.875rem; flex-wrap: wrap; }
        /* Frame */
        .vp-hero__frame {
          position: relative; border-radius: var(--radius-lg); overflow: hidden;
          background-color: var(--surface-2); aspect-ratio: 4/3;
          box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px var(--border-default);
        }
        .vp-hero__frame-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .vp-hero__frame-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(37,99,235,0.08) 0%, transparent 60%),
                      linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 50%);
        }
        .vp-hero__play {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          background: none; border: none; cursor: pointer;
        }
        .vp-hero__play-ring {
          position: absolute; width: 6rem; height: 6rem; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.25);
          animation: pulseRing 2.5s ease-in-out infinite;
        }
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.12); opacity: 0.15; }
        }
        .vp-hero__play > svg {
          position: relative; z-index: 1;
          background-color: rgba(37,99,235,0.8); backdrop-filter: blur(8px);
          padding: 1.25rem; border-radius: 50%; transition: all var(--ease-base);
        }
        .vp-hero__play:hover > svg { background-color: var(--clr-video); transform: scale(1.1); }
        .vp-hero__badge {
          position: absolute; bottom: 1.25rem; left: 1.25rem;
          display: flex; align-items: center; gap: 0.5rem;
          background-color: rgba(10,10,10,0.75); backdrop-filter: blur(10px);
          border: 1px solid var(--border-strong); border-radius: var(--radius-md);
          padding: 0.5rem 0.875rem;
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-primary);
        }
        .vp-hero__badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background-color: var(--clr-video);
          box-shadow: 0 0 6px var(--clr-video);
          animation: blinkDot 1.8s ease-in-out infinite;
        }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .vp-hero__badge-dur { color: var(--text-muted); }

        /* ─── Services ─── */
        .vp-services { background-color: var(--surface-0); }
        .vp-services__header {
          display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;
          align-items: flex-end; margin-bottom: 3.5rem;
        }
        .vp-services__sub {
          font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0;
        }
        .vp-services__grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.125rem;
          margin-bottom: 1.125rem;
        }
        /* Featured 13th card */
        .vp-services__featured {
          border: 1px solid var(--clr-video-border);
          border-radius: var(--radius-lg); overflow: hidden;
          background-color: var(--surface-1);
        }
        .vp-services__featured-inner {
          position: relative; display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; padding: 3rem; align-items: center;
        }
        .vp-services__featured-glow {
          position: absolute; top: 0; left: 0; width: 50%; height: 100%;
          background: radial-gradient(ellipse at left center, var(--clr-video-glow), transparent 70%);
          pointer-events: none;
        }
        .vp-services__featured-left {
          display: flex; gap: 2rem; align-items: flex-start; position: relative; z-index: 1;
        }
        .vp-services__featured-num {
          font-family: var(--font-display); font-weight: 900; font-size: 5rem;
          line-height: 1; color: rgba(255,255,255,0.06); letter-spacing: -0.04em;
          flex-shrink: 0; user-select: none;
        }
        .vp-services__featured-eyebrow {
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; margin: 0 0 0.5rem;
        }
        .vp-services__featured-title {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(1.5rem, 2.5vw, 2.25rem);
          line-height: var(--leading-snug); letter-spacing: var(--tracking-display);
          color: var(--text-primary); margin: 0 0 0.875rem;
        }
        .vp-services__featured-desc {
          font-family: var(--font-body); font-size: 0.9375rem;
          line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0;
        }
        .vp-services__featured-right { display: flex; flex-direction: column; position: relative; z-index: 1; }
        .vp-services__featured-list {
          list-style: none; margin: 0; padding: 0;
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.625rem 1.25rem;
        }
        .vp-services__featured-item {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-body); font-size: 0.875rem; color: var(--text-secondary);
        }
        .vp-services__featured-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }

        /* ─── Showreel ─── */
        .vp-showreel { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .vp-showreel__header { margin-bottom: 2.5rem; }
        .vp-showreel__player {
          position: relative; width: 100%; aspect-ratio: 16/9;
          border-radius: var(--radius-lg); overflow: hidden;
          background-color: var(--surface-0); border: none; cursor: pointer;
          display: block; margin-bottom: 1.25rem;
        }
        .vp-showreel__player-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--ease-slow); }
        .vp-showreel__player:hover .vp-showreel__player-img { transform: scale(1.03); }
        .vp-showreel__player-overlay {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, rgba(10,10,10,0.5) 100%);
        }
        .vp-showreel__label {
          position: absolute; top: 1.5rem; left: 1.5rem;
          display: flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-primary);
          background-color: rgba(10,10,10,0.6); backdrop-filter: blur(8px);
          border: 1px solid var(--border-strong); border-radius: var(--radius-sm);
          padding: 0.5rem 0.875rem;
        }
        .vp-showreel__rec {
          width: 6px; height: 6px; border-radius: 50%;
          background-color: var(--clr-video);
          box-shadow: 0 0 6px var(--clr-video);
          animation: blinkDot 1.8s ease-in-out infinite;
        }
        .vp-showreel__play {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
        }
        .vp-showreel__play-ring {
          position: absolute; width: 8rem; height: 8rem; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          animation: pulseRing 2.5s ease-in-out infinite;
        }
        .vp-showreel__play > svg {
          position: relative; z-index: 1;
          background-color: rgba(37,99,235,0.75); backdrop-filter: blur(8px);
          padding: 1.75rem; border-radius: 50%;
          transition: all var(--ease-base);
        }
        .vp-showreel__player:hover .vp-showreel__play > svg { background-color: var(--clr-video); transform: scale(1.08); }
        .vp-showreel__duration {
          position: absolute; bottom: 1.5rem; right: 1.5rem;
          font-family: var(--font-fine); font-size: 0.875rem; font-weight: 600;
          color: rgba(247,245,242,0.8); letter-spacing: 0.06em;
          background-color: rgba(10,10,10,0.6); backdrop-filter: blur(8px);
          border: 1px solid var(--border-strong); border-radius: var(--radius-xs);
          padding: 0.375rem 0.75rem;
        }
        /* Thumb strip */
        .vp-showreel__strip {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.875rem;
        }
        .vp-showreel__thumb {
          position: relative; aspect-ratio: 16/9; border-radius: var(--radius-sm); overflow: hidden;
          background-color: var(--surface-2); border: 1px solid var(--border-default);
          cursor: pointer; display: block;
          transition: transform var(--ease-base), box-shadow var(--ease-base);
        }
        .vp-showreel__thumb:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
        .vp-showreel__thumb-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--ease-slow); }
        .vp-showreel__thumb:hover .vp-showreel__thumb-img { transform: scale(1.06); }
        .vp-showreel__thumb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%);
        }
        .vp-showreel__thumb-info {
          position: absolute; bottom: 0.625rem; left: 0.625rem; right: 0.625rem;
          display: flex; justify-content: space-between; align-items: flex-end; gap: 0.25rem;
        }
        .vp-showreel__thumb-client {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; color: rgba(247,245,242,0.7);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .vp-showreel__thumb-dur {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 500;
          color: rgba(247,245,242,0.5); flex-shrink: 0;
        }
        .vp-showreel__thumb-play {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
        }
        .vp-showreel__thumb-play > svg {
          background-color: rgba(37,99,235,0.7); border-radius: 50%; padding: 0.5rem;
          opacity: 0; transition: opacity var(--ease-base);
        }
        .vp-showreel__thumb:hover .vp-showreel__thumb-play > svg { opacity: 1; }

        /* ─── Portfolio ─── */
        .vp-portfolio { background-color: var(--surface-0); }
        .vp-portfolio__header {
          display: flex; justify-content: space-between; align-items: flex-end;
          flex-wrap: wrap; gap: 2rem; margin-bottom: 3rem;
        }
        .vp-portfolio__grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
        }

        /* ─── Process ─── */
        .vp-process {
          background-color: var(--surface-1); border-top: 1px solid var(--border-default);
        }
        .vp-process__grid {
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 0;
          border: 1px solid var(--border-default); border-radius: var(--radius-lg);
          overflow: hidden; margin-top: 2.5rem;
        }
        .vp-process__step {
          padding: 2rem 1.75rem;
          border-right: 1px solid var(--border-default);
          position: relative;
        }
        .vp-process__step:last-child { border-right: none; }
        .vp-process__step-header { display: flex; align-items: center; margin-bottom: 1rem; }
        .vp-process__step-num {
          font-family: var(--font-display); font-weight: 900;
          font-size: 2.5rem; line-height: 1; opacity: 0.3;
        }
        .vp-process__connector {
          flex-grow: 1; height: 1px;
          background: linear-gradient(90deg, var(--clr-video-border), transparent);
          margin-left: 0.75rem;
        }
        .vp-process__step-title {
          font-family: var(--font-display); font-weight: 700; font-size: 1.125rem;
          letter-spacing: var(--tracking-display); color: var(--text-primary);
          margin: 0 0 0.5rem; line-height: var(--leading-snug);
        }
        .vp-process__step-desc {
          font-family: var(--font-body); font-size: 0.8125rem;
          line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0;
        }

        /* ─── CTA ─── */
        .vp-cta { background-color: var(--surface-0); }
        .vp-cta__inner {
          position: relative; background-color: var(--surface-1);
          border: 1px solid var(--clr-video-border); border-radius: var(--radius-xl);
          padding: 7rem 4rem; overflow: hidden; text-align: center;
        }
        .vp-cta__glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(37,99,235,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .vp-cta__watermark {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(8rem, 18vw, 18rem); line-height: 1;
          letter-spacing: -0.06em; color: rgba(255,255,255,0.015);
          user-select: none; white-space: nowrap; pointer-events: none;
        }
        .vp-cta__content {
          position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center;
        }
        .vp-cta__h2 {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(2.5rem, 5.5vw, 5.5rem); line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display); color: var(--text-primary);
          margin: 0 0 1.5rem;
        }
        .vp-cta__sub {
          font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1.0625rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary);
          max-width: 50ch; margin: 0 0 3rem;
        }
        .vp-cta__actions {
          display: flex; align-items: center; justify-content: center;
          gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem;
        }
        .vp-cta__tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
        .vp-cta__tag {
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-muted); background-color: var(--surface-2);
          border: 1px solid var(--border-default); border-radius: var(--radius-full);
          padding: 0.3rem 0.875rem;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .vp-services__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 960px) {
          .vp-hero__inner { grid-template-columns: 1fr; gap: 3rem; padding-top: calc(var(--nav-height) + 3rem); }
          .vp-hero__right { max-width: 600px; margin: 0 auto; }
          .vp-services__header { grid-template-columns: 1fr; gap: 1.5rem; }
          .vp-services__grid { grid-template-columns: repeat(2, 1fr); }
          .vp-services__featured-inner { grid-template-columns: 1fr; gap: 2rem; }
          .vp-process__grid { grid-template-columns: 1fr 1fr; }
          .vp-process__step { border-right: none; border-bottom: 1px solid var(--border-default); }
          .vp-process__step:last-child { border-bottom: none; }
          .vp-portfolio__grid { grid-template-columns: repeat(2, 1fr); }
          .vp-showreel__strip { grid-template-columns: repeat(2, 1fr); }
          .vp-cta__inner { padding: 4rem 2rem; }
        }
        @media (max-width: 640px) {
          .vp-services__grid { grid-template-columns: 1fr; }
          .vp-portfolio__grid { grid-template-columns: 1fr; }
          .vp-process__grid { grid-template-columns: 1fr; }
          .vp-showreel__strip { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </main>
  );
}
