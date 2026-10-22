import { useState } from "react";
import type { BrandingCard } from "../data/branding";

interface BrandingServiceCardProps {
  card: BrandingCard;
}

export default function BrandingServiceCard({ card }: BrandingServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <article
        className="bsc"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderColor: hovered
            ? "var(--clr-branding-border)"
            : "var(--border-default)",
          boxShadow: hovered
            ? `0 0 0 1px var(--clr-branding-border), 0 16px 48px rgba(0,0,0,0.45), 0 0 80px var(--clr-branding-glow)`
            : "var(--shadow-card)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          backgroundColor: hovered ? "var(--surface-2)" : "var(--surface-1)",
        }}
      >
        {/* Top accent bar */}
        <div
          className="bsc__accent-bar"
          style={{
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Radial glow */}
        <div
          className="bsc__glow"
          aria-hidden
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Header row */}
        <div className="bsc__header">
          <span className="bsc__number" style={{ color: hovered ? "var(--clr-branding)" : "var(--text-disabled)" }}>
            {card.number}
          </span>

          {/* Arrow indicator */}
          <div
            className="bsc__arrow-wrap"
            style={{
              backgroundColor: hovered ? "var(--clr-branding)" : "var(--surface-3)",
              borderColor: hovered ? "transparent" : "var(--border-default)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{
                transition: "transform var(--ease-base)",
                transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
              }}
            >
              <path
                d="M2 12L12 2M12 2H5M12 2V9"
                stroke={hovered ? "#fff" : "var(--text-muted)"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="bsc__title">{card.title}</h3>

        {/* Description */}
        <p className="bsc__desc">{card.description}</p>

        {/* Deliverables */}
        <ul className="bsc__deliverables">
          {card.deliverables.map((d) => (
            <li key={d} className="bsc__deliverable">
              <span
                className="bsc__deliverable-dot"
                style={{
                  backgroundColor: hovered ? "var(--clr-branding)" : "var(--text-disabled)",
                }}
              />
              {d}
            </li>
          ))}
        </ul>
      </article>

      <style>{`
        .bsc {
          position: relative;
          border: 1px solid;
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow: hidden;
          transition:
            background-color var(--ease-base),
            border-color var(--ease-base),
            box-shadow var(--ease-base),
            transform var(--ease-base);
          cursor: default;
          height: 100%;
        }
        .bsc__accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--clr-branding), transparent 80%);
          transition: opacity var(--ease-fast);
          pointer-events: none;
        }
        .bsc__glow {
          position: absolute;
          top: -40%;
          right: -30%;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--clr-branding-glow), transparent 70%);
          transition: opacity var(--ease-base);
          pointer-events: none;
        }
        .bsc__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .bsc__number {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          transition: color var(--ease-fast);
          line-height: 1;
        }
        .bsc__arrow-wrap {
          width: 2rem;
          height: 2rem;
          border-radius: var(--radius-xs);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background-color var(--ease-base), border-color var(--ease-base);
        }
        .bsc__title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(1.125rem, 1.5vw, 1.375rem);
          line-height: var(--leading-snug);
          letter-spacing: var(--tracking-display);
          color: var(--text-primary);
          margin: 0;
          position: relative;
          z-index: 1;
        }
        .bsc__desc {
          font-family: var(--font-body);
          font-size: 0.875rem;
          line-height: var(--leading-relaxed);
          color: var(--text-secondary);
          margin: 0;
          flex-grow: 1;
          position: relative;
          z-index: 1;
        }
        .bsc__deliverables {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
          position: relative;
          z-index: 1;
        }
        .bsc__deliverable {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-fine);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .bsc__deliverable-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: background-color var(--ease-fast);
        }
      `}</style>
    </>
  );
}
