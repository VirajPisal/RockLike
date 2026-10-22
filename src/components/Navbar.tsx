import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandLogo from "./common/BrandLogo";

const serviceLinks = [
  { num: "01", label: "Branding Solutions", href: "/services/branding", accent: "var(--clr-branding)" },
  { num: "02", label: "Video Production & Content Creation", href: "/services/video-production", accent: "var(--clr-video)" },
  { num: "03", label: "Performance Marketing", href: "/services/performance-marketing", accent: "var(--clr-performance)" },
  { num: "04", label: "Social Media Marketing", href: "/services/social-media-marketing", accent: "var(--clr-social)" },
  { num: "05", label: "Brand Building & Strategies", href: "/services/brand-building-strategies", accent: "var(--clr-strategy)" },
  { num: "06", label: "Celebrity Management", href: "/services/celebrity-management", accent: "var(--clr-celebrity)" },
  { num: "07", label: "Event Designing", href: "/services/event-designing", accent: "var(--clr-events)" },
  { num: "08", label: "Franchise Development", href: "/services/franchise-development", accent: "var(--clr-franchise)" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Work", href: "/work" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: "var(--z-nav)" as any,
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-default)"
            : "1px solid transparent",
          transition:
            "background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "var(--container-max)",
            marginInline: "auto",
            paddingInline: "var(--grid-gutter)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Official Brand Logo */}
          <BrandLogo size="md" />

          {/* Desktop links */}
          <div
            className="nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
            }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    ref={servicesRef}
                    style={{ position: "relative" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.75rem",
                        fontWeight: active ? 600 : 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: active || servicesOpen ? "var(--text-primary)" : "var(--text-muted)",
                        background: "none",
                        border: "none",
                        padding: "0.5rem 0.875rem",
                        borderRadius: "var(--radius-xs)",
                        transition: "color var(--ease-fast)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        position: "relative",
                      }}
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: "transform var(--ease-fast)", transform: servicesOpen ? "rotate(180deg)" : "none", opacity: 0.5 }}>
                        <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {active && (
                        <span style={{ position: "absolute", bottom: "0.25rem", left: "50%", transform: "translateX(-50%)", width: "0.25rem", height: "0.25rem", borderRadius: "50%", backgroundColor: "var(--clr-branding)" }} />
                      )}
                    </button>

                    {/* Services dropdown panel */}
                    {servicesOpen && (
                      <div className="nav-services-dropdown">
                        <div className="nav-services-dropdown__inner">
                          {serviceLinks.map((s) => (
                            <Link key={s.href} to={s.href} className="nav-svc-item">
                              <span className="nav-svc-item__num" style={{ color: s.accent }}>{s.num}</span>
                              <span className="nav-svc-item__label">{s.label}</span>
                              <svg className="nav-svc-item__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Link>
                          ))}
                          <div className="nav-services-dropdown__footer">
                            <Link to="/services" className="nav-services-dropdown__all">
                              View All Services
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.75rem",
                    fontWeight: active ? 600 : 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: active ? "var(--text-primary)" : "var(--text-muted)",
                    textDecoration: "none",
                    padding: "0.5rem 0.875rem",
                    borderRadius: "var(--radius-xs)",
                    transition: "color var(--ease-fast)",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "0.2rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "1.2rem",
                        height: "2px",
                        borderRadius: "9999px",
                        backgroundColor: "var(--clr-gold)",
                        boxShadow: "0 0 8px var(--clr-gold)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Actions: Log in + Contact me pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
            <Link
              to="/contact"
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color var(--ease-fast)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
            >
              Log in
            </Link>
            <Link
              to="/contact"
              className="nav-cta"
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: "#07090E",
                textDecoration: "none",
                backgroundColor: "var(--clr-gold)",
                padding: "0.55rem 1.25rem",
                borderRadius: "9999px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 2px 14px rgba(212, 160, 36, 0.28)",
                transition: "transform var(--ease-fast), background-color var(--ease-fast), box-shadow var(--ease-fast)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "var(--clr-gold-light)";
                el.style.transform = "translateY(-1px)";
                el.style.boxShadow = "0 4px 20px rgba(212, 160, 36, 0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "var(--clr-gold)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 14px rgba(212, 160, 36, 0.28)";
              }}
            >
              <span>Contact me</span>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="hamburger"
              style={{
                background: "none",
                border: "1px solid var(--border-strong)",
                borderRadius: "var(--radius-xs)",
                cursor: "pointer",
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: 0,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "1.125rem",
                  height: "1.5px",
                  backgroundColor: "var(--text-primary)",
                  transition:
                    "transform var(--ease-base), opacity var(--ease-base)",
                  transform: menuOpen
                    ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "1.125rem",
                  height: "1.5px",
                  backgroundColor: "var(--text-primary)",
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity var(--ease-base)",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "1.125rem",
                  height: "1.5px",
                  backgroundColor: "var(--text-primary)",
                  transition:
                    "transform var(--ease-base), opacity var(--ease-base)",
                  transform: menuOpen
                    ? "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / tablet overlay menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: "calc(var(--z-nav) - 1)" as any,
            backgroundColor: "var(--surface-0)",
            paddingTop: "var(--nav-height)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "3rem var(--grid-gutter) 2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0",
              flexGrow: 1,
            }}
          >
            {navLinks.map((link, i) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    style={{
                      borderBottom: "1px solid var(--border-subtle)",
                      opacity: 0,
                      animation: `mobileNavIn 220ms ${80 + i * 45}ms ease both`,
                    }}
                  >
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(2rem, 6vw, 3.25rem)",
                        letterSpacing: "var(--tracking-display)",
                        color: isActive(link.href) ? "var(--clr-branding)" : "var(--text-primary)",
                        background: "none",
                        border: "none",
                        padding: "0.875rem 0",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                      }}
                    >
                      {link.label}
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.3, transform: mobileServicesOpen ? "rotate(90deg)" : "none", transition: "transform var(--ease-fast)" }}>
                        <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div style={{ paddingBottom: "1rem" }}>
                        {serviceLinks.map((s) => (
                          <Link key={s.href} to={s.href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.625rem 0", textDecoration: "none", borderBottom: "1px solid var(--border-subtle)" }}>
                            <span style={{ fontFamily: "var(--font-fine)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.12em", color: s.accent, minWidth: "1.5rem" }}>{s.num}</span>
                            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--text-secondary)", flex: 1 }}>{s.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 6vw, 3.25rem)",
                    letterSpacing: "var(--tracking-display)",
                    color: isActive(link.href) ? "var(--clr-branding)" : "var(--text-primary)",
                    textDecoration: "none",
                    padding: "0.875rem 0",
                    borderBottom: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    opacity: 0,
                    animation: `mobileNavIn 220ms ${80 + i * 45}ms ease both`,
                  }}
                >
                  {link.label}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.3 }}>
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              );
            })}

            <div style={{ marginTop: "2.5rem" }}>
              <Link
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  backgroundColor: "var(--clr-branding)",
                  color: "#fff",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "1.125rem 2rem",
                  borderRadius: "var(--radius-sm)",
                  textDecoration: "none",
                }}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .nav-links { display: flex !important; }
          .nav-cta { display: inline-block !important; }
          .hamburger { display: none !important; }
        }
        @media (max-width: 1023px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @keyframes mobileNavIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Services dropdown */
        .nav-services-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          animation: dropdownIn 160ms ease both;
        }
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .nav-services-dropdown__inner {
          background-color: rgba(16,16,16,0.97);
          backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.875rem;
          padding: 0.5rem;
          width: 340px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.7);
        }
        .nav-svc-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.625rem 0.875rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: background-color var(--ease-fast);
        }
        .nav-svc-item:hover { background-color: rgba(255,255,255,0.06); }
        .nav-svc-item:hover .nav-svc-item__label { color: var(--text-primary); }
        .nav-svc-item:hover .nav-svc-item__arrow { opacity: 1; }
        .nav-svc-item__num {
          font-family: var(--font-fine); font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 0.14em; min-width: 1.5rem; flex-shrink: 0;
        }
        .nav-svc-item__label {
          font-family: var(--font-body); font-size: 0.8125rem; font-weight: 500;
          color: var(--text-secondary); flex: 1;
          transition: color var(--ease-fast);
        }
        .nav-svc-item__arrow {
          color: var(--text-disabled); flex-shrink: 0; opacity: 0;
          transition: opacity var(--ease-fast);
        }
        .nav-services-dropdown__footer {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 0.5rem 0.875rem 0.25rem;
          margin-top: 0.25rem;
        }
        .nav-services-dropdown__all {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-fine); font-size: 0.6875rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--clr-branding); text-decoration: none;
          transition: opacity var(--ease-fast);
        }
        .nav-services-dropdown__all:hover { opacity: 0.8; }
      `}</style>
    </>
  );
}
