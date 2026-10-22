interface FilterTabsProps<T extends string> {
  options: T[];
  active: T;
  onChange: (value: T) => void;
  accent?: string;
}

export default function FilterTabs<T extends string>({
  options,
  active,
  onChange,
  accent = "var(--clr-branding)",
}: FilterTabsProps<T>) {
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        gap: "0.25rem",
        backgroundColor: "var(--surface-1)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-sm)",
        padding: "0.25rem",
      }}
    >
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option)}
            style={{
              fontFamily: "var(--font-fine)",
              fontSize: "var(--text-xs)",
              fontWeight: isActive ? 600 : 500,
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: isActive ? (accent === "var(--clr-branding)" ? "#fff" : "#fff") : "var(--text-muted)",
              backgroundColor: isActive ? accent : "transparent",
              border: "none",
              borderRadius: "var(--radius-xs)",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              transition: "all var(--ease-fast)",
              whiteSpace: "nowrap",
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
