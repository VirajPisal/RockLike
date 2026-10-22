import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import PortfolioCard from "../components/PortfolioCard";
import { services } from "../data/services";
import { portfolioItems } from "../data/portfolio";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "creative" | "growth">("all");

  const filteredServices = services.filter((s) => {
    if (activeTab === "all") return true;
    if (activeTab === "creative") {
      return ["branding", "video", "events", "celebrity"].includes(s.id);
    }
    return ["performance", "social", "brand-building", "franchise"].includes(s.id);
  });

  const featuredProjects = portfolioItems.slice(0, 3);

  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "calc(var(--nav-height) + 3rem)",
          paddingBottom: "5rem",
          overflow: "hidden",
          backgroundColor: "var(--surface-0)",
        }}
      >
        {/* Glow & grid background */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {/* Radial Top Glows */}
          <div
            style={{
              position: "absolute",
              top: "-15%",
              left: "15%",
              width: "65vw",
              height: "55vw",
              maxWidth: "800px",
              maxHeight: "700px",
              background: "radial-gradient(circle, rgba(224,53,53,0.14) 0%, transparent 68%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "20%",
              right: "-10%",
              width: "50vw",
              height: "50vw",
              maxWidth: "600px",
              background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)",
            }}
          />
          {/* Subtle Grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "860px" }}>
            {/* Eyebrow Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.35rem 0.875rem",
                backgroundColor: "rgba(224,53,53,0.1)",
                border: "1px solid rgba(224,53,53,0.3)",
                borderRadius: "var(--radius-full)",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  borderRadius: "50%",
                  backgroundColor: "var(--clr-branding)",
                  boxShadow: "0 0 10px var(--clr-branding)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                }}
              >
                Venture-Scale Creative &amp; Growth Studio
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(3.25rem, 8vw, 6.75rem)",
                lineHeight: "0.93",
                letterSpacing: "var(--tracking-display)",
                color: "var(--text-primary)",
                margin: "0 0 1.75rem",
                textTransform: "uppercase",
              }}
            >
              We Build <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #F7F5F2 20%, #A8A5A0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                What's Next.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.0625rem, 1.8vw, 1.25rem)",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
                margin: "0 0 2.75rem",
                maxWidth: "52ch",
              }}
            >
              Rocklike Techventures partners with visionary founders and enterprise leaders to engineer category-defining brand systems, cinematic visual stories, and compounding performance growth engines.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
              <Button to="/services" variant="primary" size="lg" accent="var(--clr-branding)">
                Explore Capabilities
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
            </div>

            {/* Trust Stats Bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "2rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--border-default)",
              }}
            >
              {[
                { val: "09+", label: "Years Experience", accent: "var(--clr-branding)" },
                { val: "300+", label: "Brands Launched", accent: "var(--clr-video)" },
                { val: "$48M+", label: "Revenue Driven", accent: "var(--clr-performance)" },
                { val: "1,200+", label: "Films Created", accent: "var(--clr-strategy)" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                      lineHeight: 1,
                      letterSpacing: "var(--tracking-tight)",
                      color: s.accent,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CAPABILITIES OVERVIEW (8 PILLARS)
      ══════════════════════════════════════════ */}
      <section id="capabilities" className="section" style={{ backgroundColor: "var(--surface-1)", borderTop: "1px solid var(--border-default)" }}>
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
              eyebrow="Core Disciplines"
              title="Eight Integrated Capabilities. One Uncompromising Standard."
              subtitle="From brand identity and cinematic production to full-funnel media acquisition and franchise scaling — everything your brand needs under one roof."
              accent="var(--clr-branding)"
            />

            {/* Category Filter Tabs */}
            <div
              style={{
                display: "inline-flex",
                backgroundColor: "var(--surface-2)",
                padding: "0.25rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-default)",
              }}
            >
              {(
                [
                  { id: "all", label: "All (8)" },
                  { id: "creative", label: "Creative & Brand" },
                  { id: "growth", label: "Growth & Scale" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    backgroundColor: activeTab === tab.id ? "var(--surface-3)" : "transparent",
                    color: activeTab === tab.id ? "var(--text-primary)" : "var(--text-muted)",
                    border: "none",
                    borderRadius: "var(--radius-xs)",
                    padding: "0.5rem 1rem",
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    transition: "all var(--ease-fast)",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filteredServices.map((svc, i) => (
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
                {/* Number & Arrow */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "1.75rem",
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

                {/* Title */}
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

                {/* Tagline */}
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
                  {svc.description.split(".")[0]}.
                </p>

                {/* Highlights */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {svc.highlights.slice(0, 3).map((h) => (
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

                {/* Stat footer */}
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED WORK PREVIEW
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-0)" }}>
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
              eyebrow="Case Studies"
              title="Engineered for Impact. Built to Compound."
              subtitle="Explore selected outcomes from our creative, production, and performance partnerships."
              accent="var(--clr-video)"
            />
            <Button to="/work" variant="outline" accent="var(--clr-video)">
              View All Work ({portfolioItems.length})
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {featuredProjects.map((p) => (
              <PortfolioCard key={p.id} item={p} featured />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE ROCKLIKE BLUEPRINT (PROCESS)
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-1)", borderTop: "1px solid var(--border-default)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 4rem" }}>
            <SectionHeading
              align="center"
              eyebrow="The Framework"
              title="How High-Growth Brands Compound Advantage"
              subtitle="A repeatable four-phase engagement model that translates strategic intuition into commercial momentum."
              accent="var(--clr-performance)"
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                step: "01",
                phase: "Diagnostic & Strategy",
                desc: "We dissect your unit economics, brand positioning, and competitive landscape to establish unfair market advantage.",
              },
              {
                step: "02",
                phase: "Identity & Architecture",
                desc: "We craft cohesive visual language, tone systems, and design tokens that elevate brand equity across all touchpoints.",
              },
              {
                step: "03",
                phase: "Cinematic Production",
                desc: "We engineer hero films, episodic social assets, and experiential collateral built with editorial perfection.",
              },
              {
                step: "04",
                phase: "Scale & Compounding",
                desc: "We deploy full-funnel media architecture and growth loops that turn awareness into measurable revenue.",
              },
            ].map((p, idx) => (
              <div
                key={p.step}
                style={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2.25rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "rgba(255,255,255,0.06)",
                    marginBottom: "1rem",
                  }}
                >
                  {p.step}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.375rem",
                    letterSpacing: "var(--tracking-display)",
                    color: "var(--text-primary)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {p.phase}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    lineHeight: "1.65",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MONOLITH CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container">
          <div
            style={{
              position: "relative",
              backgroundColor: "var(--surface-1)",
              border: "1px solid rgba(224,53,53,0.3)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(3.5rem, 8vw, 6.5rem) clamp(2rem, 5vw, 4rem)",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            {/* Background Glow */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "80%",
                background: "radial-gradient(ellipse at top, rgba(224,53,53,0.18), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
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
                Start an Engagement
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  lineHeight: "var(--leading-tight)",
                  letterSpacing: "var(--tracking-display)",
                  color: "var(--text-primary)",
                  margin: "0 0 1.25rem",
                }}
              >
                Ready to Build Something Unforgettable?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  lineHeight: "1.65",
                  color: "var(--text-secondary)",
                  margin: "0 0 2.5rem",
                }}
              >
                Tell us about your venture, product, or next milestone. We respond with a tailored strategic perspective within 24 hours.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Button to="/contact" variant="primary" size="lg" accent="var(--clr-branding)">
                  Schedule Consultation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
                <Button to="/work" variant="secondary" size="lg">
                  Explore Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
