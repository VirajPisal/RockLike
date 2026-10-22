import { useState } from "react";
import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "Branding Solutions", href: "/services/branding" },
  { label: "Video Production", href: "/services/video-production" },
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Brand Building Strategies", href: "/services/brand-building-strategies" },
  { label: "Celebrity Management", href: "/services/celebrity-management" },
  { label: "Event Designing", href: "/services/event-designing" },
  { label: "Franchise Development", href: "/services/franchise-development" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Rocklike", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Selected Work", href: "/work" },
  { label: "Events & Summits", href: "/events" },
  { label: "Start a Project", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Vimeo", href: "https://vimeo.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--surface-1)",
        borderTop: "1px solid var(--border-default)",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "300px",
          background: "radial-gradient(ellipse at bottom, rgba(224,53,53,0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3.5rem",
            marginBottom: "4.5rem",
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div style={{ maxWidth: "34ch" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                flexDirection: "column",
                gap: "0.15rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.75rem",
                  letterSpacing: "0.06em",
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                Rocklike
              </span>
              <span
                style={{
                  fontFamily: "var(--font-fine)",
                  fontWeight: 400,
                  fontSize: "0.5625rem",
                  letterSpacing: "0.28em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                Techventures
              </span>
            </Link>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--text-secondary)",
                margin: "0 0 1.75rem",
              }}
            >
              A creative agency and techventure studio building the brands, stories, and growth engines of tomorrow's market leaders.
            </p>

            <a
              href="mailto:hello@rocklike.co"
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--clr-branding)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              hello@rocklike.co
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                margin: "0 0 1.5rem",
              }}
            >
              Services (8)
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color var(--ease-fast)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                margin: "0 0 1.5rem",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {companyLinks.map((c) => (
                <li key={c.href}>
                  <Link
                    to={c.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color var(--ease-fast)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dispatch / Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                margin: "0 0 1.5rem",
              }}
            >
              The Dispatch
            </h4>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: "var(--leading-relaxed)",
                margin: "0 0 1.25rem",
              }}
            >
              Insights on brand architecture, creative capital, and media performance. Sent monthly.
            </p>

            {subscribed ? (
              <div
                style={{
                  padding: "0.875rem 1rem",
                  backgroundColor: "rgba(5, 150, 105, 0.15)",
                  border: "1px solid rgba(5, 150, 105, 0.4)",
                  borderRadius: "var(--radius-sm)",
                  color: "#34D399",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.5 12L13 4" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Subscribed to Rocklike Insights.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    style={{
                      flex: 1,
                      backgroundColor: "var(--surface-2)",
                      border: "1px solid var(--border-default)",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.75rem 1rem",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "var(--clr-branding)",
                      border: "none",
                      color: "#fff",
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "0.75rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                      transition: "filter var(--ease-fast)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.filter = "brightness(1.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.filter = "none";
                    }}
                  >
                    Join
                  </button>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.6875rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Strictly high-signal. No spam, ever.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Hairline Divider */}
        <hr className="divider" style={{ marginBottom: "2rem" }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "var(--text-xs)",
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            © {year} Rocklike Techventures Private Limited. All rights reserved.
          </p>

          {/* Socials */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "var(--tracking-wide)",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color var(--ease-fast)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
