import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

const SERVICES_LIST = [
  "Branding Solutions",
  "Video Production",
  "Performance Marketing",
  "Social Media Marketing",
  "Brand Building Strategies",
  "Celebrity Management",
  "Event Designing",
  "Franchise Development",
];

const BUDGET_RANGES = [
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Undisclosed / Venture",
];

const FAQS = [
  {
    q: "How fast can we begin an engagement?",
    a: "Following an introductory discovery call and scoping session, we typically finalize briefs and mobilize project teams within 5 to 7 business days.",
  },
  {
    q: "Do you work with early-stage startups or only enterprises?",
    a: "We work with venture-backed early-stage startups who need category-defining identity and growth foundations, as well as established national and multinational market leaders.",
  },
  {
    q: "What engagement models do you offer?",
    a: "We offer project-based milestone sprints (ideal for branding, brand films, and launches) and dedicated monthly growth retainers (ideal for performance marketing, social media, and ongoing creative direction).",
  },
  {
    q: "Where is the Rocklike team based?",
    a: "Our primary creative studio and cinema production warehouse is located in Mumbai, with a strategic technology and performance marketing hub in Bengaluru, serving clients globally.",
  },
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$25k – $50k");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO & BREADCRUMBS
      ══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "calc(var(--nav-height) + 2rem)",
          paddingBottom: "4rem",
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
              top: "-20%",
              left: "25%",
              width: "55vw",
              height: "55vw",
              maxWidth: "700px",
              background: "radial-gradient(circle, rgba(224,53,53,0.12) 0%, transparent 68%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs
            items={[{ label: "Start a Conversation" }]}
            accent="var(--clr-branding)"
          />

          <div style={{ maxWidth: "780px", marginTop: "2rem" }}>
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
              Direct Studio Access
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
              Let's Build <br />
              <span style={{ color: "var(--clr-branding)" }}>Something Great.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              We partner with ambitious founders, brand leaders, and enterprises. Share a few details about your objectives and our partners will reply with actionable perspective within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT FORM & STUDIO DETAILS
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Form Column */}
            <div
              style={{
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(5, 150, 105, 0.2)",
                      border: "2px solid #34D399",
                      color: "#34D399",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "var(--text-primary)",
                      margin: "0 0 0.75rem",
                    }}
                  >
                    Inquiry Received.
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      color: "var(--text-secondary)",
                      maxWidth: "40ch",
                      margin: "0 auto 2rem",
                    }}
                  >
                    Thank you, {formData.name}. Our strategy leadership is reviewing your brief and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", company: "", message: "" });
                      setSelectedServices([]);
                    }}
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid var(--border-default)",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.75rem 1.5rem",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {/* Service selector */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-fine)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "0.875rem",
                      }}
                    >
                      1. What capabilities do you require? (Select all that apply)
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {SERVICES_LIST.map((s) => {
                        const isSelected = selectedServices.includes(s);
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => toggleService(s)}
                            style={{
                              backgroundColor: isSelected ? "var(--clr-branding)" : "var(--surface-3)",
                              color: isSelected ? "#fff" : "var(--text-secondary)",
                              border: `1px solid ${isSelected ? "var(--clr-branding)" : "var(--border-subtle)"}`,
                              borderRadius: "var(--radius-xs)",
                              padding: "0.45rem 0.875rem",
                              fontFamily: "var(--font-fine)",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              cursor: "pointer",
                              transition: "all var(--ease-fast)",
                            }}
                          >
                            {isSelected ? "✓ " : "+ "}
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget selector */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-fine)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "0.875rem",
                      }}
                    >
                      2. Estimated Project or Monthly Budget
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {BUDGET_RANGES.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          style={{
                            backgroundColor: selectedBudget === b ? "var(--surface-4)" : "var(--surface-3)",
                            color: selectedBudget === b ? "var(--text-primary)" : "var(--text-muted)",
                            border: `1px solid ${selectedBudget === b ? "var(--clr-branding)" : "var(--border-subtle)"}`,
                            borderRadius: "var(--radius-xs)",
                            padding: "0.45rem 0.875rem",
                            fontFamily: "var(--font-fine)",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact inputs */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <label
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                      }}
                    >
                      3. Your Contact Details
                    </label>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          backgroundColor: "var(--surface-3)",
                          border: "1px solid var(--border-default)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0.875rem 1.125rem",
                          color: "var(--text-primary)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          outline: "none",
                        }}
                      />
                      <input
                        type="email"
                        required
                        placeholder="Work Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          backgroundColor: "var(--surface-3)",
                          border: "1px solid var(--border-default)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0.875rem 1.125rem",
                          color: "var(--text-primary)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          outline: "none",
                        }}
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Company / Brand Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        backgroundColor: "var(--surface-3)",
                        border: "1px solid var(--border-default)",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.875rem 1.125rem",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        outline: "none",
                      }}
                    />

                    <textarea
                      rows={4}
                      placeholder="Tell us about the project, goals, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        backgroundColor: "var(--surface-3)",
                        border: "1px solid var(--border-default)",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.875rem 1.125rem",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        outline: "none",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" accent="var(--clr-branding)">
                    Submit Strategic Inquiry
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                </form>
              )}
            </div>

            {/* Studio info & SLA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div>
                <SectionHeading
                  eyebrow="Direct Line"
                  title="Direct Access to Creative Directors"
                  subtitle="We skip junior account layers. When you engage Rocklike, you collaborate directly with seasoned practitioners."
                  accent="var(--clr-branding)"
                />
              </div>

              {/* Contact blocks */}
              <div
                style={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.6875rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                    General &amp; New Business
                  </div>
                  <a
                    href="mailto:hello@rocklike.co"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      color: "var(--clr-branding)",
                      textDecoration: "none",
                    }}
                  >
                    hello@rocklike.co
                  </a>
                </div>

                <hr className="divider" />

                <div>
                  <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.6875rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                    Mumbai Studio
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--text-secondary)", margin: 0 }}>
                    Rocklike Techventures Studio, BKC G-Block, Mumbai 400051
                  </p>
                </div>

                <div>
                  <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.6875rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                    Bengaluru Hub
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--text-secondary)", margin: 0 }}>
                    Indiranagar 100ft Road, Bengaluru 560038
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(224,53,53,0.08)",
                    border: "1px solid rgba(224,53,53,0.25)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>⚡</span>
                  <span style={{ fontFamily: "var(--font-fine)", fontSize: "0.8125rem", color: "var(--text-primary)", fontWeight: 600 }}>
                    Guaranteed response within 24 business hours.
                  </span>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: "var(--text-primary)",
                    margin: "0 0 1rem",
                  }}
                >
                  Frequently Asked Questions
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {FAQS.map((faq, i) => (
                    <div
                      key={faq.q}
                      style={{
                        backgroundColor: "var(--surface-2)",
                        border: "1px solid var(--border-default)",
                        borderRadius: "var(--radius-sm)",
                        overflow: "hidden",
                      }}
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "1rem 1.25rem",
                          backgroundColor: "transparent",
                          border: "none",
                          color: "var(--text-primary)",
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <span>{faq.q}</span>
                        <span style={{ color: "var(--clr-branding)", fontWeight: 700 }}>
                          {activeFaq === i ? "−" : "+"}
                        </span>
                      </button>
                      {activeFaq === i && (
                        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid var(--border-subtle)" }}>
                          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6", margin: "0.75rem 0 0" }}>
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
