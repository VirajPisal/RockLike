import { useState } from "react";
import type { VideoProject } from "../data/videoProduction";

interface VideoCardProps {
  video: VideoProject;
  onPlay: (video: VideoProject) => void;
}

const categoryColor: Record<string, string> = {
  "Brand Film": "var(--clr-video)",
  "Commercial": "var(--clr-video)",
  "Social Content": "var(--clr-performance)",
  "Event Coverage": "var(--clr-branding)",
};

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  const [hovered, setHovered] = useState(false);
  const accent = categoryColor[video.category] ?? "var(--clr-video)";

  return (
    <article
      onClick={() => onPlay(video)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        backgroundColor: "var(--surface-1)",
        border: "1px solid var(--border-default)",
        cursor: "pointer",
        transition: "all var(--ease-base)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "var(--shadow-xl)" : "var(--shadow-card)",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
          backgroundColor: "var(--surface-2)",
        }}
      >
        <img
          src={video.thumbnail}
          alt={`${video.client} — ${video.title}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform var(--ease-slow)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: `rgba(10,10,10,${hovered ? 0.55 : 0.35})`,
            transition: "background-color var(--ease-base)",
          }}
        />

        {/* Play button */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "50%",
              backgroundColor: hovered ? "var(--clr-video)" : "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all var(--ease-base)",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 3L13 8L5 13V3Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Duration */}
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "0.75rem",
            backgroundColor: "rgba(10,10,10,0.75)",
            backdropFilter: "blur(4px)",
            borderRadius: "var(--radius-xs)",
            padding: "0.2rem 0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              color: "rgba(247,245,242,0.9)",
              letterSpacing: "0.05em",
            }}
          >
            {video.duration}
          </span>
        </div>

        {/* Category */}
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            backgroundColor: "rgba(10,10,10,0.7)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${accent}40`,
            borderRadius: "var(--radius-xs)",
            padding: "0.2rem 0.5rem",
          }}
        >
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
            {video.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "1.25rem 1.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-fine)",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            margin: "0 0 0.375rem",
          }}
        >
          {video.client} · {video.year}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.25rem",
            lineHeight: "var(--leading-snug)",
            letterSpacing: "var(--tracking-display)",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          {video.title}
        </h3>
      </div>
    </article>
  );
}
