import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceTileCard from "../components/ServiceTileCard";
import {
  fdAccent, fdAccentGlow, fdAccentBorder,
  franchiseServiceCards, franchiseFramework, growthCycleNodes, scalingPath,
} from "../data/franchiseDevelopment";

const ACC = fdAccent;
const ACC_GLOW = fdAccentGlow;
const ACC_BORDER = fdAccentBorder;

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

/* Franchise network diagram */
function NetworkDiagram() {
  const locations = ["City A", "City B", "City C", "City D", "City E", "City F"];
  return (
    <div className="fd-network">
      {/* Head office */}
      <div className="fd-network__row fd-network__row--hq">
        <div className="fd-network__node fd-network__node--hq" style={{ borderColor: ACC, boxShadow: `0 0 30px ${ACC_GLOW}` }}>
          <div className="fd-network__node-label" style={{ color: ACC }}>HEAD OFFICE</div>
          <div className="fd-network__node-sub">Central Brand + Operations</div>
        </div>
      </div>
      {/* Connector */}
      <div className="fd-network__v-line" style={{ background: `linear-gradient(to bottom, ${ACC}, ${ACC_BORDER})` }} />
      {/* Region */}
      <div className="fd-network__row fd-network__row--region">
        <div className="fd-network__node fd-network__node--region">
          <div className="fd-network__node-label">REGION</div>
          <div className="fd-network__node-sub">Territory Management</div>
        </div>
      </div>
      {/* H-connectors */}
      <div className="fd-network__h-bar" style={{ borderColor: ACC_BORDER }} />
      {/* Locations */}
      <div className="fd-network__row fd-network__row--locations">
        {locations.map((loc, i) => (
          <div key={loc} className="fd-network__node fd-network__node--loc">
            <div className="fd-network__node-dot" style={{ backgroundColor: i < 2 ? ACC : `rgba(14,165,233,${0.7 - i * 0.1})` }} />
            <div className="fd-network__node-label">{loc}</div>
          </div>
        ))}
      </div>
      {/* Animated pulse */}
      <div className="fd-network__pulse" style={{ backgroundColor: ACC }} />
    </div>
  );
}

export default function FranchiseDevelopment() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = franchiseFramework[activeStage];
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <main>
      {/* ══ HERO ══ */}
      <section className="fd-hero">
        <div className="fd-hero__bg" aria-hidden>
          <div className="fd-hero__grid" />
          <div className="fd-hero__glow fd-hero__glow--main" />
          <div className="fd-hero__glow fd-hero__glow--tl" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "1.5rem" }}>
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Franchise Development" }]} accent={ACC} />
        </div>

        <div className="container fd-hero__inner">
          <div className="fd-hero__left">
            <Eyebrow>Franchise Development</Eyebrow>
            <h1 className="fd-hero__h1">
              Turn Your Business Into<br />
              <span style={{ color: ACC }}>a Scalable Franchise.</span>
            </h1>
            <p className="fd-hero__sub">
              We help businesses build the strategy, systems and brand foundation required to take their franchise model to the next level — from the first location to a scalable network.
            </p>
            <div className="fd-hero__actions">
              <Link to="/contact" className="fd-btn fd-btn--primary">
                Explore Franchise Development
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link to="/contact" className="fd-btn fd-btn--ghost">Talk to Our Team</Link>
            </div>
          </div>

          <div className="fd-hero__right">
            <NetworkDiagram />
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="fd-services section">
        <div className="container">
          <div className="fd-services__header">
            <div>
              <Eyebrow>What We Build</Eyebrow>
              <SectionTitle>Build the Foundation<br /><span style={{ color: "var(--text-secondary)" }}>for Expansion.</span></SectionTitle>
            </div>
            <p className="fd-services__sub">
              Eight integrated disciplines that take your business from a proven concept to a replicable franchise system — with every component built to scale.
            </p>
          </div>
          <div className="fd-services__grid">
            {franchiseServiceCards.map((card) => (
              <ServiceTileCard key={card.id} card={card} accent={ACC} accentGlow={ACC_GLOW} accentBorder={ACC_BORDER} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FRAMEWORK ══ */}
      <section className="fd-framework section">
        <div className="container">
          <div className="fd-framework__header">
            <Eyebrow>Development Framework</Eyebrow>
            <SectionTitle>The 6-Stage<br /><span style={{ color: ACC }}>Development Process.</span></SectionTitle>
            <p className="fd-framework__sub">
              A structured, proven methodology that takes your business from brand strategy to an active franchise network — step by step.
            </p>
          </div>
          <div className="fd-framework__layout">
            <div className="fd-framework__tabs">
              {franchiseFramework.map((s, i) => (
                <button key={s.number} className={`fd-framework__tab${activeStage === i ? " fd-framework__tab--active" : ""}`} onClick={() => setActiveStage(i)}>
                  <span className="fd-framework__tab-num" style={{ color: activeStage === i ? ACC : "var(--text-muted)" }}>{s.number}</span>
                  <span className="fd-framework__tab-label">{s.label}</span>
                </button>
              ))}
            </div>
            <div className="fd-framework__detail">
              <div className="fd-framework__detail-glow" aria-hidden />
              <div className="fd-framework__detail-num">{stage.number}</div>
              <h3 className="fd-framework__detail-label" style={{ color: ACC }}>{stage.label}</h3>
              <div className="fd-framework__detail-row">
                <div className="fd-framework__detail-block">
                  <div className="fd-framework__detail-block-head">Objective</div>
                  <div className="fd-framework__detail-block-body">{stage.objective}</div>
                </div>
              </div>
              <div className="fd-framework__detail-row">
                <div className="fd-framework__detail-block">
                  <div className="fd-framework__detail-block-head">Key Activity</div>
                  <div className="fd-framework__detail-block-body">{stage.activity}</div>
                </div>
              </div>
              <div className="fd-framework__detail-output">
                <span className="fd-framework__detail-output-dot" style={{ backgroundColor: ACC }} />
                <span className="fd-framework__detail-output-label">Output:</span>
                <span className="fd-framework__detail-output-val">{stage.output}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SCALING VISUAL ══ */}
      <section className="fd-scaling section">
        <div className="container">
          <div className="fd-scaling__header">
            <Eyebrow>Scalable Growth</Eyebrow>
            <SectionTitle>From One Location<br /><span style={{ color: ACC }}>to a Scalable Network.</span></SectionTitle>
          </div>
          <div className="fd-scaling__path">
            {scalingPath.map((node, i) => (
              <div key={node.label} className="fd-scaling__node-wrap">
                <div className={`fd-scaling__node${activeNode === i ? " fd-scaling__node--active" : ""}`}
                  onMouseEnter={() => setActiveNode(i)} onMouseLeave={() => setActiveNode(null)}>
                  <div className="fd-scaling__node-glow" style={{ backgroundColor: ACC_GLOW }} />
                  <div className="fd-scaling__node-num" style={{ color: activeNode === i ? ACC : "var(--text-muted)" }}>{String(i + 1).padStart(2, "0")}</div>
                  <div className="fd-scaling__node-label">{node.label}</div>
                  <div className="fd-scaling__node-sub">{node.sublabel}</div>
                  {/* Expanding dot indicator */}
                  <div className="fd-scaling__node-dots">
                    {Array.from({ length: Math.min(i + 1, 5) }).map((_, j) => (
                      <div key={j} className="fd-scaling__node-dot" style={{ backgroundColor: activeNode === i ? ACC : `rgba(14,165,233,${0.4 + j * 0.12})`, width: `${8 + j * 3}px`, height: `${8 + j * 3}px` }} />
                    ))}
                  </div>
                </div>
                {i < scalingPath.length - 1 && <div className="fd-scaling__arrow" style={{ color: ACC }}>↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GROWTH CYCLE ══ */}
      <section className="fd-cycle section">
        <div className="container">
          <div className="fd-cycle__header">
            <Eyebrow>The Growth System</Eyebrow>
            <SectionTitle>A System That<br /><span style={{ color: ACC }}>Compounds Over Time.</span></SectionTitle>
            <p className="fd-cycle__sub">
              Strategy, branding and marketing are not separate activities in a franchise — they form a continuous growth loop where each element reinforces the next.
            </p>
          </div>
          <div className="fd-cycle__nodes">
            {growthCycleNodes.map((node, i) => (
              <div key={node} className="fd-cycle__node-wrap">
                <div className="fd-cycle__node">
                  <div className="fd-cycle__node-num" style={{ color: ACC }}>{String(i + 1).padStart(2, "0")}</div>
                  <div className="fd-cycle__node-label">{node}</div>
                </div>
                {i < growthCycleNodes.length - 1 && (
                  <div className="fd-cycle__connector" style={{ color: ACC }}>→</div>
                )}
                {i === growthCycleNodes.length - 1 && (
                  <div className="fd-cycle__loop" style={{ color: ACC }}>↺</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="fd-cta section">
        <div className="container">
          <div className="fd-cta__inner">
            <div className="fd-cta__glow" aria-hidden />
            <div className="fd-cta__watermark" aria-hidden>FRANCHISE</div>
            <div className="fd-cta__content">
              <Eyebrow>Start Expanding</Eyebrow>
              <h2 className="fd-cta__h2">Ready to Build Your<br /><span style={{ color: ACC }}>Next Growth Chapter?</span></h2>
              <p className="fd-cta__sub">Let&apos;s turn your business model into a franchise built for expansion.</p>
              <div className="fd-cta__actions">
                <Link to="/contact" className="fd-btn fd-btn--primary fd-btn--lg">
                  Start a Franchise Conversation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link to="/services" className="fd-btn fd-btn--outline">All Services</Link>
              </div>
              <div className="fd-cta__tags">
                {["Strategy", "Branding", "Model", "Marketing", "Lead Gen", "Launch"].map((t) => (
                  <span key={t} className="fd-cta__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .fd-btn {
          display: inline-flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: var(--radius-sm); text-decoration: none;
          transition: all var(--ease-base); white-space: nowrap; border: none; cursor: pointer;
        }
        .fd-btn--primary { background-color: ${ACC}; color: #fff; padding: 0.875rem 1.875rem; box-shadow: 0 0 24px ${ACC_GLOW}; }
        .fd-btn--primary:hover { opacity: 0.88; }
        .fd-btn--lg { padding: 1.125rem 2.5rem; font-size: 0.875rem; }
        .fd-btn--ghost { background: transparent; color: var(--text-muted); padding: 0.875rem 1.5rem; border: 1px solid var(--border-strong); }
        .fd-btn--ghost:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.25); }
        .fd-btn--outline { background: transparent; color: ${ACC}; padding: 1.125rem 2rem; border: 1.5px solid ${ACC}; }
        .fd-btn--outline:hover { background-color: ${ACC}; color: #fff; }

        /* Hero */
        .fd-hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; background-color: var(--surface-0); }
        .fd-hero__bg { position: absolute; inset: 0; pointer-events: none; }
        .fd-hero__grid { position: absolute; inset: 0; opacity: 0.025; background-image: linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px); background-size: 48px 48px; }
        .fd-hero__glow { position: absolute; border-radius: 50%; }
        .fd-hero__glow--main { top: -5%; right: 0; width: 50vw; height: 50vw; max-width: 650px; background: radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%); }
        .fd-hero__glow--tl { bottom: -10%; left: 10%; width: 40vw; height: 40vw; max-width: 500px; background: radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 65%); }
        .fd-hero__inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
          padding-top: calc(var(--nav-height) + 5rem); padding-bottom: 5rem;
          position: relative; z-index: 1; width: 100%;
        }
        .fd-hero__left { display: flex; flex-direction: column; }
        .fd-hero__h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.5rem, 4.5vw, 5rem); line-height: var(--leading-tight); letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.5rem; }
        .fd-hero__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.4vw, 1.0625rem); line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 46ch; margin: 0 0 2.5rem; }
        .fd-hero__actions { display: flex; align-items: center; gap: 0.875rem; flex-wrap: wrap; }

        /* Network diagram */
        .fd-network { display: flex; flex-direction: column; align-items: center; gap: 0; padding: 2rem; }
        .fd-network__row { display: flex; justify-content: center; width: 100%; }
        .fd-network__node { background-color: var(--surface-1); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 1rem 1.5rem; display: flex; flex-direction: column; gap: 0.25rem; text-align: center; }
        .fd-network__node--hq { border-color: ${ACC_BORDER}; min-width: 220px; }
        .fd-network__node--region { min-width: 180px; }
        .fd-network__node--loc { min-width: 80px; padding: 0.75rem; }
        .fd-network__node-label { font-family: var(--font-display); font-weight: 900; font-size: 0.75rem; letter-spacing: 0.14em; color: var(--text-primary); }
        .fd-network__node-sub { font-family: var(--font-fine); font-size: 0.5rem; font-weight: 600; letter-spacing: 0.08em; color: var(--text-muted); }
        .fd-network__node-dot { width: 10px; height: 10px; border-radius: 50%; margin: 0 auto 0.375rem; }
        .fd-network__v-line { width: 1px; height: 2rem; background: linear-gradient(to bottom, ${ACC}, ${ACC_BORDER}); }
        .fd-network__h-bar { width: 80%; height: 0; border-top: 1px solid ${ACC_BORDER}; margin: 0; }
        .fd-network__row--region { margin-bottom: 0; padding-bottom: 0; }
        .fd-network__row--locations { gap: 0.5rem; flex-wrap: wrap; }
        .fd-network__pulse { width: 8px; height: 8px; border-radius: 50%; background-color: ${ACC}; margin-top: 1rem; animation: fdPulse 2s ease-in-out infinite; }
        @keyframes fdPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.5)} }

        /* Services */
        .fd-services { background-color: var(--surface-0); }
        .fd-services__header { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: flex-end; margin-bottom: 3.5rem; }
        .fd-services__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1rem); line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; }
        .fd-services__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.125rem; }

        /* Framework */
        .fd-framework { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .fd-framework__header { max-width: 56ch; margin-bottom: 3.5rem; }
        .fd-framework__sub { font-family: var(--font-body); font-size: 1rem; line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 1.25rem 0 0; }
        .fd-framework__layout { display: grid; grid-template-columns: 1fr 400px; gap: 3rem; align-items: start; }
        .fd-framework__tabs { display: flex; flex-direction: column; gap: 0.5rem; }
        .fd-framework__tab { display: flex; align-items: center; gap: 1.25rem; background: none; border: 1px solid var(--border-default); border-radius: var(--radius-sm); padding: 1.25rem 1.5rem; cursor: pointer; text-align: left; transition: all var(--ease-base); }
        .fd-framework__tab:hover { border-color: ${ACC_BORDER}; background-color: var(--surface-2); }
        .fd-framework__tab--active { border-color: ${ACC_BORDER} !important; background-color: rgba(14,165,233,0.06) !important; box-shadow: 0 0 0 1px ${ACC_BORDER}, 0 0 40px ${ACC_GLOW}; }
        .fd-framework__tab-num { font-family: var(--font-display); font-weight: 900; font-size: 0.8125rem; letter-spacing: 0.12em; min-width: 2rem; transition: color var(--ease-base); }
        .fd-framework__tab-label { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .fd-framework__detail { position: sticky; top: calc(var(--nav-height) + 2rem); background-color: var(--surface-2); border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-lg); padding: 2rem; overflow: hidden; display: flex; flex-direction: column; gap: 1rem; }
        .fd-framework__detail-glow { position: absolute; top: 0; left: 0; right: 0; height: 50%; background: radial-gradient(ellipse at top, ${ACC_GLOW}, transparent 70%); pointer-events: none; }
        .fd-framework__detail-num { position: absolute; top: 1rem; right: 1.5rem; font-family: var(--font-display); font-weight: 900; font-size: 5rem; line-height: 1; color: rgba(255,255,255,0.04); user-select: none; }
        .fd-framework__detail-label { font-family: var(--font-display); font-weight: 900; font-size: 1.75rem; letter-spacing: var(--tracking-display); margin: 0; position: relative; z-index: 1; }
        .fd-framework__detail-row { position: relative; z-index: 1; }
        .fd-framework__detail-block { background-color: var(--surface-0); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); padding: 0.875rem 1rem; }
        .fd-framework__detail-block-head { font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.375rem; }
        .fd-framework__detail-block-body { font-family: var(--font-body); font-size: 0.875rem; line-height: var(--leading-relaxed); color: var(--text-secondary); }
        .fd-framework__detail-output { display: flex; align-items: center; gap: 0.5rem; position: relative; z-index: 1; font-family: var(--font-fine); font-size: 0.75rem; }
        .fd-framework__detail-output-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .fd-framework__detail-output-label { font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }
        .fd-framework__detail-output-val { font-weight: 600; color: var(--text-secondary); }

        /* Scaling */
        .fd-scaling { background-color: var(--surface-0); }
        .fd-scaling__header { max-width: 56ch; margin-bottom: 3.5rem; }
        .fd-scaling__path { display: flex; flex-direction: column; align-items: center; gap: 0; max-width: 560px; margin: 0 auto; }
        .fd-scaling__node-wrap { display: flex; flex-direction: column; align-items: center; width: 100%; }
        .fd-scaling__node { width: 100%; position: relative; overflow: hidden; background-color: var(--surface-1); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 0.375rem; transition: border-color var(--ease-base), box-shadow var(--ease-base); cursor: default; }
        .fd-scaling__node--active { border-color: ${ACC_BORDER}; box-shadow: 0 0 50px ${ACC_GLOW}; }
        .fd-scaling__node-glow { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; border-radius: 50%; opacity: 0; transition: opacity var(--ease-base); pointer-events: none; }
        .fd-scaling__node--active .fd-scaling__node-glow { opacity: 0.5; }
        .fd-scaling__node-num { font-family: var(--font-display); font-weight: 900; font-size: 0.75rem; letter-spacing: 0.14em; transition: color var(--ease-base); }
        .fd-scaling__node-label { font-family: var(--font-display); font-weight: 900; font-size: 1.25rem; letter-spacing: var(--tracking-display); color: var(--text-primary); line-height: var(--leading-snug); }
        .fd-scaling__node-sub { font-family: var(--font-body); font-size: 0.875rem; color: var(--text-secondary); }
        .fd-scaling__node-dots { display: flex; align-items: center; gap: 4px; margin-top: 0.5rem; }
        .fd-scaling__node-dot { border-radius: 50%; transition: all var(--ease-base); }
        .fd-scaling__arrow { font-size: 1rem; padding: 0.375rem 0; opacity: 0.5; }

        /* Growth cycle */
        .fd-cycle { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .fd-cycle__header { max-width: 52ch; margin-bottom: 3.5rem; }
        .fd-cycle__sub { font-family: var(--font-body); font-size: 1rem; line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 1.25rem 0 0; }
        .fd-cycle__nodes { display: flex; align-items: center; gap: 0; flex-wrap: wrap; }
        .fd-cycle__node-wrap { display: flex; align-items: center; gap: 0; }
        .fd-cycle__node { background-color: var(--surface-2); border: 1px solid var(--border-default); border-radius: var(--radius-sm); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.25rem; min-width: 100px; text-align: center; transition: border-color var(--ease-base); }
        .fd-cycle__node:hover { border-color: ${ACC_BORDER}; }
        .fd-cycle__node-num { font-family: var(--font-display); font-weight: 900; font-size: 0.625rem; letter-spacing: 0.14em; }
        .fd-cycle__node-label { font-family: var(--font-display); font-weight: 700; font-size: 0.875rem; letter-spacing: var(--tracking-display); color: var(--text-primary); }
        .fd-cycle__connector { font-size: 1rem; padding: 0 0.375rem; opacity: 0.5; flex-shrink: 0; }
        .fd-cycle__loop { font-size: 1.25rem; padding: 0 0.375rem; flex-shrink: 0; }

        /* CTA */
        .fd-cta { background-color: var(--surface-0); }
        .fd-cta__inner { position: relative; background-color: var(--surface-1); border: 1px solid ${ACC_BORDER}; border-radius: var(--radius-xl); padding: 7rem 4rem; overflow: hidden; text-align: center; }
        .fd-cta__glow { position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(14,165,233,0.12) 0%, transparent 70%); pointer-events: none; }
        .fd-cta__watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: var(--font-display); font-weight: 900; font-size: clamp(4rem, 10vw, 10rem); line-height: 1; letter-spacing: -0.06em; color: rgba(255,255,255,0.015); user-select: none; white-space: nowrap; pointer-events: none; }
        .fd-cta__content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
        .fd-cta__h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.5rem, 5vw, 5rem); line-height: var(--leading-tight); letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.5rem; }
        .fd-cta__sub { font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1.0625rem); line-height: var(--leading-relaxed); color: var(--text-secondary); max-width: 44ch; margin: 0 0 3rem; }
        .fd-cta__actions { display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
        .fd-cta__tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
        .fd-cta__tag { font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); background-color: var(--surface-2); border: 1px solid var(--border-default); border-radius: var(--radius-full); padding: 0.3rem 0.875rem; }

        /* Responsive */
        @media (max-width: 1100px) { .fd-services__grid { grid-template-columns: repeat(2, 1fr); } .fd-framework__layout { grid-template-columns: 1fr; } .fd-framework__detail { position: static; } .fd-cycle__nodes { gap: 0.5rem; } }
        @media (max-width: 960px) { .fd-hero__inner { grid-template-columns: 1fr; padding-top: calc(var(--nav-height) + 3rem); } .fd-hero__right { display: none; } .fd-services__header { grid-template-columns: 1fr; } .fd-cta__inner { padding: 4rem 2rem; } }
        @media (max-width: 640px) { .fd-services__grid { grid-template-columns: 1fr; } .fd-cycle__nodes { flex-direction: column; align-items: stretch; } .fd-cycle__connector { display: none; } .fd-cycle__loop { display: none; } }
      `}</style>
    </main>
  );
}
