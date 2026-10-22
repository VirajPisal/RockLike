import Button from "./Button";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent: string;
  accentGlow: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  stat?: string;
  statLabel?: string;
}

export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  accent,
  accentGlow,
  ctaLabel = "Start a Project",
  onCtaClick,
  backgroundImage,
  stat,
  statLabel,
}: ServiceHeroProps) {
  const accentIsVideo = accent === "var(--clr-video)";
  const accentIsPerf = accent === "var(--clr-performance)";
  const btnAccent = accentIsVideo ? "video" : accentIsPerf ? "performance" : "brand";

  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        backgroundColor: "var(--surface-0)",
      }}
    >
      {/* Background */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.2,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, var(--surface-0) 30%, transparent 80%)`,
            }}
          />
        </>
      )}

      {/* Radial accent glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          paddingBottom: "var(--space-section)",
          paddingTop: "calc(var(--nav-height) + var(--space-section))",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
          <span
            style={{
              display: "block",
              width: "3rem",
              height: "2px",
              backgroundColor: accent,
            }}
          />
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
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(4rem, 9vw, 9rem)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-display)",
            color: "var(--text-primary)",
            margin: "0 0 2rem",
            maxWidth: "14ch",
          }}
        >
          {title}
        </h1>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "44ch" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 1.75vw, 1.25rem)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--text-secondary)",
                margin: "0 0 2rem",
              }}
            >
              {subtitle}
            </p>
            <Button
              variant="primary"
              accent={btnAccent}
              size="lg"
              onClick={onCtaClick}
            >
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L8 3M13 8L8 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>

          {stat && (
            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 1,
                  color: accent,
                  margin: "0 0 0.25rem",
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                {stat}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "var(--tracking-label)",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  margin: 0,
                }}
              >
                {statLabel}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
