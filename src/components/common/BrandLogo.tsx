import React from "react";
import { Link } from "react-router-dom";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}

export default function BrandLogo({
  className = "",
  size = "md",
  withTagline = false,
}: BrandLogoProps) {
  const heights = {
    sm: 34,
    md: 42,
    lg: 52,
  };

  const h = heights[size];

  return (
    <Link
      to="/"
      aria-label="RockLike Techventures Home"
      className={`inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90 ${className}`}
      style={{ textDecoration: "none" }}
    >
      {/* Official Geometric Triangle Emblem */}
      <svg
        height={h}
        viewBox="0 0 100 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer Royal Cobalt Blue Triangle Geometric Chevron */}
        <path
          d="M50 4L96 81H81L50 29L19 81H4L50 4Z"
          fill="#0D529C"
        />
        <path
          d="M50 16L86 77H76L50 34L24 77H14L50 16Z"
          fill="#07090E"
        />
        {/* Inner Warm Luxury Gold Nested Chevron */}
        <path
          d="M50 36L74 77H62L50 56L38 77H26L50 36Z"
          fill="#D4A024"
        />
        <path
          d="M50 48L64 73H57L50 61L43 73H36L50 48Z"
          fill="#07090E"
        />
        {/* Center Golden Accent Core */}
        <polygon points="50,60 55,70 45,70" fill="#E5B842" />
      </svg>

      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center leading-none select-none">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: size === "sm" ? "1.25rem" : size === "lg" ? "1.75rem" : "1.45rem",
            letterSpacing: "0.06em",
            color: "#0D529C",
            lineHeight: 1,
          }}
        >
          ROCKLIKE
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: size === "sm" ? "0.85rem" : size === "lg" ? "1.15rem" : "0.95rem",
            letterSpacing: "0.14em",
            color: "#D4A024",
            lineHeight: 1.1,
            marginTop: "0.1rem",
          }}
        >
          TECHVENTURES
        </span>
        {withTagline && (
          <span
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "0.55rem",
              letterSpacing: "0.18em",
              color: "#8E9BAE",
              textTransform: "uppercase",
              marginTop: "0.2rem",
            }}
          >
            Connecting to Digital World
          </span>
        )}
      </div>
    </Link>
  );
}
