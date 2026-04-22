# VOIR-Level Complete Redesign — Design Spec
**Date:** 2026-04-22
**Project:** Srinivas Nampalli Portfolio (Astro)
**Status:** Approved
**Approach:** Option C — Parallel agent streams

---

## Overview

Complete rebuild of the Srinivas Nampalli portfolio to match VOIR's editorial quality. Five parallel streams execute simultaneously: design system, homepage, work/case study, inner pages, and blog. The existing Astro framework, GSAP, and file structure are preserved — only the visual output changes.

**Source of truth for design:** VOIR Framer site (`voir.framer.media`) HTML/CSS analysis.

---

## Design System — VOIR Tokens

### Color Palette

```css
--c-ink:       #111111;   /* Primary dark canvas */
--c-cream:     #f9f8f7;   /* Light surface, alternating sections */
--c-taupe:     #9d8d7a;   /* Warm accent — replaces lime neon */
--c-dust:      #222222;   /* Card hover, input bg */
--c-off-white: #f9f8f7;   /* Primary text on dark */
--c-black:     #111111;   /* Primary text on light */
--c-stone:     rgba(249,248,247,0.64);  /* Secondary text on dark */
--c-bone:      rgba(17,17,17,0.64);     /* Secondary text on light */
--c-line:      rgba(249,248,247,0.10);  /* Hairline dividers */
--c-line-strong: rgba(249,248,247,0.20);
--c-overlay:   rgba(17,17,17,0.80);    /* Dark overlay on images */
```

**Key change from current:** Lime neon (`#c8ff00`) is removed entirely. Warm taupe (`#9d8d7a`) becomes the sole accent — consistent with VOIR's restrained, editorial palette.

### Typography

```css
--font-display: 'Instrument Serif', Georgia, serif;
--font-sans:    'Instrument Sans', 'Helvetica Neue', Arial, sans-serif;
--font-mono:    'JetBrains Mono', 'Courier New', monospace;
```

**Type scale (fluid):**
```css
--fs-display-1: clamp(72px, 12vw, 180px);  /* Hero fit-text, footer wordmark */
--fs-display-2: clamp(48px, 8vw, 120px);   /* Hero name */
--fs-display-3: clamp(36px, 5vw, 72px);    /* Section quotes, CTA headline */
--fs-h1:        clamp(28px, 3.5vw, 48px);
--fs-h2:        clamp(22px, 2.5vw, 36px);
--fs-h3:        18px;
--fs-body-lg:   clamp(17px, 1.8vw, 22px);
--fs-body:      16px;
--fs-body-sm:   14px;
--fs-label:     11px;  /* Uppercase section markers */
```

**Key typographic moves matching VOIR:**
- `letter-spacing: -0.03em` on sans display (tight, confident)
- `line-height: 0.9em` on serif display (cinematic)
- Per-character `<span>` wrapping for stagger animations
- `mix-blend-mode: difference` on nav wordmark
- Oversized fit-text SVGs for section watermarks

### Animation Catalogue

| Name | Technique | Usage |
|------|-----------|-------|
| Letter stagger reveal | Each char: `opacity:0.001 + translateY(10px)` → spring, 30ms stagger | All display headlines |
| Word-blur reveal | Each word: `filter:blur(10px) + translateY(100px)` → clear | Secondary serif headlines |
| Cover wipe (image) | Pseudo overlay `scaleY(1→0)`, `expo.inOut 1.2s` | All images entering viewport |
| Crosshair cursor | `cursor: crosshair` on images | All project/blog images |
| Fit-text watermark | SVG `viewBox` with `text` element filling container width | Section labels |
| Parallax BG | `scale(1.15)→scale(1.05)`, `translateY` scrub on scroll | Hero, interlude |
| Progressive blur fade | 8 stacked divs, `backdrop-filter: blur(Npx)` + gradient masks | Hero bottom dissolve |
| Spring accordion | `max-height: 0→auto`, `cubic-bezier(0.23,0.87,0.34,1.01)` | Services, FAQ |
| Card hover lift | `translateY(-4px)` + shadow shift | Project/blog cards |
| Count-up numbers | JS counter, `easeOutQuart`, 1400ms | Metrics section |
| Angled CTA cards | `translateY(200px) rotate(-9deg)` → final angle spring | Closing CTA |
| Grain overlay | `opacity: 0.09`, `mix-blend-mode: overlay` SVG/CSS noise | Dark hero sections |
| Side-panel nav | `translateX(100%→0)`, dark overlay backdrop | Mobile + desktop menu |

---

## Stream 1 — Design System

**Files to create/rewrite:**
- `src/styles/global.css` — full rewrite with VOIR tokens
- `src/components/Header.astro` — side-panel nav (600px desktop, 400px tablet, 100% mobile), `mix-blend-mode: difference` wordmark, hamburger open/close
- `src/components/shared/Footer.astro` — fit-text wordmark bleeding edges, 4-col grid (nav / social / contact / portrait), GSAP `translateY(32px)` reveal
- `src/components/shared/PageTransition.astro` — ink-wash sweep on page entry/exit

**Shared animation utilities (inline GSAP per component):**
- Letter stagger helper
- Cover wipe helper
- Fit-text watermark pattern
- Crosshair cursor activation

---

## Stream 2 — Homepage (`src/pages/index.astro`)

11 sections in order:

### 1. Hero
- Full viewport, `background: --c-ink`
- Background image `scale(1.15)` parallax + progressive 8-layer blur bottom
- Serif name `Srinivas Nampalli` — per-character span, letter stagger
- Sub-label: "Brand & Design Studio — Hyderabad / Worldwide"
- 4 project thumbnails bottom-left (crosshair hover, `translateY(-8px)`)
- Horizontal rule + "SCROLL" label bottom-right
- Grain overlay `opacity:0.09`

### 2. Studio Intro
- Background: `--c-cream`
- "INSIDE SRINIVAS" fit-text SVG watermark
- Serif headline with word-blur reveal
- 3 count-up metrics: Years Creating / Projects Delivered / Clients Worldwide
- "About Us →" text link (wipe underline)
- Portrait right, cover-wipe reveal

### 3. Selected Work
- Background: `--c-ink`
- "SELECTED WORKS" fit-text watermark
- 3-card staggered masonry grid, crosshair hover, title + year slide up
- Each card: cover-wipe reveal on scroll entry

### 4. Parallax Interlude
- Full-width image, `height: 80vh`
- Image scrolls at 0.6× speed
- Circular decorative dot-grid overlay (`radial-gradient` repeating)
- Grain overlay `opacity:0.09`

### 5. Testimonials
- "TESTIMONIALS" fit-text watermark
- Carousel: prev/next arrows, numbered `01/03`
- Large serif quote — word-by-word reveal
- Client portrait (cover-wipe) + name + title + city

### 6. Services Accordion
- "SERVICES" fit-text watermark
- 4 accordion items: Brand Strategy (01), Intelligent Systems (02), Motion & Interaction (03), Pitch Decks (04)
- Each expands: image left + description right + tags + CTA
- `+` rotates to `×`, spring panel open

### 7. Craft / Info Cards
- 3-column sticky-offset grid: Process / Industries / Capabilities
- White cards on `--c-cream` background
- Tags inside each card, stagger in
- Cards at different vertical offsets (editorial)

### 8. Blog / Journal
- "THE JOURNAL" fit-text watermark
- 3 latest post cards: image + category tag + title + date
- Crosshair hover on images
- "Read More (09) →" button

### 9. FAQ
- "QUESTIONS" fit-text watermark
- 5 accordion items numbered `01–05`
- Arrow icon rotates `0→45deg` on expand
- Spring open, `cubic-bezier(0.23,0.87,0.34,1.01)`

### 10. Closing CTA
- Full-height dark section, atmospheric background image
- Two angled floating cards: white card (headline + CTA button) front, taupe card behind
- Entry: `translateY(200px) rotate(-9deg)` → spring to final angle
- Studio name + city bottom corners

### 11. Footer
- "SRINIVAS N." fit-text SVG bleeding viewport edges
- 4-col grid: Nav / Socials / Contact / Portrait
- Link hover wipe underlines
- GSAP `translateY(32px→0)` on scroll entry

---

## Stream 3 — Work + Case Study

### Work Page (`src/pages/work/index.astro`)

1. **Page Header** — "WORKS" fit-text, tagline below, letter reveal
2. **Filter Bar** — sticky, `All · AI Systems · Quantum · Visual Design · Motion`, active wipe underline
3. **Project Grid** — 12-col masonry, 4 projects offset vertically, crosshair hover, cover-wipe reveal, filter transitions (fade out → reorder → fade in)
4. **Footer** — shared footer component

### Case Study (`src/pages/work/[slug].astro`)

1. **Hero** — full viewport, project name serif letter-reveal, category + year tags, background project image with parallax + progressive blur, "Scroll to explore ↓" bottom-right, breadcrumb top-left
2. **Project Meta Band** — 4 columns: Client / Year / Services / Duration, stagger fade-up
3. **Challenge** — 60/40 split, "The Challenge" left, problem statement right, serif pull-quote
4. **Process** — 4 numbered panels, alternating image/text, left/right reveal
5. **Results** — metric cards count-up, client testimonial quote
6. **Next Project** — full-width image half-bleed, "Next Project →" display-2 text, cover reveal

---

## Stream 4 — About + Services + Contact

### About Page (`src/pages/about.astro`)

1. **Hero** — full-width editorial portrait, dark overlay, "We are Srinivas." serif letter-reveal, parallax
2. **Mission Statement** — `--c-cream` band, large centred serif quote, word-blur reveal
3. **Founder Story** — 60/40: portrait left (cover-wipe, grayscale), story right, serif pull-quote inset
4. **Values** — 6 cards: Intent / Craft / Clarity / Boldness / Honesty / Global Thinking. Icon + name + 2-sentence desc, stagger grid
5. **Credentials Timeline** — vertical, year left + milestone right + taupe dot, timeline draws down on scroll
6. **Clients Logo Strip** — "Trusted by" + monochrome logos, horizontal stagger

### Services Page (`src/pages/services.astro`)

1. **Hero** — "SERVICES" letter reveal, tagline
2. **Services Detail** — 6 full-width alternating ink/cream panels: huge decorative number + service name + description + deliverable tags + "Start this project →"
3. **Process** — 4-step horizontal timeline: Discovery → Strategy → Design → Deliver, steps draw left-to-right
4. **Pricing** — 3 engagement tiers: Starter / Studio / Enterprise, feature lists, card stagger
5. **FAQ** — 8 accordion questions, same pattern as homepage FAQ

### Contact Page (`src/pages/contact.astro`)

1. **Hero** — "LET'S BUILD SOMETHING." letter reveal, response time promise
2. **Contact Form** — Name / Company / Email / Project Type / Budget / Description / How did you hear. Full-width taupe submit button. Success state: form fades → checkmark + "Message Received"
3. **Direct Contact Strip** — Email / WhatsApp / Social columns, stagger fade
4. **Mini FAQ** — 4 quick questions, spring accordion

---

## Stream 5 — Blog Index + Blog Post

### Blog Index (`src/pages/blog/index.astro`)

1. **Hero** — "THE JOURNAL" fit-text, post count + categories, letter reveal
2. **Featured Post** — full-width hero card, large image + overlay + title + excerpt, parallax image
3. **Category Filter** — sticky tabs, active wipe underline
4. **Posts Grid** — 3-column, image + category + title + date, crosshair hover, 80ms stagger
5. **Newsletter Band** — after row 2, email input + CTA, slide-up entry

### Blog Post (`src/pages/blog/[slug].astro`)

1. **Hero** — category + title + author + date + read time, featured image full-width below, parallax
2. **Content Body** — max `680px` centred, H2/H3 hierarchy, pull-quotes (serif + taupe `"`), code blocks (mono), images full-width breakout
3. **Table of Contents** — sticky sidebar desktop, highlights current section on scroll
4. **Author Bio** — card: portrait + name + title + 2-line bio + social links, fade-up
5. **Related Posts** — 3-column grid, 80ms stagger

---

## File Structure Changes

```
src/
  styles/
    global.css              ← full rewrite (VOIR tokens)
  components/
    Header.astro            ← side-panel nav, mix-blend-mode wordmark
    HomeFooter.astro        ← fit-text wordmark footer (rewrite)
    HomeHero.astro          ← extracted from Main.astro
    HomeIntro.astro         ← studio intro + metrics (rewrite)
    HomeWorks.astro         ← selected works (rewrite)
    HomeTestimonials.astro  ← new
    HomeServices.astro      ← new (accordion)
    HomeCraft.astro         ← new (3-col sticky cards)
    HomeBlog.astro          ← new
    HomeFAQ.astro           ← new
    HomeClosingCTA.astro    ← new
    shared/
      Layout.astro
      PageTransition.astro
  pages/
    index.astro             ← rewrite (11 sections)
    about.astro             ← rewrite (6 sections)
    services.astro          ← rewrite (5 sections)
    contact.astro           ← rewrite (4 sections)
    work/
      index.astro           ← rewrite (4 sections)
      [slug].astro          ← new case study template
    blog/
      index.astro           ← new
      [slug].astro          ← new
  data/
    testimonials.ts         ← new
    blog.ts                 ← new
    values.ts               ← new
```

---

## Parallel Stream Execution Plan

| Stream | Files | Dependencies |
|--------|-------|--------------|
| 1 — Design System | `global.css`, `Header.astro`, `Footer.astro`, `PageTransition.astro` | None — runs first, others wait for tokens |
| 2 — Homepage | `index.astro` + all `Home*.astro` components | Stream 1 tokens |
| 3 — Work + Case Study | `work/index.astro`, `work/[slug].astro` | Stream 1 tokens |
| 4 — About + Services + Contact | `about.astro`, `services.astro`, `contact.astro` | Stream 1 tokens |
| 5 — Blog | `blog/index.astro`, `blog/[slug].astro` | Stream 1 tokens |

Stream 1 must complete before Streams 2–5 begin. Streams 2–5 run simultaneously.

---

## Placeholder Data Policy

Sections that require content not yet in the codebase ship with hardcoded placeholder data:

| Section | Placeholder approach |
| ------- | -------------------- |
| Testimonials | 3 hardcoded quotes with placeholder names/titles |
| Blog posts | 3 hardcoded post objects in `src/data/blog.ts` |
| Client logos | "Trusted by" strip uses text names, no images required |
| Case study `[slug]` | Single hardcoded slug (`quantum-key`) wired to `src/data/projects.json` |
| Blog post `[slug]` | Single hardcoded slug (`first-post`) with lorem content |

All placeholders must be clearly marked with `<!-- PLACEHOLDER -->` in the HTML so they are easy to find and replace.

---

## Success Criteria

- [ ] All pages use VOIR tokens only — no lime neon, no off-system colors
- [ ] Every display headline uses per-character letter stagger
- [ ] Every image has crosshair cursor + cover-wipe reveal
- [ ] Hero sections have 8-layer progressive blur dissolve
- [ ] Fit-text SVG watermarks on all section headers
- [ ] Side-panel nav works on desktop + mobile
- [ ] Footer has fit-text wordmark bleeding viewport edges
- [ ] Astro `bun run build` passes with zero errors
- [ ] All GSAP animations tied to ScrollTrigger (no timer-based reveals)
