interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  accent?: string;
  layout?: "horizontal" | "vertical";
}

export default function ProcessSteps({
  steps,
  accent = "var(--clr-branding)",
  layout = "horizontal",
}: ProcessStepsProps) {
  if (layout === "vertical") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <div
              key={step.step}
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr",
                gap: "1.5rem",
              }}
            >
              {/* Left: number + connector */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    backgroundColor: "var(--surface-2)",
                    border: `1.5px solid ${accent}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "1rem",
                      color: accent,
                      lineHeight: 1,
                    }}
                  >
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
                {!isLast && (
                  <div
                    style={{
                      width: "1.5px",
                      flexGrow: 1,
                      minHeight: "2.5rem",
                      background: `linear-gradient(to bottom, ${accent}50, transparent)`,
                      margin: "0.5rem 0",
                    }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingBottom: isLast ? 0 : "2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", marginBottom: "0.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.375rem",
                      letterSpacing: "var(--tracking-display)",
                      color: "var(--text-primary)",
                      margin: 0,
                      lineHeight: "var(--leading-snug)",
                    }}
                  >
                    {step.title}
                  </h3>
                  {step.duration && (
                    <span
                      style={{
                        fontFamily: "var(--font-fine)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 500,
                        color: accent,
                        flexShrink: 0,
                      }}
                    >
                      {step.duration}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    lineHeight: "var(--leading-relaxed)",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
        gap: "0",
      }}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <div
            key={step.step}
            style={{
              padding: "2rem",
              borderRight: isLast ? "none" : "1px solid var(--border-default)",
              position: "relative",
            }}
          >
            {/* Number */}
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "3.5rem",
                lineHeight: 1,
                color: accent,
                opacity: 0.2,
                display: "block",
                marginBottom: "1rem",
              }}
            >
              {String(step.step).padStart(2, "0")}
            </span>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.375rem",
                letterSpacing: "var(--tracking-display)",
                color: "var(--text-primary)",
                margin: "0 0 0.625rem",
                lineHeight: "var(--leading-snug)",
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {step.description}
            </p>

            {step.duration && (
              <p
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "var(--tracking-label)",
                  color: accent,
                  margin: "1rem 0 0",
                  textTransform: "uppercase",
                }}
              >
                {step.duration}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
