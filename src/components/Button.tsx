import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  accent?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  accent = "var(--clr-branding)",
  children,
  to,
  href,
  fullWidth = false,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const isCustomAccent = accent.startsWith("var(") || accent.startsWith("#") || accent.startsWith("rgb");
  const resolvedAccent = isCustomAccent ? accent : `var(--clr-${accent})`;

  const paddingMap: Record<ButtonSize, { padding: string; fontSize: string }> = {
    sm: { padding: "0.5rem 1rem", fontSize: "0.75rem" },
    md: { padding: "0.75rem 1.625rem", fontSize: "0.8125rem" },
    lg: { padding: "1rem 2.25rem", fontSize: "0.9375rem" },
  };

  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-fine)",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: "var(--radius-sm)",
    transition: "all var(--ease-base)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.625rem",
    cursor: "pointer",
    border: "none",
    textDecoration: "none",
    whiteSpace: "nowrap",
    userSelect: "none",
    width: fullWidth ? "100%" : undefined,
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
    ...paddingMap[size],
    ...style,
  };

  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      backgroundColor: resolvedAccent,
      color: "#ffffff",
      boxShadow: `0 4px 20px -2px ${resolvedAccent}40`,
    },
    secondary: {
      backgroundColor: "var(--surface-2)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent",
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--text-primary)",
      border: `1px solid ${resolvedAccent}60`,
    },
  };

  const combinedStyle: React.CSSProperties = {
    ...baseStyle,
    ...variantStyles[variant],
  };

  if (to) {
    return (
      <Link
        to={to}
        style={combinedStyle}
        className={`rock-btn rock-btn--${variant} ${className}`}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        style={combinedStyle}
        className={`rock-btn rock-btn--${variant} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={combinedStyle}
      className={`rock-btn rock-btn--${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
