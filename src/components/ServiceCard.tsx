import { useState } from "react";
import type { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "var(--surface-2)" : "var(--surface-1)",
        border: `1px solid ${hovered ? service.accentBorder : "var(--border-default)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "2.5rem",
        cursor: "pointer",
        transition: "all var(--ease-base)",
        display: "flex",
        flexDirection: "column",
        gap: "1.75rem",
        boxShadow: hovered
          ? `0 0 0 1px ${service.accentBorder}, 0 16px 48px rgba(0,0,0,0.4), 0 0 80px ${service.accentGlow}`
          : "var(--shadow-card)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      {/* Accent glow background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 60% 50% at 10% 0%, ${service.accentGlow}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity var(--ease-base)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              letterSpacing: "var(--tracking-label)",
              textTransform: "uppercase",
              color: service.accent,
              marginBottom: "0.5rem",
            }}
          >
            Service
          </p>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 3vw, 2.75rem)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            {service.title}
          </h3>
        </div>

        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "var(--radius-sm)",
            backgroundColor: service.accentGlow,
            border: `1px solid ${service.accentBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all var(--ease-base)",
            transform: hovered ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L8 3M13 8L8 13"
              stroke={service.accent}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "1.125rem",
          letterSpacing: "var(--tracking-normal)",
          color: service.accent,
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {service.tagline}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9375rem",
          lineHeight: "var(--leading-relaxed)",
          color: "var(--text-secondary)",
          margin: 0,
          flexGrow: 1,
        }}
      >
        {service.description}
      </p>

      {/* Highlights */}
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        {service.highlights.map((h) => (
          <li
            key={h}
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              backgroundColor: "var(--surface-3)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-xs)",
              padding: "0.25rem 0.625rem",
            }}
          >
            {h}
          </li>
        ))}
      </ul>

      {/* Stat */}
      <div
        style={{
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border-subtle)",
          display: "flex",
          gap: "0.5rem",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "2rem",
            lineHeight: 1,
            color: service.accent,
          }}
        >
          {service.stat}
        </span>
        <span
          style={{
            fontFamily: "var(--font-fine)",
            fontSize: "var(--text-xs)",
            fontWeight: 500,
            letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {service.statLabel}
        </span>
      </div>
    </article>
  );
}
