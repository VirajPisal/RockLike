import React from "react";

interface FacetedSphereProps {
  className?: string;
  style?: React.CSSProperties;
  scrollOffset?: number;
}

/**
 * High-definition 3D Faceted Geodesic Sphere
 * Pure vector SVG with shaded polygonal facets to mirror the metallic 3D sphere
 * shown on the left margin of the live reference screenshot.
 */
export default function FacetedSphere({ className = "", style = {}, scrollOffset = 0 }: FacetedSphereProps) {
  // Smooth subtle rotational drift derived from scroll
  const rotation = (scrollOffset * 0.08) % 360;
  const translateY = scrollOffset * 0.04;

  return (
    <div
      className={`pointer-events-none select-none transition-transform duration-75 ease-out ${className}`}
      style={{
        transform: `translate3d(0, ${translateY}px, 0)`,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="-120 -120 240 240"
        width="260"
        height="260"
        className="drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center center",
          transition: "transform 0.1s linear",
        }}
      >
        <defs>
          <radialGradient id="sphereAmbient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#94A3B8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0.8" />
          </radialGradient>
          <linearGradient id="facetHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>

        {/* Ambient base glow */}
        <circle cx="0" cy="0" r="100" fill="url(#sphereAmbient)" opacity="0.15" />

        {/* 3D Polyhedral Facet Mesh */}
        <g stroke="#94A3B8" strokeWidth="0.75" strokeLinejoin="round" strokeOpacity="0.4">
          {/* Outer Ring Facets */}
          <polygon points="0,-100 -59,-81 0,-60" fill="#E2E8F0" />
          <polygon points="0,-100 59,-81 0,-60" fill="#F1F5F9" />
          <polygon points="59,-81 95,-31 45,-25" fill="#E2E8F0" />
          <polygon points="0,-60 59,-81 45,-25" fill="#CBD5E1" />
          <polygon points="95,-31 95,31 55,10" fill="#94A3B8" />
          <polygon points="45,-25 95,-31 55,10" fill="#CBD5E1" />
          <polygon points="95,31 59,81 40,45" fill="#64748B" />
          <polygon points="55,10 95,31 40,45" fill="#94A3B8" />
          <polygon points="59,81 0,100 0,60" fill="#475569" />
          <polygon points="40,45 59,81 0,60" fill="#64748B" />
          <polygon points="0,100 -59,81 -40,45" fill="#334155" />
          <polygon points="0,60 0,100 -40,45" fill="#475569" />
          <polygon points="-59,81 -95,31 -55,10" fill="#475569" />
          <polygon points="-40,45 -59,81 -55,10" fill="#64748B" />
          <polygon points="-95,31 -95,-31 -45,-25" fill="#64748B" />
          <polygon points="-55,10 -95,31 -45,-25" fill="#94A3B8" />
          <polygon points="-95,-31 -59,-81 -45,-25" fill="#94A3B8" />
          <polygon points="-59,-81 0,-60 -45,-25" fill="#CBD5E1" />

          {/* Inner Core Front Facets */}
          <polygon points="0,-60 45,-25 0,0" fill="#F8FAFC" />
          <polygon points="0,-60 0,0 -45,-25" fill="#E2E8F0" />
          <polygon points="45,-25 55,10 0,0" fill="#E2E8F0" />
          <polygon points="55,10 40,45 0,0" fill="#CBD5E1" />
          <polygon points="40,45 0,60 0,0" fill="#94A3B8" />
          <polygon points="0,60 -40,45 0,0" fill="#64748B" />
          <polygon points="-40,45 -55,10 0,0" fill="#94A3B8" />
          <polygon points="-55,10 -45,-25 0,0" fill="#CBD5E1" />

          {/* Central Apex Facets for High Specular Dimension */}
          <polygon points="0,-35 25,-12 0,0" fill="#FFFFFF" fillOpacity="0.95" />
          <polygon points="0,-35 0,0 -25,-12" fill="#F8FAFC" fillOpacity="0.9" />
          <polygon points="25,-12 28,15 0,0" fill="#E2E8F0" fillOpacity="0.9" />
          <polygon points="28,15 0,25 0,0" fill="#CBD5E1" fillOpacity="0.85" />
          <polygon points="0,25 -28,15 0,0" fill="#94A3B8" fillOpacity="0.8" />
          <polygon points="-28,15 -25,-12 0,0" fill="#CBD5E1" fillOpacity="0.85" />
        </g>
      </svg>
    </div>
  );
}
