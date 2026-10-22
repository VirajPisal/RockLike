import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceTileCard from "../components/ServiceTileCard";
import {
  bbAccent,
  bbAccentGlow,
  bbAccentBorder,
  brandStrategyCards,
  brandFramework,
  researchLayers,
  growthPath,
} from "../data/brandBuildingStrategies";

const ACC = bbAccent;
const ACC_GLOW = bbAccentGlow;
const ACC_BORDER = bbAccentBorder;

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

/* Positioning map — illustrative only */
function PositioningMap() {
  const brands = [
    { x: 72, y: 22, label: "Premium Niche", color: ACC },
    { x: 28, y: 35, label: "Mass Premium", color: "rgba(245,158,11,0.5)" },
    { x: 55, y: 65, label: "Functional Niche", color: "rgba(255,255,255,0.2)" },
    { x: 18, y: 72, label: "Commodity", color: "rgba(255,255,255,0.15)" },
    { x: 82, y: 50, label: "YOU", color: ACC },
  ];

  return (
    <div className="bb-map">
      <div className="bb-map__disclaimer">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1zm0 3.5v2.5m0 1.5h.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>
        Illustrative Positioning Map
      </div>
      <div className="bb-map__canvas">
        {/* Axes */}
        <div className="bb-map__axis bb-map__axis--x" />
        <div className="bb-map__axis bb-map__axis--y" />
        {/* Axis labels */}
        <div className="bb-map__xlabel bb-map__xlabel--left">Mass Market</div>
        <div className="bb-map__xlabel bb-map__xlabel--right">Niche</div>
        <div className="bb-map__ylabel bb-map__ylabel--top">Premium</div>
        <div className="bb-map__ylabel bb-map__ylabel--bottom">Functional</div>
        {/* Brand dots */}
        {brands.map((b, i) => (
          <div key={i} className="bb-map__dot" style={{ left: `${b.x}%`, top: `${b.y}%`, backgroundColor: b.color, boxShadow: `0 0 12px ${b.color}` }}>
            <div className="bb-map__dot-label" style={{ color: i === 4 ? ACC : "var(--text-secondary)" }}>{b.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandBuildingStrategies() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = brandFramework[activeStage];

  return (
    <main>
      {/* ══ HERO ══ */}
      <section className="bb-hero">
        <div className="bb-hero__bg" aria-hidden>
          <div className="bb-hero__glow bb-hero__glow--amber" />
          <div className="bb-hero__glow bb-hero__glow--tl" />
          <div className="bb-hero__grid" />
        </div>

        <div className="container bb-hero__inner">
          <div className="bb-hero__left">
            <Eyebrow>Brand Building &amp; Strategies</Eyebrow>
            <h1 className="bb-hero__h1">
              Build a Brand<br />
              <span style={{ color: ACC }}>With Direction.</span>
            </h1>
            <p className="bb-hero__sub">
              Strong brands are built on clarity, positioning and a strategy designed for long-term growth. We help you understand your market, define your position and create strategies that compound over time.
            </p>
            <div className="bb-hero__actions">
              <Link to="/contact" className="bb-btn bb-btn--primary">
                Build My Brand Strategy
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <a href="#framework" className="bb-btn bb-btn--ghost">Explore Our Approach</a>
            </div>
          </div>

          {/* Right — strategic visual system */}
          <div className="bb-hero__right">
            <div className="bb-hero__diagram">
              <div className="bb-hero__diagram-glow" aria-hidden />
              {/* Central node */}
              <div className="bb-hero__center">
                <div className="bb-hero__center-label">YOUR<br />BRAND</div>
              </div>
              {/* Orbiting strategy nodes */}
              {[
                { label: "Target Audience", angle: 0 },
                { label: "Competitor Landscape", angle: 72 },
                { label: "Brand Positioning", angle: 144 },
                { label: "Market Opportunity", angle: 216 },
                { label: "Growth Direction", angle: 288 },
              ].map((node, i) => {
                const rad = (node.angle - 90) * (Math.PI / 180);
                const r = 130;
                const x = 50 + (r / 280) * 100 * Math.cos(rad);
                const y = 50 + (r / 280) * 100 * Math.sin(rad);
                return (
                  <div key={i} className="bb-hero__node" style={{ left: `${x}%`, top: `${y}%` }}>
                    <div className="bb-hero__node-dot" style={{ borderColor: ACC, boxShadow: `0 0 10px ${ACC_GLOW}` }} />
                    <div className="bb-hero__node-label">{node.label}</div>
                  </div>
                );
              })}
              {/* Orbit ring */}
              <div className="bb-hero__orbit" />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container" style={{ paddingTop: "2rem", paddingBottom: "0.5rem" }}>
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Brand Building & Strategies" }]} accent={ACC} />
      </div>

      {/* ══ STRATEGY SERVICES ══ */}
      <section className="bb-services section">
        <div className="container">
          <div className="bb-services__header">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <SectionTitle>Strategy Before Everything.</SectionTitle>
            </div>
            <p className="bb-services__sub">
              Eight strategic disciplines. One integrated methodology. We architect the thinking your brand needs before a single campaign, post or campaign ever runs.
            </p>
          </div>
          <div className="bb-services__grid">
            {brandStrategyCards.map((card) => (
              <ServiceTileCard key={card.id} card={card} accent={ACC} accentGlow={ACC_GLOW} accentBorder={ACC_BORDER} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ BRAND FRAMEWORK ══ */}
      <section id="framework" className="bb-framework section">
        <div className="container">
          <div className="bb-framework__header">
            <Eyebrow>Our Methodology</Eyebrow>
            <SectionTitle>The Brand<br /><span style={{ color: ACC }}>Growth Framework.</span></SectionTitle>
            <p className="bb-framework__sub">
              A proven five-stage strategic methodology built on rigorous research, precise positioning and disciplined execution.
            </p>
          </div>

          <div className="bb-framework__layout">
            {/* Stage tabs */}
            <div className="bb-framework__tabs">
              {brandFramework.map((s, i) => (
                <button
                  key={s.number}
                  className={`bb-framework__tab${activeStage === i ? " bb-framework__tab--active" : ""}`}
                  onClick={() => setActiveStage(i)}
                >
                  <span className="bb-framework__tab-num" style={{ color: activeStage === i ? ACC : "var(--text-muted)" }}>{s.number}</span>
                  <span className="bb-framework__tab-label">{s.label}</span>
                  {i < brandFramework.length - 1 && <div className="bb-framework__tab-connector" aria-hidden />}
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="bb-framework__detail">
              <div className="bb-framework__detail-glow" aria-hidden />
              <div className="bb-framework__detail-num">{stage.number}</div>
              <h3 className="bb-framework__detail-label" style={{ color: ACC }}>{stage.label}</h3>
              <p className="bb-framework__detail-desc">{stage.description}</p>
              <div className="bb-framework__detail-outputs">
                <div className="bb-framework__detail-outputs-label">Key Outputs</div>
                <div className="bb-framework__detail-outputs-list">
                  {stage.outputs.map((o) => (
                    <div key={o} className="bb-framework__detail-output">
                      <span className="bb-framework__detail-output-dot" style={{ backgroundColor: ACC }} />
                      {o}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ POSITIONING MAP ══ */}
      <section className="bb-positioning section">
        <div className="container">
          <div className="bb-positioning__inner">
            <div className="bb-positioning__left">
              <Eyebrow>Positioning</Eyebrow>
              <SectionTitle>Find Your Position.<br /><span style={{ color: ACC }}>Own Your Space.</span></SectionTitle>
              <p className="bb-positioning__desc">
                Great strategy is about choosing where to compete and what to own in the minds of your audience. We map your competitive landscape and find the position that only you can hold.
              </p>
              <div className="bb-positioning__stats">
                {[["Clarity", "On brand purpose and direction"], ["Differentiation", "From every direct competitor"], ["Ownership", "Of a position worth defending"]].map(([t, d]) => (
                  <div key={t} className="bb-positioning__stat">
                    <span className="bb-positioning__stat-label" style={{ color: ACC }}>{t}</span>
                    <span className="bb-positioning__stat-desc">{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bb-positioning__right">
              <PositioningMap />
            </div>
          </div>
        </div>
      </section>

      {/* ══ RESEARCH & INSIGHT ══ */}
      <section className="bb-research section">
        <div className="container">
          <div className="bb-research__inner">
            <div className="bb-research__left">
              <Eyebrow>Research & Insight</Eyebrow>
              <h2 className="bb-research__statement">
                Great Strategy Starts With<br />
                <span style={{ color: ACC }}>Understanding.</span>
              </h2>
              <p className="bb-research__desc">
                We go deep before we go wide. Every strategy we build is rooted in primary research, competitor intelligence and an honest audit of where your brand stands today.
              </p>
            </div>
            <div className="bb-research__right">
              <div className="bb-research__layers">
                {researchLayers.map((layer, i) => (
                  <div key={layer.label} className="bb-research__layer">
                    <div className="bb-research__layer-line">
                      <div className="bb-research__layer-dot" style={{ backgroundColor: i === 0 ? ACC : `rgba(245,158,11,${0.85 - i * 0.15})` }} />
                      {i < researchLayers.length - 1 && <div className="bb-research__layer-track" />}
                    </div>
                    <div className="bb-research__layer-body">
                      <div className="bb-research__layer-label">{layer.label}</div>
                      <div className="bb-research__layer-desc">{layer.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GROWTH PATH ══ */}
      <section className="bb-growth section">
        <div className="container">
          <div className="bb-growth__header">
            <Eyebrow>Brand Growth</Eyebrow>
            <SectionTitle>Strategy Connects Everything.</SectionTitle>
            <p className="bb-growth__sub">
              From the foundation of your brand to the campaigns that drive revenue — strategy is the connective tissue that makes every investment compound.
            </p>
          </div>

          <div className="bb-growth__path">
            {growthPath.map((node, i) => (
              <div key={node.label} className="bb-growth__node-wrap">
                <div className="bb-growth__node">
                  <div className="bb-growth__node-glow" style={{ backgroundColor: ACC_GLOW }} />
                  <div className="bb-growth__node-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="bb-growth__node-label">{node.label}</div>
                  <div className="bb-growth__node-desc">{node.description}</div>
                </div>
                {i < growthPath.length - 1 && (
                  <div className="bb-growth__arrow" style={{ color: ACC }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="bb-cta section">
        <div className="container">
          <div className="bb-cta__inner">
            <div className="bb-cta__glow" aria-hidden />
            <div className="bb-cta__watermark" aria-hidden>STRATEGY</div>
            <div className="bb-cta__content">
              <Eyebrow>Start With Strategy</Eyebrow>
              <h2 className="bb-cta__h2">
                Your Brand Needs More<br />
                <span style={{ color: ACC }}>Than Attention.</span>
              </h2>
              <p className="bb-cta__sub">It needs a clear direction.</p>
              <div className="bb-cta__actions">
                <Link to="/contact" className="bb-btn bb-btn--primary bb-btn--lg">
                  Build My Brand Strategy
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link to="/services" className="bb-btn bb-btn--outline">All Services</Link>
              </div>
              <div className="bb-cta__tags">
                {["Strategy", "Positioning", "Research", "GTM", "Campaign", "Growth"].map((t) => (
                  <span key={t} className="bb-cta__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Buttons */
        .bb-btn {
          display: inline-flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: var(--radius-sm); text-decoration: none;
          transition: all var(--ease-base); white-space: nowrap;
          border: none; cursor: pointer;
        }
        .bb-btn--primary { background-color: ${ACC}; color: #000; padding: 0.875rem 1.875rem; box-shadow: 0 0 24px ${ACC_GLOW}; }
        .bb-btn--primary:hover { opacity: 0.88; }
        .bb-btn--lg { padding: 1.125rem 2.5rem; font-size: 0.875rem; }
        .bb-btn--ghost { background: transparent; color: var(--text-muted); padding: 0.875rem 1.5rem; border: 1px solid var(--border-strong); }
        .bb-btn--ghost:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.25); }
        .bb-btn--outline { background: transparent; color: ${ACC}; padding: 1.125rem 2rem; border: 1.5px solid ${ACC}; }
        .bb-btn--outline:hover { background-color: ${ACC}; color: #000; }

        /* Hero */
        .bb-hero {
          position: relative; min-height: 100vh; display: flex; align-items: center;
          overflow: hidden; background-color: var(--surface-0);
        }
        .bb-hero__bg { position: absolute; inset: 0; pointer-events: none; }
        .bb-hero__glow { position: absolute; border-radius: 50%; }
        .bb-hero__glow--amber {
          bottom: -10%; right: 0%; width: 55vw; height: 55vw; max-width: 700px;
          background: radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 65%);
        }
        .bb-hero__glow--tl {
          top: 0%; left: 30%; width: 40vw; height: 40vw; max-width: 500px;
          background: radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 65%);
        }
        .bb-hero__grid {
          position: absolute; inset: 0; opacity: 0.025;
          background-image: linear-gradient(var(--border-default) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border-default) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .bb-hero__inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
          padding-top: calc(var(--nav-height) + 5rem); padding-bottom: 5rem;
          position: relative; z-index: 1; width: 100%;
        }
        .bb-hero__left { display: flex; flex-direction: column; }
        .bb-hero__h1 {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(2.75rem, 5vw, 5.5rem);
          line-height: var(--leading-tight); letter-spacing: var(--tracking-display);
          color: var(--text-primary); margin: 0 0 1.5rem;
        }
        .bb-hero__sub {
          font-family: var(--font-body); font-size: clamp(0.9375rem, 1.4vw, 1.0625rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 46ch; margin: 0 0 2.5rem;
        }
        .bb-hero__actions { display: flex; align-items: center; gap: 0.875rem; flex-wrap: wrap; }

        /* Hero diagram */
        .bb-hero__diagram {
          position: relative; width: 100%; aspect-ratio: 1;
          max-width: 480px; margin: 0 auto;
        }
        .bb-hero__diagram-glow {
          position: absolute; inset: 0;
          background: radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .bb-hero__orbit {
          position: absolute; inset: 10%;
          border: 1px dashed rgba(245,158,11,0.2); border-radius: 50%;
        }
        .bb-hero__center {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 90px; height: 90px; border-radius: 50%;
          background-color: var(--surface-2);
          border: 1.5px solid ${ACC_BORDER};
          box-shadow: 0 0 40px ${ACC_GLOW};
          display: flex; align-items: center; justify-content: center;
        }
        .bb-hero__center-label {
          font-family: var(--font-display); font-weight: 900; font-size: 0.625rem;
          letter-spacing: 0.14em; text-align: center; color: ${ACC}; line-height: 1.3;
        }
        .bb-hero__node {
          position: absolute; transform: translate(-50%, -50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.375rem;
        }
        .bb-hero__node-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background-color: var(--surface-0); border: 2px solid;
        }
        .bb-hero__node-label {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; text-align: center;
          color: var(--text-muted); white-space: nowrap;
        }

        /* Services */
        .bb-services { background-color: var(--surface-0); }
        .bb-services__header { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: flex-end; margin-bottom: 3.5rem; }
        .bb-services__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1rem); line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; }
        .bb-services__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.125rem; }

        /* Framework */
        .bb-framework { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .bb-framework__header { max-width: 56ch; margin-bottom: 3.5rem; }
        .bb-framework__sub { font-family: var(--font-body); font-size: 1rem; line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 1.25rem 0 0; }
        .bb-framework__layout { display: grid; grid-template-columns: 1fr 380px; gap: 3rem; align-items: start; }
        .bb-framework__tabs { display: flex; flex-direction: column; gap: 0; }
        .bb-framework__tab {
          display: flex; align-items: center; gap: 1.25rem;
          position: relative; background: none; border: 1px solid var(--border-default);
          border-radius: var(--radius-sm); padding: 1.25rem 1.5rem; margin-bottom: 0.5rem;
          cursor: pointer; text-align: left; transition: all var(--ease-base);
        }
        .bb-framework__tab:hover { border-color: ${ACC_BORDER}; background-color: var(--surface-2); }
        .bb-framework__tab--active {
          border-color: ${ACC_BORDER} !important; background-color: rgba(245,158,11,0.06) !important;
          box-shadow: 0 0 0 1px ${ACC_BORDER}, 0 0 40px ${ACC_GLOW};
        }
        .bb-framework__tab-num {
          font-family: var(--font-display); font-weight: 900; font-size: 0.8125rem;
          letter-spacing: 0.12em; min-width: 2rem; transition: color var(--ease-base);
        }
        .bb-framework__tab-label {
          font-family: var(--font-display); font-weight: 700; font-size: 1.125rem;
          letter-spacing: var(--tracking-display); color: var(--text-primary);
        }
        .bb-framework__tab-connector { display: none; }
        .bb-framework__detail {
          position: sticky; top: calc(var(--nav-height) + 2rem);
          background-color: var(--surface-2); border: 1px solid ${ACC_BORDER};
          border-radius: var(--radius-lg); padding: 2rem; overflow: hidden;
          display: flex; flex-direction: column; gap: 1rem;
        }
        .bb-framework__detail-glow {
          position: absolute; top: 0; left: 0; right: 0; height: 50%;
          background: radial-gradient(ellipse at top, ${ACC_GLOW}, transparent 70%);
          pointer-events: none;
        }
        .bb-framework__detail-num {
          position: absolute; top: 1rem; right: 1.5rem;
          font-family: var(--font-display); font-weight: 900; font-size: 5rem;
          line-height: 1; color: rgba(255,255,255,0.04); user-select: none;
        }
        .bb-framework__detail-label {
          font-family: var(--font-display); font-weight: 900; font-size: 1.75rem;
          letter-spacing: var(--tracking-display); margin: 0; position: relative; z-index: 1;
        }
        .bb-framework__detail-desc {
          font-family: var(--font-body); font-size: 0.9375rem; line-height: var(--leading-relaxed);
          color: var(--text-secondary); margin: 0; position: relative; z-index: 1;
        }
        .bb-framework__detail-outputs {
          background-color: var(--surface-0); border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle); padding: 0.875rem 1rem;
          position: relative; z-index: 1;
        }
        .bb-framework__detail-outputs-label {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.625rem;
        }
        .bb-framework__detail-outputs-list { display: flex; flex-direction: column; gap: 0.375rem; }
        .bb-framework__detail-output {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-body); font-size: 0.875rem; color: var(--text-secondary);
        }
        .bb-framework__detail-output-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }

        /* Positioning */
        .bb-positioning { background-color: var(--surface-0); }
        .bb-positioning__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .bb-positioning__desc { font-family: var(--font-body); font-size: 1rem; line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 1.25rem 0 2rem; max-width: 42ch; }
        .bb-positioning__stats { display: flex; flex-direction: column; gap: 0.875rem; }
        .bb-positioning__stat { display: flex; flex-direction: column; gap: 0.15rem; border-left: 2px solid ${ACC_BORDER}; padding-left: 1rem; }
        .bb-positioning__stat-label { font-family: var(--font-display); font-weight: 700; font-size: 1rem; letter-spacing: var(--tracking-display); }
        .bb-positioning__stat-desc { font-family: var(--font-body); font-size: 0.875rem; color: var(--text-secondary); }

        /* Map */
        .bb-map { display: flex; flex-direction: column; gap: 0.75rem; }
        .bb-map__disclaimer {
          display: inline-flex; align-items: center; gap: 0.375rem;
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: ${ACC}; background-color: rgba(245,158,11,0.08);
          border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-sm); padding: 0.375rem 0.625rem; align-self: flex-start;
        }
        .bb-map__canvas {
          position: relative; background-color: var(--surface-1);
          border: 1px solid var(--border-default); border-radius: var(--radius-lg);
          aspect-ratio: 1; overflow: hidden;
        }
        .bb-map__axis {
          position: absolute; background-color: rgba(255,255,255,0.08);
        }
        .bb-map__axis--x { top: 50%; left: 5%; right: 5%; height: 1px; }
        .bb-map__axis--y { left: 50%; top: 5%; bottom: 5%; width: 1px; }
        .bb-map__xlabel {
          position: absolute; top: 50%; font-family: var(--font-fine); font-size: 0.5rem;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted);
          transform: translateY(-50%);
        }
        .bb-map__xlabel--left { left: 1rem; }
        .bb-map__xlabel--right { right: 1rem; text-align: right; }
        .bb-map__ylabel {
          position: absolute; left: 50%; font-family: var(--font-fine); font-size: 0.5rem;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted);
          transform: translateX(-50%);
        }
        .bb-map__ylabel--top { top: 0.75rem; }
        .bb-map__ylabel--bottom { bottom: 0.75rem; }
        .bb-map__dot {
          position: absolute; transform: translate(-50%, -50%);
          width: 12px; height: 12px; border-radius: 50%;
        }
        .bb-map__dot-label {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
          font-family: var(--font-fine); font-size: 0.45rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          white-space: nowrap; padding-top: 4px;
        }

        /* Research */
        .bb-research { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .bb-research__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .bb-research__statement {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(2rem, 3.5vw, 3.5rem); line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.25rem;
        }
        .bb-research__desc { font-family: var(--font-body); font-size: 1rem; line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 42ch; }
        .bb-research__layers { display: flex; flex-direction: column; gap: 0; }
        .bb-research__layer { display: flex; gap: 1.25rem; }
        .bb-research__layer-line { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .bb-research__layer-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
        .bb-research__layer-track { flex: 1; width: 1px; background: linear-gradient(to bottom, ${ACC_BORDER}, transparent); min-height: 2rem; }
        .bb-research__layer-body { padding: 0 0 1.5rem; }
        .bb-research__layer-label {
          font-family: var(--font-display); font-weight: 700; font-size: 1.125rem;
          letter-spacing: var(--tracking-display); color: var(--text-primary); margin-bottom: 0.25rem;
        }
        .bb-research__layer-desc { font-family: var(--font-body); font-size: 0.875rem; line-height: var(--leading-relaxed); color: var(--text-secondary); }

        /* Growth path */
        .bb-growth { background-color: var(--surface-0); }
        .bb-growth__header { max-width: 56ch; margin-bottom: 3.5rem; }
        .bb-growth__sub { font-family: var(--font-body); font-size: 1rem; line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 1.25rem 0 0; }
        .bb-growth__path { display: flex; align-items: stretch; gap: 0; }
        .bb-growth__node-wrap { display: flex; align-items: center; flex: 1; }
        .bb-growth__node {
          flex: 1; position: relative; overflow: hidden;
          background-color: var(--surface-1); border: 1px solid var(--border-default);
          border-radius: var(--radius-md); padding: 1.75rem 1.25rem;
          transition: border-color var(--ease-base), box-shadow var(--ease-base);
        }
        .bb-growth__node:hover {
          border-color: ${ACC_BORDER};
          box-shadow: 0 0 40px ${ACC_GLOW};
        }
        .bb-growth__node-glow {
          position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          border-radius: 50%; pointer-events: none; opacity: 0;
          transition: opacity var(--ease-base);
        }
        .bb-growth__node:hover .bb-growth__node-glow { opacity: 1; }
        .bb-growth__node-num {
          font-family: var(--font-display); font-weight: 900; font-size: 0.75rem;
          letter-spacing: 0.14em; color: ${ACC}; margin-bottom: 0.875rem;
        }
        .bb-growth__node-label {
          font-family: var(--font-display); font-weight: 700; font-size: 1rem;
          letter-spacing: var(--tracking-display); color: var(--text-primary); margin-bottom: 0.5rem;
          line-height: var(--leading-snug);
        }
        .bb-growth__node-desc { font-family: var(--font-body); font-size: 0.75rem; line-height: var(--leading-relaxed); color: var(--text-secondary); }
        .bb-growth__arrow {
          font-size: 1.25rem; padding: 0 0.5rem; flex-shrink: 0; opacity: 0.6;
        }

        /* CTA */
        .bb-cta { background-color: var(--surface-0); }
        .bb-cta__inner {
          position: relative; background-color: var(--surface-1);
          border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-xl);
          padding: 7rem 4rem; overflow: hidden; text-align: center;
        }
        .bb-cta__glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(245,158,11,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .bb-cta__watermark {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(5rem, 12vw, 12rem); line-height: 1;
          letter-spacing: -0.06em; color: rgba(255,255,255,0.015);
          user-select: none; white-space: nowrap; pointer-events: none;
        }
        .bb-cta__content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
        .bb-cta__h2 {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(2.5rem, 5vw, 5rem); line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.25rem;
        }
        .bb-cta__sub {
          font-family: var(--font-display); font-size: clamp(1.25rem, 2vw, 1.75rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 40ch; margin: 0 0 3rem;
          letter-spacing: var(--tracking-display);
        }
        .bb-cta__actions { display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
        .bb-cta__tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
        .bb-cta__tag {
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-muted); background-color: var(--surface-2);
          border: 1px solid var(--border-default); border-radius: var(--radius-full); padding: 0.3rem 0.875rem;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .bb-services__grid { grid-template-columns: repeat(2, 1fr); }
          .bb-framework__layout { grid-template-columns: 1fr; }
          .bb-framework__detail { position: static; }
          .bb-growth__path { flex-wrap: wrap; gap: 1rem; }
          .bb-growth__node-wrap { flex: 0 0 calc(50% - 0.5rem); }
          .bb-growth__arrow { display: none; }
        }
        @media (max-width: 960px) {
          .bb-hero__inner { grid-template-columns: 1fr; padding-top: calc(var(--nav-height) + 3rem); }
          .bb-hero__right { display: none; }
          .bb-services__header { grid-template-columns: 1fr; }
          .bb-positioning__inner { grid-template-columns: 1fr; gap: 3rem; }
          .bb-research__inner { grid-template-columns: 1fr; gap: 3rem; }
          .bb-cta__inner { padding: 4rem 2rem; }
        }
        @media (max-width: 640px) {
          .bb-services__grid { grid-template-columns: 1fr; }
          .bb-growth__node-wrap { flex: 0 0 100%; }
        }
      `}</style>
    </main>
  );
}
