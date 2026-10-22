import { useState } from "react";
import type { PortfolioItem } from "../data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  featured?: boolean;
}

const categoryColor: Record<string, string> = {
  Branding: "var(--clr-branding)",
  Video: "var(--clr-video)",
  Performance: "var(--clr-performance)",
};

export default function PortfolioCard({ item, featured = false }: PortfolioCardProps) {
  const [hovered, setHovered] = useState(false);
  const accent = categoryColor[item.category] ?? item.accent;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        backgroundColor: "var(--surface-1)",
        border: "1px solid var(--border-default)",
        cursor: "pointer",
        transition: "all var(--ease-base)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "var(--shadow-xl)" : "var(--shadow-card)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          aspectRatio: featured ? "16/9" : "4/3",
          overflow: "hidden",
          backgroundColor: "var(--surface-2)",
          flexShrink: 0,
        }}
      >
        <img
          src={item.image}
          alt={`${item.client} — ${item.title}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform var(--ease-slow)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0.5,
            transition: "opacity var(--ease-base)",
          }}
        />

        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            backgroundColor: "rgba(10,10,10,0.7)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${accent}40`,
            borderRadius: "var(--radius-xs)",
            padding: "0.25rem 0.625rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              letterSpacing: "var(--tracking-label)",
              textTransform: "uppercase",
              color: accent,
            }}
          >
            {item.category}
          </span>
        </div>

        {/* Year */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              color: "rgba(247,245,242,0.5)",
            }}
          >
            {item.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          flexGrow: 1,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-fine)",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: accent,
            margin: 0,
          }}
        >
          {item.client}
        </p>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.375rem",
            lineHeight: "var(--leading-snug)",
            letterSpacing: "var(--tracking-display)",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--text-secondary)",
            margin: 0,
            flexGrow: 1,
          }}
        >
          {item.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "0.5rem" }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "var(--tracking-wide)",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                backgroundColor: "var(--surface-3)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xs)",
                padding: "0.2rem 0.5rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
