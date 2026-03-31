# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
yarn dev        # Start Vite dev server with hot reload
yarn build      # Production build (outputs to ./dist)
yarn serve      # Preview production build locally
```

No test framework is configured. Linting/formatting available via ESLint and Prettier but no dedicated scripts — run directly: `npx eslint src/` and `npx prettier --check src/`.

## Architecture

**SVG Gradient Editor** — a fully client-side React SPA for creating, editing, and exporting SVG gradients. No backend; persistence via localStorage.

### State Management (Jotai)

State lives in `src/state/` using Jotai atoms:

- **`gradient.store.ts`** — Core state. Uses `atomWithReducer` with ts-pattern exhaustive matching for gradient CRUD, color manipulation, and attribute changes. Derived atoms (`selectedGradientAtom`, `gradientsLengthAtom`) project from the main reducer atom.
- **`presets.state.ts`** — `atomWithStorage` for localStorage-backed preset save/load.
- **`artboard.state.ts`**, **`theme.state.ts`**, **`globalBlendMode.state.ts`**, **`globalColorSpace.state.ts`** — Simple atoms for UI state.

### Web Worker (`src/components/worker/`)

Color interpolation is offloaded to a Web Worker to avoid blocking the UI:
- `gradient.worker.ts` — receives gradient colors + chroma attributes, returns interpolated `AppColor[]`
- `worker.hooks.ts` — `useGradientWorkerInit()` manages lifecycle, `useGradientWorker(callback)` sends/receives messages
- `src/lib/chroma.ts` — linear and bezier interpolation via chroma-js

### Component Layout

```
App.tsx (Jotai Provider)
├── LayersPanel (left sidebar) — gradient list, presets, blend mode, download
├── Artboard (center) — SVG canvas with Defs (gradient definitions) + Figures (shapes)
├── SelectionPanel (right sidebar) — gradient properties, color picker, chroma settings
└── ThemeListener — dark/light mode sync
```

- **UI primitives** in `src/components/ui/` are shadcn/ui (Radix UI + Tailwind).
- **App components** in `src/components/app/` contain domain logic.

### Key Types (`src/state/types.ts`)

- `Gradient` — full gradient object (type, colors, chroma attributes, shape data, blend mode)
- `AppColor` — `{ id, value: [r,g,b,a], css, offset? }`
- `InterpolationMode` — 10 chroma-js color spaces (rgb, hsl, lab, oklch, etc.)
- `ShapeType` — "rect" | "circle" | "ellipse"

### Build

Vite with `@vitejs/plugin-react` including Jotai babel plugins (react-refresh + debug-label). Path alias `@` → `./src`. Base path `/svg-gradient-editor` for GitHub Pages. TypeScript strict mode targeting ES2020.

### Deployment

GitHub Actions deploys to GitHub Pages on push to `master` (Node 20, yarn install, yarn build, push dist/).
