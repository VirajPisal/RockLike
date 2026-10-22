import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import PortfolioCard from "../components/PortfolioCard";
import LargeServiceCard from "../components/LargeServiceCard";
import { services, type Service } from "../data/services";
import { portfolioItems } from "../data/portfolio";

export default function Services() {
  const [viewMode, setViewMode] = useState<"grid" | "deep">("grid");
  const featuredWork = portfolioItems.slice(0, 3);

  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO & BREADCRUMBS
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: "calc(var(--nav-height) + 2rem)",
          paddingBottom: "4.5rem",
          backgroundColor: "var(--surface-0)",
          borderBottom: "1px solid var(--border-default)",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "-25%",
              left: "20%",
              width: "60vw",
              height: "60vw",
              maxWidth: "750px",
              background: "radial-gradient(circle, rgba(224,53,53,0.14) 0%, transparent 68%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs
            items={[{ label: "Our Services & Capabilities" }]}
            accent="var(--clr-branding)"
          />

          <div style={{ maxWidth: "800px", marginTop: "2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--clr-branding)",
                marginBottom: "1rem",
              }}
            >
              Comprehensive Agency Portfolio
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: "0.95",
                letterSpacing: "var(--tracking-display)",
                color: "var(--text-primary)",
                margin: "0 0 1.5rem",
                textTransform: "uppercase",
              }}
            >
              Eight Disciplines. <br />
              <span style={{ color: "var(--clr-branding)" }}>One Unified Engine.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
                margin: "0 0 2rem",
              }}
            >
              Every capability required to take a brand from first inception to market authority. Structured independently for surgical execution; unified under one strategic roof.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Button to="/contact" variant="primary" size="md">
                Consult on a Project
              </Button>
              <a
                href="#catalog"
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                Browse Directory ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICE DIRECTORY WITH VIEW TOGGLE
      ══════════════════════════════════════════ */}
      <section id="catalog" className="section" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
              marginBottom: "3.5rem",
            }}
          >
            <SectionHeading
              eyebrow="Capabilities Directory"
              title="Explore Our Core Services"
              subtitle="Choose between quick grid overview or comprehensive architecture breakdown."
              accent="var(--clr-branding)"
            />

            {/* View Mode Toggle Button */}
            <div
              style={{
                display: "inline-flex",
                backgroundColor: "var(--surface-2)",
                padding: "0.25rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-default)",
              }}
            >
              <button
                onClick={() => setViewMode("grid")}
                style={{
                  backgroundColor: viewMode === "grid" ? "var(--surface-3)" : "transparent",
                  color: viewMode === "grid" ? "var(--text-primary)" : "var(--text-muted)",
                  border: "none",
                  borderRadius: "var(--radius-xs)",
                  padding: "0.5rem 1rem",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>▦</span> Grid Overview
              </button>
              <button
                onClick={() => setViewMode("deep")}
                style={{
                  backgroundColor: viewMode === "deep" ? "var(--surface-3)" : "transparent",
                  color: viewMode === "deep" ? "var(--text-primary)" : "var(--text-muted)",
                  border: "none",
                  borderRadius: "var(--radius-xs)",
                  padding: "0.5rem 1rem",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>☰</span> Deep Architecture
              </button>
            </div>
          </div>

          {/* VIEW MODE 1: GRID VIEW */}
          {viewMode === "grid" ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {services.map((svc, i) => (
                <Link
                  key={svc.id}
                  to={svc.href}
                  style={{
                    backgroundColor: "var(--surface-2)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform var(--ease-base), border-color var(--ease-base), box-shadow var(--ease-base)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.borderColor = svc.accentBorder;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px rgba(0,0,0,0.5), 0 0 40px ${svc.accentGlow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-default)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                        fontSize: "2rem",
                        color: svc.accent,
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                        backgroundColor: svc.accentGlow,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: svc.accent,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      letterSpacing: "var(--tracking-display)",
                      color: "var(--text-primary)",
                      margin: 0,
                    }}
                  >
                    {svc.fullTitle}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                      color: "var(--text-secondary)",
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {svc.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {svc.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.625rem",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                          backgroundColor: "var(--surface-3)",
                          border: "1px solid var(--border-subtle)",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "var(--radius-xs)",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      paddingTop: "1rem",
                      borderTop: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                        fontSize: "1.25rem",
                        color: svc.accent,
                      }}
                    >
                      {svc.stat}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                      }}
                    >
                      {svc.statLabel}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* VIEW MODE 2: DEEP ARCHITECTURE (Using LargeServiceCard) */
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {services.map((svc, idx) => (
                <LargeServiceCard key={svc.id} service={svc} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ENGAGEMENT MODELS
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-0)", borderTop: "1px solid var(--border-default)" }}>
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="How We Engage"
            title="Flexible Engagement Structures"
            subtitle="Tailored to your organizational velocity, internal capabilities, and commercial milestones."
            accent="var(--clr-branding)"
          />

          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Sprint / Project Sprint",
                bestFor: "Ideal for Rebranding, Product Launches & Brand Films",
                desc: "A focused, intensive 4 to 8 week engagement with strict deliverables, dedicated partner oversight, and turnkey handover.",
                features: ["Fixed Scope & Budget", "Turnkey Asset Delivery", "Dedicated Creative Lead", "Fast Turnaround"],
              },
              {
                title: "Monthly Growth Retainer",
                bestFor: "Ideal for Performance Media & Social Dominance",
                desc: "Ongoing full-funnel media execution, creative testing, episodic video production, and real-time revenue optimization.",
                features: ["Continuous Creative Sprints", "Weekly Attribution Reporting", "Dedicated Performance Team", "Flexible Media Scaling"],
              },
              {
                title: "Venture Equity Partnership",
                bestFor: "Selected High-Upside Startups & Spinoffs",
                desc: "We co-invest creative capital and brand building infrastructure alongside tier-1 venture founders for aligned upside.",
                features: ["Skin in the Game", "Fractional C-Suite Strategy", "Zero Friction Scaling", "Long-Term Alignment"],
              },
            ].map((m) => (
              <div
                key={m.title}
                style={{
                  backgroundColor: "var(--surface-1)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.6875rem", fontWeight: 700, color: "var(--clr-branding)", textTransform: "uppercase" }}>
                  {m.bestFor}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: "1.65", color: "var(--text-secondary)", margin: 0, flexGrow: 1 }}>
                  {m.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {m.features.map((f) => (
                    <li key={f} style={{ fontFamily: "var(--font-fine)", fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--clr-branding)" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED WORK TEASER
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-1)", borderTop: "1px solid var(--border-default)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
            <SectionHeading
              eyebrow="Track Record"
              title="Recent Client Outcomes"
              subtitle="See how our integrated capabilities translate into measurable business lift."
              accent="var(--clr-video)"
            />
            <Button to="/work" variant="outline" accent="var(--clr-video)">
              Explore Full Work Archive
            </Button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {featuredWork.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLOSING CTA
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-0)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <SectionHeading
            align="center"
            eyebrow="Initiate Project"
            title="Let's Determine the Right Scope"
            subtitle="Schedule a consultation with our strategy partners to map your requirements and timeline."
            accent="var(--clr-branding)"
          />
          <div style={{ marginTop: "2.5rem" }}>
            <Button to="/contact" variant="primary" size="lg">
              Book Scoping Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
