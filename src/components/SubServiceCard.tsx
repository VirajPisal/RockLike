import { useState } from "react";

interface SubServiceCardProps {
  title: string;
  description: string;
  deliverables?: string[];
  accent?: string;
  accentGlow?: string;
  index?: number;
}

export default function SubServiceCard({
  title,
  description,
  deliverables,
  accent = "var(--clr-branding)",
  accentGlow = "var(--clr-branding-glow)",
  index = 0,
}: SubServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "var(--surface-2)" : "var(--surface-1)",
        border: `1px solid ${hovered ? "var(--border-strong)" : "var(--border-default)"}`,
        borderRadius: "var(--radius-md)",
        padding: "2rem",
        transition: "all var(--ease-base)",
        boxShadow: hovered ? "var(--shadow-md)" : "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "1.125rem",
              color: accent,
              flexShrink: 0,
              lineHeight: 1.2,
              opacity: 0.6,
              userSelect: "none",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.5rem",
                letterSpacing: "var(--tracking-display)",
                color: "var(--text-primary)",
                margin: "0 0 0.625rem",
                lineHeight: "var(--leading-snug)",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {description}
            </p>
          </div>
        </div>

        {deliverables && deliverables.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-muted)",
              flexShrink: 0,
              width: "1.75rem",
              height: "1.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-xs)",
              transition: "all var(--ease-fast)",
            }}
            aria-expanded={expanded}
            aria-label={expanded ? "Collapse deliverables" : "Expand deliverables"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform var(--ease-base)",
              }}
            >
              <path
                d="M3 6L8 11L13 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      {expanded && deliverables && (
        <ul
          style={{
            listStyle: "none",
            margin: "1.5rem 0 0 2.625rem",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1.25rem",
          }}
        >
          {deliverables.map((d) => (
            <li
              key={d}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: accent,
                  flexShrink: 0,
                }}
              />
              {d}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
