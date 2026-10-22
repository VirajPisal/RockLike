import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function About() {
  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO & BREADCRUMBS
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: "calc(var(--nav-height) + 2rem)",
          paddingBottom: "5rem",
          backgroundColor: "var(--surface-0)",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "20%",
              width: "60vw",
              height: "60vw",
              maxWidth: "750px",
              background: "radial-gradient(circle, rgba(224,53,53,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs
            items={[{ label: "About Rocklike" }]}
            accent="var(--clr-branding)"
            className="mb-8"
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
              Who We Are
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: "0.95",
                letterSpacing: "var(--tracking-display)",
                color: "var(--text-primary)",
                margin: "0 0 2rem",
                textTransform: "uppercase",
              }}
            >
              A Decade of <br />
              <span style={{ color: "var(--clr-branding)" }}>Relentless Craft.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.0625rem, 1.6vw, 1.25rem)",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
                margin: "0 0 2.5rem",
                maxWidth: "48ch",
              }}
            >
              Rocklike Techventures was founded on a singular conviction: the world's most enduring businesses are built at the exact intersection of uncompromising artistic taste and rigorous commercial discipline.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MANIFESTO & VISION
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-1)", borderTop: "1px solid var(--border-default)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <SectionHeading
                eyebrow="The Philosophy"
                title="Creative Conviction. Analytical Rigor."
                subtitle="Most agencies force a compromise: beautiful design that doesn't convert, or high-converting ads that cheapen the brand. We reject this dichotomy."
                accent="var(--clr-branding)"
              />
              <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: "1.7", color: "var(--text-secondary)", margin: 0 }}>
                  We are a multidisciplinary collective of brand architects, filmmakers, performance engineers, and venture strategists. By combining deep identity craft with modern performance measurement, we create work that compounds brand equity while fueling month-over-month customer acquisition.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: "1.7", color: "var(--text-secondary)", margin: 0 }}>
                  Over nine years, we have stewarded early-stage disruptors from pre-seed into category leadership and helped established enterprises navigate modern cultural relevance.
                </p>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-xl)",
                padding: "3rem",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--clr-branding)",
                  marginBottom: "1.5rem",
                }}
              >
                By The Numbers
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
                {[
                  { value: "09+", label: "Years of Operation" },
                  { value: "35+", label: "In-House Specialists" },
                  { value: "300+", label: "Brands Launched" },
                  { value: "$48M+", label: "Tracked Revenue" },
                  { value: "98%", label: "Client Retention" },
                  { value: "14", label: "Markets Reached" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                        fontSize: "2.5rem",
                        lineHeight: 1,
                        color: "var(--text-primary)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NINE-YEAR TIMELINE
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container">
          <SectionHeading
            eyebrow="The Journey"
            title="Milestones in Our Evolution"
            subtitle="From a boutique brand design studio into an integrated creative venture engine."
            accent="var(--clr-video)"
          />

          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                year: "2015",
                title: "Inception & Pure Identity",
                desc: "Launched in Mumbai as a boutique branding practice focusing on high-concept visual identity systems and brand typography.",
              },
              {
                year: "2018",
                title: "Cinematic Film Division",
                desc: "Invested in in-house cinema gear, studio sets, and editorial suites to produce commercial broadcast films and brand documentaries.",
              },
              {
                year: "2021",
                title: "Performance & Tech Ventures",
                desc: "Expanded into full-funnel digital advertising, analytics attribution, and strategic franchise development systems.",
              },
              {
                year: "2024+",
                title: "Full-Spectrum Leadership",
                desc: "Now managing end-to-end creative and media portfolios for over 300 global brands with cross-market reach.",
              },
            ].map((m) => (
              <div
                key={m.year}
                style={{
                  backgroundColor: "var(--surface-1)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  position: "relative",
                  transition: "border-color var(--ease-base)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "2.25rem",
                    color: "var(--clr-video)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {m.year}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--text-primary)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {m.title}
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
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORE TENETS / VALUES
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-1)", borderTop: "1px solid var(--border-default)" }}>
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Core Tenets"
            title="The Principles That Govern Our Craft"
            subtitle="How we think, operate, and build long-term value for our partners."
            accent="var(--clr-strategy)"
          />

          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                num: "01",
                title: "Speed with Depth",
                desc: "We move fast because we possess deep experience. Momentum is an asset, but only when anchored in strategic clarity.",
              },
              {
                num: "02",
                title: "Taste as a Moat",
                desc: "In an era of generic AI generation and copy-paste templates, elevated taste is the single most defensible differentiator.",
              },
              {
                num: "03",
                title: "Attribution & Truth",
                desc: "No vanity metrics. We measure our impact by revenue generated, brand recall earned, and enterprise value created.",
              },
              {
                num: "04",
                title: "Compound Growth",
                desc: "We design brands and media systems not for quick spikes, but to compound in commercial authority year after year.",
              },
            ].map((v) => (
              <div
                key={v.num}
                style={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "1.5rem",
                    color: "var(--clr-strategy)",
                    marginBottom: "1rem",
                  }}
                >
                  {v.num}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: "var(--text-primary)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {v.title}
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
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT CTA
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-0)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
              color: "var(--text-primary)",
              margin: "0 0 1.25rem",
            }}
          >
            Partner With Rocklike
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              lineHeight: "1.65",
              color: "var(--text-secondary)",
              margin: "0 0 2.5rem",
            }}
          >
            Let's discuss how our multidisciplinary team can bring your vision into sharp market focus.
          </p>
          <Button to="/contact" variant="primary" size="lg" accent="var(--clr-branding)">
            Initiate Conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
      </section>
    </main>
  );
}
