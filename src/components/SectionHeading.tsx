interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: string;
  align?: "left" | "center";
  size?: "default" | "large" | "xl";
  className?: string;
}

const sizeMap = {
  default: "clamp(2.5rem, 5vw, 4rem)",
  large: "clamp(3.5rem, 7vw, 6rem)",
  xl: "clamp(5rem, 10vw, 9rem)",
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent = "var(--clr-branding)",
  align = "left",
  size = "default",
  className = "",
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "center" : "left";
  const accentLine = align === "center" ? "0 auto" : "0 auto 0 0";

  return (
    <div
      className={className}
      style={{ textAlign, display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      {eyebrow && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: align === "center" ? "center" : "flex-start" }}>
          <span
            style={{
              display: "block",
              width: "2rem",
              height: "2px",
              backgroundColor: accent,
              flexShrink: 0,
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
      )}

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: sizeMap[size],
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-display)",
          color: "var(--text-primary)",
          margin: 0,
        }}
      >
        {title}
      </h2>

      {!eyebrow && (
        <div
          style={{
            width: "3rem",
            height: "3px",
            backgroundColor: accent,
            borderRadius: "2px",
            margin: accentLine,
          }}
        />
      )}

      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--text-secondary)",
            maxWidth: align === "center" ? "52ch" : "60ch",
            margin: align === "center" ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
