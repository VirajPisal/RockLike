import { useState } from "react";

export interface TileCardData {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

interface ServiceTileCardProps {
  card: TileCardData;
  accent?: string;
  accentGlow?: string;
  accentBorder?: string;
}

export default function ServiceTileCard({
  card,
  accent = "var(--clr-branding)",
  accentGlow = "var(--clr-branding-glow)",
  accentBorder = "var(--clr-branding-border)",
}: ServiceTileCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <article
        className="stc"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? "var(--surface-2)" : "var(--surface-1)",
          borderColor: hovered ? accentBorder : "var(--border-default)",
          boxShadow: hovered
            ? `0 0 0 1px ${accentBorder}, 0 16px 48px rgba(0,0,0,0.45), 0 0 80px ${accentGlow}`
            : "var(--shadow-card)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        {/* Top accent bar */}
        <div className="stc__bar" style={{ opacity: hovered ? 1 : 0, background: `linear-gradient(90deg, ${accent}, transparent 80%)` }} />

        {/* Corner glow */}
        <div className="stc__glow" aria-hidden style={{ background: `radial-gradient(circle, ${accentGlow}, transparent 70%)`, opacity: hovered ? 1 : 0 }} />

        {/* Header row */}
        <div className="stc__header">
          <span className="stc__number" style={{ color: hovered ? accent : "var(--text-disabled)" }}>
            {card.number}
          </span>
          <div className="stc__arrow" style={{ backgroundColor: hovered ? accent : "var(--surface-3)", borderColor: hovered ? "transparent" : "var(--border-default)" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ transform: hovered ? "translate(2px,-2px)" : "none", transition: "transform var(--ease-base)" }}>
              <path d="M2 11L11 2M11 2H4.5M11 2V8.5" stroke={hovered ? "#fff" : "var(--text-muted)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="stc__title">{card.title}</h3>

        {/* Description */}
        <p className="stc__desc">{card.description}</p>

        {/* Deliverables */}
        <ul className="stc__list">
          {card.deliverables.map((d) => (
            <li key={d} className="stc__item">
              <span className="stc__dot" style={{ backgroundColor: hovered ? accent : "var(--text-disabled)" }} />
              {d}
            </li>
          ))}
        </ul>
      </article>

      <style>{`
        .stc {
          position: relative;
          border: 1px solid;
          border-radius: var(--radius-md);
          padding: 1.875rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          overflow: hidden;
          transition: background-color var(--ease-base), border-color var(--ease-base), box-shadow var(--ease-base), transform var(--ease-base);
          height: 100%;
        }
        .stc__bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          transition: opacity var(--ease-fast);
          pointer-events: none;
        }
        .stc__glow {
          position: absolute;
          top: -40%; right: -30%;
          width: 80%; height: 80%;
          border-radius: 50%;
          transition: opacity var(--ease-base);
          pointer-events: none;
        }
        .stc__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .stc__number {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.8125rem;
          letter-spacing: 0.1em;
          transition: color var(--ease-fast);
          line-height: 1;
        }
        .stc__arrow {
          width: 1.875rem; height: 1.875rem;
          border-radius: var(--radius-xs);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background-color var(--ease-base), border-color var(--ease-base);
        }
        .stc__title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(1.0625rem, 1.4vw, 1.25rem);
          line-height: var(--leading-snug);
          letter-spacing: var(--tracking-display);
          color: var(--text-primary);
          margin: 0;
          position: relative;
          z-index: 1;
        }
        .stc__desc {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          line-height: var(--leading-relaxed);
          color: var(--text-secondary);
          margin: 0;
          flex-grow: 1;
          position: relative;
          z-index: 1;
        }
        .stc__list {
          list-style: none;
          margin: 0;
          padding: 0.75rem 0 0;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          position: relative;
          z-index: 1;
        }
        .stc__item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .stc__dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: background-color var(--ease-fast);
        }
      `}</style>
    </>
  );
}
