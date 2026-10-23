import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import EventPortfolioSection from "../components/events/EventPortfolioSection";

export default function Events() {
  return (
    <main style={{ backgroundColor: "#F8FAFC" }}>
      {/* ══════════════════════════════════════════
          HERO & BREADCRUMBS (FRESH LIGHT THEME)
      ══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "calc(var(--nav-height) + 2rem)",
          paddingBottom: "4.5rem",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "-25%",
              right: "10%",
              width: "60vw",
              height: "60vw",
              maxWidth: "700px",
              background: "radial-gradient(circle, rgba(212,160,36,0.12) 0%, rgba(13,82,156,0.06) 50%, transparent 70%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs
            items={[{ label: "Live Events & Production Portfolio" }]}
            accent="#0D529C"
          />

          <div style={{ maxWidth: "840px", marginTop: "2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4A024",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#D4A024" }} />
              Statewide Event Architecture & Production
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.75rem, 6vw, 5rem)",
                lineHeight: "1.02",
                letterSpacing: "-0.02em",
                color: "#0F172A",
                margin: "0 0 1.5rem",
                textTransform: "uppercase",
              }}
            >
              Monumental Gatherings. <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #0D529C 0%, #1E40AF 50%, #D4A024 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Enduring Impact.
              </span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
                lineHeight: "1.65",
                color: "#475569",
                margin: "0 0 2.5rem",
                maxWidth: "65ch",
              }}
            >
              From the historic 99th Akhil Bhartiya Marathi Sahitya Sammelan to industrial expos, national abacus championships, and corporate conclaves — Rocklike Techventures engineers complete spatial stage environments, influencer campaigns, dignitary protocols, and 4K broadcast video production.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button to="/services/event-designing" variant="primary" accent="#0D529C">
                Explore Event Designing Services
              </Button>
              <Button to="/contact" variant="secondary">
                Book Event Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTERACTIVE EVENT PORTFOLIO WITH
          KINETIC SCROLL MOVING TEXT & REAL PHOTOS
      ══════════════════════════════════════════ */}
      <EventPortfolioSection showTitle={true} />

      {/* ══════════════════════════════════════════
          EVENTS CTA SECTION
      ══════════════════════════════════════════ */}
      <section
        style={{
          padding: "6rem 0",
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E2E8F0",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "680px" }}>
          <span
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#D4A024",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Plan Your Next Milestone
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0F172A",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              margin: "0 0 1rem",
            }}
          >
            Ready to Build an Unforgettable Gathering?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: "1.65",
              color: "#64748B",
              marginBottom: "2.5rem",
            }}
          >
            Stage architecture, lighting choreography, celebrity management, and multi-camera live broadcast engineered with millimeter precision.
          </p>
          <Button to="/contact" variant="primary" size="lg" accent="#0D529C">
            Request Event Proposal
          </Button>
        </div>
      </section>
    </main>
  );
}
