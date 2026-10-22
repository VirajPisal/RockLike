import { useState } from "react";
import type { FunnelStage } from "../data/performanceMarketing";

interface GrowthFunnelProps {
  stages: FunnelStage[];
  accent?: string;
}

export default function GrowthFunnel({
  stages,
  accent = "var(--clr-performance)",
}: GrowthFunnelProps) {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {stages.map((stage, index) => {
        const isActive = activeStage === stage.id;
        const opacity = 1 - index * 0.15;

        return (
          <div
            key={stage.id}
            onMouseEnter={() => setActiveStage(stage.id)}
            onMouseLeave={() => setActiveStage(null)}
            style={{
              cursor: "pointer",
              transition: "all var(--ease-base)",
            }}
          >
            {/* Funnel bar */}
            <div
              style={{
                height: "4rem",
                width: stage.width,
                backgroundColor: isActive ? accent : `rgba(5, 150, 105, ${opacity * 0.25})`,
                border: `1px solid ${isActive ? accent : `rgba(5, 150, 105, ${opacity * 0.4})`}`,
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                paddingInline: "1.25rem",
                gap: "1rem",
                transition: "all var(--ease-base)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "var(--tracking-display)",
                  color: isActive ? "#fff" : "var(--text-primary)",
                  transition: "color var(--ease-fast)",
                  flexShrink: 0,
                }}
              >
                {stage.label}
              </span>

              <span
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  color: isActive ? "rgba(255,255,255,0.8)" : accent,
                  letterSpacing: "var(--tracking-wide)",
                  marginLeft: "auto",
                  flexShrink: 0,
                }}
              >
                {stage.metric}
              </span>
            </div>

            {/* Expanded detail */}
            {isActive && (
              <div
                style={{
                  padding: "1rem 1.25rem",
                  backgroundColor: "var(--surface-1)",
                  border: `1px solid ${accent}30`,
                  borderTop: "none",
                  borderRadius: "0 0 var(--radius-sm) var(--radius-sm)",
                  marginTop: "-4px",
                  width: stage.width,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    lineHeight: "var(--leading-relaxed)",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {stage.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
