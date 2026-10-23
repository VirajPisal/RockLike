import React, { useState, useEffect, useRef } from "react";

interface SatelliteItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

const satellites: SatelliteItem[] = [
  {
    id: "facebook",
    name: "Facebook / Meta",
    category: "Paid & Organic Reach",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "B2B & Executive Network",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp / Direct Comm",
    category: "High-Intent Conversions",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    category: "Visual Storytelling",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube",
    category: "Cinematic Long-Form",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "threads",
    name: "Threads / Meta",
    category: "Real-Time Conversation",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10c0-2.5-1-4-2.5-4s-2.5 1-2.5 3c0 2 1.5 3 3 3" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    id: "twitter",
    name: "X / Twitter",
    category: "Viral Cultural Velocity",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "web-global",
    name: "Global Web & Tech",
    category: "Infrastructure & WebGL",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function OrbitingEcosystem() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredSatellite, setHoveredSatellite] = useState<SatelliteItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  // Track scroll position
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer to pause calculations when out of view
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Combined rotation: continuous idle drift (time-based) + scroll-reactive rotation
  // Scroll rotation: 0.15 deg per scroll pixel
  const scrollRotation = scrollY * 0.15;

  // Radius of orbit in pixels
  const orbitRadius = 205;

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center select-none"
      style={{
        width: "100%",
        maxWidth: "480px",
        height: "480px",
      }}
      aria-label="RockLike Digital Ecosystem Orbit"
    >
      {/* ── Outer Ambient Ethereal Glow ── */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,160,36,0.22) 0%, rgba(13,82,156,0.12) 50%, transparent 75%)",
          filter: "blur(50px)",
          transform: "scale(1.2)",
        }}
      />

      {/* ── Delicate Circular Orbit Track ── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: `${orbitRadius * 2}px`,
          height: `${orbitRadius * 2}px`,
          border: "1px dashed rgba(212,160,36,0.35)",
          boxShadow: "0 0 24px rgba(212,160,36,0.08)",
        }}
      />

      {/* ── Secondary Subtle Pulse Track ── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: `${orbitRadius * 2 - 40}px`,
          height: `${orbitRadius * 2 - 40}px`,
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      />

      {/* ── 1. CENTRAL RADIANT YELLOW LOGO CORE (Matching Reference Screenshot) ── */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full transition-transform duration-300"
        style={{
          width: "280px",
          height: "280px",
          // Concentric gold & amber gradient rings matching user image
          background:
            "radial-gradient(circle at 50% 50%, #FFFFFF 0%, #FFFBEB 25%, #FDE68A 55%, #F59E0B 78%, #D97706 90%, #B45309 100%)",
          boxShadow:
            "0 0 60px rgba(245,158,11,0.45), 0 0 100px rgba(212,160,36,0.25), inset 0 0 30px rgba(180,83,9,0.35)",
          border: "5px solid #F59E0B",
        }}
      >
        {/* Subtle Inner Ring Accent */}
        <div
          className="absolute inset-2 rounded-full pointer-events-none"
          style={{
            border: "2px solid rgba(255,255,255,0.6)",
            boxShadow: "inset 0 0 15px rgba(245,158,11,0.3)",
          }}
        />

        {/* RockLike Techventures Central Vector Logo */}
        <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
          <img
            src="/assets/landing/rocklike_logo.svg"
            alt="RockLike Techventures - Connecting to Digital World"
            style={{
              width: "220px",
              height: "auto",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
            }}
          />
        </div>
      </div>

      {/* ── 2. REVOLVING SATELLITES CONTAINER (Scroll-Driven Orbit) ── */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{
          transform: `rotate(${scrollRotation}deg)`,
          transition: "transform 80ms ease-out",
          willChange: "transform",
        }}
      >
        {satellites.map((item, index) => {
          // Angle for each satellite evenly distributed (360 / 8 = 45 deg)
          const angleDeg = (index * 360) / satellites.length;
          const angleRad = (angleDeg * Math.PI) / 180;

          // Compute (x, y) along the orbit circumference
          const x = Math.cos(angleRad) * orbitRadius;
          const y = Math.sin(angleRad) * orbitRadius;

          const isHovered = hoveredSatellite?.id === item.id;

          return (
            <div
              key={item.id}
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                transform: `translate3d(${x}px, ${y}px, 0)`,
                width: "56px",
                height: "56px",
                marginLeft: "-28px",
                marginTop: "-28px",
              }}
              onMouseEnter={() => setHoveredSatellite(item)}
              onMouseLeave={() => setHoveredSatellite(null)}
            >
              {/* Counter-rotate each individual satellite by (-scrollRotation - angleDeg) so icons always stay upright! */}
              <div
                className="w-full h-full rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  transform: `rotate(${-scrollRotation}deg) scale(${isHovered ? 1.2 : 1})`,
                  background: isHovered
                    ? "linear-gradient(135deg, #F59E0B 0%, #D4A024 100%)"
                    : "linear-gradient(135deg, #64748B 0%, #475569 50%, #334155 100%)",
                  boxShadow: isHovered
                    ? "0 0 25px rgba(245,158,11,0.7), 0 4px 15px rgba(0,0,0,0.5)"
                    : "0 4px 16px rgba(0,0,0,0.45), inset 0 1px 2px rgba(255,255,255,0.4)",
                  border: isHovered
                    ? "2px solid #FFFBEB"
                    : "2px solid rgba(255,255,255,0.25)",
                  color: "#FFFFFF",
                }}
              >
                {item.icon}
              </div>

              {/* Tooltip on Hover */}
              {isHovered && (
                <div
                  className="absolute left-1/2 -top-12 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-900/95 border border-amber-400/50 text-white shadow-xl z-30 pointer-events-none"
                  style={{
                    transform: `rotate(${-scrollRotation}deg) translate(-50%, -100%)`,
                    transformOrigin: "bottom center",
                  }}
                >
                  <p className="text-[11px] font-black text-[#F59E0B] tracking-wider uppercase leading-none">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-slate-300 font-medium mt-0.5 leading-none">
                    {item.category}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
