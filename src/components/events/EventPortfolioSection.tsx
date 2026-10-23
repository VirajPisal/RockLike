import React, { useState, useEffect, useRef } from "react";
import { eventsPortfolioData, EventProject } from "../../data/eventsPortfolioData";

interface EventPortfolioSectionProps {
  showTitle?: boolean;
  limit?: number;
  initialFilter?: string;
  className?: string;
}

export default function EventPortfolioSection({
  showTitle = true,
  limit,
  initialFilter = "All",
  className = "",
}: EventPortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilter);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Categories list
  const categories = [
    { label: "All Events (9)", value: "All" },
    { label: "Mega Sammelan", value: "Mega Sammelan" },
    { label: "Expos & Exhibitions", value: "Expo & Exhibition" },
    { label: "National Competitions", value: "Competition & Awards" },
    { label: "Corporate Conclaves", value: "Corporate & Conclave" },
  ];

  // Track window scroll for kinetic ticker ribbon
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtered items
  const filteredEvents =
    selectedCategory === "All"
      ? eventsPortfolioData
      : eventsPortfolioData.filter((e) => e.category === selectedCategory);

  const displayEvents = limit ? filteredEvents.slice(0, limit) : filteredEvents;

  // Kinetic marquee translation speeds (smooth scroll movement)
  const marquee1X = (scrollY * 0.35) % 1400;
  const marquee2X = (-scrollY * 0.35) % 1400;

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 sm:py-24 overflow-hidden ${className}`}
      style={
        {
          backgroundColor: "#FFFFFF",
          color: "#0F172A",
          // Scoped overrides ensuring dark-mode CSS variables never wash out light-mode text
          "--text-primary": "#0F172A",
          "--text-secondary": "#334155",
          "--text-muted": "#64748B",
        } as React.CSSProperties
      }
      aria-label="RockLike Techventures Event Portfolio"
    >
      {/* ── Soft Ethereal Background Accents ── */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(13,82,156,0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(212,160,36,0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* ════════════════════════════════════════════════════════════
          1. KINETIC SCROLL-DRIVEN MOVING TEXT RIBBON (TOP)
          Slides smoothly with scroll to keep interface dynamic & alive
      ════════════════════════════════════════════════════════════ */}
      <div
        className="relative z-10 w-full overflow-hidden border-y border-slate-200/90 py-3 mb-16"
        style={{
          background: "linear-gradient(90deg, #FAFAFA 0%, #F1F5F9 50%, #FAFAFA 100%)",
        }}
      >
        <div
          className="flex whitespace-nowrap will-change-transform"
          style={{
            transform: `translateX(-${marquee1X}px)`,
            transition: "transform 60ms linear",
          }}
        >
          {[0, 1, 2].map((loop) => (
            <div key={loop} className="flex items-center gap-8 shrink-0 pr-8">
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#0D529C]">
                ★ 99TH AKHIL BHARTIYA MARATHI SAHITYA SAMMELAN
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#D4A024]">
                MAS INDUSTRIAL EXPO 2023
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#0D529C]">
                SUCCESS ABACUS NATIONAL COMPETITION
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#EA580C]">
                SHATAKVEER SANMAN SOHALA
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#0D529C]">
                TLC BIGBASH & GAURAV
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#D4A024]">
                GHARKUL EXPO 2025
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#0D529C]">
                RACHANA EXPO BY BAI
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#334155]">
                SATURDAY CLUB GLOBAL
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#0D529C]">
                RAYAT CAFC CONCLAVE
              </span>
              <span className="text-slate-300">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* ── Section Header ── */}
        {showTitle && (
          <div className="mb-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4A024] animate-pulse" />
              <span className="font-bold text-xs uppercase tracking-[0.18em] text-[#B45309]">
                Live Event Portfolio
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#0F172A",
                fontWeight: 900,
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                lineHeight: "1.1",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                margin: "0 0 1rem 0",
              }}
            >
              Monumental Events. <br />
              <span
                style={{
                  color: "#0D529C",
                }}
              >
                Flawless Execution.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)",
                lineHeight: "1.7",
                color: "#475569",
                margin: 0,
              }}
            >
              Explore our proven track record managing Maharashtra&apos;s largest literary sammelans,
              national championships, industrial expos, and corporate award conclaves.
            </p>
          </div>
        )}

        {/* ── Category Filter Tabs (Quick Filter) ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 no-scrollbar border-b border-slate-200/80">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-[#0D529C] text-white shadow-md shadow-blue-900/20 scale-[1.02]"
                    : "bg-slate-100 text-slate-700 hover:text-[#0D529C] hover:bg-slate-200/80 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════
            2. SIDE-BY-SIDE EVENT CASE STUDIES (EXACT MATCH SCREENSHOT 2)
            Image on Left, Large Clear Constant Text & Services on Right
            No popups, no modals, no hidden details!
        ════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {displayEvents.map((item) => {
            return (
              <article
                key={item.id}
                className="group relative pb-16 border-b border-slate-200/80 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* ── LEFT: EVENT PHOTO (Crisp Rounded Framing matching SS 2) ── */}
                  <div className="lg:col-span-5">
                    <div
                      className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md border border-slate-200/90"
                      style={{
                        backgroundColor: "#0F172A",
                        boxShadow: "0 10px 30px -6px rgba(15, 23, 42, 0.1)",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto aspect-[4/3] sm:aspect-[16/11] object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                        style={{
                          imageRendering: "auto",
                          display: "block",
                        }}
                        loading="lazy"
                      />

                      {/* Subtle Badge Overlay */}
                      <div className="absolute top-4 left-4 z-10 flex gap-2">
                        <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
                          {item.edition}
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full bg-[#0D529C] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── RIGHT: LARGE READABLE TITLE, DESCRIPTION & SERVICES (Matching SS 2) ── */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    {/* Event Title: Razor-Sharp Obsidian #0F172A with Royal Blue Accent */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "#0F172A",
                        fontWeight: 800,
                        fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                        margin: "0 0 1.25rem 0",
                      }}
                    >
                      <span>{item.title}</span>{" "}
                      <span
                        style={{
                          color: "#0D529C",
                          fontWeight: 800,
                        }}
                      >
                        – {item.edition}
                      </span>
                    </h3>

                    {/* Constant, High-Contrast Readable Description Text */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(1.0625rem, 1.3vw, 1.2rem)",
                        lineHeight: 1.75,
                        color: "#334155",
                        fontWeight: 400,
                        margin: "0 0 1.5rem 0",
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Services Line (Matching Screenshot 2) */}
                    <div
                      style={{
                        paddingTop: "0.5rem",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "clamp(0.95rem, 1.15vw, 1.0625rem)",
                          lineHeight: 1.7,
                          color: "#1E293B",
                          margin: 0,
                        }}
                      >
                        <strong
                          style={{
                            color: "#0D529C",
                            fontWeight: 800,
                            marginRight: "0.5rem",
                          }}
                        >
                          Services:
                        </strong>
                        <span
                          style={{
                            color: "#334155",
                            fontWeight: 500,
                          }}
                        >
                          {item.services.join(" | ")}
                        </span>
                      </p>
                    </div>

                    {/* Highlights Strip */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div
                        style={{
                          marginTop: "1.25rem",
                          paddingTop: "1rem",
                          borderTop: "1px solid #E2E8F0",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "1rem",
                        }}
                      >
                        {item.highlights.slice(0, 2).map((h, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                              color: "#64748B",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.4rem",
                            }}
                          >
                            <span style={{ color: "#D4A024", fontWeight: 900 }}>✔</span>
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          3. KINETIC SCROLL-DRIVEN MOVING TEXT RIBBON (BOTTOM)
          Counter-directional scroll glide
      ════════════════════════════════════════════════════════════ */}
      <div
        className="relative z-10 w-full overflow-hidden border-y border-slate-200/90 py-3 mt-20"
        style={{
          background: "linear-gradient(90deg, #FAFAFA 0%, #F1F5F9 50%, #FAFAFA 100%)",
        }}
      >
        <div
          className="flex whitespace-nowrap will-change-transform"
          style={{
            transform: `translateX(${marquee2X}px)`,
            transition: "transform 60ms linear",
          }}
        >
          {[0, 1, 2].map((loop) => (
            <div key={loop} className="flex items-center gap-8 shrink-0 pr-8">
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-slate-700">
                ⚡ END-TO-END EVENT DESIGNING
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#0D529C]">
                CELEBRITY & DIGNITARY MANAGEMENT
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#D4A024]">
                INFLUENCER COLLABORATION CAMPAIGNS
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-slate-700">
                PRE-EVENT COMMERCIAL SHOOTS
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#EA580C]">
                FULL MULTI-CAMERA 4K VIDEO PRODUCTION
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#0D529C]">
                POST-EVENT DATA PROCESSING & PUBLISHING
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-extrabold text-xs uppercase tracking-[0.24em] text-[#D4A024]">
                DOCUMENTARY STORYTELLING
              </span>
              <span className="text-slate-300">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
