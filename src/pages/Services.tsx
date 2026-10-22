import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import LargeServiceCard from "../components/LargeServiceCard";
import PortfolioCard from "../components/PortfolioCard";
import { services } from "../data/services";
import type { Service } from "../data/services";
import { portfolioItems } from "../data/portfolio";

const featuredWork = portfolioItems.filter((p) => p.featured).slice(0, 3);

// Compact overview card for the 2×4 grid
function ServiceOverviewCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={service.href}
      className="soc"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? service.accentBorder : "var(--border-default)"}`,
        boxShadow: hovered
          ? `0 0 0 1px ${service.accentBorder}, 0 24px 64px rgba(0,0,0,0.5), 0 0 80px ${service.accentGlow}`
          : "var(--shadow-card)",
        textDecoration: "none",
        display: "block",
      }}
    >
      {/* Glow layer */}
      <div className="soc__glow" style={{ background: `radial-gradient(ellipse at top left, ${service.accentGlow}, transparent 65%)`, opacity: hovered ? 1 : 0 }} aria-hidden />
      {/* Top row: number + arrow */}
      <div className="soc__top">
        <span className="soc__num" style={{ color: hovered ? service.accent : "var(--text-muted)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <svg
          className="soc__arrow"
          width="18" height="18" viewBox="0 0 18 18" fill="none"
          style={{ color: hovered ? service.accent : "var(--text-disabled)", transform: hovered ? "translate(3px,-3px)" : "none" }}
        >
          <path d="M3.5 14.5L14.5 3.5M14.5 3.5H7M14.5 3.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* Service name */}
      <h3 className="soc__title" style={{ color: hovered ? "var(--text-primary)" : "var(--text-primary)" }}>
        {service.fullTitle}
      </h3>
      {/* Description */}
      <p className="soc__desc">{service.tagline.charAt(0).toUpperCase() + service.tagline.slice(1)}. {service.description.split(".")[0]}.</p>
      {/* Highlights */}
      <div className="soc__tags">
        {service.highlights.slice(0, 3).map((h) => (
          <span key={h} className="soc__tag" style={{ color: hovered ? service.accent : "var(--text-muted)", borderColor: hovered ? service.accentBorder : "var(--border-default)", backgroundColor: hovered ? service.accentGlow : "transparent" }}>
            {h}
          </span>
        ))}
      </div>
      {/* Footer */}
      <div className="soc__footer">
        <div className="soc__accent-line" style={{ backgroundColor: service.accent, width: hovered ? "3rem" : "1.5rem" }} />
        <span className="soc__explore" style={{ color: hovered ? service.accent : "var(--text-disabled)" }}>
          Explore Service
        </span>
      </div>
    </Link>
  );
}

const stats = [
  { value: "09+", label: "Years of Experience" },
  { value: "35+", label: "Professionals" },
  { value: "300+", label: "Clients Served" },
];

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      {/* ─── Hero ─── */}
      <section
        className="services-hero"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Background layers */}
        <div className="services-hero__bg" aria-hidden>
          {/* Diagonal grid */}
          <div className="services-hero__grid" />
          {/* Red radial glow — top left */}
          <div
            className="services-hero__glow services-hero__glow--red"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 10% 15%, rgba(224,53,53,0.18) 0%, transparent 70%)",
            }}
          />
          {/* Blue radial glow — bottom right */}
          <div
            className="services-hero__glow services-hero__glow--blue"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 90% 85%, rgba(37,99,235,0.1) 0%, transparent 70%)",
            }}
          />
          {/* Large decorative number */}
          <div className="services-hero__watermark" aria-hidden>
            RT
          </div>
        </div>

        {/* Content */}
        <div
          className="container services-hero__content"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* Eyebrow */}
          <div className="services-hero__eyebrow">
            <span className="services-hero__eyebrow-dot" />
            <span className="services-hero__eyebrow-text">
              Full-Service Creative Agency · Est. 2015
            </span>
          </div>

          {/* Headline */}
          <h1 className="services-hero__h1">
            Everything Your Brand<br />
            <span className="services-hero__h1-accent">Needs to Grow.</span>
          </h1>

          {/* Supporting text */}
          <p className="services-hero__sub">
            Rocklike Techventures unites branding, video production, and performance
            marketing under one roof — so your growth strategy moves as a single,
            coherent force.
          </p>

          {/* CTAs */}
          <div className="services-hero__actions">
            <button
              onClick={scrollToServices}
              className="services-hero__btn services-hero__btn--primary"
            >
              Explore Our Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3V13M8 13L3 8M8 13L13 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link to="/work" className="services-hero__btn services-hero__btn--ghost">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="services-hero__scroll-hint" aria-hidden>
          <span className="services-hero__scroll-line" />
          <span className="services-hero__scroll-label">Scroll</span>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <div className="stats-bar">
        <div className="container stats-bar__inner">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stats-bar__item">
              <p className="stats-bar__value">{stat.value}</p>
              <p className="stats-bar__label">{stat.label}</p>
              {i < stats.length - 1 && (
                <div className="stats-bar__divider" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ─── Services section ─── */}
      <section
        id="services"
        ref={servicesRef}
        className="section services-section"
      >
        <div className="container">
          {/* Section header */}
          <div className="services-section__header">
            <div className="services-section__header-left">
              <div className="services-section__eyebrow">
                <span className="services-section__eyebrow-line" />
                <span className="services-section__eyebrow-text">
                  What We Do
                </span>
              </div>
              <h2 className="services-section__h2">
                Eight Powerful Solutions.<br />
                <span className="services-section__h2-muted">
                  One Growth Partner.
                </span>
              </h2>
            </div>
            <p className="services-section__sub">
              Each discipline is a complete offering. Together, they form the
              rarest thing in this industry — a single agency that can take your
              brand from invisible to undeniable.
            </p>
          </div>

          {/* Service overview grid — 2 × 4 */}
          <div className="services-overview-grid">
            {services.map((service, index) => (
              <ServiceOverviewCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Divider before featured detail cards */}
          <div className="services-detail-divider">
            <div className="services-section__eyebrow" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
              <span className="services-section__eyebrow-line" />
              <span className="services-section__eyebrow-text">Core Disciplines</span>
            </div>
            <h3 className="services-detail-divider__h3">Three Flagship Disciplines</h3>
            <p className="services-detail-divider__sub">Our founding three services — branding, video production and performance marketing — form the backbone of everything we do.</p>
          </div>

          {/* Flagship detail cards (original 3) */}
          <div className="services-section__cards">
            {services.slice(0, 3).map((service, index) => (
              <LargeServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Work ─── */}
      <section className="section featured-work">
        <div className="container">
          {/* Header */}
          <div className="featured-work__header">
            <div>
              <div className="services-section__eyebrow" style={{ marginBottom: "1rem" }}>
                <span
                  className="services-section__eyebrow-line"
                  style={{ backgroundColor: "var(--clr-branding)" }}
                />
                <span
                  className="services-section__eyebrow-text"
                  style={{ color: "var(--clr-branding)" }}
                >
                  Selected Work
                </span>
              </div>
              <h2 className="featured-work__h2">
                Recent Work
              </h2>
            </div>
            <Link to="/work" className="featured-work__view-all">
              View All Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7H12M12 7L7 2M12 7L7 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Grid */}
          <div className="featured-work__grid">
            {featuredWork.map((item) => (
              <PortfolioCard key={item.id} item={item} featured />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-section__inner">
            {/* Background glow */}
            <div className="cta-section__glow" aria-hidden />

            <div className="cta-section__content">
              {/* Eyebrow */}
              <div className="services-section__eyebrow" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
                <span className="services-section__eyebrow-line" />
                <span className="services-section__eyebrow-text">
                  Start a Project
                </span>
              </div>

              <h2 className="cta-section__h2">
                Ready to Grow Your Brand?
              </h2>
              <p className="cta-section__sub">
                We work with 4 new clients per quarter. If you're building
                something worth talking about, let's talk.
              </p>

              <div className="cta-section__actions">
                <Link to="/contact" className="cta-section__btn-primary">
                  Let's Talk
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8H13M13 8L8 3M13 8L8 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link to="/work" className="cta-section__btn-ghost">
                  See Our Work First
                </Link>
              </div>

              {/* Trust signals */}
              <div className="cta-section__trust">
                {["Brand Strategy", "Video Production", "Performance Marketing"].map(
                  (item) => (
                    <div key={item} className="cta-section__trust-item">
                      <span className="cta-section__trust-dot" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          /* ─── Hero ─── */
          .services-hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: var(--surface-0);
          }
          .services-hero__bg {
            position: absolute;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
          }
          .services-hero__grid {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
            background-size: 80px 80px;
            mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          }
          .services-hero__glow {
            position: absolute;
            inset: 0;
          }
          .services-hero__watermark {
            position: absolute;
            right: -2rem;
            top: 50%;
            transform: translateY(-50%);
            font-family: var(--font-display);
            font-weight: 900;
            font-size: clamp(14rem, 22vw, 24rem);
            line-height: 0.85;
            letter-spacing: -0.06em;
            color: rgba(255,255,255,0.02);
            user-select: none;
            white-space: nowrap;
          }
          .services-hero__content {
            padding-top: calc(var(--nav-height) + 5rem);
            padding-bottom: 6rem;
            width: 100%;
          }
          .services-hero__eyebrow {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 2rem;
          }
          .services-hero__eyebrow-dot {
            display: block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: var(--clr-branding);
            box-shadow: 0 0 8px var(--clr-branding);
          }
          .services-hero__eyebrow-text {
            font-family: var(--font-fine);
            font-size: 0.6875rem;
            font-weight: 600;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--text-muted);
          }
          .services-hero__h1 {
            font-family: var(--font-display);
            font-weight: 900;
            font-size: clamp(3.5rem, 8.5vw, 8.5rem);
            line-height: var(--leading-tight);
            letter-spacing: var(--tracking-display);
            color: var(--text-primary);
            margin: 0 0 2.25rem;
            max-width: 18ch;
          }
          .services-hero__h1-accent {
            color: var(--clr-branding);
          }
          .services-hero__sub {
            font-family: var(--font-body);
            font-size: clamp(1rem, 1.6vw, 1.1875rem);
            line-height: var(--leading-relaxed);
            color: var(--text-secondary);
            max-width: 52ch;
            margin: 0 0 3rem;
          }
          .services-hero__actions {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
          }
          .services-hero__btn {
            display: inline-flex;
            align-items: center;
            gap: 0.625rem;
            font-family: var(--font-fine);
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            border-radius: var(--radius-sm);
            cursor: pointer;
            transition: all var(--ease-base);
            text-decoration: none;
            white-space: nowrap;
          }
          .services-hero__btn--primary {
            background-color: var(--clr-branding);
            color: #fff;
            border: none;
            padding: 1rem 2rem;
            box-shadow: 0 0 24px rgba(224,53,53,0.3);
          }
          .services-hero__btn--primary:hover {
            opacity: 0.9;
            box-shadow: 0 0 40px rgba(224,53,53,0.45);
          }
          .services-hero__btn--ghost {
            background: transparent;
            color: var(--text-muted);
            border: 1px solid var(--border-strong);
            padding: 1rem 1.75rem;
          }
          .services-hero__btn--ghost:hover {
            color: var(--text-primary);
            border-color: rgba(255,255,255,0.3);
          }
          .services-hero__scroll-hint {
            position: absolute;
            bottom: 2.5rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
          .services-hero__scroll-line {
            display: block;
            width: 1px;
            height: 3rem;
            background: linear-gradient(to bottom, var(--clr-branding), transparent);
            animation: scrollPulse 2s ease-in-out infinite;
          }
          .services-hero__scroll-label {
            font-family: var(--font-fine);
            font-size: 0.625rem;
            font-weight: 600;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--text-disabled);
          }
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.4; transform: scaleY(0.7); transform-origin: top; }
            50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          }

          /* ─── Stats bar ─── */
          .stats-bar {
            background-color: var(--surface-1);
            border-top: 1px solid var(--border-default);
            border-bottom: 1px solid var(--border-default);
          }
          .stats-bar__inner {
            display: flex;
            align-items: stretch;
          }
          .stats-bar__item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2.75rem 2rem;
            text-align: center;
            position: relative;
          }
          .stats-bar__value {
            font-family: var(--font-display);
            font-weight: 900;
            font-size: clamp(3rem, 5vw, 4.5rem);
            line-height: 1;
            letter-spacing: var(--tracking-tight);
            color: var(--text-primary);
            margin: 0 0 0.375rem;
          }
          .stats-bar__label {
            font-family: var(--font-fine);
            font-size: 0.6875rem;
            font-weight: 600;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--text-muted);
            margin: 0;
          }
          .stats-bar__divider {
            position: absolute;
            right: 0;
            top: 20%;
            height: 60%;
            width: 1px;
            background-color: var(--border-default);
          }

          /* ─── Services section ─── */
          .services-section {
            background-color: var(--surface-0);
          }
          .services-section__header {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: flex-end;
            margin-bottom: 4rem;
          }
          .services-section__eyebrow {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
          }
          .services-section__eyebrow-line {
            display: block;
            width: 2rem;
            height: 2px;
            background-color: var(--clr-branding);
            flex-shrink: 0;
          }
          .services-section__eyebrow-text {
            font-family: var(--font-fine);
            font-size: 0.6875rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--clr-branding);
          }
          .services-section__h2 {
            font-family: var(--font-display);
            font-weight: 900;
            font-size: clamp(2.5rem, 4.5vw, 4.5rem);
            line-height: var(--leading-tight);
            letter-spacing: var(--tracking-display);
            color: var(--text-primary);
            margin: 0;
          }
          .services-section__h2-muted {
            color: var(--text-secondary);
          }
          .services-section__sub {
            font-family: var(--font-body);
            font-size: clamp(0.9375rem, 1.25vw, 1.0625rem);
            line-height: var(--leading-relaxed);
            color: var(--text-secondary);
            margin: 0;
            align-self: flex-end;
            padding-bottom: 0.25rem;
          }
          .services-section__cards {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          /* ─── Featured Work ─── */
          .featured-work {
            background-color: var(--surface-1);
            border-top: 1px solid var(--border-default);
          }
          .featured-work__header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 3rem;
            gap: 2rem;
            flex-wrap: wrap;
          }
          .featured-work__h2 {
            font-family: var(--font-display);
            font-weight: 900;
            font-size: clamp(2rem, 3.5vw, 3.25rem);
            line-height: var(--leading-tight);
            letter-spacing: var(--tracking-display);
            color: var(--text-primary);
            margin: 0;
          }
          .featured-work__view-all {
            display: inline-flex;
            align-items: center;
            gap: 0.625rem;
            font-family: var(--font-fine);
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-muted);
            text-decoration: none;
            transition: color var(--ease-fast);
            white-space: nowrap;
            align-self: flex-end;
            padding-bottom: 0.25rem;
          }
          .featured-work__view-all:hover { color: var(--text-primary); }
          .featured-work__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          /* ─── Final CTA ─── */
          .cta-section {
            padding-block: var(--space-section);
            background-color: var(--surface-0);
          }
          .cta-section__inner {
            position: relative;
            background-color: var(--surface-1);
            border: 1px solid var(--border-default);
            border-radius: var(--radius-xl);
            padding: 6rem 4rem;
            overflow: hidden;
            text-align: center;
          }
          .cta-section__glow {
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(224,53,53,0.1) 0%, transparent 70%);
            pointer-events: none;
          }
          .cta-section__content {
            position: relative;
            z-index: 1;
          }
          .cta-section__h2 {
            font-family: var(--font-display);
            font-weight: 900;
            font-size: clamp(2.75rem, 5vw, 5.5rem);
            line-height: var(--leading-tight);
            letter-spacing: var(--tracking-display);
            color: var(--text-primary);
            margin: 0 0 1.5rem;
          }
          .cta-section__sub {
            font-family: var(--font-body);
            font-size: clamp(1rem, 1.4vw, 1.125rem);
            line-height: var(--leading-relaxed);
            color: var(--text-secondary);
            max-width: 48ch;
            margin: 0 auto 3rem;
          }
          .cta-section__actions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 3rem;
          }
          .cta-section__btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.625rem;
            background-color: var(--clr-branding);
            color: #fff;
            font-family: var(--font-fine);
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 1.125rem 2.5rem;
            border-radius: var(--radius-sm);
            text-decoration: none;
            transition: opacity var(--ease-fast), box-shadow var(--ease-fast);
            box-shadow: 0 0 32px rgba(224,53,53,0.3);
          }
          .cta-section__btn-primary:hover {
            opacity: 0.9;
            box-shadow: 0 0 48px rgba(224,53,53,0.45);
          }
          .cta-section__btn-ghost {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: transparent;
            color: var(--text-muted);
            font-family: var(--font-fine);
            font-size: 0.875rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 1.125rem 1.75rem;
            border: 1px solid var(--border-strong);
            border-radius: var(--radius-sm);
            text-decoration: none;
            transition: all var(--ease-fast);
          }
          .cta-section__btn-ghost:hover {
            color: var(--text-primary);
            border-color: rgba(255,255,255,0.25);
          }
          .cta-section__trust {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
          }
          .cta-section__trust-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-family: var(--font-fine);
            font-size: 0.6875rem;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-muted);
          }
          .cta-section__trust-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: var(--clr-branding);
          }

          /* ─── Service overview grid ─── */
          .services-overview-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
            margin-bottom: 5rem;
          }
          .soc {
            position: relative;
            background-color: var(--surface-1);
            border-radius: var(--radius-lg);
            padding: 2.25rem;
            overflow: hidden;
            transition: border-color var(--ease-base), box-shadow var(--ease-base), transform var(--ease-base);
          }
          .soc:hover { transform: translateY(-3px); }
          .soc__glow {
            position: absolute; inset: 0; pointer-events: none;
            transition: opacity var(--ease-base);
            border-radius: inherit;
          }
          .soc__top {
            display: flex; justify-content: space-between; align-items: flex-start;
            margin-bottom: 1.5rem; position: relative; z-index: 1;
          }
          .soc__num {
            font-family: var(--font-display); font-weight: 900;
            font-size: 3.5rem; line-height: 1; letter-spacing: -0.04em;
            transition: color var(--ease-base);
          }
          .soc__arrow {
            margin-top: 0.375rem; flex-shrink: 0;
            transition: color var(--ease-base), transform var(--ease-base);
          }
          .soc__title {
            font-family: var(--font-display); font-weight: 900;
            font-size: clamp(1.25rem, 1.75vw, 1.625rem);
            line-height: var(--leading-snug); letter-spacing: var(--tracking-display);
            color: var(--text-primary); margin: 0 0 0.875rem;
            position: relative; z-index: 1;
          }
          .soc__desc {
            font-family: var(--font-body); font-size: 0.875rem;
            line-height: var(--leading-relaxed); color: var(--text-secondary);
            margin: 0 0 1.5rem; max-width: 44ch;
            position: relative; z-index: 1;
          }
          .soc__tags {
            display: flex; flex-wrap: wrap; gap: 0.375rem;
            margin-bottom: 1.75rem; position: relative; z-index: 1;
          }
          .soc__tag {
            font-family: var(--font-fine); font-size: 0.625rem; font-weight: 700;
            letter-spacing: 0.12em; text-transform: uppercase;
            border: 1px solid; border-radius: var(--radius-xs);
            padding: 0.25rem 0.625rem;
            transition: color var(--ease-base), border-color var(--ease-base), background-color var(--ease-base);
          }
          .soc__footer {
            display: flex; align-items: center; gap: 0.875rem;
            position: relative; z-index: 1;
          }
          .soc__accent-line {
            height: 1.5px; flex-shrink: 0;
            transition: width var(--ease-base), background-color var(--ease-base);
          }
          .soc__explore {
            font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 700;
            letter-spacing: 0.12em; text-transform: uppercase;
            transition: color var(--ease-base);
          }

          /* ─── Services detail divider ─── */
          .services-detail-divider {
            text-align: center; padding: 3rem 0 3.5rem; border-top: 1px solid var(--border-subtle);
          }
          .services-detail-divider__h3 {
            font-family: var(--font-display); font-weight: 900;
            font-size: clamp(1.75rem, 3vw, 2.75rem);
            line-height: var(--leading-tight); letter-spacing: var(--tracking-display);
            color: var(--text-primary); margin: 0 0 1rem;
          }
          .services-detail-divider__sub {
            font-family: var(--font-body); font-size: 1rem;
            line-height: var(--leading-relaxed); color: var(--text-secondary);
            max-width: 52ch; margin: 0 auto;
          }

          /* ─── Responsive ─── */
          @media (max-width: 900px) {
            .services-section__header {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            .featured-work__grid {
              grid-template-columns: 1fr;
            }
            .cta-section__inner { padding: 4rem 2rem; }
          }
          @media (max-width: 768px) {
            .services-overview-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
            .soc { padding: 1.75rem; }
            .soc__num { font-size: 2.75rem; }
          }
          @media (max-width: 640px) {
            .stats-bar__inner { flex-direction: column; }
            .stats-bar__divider { display: none; }
            .services-hero__h1 { font-size: clamp(2.75rem, 10vw, 4rem); }
            .services-overview-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>
    </main>
  );
}
