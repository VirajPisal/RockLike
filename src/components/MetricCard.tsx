import type { PerformanceMetric } from "../data/performanceMarketing";

interface MetricCardProps {
  metric: PerformanceMetric;
  accent?: string;
}

export default function MetricCard({
  metric,
  accent = "var(--clr-performance)",
}: MetricCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--surface-1)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-md)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, ${accent}, transparent)`,
        }}
      />

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
        {metric.label}
      </p>

      <p
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
          lineHeight: 1,
          letterSpacing: "var(--tracking-tight)",
          color: accent,
          margin: 0,
        }}
      >
        {metric.value}
      </p>

      <p
        style={{
          fontFamily: "var(--font-fine)",
          fontSize: "var(--text-xs)",
          fontWeight: 500,
          color: "var(--text-muted)",
          margin: 0,
        }}
      >
        {metric.context}
      </p>
    </div>
  );
}
