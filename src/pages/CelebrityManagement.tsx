import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceTileCard from "../components/ServiceTileCard";
import {
  cmAccent, cmAccentGlow, cmAccentBorder,
  celebrityServiceCards, campaignJourney, demoProfiles,
} from "../data/celebrityManagement";

const ACC = cmAccent;
const ACC_GLOW = cmAccentGlow;
const ACC_BORDER = cmAccentBorder;

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

export default function CelebrityManagement() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = campaignJourney[activeStage];

  const funnelSteps = [
    { label: "Brand", w: 100 },
    { label: "Audience", w: 82 },
    { label: "Personality", w: 65 },
    { label: "Reach", w: 50 },
    { label: "Campaign Fit", w: 36 },
  ];

  return (
    <main>
      {/* ══ HERO ══ */}
      <section className="cm-hero">
        <div className="cm-hero__bg" aria-hidden>
          <div className="cm-hero__glow cm-hero__glow--main" />
          <div className="cm-hero__glow cm-hero__glow--tr" />
          <div className="cm-hero__vignette" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "1.5rem" }}>
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Celebrity Management" }]} accent={ACC} />
        </div>

        <div className="container cm-hero__inner">
          <div className="cm-hero__left">
            <Eyebrow>Celebrity Management</Eyebrow>
            <h1 className="cm-hero__h1">
              Put the Right Face<br />
              <span style={{ color: ACC }}>Behind Your Brand.</span>
            </h1>
            <p className="cm-hero__sub">
              From celebrity endorsements to strategic partnerships, we connect brands with personalities that create genuine attention and meaningful commercial impact.
            </p>
            <div className="cm-hero__strip">
              {["Discover", "Match", "Collaborate", "Execute"].map((s, i) => (
                <div key={s} className="cm-hero__strip-item">
                  <span style={{ color: i % 2 === 0 ? ACC : "var(--text-primary)" }}>{s}</span>
                  {i < 3 && <span className="cm-hero__strip-arrow">→</span>}
                </div>
              ))}
            </div>
            <div className="cm-hero__actions">
              <Link to="/contact" className="cm-btn cm-btn--primary">
                Plan a Celebrity Campaign
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <a href="#journey" className="cm-btn cm-btn--ghost">Explore Our Approach</a>
            </div>
          </div>

          <div className="cm-hero__right">
            {/* Main portrait */}
            <div className="cm-hero__portrait">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=900&fit=crop&auto=format&q=80" alt="" className="cm-hero__portrait-img" />
              <div className="cm-hero__portrait-overlay" />
              <div className="cm-hero__spotlight" aria-hidden />
            </div>
            {/* Floating profile card */}
            <div className="cm-hero__card cm-hero__card--profile">
              <div className="cm-hero__card-avatar" style={{ background: `linear-gradient(135deg, ${ACC}, rgba(192,132,252,0.3))` }} />
              <div>
                <div className="cm-hero__card-name">Brand Ambassador</div>
                <div className="cm-hero__card-meta" style={{ color: ACC }}>12M Reach · Entertainment</div>
              </div>
            </div>
            {/* Campaign fit card */}
            <div className="cm-hero__card cm-hero__card--fit">
              <div className="cm-hero__card-fit-label">Campaign Fit</div>
              <div className="cm-hero__card-fit-val" style={{ color: ACC }}>Excellent</div>
              <div className="cm-hero__card-fit-bar">
                <div className="cm-hero__card-fit-fill" style={{ width: "92%", backgroundColor: ACC }} />
              </div>
            </div>
            {/* Second portrait overlay */}
            <div className="cm-hero__portrait2">
              <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=400&fit=crop&auto=format" alt="" className="cm-hero__portrait2-img" />
              <div className="cm-hero__portrait2-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="cm-services section">
        <div className="container">
          <div className="cm-services__header">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <SectionTitle>From Celebrity Selection<br /><span style={{ color: "var(--text-secondary)" }}>to Campaign Execution.</span></SectionTitle>
            </div>
            <p className="cm-services__sub">
              Seven capabilities covering every stage of a celebrity partnership — from identifying the right talent to amplifying the final campaign.
            </p>
          </div>
          <div className="cm-services__grid">
            {celebrityServiceCards.map((card) => (
              <ServiceTileCard key={card.id} card={card} accent={ACC} accentGlow={ACC_GLOW} accentBorder={ACC_BORDER} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ MATCHING SECTION ══ */}
      <section className="cm-match section">
        <div className="container">
          <div className="cm-match__disclaimer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1a6 6 0 1 0 0 12A6 6 0 0 0 7 1zm0 4v3m0 2h.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>
            <span>Profiles below are illustrative demo examples — they do not represent actual Rocklike celebrity partnerships.</span>
          </div>
          <div className="cm-match__inner">
            <div className="cm-match__left">
              <Eyebrow>Talent Matching</Eyebrow>
              <SectionTitle>Find the Right Personality<br /><span style={{ color: ACC }}>for the Brand.</span></SectionTitle>
              <p className="cm-match__desc">
                We do not rely on follower counts. Our matching process analyses audience alignment, brand value overlap and campaign fit before any conversation begins.
              </p>
              <div className="cm-match__funnel">
                {funnelSteps.map((step, i) => (
                  <div key={step.label} className="cm-match__funnel-row">
                    <div className="cm-match__funnel-track">
                      <div className="cm-match__funnel-bar" style={{ width: `${step.w}%`, backgroundColor: i === 0 ? ACC : `rgba(192,132,252,${0.8 - i * 0.14})` }} />
                    </div>
                    <span className="cm-match__funnel-label">{step.label}</span>
                    {i < funnelSteps.length - 1 && <div className="cm-match__funnel-connector" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="cm-match__right">
              <div className="cm-match__profiles">
                {demoProfiles.map((p) => (
                  <div key={p.id} className="cm-profile">
                    <div className="cm-profile__avatar" style={{ background: `linear-gradient(135deg, ${p.color}, rgba(0,0,0,0.3))` }}>
                      <span className="cm-profile__initials">{p.initials}</span>
                    </div>
                    <div className="cm-profile__body">
                      <div className="cm-profile__category">{p.category}</div>
                      <div className="cm-profile__row">
                        <span className="cm-profile__stat-label">Audience</span>
                        <span className="cm-profile__stat">{p.audience}</span>
                      </div>
                      <div className="cm-profile__row">
                        <span className="cm-profile__stat-label">Reach</span>
                        <span className="cm-profile__stat">{p.reach}</span>
                      </div>
                      <div className="cm-profile__fit" style={{ color: p.color }}>
                        <span className="cm-profile__fit-dot" style={{ backgroundColor: p.color }} />
                        {p.fit} Fit
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAMPAIGN JOURNEY ══ */}
      <section id="journey" className="cm-journey section">
        <div className="container">
          <div className="cm-journey__header">
            <Eyebrow>Campaign Process</Eyebrow>
            <SectionTitle>The 5-Stage<br /><span style={{ color: ACC }}>Campaign Journey.</span></SectionTitle>
          </div>
          <div className="cm-journey__layout">
            <div className="cm-journey__tabs">
              {campaignJourney.map((s, i) => (
                <button key={s.number} className={`cm-journey__tab${activeStage === i ? " cm-journey__tab--active" : ""}`} onClick={() => setActiveStage(i)}>
                  <span className="cm-journey__tab-num" style={{ color: activeStage === i ? ACC : "var(--text-muted)" }}>{s.number}</span>
                  <span className="cm-journey__tab-label">{s.label}</span>
                </button>
              ))}
            </div>
            <div className="cm-journey__detail">
              <div className="cm-journey__detail-glow" aria-hidden />
              <div className="cm-journey__detail-num">{stage.number}</div>
              <h3 className="cm-journey__detail-label" style={{ color: ACC }}>{stage.label}</h3>
              <p className="cm-journey__detail-desc">{stage.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAMPAIGN IMPACT ══ */}
      <section className="cm-impact section">
        <div className="container">
          <div className="cm-impact__disclaimer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1a6 6 0 1 0 0 12A6 6 0 0 0 7 1zm0 4v3m0 2h.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>
            <span>Campaign metrics below are illustrative demo data only.</span>
          </div>
          <div className="cm-impact__header">
            <Eyebrow>Campaign Impact</Eyebrow>
            <SectionTitle>The Formula for<br /><span style={{ color: ACC }}>Brand Impact.</span></SectionTitle>
          </div>
          <div className="cm-impact__equation">
            {[
              { label: "Celebrity", sub: "Right personality, right audience", icon: "★" },
              { label: "Creative", sub: "Campaign concept and execution", icon: "◈" },
              { label: "Audience", sub: "Qualified reach at scale", icon: "◉" },
            ].map((item, i) => (
              <div key={item.label} className="cm-impact__eq-wrap">
                <div className="cm-impact__factor">
                  <div className="cm-impact__factor-icon" style={{ color: ACC }}>{item.icon}</div>
                  <div className="cm-impact__factor-label">{item.label}</div>
                  <div className="cm-impact__factor-sub">{item.sub}</div>
                </div>
                {i < 2 && <div className="cm-impact__plus" style={{ color: ACC }}>+</div>}
              </div>
            ))}
            <div className="cm-impact__equals" style={{ color: ACC }}>=</div>
            <div className="cm-impact__result">
              <div className="cm-impact__result-icon" style={{ color: ACC }}>✦</div>
              <div className="cm-impact__result-label">Brand Impact</div>
              <div className="cm-impact__result-metrics">
                {[["48M+", "Total Reach"], ["6.8%", "Engagement Rate"], ["3.2×", "Brand Lift"]].map(([v, l]) => (
                  <div key={l} className="cm-impact__metric">
                    <span style={{ color: ACC }}>{v}</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
              <div className="cm-impact__result-demo">DEMO DATA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="cm-cta section">
        <div className="container">
          <div className="cm-cta__inner">
            <div className="cm-cta__glow" aria-hidden />
            <div className="cm-cta__watermark" aria-hidden>FAME</div>
            <div className="cm-cta__content">
              <Eyebrow>Start a Campaign</Eyebrow>
              <h2 className="cm-cta__h2">Make Your Next Campaign<br /><span style={{ color: ACC }}>Impossible to Miss.</span></h2>
              <p className="cm-cta__sub">Let&apos;s find the right personality to move your brand forward.</p>
              <div className="cm-cta__actions">
                <Link to="/contact" className="cm-btn cm-btn--primary cm-btn--lg">
                  Start a Celebrity Campaign
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link to="/services" className="cm-btn cm-btn--outline">All Services</Link>
              </div>
              <div className="cm-cta__tags">
                {["Endorsements", "Ambassadors", "Campaigns", "Appearances", "Partnerships"].map((t) => (
                  <span key={t} className="cm-cta__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .cm-btn {
          display: inline-flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: var(--radius-sm); text-decoration: none;
          transition: all var(--ease-base); white-space: nowrap; border: none; cursor: pointer;
        }
        .cm-btn--primary { background-color: ${ACC}; color: #fff; padding: 0.875rem 1.875rem; box-shadow: 0 0 24px ${ACC_GLOW}; }
        .cm-btn--primary:hover { opacity: 0.88; }
        .cm-btn--lg { padding: 1.125rem 2.5rem; font-size: 0.875rem; }
        .cm-btn--ghost { background: transparent; color: var(--text-muted); padding: 0.875rem 1.5rem; border: 1px solid var(--border-strong); }
        .cm-btn--ghost:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.25); }
        .cm-btn--outline { background: transparent; color: ${ACC}; padding: 1.125rem 2rem; border: 1.5px solid ${ACC}; }
        .cm-btn--outline:hover { background-color: ${ACC}; color: #fff; }

        /* Hero */
        .cm-hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; background-color: var(--surface-0); }
        .cm-hero__bg { position: absolute; inset: 0; pointer-events: none; }
        .cm-hero__glow { position: absolute; border-radius: 50%; }
        .cm-hero__glow--main { top: -5%; right: -5%; width: 60vw; height: 60vw; max-width: 750px; background: radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 60%); }
        .cm-hero__glow--tr { bottom: 10%; left: 5%; width: 35vw; height: 35vw; max-width: 400px; background: radial-gradient(circle, rgba(192,132,252,0.05) 0%, transparent 65%); }
        .cm-hero__vignette { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(10,10,10,0.4) 100%); }
        .cm-hero__inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
          padding-top: calc(var(--nav-height) + 5rem); padding-bottom: 5rem;
          position: relative; z-index: 1; width: 100%;
        }
        .cm-hero__left { display: flex; flex-direction: column; }
        .cm-hero__h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.75rem, 5vw, 5.5rem); line-height: var(--leading-tight); letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.5rem; }
        .cm-hero__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.4vw, 1.0625rem); line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 46ch; margin: 0 0 1.5rem; }
        .cm-hero__strip { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .cm-hero__strip-item { display: flex; align-items: center; gap: 0.5rem; }
        .cm-hero__strip-item > span:first-child { font-family: var(--font-display); font-weight: 700; font-size: 0.875rem; letter-spacing: 0.06em; }
        .cm-hero__strip-arrow { font-size: 0.875rem; color: ${ACC}; opacity: 0.6; }
        .cm-hero__actions { display: flex; align-items: center; gap: 0.875rem; flex-wrap: wrap; }

        /* Portrait composition */
        .cm-hero__right { position: relative; height: 500px; }
        .cm-hero__portrait { position: absolute; top: 0; right: 0; width: 70%; height: 100%; border-radius: var(--radius-lg); overflow: hidden; }
        .cm-hero__portrait-img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
        .cm-hero__portrait-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,10,10,0.4) 0%, transparent 60%), linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%); }
        .cm-hero__spotlight { position: absolute; top: -30%; left: 20%; width: 60%; height: 60%; background: radial-gradient(ellipse, rgba(192,132,252,0.12) 0%, transparent 70%); pointer-events: none; }
        .cm-hero__card { position: absolute; background-color: rgba(20,20,20,0.9); backdrop-filter: blur(16px); border: 1px solid var(--border-default); border-radius: var(--radius-md); }
        .cm-hero__card--profile { top: 2rem; left: 0; display: flex; align-items: center; gap: 0.875rem; padding: 0.875rem 1.25rem; box-shadow: 0 0 0 1px ${ACC_BORDER}, 0 16px 48px rgba(0,0,0,0.4); }
        .cm-hero__card-avatar { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; }
        .cm-hero__card-name { font-family: var(--font-display); font-weight: 700; font-size: 0.875rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .cm-hero__card-meta { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
        .cm-hero__card--fit { bottom: 3rem; left: 0; padding: 1rem 1.25rem; width: 160px; }
        .cm-hero__card-fit-label { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.25rem; }
        .cm-hero__card-fit-val { font-family: var(--font-display); font-weight: 900; font-size: 1.25rem; letter-spacing: var(--tracking-display); margin-bottom: 0.625rem; }
        .cm-hero__card-fit-bar { height: 4px; background-color: var(--surface-3); border-radius: var(--radius-full); overflow: hidden; }
        .cm-hero__card-fit-fill { height: 100%; border-radius: var(--radius-full); }
        .cm-hero__portrait2 { position: absolute; bottom: 1rem; right: -1rem; width: 130px; height: 160px; border-radius: var(--radius-sm); overflow: hidden; border: 2px solid ${ACC_BORDER}; }
        .cm-hero__portrait2-img { width: 100%; height: 100%; object-fit: cover; }
        .cm-hero__portrait2-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%); }

        /* Services */
        .cm-services { background-color: var(--surface-0); }
        .cm-services__header { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: flex-end; margin-bottom: 3.5rem; }
        .cm-services__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1rem); line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; }
        .cm-services__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.125rem; }

        /* Matching */
        .cm-match { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .cm-match__disclaimer { display: flex; align-items: center; gap: 0.625rem; font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600; background-color: rgba(192,132,252,0.08); border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-sm); padding: 0.625rem 1rem; margin-bottom: 3rem; color: rgba(192,132,252,0.9); }
        .cm-match__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .cm-match__desc { font-family: var(--font-body); font-size: 1rem; line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 42ch; margin: 1.25rem 0 2.5rem; }
        .cm-match__funnel { display: flex; flex-direction: column; gap: 0.5rem; }
        .cm-match__funnel-row { display: flex; flex-direction: column; gap: 0.25rem; }
        .cm-match__funnel-track { height: 6px; background-color: var(--surface-0); border-radius: var(--radius-full); overflow: hidden; }
        .cm-match__funnel-bar { height: 100%; border-radius: var(--radius-full); transition: width var(--ease-slow); }
        .cm-match__funnel-label { font-family: var(--font-display); font-weight: 700; font-size: 0.9375rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .cm-match__funnel-connector { height: 0.5rem; width: 1px; margin-left: 0.5rem; background: linear-gradient(to bottom, ${ACC_BORDER}, transparent); }
        /* Profile cards */
        .cm-match__profiles { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .cm-profile { background-color: var(--surface-2); border: 1px solid var(--border-default); border-radius: var(--radius-md); overflow: hidden; transition: transform var(--ease-base), border-color var(--ease-base); }
        .cm-profile:hover { transform: translateY(-4px); border-color: ${ACC_BORDER}; }
        .cm-profile__avatar { height: 80px; display: flex; align-items: center; justify-content: center; }
        .cm-profile__initials { font-family: var(--font-display); font-weight: 900; font-size: 1.5rem; color: rgba(255,255,255,0.9); letter-spacing: var(--tracking-tight); }
        .cm-profile__body { padding: 1rem; display: flex; flex-direction: column; gap: 0.375rem; }
        .cm-profile__category { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); }
        .cm-profile__row { display: flex; justify-content: space-between; }
        .cm-profile__stat-label { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600; color: var(--text-muted); }
        .cm-profile__stat { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700; color: var(--text-secondary); }
        .cm-profile__fit { display: flex; align-items: center; gap: 0.375rem; font-family: var(--font-fine); font-size: 0.625rem; font-weight: 700; letter-spacing: 0.08em; margin-top: 0.25rem; }
        .cm-profile__fit-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

        /* Journey */
        .cm-journey { background-color: var(--surface-0); }
        .cm-journey__header { max-width: 52ch; margin-bottom: 3.5rem; }
        .cm-journey__layout { display: grid; grid-template-columns: 1fr 380px; gap: 3rem; align-items: start; }
        .cm-journey__tabs { display: flex; flex-direction: column; gap: 0.5rem; }
        .cm-journey__tab { display: flex; align-items: center; gap: 1.25rem; background: none; border: 1px solid var(--border-default); border-radius: var(--radius-sm); padding: 1.25rem 1.5rem; cursor: pointer; text-align: left; transition: all var(--ease-base); }
        .cm-journey__tab:hover { border-color: ${ACC_BORDER}; background-color: var(--surface-1); }
        .cm-journey__tab--active { border-color: ${ACC_BORDER} !important; background-color: rgba(192,132,252,0.06) !important; box-shadow: 0 0 0 1px ${ACC_BORDER}, 0 0 40px ${ACC_GLOW}; }
        .cm-journey__tab-num { font-family: var(--font-display); font-weight: 900; font-size: 0.8125rem; letter-spacing: 0.12em; min-width: 2rem; transition: color var(--ease-base); }
        .cm-journey__tab-label { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .cm-journey__detail { position: sticky; top: calc(var(--nav-height) + 2rem); background-color: var(--surface-1); border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-lg); padding: 2rem; overflow: hidden; display: flex; flex-direction: column; gap: 1rem; }
        .cm-journey__detail-glow { position: absolute; top: 0; left: 0; right: 0; height: 50%; background: radial-gradient(ellipse at top, ${ACC_GLOW}, transparent 70%); pointer-events: none; }
        .cm-journey__detail-num { position: absolute; top: 1rem; right: 1.5rem; font-family: var(--font-display); font-weight: 900; font-size: 5rem; line-height: 1; color: rgba(255,255,255,0.04); user-select: none; }
        .cm-journey__detail-label { font-family: var(--font-display); font-weight: 900; font-size: 1.75rem; letter-spacing: var(--tracking-display); margin: 0; position: relative; z-index: 1; }
        .cm-journey__detail-desc { font-family: var(--font-body); font-size: 0.9375rem; line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; position: relative; z-index: 1; }

        /* Impact */
        .cm-impact { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .cm-impact__disclaimer { display: flex; align-items: center; gap: 0.625rem; font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600; background-color: rgba(192,132,252,0.08); border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-sm); padding: 0.625rem 1rem; margin-bottom: 3rem; color: rgba(192,132,252,0.9); }
        .cm-impact__header { margin-bottom: 3.5rem; }
        .cm-impact__equation { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .cm-impact__eq-wrap { display: flex; align-items: center; gap: 1rem; }
        .cm-impact__factor { background-color: var(--surface-2); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 2rem; display: flex; flex-direction: column; align-items: center; gap: 0.625rem; text-align: center; min-width: 180px; flex: 1; transition: border-color var(--ease-base); }
        .cm-impact__factor:hover { border-color: ${ACC_BORDER}; }
        .cm-impact__factor-icon { font-size: 2rem; }
        .cm-impact__factor-label { font-family: var(--font-display); font-weight: 900; font-size: 1.25rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .cm-impact__factor-sub { font-family: var(--font-body); font-size: 0.8125rem; color: var(--text-secondary); }
        .cm-impact__plus { font-family: var(--font-display); font-weight: 900; font-size: 2rem; flex-shrink: 0; }
        .cm-impact__equals { font-family: var(--font-display); font-weight: 900; font-size: 2.5rem; flex-shrink: 0; }
        .cm-impact__result { background-color: var(--surface-2); border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-md); padding: 2rem; display: flex; flex-direction: column; align-items: center; gap: 0.875rem; text-align: center; min-width: 200px; box-shadow: 0 0 60px ${ACC_GLOW}; flex: 1; }
        .cm-impact__result-icon { font-size: 2rem; }
        .cm-impact__result-label { font-family: var(--font-display); font-weight: 900; font-size: 1.375rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .cm-impact__result-metrics { display: flex; gap: 1.25rem; }
        .cm-impact__metric { display: flex; flex-direction: column; gap: 0.15rem; align-items: center; }
        .cm-impact__metric > span:first-child { font-family: var(--font-display); font-weight: 900; font-size: 1.375rem; line-height: 1; }
        .cm-impact__metric > span:last-child { font-family: var(--font-fine); font-size: 0.5rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); }
        .cm-impact__result-demo { font-family: var(--font-fine); font-size: 0.45rem; font-weight: 800; letter-spacing: 0.2em; color: ${ACC}; border: 1px solid ${ACC_BORDER}; border-radius: 2px; padding: 0.15rem 0.5rem; }

        /* CTA */
        .cm-cta { background-color: var(--surface-0); }
        .cm-cta__inner { position: relative; background-color: var(--surface-1); border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-xl); padding: 7rem 4rem; overflow: hidden; text-align: center; }
        .cm-cta__glow { position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(192,132,252,0.12) 0%, transparent 70%); pointer-events: none; }
        .cm-cta__watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: var(--font-display); font-weight: 900; font-size: clamp(7rem, 16vw, 16rem); line-height: 1; letter-spacing: -0.06em; color: rgba(255,255,255,0.015); user-select: none; white-space: nowrap; pointer-events: none; }
        .cm-cta__content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
        .cm-cta__h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.5rem, 5vw, 5rem); line-height: var(--leading-tight); letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.5rem; }
        .cm-cta__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1.0625rem); line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 44ch; margin: 0 0 3rem; }
        .cm-cta__actions { display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
        .cm-cta__tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
        .cm-cta__tag { font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); background-color: var(--surface-2); border: 1px solid var(--border-default); border-radius: var(--radius-full); padding: 0.3rem 0.875rem; }

        /* Responsive */
        @media (max-width: 1100px) { .cm-services__grid { grid-template-columns: repeat(2, 1fr); } .cm-journey__layout { grid-template-columns: 1fr; } .cm-journey__detail { position: static; } }
        @media (max-width: 960px) { .cm-hero__inner { grid-template-columns: 1fr; padding-top: calc(var(--nav-height) + 3rem); } .cm-hero__right { display: none; } .cm-services__header { grid-template-columns: 1fr; } .cm-match__inner { grid-template-columns: 1fr; gap: 3rem; } .cm-impact__equation { justify-content: center; } .cm-cta__inner { padding: 4rem 2rem; } }
        @media (max-width: 640px) { .cm-services__grid { grid-template-columns: 1fr; } .cm-match__profiles { grid-template-columns: 1fr; } .cm-impact__eq-wrap { flex-direction: column; } .cm-impact__plus { display: none; } }
      `}</style>
    </main>
  );
}
