import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../components/VideoModal";
import type { VideoProject } from "../data/videoProduction";
import {
  BrandStrategyIcon,
  ExperienceDesignIcon,
  TechEngineeringIcon,
  GrowthMarketingIcon,
  BrandBuildingIcon,
  VideoProductionIcon,
  EventDesigningIcon,
  FranchiseDevIcon,
} from "../components/icons/CapabilityIcons";

// ─── Capability Cards Data (Eight Integrated Capabilities) ───
const capabilities = [
  {
    num: "01.",
    title: "Brand Strategy",
    description: "Market positioning, competitive intelligence, and brand architecture for venture-scale leaders.",
    icon: BrandStrategyIcon,
    href: "/services/branding",
  },
  {
    num: "02.",
    title: "Experience Design",
    description: "Immersive digital interfaces, product ecosystems, and high-conversion brand touchpoints.",
    icon: ExperienceDesignIcon,
    href: "/services/branding",
  },
  {
    num: "03.",
    title: "Technology Engineering",
    description: "Robust full-stack web applications, custom interactive WebGL, and scalable cloud infrastructure.",
    icon: TechEngineeringIcon,
    href: "/services/performance-marketing",
  },
  {
    num: "04.",
    title: "Growth Marketing",
    description: "Data-driven performance campaigns, programmatic ad buying, and sustainable customer acquisition.",
    icon: GrowthMarketingIcon,
    href: "/services/performance-marketing",
  },
  {
    num: "05.",
    title: "Brand Building",
    description: "Long-term narrative development, category dominance, and cultural relevance campaigns.",
    icon: BrandBuildingIcon,
    href: "/services/brand-building-strategies",
  },
  {
    num: "06.",
    title: "Cinematic Production",
    description: "Award-winning commercial films, brand documentaries, high-fashion visuals, and VFX.",
    icon: VideoProductionIcon,
    href: "/services/video-production",
  },
  {
    num: "07.",
    title: "Event Designing",
    description: "Experiential summits, spatial retail installations, luxury brand launches, and stage productions.",
    icon: EventDesigningIcon,
    href: "/services/event-designing",
  },
  {
    num: "08.",
    title: "Franchise Development",
    description: "Commercial expansion models, multi-market licensing, and venture partnership syndication.",
    icon: FranchiseDevIcon,
    href: "/services/franchise-development",
  },
];

// ─── Selected Work Items for Cinematic Slider ───
const workShowcase = [
  {
    id: "work-1",
    client: "AstraTech Global",
    title: "Next-Gen Fintech Launch",
    category: "Film & Content Creation",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=750&fit=crop&auto=format",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "work-2",
    client: "Aura Couture",
    title: "Luxury Brand Universe",
    category: "Brand & Experience",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&h=750&fit=crop&auto=format",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "work-3",
    client: "Kinetix Mobility",
    title: "Autonomous EV Horizon",
    category: "Cinematic Film",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=750&fit=crop&auto=format",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Smooth mouse parallax for floating glass spheres
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleOpenShowreel = () => {
    setActiveVideo({
      id: "showreel-main",
      client: "RockLike Techventures",
      title: "Agency Showreel 2026 — We Make Brands Move",
      category: "Cinematic Showreel",
      duration: "02:14",
      description: "A showcase of venture-scale brand architecture, cinematic film production, and digital acceleration.",
      thumbnail: "/assets/landing/hero_visual_2x.png",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      year: 2026,
      tags: ["Cinematic", "Brand Architecture", "Growth Acceleration"],
    });
  };

  return (
    <main
      style={{
        backgroundColor: "var(--clr-obsidian)",
        color: "var(--text-primary)",
        overflowX: "hidden",
      }}
    >
      {/* ════════════════════════════════════════════════════════════
          1. HERO SECTION: "WE MAKE BRANDS MOVE."
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        aria-label="RockLike Techventures Hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "calc(var(--nav-height) + 2rem)",
          paddingBottom: "4rem",
          overflow: "hidden",
          backgroundColor: "#07090E",
        }}
      >
        {/* Background Visual Plate (Clean Liquid Blue & Molten Gold Wave in Dark Studio) */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/landing/hero_backdrop_clean.png')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            opacity: 0.98,
            zIndex: 0,
          }}
        />

        {/* Ambient Studio Lighting Glows */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 75% 50%, rgba(13,82,156,0.18) 0%, transparent 60%), radial-gradient(circle at 60% 75%, rgba(212,160,36,0.12) 0%, transparent 50%), linear-gradient(180deg, rgba(7,9,14,0.6) 0%, transparent 35%, rgba(7,9,14,0.85) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Levitating Optical Glass Spheres with Dynamic Mouse Parallax */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          {/* Main Center-Right Glass Sphere */}
          <div
            style={{
              position: "absolute",
              top: "42%",
              left: "65%",
              width: "74px",
              height: "74px",
              transform: `translate(${mousePos.x * 24}px, ${mousePos.y * 24}px)`,
              transition: "transform 150ms cubic-bezier(0.1, 0.9, 0.2, 1)",
              animation: "floatLevitate 5s ease-in-out infinite",
            }}
          >
            <img
              src="/assets/landing/glass_sphere_main.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                filter: "drop-shadow(0 8px 24px rgba(13,82,156,0.35)) drop-shadow(0 2px 10px rgba(212,160,36,0.3))",
              }}
            />
          </div>

          {/* Top-Right Secondary Glass Sphere */}
          <div
            style={{
              position: "absolute",
              top: "23%",
              left: "75%",
              width: "40px",
              height: "40px",
              transform: `translate(${mousePos.x * -16}px, ${mousePos.y * -16}px)`,
              transition: "transform 180ms cubic-bezier(0.1, 0.9, 0.2, 1)",
              animation: "floatLevitate 6.5s ease-in-out infinite 1s",
            }}
          >
            <img
              src="/assets/landing/glass_sphere_top.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                filter: "drop-shadow(0 4px 16px rgba(13,82,156,0.3))",
              }}
            />
          </div>

          {/* Lower Floating Glass Sphere */}
          <div
            style={{
              position: "absolute",
              top: "74%",
              left: "59%",
              width: "40px",
              height: "40px",
              transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
              transition: "transform 200ms cubic-bezier(0.1, 0.9, 0.2, 1)",
              animation: "floatLevitate 5.8s ease-in-out infinite 2s",
            }}
          >
            <img
              src="/assets/landing/glass_sphere_bottom.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                filter: "drop-shadow(0 4px 18px rgba(212,160,36,0.35))",
              }}
            />
          </div>
        </div>

        {/* Hero Interactive Content Layer */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 3,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "2rem",
            width: "100%",
          }}
        >
          {/* Left Column: Eyebrow, Monumental Typography, Thesis & Showreel CTA */}
          <div style={{ maxWidth: "720px" }}>
            {/* Left Eyebrow Ticker */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.35rem 0.85rem",
                backgroundColor: "rgba(13,82,156,0.12)",
                border: "1px solid rgba(13,82,156,0.35)",
                borderRadius: "9999px",
                marginBottom: "1.75rem",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  width: "0.45rem",
                  height: "0.45rem",
                  borderRadius: "50%",
                  backgroundColor: "var(--clr-gold)",
                  boxShadow: "0 0 8px var(--clr-gold)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#D4A024",
                }}
              >
                IDEAS · BRANDS · FILMS · GROWTH
              </span>
            </div>

            {/* Headline: "WE MAKE BRANDS MOVE." */}
            <h1
              style={{
                margin: "0 0 1.5rem",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              {/* "WE MAKE" in Editorial Italic Serif */}
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(3.5rem, 8.5vw, 7.8rem)",
                  color: "#FFFFFF",
                  textShadow: "0 2px 24px rgba(0,0,0,0.6)",
                  letterSpacing: "-0.02em",
                }}
              >
                WE MAKE
              </span>

              {/* "BRANDS MOVE." in Monumental Condensed Gold */}
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(4.2rem, 11vw, 9.6rem)",
                  letterSpacing: "0.01em",
                  background: "linear-gradient(180deg, #F5D77F 0%, #D4A024 45%, #9E7412 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 4px 32px rgba(212,160,36,0.35))",
                }}
              >
                BRANDS MOVE.
              </span>
            </h1>

            {/* Thesis Statement */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                maxWidth: "520px",
                margin: "0 0 2.5rem",
                fontWeight: 400,
              }}
            >
              A venture-scale creative & growth studio for ambitious brands, bold stories and unmatched impact.
            </p>

            {/* CTA Group: Watch Showreel & Tracker */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.75rem",
                flexWrap: "wrap",
              }}
            >
              {/* Watch Showreel Circular Button */}
              <button
                type="button"
                onClick={handleOpenShowreel}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  background: "rgba(13,82,156,0.15)",
                  border: "1px solid rgba(13,82,156,0.4)",
                  padding: "0.5rem 1.35rem 0.5rem 0.5rem",
                  borderRadius: "9999px",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 20px rgba(13,82,156,0.25)",
                  transition: "all var(--ease-base)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--clr-gold)";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 6px 28px rgba(212,160,36,0.35)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(13,82,156,0.4)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(13,82,156,0.25)";
                }}
              >
                {/* Glowing Pulse Play Disc */}
                <span
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0D529C 0%, #083464 100%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 16px rgba(13,82,156,0.5)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 2.5L14 8L4 13.5V2.5Z" fill="#FFFFFF" />
                  </svg>
                </span>

                <span
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  WATCH SHOWREEL
                </span>
              </button>

              {/* Progress Index Tracker (01 — 05) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.12em",
                }}
              >
                <span style={{ height: "1px", width: "40px", backgroundColor: "rgba(255,255,255,0.2)" }} />
                <span style={{ color: "var(--clr-gold)", fontWeight: 700 }}>01</span>
                <span>/</span>
                <span>05</span>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Agency Impact Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.25rem",
              paddingLeft: "2rem",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
            }}
            className="hidden lg:flex"
          >
            {/* Stat 1 */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "3.25rem",
                  lineHeight: 1,
                  background: "linear-gradient(180deg, #FFFFFF 0%, #D4A024 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                09+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginTop: "0.25rem",
                }}
              >
                Years Experience
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "3.25rem",
                  lineHeight: 1,
                  background: "linear-gradient(180deg, #FFFFFF 0%, #D4A024 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                300+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginTop: "0.25rem",
                }}
              >
                Brands Launched
              </div>
            </div>

            {/* Stat 3 */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "3.25rem",
                  lineHeight: 1,
                  background: "linear-gradient(180deg, #FFFFFF 0%, #D4A024 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $48M+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginTop: "0.25rem",
                }}
              >
                Revenue Driven
              </div>
            </div>

            {/* Stat 4 */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "3.25rem",
                  lineHeight: 1,
                  background: "linear-gradient(180deg, #FFFFFF 0%, #D4A024 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                1,200+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginTop: "0.25rem",
                }}
              >
                Films Created
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Anchor */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            left: "var(--grid-gutter)",
            display: "flex",
            alignItems: "center",
            gap: "0.65rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-fine)",
            fontSize: "0.6875rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            zIndex: 3,
          }}
        >
          <span
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              border: "1px solid var(--clr-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--clr-gold)" }} />
          </span>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. EIGHT INTEGRATED CAPABILITIES (WARM IVORY CANVAS)
      ════════════════════════════════════════════════════════════ */}
      <section
        id="capabilities"
        aria-label="Eight Integrated Capabilities"
        style={{
          backgroundColor: "var(--clr-ivory)",
          color: "var(--clr-ivory-text)",
          paddingTop: "6.5rem",
          paddingBottom: "6.5rem",
          position: "relative",
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div
            style={{
              maxWidth: "680px",
              marginBottom: "3.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--clr-gold)",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              OUR CAPABILITIES
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                fontWeight: 700,
                color: "#1C1917",
                lineHeight: 1.05,
                margin: "0 0 1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Eight Integrated Capabilities.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "var(--clr-ivory-muted)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              From brand identity and cinematic production to full-funnel media acquisition and franchise scaling — everything your brand needs under one roof.
            </p>
          </div>

          {/* 2×4 Modular Capabilities Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {capabilities.map((cap) => {
              const IconComponent = cap.icon;
              return (
                <Link
                  key={cap.num}
                  to={cap.href}
                  style={{
                    backgroundColor: "var(--clr-ivory-card)",
                    border: "1px solid var(--clr-ivory-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "2rem 1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "230px",
                    textDecoration: "none",
                    color: "inherit",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                    transition: "all var(--ease-base)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.borderColor = "var(--clr-gold)";
                    el.style.boxShadow = "0 12px 32px rgba(212,160,36,0.14)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "var(--clr-ivory-border)";
                    el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.02)";
                  }}
                >
                  {/* Top Bar: Numeral & Icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        fontWeight: 900,
                        color: "var(--clr-gold)",
                        lineHeight: 1,
                      }}
                    >
                      {cap.num}
                    </span>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: "#F7F4EE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0D529C",
                      }}
                    >
                      <IconComponent size={22} color="#0D529C" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.45rem",
                        fontWeight: 800,
                        color: "#1C1917",
                        marginBottom: "0.6rem",
                        lineHeight: 1.15,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {cap.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--clr-ivory-muted)",
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {cap.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div
                    style={{
                      marginTop: "1.5rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-fine)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--clr-royal-blue)",
                    }}
                  >
                    <span>Explore</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Capabilities Action */}
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link
              to="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                border: "1px solid var(--clr-ivory-border)",
                backgroundColor: "#FFFFFF",
                color: "#1C1917",
                fontFamily: "var(--font-fine)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                transition: "all var(--ease-fast)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "var(--clr-gold)";
                el.style.borderColor = "var(--clr-gold)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#FFFFFF";
                el.style.borderColor = "var(--clr-ivory-border)";
                el.style.transform = "translateY(0)";
              }}
            >
              <span>Explore All Capabilities</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. STORIES THAT MOVE PEOPLE (CINEMATIC WORK SHOWCASE)
      ════════════════════════════════════════════════════════════ */}
      <section
        id="work"
        aria-label="Selected Work — Stories That Move People"
        style={{
          backgroundColor: "#07090E",
          paddingTop: "6.5rem",
          paddingBottom: "6.5rem",
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          {/* Header with Navigation Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3.5rem",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--clr-gold)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                SELECTED WORK
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Stories That Move People.
              </h2>
            </div>

            {/* Slider Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : workShowcase.length - 1))}
                aria-label="Previous Project"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all var(--ease-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--clr-gold)";
                  e.currentTarget.style.backgroundColor = "rgba(212,160,36,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev < workShowcase.length - 1 ? prev + 1 : 0))}
                aria-label="Next Project"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all var(--ease-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--clr-gold)";
                  e.currentTarget.style.backgroundColor = "rgba(212,160,36,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cinematic Work Showcase Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {workShowcase.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  backgroundColor: "var(--surface-1)",
                  border: idx === activeSlide ? "1px solid var(--clr-gold)" : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: idx === activeSlide ? "0 12px 40px rgba(212,160,36,0.18)" : "none",
                  transition: "all var(--ease-base)",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setActiveVideo({
                    id: item.id,
                    client: item.client,
                    title: item.title,
                    category: item.category,
                    duration: "01:45",
                    description: "High-impact narrative and production work engineered for market disruption.",
                    thumbnail: item.image,
                    videoUrl: item.videoUrl,
                    year: 2025,
                    tags: ["Production", "Cinematic", "Launch"],
                  })
                }
              >
                {/* Visual Thumbnail */}
                <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 40%, rgba(7,9,14,0.92) 100%)",
                    }}
                  />

                  {/* Play Trigger Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(7,9,14,0.7)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 2.5L14 8L4 13.5V2.5Z" fill="var(--clr-gold)" />
                    </svg>
                  </div>
                </div>

                {/* Content Overlay */}
                <div style={{ padding: "1.75rem 1.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-fine)",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--clr-gold)",
                      display: "block",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    {item.client}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. BEYOND NUMBERS. REAL IMPACT. (SIGNATURE CRYSTAL MONOLITH)
      ════════════════════════════════════════════════════════════ */}
      <section
        id="impact"
        aria-label="Beyond Numbers. Real Impact."
        style={{
          backgroundColor: "#07090E",
          paddingTop: "7rem",
          paddingBottom: "7rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Radial Glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "900px",
            height: "700px",
            background: "radial-gradient(circle, rgba(13,82,156,0.18) 0%, rgba(212,160,36,0.08) 50%, transparent 75%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              alignItems: "center",
              gap: "4rem",
            }}
          >
            {/* Left Stats Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--clr-gold)",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  MEASURABLE SCALE
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.05,
                    margin: 0,
                  }}
                >
                  Beyond Numbers.
                  <span
                    style={{
                      display: "block",
                      color: "var(--clr-gold)",
                      fontStyle: "italic",
                    }}
                  >
                    Real Impact.
                  </span>
                </h2>
              </div>

              {/* Metric 1 */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "4rem",
                    lineHeight: 1,
                    color: "#FFFFFF",
                  }}
                >
                  +120%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--clr-gold)",
                    marginTop: "0.4rem",
                  }}
                >
                  Growth Acceleration
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.3rem" }}>
                  Average year-over-year revenue expansion across client portfolio.
                </p>
              </div>

              {/* Metric 2 */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "4rem",
                    lineHeight: 1,
                    color: "#FFFFFF",
                  }}
                >
                  260%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--clr-gold)",
                    marginTop: "0.4rem",
                  }}
                >
                  Reach Expansion
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.3rem" }}>
                  Compound organic awareness through proprietary distribution networks.
                </p>
              </div>
            </div>

            {/* Center: Radiant Blue & Gold Crystal Monolith (User Favorite Asset) */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "460px",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Glowing Aura Ring */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: "10%",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(13,82,156,0.3) 0%, rgba(212,160,36,0.2) 60%, transparent 80%)",
                    filter: "blur(40px)",
                  }}
                />

                {/* Faceted Crystal Stone */}
                <img
                  src="/assets/landing/impact_crystal_monolith.jpg"
                  alt="RockLike Faceted Crystal Stone Monolith"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 2,
                    mixBlendMode: "screen",
                    maskImage: "radial-gradient(circle at center, black 65%, transparent 98%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 65%, transparent 98%)",
                    filter: "drop-shadow(0 16px 48px rgba(13,82,156,0.45)) drop-shadow(0 4px 20px rgba(212,160,36,0.35))",
                    animation: "floatLevitate 7s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            {/* Right Stats Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
              {/* Metric 3 */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "4rem",
                    lineHeight: 1,
                    color: "var(--clr-gold)",
                  }}
                >
                  $450M
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    marginTop: "0.4rem",
                  }}
                >
                  Value Created
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.3rem" }}>
                  Enterprise valuation generated through strategic repositioning and media capital.
                </p>
              </div>

              {/* Metric 4 */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "4rem",
                    lineHeight: 1,
                    color: "var(--clr-gold)",
                  }}
                >
                  98%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    marginTop: "0.4rem",
                  }}
                >
                  Client Retention
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.3rem" }}>
                  Long-term venture partnerships built on measurable market return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. READY TO BUILD WHAT'S NEXT? (WARM GOLD GRADIENT CTA)
      ════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Ready to Build What's Next Call To Action"
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #07090E 0%, #1A1408 35%, #38280B 70%, #684812 100%)",
          paddingTop: "7rem",
          paddingBottom: "8rem",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Radial Lighting */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(212,160,36,0.35) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "780px" }}>
          <span
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--clr-gold-light)",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            LET'S CREATE
          </span>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              margin: "0 0 1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Build
            <span
              style={{
                display: "block",
                fontStyle: "italic",
                color: "var(--clr-gold-light)",
              }}
            >
              What's Next?
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6,
              maxWidth: "540px",
              margin: "0 auto 3rem",
            }}
          >
            Let's turn bold ideas into powerful brands, cinematic films and exponential growth stories.
          </p>

          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              backgroundColor: "var(--clr-gold)",
              color: "#07090E",
              fontFamily: "var(--font-fine)",
              fontSize: "0.875rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(212,160,36,0.45)",
              transition: "all var(--ease-base)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "var(--clr-gold-light)";
              el.style.transform = "translateY(-2px) scale(1.02)";
              el.style.boxShadow = "0 8px 36px rgba(212,160,36,0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "var(--clr-gold)";
              el.style.transform = "translateY(0) scale(1)";
              el.style.boxShadow = "0 4px 24px rgba(212,160,36,0.45)";
            }}
          >
            <span>Start A Conversation</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Interactive Showreel Video Modal */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Global CSS keyframes for floating levitation */}
      <style>{`
        @keyframes floatLevitate {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(1.5deg);
          }
        }
      `}</style>
    </main>
  );
}
