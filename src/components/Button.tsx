import { type ReactNode, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";
type Accent = "brand" | "video" | "performance";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  accent?: Accent;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  fullWidth?: boolean;
}

const accentColors: Record<Accent, string> = {
  brand: "var(--clr-branding)",
  video: "var(--clr-video)",
  performance: "var(--clr-performance)",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  accent = "brand",
  children,
  as: Tag = "button",
  href,
  fullWidth = false,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const color = accentColors[accent];

  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-fine)",
    fontWeight: 600,
    letterSpacing: "var(--tracking-wide)",
    fontSize: "0.8125rem",
    textTransform: "uppercase",
    borderRadius: "var(--radius-sm)",
    transition: "all var(--ease-base)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    cursor: "pointer",
    border: "none",
    textDecoration: "none",
    whiteSpace: "nowrap",
    userSelect: "none",
    width: fullWidth ? "100%" : undefined,
    ...style,
  };

  const variantStyles: Record<Variant, React.CSSProperties> = {
    primary: {
      backgroundColor: color,
      color: "#fff",
    },
    secondary: {
      backgroundColor: "var(--surface-2)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--text-secondary)",
    },
    outline: {
      backgroundColor: "transparent",
      color: color,
      border: `1px solid ${color}`,
    },
  };

  const paddingMap: Record<Size, React.CSSProperties> = {
    sm: { padding: "0.5rem 1rem" },
    md: { padding: "0.75rem 1.5rem" },
    lg: { padding: "1rem 2rem" },
  };

  const combinedStyle: React.CSSProperties = {
    ...baseStyle,
    ...variantStyles[variant],
    ...paddingMap[size],
  };

  if (Tag === "a" && href) {
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
