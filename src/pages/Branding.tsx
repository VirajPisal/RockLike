import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceTileCard from "../components/ServiceTileCard";
import PortfolioCard from "../components/PortfolioCard";
import { brandingCards, brandingProcess, brandingShowcase } from "../data/branding";
import { portfolioItems } from "../data/portfolio";

const brandingPortfolio = portfolioItems.filter((p) => p.category === "Branding");

const ACC = "var(--clr-branding)";
const ACC_GLOW = "var(--clr-branding-glow)";

/* ─── Small reusable inline components ─── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="bd-eyebrow">
      <span className="bd-eyebrow__line" />
      <span className="bd-eyebrow__text">{children}</span>
    </div>
  );
}

function SectionTitle({ children, muted }: { children: React.ReactNode; muted?: string }) {
  return (
    <h2 className="bd-section-title">
      {children}
      {muted && <span className="bd-section-title--muted"> {muted}</span>}
    </h2>
  );
}

/* ─── Page ─── */
export default function Branding() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="bd-hero">
        {/* Background layers */}
        <div className="bd-hero__bg" aria-hidden>
          <div className="bd-hero__grid" />
          <div className="bd-hero__glow bd-hero__glow--tl" />
          <div className="bd-hero__glow bd-hero__glow--br" />
        </div>

        <div className="container bd-hero__inner">
          {/* Left column */}
          <div className="bd-hero__left">
            <Eyebrow>Branding Solutions</Eyebrow>

            <h1 className="bd-hero__h1">
              Branding Solutions That Make You{" "}
              <span className="bd-hero__h1-accent">Unforgettable.</span>
            </h1>

            <p className="bd-hero__sub">
              Your brand is the first thing people feel and the last thing they
              forget. We build identity systems rooted in strategy, crafted with
              precision, and designed to compound in value over time.
            </p>

            {/* Trust pills */}
            <div className="bd-hero__pills">
              {["240+ Brands Built", "09+ Years", "Strategy-Led Process"].map((p) => (
                <span key={p} className="bd-hero__pill">{p}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="bd-hero__actions">
              <Link to="/contact" className="bd-btn bd-btn--primary">
                Start a Branding Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a href="#services" className="bd-btn bd-btn--ghost">
                Explore Services
              </a>
            </div>
          </div>

          {/* Right column — hero image */}
          <div className="bd-hero__right">
            <div className="bd-hero__img-frame">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop&auto=format"
                alt="Premium branding mockup showing identity system"
                className="bd-hero__img"
              />
              {/* Image overlay */}
              <div className="bd-hero__img-overlay" aria-hidden />

              {/* Floating stat card — bottom left */}
              <div className="bd-hero__float bd-hero__float--bl">
                <p className="bd-hero__float-val">240+</p>
                <p className="bd-hero__float-label">Brands Launched</p>
              </div>

              {/* Floating tag — top right */}
              <div className="bd-hero__float bd-hero__float--tr">
                <span className="bd-hero__float-tag-dot" />
                <span className="bd-hero__float-tag-text">Brand Identity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container" style={{ paddingTop: "2rem", paddingBottom: "0.5rem" }}>
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: "Branding" },
          ]}
          accent={ACC}
        />
      </div>

      {/* ══════════════════════════════════════════
          8-CARD SERVICES GRID
      ══════════════════════════════════════════ */}
      <section id="services" className="bd-services section">
        <div className="container">
          <div className="bd-services__header">
            <div>
              <Eyebrow>Our Branding Services</Eyebrow>
              <SectionTitle muted="to Transform Your Brand.">
                Eight Ways
              </SectionTitle>
            </div>
            <p className="bd-services__sub">
              From logo design to full rebrand strategy — every branding
              discipline under one roof, executed to the same uncompromising
              standard.
            </p>
          </div>

          <div className="bd-services__grid">
            {brandingCards.map((card) => (
              <ServiceTileCard key={card.id} card={card} accent="var(--clr-branding)" accentGlow="var(--clr-branding-glow)" accentBorder="var(--clr-branding-border)" />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS — Discover → Define → Design → Develop → Deploy
      ══════════════════════════════════════════ */}
      <section className="bd-process section">
        <div className="container">
          <div className="bd-process__header">
            <Eyebrow>How We Work</Eyebrow>
            <SectionTitle>How We Build Your Brand.</SectionTitle>
            <p className="bd-process__sub">
              A structured five-phase engagement. Enough rigour to produce
              exceptional work. Enough flexibility to move at your pace.
            </p>
          </div>

          {/* Timeline nav */}
          <div className="bd-process__nav">
            {brandingProcess.map((step, i) => (
              <button
                key={step.step}
                className={`bd-process__nav-btn ${activeStep === i ? "bd-process__nav-btn--active" : ""}`}
                onClick={() => setActiveStep(i)}
                style={{
                  color: activeStep === i ? "#fff" : "var(--text-muted)",
                  backgroundColor: activeStep === i ? ACC : "transparent",
                  borderColor: activeStep === i ? ACC : "var(--border-default)",
                }}
              >
                <span className="bd-process__nav-num">{String(step.step).padStart(2, "0")}</span>
                <span className="bd-process__nav-phase">{step.phase}</span>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          {brandingProcess.map((step, i) => (
            <div
              key={step.step}
              className="bd-process__detail"
              style={{ display: activeStep === i ? "grid" : "none" }}
            >
              {/* Left */}
              <div className="bd-process__detail-left">
                <p className="bd-process__step-num">{String(step.step).padStart(2, "0")}</p>
                <p className="bd-process__phase-label" style={{ color: ACC }}>{step.phase}</p>
                <h3 className="bd-process__step-title">{step.title}</h3>
                <p className="bd-process__step-desc">{step.description}</p>
                <div className="bd-process__duration">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke={ACC} strokeWidth="1.2" />
                    <path d="M6 3V6L8 8" stroke={ACC} strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span>{step.duration}</span>
                </div>
              </div>

              {/* Right — outputs */}
              <div className="bd-process__detail-right">
                <p className="bd-process__outputs-label">Key Outputs</p>
                <ul className="bd-process__outputs">
                  {step.outputs.map((o) => (
                    <li key={o} className="bd-process__output">
                      <span className="bd-process__output-dot" style={{ backgroundColor: ACC }} />
                      {o}
                    </li>
                  ))}
                </ul>

                {/* Phase progress indicator */}
                <div className="bd-process__progress">
                  {brandingProcess.map((_, pi) => (
                    <button
                      key={pi}
                      aria-label={`Go to step ${pi + 1}`}
                      onClick={() => setActiveStep(pi)}
                      className="bd-process__progress-pip"
                      style={{
                        backgroundColor: pi <= activeStep ? ACC : "var(--surface-3)",
                        width: pi === activeStep ? "1.5rem" : "0.375rem",
                      }}
                    />
                  ))}
                </div>

                {/* Next button */}
                {activeStep < brandingProcess.length - 1 && (
                  <button
                    className="bd-process__next"
                    onClick={() => setActiveStep(activeStep + 1)}
                    style={{ borderColor: ACC, color: ACC }}
                  >
                    Next: {brandingProcess[activeStep + 1].phase}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Timeline strip */}
          <div className="bd-process__timeline">
            {brandingProcess.map((step, i) => (
              <div key={step.step} className="bd-process__timeline-item">
                <div
                  className="bd-process__timeline-circle"
                  style={{
                    backgroundColor: i <= activeStep ? ACC : "var(--surface-3)",
                    borderColor: i <= activeStep ? ACC : "var(--border-strong)",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveStep(i)}
                >
                  {i < activeStep ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4.5 7.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <span className="bd-process__timeline-num">{step.step}</span>
                  )}
                </div>
                <span
                  className="bd-process__timeline-label"
                  style={{ color: i === activeStep ? ACC : "var(--text-muted)" }}
                >
                  {step.phase}
                </span>
                {i < brandingProcess.length - 1 && (
                  <div
                    className="bd-process__timeline-connector"
                    style={{
                      backgroundColor: i < activeStep ? ACC : "var(--border-default)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND IDENTITY SHOWCASE
      ══════════════════════════════════════════ */}
      <section className="bd-showcase section">
        <div className="container">
          <div className="bd-showcase__header">
            <Eyebrow>Identity in Action</Eyebrow>
            <SectionTitle>Brand Identity Showcase.</SectionTitle>
          </div>

          {/* Bento-style image grid */}
          <div className="bd-showcase__grid">
            {/* Large feature cell */}
            <ShowcaseCell item={brandingShowcase[0]} large />
            {/* Smaller cells */}
            <div className="bd-showcase__col">
              <ShowcaseCell item={brandingShowcase[1]} />
              <ShowcaseCell item={brandingShowcase[2]} />
            </div>
            {/* Bottom row */}
            <ShowcaseCell item={brandingShowcase[3]} />
            <ShowcaseCell item={brandingShowcase[4]} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRANDING PORTFOLIO
      ══════════════════════════════════════════ */}
      <section className="bd-portfolio section">
        <div className="container">
          <div className="bd-portfolio__header">
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <SectionTitle>Branding Work That{" "}
                <span style={{ color: "var(--text-secondary)" }}>Speaks for Itself.</span>
              </SectionTitle>
            </div>
            <Link to="/work" className="bd-portfolio__view-all">
              All Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="bd-portfolio__grid">
            {brandingPortfolio.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="bd-cta section">
        <div className="container">
          <div className="bd-cta__inner">
            {/* Background coral glow */}
            <div className="bd-cta__glow" aria-hidden />
            {/* Decorative large text */}
            <div className="bd-cta__watermark" aria-hidden>BRAND</div>

            <div className="bd-cta__content">
              <Eyebrow>Ready to Begin</Eyebrow>

              <h2 className="bd-cta__h2">
                Your Brand Deserves to Be{" "}
                <span style={{ color: ACC }}>Remembered.</span>
              </h2>

              <p className="bd-cta__sub">
                We take on a limited number of branding projects each quarter to
                ensure every client gets our full attention and best work. Let's
                talk about yours.
              </p>

              <div className="bd-cta__actions">
                <Link to="/contact" className="bd-btn bd-btn--primary bd-btn--lg">
                  Start a Branding Project
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/services" className="bd-btn bd-btn--outline">
                  All Services
                </Link>
              </div>

              {/* Deliverable tags */}
              <div className="bd-cta__tags">
                {[
                  "Brand Identity",
                  "Logo Design",
                  "Brand Guidelines",
                  "Packaging",
                  "Rebranding",
                  "Brand Strategy",
                ].map((tag) => (
                  <span key={tag} className="bd-cta__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PAGE-SCOPED STYLES
      ══════════════════════════════════════════ */}
      <style>{`

        /* ─── Shared eyebrow & section title ─── */
        .bd-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .bd-eyebrow__line {
          display: block;
          width: 2rem;
          height: 2px;
          background-color: var(--clr-branding);
          flex-shrink: 0;
        }
        .bd-eyebrow__text {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--clr-branding);
        }
        .bd-section-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(2.25rem, 4vw, 4rem);
          line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display);
          color: var(--text-primary);
          margin: 0;
        }
        .bd-section-title--muted {
          color: var(--text-secondary);
        }

        /* ─── Shared buttons ─── */
        .bd-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          font-family: var(--font-fine);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: all var(--ease-base);
          white-space: nowrap;
          border: none;
          cursor: pointer;
        }
        .bd-btn--primary {
          background-color: var(--clr-branding);
          color: #fff;
          padding: 0.875rem 1.875rem;
          box-shadow: 0 0 24px var(--clr-branding-glow);
        }
        .bd-btn--primary:hover {
          opacity: 0.88;
          box-shadow: 0 0 40px rgba(224,53,53,0.4);
        }
        .bd-btn--lg {
          padding: 1.125rem 2.5rem;
          font-size: 0.875rem;
        }
        .bd-btn--ghost {
          background: transparent;
          color: var(--text-muted);
          padding: 0.875rem 1.5rem;
          border: 1px solid var(--border-strong);
        }
        .bd-btn--ghost:hover {
          color: var(--text-primary);
          border-color: rgba(255,255,255,0.25);
        }
        .bd-btn--outline {
          background: transparent;
          color: var(--clr-branding);
          padding: 1.125rem 2rem;
          border: 1.5px solid var(--clr-branding);
        }
        .bd-btn--outline:hover {
          background-color: var(--clr-branding);
          color: #fff;
        }

        /* ─── Hero ─── */
        .bd-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: var(--surface-0);
        }
        .bd-hero__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .bd-hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 100%);
        }
        .bd-hero__glow {
          position: absolute;
        }
        .bd-hero__glow--tl {
          top: -10%;
          left: -5%;
          width: 55vw;
          height: 55vw;
          max-width: 700px;
          max-height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224,53,53,0.14) 0%, transparent 65%);
        }
        .bd-hero__glow--br {
          bottom: -20%;
          right: 30%;
          width: 40vw;
          height: 40vw;
          max-width: 500px;
          max-height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224,53,53,0.06) 0%, transparent 65%);
        }
        .bd-hero__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          padding-top: calc(var(--nav-height) + 5rem);
          padding-bottom: 5rem;
          position: relative;
          z-index: 1;
          width: 100%;
        }
        .bd-hero__left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .bd-hero__h1 {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display);
          color: var(--text-primary);
          margin: 0 0 1.5rem;
          max-width: 16ch;
        }
        .bd-hero__h1-accent {
          color: var(--clr-branding);
        }
        .bd-hero__sub {
          font-family: var(--font-body);
          font-size: clamp(0.9375rem, 1.4vw, 1.0625rem);
          line-height: var(--leading-relaxed);
          color: var(--text-secondary);
          max-width: 44ch;
          margin: 0 0 2rem;
        }
        .bd-hero__pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2.25rem;
        }
        .bd-hero__pill {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--clr-branding);
          background-color: var(--clr-branding-glow);
          border: 1px solid var(--clr-branding-border);
          border-radius: var(--radius-full);
          padding: 0.3rem 0.875rem;
        }
        .bd-hero__actions {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          flex-wrap: wrap;
        }
        .bd-hero__right {
          position: relative;
        }
        .bd-hero__img-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--surface-2);
          box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px var(--border-default);
          aspect-ratio: 4/3;
        }
        .bd-hero__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .bd-hero__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(224,53,53,0.08) 0%, transparent 60%),
                      linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%);
        }
        .bd-hero__float {
          position: absolute;
          backdrop-filter: blur(12px);
          background-color: rgba(20,20,20,0.85);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
        }
        .bd-hero__float--bl {
          bottom: 1.5rem;
          left: 1.5rem;
        }
        .bd-hero__float--tr {
          top: 1.5rem;
          right: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.875rem;
        }
        .bd-hero__float-val {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 2rem;
          line-height: 1;
          color: var(--clr-branding);
          margin: 0 0 0.2rem;
        }
        .bd-hero__float-label {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0;
        }
        .bd-hero__float-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--clr-branding);
          box-shadow: 0 0 6px var(--clr-branding);
          flex-shrink: 0;
        }
        .bd-hero__float-tag-text {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-primary);
        }

        /* ─── Services grid ─── */
        .bd-services {
          background-color: var(--surface-0);
        }
        .bd-services__header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: flex-end;
          margin-bottom: 3.5rem;
        }
        .bd-services__sub {
          font-family: var(--font-body);
          font-size: clamp(0.9375rem, 1.25vw, 1rem);
          line-height: var(--leading-relaxed);
          color: var(--text-secondary);
          margin: 0;
          align-self: flex-end;
        }
        .bd-services__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        /* ─── Process ─── */
        .bd-process {
          background-color: var(--surface-1);
          border-top: 1px solid var(--border-default);
          border-bottom: 1px solid var(--border-default);
        }
        .bd-process__header {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 3rem;
          max-width: 52ch;
        }
        .bd-process__sub {
          font-family: var(--font-body);
          font-size: clamp(0.9375rem, 1.25vw, 1rem);
          line-height: var(--leading-relaxed);
          color: var(--text-secondary);
          margin: 1rem 0 0;
        }
        .bd-process__nav {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .bd-process__nav-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-fine);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid;
          border-radius: var(--radius-sm);
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all var(--ease-base);
        }
        .bd-process__nav-num {
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 900;
          opacity: 0.6;
        }
        .bd-process__nav-phase {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .bd-process__detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          background-color: var(--surface-2);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: 3rem;
          margin-bottom: 2.5rem;
          align-items: start;
          animation: fadeSlideIn 300ms var(--ease-reveal) both;
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bd-process__step-num {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 4rem;
          line-height: 1;
          color: rgba(255,255,255,0.06);
          margin: 0 0 0.25rem;
        }
        .bd-process__phase-label {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin: 0 0 0.75rem;
        }
        .bd-process__step-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display);
          color: var(--text-primary);
          margin: 0 0 1rem;
        }
        .bd-process__step-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: var(--leading-relaxed);
          color: var(--text-secondary);
          margin: 0 0 1.5rem;
        }
        .bd-process__duration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-fine);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .bd-process__outputs-label {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 1.25rem;
        }
        .bd-process__outputs {
          list-style: none;
          margin: 0 0 2rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .bd-process__output {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-primary);
          background-color: var(--surface-3);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
        }
        .bd-process__output-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .bd-process__progress {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          margin-bottom: 1.5rem;
        }
        .bd-process__progress-pip {
          height: 0.25rem;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          transition: width var(--ease-base), background-color var(--ease-base);
          padding: 0;
        }
        .bd-process__next {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-fine);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: transparent;
          border: 1.5px solid;
          border-radius: var(--radius-sm);
          padding: 0.625rem 1.25rem;
          cursor: pointer;
          transition: all var(--ease-base);
        }
        .bd-process__next:hover {
          background-color: var(--clr-branding);
          color: #fff !important;
          border-color: var(--clr-branding) !important;
        }
        .bd-process__timeline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          padding-top: 0.5rem;
        }
        .bd-process__timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          flex: 1;
        }
        .bd-process__timeline-circle {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--ease-base), border-color var(--ease-base);
          position: relative;
          z-index: 1;
          margin-bottom: 0.625rem;
        }
        .bd-process__timeline-num {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1;
        }
        .bd-process__timeline-label {
          font-family: var(--font-fine);
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color var(--ease-fast);
          text-align: center;
        }
        .bd-process__timeline-connector {
          position: absolute;
          top: 1.25rem;
          left: 50%;
          width: 100%;
          height: 2px;
          transition: background-color var(--ease-base);
          z-index: 0;
        }

        /* ─── Showcase ─── */
        .bd-showcase {
          background-color: var(--surface-0);
        }
        .bd-showcase__header {
          margin-bottom: 3rem;
        }
        .bd-showcase__grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: auto auto;
          gap: 1.25rem;
        }
        .bd-showcase__col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .bd-showcase-cell {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: var(--surface-2);
          border: 1px solid var(--border-default);
          cursor: pointer;
          transition: transform var(--ease-base), box-shadow var(--ease-base);
        }
        .bd-showcase-cell:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        .bd-showcase-cell--large { aspect-ratio: 4/3; grid-row: span 2; }
        .bd-showcase-cell--small { aspect-ratio: 3/2; }
        .bd-showcase-cell__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform var(--ease-slow);
        }
        .bd-showcase-cell:hover .bd-showcase-cell__img {
          transform: scale(1.05);
        }
        .bd-showcase-cell__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 55%);
          opacity: 0;
          transition: opacity var(--ease-base);
        }
        .bd-showcase-cell:hover .bd-showcase-cell__overlay { opacity: 1; }
        .bd-showcase-cell__info {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
          opacity: 0;
          transition: opacity var(--ease-base), transform var(--ease-base);
          transform: translateY(8px);
        }
        .bd-showcase-cell:hover .bd-showcase-cell__info {
          opacity: 1;
          transform: translateY(0);
        }
        .bd-showcase-cell__tag {
          display: inline-block;
          font-family: var(--font-fine);
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--clr-branding);
          background-color: var(--clr-branding-glow);
          border: 1px solid var(--clr-branding-border);
          border-radius: var(--radius-xs);
          padding: 0.25rem 0.625rem;
          margin-bottom: 0.5rem;
        }
        .bd-showcase-cell__client {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.125rem;
          letter-spacing: var(--tracking-display);
          color: var(--text-primary);
          margin: 0 0 0.125rem;
        }
        .bd-showcase-cell__project {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin: 0;
        }

        /* ─── Portfolio ─── */
        .bd-portfolio {
          background-color: var(--surface-1);
          border-top: 1px solid var(--border-default);
        }
        .bd-portfolio__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .bd-portfolio__view-all {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-fine);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--ease-fast);
          padding-bottom: 0.25rem;
        }
        .bd-portfolio__view-all:hover { color: var(--text-primary); }
        .bd-portfolio__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* ─── Final CTA ─── */
        .bd-cta { background-color: var(--surface-0); }
        .bd-cta__inner {
          position: relative;
          background-color: var(--surface-1);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          padding: 7rem 4rem;
          overflow: hidden;
          text-align: center;
        }
        .bd-cta__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(224,53,53,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .bd-cta__watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(8rem, 18vw, 18rem);
          line-height: 1;
          letter-spacing: -0.06em;
          color: rgba(255,255,255,0.015);
          user-select: none;
          white-space: nowrap;
          pointer-events: none;
        }
        .bd-cta__content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bd-cta__h2 {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(2.5rem, 5.5vw, 5.5rem);
          line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display);
          color: var(--text-primary);
          margin: 0 0 1.5rem;
          max-width: 18ch;
        }
        .bd-cta__sub {
          font-family: var(--font-body);
          font-size: clamp(0.9375rem, 1.25vw, 1.0625rem);
          line-height: var(--leading-relaxed);
          color: var(--text-secondary);
          max-width: 50ch;
          margin: 0 0 3rem;
        }
        .bd-cta__actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .bd-cta__tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }
        .bd-cta__tag {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          background-color: var(--surface-2);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-full);
          padding: 0.3rem 0.875rem;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .bd-services__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .bd-hero__inner {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding-top: calc(var(--nav-height) + 3rem);
          }
          .bd-hero__right { max-width: 600px; margin: 0 auto; }
          .bd-hero__h1 { font-size: clamp(2.5rem, 7vw, 3.75rem); }
          .bd-services__header { grid-template-columns: 1fr; gap: 1.5rem; }
          .bd-services__grid { grid-template-columns: repeat(2, 1fr); }
          .bd-process__detail { grid-template-columns: 1fr; gap: 2rem; }
          .bd-showcase__grid {
            grid-template-columns: 1fr;
          }
          .bd-showcase-cell--large { aspect-ratio: 16/9; grid-row: auto; }
          .bd-showcase__col { flex-direction: row; }
          .bd-showcase-cell--small { flex: 1; }
          .bd-portfolio__grid { grid-template-columns: 1fr 1fr; }
          .bd-cta__inner { padding: 4rem 2rem; }
        }
        @media (max-width: 640px) {
          .bd-services__grid { grid-template-columns: 1fr; }
          .bd-portfolio__grid { grid-template-columns: 1fr; }
          .bd-showcase__col { flex-direction: column; }
          .bd-process__nav { gap: 0.375rem; }
          .bd-process__timeline { display: none; }
        }
      `}</style>
    </main>
  );
}

/* ─── Showcase cell sub-component ─── */
function ShowcaseCell({ item, large }: { item: { id: string; client: string; project: string; tag: string; image: string }; large?: boolean }) {
  return (
    <div className={`bd-showcase-cell ${large ? "bd-showcase-cell--large" : "bd-showcase-cell--small"}`}>
      <img src={item.image} alt={`${item.client} — ${item.project}`} className="bd-showcase-cell__img" />
      <div className="bd-showcase-cell__overlay" aria-hidden />
      <div className="bd-showcase-cell__info">
        <span className="bd-showcase-cell__tag">{item.tag}</span>
        <p className="bd-showcase-cell__client">{item.client}</p>
        <p className="bd-showcase-cell__project">{item.project}</p>
      </div>
    </div>
  );
}
