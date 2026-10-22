import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceTileCard from "../components/ServiceTileCard";
import {
  edAccent, edAccentGlow, edAccentBorder,
  eventServiceCards, eventFlow, showcaseProjects, ecosystemNodes,
} from "../data/eventDesigning";

const ACC = edAccent;
const ACC_GLOW = edAccentGlow;
const ACC_BORDER = edAccentBorder;

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

export default function EventDesigning() {
  const [activeFlow, setActiveFlow] = useState(0);
  const flowStage = eventFlow[activeFlow];

  return (
    <main>
      {/* ══ HERO ══ */}
      <section className="ed-hero">
        <div className="ed-hero__bg" aria-hidden>
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&auto=format" alt="" className="ed-hero__bg-img" />
          <div className="ed-hero__bg-overlay" />
          <div className="ed-hero__glow" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "1.5rem" }}>
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Event Designing" }]} accent={ACC} />
        </div>

        <div className="container ed-hero__inner">
          <div className="ed-hero__left">
            <Eyebrow>Event Designing</Eyebrow>
            <h1 className="ed-hero__h1">
              Design Experiences<br />
              <span style={{ color: ACC }}>People Remember.</span>
            </h1>
            <p className="ed-hero__sub">
              We transform ideas into immersive event experiences through concept, branding, environments and visual storytelling. Every detail designed. Every moment intentional.
            </p>
            <div className="ed-hero__actions">
              <Link to="/contact" className="ed-btn ed-btn--primary">
                Design My Event
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <a href="#showcase" className="ed-btn ed-btn--ghost">Explore Our Work</a>
            </div>
          </div>

          {/* Floating element cards */}
          <div className="ed-hero__right" aria-hidden>
            {[
              { label: "Stage", icon: "🎭", top: "5%", left: "0" },
              { label: "Branding", icon: "✦", top: "28%", right: "0" },
              { label: "Lighting", icon: "💡", bottom: "35%", left: "5%" },
              { label: "Digital Screens", icon: "⬡", bottom: "15%", right: "5%" },
              { label: "Audience Experience", icon: "◉", top: "55%", left: "30%" },
            ].map((el) => (
              <div key={el.label} className="ed-hero__el" style={{ top: el.top, left: el.left, right: (el as any).right, bottom: (el as any).bottom }}>
                <span className="ed-hero__el-icon" style={{ color: ACC }}>{el.icon}</span>
                <span className="ed-hero__el-label">{el.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="ed-services section">
        <div className="container">
          <div className="ed-services__header">
            <div>
              <Eyebrow>What We Design</Eyebrow>
              <SectionTitle>Every Detail.<br /><span style={{ color: ACC }}>One Experience.</span></SectionTitle>
            </div>
            <p className="ed-services__sub">
              Nine specialised event design capabilities — from the first creative concept to the final branded collateral. We handle every dimension of the event environment.
            </p>
          </div>
          <div className="ed-services__grid">
            {eventServiceCards.map((card) => (
              <ServiceTileCard key={card.id} card={card} accent={ACC} accentGlow={ACC_GLOW} accentBorder={ACC_BORDER} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE FLOW ══ */}
      <section className="ed-flow section">
        <div className="container">
          <div className="ed-flow__header">
            <Eyebrow>Our Process</Eyebrow>
            <SectionTitle>From Concept<br /><span style={{ color: ACC }}>to Memory.</span></SectionTitle>
          </div>
          <div className="ed-flow__layout">
            <div className="ed-flow__tabs">
              {eventFlow.map((s, i) => (
                <button key={s.number} className={`ed-flow__tab${activeFlow === i ? " ed-flow__tab--active" : ""}`} onClick={() => setActiveFlow(i)}>
                  <span className="ed-flow__tab-icon" style={{ color: activeFlow === i ? ACC : "var(--text-muted)" }}>{s.icon}</span>
                  <span className="ed-flow__tab-num" style={{ color: activeFlow === i ? ACC : "var(--text-muted)" }}>{s.number}</span>
                  <span className="ed-flow__tab-label">{s.label}</span>
                  {i < eventFlow.length - 1 && <div className="ed-flow__connector" style={{ borderColor: activeFlow > i ? ACC_BORDER : "var(--border-default)" }} />}
                </button>
              ))}
            </div>
            <div className="ed-flow__detail">
              <div className="ed-flow__detail-glow" aria-hidden />
              <div className="ed-flow__detail-icon" style={{ color: ACC }}>{flowStage.icon}</div>
              <div className="ed-flow__detail-num">{flowStage.number}</div>
              <h3 className="ed-flow__detail-label" style={{ color: ACC }}>{flowStage.label}</h3>
              <p className="ed-flow__detail-desc">{flowStage.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SHOWCASE ══ */}
      <section id="showcase" className="ed-showcase section">
        <div className="container">
          <div className="ed-showcase__header">
            <Eyebrow>Event Design Portfolio</Eyebrow>
            <SectionTitle>Environments<br /><span style={{ color: ACC }}>We&apos;ve Built.</span></SectionTitle>
          </div>
          <div className="ed-showcase__grid">
            {showcaseProjects.map((proj) => (
              <div key={proj.id} className={`ed-showcase__card${proj.wide ? " ed-showcase__card--wide" : ""}`}>
                <img src={proj.image} alt={proj.title} className="ed-showcase__card-img" />
                <div className="ed-showcase__card-overlay" />
                <div className="ed-showcase__card-body">
                  <span className="ed-showcase__card-cat" style={{ color: ACC, borderColor: ACC_BORDER }}>{proj.category}</span>
                  <h3 className="ed-showcase__card-title">{proj.title}</h3>
                  <p className="ed-showcase__card-desc">{proj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ECOSYSTEM ══ */}
      <section className="ed-ecosystem section">
        <div className="container">
          <div className="ed-ecosystem__header">
            <Eyebrow>The Event Ecosystem</Eyebrow>
            <SectionTitle>Everything Connects.<br /><span style={{ color: ACC }}>Nothing Is Accidental.</span></SectionTitle>
          </div>
          <div className="ed-ecosystem__chain">
            {ecosystemNodes.map((node, i) => (
              <div key={node} className="ed-ecosystem__node-wrap">
                <div className="ed-ecosystem__node">
                  <div className="ed-ecosystem__node-index" style={{ color: ACC }}>{String(i + 1).padStart(2, "0")}</div>
                  <div className="ed-ecosystem__node-label">{node}</div>
                </div>
                {i < ecosystemNodes.length - 1 && (
                  <div className="ed-ecosystem__arrow">
                    <div className="ed-ecosystem__arrow-line" style={{ background: `linear-gradient(to bottom, ${ACC_BORDER}, transparent)` }} />
                    <span style={{ color: ACC }}>↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="ed-cta section">
        <div className="container">
          <div className="ed-cta__inner">
            <div className="ed-cta__glow" aria-hidden />
            <div className="ed-cta__watermark" aria-hidden>EVENT</div>
            <div className="ed-cta__content">
              <Eyebrow>Start Planning</Eyebrow>
              <h2 className="ed-cta__h2">Let&apos;s Create an Experience<br /><span style={{ color: ACC }}>Worth Remembering.</span></h2>
              <p className="ed-cta__sub">From the first concept to the final detail, let&apos;s design an event your audience won&apos;t forget.</p>
              <div className="ed-cta__actions">
                <Link to="/contact" className="ed-btn ed-btn--primary ed-btn--lg">
                  Start Planning My Event
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link to="/services" className="ed-btn ed-btn--outline">All Services</Link>
              </div>
              <div className="ed-cta__tags">
                {["Corporate", "Product Launch", "Exhibition", "Stage Design", "Branding", "Collaterals"].map((t) => (
                  <span key={t} className="ed-cta__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ed-btn {
          display: inline-flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: var(--radius-sm); text-decoration: none;
          transition: all var(--ease-base); white-space: nowrap; border: none; cursor: pointer;
        }
        .ed-btn--primary { background-color: ${ACC}; color: #fff; padding: 0.875rem 1.875rem; box-shadow: 0 0 24px ${ACC_GLOW}; }
        .ed-btn--primary:hover { opacity: 0.88; }
        .ed-btn--lg { padding: 1.125rem 2.5rem; font-size: 0.875rem; }
        .ed-btn--ghost { background: transparent; color: var(--text-muted); padding: 0.875rem 1.5rem; border: 1px solid var(--border-strong); }
        .ed-btn--ghost:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.25); }
        .ed-btn--outline { background: transparent; color: ${ACC}; padding: 1.125rem 2rem; border: 1.5px solid ${ACC}; }
        .ed-btn--outline:hover { background-color: ${ACC}; color: #fff; }

        /* Hero */
        .ed-hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; background-color: var(--surface-0); }
        .ed-hero__bg { position: absolute; inset: 0; pointer-events: none; }
        .ed-hero__bg-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.18; }
        .ed-hero__bg-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.6) 100%); }
        .ed-hero__glow { position: absolute; bottom: -10%; right: 0%; width: 55vw; height: 55vw; max-width: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%); }
        .ed-hero__inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
          padding-top: calc(var(--nav-height) + 5rem); padding-bottom: 5rem;
          position: relative; z-index: 1; width: 100%;
        }
        .ed-hero__left { display: flex; flex-direction: column; }
        .ed-hero__h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.75rem, 5vw, 5.5rem); line-height: var(--leading-tight); letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.5rem; }
        .ed-hero__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.4vw, 1.0625rem); line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 46ch; margin: 0 0 2.5rem; }
        .ed-hero__actions { display: flex; align-items: center; gap: 0.875rem; flex-wrap: wrap; }

        /* Floating element cards */
        .ed-hero__right { position: relative; height: 420px; }
        .ed-hero__el {
          position: absolute; background-color: rgba(20,20,20,0.85); backdrop-filter: blur(12px);
          border: 1px solid var(--border-default); border-radius: var(--radius-sm);
          padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.625rem;
          white-space: nowrap; transition: border-color var(--ease-base);
        }
        .ed-hero__el:hover { border-color: ${ACC_BORDER}; }
        .ed-hero__el-icon { font-size: 1.125rem; flex-shrink: 0; }
        .ed-hero__el-label { font-family: var(--font-display); font-weight: 700; font-size: 0.875rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }

        /* Services */
        .ed-services { background-color: var(--surface-0); }
        .ed-services__header { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: flex-end; margin-bottom: 3.5rem; }
        .ed-services__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1rem); line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; }
        .ed-services__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.125rem; }

        /* Flow */
        .ed-flow { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .ed-flow__header { max-width: 52ch; margin-bottom: 3.5rem; }
        .ed-flow__layout { display: grid; grid-template-columns: 1fr 380px; gap: 3rem; align-items: start; }
        .ed-flow__tabs { display: flex; flex-direction: column; gap: 0.5rem; }
        .ed-flow__tab { display: flex; align-items: center; gap: 1rem; background: none; border: 1px solid var(--border-default); border-radius: var(--radius-sm); padding: 1.125rem 1.5rem; cursor: pointer; text-align: left; transition: all var(--ease-base); position: relative; }
        .ed-flow__tab:hover { border-color: ${ACC_BORDER}; background-color: var(--surface-2); }
        .ed-flow__tab--active { border-color: ${ACC_BORDER} !important; background-color: rgba(249,115,22,0.06) !important; box-shadow: 0 0 0 1px ${ACC_BORDER}, 0 0 40px ${ACC_GLOW}; }
        .ed-flow__tab-icon { font-size: 1rem; flex-shrink: 0; }
        .ed-flow__tab-num { font-family: var(--font-display); font-weight: 900; font-size: 0.75rem; letter-spacing: 0.12em; min-width: 1.5rem; transition: color var(--ease-base); }
        .ed-flow__tab-label { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .ed-flow__connector { display: none; }
        .ed-flow__detail { position: sticky; top: calc(var(--nav-height) + 2rem); background-color: var(--surface-2); border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-lg); padding: 2rem; overflow: hidden; display: flex; flex-direction: column; gap: 1rem; }
        .ed-flow__detail-glow { position: absolute; top: 0; left: 0; right: 0; height: 50%; background: radial-gradient(ellipse at top, ${ACC_GLOW}, transparent 70%); pointer-events: none; }
        .ed-flow__detail-icon { font-size: 2.5rem; position: relative; z-index: 1; }
        .ed-flow__detail-num { position: absolute; top: 1rem; right: 1.5rem; font-family: var(--font-display); font-weight: 900; font-size: 5rem; line-height: 1; color: rgba(255,255,255,0.04); user-select: none; }
        .ed-flow__detail-label { font-family: var(--font-display); font-weight: 900; font-size: 1.75rem; letter-spacing: var(--tracking-display); margin: 0; position: relative; z-index: 1; }
        .ed-flow__detail-desc { font-family: var(--font-body); font-size: 0.9375rem; line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; position: relative; z-index: 1; }

        /* Showcase */
        .ed-showcase { background-color: var(--surface-0); }
        .ed-showcase__header { margin-bottom: 3rem; }
        .ed-showcase__grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: auto auto; gap: 1.25rem; }
        .ed-showcase__card { position: relative; border-radius: var(--radius-md); overflow: hidden; aspect-ratio: 4/5; background-color: var(--surface-2); transition: transform var(--ease-base), box-shadow var(--ease-base); }
        .ed-showcase__card--wide { grid-column: span 2; aspect-ratio: 16/9; }
        .ed-showcase__card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
        .ed-showcase__card-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--ease-slow); }
        .ed-showcase__card:hover .ed-showcase__card-img { transform: scale(1.05); }
        .ed-showcase__card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 55%, transparent 100%); }
        .ed-showcase__card-body { position: absolute; bottom: 0; left: 0; right: 0; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.375rem; }
        .ed-showcase__card-cat { display: inline-block; width: fit-content; font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; border: 1px solid; border-radius: var(--radius-full); padding: 0.2rem 0.625rem; }
        .ed-showcase__card-title { font-family: var(--font-display); font-weight: 900; font-size: 1.25rem; letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0; }
        .ed-showcase__card-desc { font-family: var(--font-body); font-size: 0.8125rem; line-height: var(--leading-relaxed); color: rgba(247,245,242,0.65); margin: 0; }

        /* Ecosystem */
        .ed-ecosystem { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .ed-ecosystem__header { margin-bottom: 3.5rem; }
        .ed-ecosystem__chain { display: flex; flex-direction: column; align-items: center; gap: 0; max-width: 600px; margin: 0 auto; }
        .ed-ecosystem__node-wrap { display: flex; flex-direction: column; align-items: center; width: 100%; }
        .ed-ecosystem__node { width: 100%; background-color: var(--surface-2); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 1.25rem 2rem; display: flex; align-items: center; gap: 1.5rem; transition: border-color var(--ease-base), box-shadow var(--ease-base); }
        .ed-ecosystem__node:hover { border-color: ${ACC_BORDER}; box-shadow: 0 0 40px ${ACC_GLOW}; }
        .ed-ecosystem__node-index { font-family: var(--font-display); font-weight: 900; font-size: 0.8125rem; letter-spacing: 0.14em; flex-shrink: 0; }
        .ed-ecosystem__node-label { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .ed-ecosystem__arrow { display: flex; flex-direction: column; align-items: center; padding: 0.25rem 0; }
        .ed-ecosystem__arrow-line { width: 1px; height: 1rem; }
        .ed-ecosystem__arrow > span { font-size: 0.875rem; line-height: 1; }

        /* CTA */
        .ed-cta { background-color: var(--surface-0); }
        .ed-cta__inner { position: relative; background-color: var(--surface-1); border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-xl); padding: 7rem 4rem; overflow: hidden; text-align: center; }
        .ed-cta__glow { position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(249,115,22,0.12) 0%, transparent 70%); pointer-events: none; }
        .ed-cta__watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: var(--font-display); font-weight: 900; font-size: clamp(7rem, 16vw, 16rem); line-height: 1; letter-spacing: -0.06em; color: rgba(255,255,255,0.015); user-select: none; white-space: nowrap; pointer-events: none; }
        .ed-cta__content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
        .ed-cta__h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.25rem, 4.5vw, 4.5rem); line-height: var(--leading-tight); letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.5rem; }
        .ed-cta__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1.0625rem); line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 50ch; margin: 0 0 3rem; }
        .ed-cta__actions { display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
        .ed-cta__tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
        .ed-cta__tag { font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); background-color: var(--surface-2); border: 1px solid var(--border-default); border-radius: var(--radius-full); padding: 0.3rem 0.875rem; }

        /* Responsive */
        @media (max-width: 1100px) { .ed-flow__layout { grid-template-columns: 1fr; } .ed-flow__detail { position: static; } }
        @media (max-width: 960px) { .ed-hero__inner { grid-template-columns: 1fr; padding-top: calc(var(--nav-height) + 3rem); } .ed-hero__right { display: none; } .ed-services__header { grid-template-columns: 1fr; } .ed-services__grid { grid-template-columns: repeat(2, 1fr); } .ed-showcase__grid { grid-template-columns: repeat(2, 1fr); } .ed-showcase__card--wide { grid-column: span 2; } .ed-cta__inner { padding: 4rem 2rem; } }
        @media (max-width: 640px) { .ed-services__grid { grid-template-columns: 1fr; } .ed-showcase__grid { grid-template-columns: 1fr; } .ed-showcase__card--wide { grid-column: span 1; aspect-ratio: 4/5; } }
      `}</style>
    </main>
  );
}
