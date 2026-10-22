# Rocklike Techventures — Design Guidelines

## Aesthetic Stance: Kinetic

Cinematic, dark, motion-aware. Every surface has purpose. Typography is structural and assertive. Accents are restrained and precise.

---

## Fonts

| Role | Family | Weight | Use |
|---|---|---|---|
| Display | Barlow Condensed | 700–900 | Headlines, section titles, hero text, card titles |
| Body | Barlow | 300–700 | Paragraphs, descriptions, UI copy |
| Fine / UI | Inter | 400–600 | Labels, eyebrows, nav, tags, buttons, captions |

```css
--font-display: 'Barlow Condensed', system-ui, sans-serif;
--font-body:    'Barlow', system-ui, sans-serif;
--font-fine:    'Inter', system-ui, sans-serif;
```

---

## Color System

### Base Palette

| Token | Value | Use |
|---|---|---|
| `--surface-0` | `#0A0A0A` | Page background |
| `--surface-1` | `#141414` | Card / section alt background |
| `--surface-2` | `#1E1E1E` | Hover state surface |
| `--surface-3` | `#2A2A2A` | Tag backgrounds, borders |
| `--text-primary` | `#F7F5F2` | Headings, primary content |
| `--text-secondary` | `#A8A5A0` | Body copy, descriptions |
| `--text-muted` | `#6A6A6A` | Labels, captions |

### Service Accent Colors

| Service | Color | Token |
|---|---|---|
| Branding | Warm Red `#E03535` | `--clr-branding` |
| Video Production | Electric Blue `#2563EB` | `--clr-video` |
| Performance Marketing | Emerald `#059669` | `--clr-performance` |

Each accent has a `--clr-{service}-glow` (14% opacity) and `--clr-{service}-border` (30% opacity) variant for backgrounds and borders.

---

## Typography Scale

| Token | Value | CSS Var |
|---|---|---|
| xs | 0.6875rem (11px) | `--text-xs` |
| sm | 0.8125rem (13px) | `--text-sm` |
| base | 1rem (16px) | `--text-base` |
| lg | 1.125rem | `--text-lg` |
| 2xl | 1.75rem | `--text-2xl` |
| 4xl | 3rem | `--text-4xl` |
| Hero | `clamp(4rem, 9vw, 9rem)` | — |

### Letter Spacing

| Token | Value | Use |
|---|---|---|
| `--tracking-tight` | `-0.04em` | Large display numbers |
| `--tracking-display` | `-0.025em` | All headings |
| `--tracking-label` | `0.12em` | Eyebrows, labels (uppercase) |
| `--tracking-wide` | `0.06em` | Buttons, tags (uppercase) |

---

## Spacing

Spacing is expressed as `--space-{n}` where n is the multiplier of 0.25rem.

Section padding uses `--space-section: clamp(4rem, 8vw, 8rem)`.

Use the `.section` utility class for page sections and `.container` for content width (1240px max).

---

## Border Radius

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | `0.25rem` | Tags, badges |
| `--radius-sm` | `0.5rem` | Buttons, small cards |
| `--radius-md` | `0.875rem` | Sub-service cards, panels |
| `--radius-lg` | `1.5rem` | Main service cards, modals |
| `--radius-xl` | `2.5rem` | Feature sections |

---

## Shadows

| Token | Use |
|---|---|
| `--shadow-card` | Default card with border |
| `--shadow-md` | Hover elevation |
| `--shadow-xl` | Elevated modals, overlays |

---

## Transitions

| Token | Value | Use |
|---|---|---|
| `--ease-fast` | `140ms` cubic-bezier | Color, opacity on hover |
| `--ease-base` | `260ms` cubic-bezier | Transform, border changes |
| `--ease-slow` | `480ms` cubic-bezier | Image scale on hover |
| `--ease-reveal` | `680ms` spring-out | Entry animations |

---

## Component Conventions

- **Service accent propagation**: every page receives its accent color as a CSS variable prop — do not hardcode colors in components.
- **Card hover**: `translateY(-4px)` + elevated shadow + accent border glow.
- **Image hover**: `scale(1.05–1.06)` within `overflow: hidden` container.
- **Labels / eyebrows**: always Inter, uppercase, `--tracking-label`, `--text-xs`.
- **Display headings**: always Barlow Condensed 700–900, `--tracking-display`, `--leading-tight`.

---

## Layout Rules

- Max content width: `1240px` (`.container`)
- Max page width: `1440px` (`.container--wide`)
- Grid gutter: `clamp(1.25rem, 3.5vw, 2.5rem)` (`--grid-gutter`)
- Nav height: `5rem` (`--nav-height`)
- Navbar is position: fixed — all hero sections add `calc(var(--nav-height) + section-padding)` to top padding.

---

## Architecture Rules

1. `App.tsx` — routing shell only. No page content.
2. `pages/` — one file per major page.
3. `components/` — single responsibility. No page-specific logic.
4. `data/` — all business content. Components receive it as props.
5. Repeated card JSX always uses `.map()` over data arrays.
6. Navbar and Footer render once, inside `AppShell`.
