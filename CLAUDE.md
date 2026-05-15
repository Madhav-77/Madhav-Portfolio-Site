# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # TypeScript check + Vite production build
npm run lint       # ESLint (TS/TSX, max-warnings 0 — treat warnings as errors)
npm run preview    # Preview production build locally
npm run deploy     # Build + deploy to GitHub Pages (gh-pages -d dist)
```

There are no tests. Lint is strict (`--max-warnings 0`), so all warnings must be fixed before a build is clean.

## Architecture

This is a **single-page portfolio site** — one scrollable page with anchor-based navigation (`#about`, `#career`, `#portfolio`, etc.). There is no client-side router; `App.tsx` simply renders all section components in sequence.

### Data flow

All site content lives in `src/constants/appData.ts` as named exports (`personalInfo`, `homePageData`, `navigationItems`, `aboutPageData`, `companyList`, `projectList`, `testimonialsList`, `certificatesList`). Components import directly from there — there is no API, context, or state management for content.

TypeScript interfaces for the data shapes are in `src/interfaces/`.

### Styling

- **SCSS Modules** — every component has a co-located `*.module.scss` file for scoped styles.
- **`src/_variables.scss`** — shared design tokens: colors (`$primary-color: #648195`, `$secondary-color: #f3ecdc`, `$accent-color: #36454F`), fonts (Merriweather/Lora/Open Sans), spacing (`$spacing-unit: 16px`).
- **`src/_mixins.scss`** — responsive helpers (`responsive-font-size`, `responsive-float`, etc.) and common patterns (`section-heading`, `card-margin`). Import with `@import '../../mixins'` (no underscore).
- **Bootstrap 5** — imported globally in `main.tsx`; used for grid (`col-*`) and utility classes. Custom styles override Bootstrap where needed.
- Global utility classes (scroll behavior, `custom-card-style`) are in `src/index.scss`.

### Modal pattern

Portfolio and Certifications sections use Bootstrap modals. The triggering element uses `data-bs-toggle="modal"` and `data-bs-target="#<modalId>"`. The modal component receives content via props set through a `useState` + setter pattern in the parent (see `Portfolio.tsx`).
