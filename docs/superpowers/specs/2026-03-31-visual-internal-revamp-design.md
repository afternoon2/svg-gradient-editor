# SVG Gradient Editor — Visual & Internal Revamp

**Date:** 2026-03-31
**Status:** Design approved
**Reference mockup:** `docs/design-reference.html`

---

## 1. Visual Redesign

### 1.1 Layout

Replace the current three-column layout (left sidebar + artboard + right sidebar) with a **two-column layout**:

- **Left sidebar (~350px):** Headed by a small title ("SVG Gradient Editor" — placeholder, may be renamed later). Below it, two **accordion sections** (both can be open simultaneously):
  - **Layers accordion (top):** Gradient list, add/remove controls, presets, blend mode select, download section. Scrollable when content overflows.
  - **Properties accordion (bottom):** Gradient type, color picker, color stops list, chroma settings, shape properties, spread method.
- **Main area:** Artboard (SVG canvas) occupying the remaining width. Size controls and theme toggle remain as small overlays on the artboard area.

No new UI chrome is added — no logo bar, no status bar. Only the existing controls are retained.

### 1.2 Typography

**Font:** Source Serif 4 (Google Fonts, SIL Open Font License 1.1)

- Variable font — single file, smooth weight control
- **Self-hosted** — downloaded and served from project assets (not Google Fonts CDN). Enables future subsetting/optimization.
- Optical sizing (`opsz` axis 8–60) for optimal readability at all sizes
- Weights used: 400 (body), 500 (labels), 600 (headings/buttons), 700 (emphasis)
- Applied globally — both UI controls and headings use the same font family

### 1.3 Color Palette — "Cool Atelier"

**Light theme:**

| Role       | Hex       | Description                    |
|------------|-----------|--------------------------------|
| Background | `#f0ede8` | Cool ecru page                 |
| Surface    | `#e6e2db` | Panel backgrounds              |
| Muted      | `#dad5cc` | Inactive backgrounds, tracks   |
| Border     | `#c2bdb5` | Panel borders, separators      |
| Text       | `#24231f` | Primary text                   |
| Secondary  | `#6e6a62` | Labels, secondary text         |

**Dark theme:**

| Role       | Hex       | Description                    |
|------------|-----------|--------------------------------|
| Background | `#1a1d1f` | Cool graphite                  |
| Surface    | `#252a2d` | Panel backgrounds              |
| Muted      | `#353a3d` | Inactive backgrounds           |
| Border     | `#454b4f` | Panel borders, separators      |
| Text       | `#d8dce0` | Primary text                   |
| Secondary  | `#8a9096` | Labels, secondary text         |

### 1.4 Gradient Accents

Gradient CSS values are used as accent decorations throughout the UI:

| Element                | Light gradient                                    | Dark gradient                                     |
|------------------------|---------------------------------------------------|---------------------------------------------------|
| Primary button fill    | `linear-gradient(135deg, #5c7a6e, #6a8ec4)`      | `linear-gradient(135deg, #7aab98, #7a9ed4)`       |
| Active/selected border | `linear-gradient(180deg, #d4627a, #c87a4e)`      | `linear-gradient(180deg, #e07a92, #d4945a)`       |
| Section separator      | `linear-gradient(90deg, #d4627a, #c87a4e, #5c7a6e, #6a8ec4)` | `linear-gradient(90deg, #e07a92, #d4945a, #7aab98, #7a9ed4)` |
| Tab active indicator   | `linear-gradient(90deg, #5c7a6e, #6a8ec4)`       | `linear-gradient(90deg, #7aab98, #7a9ed4)`        |
| Type badge background  | Tinted glass (12-15% opacity gradient fill)       | Same pattern, 20% opacity                         |

Where gradients appear:
- **Active tab:** 3px bottom border with gradient
- **Selected gradient item:** Left border with gradient (rose→copper / rose→amber)
- **Primary action buttons:** Full gradient fill
- **Section separators:** Full-spectrum gradient line (2px)
- **Slider tracks:** Gradient fill showing the color range
- **Type badges:** Subtle tinted glass gradient background

### 1.5 Transitions

**Timing:** `200ms cubic-bezier(0.4, 0, 0.2, 1)` (Material standard easing — fast start, smooth deceleration)

| Element            | Trigger       | Effect                                                       |
|--------------------|---------------|--------------------------------------------------------------|
| Gradient buttons   | Hover         | Gradient inverts direction + 1px translateY lift + shadow     |
| Outline buttons    | Hover         | Background tint (6% black) + 1px lift                        |
| List items         | Hover         | Background tint (4% black)                                   |
| Tabs (inactive)    | Hover         | Background tint                                              |
| Slider thumb       | Hover (track) | Scale to 1.2x + shadow                                      |
| Swatches / cards   | Hover         | 1px lift. Light: dark shadow. Dark: **light glow** (`rgba(255,255,255,0.12)`) |
| Selection border   | State change  | Border opacity fades in                                      |
| Theme toggle       | Toggle        | Global `color, background-color, border-color` transition    |

**Rules:**
- `will-change: transform` on elements with translateY transitions (GPU compositing)
- No entrance/exit animations
- No content layout shifts
- Dark mode uses light-colored glows/shadows instead of dark ones

### 1.6 Spacing & Controls

- Bigger, more spacious controls — increased padding (12-16px) on interactive elements
- More whitespace between sections (16-20px gaps)
- Bold 2px borders between major sections
- Border radius: 8-10px for panels/cards, 6-8px for controls
- Minimum touch target: 36px height for interactive controls

### 1.7 Accessibility

- All text meets WCAG 2.1 AA contrast (4.5:1 for body text, 3:1 for large text)
- Radix UI primitives provide built-in ARIA attributes, keyboard navigation, focus management
- Focus rings: visible, distinct from hover states
- Gradient accents used decoratively — never as the sole means of conveying information
- react-colorful provides accessible color picker with keyboard support

---

## 2. Internal Revamp

### 2.1 Package Manager

**Yarn → Bun**

- Remove `yarn.lock`
- Run `bun install` to generate `bun.lockb`
- Update CI/CD (`deploy.yml`) to use Bun
- Update scripts in `package.json` if needed (Bun is compatible with npm scripts)

### 2.2 Dependency Upgrades

All versions pinned (no `^` prefix):

| Package            | Current         | Target          | Notes                              |
|--------------------|-----------------|-----------------|-------------------------------------|
| react              | ^18.3.1         | 19.x.x (pinned) | Verify Radix UI + Jotai compat     |
| react-dom          | ^18.3.1         | 19.x.x (pinned) | Must match React version           |
| typescript         | ^5.5.4          | 5.8.x (pinned)  | Latest stable                      |
| vite               | 5.4.12          | 8.x.x (pinned)  | Major upgrade                      |
| @vitejs/plugin-react | ^4.3.1        | latest (pinned)  | Must be compatible with Vite 8     |
| tailwindcss        | ^3.4.10         | 4.x.x (pinned)  | Major rewrite — CSS-first config   |
| chroma-js          | 3.1.0           | latest (pinned)  | Check for breaking changes         |
| jotai              | ^2.9.3          | latest (pinned)  | Verify React 19 compat             |
| jotai-devtools     | ^0.10.1         | latest (pinned)  | Verify React 19 compat             |
| All Radix UI pkgs  | various ^1.x/^2.x | latest (pinned) | Verify React 19 compat            |

### 2.3 Library Swaps

| Remove             | Add              | Reason                                         |
|--------------------|------------------|-------------------------------------------------|
| react-color        | react-colorful   | Unmaintained, React 19 concerns. react-colorful is 2.8KB, accessible, maintained |
| @types/react-color | (removed)        | No longer needed                                |
| prettier           | (removed)        | Replaced by oxfmt                               |
| prettier-plugin-sort-imports | (removed) | Replaced by oxfmt                           |
| eslint             | oxlint           | Faster, simpler config                          |
| @typescript-eslint/parser | (removed) | Replaced by oxlint                              |
| @typescript-eslint/eslint-plugin | (removed) | Replaced by oxlint                       |
| eslint-plugin-react-refresh | (removed) | Evaluate if oxlint covers this              |

**Add:**
- `oxlint` — Linter
- `oxc-transform` / `oxfmt` — Formatter (experimental, accepted risk)

### 2.4 Linter & Formatter Config

- Remove `.eslintrc.js`, `.prettierrc`
- Create `oxlint.json` (or equivalent config) with rules matching current setup
- Configure oxfmt settings (tab width: 2, semicolons, double quotes to match current style)
- Update any editor config / CI scripts

### 2.5 Tailwind CSS v4 Migration

- Remove `tailwind.config.js` and `postcss.config.js`
- Convert theme configuration to `@theme` CSS directives in `src/index.css`
- Update CSS variable definitions to use Tailwind v4 syntax
- Review and update any deprecated class names
- All custom colors move into CSS `@theme` block
- Verify `tailwindcss-animate` plugin compatibility (may need replacement)

### 2.6 shadcn/ui Component Updates

- Update `components.json` for Tailwind v4 compatibility
- Re-generate or update all components in `src/components/ui/`
- Verify Radix UI primitive versions are compatible with React 19

### 2.7 Build Configuration

- Update `vite.config.ts` for Vite 8
- Verify Jotai babel plugins work with new `@vitejs/plugin-react`
- Update `tsconfig.app.json` target if beneficial (ES2022+)
- Update esbuild resolution if still needed
- Remove `@types/nanoid` (nanoid 5 ships its own types)

### 2.8 CI/CD

- Update `.github/workflows/deploy.yml`:
  - Replace Node.js setup with Bun setup (`oven-sh/setup-bun`)
  - Replace `yarn install` / `yarn run build` with `bun install` / `bun run build`
  - Add lint step: `bun run lint` (oxlint)

---

## 3. Implementation Order

**Phase 1: Internals** (foundation first)
1. Switch to Bun, pin all existing deps
2. Upgrade TypeScript, Vite, React 19
3. Swap react-color → react-colorful
4. Replace ESLint + Prettier with oxlint + oxfmt
5. Upgrade Tailwind to v4, migrate config
6. Update shadcn/ui components
7. Update Radix UI, Jotai, chroma-js
8. Update CI/CD
9. Verify everything builds and runs

**Phase 2: Visual redesign** (on stable foundation)
1. Add Source Serif 4 font
2. Implement "Cool Atelier" color palette (CSS variables)
3. Restructure layout: merge sidebars into single tabbed panel
4. Apply gradient accents (buttons, separators, tabs, badges, slider tracks)
5. Implement transition system (200ms cubic-bezier, gradient inversion, lifts, glows)
6. Increase spacing and control sizes
7. Polish dark theme (light glows, proper contrast)
8. Accessibility review
