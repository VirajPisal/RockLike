import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import { submitInquiry } from "../lib/supabase";

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
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Branding Solutions",
  ]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$25k – $50k");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGmail, setCopiedGmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@rocklike.co");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyGmail = () => {
    navigator.clipboard.writeText("rocklike.tech@gmail.com");
    setCopiedGmail(true);
    setTimeout(() => setCopiedGmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+919175339499");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitting(true);
    setSubmitError(null);

    const res = await submitInquiry({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      selected_services: selectedServices,
      budget: selectedBudget,
      message: formData.message,
    });

    setSubmitting(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      setSubmitError(res.error || "Unable to save inquiry. Please try again or reach out directly via rocklike.tech@gmail.com.");
    }
  };

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
          {/* Dual ambient glow: Royal Blue and Gold */}
          <div
            style={{
              position: "absolute",
              top: "-25%",
              left: "20%",
              width: "60vw",
              height: "60vw",
              maxWidth: "750px",
              background: "radial-gradient(circle, rgba(13,82,156,0.22) 0%, rgba(212,160,36,0.12) 45%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              right: "5%",
              width: "45vw",
              height: "45vw",
              maxWidth: "500px",
              background: "radial-gradient(circle, rgba(212,160,36,0.08) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs
            items={[{ label: "Direct Studio Access" }]}
            accent="var(--clr-gold)"
          />

          <div style={{ maxWidth: "800px", marginTop: "2rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--clr-gold)",
                backgroundColor: "rgba(212, 160, 36, 0.1)",
                border: "1px solid rgba(212, 160, 36, 0.25)",
                padding: "0.35rem 0.85rem",
                borderRadius: "9999px",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--clr-gold)",
                  boxShadow: "0 0 8px var(--clr-gold)",
                }}
              />
              Direct Studio Access &amp; Partnerships
            </div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                margin: "0 0 1.5rem",
              }}
            >
              Let's Build Something <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 20%, #E5B842 70%, #D4A024 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Category-Defining.
              </span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "clamp(1rem, 1.35vw, 1.1875rem)",
                lineHeight: "1.7",
                color: "#94A3B8",
                margin: 0,
                maxWidth: "650px",
              }}
            >
              We partner with visionary founders, enterprise leadership, and category disruptors. Share your objectives below and our executive creative directors will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT FORM & STUDIO DETAILS
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "#06080D", position: "relative" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "3.5rem",
              alignItems: "start",
            }}
          >
            {/* ─── Left Column: High-End Inquiry Form ─── */}
            <div
              style={{
                background: "linear-gradient(165deg, rgba(20, 27, 41, 0.88) 0%, rgba(10, 14, 24, 0.98) 100%)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "1.5rem",
                padding: "clamp(2rem, 4vw, 3rem)",
                boxShadow: "0 24px 64px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 0 50px rgba(13, 82, 156, 0.12)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Golden Ambient Top Highlight Line */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  left: "10%",
                  right: "10%",
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #D4A024, #0D529C, transparent)",
                }}
              />

              {submitted ? (
                <div style={{ textAlign: "center", padding: "3.5rem 1.5rem" }}>
                  <div
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, rgba(212, 160, 36, 0.2) 0%, rgba(13, 82, 156, 0.25) 100%)",
                      border: "2px solid #D4A024",
                      color: "#E5B842",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.75rem",
                      boxShadow: "0 0 30px rgba(212, 160, 36, 0.35)",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="#E5B842" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "2.25rem",
                      color: "#FFFFFF",
                      margin: "0 0 0.85rem",
                    }}
                  >
                    Inquiry Received.
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-fine)",
                      fontSize: "1rem",
                      lineHeight: "1.7",
                      color: "#94A3B8",
                      maxWidth: "42ch",
                      margin: "0 auto 2.25rem",
                    }}
                  >
                    Thank you, <strong style={{ color: "#FFFFFF" }}>{formData.name}</strong>. Our executive strategy team is reviewing your brief and will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", company: "", message: "" });
                      setSelectedServices(["Branding Solutions"]);
                    }}
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "9999px",
                      padding: "0.85rem 2rem",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--clr-gold)";
                      e.currentTarget.style.color = "var(--clr-gold-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                  >
                    Send Another Strategic Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
                  {/* STEP 1: CAPABILITIES */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <span
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(212, 160, 36, 0.15)",
                            color: "var(--clr-gold)",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "var(--font-fine)",
                            border: "1px solid rgba(212, 160, 36, 0.35)",
                          }}
                        >
                          1
                        </span>
                        <label
                          style={{
                            fontFamily: "var(--font-fine)",
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#E2E8F0",
                          }}
                        >
                          What capabilities do you require?
                        </label>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--clr-gold)",
                          backgroundColor: "rgba(212, 160, 36, 0.1)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "4px",
                          border: "1px solid rgba(212, 160, 36, 0.25)",
                        }}
                      >
                        Select Multiple
                      </span>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {SERVICES_LIST.map((s) => {
                        const isSelected = selectedServices.includes(s);
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => toggleService(s)}
                            style={{
                              background: isSelected
                                ? "linear-gradient(135deg, #0D529C 0%, #1E40AF 100%)"
                                : "rgba(255, 255, 255, 0.03)",
                              color: isSelected ? "#FFFFFF" : "#94A3B8",
                              border: `1px solid ${
                                isSelected ? "#D4A024" : "rgba(255, 255, 255, 0.09)"
                              }`,
                              borderRadius: "8px",
                              padding: "0.55rem 0.95rem",
                              fontFamily: "var(--font-fine)",
                              fontSize: "0.8125rem",
                              fontWeight: isSelected ? 600 : 500,
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.45rem",
                              boxShadow: isSelected
                                ? "0 4px 16px rgba(13, 82, 156, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                                : "none",
                              transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
                              transform: isSelected ? "translateY(-1px)" : "none",
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "rgba(13, 82, 156, 0.6)";
                                e.currentTarget.style.color = "#FFFFFF";
                                e.currentTarget.style.backgroundColor = "rgba(13, 82, 156, 0.12)";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.09)";
                                e.currentTarget.style.color = "#94A3B8";
                                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                              }
                            }}
                          >
                            <span
                              style={{
                                color: isSelected ? "var(--clr-gold)" : "#64748B",
                                fontWeight: 800,
                                fontSize: "0.85rem",
                              }}
                            >
                              {isSelected ? "✓" : "+"}
                            </span>
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 2: BUDGET SELECTOR */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "6px",
                          backgroundColor: "rgba(212, 160, 36, 0.15)",
                          color: "var(--clr-gold)",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-fine)",
                          border: "1px solid rgba(212, 160, 36, 0.35)",
                        }}
                      >
                        2
                      </span>
                      <label
                        style={{
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#E2E8F0",
                        }}
                      >
                        Estimated Project or Monthly Budget
                      </label>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {BUDGET_RANGES.map((b) => {
                        const isBudgetSelected = selectedBudget === b;
                        return (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setSelectedBudget(b)}
                            style={{
                              background: isBudgetSelected
                                ? "linear-gradient(135deg, rgba(212, 160, 36, 0.18) 0%, rgba(13, 82, 156, 0.22) 100%)"
                                : "rgba(255, 255, 255, 0.03)",
                              color: isBudgetSelected ? "#FFFFFF" : "#94A3B8",
                              border: `1px solid ${
                                isBudgetSelected ? "var(--clr-gold)" : "rgba(255, 255, 255, 0.09)"
                              }`,
                              borderRadius: "8px",
                              padding: "0.55rem 1rem",
                              fontFamily: "var(--font-fine)",
                              fontSize: "0.8125rem",
                              fontWeight: isBudgetSelected ? 700 : 500,
                              cursor: "pointer",
                              boxShadow: isBudgetSelected
                                ? "0 0 20px rgba(212, 160, 36, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                                : "none",
                              transition: "all 0.18s ease",
                            }}
                            onMouseEnter={(e) => {
                              if (!isBudgetSelected) {
                                e.currentTarget.style.borderColor = "rgba(212, 160, 36, 0.4)";
                                e.currentTarget.style.color = "#FFFFFF";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isBudgetSelected) {
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.09)";
                                e.currentTarget.style.color = "#94A3B8";
                              }
                            }}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 3: CONTACT INPUTS */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "6px",
                          backgroundColor: "rgba(212, 160, 36, 0.15)",
                          color: "var(--clr-gold)",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-fine)",
                          border: "1px solid rgba(212, 160, 36, 0.35)",
                        }}
                      >
                        3
                      </span>
                      <label
                        style={{
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#E2E8F0",
                        }}
                      >
                        Your Contact &amp; Brand Details
                      </label>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            width: "100%",
                            boxSizing: "border-box",
                            backgroundColor: "rgba(10, 14, 24, 0.75)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: "10px",
                            padding: "0.95rem 1.15rem",
                            color: "#FFFFFF",
                            fontFamily: "var(--font-fine)",
                            fontSize: "0.9375rem",
                            outline: "none",
                            transition: "all 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "var(--clr-gold)";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(212, 160, 36, 0.2)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Work Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: "100%",
                            boxSizing: "border-box",
                            backgroundColor: "rgba(10, 14, 24, 0.75)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: "10px",
                            padding: "0.95rem 1.15rem",
                            color: "#FFFFFF",
                            fontFamily: "var(--font-fine)",
                            fontSize: "0.9375rem",
                            outline: "none",
                            transition: "all 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "var(--clr-gold)";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(212, 160, 36, 0.2)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="Company or Brand Name (e.g. Apex Global, D2C Venture)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "10px",
                        padding: "0.95rem 1.15rem",
                        color: "#FFFFFF",
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.9375rem",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--clr-gold)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(212, 160, 36, 0.2)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />

                    <textarea
                      rows={4}
                      placeholder="Tell us about your brand challenge, current metrics, and key milestones..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(10, 14, 24, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "10px",
                        padding: "0.95rem 1.15rem",
                        color: "#FFFFFF",
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.9375rem",
                        outline: "none",
                        resize: "vertical",
                        transition: "all 0.2s ease",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--clr-gold)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(212, 160, 36, 0.2)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* High-Impact Luxury Submit Button */}
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      background: "linear-gradient(135deg, #0D529C 0%, #1D4ED8 100%)",
                      border: "1px solid rgba(212, 160, 36, 0.6)",
                      borderRadius: "12px",
                      padding: "1.15rem 2rem",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      cursor: submitting ? "not-allowed" : "pointer",
                      opacity: submitting ? 0.75 : 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.75rem",
                      boxShadow: "0 12px 36px rgba(13, 82, 156, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 18px 48px rgba(13, 82, 156, 0.6), 0 0 30px rgba(212, 160, 36, 0.45)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 12px 36px rgba(13, 82, 156, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.25)";
                      }
                    }}
                  >
                    <span>{submitting ? "Sending to Rocklike..." : "Submit Strategic Inquiry"}</span>
                    {!submitting && (
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="#E5B842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>

                  {submitError && (
                    <div
                      style={{
                        padding: "0.85rem 1rem",
                        backgroundColor: "rgba(239, 68, 68, 0.12)",
                        border: "1px solid rgba(239, 68, 68, 0.35)",
                        borderRadius: "8px",
                        color: "#F87171",
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.8125rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {submitError}
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* ─── Right Column: Direct Line & Studio Access ─── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div>
                <SectionHeading
                  eyebrow="Direct Executive Line"
                  title="Direct Access to Creative Directors"
                  subtitle="We skip junior account layers. When you engage Rocklike, you collaborate directly with seasoned executive practitioners."
                  accent="var(--clr-gold)"
                />
              </div>

              {/* Studio Info Card */}
              <div
                style={{
                  background: "linear-gradient(165deg, rgba(20, 27, 41, 0.75) 0%, rgba(10, 14, 24, 0.92) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.75rem",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                }}
              >
                {/* Live Availability Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(5, 150, 105, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    width: "fit-content",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#10B981",
                      boxShadow: "0 0 10px #10B981",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#34D399",
                    }}
                  >
                    Partners Accepting Q2 / Q3 Engagements
                  </span>
                </div>

                {/* Direct Contact Details: Email & Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Primary Direct Email */}
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        color: "var(--clr-gold)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Official Inquiry &amp; Briefs
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
                      <a
                        href="mailto:rocklike.tech@gmail.com"
                        style={{
                          fontFamily: "var(--font-fine)",
                          fontWeight: 700,
                          fontSize: "1.25rem",
                          color: "#FFFFFF",
                          textDecoration: "none",
                          letterSpacing: "-0.01em",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-gold)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                      >
                        rocklike.tech@gmail.com
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyGmail}
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "6px",
                          padding: "0.25rem 0.6rem",
                          color: copiedGmail ? "var(--clr-gold)" : "#94A3B8",
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.6875rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {copiedGmail ? "✓ Copied" : "Copy"}
                      </button>
                    </div>
                    <div style={{ marginTop: "0.35rem" }}>
                      <a
                        href="mailto:hello@rocklike.co"
                        style={{
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.8125rem",
                          color: "#94A3B8",
                          textDecoration: "none",
                        }}
                      >
                        Or executive desk: <span style={{ color: "#E2E8F0", textDecoration: "underline" }}>hello@rocklike.co</span>
                      </a>
                    </div>
                  </div>

                  {/* Direct Phone & WhatsApp */}
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "10px",
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        color: "#94A3B8",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Direct Phone &amp; Instant WhatsApp
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-fine)",
                          fontWeight: 800,
                          fontSize: "1.375rem",
                          color: "#FFFFFF",
                          letterSpacing: "0.02em",
                        }}
                      >
                        +91 9175339499
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        style={{
                          background: "rgba(255, 255, 255, 0.06)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "6px",
                          padding: "0.25rem 0.6rem",
                          color: copiedPhone ? "var(--clr-gold)" : "#94A3B8",
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.6875rem",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        {copiedPhone ? "✓ Copied" : "Copy"}
                      </button>
                    </div>

                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      <a
                        href="tel:+919175339499"
                        style={{
                          backgroundColor: "rgba(212, 160, 36, 0.15)",
                          border: "1px solid rgba(212, 160, 36, 0.4)",
                          color: "var(--clr-gold)",
                          padding: "0.45rem 0.85rem",
                          borderRadius: "6px",
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        Call Studio
                      </a>
                      <a
                        href="https://wa.me/919175339499"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: "rgba(37, 211, 102, 0.15)",
                          border: "1px solid rgba(37, 211, 102, 0.35)",
                          color: "#4ADE80",
                          padding: "0.45rem 0.85rem",
                          borderRadius: "6px",
                          fontFamily: "var(--font-fine)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        WhatsApp Direct ↗
                      </a>
                    </div>
                  </div>
                </div>

                <hr style={{ border: "none", borderTop: "1px solid rgba(255, 255, 255, 0.08)", margin: 0 }} />

                {/* Satara Technology & Operations Campus */}
                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(212, 160, 36, 0.15)",
                      border: "1px solid rgba(212, 160, 36, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--clr-gold)",
                      flexShrink: 0,
                    }}
                  >
                    📍
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--clr-gold)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Satara Technology Hub &amp; Campus
                    </div>
                    <p style={{ fontFamily: "var(--font-fine)", fontSize: "0.875rem", color: "#E2E8F0", lineHeight: "1.5", margin: 0 }}>
                      Satara IT-Park Online Exam Centre, Old MIDC <br />
                      <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>Opp. LIC Divisional Office, Satara, Maharashtra 415004</span>
                    </p>
                    <a
                      href="#location-map"
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--clr-gold)",
                        textDecoration: "underline",
                        display: "inline-block",
                        marginTop: "0.4rem",
                      }}
                    >
                      View Satellite &amp; Road Map Below ↓
                    </a>
                  </div>
                </div>

                {/* Mumbai Studio */}
                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(13, 82, 156, 0.15)",
                      border: "1px solid rgba(13, 82, 156, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#60A5FA",
                      flexShrink: 0,
                    }}
                  >
                    🎬
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Mumbai Flagship Studio
                    </div>
                    <p style={{ fontFamily: "var(--font-fine)", fontSize: "0.875rem", color: "#94A3B8", lineHeight: "1.5", margin: 0 }}>
                      Rocklike Techventures Studio, BKC G-Block, Mumbai 400051 <br />
                      <span style={{ fontSize: "0.75rem", color: "#64748B" }}>Creative Direction &amp; Cinema Production</span>
                    </p>
                  </div>
                </div>

                {/* Bengaluru Hub */}
                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#94A3B8",
                      flexShrink: 0,
                    }}
                  >
                    🏢
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Bengaluru Technology Hub
                    </div>
                    <p style={{ fontFamily: "var(--font-fine)", fontSize: "0.875rem", color: "#94A3B8", lineHeight: "1.5", margin: 0 }}>
                      Indiranagar 100ft Road, Bengaluru 560038 <br />
                      <span style={{ fontSize: "0.75rem", color: "#64748B" }}>Technology Engineering &amp; Media Scaling</span>
                    </p>
                  </div>
                </div>

                {/* SLA Response Guarantee */}
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(212, 160, 36, 0.12) 0%, rgba(13, 82, 156, 0.1) 100%)",
                    border: "1px solid rgba(212, 160, 36, 0.35)",
                    borderRadius: "10px",
                    padding: "1rem 1.15rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                  }}
                >
                  <span style={{ fontSize: "1.25rem", color: "var(--clr-gold)" }}>⚡</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.8125rem", color: "#FFFFFF", fontWeight: 700 }}>
                      Guaranteed Response SLA
                    </div>
                    <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.75rem", color: "#CBD5E1", marginTop: "0.15rem" }}>
                      Direct partner response within 24 business hours.
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                    margin: "0 0 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--clr-gold)" }}>✦</span> Frequently Asked Questions
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {FAQS.map((faq, i) => {
                    const isOpen = activeFaq === i;
                    return (
                      <div
                        key={faq.q}
                        style={{
                          background: "rgba(20, 27, 41, 0.6)",
                          border: `1px solid ${isOpen ? "rgba(212, 160, 36, 0.4)" : "rgba(255, 255, 255, 0.08)"}`,
                          borderRadius: "10px",
                          overflow: "hidden",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : i)}
                          style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "1.1rem 1.25rem",
                            backgroundColor: "transparent",
                            border: "none",
                            color: isOpen ? "#FFFFFF" : "#E2E8F0",
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
                          <span
                            style={{
                              color: "var(--clr-gold)",
                              fontWeight: 800,
                              fontSize: "1.1rem",
                              transition: "transform 0.2s ease",
                              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            }}
                          >
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                            <p
                              style={{
                                fontFamily: "var(--font-fine)",
                                fontSize: "0.875rem",
                                color: "#94A3B8",
                                lineHeight: "1.65",
                                margin: "0.75rem 0 0",
                              }}
                            >
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SATARA CAMPUS LOCATION MAP
      ══════════════════════════════════════════ */}
      <section
        id="location-map"
        className="section"
        style={{
          backgroundColor: "#070A10",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          position: "relative",
          paddingTop: "4.5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px", marginBottom: "2.5rem" }}>
            <SectionHeading
              eyebrow="Campus &amp; Physical Presence"
              title="Visit Rocklike Studio in Satara"
              subtitle="Headquartered at Satara IT-Park, Old MIDC (opposite LIC Divisional Office). Meet our leadership, explore our studio space, and brainstorm high-impact growth strategies."
              accent="var(--clr-gold)"
              size="sm"
            />
          </div>

          {/* Map Frame matching User Reference Image */}
          <div
            style={{
              position: "relative",
              borderRadius: "1.25rem",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              backgroundColor: "#0F172A",
            }}
          >
            {/* Top-Left Floating 'Open in Maps ↗' button matching user screenshot */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Satara+IT-Park+Online+Exam+Centre+Satara"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                top: "1.25rem",
                left: "1.25rem",
                zIndex: 20,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(15, 23, 42, 0.92)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#FFFFFF",
                padding: "0.6rem 1.1rem",
                borderRadius: "8px",
                fontFamily: "var(--font-fine)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.98)";
                e.currentTarget.style.borderColor = "var(--clr-gold)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.92)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>Open in Maps</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            {/* Embedded Google Map */}
            <div style={{ position: "relative", width: "100%", height: "520px", background: "#1E293B" }}>
              <iframe
                title="Rocklike Satara Location Map"
                src="https://maps.google.com/maps?q=Satara+IT-Park+Online+Exam+Centre,Satara,Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "contrast(102%) brightness(95%)",
                  display: "block",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Location Details Bottom Bar */}
            <div
              style={{
                backgroundColor: "rgba(10, 14, 24, 0.96)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "1.5rem 2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--clr-gold)",
                    marginBottom: "0.35rem",
                  }}
                >
                  Campus Address
                </div>
                <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.9375rem", fontWeight: 600, color: "#FFFFFF" }}>
                  Satara IT-Park Online Exam Centre &amp; Tech Hub
                </div>
                <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.8125rem", color: "#94A3B8", marginTop: "0.2rem" }}>
                  Old MIDC Area, Opp. LIC Divisional Office, Satara, Maharashtra 415004
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--clr-gold)",
                    marginBottom: "0.35rem",
                  }}
                >
                  Direct Contact &amp; Hours
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a
                    href="tel:+919175339499"
                    style={{
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      textDecoration: "none",
                    }}
                  >
                    +91 9175339499
                  </a>
                  <span style={{ color: "#475569" }}>·</span>
                  <a
                    href="mailto:rocklike.tech@gmail.com"
                    style={{
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#CBD5E1",
                      textDecoration: "none",
                    }}
                  >
                    rocklike.tech@gmail.com
                  </a>
                </div>
                <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.75rem", color: "#64748B", marginTop: "0.25rem" }}>
                  Mon – Sat: 09:30 AM – 07:30 PM IST · Visitors by Appointment
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-start", flexWrap: "wrap" }}>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Satara+IT-Park+Online+Exam+Centre+Satara"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "var(--clr-gold)",
                    color: "#07090E",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "8px",
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    boxShadow: "0 4px 15px rgba(212, 160, 36, 0.25)",
                  }}
                >
                  Get Directions ↗
                </a>

                <a
                  href="https://wa.me/919175339499"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "rgba(37, 211, 102, 0.15)",
                    border: "1px solid rgba(37, 211, 102, 0.4)",
                    color: "#4ADE80",
                    padding: "0.75rem 1.15rem",
                    borderRadius: "8px",
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                  }}
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
