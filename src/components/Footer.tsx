import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "Branding", href: "/branding" },
  { label: "Video Production", href: "/video-production" },
  { label: "Performance Marketing", href: "/performance-marketing" },
  { label: "All Services", href: "/services" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Vimeo", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--surface-1)",
        borderTop: "1px solid var(--border-default)",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            marginBottom: "4rem",
            alignItems: "flex-start",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "36ch" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                flexDirection: "column",
                gap: "0.1rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.75rem",
                  letterSpacing: "0.05em",
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
                  letterSpacing: "0.25em",
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
                margin: "0 0 2rem",
              }}
            >
              A creative agency building the brands, stories, and growth engines of tomorrow's market leaders.
            </p>

            <a
              href="mailto:hello@rocklike.co"
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                color: "var(--clr-branding)",
                textDecoration: "none",
                letterSpacing: "var(--tracking-wide)",
              }}
            >
              hello@rocklike.co
            </a>
          </div>

          {/* CTA block */}
          <div
            style={{
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-md)",
              padding: "2rem",
              textAlign: "center",
              minWidth: "18rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "var(--tracking-display)",
                color: "var(--text-primary)",
                margin: "0 0 0.5rem",
                lineHeight: "var(--leading-snug)",
              }}
            >
              Ready to build something remarkable?
            </p>
            <p
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
                margin: "0 0 1.5rem",
              }}
            >
              We take on 4 new clients per quarter.
            </p>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "var(--clr-branding)",
                color: "#fff",
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                transition: "opacity var(--ease-fast)",
              }}
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--border-default)",
            marginBottom: "2rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                margin: "0 0 1.25rem",
              }}
            >
              Services
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color var(--ease-fast)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                margin: "0 0 1.25rem",
              }}
            >
              Company
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color var(--ease-fast)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                margin: "0 0 1.25rem",
              }}
            >
              Follow
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color var(--ease-fast)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "0.6875rem",
              color: "var(--text-disabled)",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            © {year} Rocklike Techventures. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  color: "var(--text-disabled)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "color var(--ease-fast)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-disabled)"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
