import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  accent?: string;
  className?: string;
}

export default function Breadcrumbs({
  items,
  accent = "var(--clr-branding)",
  className = "",
}: BreadcrumbsProps) {
  // Prepend Home if not present
  const fullItems: BreadcrumbItem[] =
    items[0]?.href === "/" || items[0]?.label.toLowerCase() === "home"
      ? items
      : [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    letterSpacing: "var(--tracking-wide)",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color var(--ease-fast)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  {index === 0 && (
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.7 }}>
                      <path d="M2.5 7L8 2.5L13.5 7V13.5H10V9.5H6V13.5H2.5V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  style={{
                    fontFamily: "var(--font-fine)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    letterSpacing: "var(--tracking-wide)",
                    textTransform: "uppercase",
                    color: isLast ? accent : "var(--text-muted)",
                  }}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                  style={{ color: "var(--text-disabled)", flexShrink: 0 }}
                >
                  <path d="M3.5 2L6.5 5L3.5 8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
