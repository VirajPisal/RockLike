import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceTileCard from "../components/ServiceTileCard";
import {
  smAccent,
  smAccentGlow,
  smAccentBorder,
  socialServiceCards,
  socialWorkflow,
  contentTypes,
  socialDemoMetrics,
} from "../data/socialMediaMarketing";

const ACC = smAccent;
const ACC_GLOW = smAccentGlow;
const ACC_BORDER = smAccentBorder;

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

/* Floating social card mockups for hero */
function HeroComposition() {
  return (
    <div className="sm-hero__composition">
      {/* Main post card */}
      <div className="sm-card sm-card--post">
        <div className="sm-card__header">
          <div className="sm-card__avatar" />
          <div>
            <div className="sm-card__name">@rocklike.agency</div>
            <div className="sm-card__meta">Sponsored</div>
          </div>
          <div className="sm-card__dots">···</div>
        </div>
        <div className="sm-card__img-wrap">
          <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop&auto=format" alt="" className="sm-card__img" />
          <div className="sm-card__img-overlay" />
        </div>
        <div className="sm-card__body">
          <div className="sm-card__actions">
            <span>♡ 4.2k</span>
            <span>💬 318</span>
            <span>↗ Share</span>
          </div>
          <div className="sm-card__caption">Premium social content that actually converts. ✦</div>
        </div>
      </div>

      {/* Reel card */}
      <div className="sm-card sm-card--reel">
        <div className="sm-card__reel-thumb">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=200&h=350&fit=crop&auto=format" alt="" className="sm-card__img" />
          <div className="sm-card__reel-overlay" />
          <div className="sm-card__reel-play">▶</div>
          <div className="sm-card__reel-label">REELS</div>
          <div className="sm-card__reel-views">12.4k views</div>
        </div>
      </div>

      {/* Story card */}
      <div className="sm-card sm-card--story">
        <div className="sm-card__story-ring" />
        <div className="sm-card__story-inner">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=120&h=200&fit=crop&auto=format" alt="" className="sm-card__img" />
        </div>
        <div className="sm-card__story-label">Story</div>
      </div>

      {/* Engagement card */}
      <div className="sm-card sm-card--engage">
        <div className="sm-card__engage-icon" style={{ backgroundColor: ACC, color: "#fff" }}>💬</div>
        <div>
          <div className="sm-card__engage-val">6.4%</div>
          <div className="sm-card__engage-label">Engagement Rate</div>
        </div>
      </div>

      {/* Analytics card */}
      <div className="sm-card sm-card--analytics">
        <div className="sm-card__analytics-header">
          <span className="sm-card__analytics-dot" style={{ backgroundColor: ACC }} />
          <span className="sm-card__analytics-title">Reach This Month</span>
          <span className="sm-card__analytics-demo">DEMO</span>
        </div>
        <div className="sm-card__analytics-val">284k</div>
        <div className="sm-card__analytics-bars">
          {[40, 55, 48, 72, 65, 88, 95].map((h, i) => (
            <div key={i} className="sm-card__analytics-bar" style={{ height: `${h}%`, backgroundColor: i === 6 ? ACC : "rgba(139,92,246,0.35)" }} />
          ))}
        </div>
      </div>

      {/* Calendar card */}
      <div className="sm-card sm-card--calendar">
        <div className="sm-card__cal-title">Content Calendar</div>
        <div className="sm-card__cal-grid">
          {["M", "T", "W", "T", "F"].map((d, i) => (
            <div key={i} className="sm-card__cal-col">
              <div className="sm-card__cal-day">{d}</div>
              {[0, 1, 2].map((j) => (
                <div key={j} className="sm-card__cal-slot" style={{ opacity: Math.random() > 0.4 ? 1 : 0.2, backgroundColor: j === 0 ? ACC : j === 1 ? "rgba(139,92,246,0.4)" : "var(--surface-3)" }} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Metric strip */}
      <div className="sm-hero__strip">
        {["Strategy", "Content", "Community", "Growth"].map((s, i) => (
          <div key={s} className="sm-hero__strip-item">
            <span style={{ color: i % 2 === 0 ? ACC : "var(--text-primary)" }}>{s}</span>
            {i < 3 && <span className="sm-hero__strip-arrow" style={{ color: ACC }}>→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SocialMediaMarketing() {
  const funnelSteps = [
    { label: "Content", metric: "5 posts/wk", color: ACC },
    { label: "Reach", metric: "284k/mo", color: "rgba(139,92,246,0.8)" },
    { label: "Engagement", metric: "6.4% rate", color: "rgba(139,92,246,0.65)" },
    { label: "Community", metric: "142k followers", color: "rgba(139,92,246,0.5)" },
    { label: "Leads", metric: "1,240/mo", color: "rgba(139,92,246,0.38)" },
    { label: "Growth", metric: "3.2× in 6mo", color: "rgba(139,92,246,0.25)" },
  ];

  return (
    <main>
      {/* ══ HERO ══ */}
      <section className="sm-hero">
        <div className="sm-hero__bg" aria-hidden>
          <div className="sm-hero__glow sm-hero__glow--purple" />
          <div className="sm-hero__glow sm-hero__glow--tr" />
          <div className="sm-hero__dots" />
        </div>

        <div className="container sm-hero__inner">
          <div className="sm-hero__left">
            <Eyebrow>Social Media Marketing</Eyebrow>
            <h1 className="sm-hero__h1">
              Social Media That<br />
              <span style={{ color: ACC }}>Builds Communities.</span>
            </h1>
            <p className="sm-hero__sub">
              From strategy and content to conversations and growth, we turn social media into a powerful brand-building engine that connects, converts and compounds over time.
            </p>
            <div className="sm-hero__actions">
              <Link to="/contact" className="sm-btn sm-btn--primary">
                Build My Social Strategy
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <a href="#portfolio" className="sm-btn sm-btn--ghost">View Our Work</a>
            </div>
          </div>
          <div className="sm-hero__right">
            <HeroComposition />
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container" style={{ paddingTop: "2rem", paddingBottom: "0.5rem" }}>
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Social Media Marketing" }]} accent={ACC} />
      </div>

      {/* ══ SERVICES GRID ══ */}
      <section className="sm-services section">
        <div className="container">
          <div className="sm-services__header">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <SectionTitle>Everything Your Social<br /><span style={{ color: "var(--text-secondary)" }}>Presence Needs.</span></SectionTitle>
            </div>
            <p className="sm-services__sub">
              Nine specialised services, one unified strategy. We manage the complete social ecosystem so your brand shows up consistently, creatively and with purpose.
            </p>
          </div>
          <div className="sm-services__grid">
            {socialServiceCards.map((card) => (
              <ServiceTileCard key={card.id} card={card} accent={ACC} accentGlow={ACC_GLOW} accentBorder={ACC_BORDER} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ WORKFLOW ══ */}
      <section className="sm-workflow section">
        <div className="container">
          <div className="sm-workflow__header">
            <Eyebrow>How We Work</Eyebrow>
            <SectionTitle>From Ideas to Impact.</SectionTitle>
          </div>
          <div className="sm-workflow__steps">
            {socialWorkflow.map((step, i) => (
              <div key={step.number} className="sm-workflow__step">
                <div className="sm-workflow__step-num" style={{ color: ACC }}>{step.number}</div>
                {i < socialWorkflow.length - 1 && <div className="sm-workflow__connector" aria-hidden />}
                <div className="sm-workflow__step-body">
                  <h3 className="sm-workflow__step-label">{step.label}</h3>
                  <p className="sm-workflow__step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTENT TYPES ══ */}
      <section id="portfolio" className="sm-content section">
        <div className="container">
          <div className="sm-content__header">
            <Eyebrow>Content We Create</Eyebrow>
            <SectionTitle>Six Formats.<br /><span style={{ color: ACC }}>One Creative Standard.</span></SectionTitle>
          </div>
          <div className="sm-content__grid">
            {contentTypes.map((ct, i) => (
              <div key={ct.id} className={`sm-content__card${i === 3 ? " sm-content__card--wide" : ""}`}>
                <img src={ct.image} alt={ct.label} className="sm-content__card-img" />
                <div className="sm-content__card-overlay" />
                <div className="sm-content__card-body">
                  <span className="sm-content__card-tag" style={{ borderColor: ACC_BORDER, color: ACC }}>{ct.tag}</span>
                  <h3 className="sm-content__card-title">{ct.label}</h3>
                  <p className="sm-content__card-desc">{ct.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PERFORMANCE SECTION ══ */}
      <section className="sm-perf section">
        <div className="container">
          <div className="sm-perf__disclaimer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1a6 6 0 1 0 0 12A6 6 0 0 0 7 1zm0 4v3m0 2h.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>
            <span>The metrics shown below are illustrative demo data only — they do not represent any specific client account.</span>
          </div>

          <div className="sm-perf__inner">
            <div className="sm-perf__left">
              <Eyebrow>Performance</Eyebrow>
              <SectionTitle>Creative That Moves.<br /><span style={{ color: ACC }}>Data That Proves.</span></SectionTitle>
              <p className="sm-perf__sub">
                Great social media is both art and science. We create content that earns attention, then measure everything to prove it is working.
              </p>
              <div className="sm-perf__metrics">
                {socialDemoMetrics.map((m) => (
                  <div key={m.label} className="sm-perf__metric">
                    <span className="sm-perf__metric-val" style={{ color: ACC }}>{m.value}</span>
                    <div>
                      <div className="sm-perf__metric-label">{m.label}</div>
                      <div className="sm-perf__metric-delta">{m.delta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sm-perf__right">
              <div className="sm-funnel">
                {funnelSteps.map((step, i) => (
                  <div key={step.label} className="sm-funnel__row">
                    <div className="sm-funnel__bar-track">
                      <div className="sm-funnel__bar" style={{ width: `${100 - i * 14}%`, backgroundColor: step.color }} />
                    </div>
                    <div className="sm-funnel__label-wrap">
                      <span className="sm-funnel__label">{step.label}</span>
                      <span className="sm-funnel__metric" style={{ color: i === 0 ? ACC : "var(--text-muted)" }}>{step.metric}</span>
                    </div>
                    {i < funnelSteps.length - 1 && <div className="sm-funnel__arrow" style={{ color: ACC }}>↓</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="sm-cta section">
        <div className="container">
          <div className="sm-cta__inner">
            <div className="sm-cta__glow" aria-hidden />
            <div className="sm-cta__watermark" aria-hidden>SOCIAL</div>
            <div className="sm-cta__content">
              <Eyebrow>Start Growing</Eyebrow>
              <h2 className="sm-cta__h2">
                Ready to Make Your Brand<br />
                <span style={{ color: ACC }}>Impossible to Ignore?</span>
              </h2>
              <p className="sm-cta__sub">
                Let&apos;s build a social presence people remember, engage with and share. Your community is waiting.
              </p>
              <div className="sm-cta__actions">
                <Link to="/contact" className="sm-btn sm-btn--primary sm-btn--lg">
                  Start a Conversation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link to="/services" className="sm-btn sm-btn--outline">All Services</Link>
              </div>
              <div className="sm-cta__tags">
                {["Strategy", "Content", "Reels", "Community", "Influencers", "Analytics"].map((t) => (
                  <span key={t} className="sm-cta__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Buttons */
        .sm-btn {
          display: inline-flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: var(--radius-sm); text-decoration: none;
          transition: all var(--ease-base); white-space: nowrap;
          border: none; cursor: pointer;
        }
        .sm-btn--primary { background-color: ${ACC}; color: #fff; padding: 0.875rem 1.875rem; box-shadow: 0 0 24px ${ACC_GLOW}; }
        .sm-btn--primary:hover { opacity: 0.88; }
        .sm-btn--lg { padding: 1.125rem 2.5rem; font-size: 0.875rem; }
        .sm-btn--ghost { background: transparent; color: var(--text-muted); padding: 0.875rem 1.5rem; border: 1px solid var(--border-strong); }
        .sm-btn--ghost:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.25); }
        .sm-btn--outline { background: transparent; color: ${ACC}; padding: 1.125rem 2rem; border: 1.5px solid ${ACC}; }
        .sm-btn--outline:hover { background-color: ${ACC}; color: #fff; }

        /* Hero */
        .sm-hero {
          position: relative; min-height: 100vh; display: flex; align-items: center;
          overflow: hidden; background-color: var(--surface-0);
        }
        .sm-hero__bg { position: absolute; inset: 0; pointer-events: none; }
        .sm-hero__glow { position: absolute; border-radius: 50%; }
        .sm-hero__glow--purple {
          top: -10%; right: -5%; width: 55vw; height: 55vw; max-width: 700px;
          background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%);
        }
        .sm-hero__glow--tr {
          bottom: -10%; left: 20%; width: 40vw; height: 40vw; max-width: 500px;
          background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%);
        }
        .sm-hero__dots {
          position: absolute; inset: 0; opacity: 0.025;
          background-image: radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .sm-hero__inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
          padding-top: calc(var(--nav-height) + 5rem); padding-bottom: 5rem;
          position: relative; z-index: 1; width: 100%;
        }
        .sm-hero__left { display: flex; flex-direction: column; }
        .sm-hero__h1 {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(2.75rem, 5vw, 5.5rem);
          line-height: var(--leading-tight); letter-spacing: var(--tracking-display);
          color: var(--text-primary); margin: 0 0 1.5rem;
        }
        .sm-hero__sub {
          font-family: var(--font-body); font-size: clamp(0.9375rem, 1.4vw, 1.0625rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 46ch; margin: 0 0 2.5rem;
        }
        .sm-hero__actions { display: flex; align-items: center; gap: 0.875rem; flex-wrap: wrap; }

        /* Social card composition */
        .sm-hero__composition {
          position: relative; width: 100%; height: 520px;
        }
        .sm-card {
          position: absolute; background-color: var(--surface-1); border: 1px solid var(--border-default);
          border-radius: var(--radius-md); overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
        }
        .sm-card--post { top: 0; left: 0; width: 240px; }
        .sm-card__header {
          display: flex; align-items: center; gap: 0.625rem; padding: 0.75rem;
          font-family: var(--font-fine); font-size: 0.625rem;
        }
        .sm-card__avatar {
          width: 28px; height: 28px; border-radius: 50%;
          background: linear-gradient(135deg, ${ACC}, rgba(139,92,246,0.4));
          flex-shrink: 0;
        }
        .sm-card__name { font-weight: 700; color: var(--text-primary); }
        .sm-card__meta { color: var(--text-muted); }
        .sm-card__dots { margin-left: auto; color: var(--text-muted); font-size: 1rem; }
        .sm-card__img-wrap { position: relative; aspect-ratio: 4/3; }
        .sm-card__img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .sm-card__img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 60%); }
        .sm-card__body { padding: 0.625rem 0.75rem 0.75rem; }
        .sm-card__actions {
          display: flex; gap: 0.875rem; margin-bottom: 0.375rem;
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600;
          color: var(--text-muted);
        }
        .sm-card__caption { font-family: var(--font-body); font-size: 0.625rem; color: var(--text-secondary); }

        /* Reel card */
        .sm-card--reel { top: 20px; right: 20px; width: 100px; border-radius: var(--radius-sm); }
        .sm-card__reel-thumb { position: relative; width: 100%; aspect-ratio: 9/16; }
        .sm-card__reel-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%); }
        .sm-card__reel-play {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-size: 1.25rem; color: rgba(255,255,255,0.9);
        }
        .sm-card__reel-label {
          position: absolute; top: 0.5rem; left: 0.5rem;
          font-family: var(--font-fine); font-size: 0.45rem; font-weight: 800;
          letter-spacing: 0.14em; color: ${ACC};
          background: rgba(139,92,246,0.15); border: 1px solid ${ACC_BORDER};
          border-radius: 2px; padding: 0.1rem 0.3rem;
        }
        .sm-card__reel-views {
          position: absolute; bottom: 0.5rem; left: 0.5rem;
          font-family: var(--font-fine); font-size: 0.45rem; font-weight: 600; color: rgba(255,255,255,0.7);
        }

        /* Story card */
        .sm-card--story { top: 240px; right: 0; width: 70px; border-radius: 50%; border-color: ${ACC}; }
        .sm-card__story-ring {
          position: absolute; inset: -3px; border-radius: 50%;
          border: 2px solid ${ACC}; pointer-events: none; z-index: 1;
        }
        .sm-card__story-inner { width: 70px; height: 70px; border-radius: 50%; overflow: hidden; }
        .sm-card__story-label {
          position: absolute; bottom: -1.25rem; left: 50%; transform: translateX(-50%);
          font-family: var(--font-fine); font-size: 0.45rem; font-weight: 600;
          color: var(--text-muted); white-space: nowrap;
        }

        /* Engagement card */
        .sm-card--engage {
          bottom: 100px; left: 10px; display: flex; align-items: center; gap: 0.75rem;
          padding: 0.75rem 1rem; width: 180px;
        }
        .sm-card__engage-icon { width: 32px; height: 32px; border-radius: var(--radius-xs); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; flex-shrink: 0; }
        .sm-card__engage-val { font-family: var(--font-display); font-weight: 900; font-size: 1.375rem; color: ${ACC}; line-height: 1; }
        .sm-card__engage-label { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }

        /* Analytics card */
        .sm-card--analytics {
          bottom: 20px; right: 30px; width: 200px; padding: 0.875rem;
        }
        .sm-card__analytics-header { display: flex; align-items: center; gap: 0.375rem; margin-bottom: 0.5rem; }
        .sm-card__analytics-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .sm-card__analytics-title { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); flex: 1; }
        .sm-card__analytics-demo {
          font-family: var(--font-fine); font-size: 0.45rem; font-weight: 800; letter-spacing: 0.14em;
          color: ${ACC}; border: 1px solid ${ACC_BORDER}; border-radius: 2px; padding: 0.1rem 0.3rem;
        }
        .sm-card__analytics-val { font-family: var(--font-display); font-weight: 900; font-size: 1.75rem; color: var(--text-primary); line-height: 1; margin-bottom: 0.625rem; }
        .sm-card__analytics-bars { display: flex; align-items: flex-end; gap: 3px; height: 40px; }
        .sm-card__analytics-bar { flex: 1; border-radius: 2px 2px 0 0; transition: all var(--ease-base); }

        /* Calendar card */
        .sm-card--calendar { top: 150px; left: 250px; width: 180px; padding: 0.75rem; }
        .sm-card__cal-title { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.625rem; }
        .sm-card__cal-grid { display: flex; gap: 4px; }
        .sm-card__cal-col { display: flex; flex-direction: column; gap: 3px; flex: 1; }
        .sm-card__cal-day { font-family: var(--font-fine); font-size: 0.45rem; font-weight: 700; text-align: center; color: var(--text-muted); padding-bottom: 2px; }
        .sm-card__cal-slot { height: 18px; border-radius: 2px; }

        /* Metric strip */
        .sm-hero__strip {
          position: absolute; bottom: -1rem; left: 0; right: 0;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          background-color: rgba(10,10,10,0.75); backdrop-filter: blur(10px);
          border: 1px solid var(--border-default); border-radius: var(--radius-sm);
          padding: 0.625rem 1rem;
        }
        .sm-hero__strip-item { display: flex; align-items: center; gap: 0.5rem; }
        .sm-hero__strip-item > span:first-child { font-family: var(--font-display); font-weight: 700; font-size: 0.75rem; letter-spacing: 0.08em; }
        .sm-hero__strip-arrow { font-size: 0.75rem; }

        /* Services */
        .sm-services { background-color: var(--surface-0); }
        .sm-services__header { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: flex-end; margin-bottom: 3.5rem; }
        .sm-services__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1rem); line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; }
        .sm-services__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.125rem; }

        /* Workflow */
        .sm-workflow { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .sm-workflow__header { margin-bottom: 3rem; }
        .sm-workflow__steps { display: flex; align-items: flex-start; gap: 0; }
        .sm-workflow__step { flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; }
        .sm-workflow__step-num {
          font-family: var(--font-display); font-weight: 900; font-size: 2.5rem;
          line-height: 1; opacity: 0.6; z-index: 1;
        }
        .sm-workflow__connector {
          position: absolute; top: 1.25rem; left: calc(50% + 1.5rem);
          right: calc(-50% + 1.5rem); height: 2px;
          background: linear-gradient(90deg, ${ACC_BORDER}, transparent);
        }
        .sm-workflow__step-body { padding: 0.875rem 1rem 0; text-align: center; }
        .sm-workflow__step-label {
          font-family: var(--font-display); font-weight: 700; font-size: 1rem;
          letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 0.375rem;
        }
        .sm-workflow__step-desc { font-family: var(--font-body); font-size: 0.8125rem; line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; }

        /* Content grid */
        .sm-content { background-color: var(--surface-0); }
        .sm-content__header { margin-bottom: 3rem; }
        .sm-content__grid {
          display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: auto auto;
          gap: 1.125rem;
        }
        .sm-content__card {
          position: relative; border-radius: var(--radius-md); overflow: hidden; aspect-ratio: 4/5;
          background-color: var(--surface-2);
          transition: transform var(--ease-base), box-shadow var(--ease-base);
        }
        .sm-content__card--wide { grid-column: span 2; aspect-ratio: 16/9; }
        .sm-content__card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
        .sm-content__card-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--ease-slow); }
        .sm-content__card:hover .sm-content__card-img { transform: scale(1.06); }
        .sm-content__card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 50%, transparent 100%);
        }
        .sm-content__card-body {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 1.25rem;
          display: flex; flex-direction: column; gap: 0.375rem;
        }
        .sm-content__card-tag {
          display: inline-block; width: fit-content;
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          border: 1px solid; border-radius: var(--radius-full); padding: 0.2rem 0.625rem;
        }
        .sm-content__card-title {
          font-family: var(--font-display); font-weight: 900; font-size: 1.25rem;
          letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0;
        }
        .sm-content__card-desc { font-family: var(--font-body); font-size: 0.8125rem; line-height: var(--leading-relaxed); color: rgba(247,245,242,0.65); margin: 0; }

        /* Performance */
        .sm-perf { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .sm-perf__disclaimer {
          display: flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600;
          background-color: rgba(139,92,246,0.08); border: 1px solid ${ACC_BORDER};
          border-radius: var(--radius-sm); padding: 0.625rem 1rem; margin-bottom: 3rem;
          color: rgba(139,92,246,0.9);
        }
        .sm-perf__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .sm-perf__sub { font-family: var(--font-body); font-size: 1rem; line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 1.25rem 0 2.5rem; max-width: 42ch; }
        .sm-perf__metrics { display: flex; flex-direction: column; gap: 1rem; }
        .sm-perf__metric {
          display: flex; align-items: center; gap: 1.25rem;
          background-color: var(--surface-2); border: 1px solid var(--border-default);
          border-radius: var(--radius-sm); padding: 0.875rem 1.25rem;
        }
        .sm-perf__metric-val { font-family: var(--font-display); font-weight: 900; font-size: 2rem; line-height: 1; letter-spacing: var(--tracking-tight); flex-shrink: 0; }
        .sm-perf__metric-label { font-family: var(--font-body); font-size: 0.875rem; color: var(--text-primary); }
        .sm-perf__metric-delta { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600; letter-spacing: 0.08em; color: var(--text-muted); }

        /* Funnel */
        .sm-funnel { display: flex; flex-direction: column; gap: 0.25rem; }
        .sm-funnel__row {
          display: flex; flex-direction: column; gap: 0.375rem;
          padding: 0.75rem 1rem;
          background-color: var(--surface-2); border: 1px solid var(--border-default);
          border-radius: var(--radius-sm);
        }
        .sm-funnel__bar-track { height: 6px; background-color: var(--surface-0); border-radius: var(--radius-full); overflow: hidden; }
        .sm-funnel__bar { height: 100%; border-radius: var(--radius-full); transition: width var(--ease-slow); }
        .sm-funnel__label-wrap { display: flex; justify-content: space-between; }
        .sm-funnel__label { font-family: var(--font-display); font-weight: 700; font-size: 0.9375rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .sm-funnel__metric { font-family: var(--font-fine); font-size: 0.625rem; font-weight: 600; letter-spacing: 0.08em; }
        .sm-funnel__arrow { font-size: 0.75rem; color: ${ACC}; text-align: center; padding: 0.125rem 0; opacity: 0.5; }

        /* CTA */
        .sm-cta { background-color: var(--surface-0); }
        .sm-cta__inner {
          position: relative; background-color: var(--surface-1);
          border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-xl);
          padding: 7rem 4rem; overflow: hidden; text-align: center;
        }
        .sm-cta__glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(139,92,246,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .sm-cta__watermark {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(6rem, 15vw, 15rem); line-height: 1;
          letter-spacing: -0.06em; color: rgba(255,255,255,0.015);
          user-select: none; white-space: nowrap; pointer-events: none;
        }
        .sm-cta__content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
        .sm-cta__h2 {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(2.5rem, 5vw, 5rem); line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.5rem;
        }
        .sm-cta__sub {
          font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1.0625rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 50ch; margin: 0 0 3rem;
        }
        .sm-cta__actions { display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
        .sm-cta__tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
        .sm-cta__tag {
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-muted); background-color: var(--surface-2);
          border: 1px solid var(--border-default); border-radius: var(--radius-full); padding: 0.3rem 0.875rem;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .sm-services__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 960px) {
          .sm-hero__inner { grid-template-columns: 1fr; padding-top: calc(var(--nav-height) + 3rem); }
          .sm-hero__right { display: none; }
          .sm-services__header { grid-template-columns: 1fr; }
          .sm-perf__inner { grid-template-columns: 1fr; gap: 3rem; }
          .sm-workflow__steps { flex-wrap: wrap; gap: 2rem; }
          .sm-workflow__step { flex: 0 0 calc(25% - 1.5rem); }
          .sm-workflow__connector { display: none; }
          .sm-content__grid { grid-template-columns: repeat(2, 1fr); }
          .sm-content__card--wide { grid-column: span 2; }
          .sm-cta__inner { padding: 4rem 2rem; }
        }
        @media (max-width: 640px) {
          .sm-services__grid { grid-template-columns: 1fr; }
          .sm-workflow__step { flex: 0 0 calc(50% - 1rem); }
          .sm-content__grid { grid-template-columns: 1fr; }
          .sm-content__card--wide { grid-column: span 1; aspect-ratio: 4/5; }
        }
      `}</style>
    </main>
  );
}
