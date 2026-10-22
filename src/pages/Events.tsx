import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function Events() {
  const eventsList = [
    {
      title: "NexGen Tech Leadership Summit",
      category: "Global Conference",
      attendees: "3,500+ Attendees",
      location: "Bandra Kurla Complex, Mumbai",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&h=650&fit=crop&auto=format",
      description: "Designed a 360-degree curved LED stage architecture, spatial light sequencing, and real-time interactive audience polling system.",
    },
    {
      title: "Aura Luxury Brand Activation",
      category: "Experiential Pop-Up",
      attendees: "12,000+ Footfall",
      location: "DLF Emporio, New Delhi",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&h=650&fit=crop&auto=format",
      description: "Custom immersive optical illusion tunnels, fragrance dispersion corridors, and private VIP lounge environments for high-net-worth patrons.",
    },
    {
      title: "Horizon EV Global Vehicle Reveal",
      category: "Product Launch",
      attendees: "850k Stream Viewers",
      location: "Bengaluru International Exhibition Centre",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&h=650&fit=crop&auto=format",
      description: "A synchronized vehicular laser reveal featuring volumetric holographic projections and live audio score synthesis.",
    },
    {
      title: "Starlight Creators & Culture Festival",
      category: "Music & Creator Fest",
      attendees: "18,000+ Attendees",
      location: "Jio World Garden, Mumbai",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1000&h=650&fit=crop&auto=format",
      description: "Dual main-stage festival engineering with architectural truss structures, kinetic pyrotechnics, and bespoke backstage influencer zones.",
    },
  ];

  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO & BREADCRUMBS
      ══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "calc(var(--nav-height) + 2rem)",
          paddingBottom: "4.5rem",
          backgroundColor: "var(--surface-0)",
          borderBottom: "1px solid var(--border-default)",
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
              background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs
            items={[{ label: "Events & Activations" }]}
            accent="var(--clr-events)"
          />

          <div style={{ maxWidth: "780px", marginTop: "2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--clr-events)",
                marginBottom: "1rem",
              }}
            >
              Immersive Spatial Production
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
              Experiences That <br />
              <span style={{ color: "var(--clr-events)" }}>Leave a Mark.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
                margin: "0 0 2.5rem",
              }}
            >
              We design and execute monumental physical environments, summit stages, and experiential brand activations that captivate in-person audiences and ignite digital conversation.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button to="/services/event-designing" variant="primary" accent="var(--clr-events)">
                Event Designing Services
              </Button>
              <Button to="/contact" variant="secondary">
                Discuss an Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED PRODUCTIONS
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio Highlights"
            title="Selected Spatial Activations"
            subtitle="From multi-day summits to pop-ups and launch events, engineered with sensory precision."
            accent="var(--clr-events)"
          />

          <div
            style={{
              marginTop: "3.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {eventsList.map((e) => (
              <div
                key={e.title}
                style={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform var(--ease-base), border-color var(--ease-base)",
                }}
                onMouseEnter={(el) => {
                  (el.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (el.currentTarget as HTMLElement).style.borderColor = "var(--clr-events-border)";
                }}
                onMouseLeave={(el) => {
                  (el.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (el.currentTarget as HTMLElement).style.borderColor = "var(--border-default)";
                }}
              >
                <div style={{ aspectRatio: "16/10", overflow: "hidden", position: "relative" }}>
                  <img
                    src={e.image}
                    alt={e.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      backgroundColor: "rgba(10,10,10,0.8)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(249,115,22,0.4)",
                      padding: "0.25rem 0.625rem",
                      borderRadius: "var(--radius-xs)",
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      color: "var(--clr-events)",
                      textTransform: "uppercase",
                    }}
                  >
                    {e.category}
                  </div>
                </div>

                <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem", flexGrow: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-fine)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {e.location}
                    </span>
                    <span style={{ fontFamily: "var(--font-fine)", fontSize: "0.75rem", fontWeight: 700, color: "var(--clr-events)" }}>
                      {e.attendees}
                    </span>
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
                    {e.title}
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
                    {e.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EVENTS CTA
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-0)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <SectionHeading
            align="center"
            eyebrow="Plan Your Activation"
            title="Design Your Next Unforgettable Gathering"
            subtitle="Stage architecture, lighting, keynote production, and attendee experience mapped end-to-end."
            accent="var(--clr-events)"
          />
          <div style={{ marginTop: "2.5rem" }}>
            <Button to="/contact" variant="primary" size="lg" accent="var(--clr-events)">
              Request Event Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
