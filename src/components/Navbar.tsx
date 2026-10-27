import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandLogo from "./common/BrandLogo";

const serviceLinks = [
  {
    num: "01",
    label: "Branding Solutions",
    subtitle: "Identity & Visual Systems",
    href: "/services/branding",
    numColor: "#2563EB",
    image: "/assets/services/svc_branding.jpg",
  },
  {
    num: "02",
    label: "Video Production",
    subtitle: "Cinematic Visuals & Motion",
    href: "/services/video-production",
    numColor: "#3B82F6",
    image: "/assets/services/svc_video.jpg",
  },
  {
    num: "03",
    label: "Performance Marketing",
    subtitle: "Full-Funnel Growth & ROI",
    href: "/services/performance-marketing",
    numColor: "#10B981",
    image: "/assets/services/svc_performance.jpg",
  },
  {
    num: "04",
    label: "Social Media Marketing",
    subtitle: "Community & Cultural Narrative",
    href: "/services/social-media-marketing",
    numColor: "#A855F7",
    image: "/assets/services/svc_social.jpg",
  },
  {
    num: "05",
    label: "Brand Building & Strategies",
    subtitle: "Strategic Architecture",
    href: "/services/brand-building-strategies",
    numColor: "#F59E0B",
    image: "/assets/services/svc_strategy.jpg",
  },
  {
    num: "06",
    label: "Celebrity Management",
    subtitle: "Talent & Endorsements",
    href: "/services/celebrity-management",
    numColor: "#C084FC",
    image: "/assets/services/svc_celebrity.jpg",
  },
  {
    num: "07",
    label: "Event Designing",
    subtitle: "Spatial & Immersive Experiences",
    href: "/services/event-designing",
    numColor: "#F97316",
    image: "/assets/services/svc_event.jpg",
  },
  {
    num: "08",
    label: "Franchise Development",
    subtitle: "Scaling Systems & Expansion",
    href: "/services/franchise-development",
    numColor: "#0EA5E9",
    image: "/assets/services/svc_franchise.jpg",
  },
];

// Note: "Work" button removed from nav as requested; page code and route preserved intact.
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastHoverTime = useRef<number>(0);
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
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    lastHoverTime.current = Date.now();
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 500);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    // If hover just triggered in last 600ms, user clicked to interact/ensure open -> keep open
    if (Date.now() - lastHoverTime.current < 600) {
      setServicesOpen(true);
    } else {
      setServicesOpen((prev) => !prev);
    }
  };

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
          backgroundColor: scrolled ? "rgba(7,9,14,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.08)"
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
              gap: "0.25rem",
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
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={handleButtonClick}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "0.75rem",
                        fontWeight: active || servicesOpen ? 600 : 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: active || servicesOpen ? "#FFFFFF" : "var(--text-muted)",
                        background: servicesOpen ? "rgba(255, 255, 255, 0.08)" : "none",
                        border: "1px solid " + (servicesOpen ? "rgba(212, 160, 36, 0.35)" : "transparent"),
                        padding: "0.5rem 0.875rem",
                        borderRadius: "9999px",
                        transition: "all var(--ease-fast)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        position: "relative",
                      }}
                    >
                      <span>{link.label}</span>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        style={{
                          transition: "transform 200ms ease, color 200ms ease",
                          transform: servicesOpen ? "rotate(180deg)" : "none",
                          color: servicesOpen ? "var(--clr-gold)" : "currentColor",
                          opacity: servicesOpen ? 1 : 0.6,
                        }}
                      >
                        <path
                          d="M2 3.75L5 6.75L8 3.75"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {active && !servicesOpen && (
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
                    </button>

                    {/* Services mega-menu dropdown matching the exact user mockup */}
                    {servicesOpen && (
                      <div
                        className="nav-services-dropdown"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="nav-services-dropdown__inner">
                          {/* Header */}
                          <div className="nav-services-dropdown__header">
                            <div>
                              <div className="nav-header-eyebrow">
                                <span className="nav-header-eyebrow-text">CAPABILITIES</span>
                                <span className="nav-header-eyebrow-line" />
                              </div>
                              <div className="nav-header-title">
                                <span className="nav-header-title-accent">8</span>
                                <span>Specialized Verticals</span>
                              </div>
                            </div>

                            <div className="nav-header-pill">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                              </svg>
                              <span>360° BRAND ARCHITECTURE</span>
                            </div>
                          </div>

                          {/* 2-Column Grid */}
                          <div className="nav-services-grid">
                            {serviceLinks.map((s) => (
                              <Link
                                key={s.href}
                                to={s.href}
                                className="nav-svc-card"
                                onClick={() => setServicesOpen(false)}
                              >
                                <div
                                  className="nav-svc-card__num"
                                  style={{ color: s.numColor }}
                                >
                                  {s.num}
                                </div>
                                <div className="nav-svc-card__divider" />
                                <div className="nav-svc-card__text">
                                  <div className="nav-svc-card__label">{s.label}</div>
                                  <div className="nav-svc-card__sub">{s.subtitle}</div>
                                </div>

                                {/* 3D luxury object on right with screen blend */}
                                <img
                                  src={s.image}
                                  alt={s.label}
                                  className="nav-svc-card__graphic"
                                  loading="eager"
                                />

                                <div className="nav-svc-card__arrow-btn">
                                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                    <path
                                      d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                                      stroke="currentColor"
                                      strokeWidth="1.4"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Footer */}
                          <div className="nav-services-dropdown__footer">
                            <div className="nav-services-dropdown__footer-left">
                              <span className="nav-services-dropdown__footer-dot" />
                              <span>End-to-End Strategic & Creative Execution</span>
                            </div>
                            <Link
                              to="/services"
                              className="nav-services-dropdown__all"
                              onClick={() => setServicesOpen(false)}
                            >
                              <span className="nav-services-dropdown__all-text">VIEW ALL 8 SERVICES</span>
                              <span className="nav-services-dropdown__all-icon">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                  <path
                                    d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
                                    stroke="#E5B842"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
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

          {/* Right CTA Action: Contact me pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
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
            overflowY: "auto",
          }}
        >
          <div
            style={{
              padding: "2rem var(--grid-gutter) 2.5rem",
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
                        color: isActive(link.href) ? "var(--clr-gold)" : "var(--text-primary)",
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
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        style={{
                          opacity: 0.6,
                          transform: mobileServicesOpen ? "rotate(90deg)" : "none",
                          transition: "transform var(--ease-fast)",
                          color: "var(--clr-gold)",
                        }}
                      >
                        <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div style={{ padding: "0.5rem 0 1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            to={s.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.85rem",
                              padding: "0.625rem 0.75rem",
                              textDecoration: "none",
                              borderRadius: "0.5rem",
                              background: "rgba(255, 255, 255, 0.03)",
                              border: "1px solid rgba(255, 255, 255, 0.05)",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "1rem",
                                fontWeight: 800,
                                color: s.numColor,
                                minWidth: "1.6rem",
                              }}
                            >
                              {s.num}
                            </span>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontFamily: "var(--font-fine)", fontSize: "0.875rem", fontWeight: 600, color: "#F8FAFC" }}>
                                {s.label}
                              </div>
                              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "#8E9BAE" }}>
                                {s.subtitle}
                              </div>
                            </div>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "var(--clr-gold)", opacity: 0.7 }}>
                              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
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
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 6vw, 3.25rem)",
                    letterSpacing: "var(--tracking-display)",
                    color: isActive(link.href) ? "var(--clr-gold)" : "var(--text-primary)",
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
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  backgroundColor: "var(--clr-gold)",
                  color: "#07090E",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "1.125rem 2rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(212, 160, 36, 0.35)",
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

        /* Services luxury mega-menu matching exact user reference mockup */
        .nav-services-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          animation: dropdownIn 180ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Wide invisible bridge so cursor never drops when hovering down or diagonally */
        .nav-services-dropdown::before {
          content: "";
          position: absolute;
          top: -30px;
          left: -120px;
          right: -120px;
          height: 45px;
          background: transparent;
        }

        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .nav-services-dropdown__inner {
          width: 1040px;
          max-width: calc(100vw - 32px);
          background: radial-gradient(ellipse 65% 50% at 85% 0%, rgba(212, 160, 36, 0.16), transparent 70%),
                      linear-gradient(168deg, #090E17 0%, #05070B 100%);
          backdrop-filter: blur(32px) saturate(200%);
          -webkit-backdrop-filter: blur(32px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 1.5rem;
          padding: 1.85rem 2rem 1.6rem;
          box-shadow: 0 32px 90px rgba(0, 0, 0, 0.88), 0 0 50px rgba(13, 82, 156, 0.18), inset 0 1px 0 rgba(212, 160, 36, 0.28);
          position: relative;
          overflow: hidden;
        }

        /* Ambient golden light curve across the top */
        .nav-services-dropdown__inner::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 480px;
          height: 180px;
          background: radial-gradient(ellipse at top right, rgba(212, 160, 36, 0.12), transparent 70%);
          pointer-events: none;
        }

        .nav-services-dropdown__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.35rem;
          position: relative;
          z-index: 2;
        }

        .nav-header-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-header-eyebrow-text {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: var(--clr-gold);
          text-transform: uppercase;
        }

        .nav-header-eyebrow-line {
          width: 44px;
          height: 1px;
          background: linear-gradient(90deg, rgba(212, 160, 36, 0.7), transparent);
        }

        .nav-header-title {
          font-family: var(--font-body);
          font-size: 2.125rem;
          font-weight: 600;
          color: #FFFFFF;
          letter-spacing: -0.015em;
          margin-top: 0.35rem;
          line-height: 1.1;
        }

        .nav-header-title-accent {
          color: var(--clr-gold);
          font-weight: 700;
          margin-right: 0.35rem;
        }

        .nav-header-pill {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #E5B842;
          background: rgba(212, 160, 36, 0.08);
          border: 1px solid rgba(212, 160, 36, 0.3);
          padding: 0.5rem 1.125rem;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          box-shadow: 0 2px 14px rgba(0, 0, 0, 0.35);
        }

        .nav-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.875rem;
          position: relative;
          z-index: 2;
        }

        .nav-svc-card {
          position: relative;
          overflow: hidden;
          height: 78px;
          border-radius: 0.875rem;
          background: rgba(14, 18, 27, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          align-items: center;
          padding: 0 1.125rem;
          text-decoration: none;
          transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-svc-card:hover {
          background: rgba(20, 26, 38, 0.96);
          border-color: rgba(212, 160, 36, 0.45);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 160, 36, 0.12);
        }

        .nav-svc-card__num {
          font-family: var(--font-body);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          min-width: 2.1rem;
          line-height: 1;
          flex-shrink: 0;
          transition: transform 180ms ease;
        }

        .nav-svc-card:hover .nav-svc-card__num {
          transform: scale(1.05);
        }

        .nav-svc-card__divider {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.08);
          margin: 0 1rem 0 0.75rem;
          flex-shrink: 0;
        }

        .nav-svc-card__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
          min-width: 0;
        }

        .nav-svc-card__label {
          font-family: var(--font-fine);
          font-size: 0.9375rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.25;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .nav-svc-card:hover .nav-svc-card__label {
          color: var(--clr-gold-light);
        }

        .nav-svc-card__sub {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: #94A3B8;
          margin-top: 3px;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .nav-svc-card:hover .nav-svc-card__sub {
          color: #CBD5E1;
        }

        .nav-svc-card__graphic {
          position: absolute;
          right: 48px;
          top: 50%;
          transform: translateY(-50%);
          height: 84px;
          width: 110px;
          pointer-events: none;
          object-fit: contain;
          mix-blend-mode: screen;
          filter: contrast(1.1) brightness(1.05);
          opacity: 0.92;
          transition: transform 220ms ease, opacity 220ms ease;
        }

        .nav-svc-card:hover .nav-svc-card__graphic {
          transform: translateY(-50%) scale(1.08);
          opacity: 1;
        }

        .nav-svc-card__arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.6);
          margin-left: auto;
          flex-shrink: 0;
          z-index: 2;
          transition: all 180ms ease;
        }

        .nav-svc-card:hover .nav-svc-card__arrow-btn {
          border-color: var(--clr-gold);
          color: var(--clr-gold);
          background: rgba(212, 160, 36, 0.12);
          transform: translateX(2px);
        }

        .nav-services-dropdown__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 0.25rem;
          position: relative;
          z-index: 2;
        }

        .nav-services-dropdown__footer-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-fine);
          font-size: 0.75rem;
          color: #94A3B8;
          font-weight: 500;
        }

        .nav-services-dropdown__footer-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #F59E0B;
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.9), 0 0 4px #F59E0B;
          display: inline-block;
        }

        .nav-services-dropdown__all {
          background: linear-gradient(135deg, #E5B842 0%, #D4A024 100%);
          color: #07090E;
          padding: 0.5rem 0.65rem 0.5rem 1.4rem;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(212, 160, 36, 0.35);
          transition: all 180ms ease;
        }

        .nav-services-dropdown__all:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(212, 160, 36, 0.5);
          background: linear-gradient(135deg, #ECC458 0%, #E5B842 100%);
        }

        .nav-services-dropdown__all-text {
          font-family: var(--font-fine);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .nav-services-dropdown__all-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0A0A0A;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 180ms ease;
        }

        .nav-services-dropdown__all:hover .nav-services-dropdown__all-icon {
          transform: translateX(2px);
        }
      `}</style>
    </>
  );
}
