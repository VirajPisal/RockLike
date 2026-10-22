import { useState } from "react";
import { Link } from "react-router-dom";
import type { Service } from "../data/services";

interface LargeServiceCardProps {
  service: Service;
  index: number;
}

export default function LargeServiceCard({ service, index }: LargeServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const imageOnRight = index % 2 !== 0;

  return (
    <>
      <article
        className={`lsc ${imageOnRight ? "lsc--flipped" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border: `1px solid ${hovered ? service.accentBorder : "var(--border-default)"}`,
          backgroundColor: "var(--surface-1)",
          transition: "border-color var(--ease-base), box-shadow var(--ease-base)",
          boxShadow: hovered
            ? `0 0 0 1px ${service.accentBorder}, 0 24px 72px rgba(0,0,0,0.5), 0 0 120px ${service.accentGlow}`
            : "var(--shadow-card)",
        }}
      >
        {/* ─── Image pane ─── */}
        <div className="lsc__image">
          <img
            src={service.image}
            alt={service.fullTitle}
            className="lsc__img"
            style={{
              transform: hovered ? "scale(1.065)" : "scale(1)",
            }}
          />

          {/* Directional overlay */}
          <div
            aria-hidden
            className={`lsc__overlay ${imageOnRight ? "lsc__overlay--right" : "lsc__overlay--left"}`}
          />

          {/* Large watermark number */}
          <div
            aria-hidden
            className={`lsc__watermark ${imageOnRight ? "lsc__watermark--right" : "lsc__watermark--left"}`}
            style={{ color: service.accent }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Accent tag */}
          <div
            className={`lsc__tag ${imageOnRight ? "lsc__tag--right" : "lsc__tag--left"}`}
            style={{
              backgroundColor: service.accentGlow,
              border: `1px solid ${service.accentBorder}`,
            }}
          >
            <span style={{ color: service.accent }} className="lsc__tag-label">
              {service.statLabel}
            </span>
          </div>
        </div>

        {/* ─── Content pane ─── */}
        <div className="lsc__content">
          {/* Radial glow */}
          <div
            aria-hidden
            className={`lsc__glow ${imageOnRight ? "lsc__glow--right" : "lsc__glow--left"}`}
            style={{
              background: `radial-gradient(circle, ${service.accentGlow}, transparent 70%)`,
              opacity: hovered ? 1 : 0.4,
            }}
          />

          {/* Eyebrow */}
          <div className="lsc__eyebrow">
            <span className="lsc__eyebrow-line" style={{ backgroundColor: service.accent }} />
            <span className="lsc__eyebrow-text" style={{ color: service.accent }}>
              {service.title}
            </span>
          </div>

          {/* Title */}
          <h3 className="lsc__title">{service.fullTitle}</h3>

          {/* Description */}
          <p className="lsc__desc">{service.description}</p>

          {/* Sub-services */}
          <ul className="lsc__subs">
            {service.subServices.map((sub) => (
              <li key={sub} className="lsc__sub-item">
                <span className="lsc__sub-dot" style={{ backgroundColor: service.accent }} />
                {sub}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="lsc__divider" />

          {/* Footer */}
          <div className="lsc__footer">
            <div>
              <p className="lsc__stat" style={{ color: service.accent }}>
                {service.stat}
              </p>
              <p className="lsc__stat-label">{service.statLabel}</p>
            </div>

            <Link
              to={service.href}
              className="lsc__cta"
              style={{
                color: hovered ? "#fff" : service.accent,
                backgroundColor: hovered ? service.accent : "transparent",
                borderColor: service.accent,
              }}
            >
              Learn More
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{
                  transition: "transform var(--ease-base)",
                  transform: hovered ? "translateX(4px)" : "translateX(0)",
                  flexShrink: 0,
                }}
              >
                <path
                  d="M2 7H12M12 7L7 2M12 7L7 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>

      <style>{`
        /* ─── Large Service Card ─── */
        .lsc {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "image content";
          min-height: 520px;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .lsc--flipped {
          grid-template-areas: "content image";
        }
        .lsc__image {
          grid-area: image;
          position: relative;
          overflow: hidden;
          background-color: var(--surface-2);
        }
        .lsc__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform var(--ease-slow);
        }
        .lsc__overlay {
          position: absolute;
          inset: 0;
        }
        .lsc__overlay--left {
          background: linear-gradient(to left, rgba(20,20,20,0.55) 0%, transparent 55%),
                      linear-gradient(to top, rgba(10,10,10,0.35) 0%, transparent 45%);
        }
        .lsc__overlay--right {
          background: linear-gradient(to right, rgba(20,20,20,0.55) 0%, transparent 55%),
                      linear-gradient(to top, rgba(10,10,10,0.35) 0%, transparent 45%);
        }
        .lsc__watermark {
          position: absolute;
          bottom: 1.25rem;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 7rem;
          line-height: 1;
          opacity: 0.11;
          user-select: none;
          letter-spacing: -0.05em;
        }
        .lsc__watermark--left { left: 1.25rem; }
        .lsc__watermark--right { right: 1.25rem; }
        .lsc__tag {
          position: absolute;
          top: 1.5rem;
          backdrop-filter: blur(8px);
          border-radius: var(--radius-xs);
          padding: 0.375rem 0.875rem;
        }
        .lsc__tag--left { left: 1.5rem; }
        .lsc__tag--right { right: 1.5rem; }
        .lsc__tag-label {
          font-family: var(--font-fine);
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .lsc__content {
          grid-area: content;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3.5rem;
          position: relative;
          overflow: hidden;
        }
        .lsc__glow {
          position: absolute;
          top: -30%;
          width: 70%;
          height: 70%;
          border-radius: 50%;
          pointer-events: none;
          transition: opacity var(--ease-base);
        }
        .lsc__glow--left { right: -20%; }
        .lsc__glow--right { left: -20%; }
        .lsc__eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .lsc__eyebrow-line {
          display: block;
          width: 2.5rem;
          height: 2px;
          flex-shrink: 0;
        }
        .lsc__eyebrow-text {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .lsc__title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(1.75rem, 2.5vw, 2.875rem);
          line-height: var(--leading-tight);
          letter-spacing: var(--tracking-display);
          color: var(--text-primary);
          margin: 0 0 1.125rem;
        }
        .lsc__desc {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          line-height: var(--leading-relaxed);
          color: var(--text-secondary);
          margin: 0 0 1.875rem;
          max-width: 48ch;
        }
        .lsc__subs {
          list-style: none;
          margin: 0 0 2rem;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 1rem;
        }
        .lsc__sub-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .lsc__sub-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .lsc__divider {
          width: 100%;
          height: 1px;
          background-color: var(--border-default);
          margin-bottom: 1.875rem;
        }
        .lsc__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .lsc__stat {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 2.25rem;
          line-height: 1;
          margin: 0 0 0.2rem;
          letter-spacing: var(--tracking-tight);
        }
        .lsc__stat-label {
          font-family: var(--font-fine);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0;
        }
        .lsc__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-fine);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1.5px solid;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: all var(--ease-base);
          white-space: nowrap;
        }

        /* ─── Tablet ─── */
        @media (max-width: 1024px) {
          .lsc__content { padding: 2.75rem 2.5rem; }
          .lsc__subs { grid-template-columns: 1fr; }
        }

        /* ─── Mobile ─── */
        @media (max-width: 768px) {
          .lsc,
          .lsc--flipped {
            grid-template-columns: 1fr;
            grid-template-areas: "image" "content";
            min-height: unset;
          }
          .lsc__image {
            aspect-ratio: 16 / 9;
            min-height: 260px;
          }
          .lsc__content {
            padding: 2.25rem 1.75rem;
            justify-content: flex-start;
          }
          .lsc__title { font-size: clamp(1.5rem, 5vw, 2rem); }
          .lsc__watermark { font-size: 4.5rem; }
          .lsc__subs { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
