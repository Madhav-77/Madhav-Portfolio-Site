# UI Optimization Plan

## Context
The portfolio site has a coherent color palette and layout but several areas undermine its professional quality: inconsistent card hover behaviors, a dated progress-bar skills interaction, no project titles visible on portfolio cards, hardcoded values that bypass the design system, and Windows-only asset paths that silently break on macOS. This plan addresses all of these without changing the brand identity, layout, or introducing new dependencies.

---

## Changes — Ordered by Dependency

### 1. `src/_variables.scss`
- **Remove** the three unused/broken variables: `$heading-font-size: 10px`, `$sub-heading-font-size: 10px`, `$spacing-unit: 16px`
- **Add** shadow and transition variables after the colors block:
  ```scss
  $shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.2);
  $shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
  $transition-fast: 0.2s;
  $transition-base: 0.3s;
  ```
- **Trim** the Google Fonts import to only load Merriweather (Lora and Open Sans are imported but never used — ~30KB network overhead)

---

### 2. `src/_mixins.scss`
- **Add** two missing mixins:
  ```scss
  @mixin section-heading {
      font-size: 30px;
      line-height: 1.2;
      font-weight: 700;
  }

  @mixin card-margin {
      margin: 10px 0px;
  }
  ```

---

### 3. `src/index.scss`
- **Update** `.custom-card-style` hover from `scale(1.05)` → `translateY(-4px)` and use new variables
- Scale causes layout shift in tight grids; translateY is the modern convention and consistent with blog cards

---

### 4. `src/components/Home/Header/header.module.scss`
- **Fix** hardcoded `#f3ecdc` → `$secondary-color`
- **Add** sliding underline hover on nav links (currently no hover feedback)

---

### 5. `src/components/About/about.module.scss` + `About.tsx`
- Replace progress bar state/interaction with pill/chip tags for skills and interests
- Progress bars require hover-to-reveal, which is a discoverability anti-pattern
- Filled pills (`$primary-color`) for skills; outlined pills for interests

---

### 6. `src/components/Portfolio/portfolio.module.scss` + `Portfolio.tsx`
- Add title overlay on each portfolio card (gradient at bottom showing project name)
- Currently cards show only a logo image with no visible title

---

### 7. `src/components/Career/career.module.scss`
- Replace manual heading CSS with `@include section-heading`

---

### 8. `src/components/Certifications/certifications.module.scss`
- Replace manual heading CSS with `@include section-heading`
- Fix `height: 118px` → `min-height: 100px` on card body (avoids clipping long names)

---

### 9. `src/components/Testimonials/testimonials.module.scss` + `Testimonials.tsx`
- Replace manual heading CSS with `@include section-heading`
- Fix `border-radius: 50px` → `border-radius: 50%` on profile pictures
- Fix backslash asset paths for quote SVGs (Windows-only, fails on macOS/Linux)

---

### 10. `src/components/shared/ScrollToTop/scrollToTop.module.scss`
- Use `$shadow-sm` and `$transition-base` variables instead of hardcoded values

---

### 11. `src/constants/appData.ts`
- Replace all Windows backslash paths (`.\assets\`) with forward-slash paths (`./assets/`)
- Affects: `companyLogo` (3), `projectList` logos/screenshots (4), `certificateList` images (6), `testimonialList` profile pictures (9)

---

## Verification
1. `npm run dev` — no SCSS compilation errors
2. About section — skills and interests render as chips (no progress bars)
3. Portfolio section — each card shows logo + title overlay at the bottom
4. All section headings — identical weight/size throughout
5. Testimonials — profile pictures are perfect circles; quote images load
6. `npm run lint` — zero warnings
7. `npm run build` — clean TypeScript compilation
