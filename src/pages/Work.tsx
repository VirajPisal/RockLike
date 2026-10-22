import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import PortfolioCard from "../components/PortfolioCard";
import { portfolioItems, portfolioCategories, type PortfolioCategory, type PortfolioItem } from "../data/portfolio";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO & BREADCRUMBS
      ══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "calc(var(--nav-height) + 2rem)",
          paddingBottom: "4rem",
          backgroundColor: "var(--surface-0)",
          borderBottom: "1px solid var(--border-default)",
        }}
      >
        <div className="container">
          <Breadcrumbs
            items={[{ label: "Selected Work" }]}
            accent="var(--clr-video)"
          />

          <div style={{ maxWidth: "760px", marginTop: "2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--clr-video)",
                marginBottom: "1rem",
              }}
            >
              Case Studies &amp; Archive
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: "0.95",
                letterSpacing: "var(--tracking-display)",
                color: "var(--text-primary)",
                margin: "0 0 1.5rem",
                textTransform: "uppercase",
              }}
            >
              Work That <br />
              <span style={{ color: "var(--clr-video)" }}>Commands Attention.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.0625rem, 1.5vw, 1.1875rem)",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              A curated index of identity transformations, cinematic brand films, high-velocity performance architectures, and event experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PORTFOLIO GALLERY & FILTER
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "3.5rem",
            }}
          >
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? "var(--clr-video)" : "var(--surface-2)",
                  color: activeCategory === cat ? "#ffffff" : "var(--text-secondary)",
                  border: `1px solid ${activeCategory === cat ? "var(--clr-video)" : "var(--border-default)"}`,
                  borderRadius: "var(--radius-sm)",
                  padding: "0.625rem 1.25rem",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "all var(--ease-fast)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                style={{ cursor: "pointer" }}
              >
                <PortfolioCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CASE STUDY PREVIEW MODAL
      ══════════════════════════════════════════ */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: "var(--z-modal)" as any,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              backgroundColor: "var(--surface-1)",
              border: "1px solid var(--border-strong)",
              borderRadius: "var(--radius-xl)",
              maxWidth: "720px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "2.5rem",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "var(--surface-3)",
                border: "none",
                borderRadius: "50%",
                width: "2.5rem",
                height: "2.5rem",
                color: "var(--text-primary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>

            {/* Modal Image */}
            <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "1.75rem", aspectRatio: "16/9" }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Modal Header */}
            <div
              style={{
                fontFamily: "var(--font-fine)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: selectedProject.accent,
                marginBottom: "0.5rem",
              }}
            >
              {selectedProject.client} · {selectedProject.year}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "2.25rem",
                lineHeight: "1.1",
                color: "var(--text-primary)",
                margin: "0 0 1rem",
              }}
            >
              {selectedProject.title}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: "1.7",
                color: "var(--text-secondary)",
                margin: "0 0 1.75rem",
              }}
            >
              {selectedProject.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
              {selectedProject.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    backgroundColor: "var(--surface-2)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "var(--radius-xs)",
                    padding: "0.25rem 0.625rem",
                    fontFamily: "var(--font-fine)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button to="/contact" variant="primary" accent={selectedProject.accent}>
                Inquire About Similar Project
              </Button>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: "transparent",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.75rem 1.5rem",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-fine)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          WORK CTA
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: "var(--surface-0)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <SectionHeading
            align="center"
            eyebrow="Commission Your Project"
            title="Have an Ambitious Goal in Mind?"
            subtitle="Whether it's a full identity redesign or a scalable paid media funnel, we can make it happen."
            accent="var(--clr-video)"
          />
          <div style={{ marginTop: "2.5rem" }}>
            <Button to="/contact" variant="primary" size="lg" accent="var(--clr-video)">
              Start a Project Discussion
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
