import { useEffect } from "react";
import type { VideoProject } from "../data/videoProduction";

interface VideoModalProps {
  video: VideoProject | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal
      aria-label={`${video.client} — ${video.title}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: "var(--z-modal)" as any,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeIn 200ms ease",
      }}
    >
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(5,5,5,0.88)",
          backdropFilter: "blur(12px)",
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "var(--surface-1)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-default)",
          boxShadow: "var(--shadow-xl)",
          overflow: "hidden",
          animation: "slideUp 280ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 10,
            background: "rgba(10,10,10,0.6)",
            backdropFilter: "blur(8px)",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-sm)",
            color: "var(--text-secondary)",
            cursor: "pointer",
            width: "2.25rem",
            height: "2.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all var(--ease-fast)",
          }}
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Video placeholder — replace with an actual <video> or iframe in production */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            backgroundColor: "var(--surface-0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
            }}
          />
          <div
            style={{
              position: "relative",
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <div
              style={{
                width: "5rem",
                height: "5rem",
                borderRadius: "50%",
                backgroundColor: "var(--clr-video)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5L19 12L8 19V5Z" fill="white" />
              </svg>
            </div>
            <p
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-sm)",
                color: "var(--text-muted)",
                margin: 0,
              }}
            >
              Video player · Connect a video source to enable playback
            </p>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: "1.75rem 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-fine)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "var(--tracking-label)",
                  textTransform: "uppercase",
                  color: "var(--clr-video)",
                  margin: "0 0 0.375rem",
                }}
              >
                {video.client} · {video.category} · {video.year}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.75rem",
                  letterSpacing: "var(--tracking-display)",
                  color: "var(--text-primary)",
                  margin: 0,
                  lineHeight: "var(--leading-snug)",
                }}
              >
                {video.title}
              </h2>
            </div>
            <span
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-sm)",
                color: "var(--text-muted)",
                flexShrink: 0,
              }}
            >
              {video.duration}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
