import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
import OrbitingEcosystem from "../components/home/OrbitingEcosystem";

// ─── Capability Cards Data (Eight Integrated Capabilities) ───
const capabilitiesRow1 = [
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
];

const capabilitiesRow2 = [
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

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [capScrollRatio, setCapScrollRatio] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const capSectionRef = useRef<HTMLElement>(null);

  // Mouse parallax for floating optical glass spheres
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Scroll listener for dynamic text sliding and card glide
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      if (capSectionRef.current) {
        const rect = capSectionRef.current.getBoundingClientRect();
        const windowH = window.innerHeight;
        // Normalized progress: 0 when entering viewport, 1 when leaving
        const progress = Math.min(Math.max((windowH - rect.top) / (windowH + rect.height), 0), 1);
        setCapScrollRatio(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          With Dynamic Scroll-Driven Text Sliding & Optical Parallax
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
        {/* Crystal-Clear 2K Background Plate (Ultra Sharp, Zero Smudge) */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/landing/hero_backdrop_clean.png')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            imageRendering: "auto",
            zIndex: 0,
          }}
        />

        {/* Ambient Subtle Studio Spotlight (Sharp Contrast) */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 75% 50%, rgba(13,82,156,0.15) 0%, transparent 60%), radial-gradient(circle at 65% 80%, rgba(212,160,36,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Levitating Optical Glass Spheres with Dynamic Mouse Parallax & Scroll Float */}
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
              transform: `translate(${mousePos.x * 28}px, ${mousePos.y * 28 - scrollY * 0.4}px)`,
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
                filter: "drop-shadow(0 8px 24px rgba(13,82,156,0.4)) drop-shadow(0 2px 10px rgba(212,160,36,0.35))",
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
              transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -18 - scrollY * 0.6}px)`,
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
                filter: "drop-shadow(0 4px 16px rgba(13,82,156,0.35))",
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
              transform: `translate(${mousePos.x * 32}px, ${mousePos.y * 32 - scrollY * 0.25}px)`,
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
                filter: "drop-shadow(0 4px 18px rgba(212,160,36,0.4))",
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
          {/* Left Column: Eyebrow, Kinetic Typography, Narrative & CTA */}
          <div style={{ maxWidth: "760px" }}>
            {/* Left Eyebrow Ticker */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.35rem 0.85rem",
                backgroundColor: "rgba(13,82,156,0.14)",
                border: "1px solid rgba(13,82,156,0.45)",
                borderRadius: "9999px",
                marginBottom: "1.75rem",
                backdropFilter: "blur(12px)",
                transform: `translateX(${-scrollY * 0.15}px)`,
                opacity: Math.max(0, 1 - scrollY / 400),
                transition: "transform 80ms ease-out",
              }}
            >
              <span
                style={{
                  width: "0.45rem",
                  height: "0.45rem",
                  borderRadius: "50%",
                  backgroundColor: "var(--clr-gold)",
                  boxShadow: "0 0 10px var(--clr-gold)",
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

            {/* Kinetic Scroll-Sliding Headline: "WE MAKE BRANDS MOVE." */}
            <h1
              style={{
                margin: "0 0 1.5rem",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              {/* "WE MAKE" — Slides gently Left on scroll down */}
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(3.8rem, 8.8vw, 8rem)",
                  color: "#FFFFFF",
                  textShadow: "0 4px 30px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.9)",
                  letterSpacing: "-0.02em",
                  transform: `translateX(${-scrollY * 0.35}px)`,
                  opacity: Math.max(0, 1 - scrollY / 650),
                  transition: "transform 80ms ease-out",
                  willChange: "transform, opacity",
                }}
              >
                WE MAKE
              </span>

              {/* "BRANDS MOVE." — Slides smoothly Right on scroll down */}
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(4.5rem, 11.5vw, 10rem)",
                  letterSpacing: "0.01em",
                  background: "linear-gradient(180deg, #F8E29D 0%, #D4A024 45%, #9E7412 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 6px 36px rgba(212,160,36,0.45))",
                  transform: `translateX(${scrollY * 0.35}px)`,
                  opacity: Math.max(0, 1 - scrollY / 700),
                  transition: "transform 80ms ease-out",
                  willChange: "transform, opacity",
                }}
              >
                BRANDS MOVE.
              </span>
            </h1>

            {/* Narrative Subhead with Scroll Parallax */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.1rem, 1.85vw, 1.3rem)",
                lineHeight: 1.6,
                color: "rgba(247,245,242,0.85)",
                maxWidth: "540px",
                margin: "0 0 2.5rem",
                fontWeight: 400,
                transform: `translateY(${scrollY * 0.2}px)`,
                opacity: Math.max(0, 1 - scrollY / 500),
                transition: "transform 80ms ease-out",
              }}
            >
              A venture-scale creative & growth studio for ambitious brands, bold stories and unmatched impact.
            </p>

            {/* Direct Studio Call-To-Action (Showreel removed as requested) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                transform: `translateY(${scrollY * 0.25}px)`,
                opacity: Math.max(0, 1 - scrollY / 550),
                transition: "transform 80ms ease-out",
              }}
            >
              <a
                href="#capabilities"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  backgroundColor: "var(--clr-gold)",
                  color: "#07090E",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.8125rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.875rem 2rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(212,160,36,0.35)",
                  transition: "all var(--ease-base)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "var(--clr-gold-light)";
                  el.style.transform = "translateY(-2px) scale(1.02)";
                  el.style.boxShadow = "0 8px 30px rgba(212,160,36,0.55)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "var(--clr-gold)";
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "0 4px 20px rgba(212,160,36,0.35)";
                }}
              >
                <span>Explore Capabilities</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3V13M13 8L8 13L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  backdropFilter: "blur(12px)",
                  transition: "all var(--ease-base)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--clr-gold)";
                  e.currentTarget.style.color = "var(--clr-gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                <span>Start Project</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Asymmetric Agency Impact Stats (Smooth Parallax) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.25rem",
              paddingLeft: "2rem",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              transform: `translateY(${-scrollY * 0.25}px)`,
              opacity: Math.max(0, 1 - scrollY / 750),
              transition: "transform 80ms ease-out",
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
                  filter: "drop-shadow(0 2px 14px rgba(212,160,36,0.3))",
                }}
              >
                09+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
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
                  filter: "drop-shadow(0 2px 14px rgba(212,160,36,0.3))",
                }}
              >
                300+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
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
                  filter: "drop-shadow(0 2px 14px rgba(212,160,36,0.3))",
                }}
              >
                $48M+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
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
                  filter: "drop-shadow(0 2px 14px rgba(212,160,36,0.3))",
                }}
              >
                1,200+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
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

        {/* Bottom Scroll Guide */}
        <div
          style={{
            position: "absolute",
            bottom: "1.75rem",
            left: "var(--grid-gutter)",
            display: "flex",
            alignItems: "center",
            gap: "0.65rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-fine)",
            fontSize: "0.6875rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            zIndex: 3,
            opacity: Math.max(0, 1 - scrollY / 250),
          }}
        >
          <span
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              border: "1px solid var(--clr-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--clr-gold)" }} />
          </span>
          <span>Scroll to slide</span>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. EIGHT INTEGRATED CAPABILITIES (WARM IVORY CANVAS)
          With Dynamic Scroll-Driven Horizontal Card Gliding
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={capSectionRef}
        id="capabilities"
        aria-label="Eight Integrated Capabilities"
        style={{
          backgroundColor: "var(--clr-ivory)",
          color: "var(--clr-ivory-text)",
          paddingTop: "6.5rem",
          paddingBottom: "6.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Section Header with Parallax Float */}
          <div
            style={{
              maxWidth: "720px",
              marginBottom: "3.5rem",
              transform: `translateY(${(0.5 - capScrollRatio) * 30}px)`,
              transition: "transform 100ms ease-out",
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
        </div>

        {/* ─── Row 1: Cards 01 to 04 (Glides Left As You Scroll) ─── */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            paddingLeft: "max(1.5rem, calc((100vw - 1440px) / 2 + 1.5rem))",
            paddingRight: "1.5rem",
            marginBottom: "1.5rem",
            transform: `translateX(${(0.5 - capScrollRatio) * 110}px)`,
            transition: "transform 80ms ease-out",
            willChange: "transform",
          }}
        >
          {capabilitiesRow1.map((cap) => {
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
                  minWidth: "310px",
                  maxWidth: "340px",
                  minHeight: "240px",
                  textDecoration: "none",
                  color: "inherit",
                  flexShrink: 0,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                  transition: "all var(--ease-base)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = "var(--clr-gold)";
                  el.style.boxShadow = "0 16px 36px rgba(212,160,36,0.18)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "var(--clr-ivory-border)";
                  el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.03)";
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

                {/* Arrow Action */}
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

        {/* ─── Row 2: Cards 05 to 08 (Glides Right As You Scroll) ─── */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            paddingLeft: "max(1.5rem, calc((100vw - 1440px) / 2 + 1.5rem))",
            paddingRight: "1.5rem",
            transform: `translateX(${-(0.5 - capScrollRatio) * 110}px)`,
            transition: "transform 80ms ease-out",
            willChange: "transform",
          }}
        >
          {capabilitiesRow2.map((cap) => {
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
                  minWidth: "310px",
                  maxWidth: "340px",
                  minHeight: "240px",
                  textDecoration: "none",
                  color: "inherit",
                  flexShrink: 0,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                  transition: "all var(--ease-base)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = "var(--clr-gold)";
                  el.style.boxShadow = "0 16px 36px rgba(212,160,36,0.18)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "var(--clr-ivory-border)";
                  el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.03)";
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

                {/* Arrow Action */}
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
        <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
          <Link
            to="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.875rem 2.25rem",
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
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 24px rgba(212,160,36,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#FFFFFF";
              el.style.borderColor = "var(--clr-ivory-border)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
            }}
          >
            <span>Explore All Capabilities</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. BEYOND NUMBERS. REAL IMPACT. (SIGNATURE CRYSTAL MONOLITH)
      ════════════════════════════════════════════════════════════ */}
      <section
        id="impact"
        aria-label="Beyond Numbers. Real Impact."
        style={{
          backgroundColor: "#07090E",
          paddingTop: "7.5rem",
          paddingBottom: "7.5rem",
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

            {/* Center: Revolving Brand Ecosystem (Orbiting Satellites Around Yellow Core) */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <OrbitingEcosystem />
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
          4. READY TO BUILD WHAT'S NEXT? (WARM GOLD GRADIENT CTA)
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
