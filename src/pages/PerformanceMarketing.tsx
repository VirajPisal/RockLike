import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceTileCard from "../components/ServiceTileCard";
import {
  performanceServiceCards,
  fullFunnelStages,
  demoMonthlyData,
  demoPlatformSplit,
  performanceCaseStudies,
  performanceMetrics,
  type CaseStudy,
  type FullFunnelStage,
} from "../data/performanceMarketing";

const ACC = "var(--clr-performance)";
const ACC_GLOW = "var(--clr-performance-glow)";
const ACC_BORDER = "var(--clr-performance-border)";

/* ── helpers ── */
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

/* ── Funnel Stage icon map ── */
const FUNNEL_ICONS: Record<string, React.ReactNode> = {
  broadcast: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9C2 5.134 5.134 2 9 2M2 9C2 12.866 5.134 16 9 16M9 2C12.866 2 16 5.134 16 9M9 2v14M16 9C16 12.866 12.866 16 9 16M2 9h14M4 5h10M4 13h10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>,
  cursor: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4l10 5-5 1.5-1.5 5L4 4z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  link: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7.5 10.5a3 3 0 0 0 4.243 0l2.121-2.121a3 3 0 0 0-4.243-4.243L8.5 5.257M10.5 7.5a3 3 0 0 0-4.243 0L4.136 9.621a3 3 0 0 0 4.243 4.243l1.121-1.121" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>,
  person: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.25" /><path d="M3.5 15c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>,
  cart: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 2h2l1.5 8.5h8L15 6H5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /><circle cx="7" cy="14.5" r="1" stroke="currentColor" strokeWidth="1.25" /><circle cx="13" cy="14.5" r="1" stroke="currentColor" strokeWidth="1.25" /></svg>,
  refresh: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M14.5 9A5.5 5.5 0 0 1 4.05 11.5M3.5 9A5.5 5.5 0 0 1 13.95 6.5M14 4.5V7h-2.5M4 13.5V11H6.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  trending: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 12L6.5 7 10 10 16 4M13 4h3v3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>,
};

/* ── Analytics chart ── */
const MAX_REVENUE = Math.max(...demoMonthlyData.map((d) => d.revenue));

function AnalyticsChart() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="pm-chart">
      <div className="pm-chart__y">
        {["$120k", "$90k", "$60k", "$30k", "$0"].map((l) => (
          <span key={l} className="pm-chart__y-label">{l}</span>
        ))}
      </div>
      <div className="pm-chart__bars">
        {demoMonthlyData.map((d, i) => {
          const revPct = (d.revenue / MAX_REVENUE) * 100;
          const spendPct = (d.spend / MAX_REVENUE) * 100;
          const isHov = hoveredIdx === i;
          return (
            <div key={d.month} className="pm-chart__col" onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}>
              {isHov && (
                <div className="pm-chart__tooltip">
                  <div className="pm-chart__tooltip-month">{d.month}</div>
                  <div className="pm-chart__tooltip-row" style={{ color: "var(--clr-performance)" }}>
                    <span>Revenue</span><strong>${(d.revenue / 1000).toFixed(1)}k</strong>
                  </div>
                  <div className="pm-chart__tooltip-row" style={{ color: "var(--text-secondary)" }}>
                    <span>Spend</span><strong>${(d.spend / 1000).toFixed(1)}k</strong>
                  </div>
                  <div className="pm-chart__tooltip-row" style={{ color: "var(--clr-performance)" }}>
                    <span>ROAS</span><strong>{(d.revenue / d.spend).toFixed(1)}×</strong>
                  </div>
                </div>
              )}
              <div className="pm-chart__bar-wrap">
                <div className="pm-chart__bar pm-chart__bar--revenue" style={{ height: `${revPct}%`, backgroundColor: isHov ? "var(--clr-performance)" : "rgba(5,150,105,0.65)" }} />
                <div className="pm-chart__bar pm-chart__bar--spend" style={{ height: `${spendPct}%`, backgroundColor: isHov ? "rgba(5,150,105,0.3)" : "rgba(5,150,105,0.15)" }} />
              </div>
              <span className="pm-chart__x-label">{d.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlatformBar() {
  return (
    <div className="pm-platform">
      <div className="pm-platform__bar">
        {demoPlatformSplit.map((p) => (
          <div key={p.platform} className="pm-platform__segment" style={{ width: `${p.percentage}%`, backgroundColor: p.color }} />
        ))}
      </div>
      <div className="pm-platform__legend">
        {demoPlatformSplit.map((p) => (
          <div key={p.platform} className="pm-platform__item">
            <div className="pm-platform__dot" style={{ backgroundColor: p.color }} />
            <div className="pm-platform__info">
              <span className="pm-platform__name">{p.platform}</span>
              <div className="pm-platform__row">
                <span className="pm-platform__pct">{p.percentage}%</span>
                <span className="pm-platform__spend">{p.spend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <article className="pm-cs">
      <div className="pm-cs__img-wrap">
        <img src={cs.image} alt={cs.client} className="pm-cs__img" />
        <div className="pm-cs__img-overlay" aria-hidden />
        <div className="pm-cs__badge">{cs.industry}</div>
      </div>
      <div className="pm-cs__body">
        <p className="pm-cs__client">{cs.client}</p>
        <h3 className="pm-cs__title">{cs.title}</h3>
        <p className="pm-cs__challenge">{cs.result}</p>
        <div className="pm-cs__metrics">
          {cs.metrics.map((m) => (
            <div key={m.label} className="pm-cs__metric">
              <span className="pm-cs__metric-val">{m.value}</span>
              <span className="pm-cs__metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function FunnelRow({ stage, isActive, onClick }: { stage: FullFunnelStage; isActive: boolean; onClick: () => void }) {
  return (
    <button className={`pm-funnel__row${isActive ? " pm-funnel__row--active" : ""}`} onClick={onClick}>
      <div className="pm-funnel__row-left">
        <div className="pm-funnel__step-num">{String(stage.step).padStart(2, "0")}</div>
        <div className="pm-funnel__icon" style={{ color: isActive ? "var(--clr-performance)" : "var(--text-muted)" }}>
          {FUNNEL_ICONS[stage.icon]}
        </div>
        <span className="pm-funnel__row-label">{stage.label}</span>
      </div>
      <div className="pm-funnel__bar-wrap">
        <div className="pm-funnel__bar" style={{ width: `${stage.widthPct}%`, backgroundColor: isActive ? "var(--clr-performance)" : "var(--surface-3)" }} />
      </div>
      <span className="pm-funnel__metric">{stage.metric}</span>
      <svg className="pm-funnel__chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: isActive ? "rotate(180deg)" : "none", transition: "transform var(--ease-base)" }}>
        <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function PerformanceMarketing() {
  const [activeFunnelIdx, setActiveFunnelIdx] = useState(0);
  const activeStage = fullFunnelStages[activeFunnelIdx];

  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="pm-hero">
        <div className="pm-hero__bg" aria-hidden>
          <div className="pm-hero__grid" />
          <div className="pm-hero__glow pm-hero__glow--green" />
          <div className="pm-hero__glow pm-hero__glow--tl" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "1.5rem" }}>
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Performance Marketing" }]} accent={ACC} />
        </div>

        <div className="container pm-hero__inner">
          <div className="pm-hero__left">
            <Eyebrow>Performance Marketing &amp; Growth</Eyebrow>

            <h1 className="pm-hero__h1">
              Turn Attention Into<br />
              <span style={{ color: ACC }}>Measurable Growth.</span>
            </h1>

            <p className="pm-hero__sub">
              Data-driven paid media across every growth channel. We engineer full-funnel campaigns that convert strangers into customers and customers into revenue — measurably, repeatably, at scale.
            </p>

            <div className="pm-hero__metrics">
              {performanceMetrics.map((m) => (
                <div key={m.id} className="pm-hero__metric">
                  <span className="pm-hero__metric-val">{m.value}</span>
                  <span className="pm-hero__metric-label">{m.label}</span>
                  <span className="pm-hero__metric-delta" style={{ color: ACC }}>{m.delta}</span>
                </div>
              ))}
            </div>

            <div className="pm-hero__actions">
              <Link to="/contact" className="pm-btn pm-btn--primary">
                Start Growing
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <a href="#funnel" className="pm-btn pm-btn--ghost">
                See Our Funnel
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M7 11L3 7M7 11L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>

          {/* Right — floating metric display */}
          <div className="pm-hero__right" aria-hidden>
            <div className="pm-hero__card pm-hero__card--main">
              <div className="pm-hero__card-header">
                <span className="pm-hero__rec" />
                <span className="pm-hero__card-label">Live Campaign Performance</span>
                <span className="pm-hero__card-badge">DEMO</span>
              </div>
              <div className="pm-hero__card-row">
                <div className="pm-hero__card-stat">
                  <span className="pm-hero__card-val" style={{ color: ACC }}>6.2×</span>
                  <span className="pm-hero__card-desc">Current ROAS</span>
                </div>
                <div className="pm-hero__card-divider" />
                <div className="pm-hero__card-stat">
                  <span className="pm-hero__card-val">↑ 38%</span>
                  <span className="pm-hero__card-desc">CVR lift</span>
                </div>
                <div className="pm-hero__card-divider" />
                <div className="pm-hero__card-stat">
                  <span className="pm-hero__card-val">$1.40</span>
                  <span className="pm-hero__card-desc">Avg CPC</span>
                </div>
              </div>
              <div className="pm-hero__mini-bars">
                {demoMonthlyData.map((d) => (
                  <div key={d.month} className="pm-hero__mini-bar-wrap">
                    <div className="pm-hero__mini-bar" style={{ height: `${(d.revenue / MAX_REVENUE) * 100}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="pm-hero__card pm-hero__card--sm pm-hero__card--tl">
              <span className="pm-hero__card-sm-val">{performanceCaseStudies[0].metrics[2].value}</span>
              <span className="pm-hero__card-sm-label">Revenue up — {performanceCaseStudies[0].client}</span>
            </div>
            <div className="pm-hero__card pm-hero__card--sm pm-hero__card--br">
              <span className="pm-hero__card-sm-val" style={{ color: ACC }}>$48M+</span>
              <span className="pm-hero__card-sm-label">Revenue Attributed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9 SERVICE TILES
      ══════════════════════════════════════════ */}
      <section id="services" className="pm-services section">
        <div className="container">
          <div className="pm-services__header">
            <div>
              <Eyebrow>What We Run</Eyebrow>
              <SectionTitle>9 Channels.{" "}<span style={{ color: "var(--text-secondary)" }}>One Growth System.</span></SectionTitle>
            </div>
            <p className="pm-services__sub">
              We do not offer services in isolation. Every channel we manage is part of a coordinated system — designed to work together, compete on the same metrics, and scale as a single profitable machine.
            </p>
          </div>
          <div className="pm-services__grid">
            {performanceServiceCards.map((card) => (
              <ServiceTileCard key={card.id} card={card} accent={ACC} accentGlow={ACC_GLOW} accentBorder={ACC_BORDER} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FULL FUNNEL
      ══════════════════════════════════════════ */}
      <section id="funnel" className="pm-funnel-section section">
        <div className="container">
          <div className="pm-funnel-section__header">
            <Eyebrow>The Growth Funnel</Eyebrow>
            <SectionTitle>
              From First Impression<br />
              <span style={{ color: ACC }}>to Loyal Customer.</span>
            </SectionTitle>
            <p className="pm-funnel-section__sub">
              We engineer every stage of the funnel — so no prospective customer falls through the cracks. Click any stage to see how we activate it.
            </p>
          </div>

          <div className="pm-funnel">
            <div className="pm-funnel__rows">
              {fullFunnelStages.map((stage, i) => (
                <FunnelRow key={stage.id} stage={stage} isActive={activeFunnelIdx === i} onClick={() => setActiveFunnelIdx(i)} />
              ))}
            </div>

            <div className="pm-funnel__detail">
              <div className="pm-funnel__detail-glow" aria-hidden />
              <div className="pm-funnel__detail-step">{String(activeStage.step).padStart(2, "0")}</div>
              <div className="pm-funnel__detail-icon" style={{ color: ACC }}>
                {FUNNEL_ICONS[activeStage.icon]}
              </div>
              <h3 className="pm-funnel__detail-label" style={{ color: ACC }}>{activeStage.label}</h3>
              <p className="pm-funnel__detail-desc">{activeStage.description}</p>
              <div className="pm-funnel__detail-block">
                <p className="pm-funnel__detail-block-label">How We Do It</p>
                <p className="pm-funnel__detail-tactic">{activeStage.tactic}</p>
              </div>
              <div className="pm-funnel__detail-metric-wrap">
                <span className="pm-funnel__detail-metric-val">{activeStage.metric}</span>
                <span className="pm-funnel__detail-metric-label">Benchmark</span>
              </div>
              <div className="pm-funnel__shape-wrap">
                <div className="pm-funnel__shape-bar" style={{ width: `${activeStage.widthPct}%` }} />
                <span className="pm-funnel__shape-pct">{activeStage.widthPct}% of Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ANALYTICS DEMO
      ══════════════════════════════════════════ */}
      <section className="pm-analytics section">
        <div className="container">
          <div className="pm-analytics__disclaimer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1a6 6 0 1 0 0 12A6 6 0 0 0 7 1zm0 4v3m0 2h.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>
            <span>The data shown below is illustrative demo data only — it does not represent any specific client account.</span>
          </div>

          <div className="pm-analytics__header">
            <div>
              <Eyebrow>Campaign Analytics</Eyebrow>
              <SectionTitle>
                What Compounding<br />
                <span style={{ color: ACC }}>Growth Looks Like.</span>
              </SectionTitle>
            </div>
            <div className="pm-analytics__kpis">
              {[["$124.2k", "Peak Month Revenue"], ["15.3×", "Revenue / Spend Ratio"], ["41%", "CPA Reduction"]].map(([v, l]) => (
                <div key={l} className="pm-analytics__kpi">
                  <span className="pm-analytics__kpi-val" style={{ color: ACC }}>{v}</span>
                  <span className="pm-analytics__kpi-label">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pm-analytics__grid">
            <div className="pm-analytics__panel pm-analytics__panel--chart">
              <div className="pm-analytics__panel-header">
                <h3 className="pm-analytics__panel-title">Revenue vs. Ad Spend — 6 Month Growth</h3>
                <div className="pm-analytics__legend">
                  <span className="pm-analytics__legend-dot" style={{ backgroundColor: "var(--clr-performance)" }} />
                  <span className="pm-analytics__legend-label">Revenue</span>
                  <span className="pm-analytics__legend-dot" style={{ backgroundColor: "rgba(5,150,105,0.25)" }} />
                  <span className="pm-analytics__legend-label">Ad Spend</span>
                </div>
              </div>
              <AnalyticsChart />
            </div>

            <div className="pm-analytics__panel pm-analytics__panel--split">
              <div className="pm-analytics__panel-header">
                <h3 className="pm-analytics__panel-title">Budget Allocation by Platform</h3>
                <span className="pm-analytics__panel-total">$46k / mo total</span>
              </div>
              <PlatformBar />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CASE STUDIES
      ══════════════════════════════════════════ */}
      <section className="pm-cases section">
        <div className="container">
          <div className="pm-cases__header">
            <Eyebrow>Case Studies</Eyebrow>
            <SectionTitle>Accounts We&apos;ve Turned Around.</SectionTitle>
          </div>
          <div className="pm-cases__grid">
            {performanceCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="pm-cta section">
        <div className="container">
          <div className="pm-cta__inner">
            <div className="pm-cta__glow" aria-hidden />
            <div className="pm-cta__watermark" aria-hidden>GROW</div>
            <div className="pm-cta__content">
              <Eyebrow>Start Performing</Eyebrow>
              <h2 className="pm-cta__h2">
                Ready to Turn<br />
                <span style={{ color: ACC }}>Spend Into Revenue?</span>
              </h2>
              <p className="pm-cta__sub">
                We take on clients where we believe we can move the needle. Tell us your current situation and we will figure out whether we are the right fit.
              </p>
              <div className="pm-cta__actions">
                <Link to="/contact" className="pm-btn pm-btn--primary pm-btn--lg">
                  Get a Free Account Audit
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link to="/services" className="pm-btn pm-btn--outline">All Services</Link>
              </div>
              <div className="pm-cta__channels">
                {["Google Ads", "Meta Ads", "YouTube", "Lead Gen", "Retargeting", "Analytics"].map((t) => (
                  <span key={t} className="pm-cta__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .pm-btn {
          display: inline-flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: var(--radius-sm); text-decoration: none;
          transition: all var(--ease-base); white-space: nowrap;
          border: none; cursor: pointer;
        }
        .pm-btn--primary {
          background-color: var(--clr-performance); color: #fff;
          padding: 0.875rem 1.875rem;
          box-shadow: 0 0 24px var(--clr-performance-glow);
        }
        .pm-btn--primary:hover { opacity: 0.88; }
        .pm-btn--lg { padding: 1.125rem 2.5rem; font-size: 0.875rem; }
        .pm-btn--ghost {
          background: transparent; color: var(--text-muted);
          padding: 0.875rem 1.5rem; border: 1px solid var(--border-strong);
        }
        .pm-btn--ghost:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.25); }
        .pm-btn--outline {
          background: transparent; color: var(--clr-performance);
          padding: 1.125rem 2rem; border: 1.5px solid var(--clr-performance);
        }
        .pm-btn--outline:hover { background-color: var(--clr-performance); color: #fff; }

        /* Hero */
        .pm-hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center;
          overflow: hidden; background-color: var(--surface-0);
        }
        .pm-hero__bg { position: absolute; inset: 0; pointer-events: none; }
        .pm-hero__grid {
          position: absolute; inset: 0; opacity: 0.035;
          background-image: linear-gradient(var(--border-default) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border-default) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .pm-hero__glow { position: absolute; border-radius: 50%; }
        .pm-hero__glow--green {
          bottom: -15%; right: 5%; width: 55vw; height: 55vw; max-width: 700px;
          background: radial-gradient(circle, rgba(5,150,105,0.1) 0%, transparent 65%);
        }
        .pm-hero__glow--tl {
          top: -10%; left: 25%; width: 40vw; height: 40vw; max-width: 500px;
          background: radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 65%);
        }
        .pm-hero__inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
          padding-top: calc(var(--nav-height) + 5rem); padding-bottom: 5rem;
          position: relative; z-index: 1; width: 100%;
        }
        .pm-hero__left { display: flex; flex-direction: column; }
        .pm-hero__h1 {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(2.75rem, 5vw, 5.5rem);
          line-height: var(--leading-tight); letter-spacing: var(--tracking-display);
          color: var(--text-primary); margin: 0 0 1.5rem;
        }
        .pm-hero__sub {
          font-family: var(--font-body); font-size: clamp(0.9375rem, 1.4vw, 1.0625rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary);
          max-width: 46ch; margin: 0 0 2rem;
        }
        .pm-hero__metrics {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem 2rem;
          margin-bottom: 2.5rem;
        }
        .pm-hero__metric { display: flex; flex-direction: column; gap: 0.15rem; }
        .pm-hero__metric-val {
          font-family: var(--font-display); font-weight: 900; font-size: 1.75rem;
          line-height: 1; color: var(--text-primary); letter-spacing: var(--tracking-tight);
        }
        .pm-hero__metric-label {
          font-family: var(--font-fine); font-size: 0.625rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted);
        }
        .pm-hero__metric-delta {
          font-family: var(--font-fine); font-size: 0.625rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .pm-hero__actions { display: flex; align-items: center; gap: 0.875rem; flex-wrap: wrap; }

        /* floating cards */
        .pm-hero__right { position: relative; height: 360px; }
        .pm-hero__card {
          position: absolute; background-color: var(--surface-1);
          border: 1px solid var(--border-default); border-radius: var(--radius-md);
        }
        .pm-hero__card--main {
          inset: 0; display: flex; flex-direction: column; gap: 1rem; padding: 1.5rem;
          box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--clr-performance-border);
        }
        .pm-hero__card-header {
          display: flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.625rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted);
        }
        .pm-hero__rec {
          width: 6px; height: 6px; border-radius: 50%;
          background-color: var(--clr-performance);
          box-shadow: 0 0 6px var(--clr-performance);
          animation: pmBlink 1.8s ease-in-out infinite;
        }
        @keyframes pmBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .pm-hero__card-badge {
          margin-left: auto; font-family: var(--font-fine); font-size: 0.5rem;
          font-weight: 800; letter-spacing: 0.14em; color: var(--clr-performance);
          border: 1px solid var(--clr-performance-border); border-radius: 2px;
          padding: 0.15rem 0.4rem;
        }
        .pm-hero__card-row { display: flex; align-items: center; gap: 1.25rem; }
        .pm-hero__card-stat { display: flex; flex-direction: column; gap: 0.2rem; }
        .pm-hero__card-val {
          font-family: var(--font-display); font-weight: 900; font-size: 1.75rem;
          line-height: 1; color: var(--text-primary); letter-spacing: var(--tracking-tight);
        }
        .pm-hero__card-desc {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted);
        }
        .pm-hero__card-divider { width: 1px; height: 3rem; background-color: var(--border-default); }
        .pm-hero__mini-bars {
          display: flex; align-items: flex-end; gap: 4px; height: 4rem;
          border-top: 1px solid var(--border-default); padding-top: 0.75rem;
        }
        .pm-hero__mini-bar-wrap { flex: 1; display: flex; align-items: flex-end; height: 100%; }
        .pm-hero__mini-bar { width: 100%; background-color: var(--clr-performance); border-radius: 2px 2px 0 0; opacity: 0.7; }
        .pm-hero__card--sm {
          display: flex; flex-direction: column; gap: 0.25rem;
          padding: 0.875rem 1.25rem; z-index: 10;
        }
        .pm-hero__card--tl { top: -1.5rem; left: -2rem; }
        .pm-hero__card--br { bottom: -1.5rem; right: -1.5rem; }
        .pm-hero__card-sm-val {
          font-family: var(--font-display); font-weight: 900; font-size: 1.5rem;
          line-height: 1; color: var(--text-primary);
        }
        .pm-hero__card-sm-label {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); max-width: 12ch;
        }

        /* Services */
        .pm-services { background-color: var(--surface-0); }
        .pm-services__header {
          display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;
          align-items: flex-end; margin-bottom: 3.5rem;
        }
        .pm-services__sub {
          font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0;
        }
        .pm-services__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.125rem; }

        /* Funnel */
        .pm-funnel-section { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .pm-funnel-section__header { max-width: 52ch; margin-bottom: 3.5rem; }
        .pm-funnel-section__sub {
          font-family: var(--font-body); font-size: 1rem; line-height: var(--leading-relaxed);
          color: var(--text-secondary); margin: 1.25rem 0 0;
        }
        .pm-funnel { display: grid; grid-template-columns: 1fr 340px; gap: 2.5rem; align-items: start; }
        .pm-funnel__rows { display: flex; flex-direction: column; gap: 0.5rem; }
        .pm-funnel__row {
          display: grid; grid-template-columns: 200px 1fr 160px 20px;
          align-items: center; gap: 1rem;
          background: none; border: 1px solid var(--border-default);
          border-radius: var(--radius-sm); padding: 1rem 1.25rem;
          cursor: pointer; text-align: left;
          transition: all var(--ease-base);
        }
        .pm-funnel__row:hover { border-color: var(--clr-performance-border); background-color: var(--surface-2); }
        .pm-funnel__row--active {
          border-color: var(--clr-performance-border) !important;
          background-color: rgba(5,150,105,0.06) !important;
          box-shadow: 0 0 0 1px var(--clr-performance-border), 0 0 40px var(--clr-performance-glow);
        }
        .pm-funnel__row-left { display: flex; align-items: center; gap: 0.875rem; }
        .pm-funnel__step-num {
          font-family: var(--font-display); font-weight: 900; font-size: 0.75rem;
          letter-spacing: 0.1em; color: var(--text-muted); min-width: 1.5rem;
        }
        .pm-funnel__icon { display: flex; align-items: center; flex-shrink: 0; }
        .pm-funnel__row-label {
          font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem;
          letter-spacing: var(--tracking-display); color: var(--text-primary);
        }
        .pm-funnel__bar-wrap {
          background-color: var(--surface-0); border-radius: var(--radius-xs); height: 6px; overflow: hidden;
        }
        .pm-funnel__bar { height: 100%; border-radius: var(--radius-xs); transition: width var(--ease-slow), background-color var(--ease-base); }
        .pm-funnel__metric {
          font-family: var(--font-fine); font-size: 0.75rem; font-weight: 600;
          color: var(--text-secondary); text-align: right; white-space: nowrap;
        }
        .pm-funnel__chevron { color: var(--text-muted); flex-shrink: 0; }
        .pm-funnel__detail {
          position: sticky; top: calc(var(--nav-height) + 2rem);
          background-color: var(--surface-2); border: 1px solid var(--clr-performance-border);
          border-radius: var(--radius-lg); padding: 2rem; overflow: hidden;
          display: flex; flex-direction: column; gap: 1rem;
        }
        .pm-funnel__detail-glow {
          position: absolute; top: 0; left: 0; right: 0; height: 50%;
          background: radial-gradient(ellipse at top, var(--clr-performance-glow), transparent 70%);
          pointer-events: none;
        }
        .pm-funnel__detail-step {
          position: absolute; top: 1.25rem; right: 1.5rem;
          font-family: var(--font-display); font-weight: 900; font-size: 5rem;
          line-height: 1; color: rgba(255,255,255,0.04); user-select: none; pointer-events: none;
        }
        .pm-funnel__detail-icon {
          display: flex; align-items: center; justify-content: center;
          width: 2.5rem; height: 2.5rem; border-radius: var(--radius-sm);
          border: 1px solid var(--clr-performance-border);
          background-color: var(--clr-performance-glow); position: relative; z-index: 1;
        }
        .pm-funnel__detail-label {
          font-family: var(--font-display); font-weight: 900; font-size: 1.5rem;
          letter-spacing: var(--tracking-display); margin: 0; position: relative; z-index: 1;
        }
        .pm-funnel__detail-desc {
          font-family: var(--font-body); font-size: 0.9375rem; line-height: var(--leading-relaxed);
          color: var(--text-secondary); margin: 0; position: relative; z-index: 1;
        }
        .pm-funnel__detail-block {
          background-color: var(--surface-0); border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle); padding: 0.875rem 1rem; position: relative; z-index: 1;
        }
        .pm-funnel__detail-block-label {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin: 0 0 0.375rem;
        }
        .pm-funnel__detail-tactic {
          font-family: var(--font-body); font-size: 0.8125rem; line-height: var(--leading-relaxed);
          color: var(--text-secondary); margin: 0;
        }
        .pm-funnel__detail-metric-wrap {
          display: flex; flex-direction: column; gap: 0.15rem; position: relative; z-index: 1;
        }
        .pm-funnel__detail-metric-val {
          font-family: var(--font-display); font-weight: 900; font-size: 2rem;
          line-height: 1; color: var(--clr-performance); letter-spacing: var(--tracking-tight);
        }
        .pm-funnel__detail-metric-label {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted);
        }
        .pm-funnel__shape-wrap { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 0.375rem; }
        .pm-funnel__shape-bar {
          height: 4px; background-color: var(--clr-performance); border-radius: var(--radius-full);
          opacity: 0.5; transition: width var(--ease-slow);
        }
        .pm-funnel__shape-pct {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600; color: var(--text-muted);
        }

        /* Analytics */
        .pm-analytics { background-color: var(--surface-0); }
        .pm-analytics__disclaimer {
          display: flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600;
          background-color: rgba(5,150,105,0.08); border: 1px solid var(--clr-performance-border);
          border-radius: var(--radius-sm); padding: 0.625rem 1rem; margin-bottom: 3rem;
          color: rgba(5,150,105,0.9);
        }
        .pm-analytics__header {
          display: grid; grid-template-columns: 1fr auto; gap: 3rem;
          align-items: center; margin-bottom: 3rem;
        }
        .pm-analytics__kpis { display: flex; gap: 2.5rem; }
        .pm-analytics__kpi { display: flex; flex-direction: column; align-items: flex-end; gap: 0.15rem; }
        .pm-analytics__kpi-val {
          font-family: var(--font-display); font-weight: 900; font-size: 2rem;
          line-height: 1; letter-spacing: var(--tracking-tight);
        }
        .pm-analytics__kpi-label {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); text-align: right;
        }
        .pm-analytics__grid { display: grid; grid-template-columns: 1fr 320px; gap: 1.5rem; }
        .pm-analytics__panel {
          background-color: var(--surface-1); border: 1px solid var(--border-default);
          border-radius: var(--radius-lg); padding: 2rem;
        }
        .pm-analytics__panel-header {
          display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;
        }
        .pm-analytics__panel-title {
          font-family: var(--font-display); font-weight: 700; font-size: 1rem;
          letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0;
        }
        .pm-analytics__panel-total {
          font-family: var(--font-fine); font-size: 0.625rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted);
        }
        .pm-analytics__legend {
          display: flex; align-items: center; gap: 0.625rem;
          font-family: var(--font-fine); font-size: 0.625rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted);
        }
        .pm-analytics__legend-dot { width: 8px; height: 8px; border-radius: 2px; flex-shrink: 0; }
        .pm-analytics__legend-label { margin-right: 0.5rem; }

        /* Chart */
        .pm-chart { display: flex; gap: 0.75rem; height: 200px; }
        .pm-chart__y {
          display: flex; flex-direction: column; justify-content: space-between;
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 500;
          color: var(--text-disabled); text-align: right; padding-bottom: 1.5rem; flex-shrink: 0;
        }
        .pm-chart__bars { flex: 1; display: flex; align-items: flex-end; gap: 0.625rem; }
        .pm-chart__col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.375rem; position: relative; }
        .pm-chart__tooltip {
          position: absolute; bottom: calc(100% + 0.5rem); left: 50%; transform: translateX(-50%);
          background-color: var(--surface-0); border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm); padding: 0.625rem 0.875rem; z-index: 10;
          white-space: nowrap; min-width: 120px; box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        }
        .pm-chart__tooltip-month {
          font-family: var(--font-display); font-weight: 700; font-size: 0.75rem;
          letter-spacing: 0.1em; color: var(--text-primary); margin-bottom: 0.375rem; text-transform: uppercase;
        }
        .pm-chart__tooltip-row {
          display: flex; justify-content: space-between; gap: 1rem;
          font-family: var(--font-fine); font-size: 0.625rem; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.15rem;
        }
        .pm-chart__bar-wrap {
          flex: 1; width: 100%; display: flex; align-items: flex-end; gap: 3px;
          border-bottom: 1px solid var(--border-default);
        }
        .pm-chart__bar { flex: 1; border-radius: 3px 3px 0 0; transition: all var(--ease-base); }
        .pm-chart__x-label {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted);
        }

        /* Platform bar */
        .pm-platform { display: flex; flex-direction: column; gap: 1.5rem; }
        .pm-platform__bar { display: flex; height: 8px; border-radius: var(--radius-full); overflow: hidden; gap: 2px; }
        .pm-platform__segment { border-radius: var(--radius-full); }
        .pm-platform__legend { display: flex; flex-direction: column; gap: 0.875rem; }
        .pm-platform__item { display: flex; align-items: center; gap: 0.875rem; }
        .pm-platform__dot { width: 8px; height: 8px; border-radius: 2px; flex-shrink: 0; }
        .pm-platform__info { flex: 1; }
        .pm-platform__name { font-family: var(--font-body); font-size: 0.875rem; color: var(--text-primary); display: block; margin-bottom: 0.15rem; }
        .pm-platform__row { display: flex; justify-content: space-between; }
        .pm-platform__pct { font-family: var(--font-fine); font-size: 0.625rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-secondary); }
        .pm-platform__spend { font-family: var(--font-fine); font-size: 0.625rem; font-weight: 500; letter-spacing: 0.08em; color: var(--text-muted); }

        /* Case studies */
        .pm-cases { background-color: var(--surface-1); border-top: 1px solid var(--border-default); }
        .pm-cases__header { margin-bottom: 3rem; }
        .pm-cases__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .pm-cs {
          background-color: var(--surface-2); border: 1px solid var(--border-default);
          border-radius: var(--radius-lg); overflow: hidden;
          transition: transform var(--ease-base), box-shadow var(--ease-base), border-color var(--ease-base);
        }
        .pm-cs:hover {
          transform: translateY(-5px); border-color: var(--clr-performance-border);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 60px var(--clr-performance-glow);
        }
        .pm-cs__img-wrap { position: relative; aspect-ratio: 16/9; overflow: hidden; }
        .pm-cs__img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--ease-slow); }
        .pm-cs:hover .pm-cs__img { transform: scale(1.05); }
        .pm-cs__img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%);
        }
        .pm-cs__badge {
          position: absolute; top: 1rem; left: 1rem;
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--clr-performance);
          background-color: rgba(5,150,105,0.15); border: 1px solid var(--clr-performance-border);
          border-radius: var(--radius-xs); padding: 0.3rem 0.625rem;
        }
        .pm-cs__body { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; }
        .pm-cs__client {
          font-family: var(--font-fine); font-size: 0.625rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin: 0;
        }
        .pm-cs__title {
          font-family: var(--font-display); font-weight: 900; font-size: 1.5rem;
          letter-spacing: var(--tracking-display); color: var(--text-primary);
          line-height: var(--leading-snug); margin: 0;
        }
        .pm-cs__challenge {
          font-family: var(--font-body); font-size: 0.875rem; line-height: var(--leading-relaxed);
          color: var(--text-secondary); margin: 0;
        }
        .pm-cs__metrics {
          display: flex; gap: 1rem; padding-top: 0.875rem; border-top: 1px solid var(--border-default);
        }
        .pm-cs__metric { display: flex; flex-direction: column; gap: 0.15rem; flex: 1; }
        .pm-cs__metric-val {
          font-family: var(--font-display); font-weight: 900; font-size: 1.375rem;
          line-height: 1; color: var(--clr-performance); letter-spacing: var(--tracking-tight);
        }
        .pm-cs__metric-label {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted);
        }

        /* CTA */
        .pm-cta { background-color: var(--surface-0); }
        .pm-cta__inner {
          position: relative; background-color: var(--surface-1);
          border: 1px solid var(--clr-performance-border); border-radius: var(--radius-xl);
          padding: 7rem 4rem; overflow: hidden; text-align: center;
        }
        .pm-cta__glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(5,150,105,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .pm-cta__watermark {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(8rem, 18vw, 18rem); line-height: 1;
          letter-spacing: -0.06em; color: rgba(255,255,255,0.015);
          user-select: none; white-space: nowrap; pointer-events: none;
        }
        .pm-cta__content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
        .pm-cta__h2 {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(2.5rem, 5.5vw, 5.5rem); line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display); color: var(--text-primary); margin: 0 0 1.5rem;
        }
        .pm-cta__sub {
          font-family: var(--font-body); font-size: clamp(0.9375rem, 1.25vw, 1.0625rem);
          line-height: var(--leading-relaxed); color: var(--text-secondary);
          max-width: 50ch; margin: 0 0 3rem;
        }
        .pm-cta__actions { display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
        .pm-cta__channels { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }
        .pm-cta__tag {
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-muted); background-color: var(--surface-2);
          border: 1px solid var(--border-default); border-radius: var(--radius-full);
          padding: 0.3rem 0.875rem;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .pm-services__grid { grid-template-columns: repeat(2, 1fr); }
          .pm-funnel { grid-template-columns: 1fr; }
          .pm-funnel__detail { position: static; }
          .pm-analytics__grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 960px) {
          .pm-hero__inner { grid-template-columns: 1fr; padding-top: calc(var(--nav-height) + 3rem); }
          .pm-hero__right { display: none; }
          .pm-services__header { grid-template-columns: 1fr; }
          .pm-analytics__header { grid-template-columns: 1fr; }
          .pm-analytics__kpis { flex-wrap: wrap; justify-content: flex-start; }
          .pm-analytics__kpi { align-items: flex-start; }
          .pm-analytics__kpi-label { text-align: left; }
          .pm-cases__grid { grid-template-columns: repeat(2, 1fr); }
          .pm-funnel__row { grid-template-columns: 160px 1fr 100px 20px; }
          .pm-cta__inner { padding: 4rem 2rem; }
        }
        @media (max-width: 640px) {
          .pm-services__grid { grid-template-columns: 1fr; }
          .pm-cases__grid { grid-template-columns: 1fr; }
          .pm-hero__metrics { grid-template-columns: 1fr 1fr; }
          .pm-funnel__row { grid-template-columns: 1fr auto; }
          .pm-funnel__bar-wrap { display: none; }
          .pm-funnel__step-num { display: none; }
        }
      `}</style>
    </main>
  );
}
