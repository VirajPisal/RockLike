interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "default" | "large" | "xl";
  badge?: string;
  className?: string;
}

const sizeMap = {
  sm: "clamp(1.75rem, 3vw, 2.5rem)",
  default: "clamp(2.25rem, 4.5vw, 3.75rem)",
  large: "clamp(3rem, 6.5vw, 5rem)",
  xl: "clamp(4rem, 8.5vw, 7.5rem)",
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent = "var(--clr-branding)",
  align = "left",
  size = "default",
  badge,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isRight = align === "right";
  const textAlign = isCenter ? "center" : isRight ? "right" : "left";
  const justify = isCenter ? "center" : isRight ? "flex-end" : "flex-start";

  return (
    <div
      className={className}
      style={{
        textAlign,
        display: "flex",
        flexDirection: "column",
        gap: "0.875rem",
        alignItems: isCenter ? "center" : isRight ? "flex-end" : "flex-start",
      }}
    >
      {/* Eyebrow & optional badge */}
      {(eyebrow || badge) && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            justifyContent: justify,
          }}
        >
          <span
            style={{
              display: "block",
              width: "2rem",
              height: "2px",
              backgroundColor: accent,
              flexShrink: 0,
            }}
          />
          {eyebrow && (
            <span
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: accent,
              }}
            >
              {eyebrow}
            </span>
          )}
          {badge && (
            <span
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: accent,
                backgroundColor: `${accent}18`,
                border: `1px solid ${accent}40`,
                padding: "0.15rem 0.5rem",
                borderRadius: "var(--radius-xs)",
              }}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Main Title */}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: sizeMap[size],
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-display)",
          color: "var(--text-primary)",
          margin: 0,
          maxWidth: isCenter ? "28ch" : "28ch",
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--text-secondary)",
            maxWidth: isCenter ? "56ch" : "50ch",
            margin: isCenter ? "0 auto" : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
