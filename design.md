# Design System — Portfolio + Agency
### Version 1.0 — Complete Specification

---

## Table of Contents

1. Visual Theme & Philosophy
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles & Grid
6. Motion & Animation System
7. Depth & Elevation
8. Do's and Don'ts
9. Page-by-Page Section Specifications
   - 9.1 Home
   - 9.2 Work / Projects
   - 9.3 Case Study (Single Project)
   - 9.4 Services
   - 9.5 About
   - 9.6 Blog (Index)
   - 9.7 Blog Post (Single)
   - 9.8 Contact / Start a Project
   - 9.9 Press / Features
   - 9.10 Changelog / Updates
10. SEO Architecture
11. Agent Prompt Guide

---

## 1. Visual Theme & Philosophy

This design system merges two aesthetic poles — the **editorial brutalism** of Erik Öberg (deep black canvas, oversized display typography that bleeds off-screen, raw negative space) with the **structured agency energy** of the second reference (grid discipline, numbered service lists, project proof panels, social proof metrics). The result is a **dark-first, typographically led, content-validated** identity that reads simultaneously as a serious international agency and a singular creative voice.

**The canvas is ink-black (`#0A0A0A`)** — not soft charcoal, not near-black. The darkness is assertive, not apologetic. Off-white (`#F0EEE9`) is the warm relief tone for text and surface accents, referencing raw paper or architectural concrete. The only chromatic accent is **Signal Lime (`#C8FF00`)** — a single, rationed, high-voltage green used for one purpose: the precise moment you want the reader's eye to land. Overuse destroys it.

**Typography is the primary visual event.** Display headlines run at viewport-relative sizes (8–12vw), overflow clipped intentionally, and carry the entire atmospheric weight of the page. Body type is restrained, European-feeling, set at reading-optimised sizes with generous leading. The contrast between display gigantism and body restraint *is* the design.

**Photography is the second visual event.** Images are not decoration — they are proof. Every project image carries a real composition: atmospheric, grain-textured, editorial quality. Images appear at unexpected scales: sometimes full-bleed spanning the viewport, sometimes precisely cropped rectangles floating in negative space. Never thumbnail-grid filler.

**The grid is a felt presence, not a visible cage.** Alignment is strict — elements snap to an 8px baseline grid and a 12-column fluid layout — but the design regularly *intentionally* breaks containment: display text overflows, images crop edges, counters interrupt columns. The rule-breaking only works because the rules are followed everywhere else.

**Key Characteristics:**
- Ink-black canvas (`#0A0A0A`) as the permanent primary surface — never softened
- Single chromatic accent: Signal Lime (`#C8FF00`) — used for one focal CTA or one data highlight per view
- Off-white (`#F0EEE9`) for warm text and surface relief; pure white (`#FFFFFF`) reserved for maximum contrast moments only
- Display typography bleeds off-screen intentionally — horizontal overflow is a signature aesthetic move
- 8px baseline grid, 12-column fluid layout, 80px max outer gutter
- Grain texture overlay (3–5% opacity) on all major surfaces — the texture is imperceptible at a glance but the surface feels analog rather than digital-sterile
- Numbered service lists, metric callouts, and year-stamps as typographic punctuation
- Images float in precisely calculated negative space; never cropped arbitrarily
- Scroll-triggered reveal animations only — nothing animates until it enters the viewport
- Zero gradient fills — the system is colour-block and typographic throughout

---

## 2. Color Palette & Roles

### Primary

| Name | Hex | Role |
|---|---|---|
| **Ink** | `#0A0A0A` | Primary page canvas, nav background, footer. The unconditional base. |
| **Off-White** | `#F0EEE9` | Primary text on dark surfaces. Also used as card tint surface and section relief bands. Warm — never cold white. |
| **Signal Lime** | `#C8FF00` | The one accent. Used for: one CTA button per page, one metric highlight, hover underlines on nav. Never two Signal Lime elements competing in the same viewport. |
| **Pure White** | `#FFFFFF` | Reserved for maximum contrast: primary button text on Signal Lime, certain display headlines where Off-White would read too warm. |

### Secondary & Support

| Name | Hex | Role |
|---|---|---|
| **Ash** | `#1A1A1A` | Card backgrounds, section separators, elevated surfaces sitting above the Ink canvas. One step up from Ink. |
| **Dust** | `#2C2C2C` | Hovered card state, input field background, subtle zone demarcation. |
| **Stone** | `#888680` | Secondary / metadata text. Year stamps, category labels, captions. |
| **Bone** | `#D4D2CB` | Tertiary text — footnotes, legal, placeholder text in forms. |
| **Line** | `rgba(240,238,233,0.10)` | Hairline dividers, card borders. 10% Off-White — visible but never heavy. |
| **Line Strong** | `rgba(240,238,233,0.20)` | Stronger dividers, focused input borders. |

### Semantic

| Name | Hex | Role |
|---|---|---|
| **Success** | `#4ADE80` | Form success, sent-confirmation states. |
| **Error** | `#F87171` | Form error, invalid fields. |
| **Warning** | `#FBBF24` | Soft warning states only. |

### Alpha Scales

Dark overlays on images: `rgba(10,10,10,0.40)` through `rgba(10,10,10,0.85)` — used for image-text overlays, never full-black covers.

Light overlays on dark surfaces: `rgba(240,238,233,0.04)` through `rgba(240,238,233,0.12)` — used for card hover states, active nav items.

### Color-Block Page Rhythm

`Ink hero → Ink content → Ash feature band → Ink utility → Ink footer`

The page is monochromatic except for the one Signal Lime moment per scroll zone. Relief comes from typography and photography, not colour variation. This creates a cinematic reading pace — like a film that uses restraint all act-one, then lands the accent perfectly.

---

## 3. Typography Rules

### Font Families

| Role | Family | Fallback | Notes |
|---|---|---|---|
| **Display** | `"Neue Montreal"` | `"Helvetica Neue", Helvetica, Arial, sans-serif` | For giant display heads, hero overflow. Tight tracking, confident proportions. |
| **Body / UI** | `"DM Sans"` | `"Helvetica Neue", Arial, sans-serif` | All body copy, nav, buttons, labels, metadata. Humanist, warm. |
| **Mono** | `"JetBrains Mono"` | `"Courier New", monospace` | Blog code blocks, technical specs, version numbers, changelog. |
| **Editorial Serif** | `"Lora"` | `"Georgia", serif` | Pull-quotes on blog posts and case studies only — never in primary UI. |

**Google Fonts to load:** DM Sans (300, 400, 500), Lora (400i), JetBrains Mono (400).
Neue Montreal is a premium typeface from Pangram Pangram Foundry — for free alternatives use `"Outfit"` from Google Fonts which shares its geometric confidence.

### Type Scale

The scale uses `clamp()` for fluid responsive sizing — no media-query type breakpoints needed.

| Token | Size | Weight | Line Height | Tracking | Use |
|---|---|---|---|---|---|
| `--display-1` | `clamp(72px, 12vw, 180px)` | 500 | 0.92 | -0.04em | Hero overflow headline — the dominant typographic event |
| `--display-2` | `clamp(48px, 8vw, 120px)` | 500 | 0.95 | -0.03em | Section display heads ("Selected work", "What we do best") |
| `--display-3` | `clamp(36px, 5vw, 72px)` | 500 | 1.05 | -0.02em | Sub-section display, CTA large text |
| `--h1` | `clamp(28px, 3.5vw, 48px)` | 500 | 1.15 | -0.02em | Page title on inner pages |
| `--h2` | `clamp(22px, 2.5vw, 36px)` | 400 | 1.2 | -0.01em | Card headlines, service names |
| `--h3` | `18px` | 500 | 1.3 | -0.01em | Blog post titles in grid, case study sub-heads |
| `--body-large` | `clamp(17px, 1.8vw, 22px)` | 300 | 1.65 | 0 | Hero sub-copy, about intro paragraph |
| `--body` | `16px` | 400 | 1.7 | 0 | Standard body text, blog prose |
| `--body-small` | `14px` | 400 | 1.6 | 0.01em | Captions, metadata, nav labels |
| `--label` | `11px` | 500 | 1 | 0.12em | Category labels, section markers — always uppercase |
| `--mono` | `13px` | 400 | 1.6 | 0 | Code, version strings, technical copy |

### Typographic Principles

1. **Display overflow is a design choice.** The `--display-1` size is intentionally wider than the viewport on certain hero uses. Set `overflow: hidden` on the containing row, not the text itself. The clipped letter is the aesthetic.

2. **Weight contrast carries hierarchy, not size alone.** `--h2` at weight 400 sits below `--h1` at weight 500 even when their sizes are close. Combine with colour: Off-White 100% for primary, Stone for secondary.

3. **Tracking tightens as size increases.** `-0.04em` on display sizes. Near-zero on body. `+0.12em` on small uppercase labels. This is the single most important tracking rule.

4. **Body text is always Off-White (`#F0EEE9`) on Ink, never pure white.** The warmth matches the canvas temperature. Pure white (`#FFFFFF`) is reserved for elements that must command maximum contrast (primary CTAs, metric numbers).

5. **Serif (`Lora`) appears only in block-quote pull-quotes inside blog and case study pages.** It signals "human voice, editorial moment" against the geometric sans. Never in nav, buttons, or display headlines.

6. **Numeric displays use tabular figures.** When showing metrics (95%, 10+, $12,000), ensure `font-variant-numeric: tabular-nums` so digits align in animation sequences.

7. **Label text is always uppercase with `0.12em` tracking.** This includes: section markers ("01 — Brand & Identity"), nav category tags, year stamps positioned as labels.

---

## 4. Component Stylings

### Buttons

**1. Primary CTA — Signal Lime Fill**
- Background: `#C8FF00`
- Text: `#0A0A0A` (Ink — maximum contrast)
- Border: none
- Radius: `2px` (near-square — contrasts deliberately with rounded UI norms)
- Padding: `14px 28px`
- Font: DM Sans 14px, weight 500, letter-spacing `0.08em`, uppercase
- Hover: background `#DEFF4A`, subtle scale `1.02`, transition `0.2s ease`
- Active: `scale(0.97)`, transition `0.1s ease`
- Use: one per page maximum — the primary conversion action

**2. Ghost — Off-White Outline**
- Background: transparent
- Text: `#F0EEE9`
- Border: `1px solid rgba(240,238,233,0.30)`
- Radius: `2px`
- Padding: `14px 28px`
- Font: DM Sans 14px weight 500, letter-spacing `0.08em`, uppercase
- Hover: border-color `rgba(240,238,233,0.80)`, text shifts to `#FFFFFF`
- Use: secondary actions — "See all work", "Read more", "Learn more"

**3. Text Link with Animated Underline**
- Background: none, no border
- Text: `#F0EEE9`
- Underline: `2px solid #C8FF00`, transforms from `scaleX(0)` to `scaleX(1)` on hover, origin left
- Font: DM Sans 14px weight 500, uppercase, tracking `0.08em`
- Transition: `0.3s cubic-bezier(0.16, 1, 0.3, 1)`
- Use: "See case →", "Read article →", navigation "Start a Project →"

**4. Icon Button — Circular**
- Size: `48px × 48px`
- Background: `rgba(240,238,233,0.06)`
- Border: `1px solid rgba(240,238,233,0.12)`
- Radius: `50%`
- Icon: 20px Off-White SVG
- Hover: background `rgba(240,238,233,0.12)`, `rotate(45deg)` for arrow icons
- Use: close modals, expand accordions, "next project" navigation

**5. Large Surface CTA (bottom-of-page "Let's Connect" zone)**
- Oversized text link: `--display-3` size, Off-White, weight 500
- On hover: Signal Lime underline slides in from left
- Supplementary: email address in `--body-small` Stone below
- No button border or background — the text itself is the button

### Cards

**Project Card**
- Background: `#1A1A1A` (Ash)
- Border: `1px solid rgba(240,238,233,0.08)`
- Radius: `4px`
- Image area: aspect-ratio `16/10`, full-bleed to card edge (no padding on image)
- Image: grayscale `20%` by default, transitions to `0%` on card hover
- Image scale: `1.0` → `1.05` on hover, `transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1)`
- Card meta: padding `20px 24px 24px`, flex column
- Category label: `--label` size, Stone colour, uppercase, tracking `0.12em`
- Project title: `--h2` size, Off-White, weight 400
- Year: `--body-small`, Stone
- "See case →" link: appears on hover, slides up from 8px below with opacity 0→1, Signal Lime underline
- Shadow: none by default. On hover: `0 24px 48px rgba(0,0,0,0.4)`, `translateY(-4px)`
- Transition: `0.4s cubic-bezier(0.16, 1, 0.3, 1)` for all hover states

**Featured / Hero Project Card**
- Full-width. Height: `min(600px, 60vw)`
- Image fills entire card, `object-fit: cover`
- Overlay gradient: `linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.0) 50%)`
- Title: `--display-3` size, white, positioned bottom-left with `40px` padding
- Category + Year: `--label` Stone, above the title
- On hover: image scales `1.03`, transition `0.8s ease`

**Blog Post Card**
- Background: none (floats on Ink canvas)
- Top: date in `--label` Stone
- Image: aspect-ratio `16/9`, radius `4px`, greyscale `15%` → `0%` on hover
- Title: `--h3` Off-White, margin-top `14px`
- Excerpt: `--body-small` Stone, 2-line clamp
- Tag: inline pill — border `1px solid rgba(240,238,233,0.15)`, `--label` Stone, padding `4px 10px`, radius `2px`
- Hover: title colour → Off-White 100%, image desaturation lifts

**Metric / Stat Card**
- Background: `#1A1A1A`
- Border: `1px solid rgba(240,238,233,0.08)`
- Radius: `4px`, padding `32px`
- Number: `--display-3` size, `#FFFFFF` or `#C8FF00` (one Signal Lime metric per group)
- Label: `--label` Stone below the number
- Number animates count-up on scroll entry (intersection observer, 1.2s ease-out)

**Testimonial Card**
- Background: `#1A1A1A`
- Radius: `4px`, padding `32px`
- Quote mark: `--display-1` size `"`, Signal Lime, opacity 0.4, positioned top-left
- Quote text: `--body` Off-White, weight 300, line-height 1.7
- Author: `--body-small`, Stone — name in Off-White weight 500, title/company in Stone
- Avatar: `40px` circle, border `1px solid rgba(240,238,233,0.15)`
- Rating stars: `#C8FF00`, 14px, `letter-spacing: 2px`

### Navigation

**Global Nav**
- Position: `fixed` top, full-width
- Background: `rgba(10,10,10,0.85)` with `backdrop-filter: blur(20px) saturate(1.5)`
- Height: `72px` desktop, `60px` mobile
- Border-bottom: `1px solid rgba(240,238,233,0.06)` — appears after 60px scroll only
- Transition: border-bottom `0.3s ease` on scroll trigger
- Left: Wordmark / Logo in `--h2` size, Off-White, weight 500
- Center: Nav links — DM Sans 13px weight 500 uppercase tracking `0.10em`, Stone colour, hover → Off-White, active → Off-White
- Active indicator: `2px` Signal Lime underline, slides in with `scaleX(1)` on active route
- Right: "Start a Project →" — Primary CTA button (Signal Lime fill)
- Mobile: hamburger (3 lines → X animation), full-screen overlay drawer, slides from right

**Mobile Nav Drawer**
- Background: `#0A0A0A`
- Links: `--display-3` size, vertically stacked, 40px gap
- Enter animation: links stagger-reveal from `translateY(20px)` opacity 0 → 1, each 60ms apart
- Bottom: email + social links in `--body-small` Stone
- Close: top-right `×` button, `48px` circle

### Inputs & Forms

**Text Input**
- Background: `#1A1A1A`
- Border: `1px solid rgba(240,238,233,0.12)`
- Radius: `4px`
- Padding: `14px 16px`
- Font: DM Sans 15px Off-White
- Placeholder: Stone
- Focus: border → `1px solid rgba(200,255,0,0.50)`, inner glow `0 0 0 3px rgba(200,255,0,0.08)`
- Error: border → `1px solid rgba(248,113,113,0.50)`, helper text in Error red
- Transition: `0.2s ease`

**Floating Label (optional on important fields)**
- Label floats above border at `11px` uppercase Stone when active
- Animates: `translateY(0) → translateY(-22px) + scale(0.85)` with `0.2s ease`

**Textarea**
- Same as text input
- `min-height: 160px`, `resize: vertical`

**Select**
- Same visual as text input
- Custom chevron-down SVG, Off-White, right-padded `16px`

**Submit Button**
- Primary CTA — Signal Lime Fill (see Buttons)
- Full-width on mobile

### Accordion / Expander (Services List)

- Item border-bottom: `1px solid rgba(240,238,233,0.10)`
- Header: `--h2` weight 400 Off-White + number prefix in Stone `--label`
- Expand icon: `+` → `×`, `0.3s` rotation, Signal Lime colour when expanded
- Content panel: slides open `max-height: 0 → auto` with `0.35s cubic-bezier(0.16, 1, 0.3, 1)`
- Expanded item gets light Ash background `rgba(240,238,233,0.03)`

### Section Marker Label

Every major section is introduced with a section marker above the display headline:
- Format: `"01 — Brand & Identity"` or `"Selected Work"`
- Size: `--label` (11px), Stone, uppercase, tracking `0.14em`
- Left-aligned
- `margin-bottom: 16px` before the display headline

### Horizontal Scroll Ticker

Full-width marquee between sections (same as reference):
- Background: `#1A1A1A`
- Border-top + border-bottom: `1px solid rgba(240,238,233,0.10)`
- Padding: `14px 0`
- Text: `--label` Stone, uppercase, tracking `0.14em`
- Items separated by `·` stone bullet
- Animation: continuous `translateX` loop, 24s linear infinite
- On hover: `animation-play-state: paused`

---

## 5. Layout Principles & Grid

### Spacing Scale

All spacing derived from an 8px base unit:

| Token | Value | Typical Use |
|---|---|---|
| `--space-1` | `4px` | Tightest — icon gap, inline label offset |
| `--space-2` | `8px` | Small component gap |
| `--space-3` | `16px` | Default inner padding, label-to-headline gap |
| `--space-4` | `24px` | Card padding, grid gap |
| `--space-5` | `32px` | Section inner padding |
| `--space-6` | `48px` | Between subsections |
| `--space-7` | `64px` | Section-to-section |
| `--space-8` | `80px` | Major section breathing |
| `--space-9` | `120px` | Hero section padding |
| `--space-10` | `160px` | Between major page sections desktop |

### Grid

- Columns: 12
- Gutter: `24px` desktop, `16px` tablet, `12px` mobile
- Outer margin: `80px` desktop (xl), `48px` lg, `32px` md, `20px` sm
- Max content width: `1440px` — centered
- Full-bleed sections: `100vw` — background colour escapes the max-width container while content stays within

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| `xs` | < 480px | Single column; display type scales minimum; hero stacks |
| `sm` | 480–767px | Single column; hero image appears beneath headline |
| `md` | 768–1023px | 2-column grid; nav hamburger |
| `lg` | 1024–1279px | Full nav visible; 3-column project grid |
| `xl` | 1280–1439px | Max grid, 4-column possible |
| `2xl` | 1440px+ | Content caps; outer canvas shows |

### Asymmetric Column Patterns

The system regularly uses these intentional asymmetric splits:

- **60/40:** Display headline (7 cols) / meta + CTA (5 cols) — hero sections
- **50/50:** Project image (6 cols) / case study text (6 cols)
- **70/30:** Long service description / stats
- **40/60:** Visual left / copy right — alternating case study panels

### Vertical Section Rhythm

`nav (72px fixed) → hero (100vh) → ticker → section 1 (160px top padding) → section 2 → section 3 → ticker → section 4 → section 5 → CTA band → footer`

Each section has `padding-top: --space-10 (160px)` on desktop, reducing to `--space-8 (80px)` on tablet and `--space-7 (64px)` on mobile.

---

## 6. Motion & Animation System

### Principles

1. **Nothing moves until it enters the viewport.** All animations are scroll-triggered via Intersection Observer with `threshold: 0.15`. No auto-playing animations on load except the hero.
2. **Timing curves favour overshooting ease-out.** The signature easing is `cubic-bezier(0.16, 1, 0.3, 1)` — fast out, slight settle. Feels physical, not digital.
3. **Stagger sequences for lists.** Multiple items in the same section reveal with `60ms` stagger offsets.
4. **Hero animations are the exception** — these fire on page load, orchestrated in sequence.
5. **Reduce-motion respected.** All animations wrapped in `@media (prefers-reduced-motion: reduce)` to disable.

### Easing Tokens

| Token | Value | Character |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary — fast, confident settle |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Page transitions, drawers |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful spring — hover scale, ping |
| `--ease-linear` | `linear` | Marquee tickers, progress bars |

### Duration Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | `0.15s` | Button active press, micro-interactions |
| `--dur-base` | `0.25s` | Hover state transitions |
| `--dur-medium` | `0.4s` | Card hovers, accordion expand |
| `--dur-slow` | `0.7s` | Section reveal, element entry |
| `--dur-hero` | `1.2s` | Hero headline reveal |

### Animation Catalogue

**Hero Headline Overflow Reveal**
- The display headline enters by: `clipPath: inset(0 100% 0 0)` → `inset(0 0% 0 0)`, simultaneously `translateX(-24px)` → `translateX(0)`
- Duration: `--dur-hero`, easing `--ease-out`
- Stagger: sub-headline enters 200ms after main

**Section Entry (default for all non-hero elements)**
- `opacity: 0, translateY: 32px` → `opacity: 1, translateY: 0`
- Duration: `--dur-slow`
- Easing: `--ease-out`
- Triggered: Intersection Observer `threshold: 0.15`

**Image Parallax (hero + featured project)**
- Image element scrolls at `0.5` speed relative to viewport scroll
- Implemented via CSS `transform: translateY(calc(var(--scrollY) * 0.5px))`
- Only on elements with `.parallax` class — never universal

**Count-Up Numbers (metrics)**
- JavaScript counter from `0` to target value
- Duration: `1400ms`, easing: custom `easeOutQuart`
- Triggered on intersection entry

**Marquee / Ticker**
- CSS animation: `@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`
- Duration: `28s linear infinite`
- Pauses on hover: `animation-play-state: paused`

**Project Card Hover**
- Image: `scale(1.0) grayscale(20%)` → `scale(1.05) grayscale(0%)`
- Card: `translateY(0)` → `translateY(-4px)`, shadow appears
- "See case →" text: `translateY(8px) opacity(0)` → `translateY(0) opacity(1)`
- Timing: `0.4s --ease-out`

**Navigation Scroll Behaviour**
- Scrolled past 60px: nav border-bottom appears, background opacity increases from `0.85` to `0.95`
- Back to top: reverses

**Page Transition (if using client-side routing)**
- Outgoing: `opacity: 1` → `opacity: 0`, `0.25s ease`
- Incoming: `opacity: 0, translateY: 16px` → `opacity: 1, translateY: 0`, `0.4s --ease-out`

**Mobile Nav Drawer**
- Drawer: `translateX(100%)` → `translateX(0)`, `0.4s --ease-in-out`
- Background overlay: `opacity: 0` → `opacity: 0.6`, `0.3s ease`
- Nav links: stagger reveal `translateY(16px) opacity(0)` → `translateY(0) opacity(1)`, each 50ms delayed

---

## 7. Depth & Elevation

| Level | Treatment | Element |
|---|---|---|
| Canvas | Flat Ink `#0A0A0A` — no shadow | Page background |
| Raised | `0 4px 16px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)` | Cards at rest |
| Hovered | `0 24px 48px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)` | Cards on hover |
| Navigation | `0 1px 0 rgba(240,238,233,0.06)` (border only) + `backdrop-filter: blur(20px)` | Fixed nav |
| Modal | `0 48px 96px rgba(0,0,0,0.8)` | Overlays, lightboxes |
| Tooltip | `0 8px 24px rgba(0,0,0,0.4)` | Small contextual popups |

**Shadow philosophy:** Shadows are near-invisible on the Ink canvas because the canvas itself is near-black. Elevation is communicated primarily through `backdrop-filter`, `border` visibility, and `translateY` hover lifts — not shadow contrast. The exception: hover states where `rgba(0,0,0,0.5)` reads as deepened depth even on a dark background.

**Grain texture overlay:** A pseudo-element on `<body>` or major sections uses a repeating SVG noise texture at `3–5% opacity`. Not visible at a glance — but the surface feels analog. Disable for users with `prefers-contrast: more`.

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* noise SVG */
  opacity: 0.04;
  pointer-events: none;
  z-index: 9999;
}
```

---

## 8. Do's and Don'ts

### Do
- Use `#0A0A0A` (Ink) as the permanent primary canvas — never soften it to charcoal
- Use Off-White (`#F0EEE9`) for body text on dark surfaces — never pure white for reading text
- Allow display headlines to intentionally overflow the viewport — clip with `overflow: hidden` on the row, not the text
- Reserve Signal Lime for exactly one focal element per scroll viewport
- Use `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` as the universal animation curve
- Trigger all animations via Intersection Observer — nothing on page load except the hero
- Apply grain texture at 3–5% opacity on all major surfaces
- Stagger list item reveals at 60ms offsets
- Use `font-variant-numeric: tabular-nums` on all metric displays
- Keep card border-radius at `4px` — near-square, not soft-pill
- Use image parallax (0.5x speed) on hero and featured project images only
- Let body text breathe: `line-height: 1.7` on `--body`, `1.65` on `--body-large`
- Keep section labels uppercase with `0.12em+` tracking
- Scale outer gutters: 80px → 48px → 32px → 20px across breakpoints

### Don't
- Don't use gradients — the system is flat colour-block throughout
- Don't add a second chromatic accent — Signal Lime only works because it's alone
- Don't use round pill buttons (no `50px` radius) — the `2px` near-square is intentional and contrasts with softened norms
- Don't animate on page load (except hero) — patience before reveal is part of the experience
- Don't use pure white for body text — it reads too cold against the Ink canvas
- Don't add shadows to images at rest — let images float clean in negative space
- Don't use Lora serif in UI contexts — it belongs only in blog/case-study pull-quotes
- Don't add hover effects to static decorative elements — only interactive elements respond
- Don't weight-vary by font-size alone — combine weight AND colour shifts for hierarchy
- Don't auto-play marquees before scroll — wait until the ticker section is in view
- Don't compress images below editorial quality — every project image must be full-resolution, grain-textured, atmospheric

---

## 9. Page-by-Page Section Specifications

---

### 9.1 HOME PAGE

**SEO Title:** `[Agency Name] — Brand Design Studio | Logo, Identity & Visual Strategy`
**Meta Description:** `We design brands that command respect. Based in Hyderabad, working worldwide. Strategic brand identity, logo design, and visual storytelling for founders, institutions, and executives.`
**URL:** `/`

---

#### SECTION 1 — HERO

**Layout:** Full viewport height (`100vh`). No scroll until the user chooses.

**Visual structure:**
- Top-left: Nav (fixed, transparent initially)
- Center-left: Main headline — display overflow
- Top-right quadrant: 2 floating project image thumbnails (editorial crop, slight rotation: `rotate(-2deg)` and `rotate(1.5deg)`)
- Bottom strip: scroll indicator + year founded + available-for-work status dot

**Content:**
```
[Section label — off-screen top] "Brand & Design Studio — Hyderabad / Worldwide"

[Display headline, 12vw, clips right edge]
Designing bold
brands that shape
culture.

[Sub-copy, --body-large, weight 300, max 440px]
We build strategic visual identities for founders, 
directors, institutions, and executives who understand
that the first impression is the only impression.

[Two CTAs — horizontal row]
[Signal Lime] See Our Work →     [Ghost] Start a Project →
```

**Images:**
- 2 floating editorial images, top-right, stacked with slight offset and rotation
- Aspect ratio: portrait `3/4`, approximately `280px × 380px` each on desktop
- Hover: rotation corrects to `0deg`, scale `1.04`

**Animations (fire on page load, sequenced):**
1. `t=0ms` — Section label fades in from `translateY(8px) opacity(0)`
2. `t=100ms` — Headline line 1 clips in from left (`clipPath: inset(0 100% 0 0)` → `inset(0 0% 0 0)`)
3. `t=250ms` — Headline line 2 clips in
4. `t=400ms` — Headline line 3 clips in
5. `t=600ms` — Sub-copy fades up
6. `t=750ms` — CTA buttons fade up with 80ms stagger
7. `t=400ms` — Images float in from `translateY(-24px) opacity(0)`, stagger 120ms
8. `t=1000ms` — Scroll indicator pulses in

**Scroll indicator:** Small downward arrow, Signal Lime, slow bounce animation `translateY(0) → translateY(6px)` looping.

**SEO note:** H1 must contain primary keywords: brand design, logo design, India, international.

---

#### SECTION 2 — TICKER / MARQUEE BAND

**Content:** `Brand Identity · Logo Design · Visual Strategy · Graphic Design · Brand Guidelines · Pitch Decks · Motion Design · Infographics · Brand Identity · Logo Design · ...` (looped)

**Behaviour:** Scroll-triggered fade-in for the band; marquee starts after band appears.

---

#### SECTION 3 — STUDIO INTRO

**Layout:** 60/40 asymmetric. Left: display headline. Right: paragraph + stats grid.

**Content:**
```
[Label] "About the Studio"

[Display-2 headline, clips at container edge]
More than a
design studio.

[Right column — body copy]
We are a brand design studio working across identity, 
typography, and visual communication. Founded in Hyderabad,
we partner with clients from San Francisco to Singapore.
Every brand we build is built to last.

[2×2 stats grid below copy]
┌──────────┐ ┌──────────┐
│   95%    │ │  50+     │
│ Client   │ │ Projects │
│ Retention│ │Delivered │
└──────────┘ └──────────┘
┌──────────┐ ┌──────────┐
│   10+    │ │   3+     │
│Countries │ │ Years of │
│ Reached  │ │Experience│
└──────────┘ └──────────┘
```

**Image treatment (optional):** 2 editorial-style studio/process images right of the stats, overlap layered with slight offset.

**Animations:** Section entry (default fade-up). Stats numbers count up on scroll entry.

---

#### SECTION 4 — SERVICES ACCORDION

**Layout:** Full-width, padded container. Left: section intro. Right: accordion list.

**Content:**
```
[Label] "What We Do"

[Left, 4 columns]
[Display-3] What we
do best.

[Body] From brand identity systems
to pitch decks — complete visual
communication for the modern enterprise.

[Signal Lime CTA] View All Services →

[Right, 8 columns — Accordion]
01  Branding & Identity              +
─────────────────────────────────────────
02  Logo Design                      +
─────────────────────────────────────────
03  Graphic Design & Print           +
─────────────────────────────────────────
04  Motion Graphics & Video          +
─────────────────────────────────────────
05  Pitch Deck & Presentation        +
─────────────────────────────────────────
06  Brand Strategy & Consulting      +
─────────────────────────────────────────
```

**Accordion expand content** (example — service 02 "Logo Design"):
```
[Image, 16/9, left half] + [Right half: description, tags, CTA]

A logo is not just a mark — it is the shorthand for everything
your brand stands for. We design logos that are timeless, 
scalable, and unmistakable.

[Tags] Strategic · Versatile · Timeless · Scalable

[Link] See logo projects →
```

**Animation:** Accordion panels use `max-height` transition with `--ease-out`. Number prefix turns Signal Lime when expanded.

---

#### SECTION 5 — SELECTED WORK (PROJECTS GRID)

**Layout:** Full-width. One featured hero card (full-width). Below: 2-column grid.

**Content:**
```
[Label top-left] "Selected Work"
[Right of label] "Take a look at some of the best work we've done."

[Full-width featured card] → Case Study link

[2-column grid]
Card 1 (2024) · Brand Identity       Card 2 (2024) · Graphic Design
Card 3 (2023) · Brand Design         Card 4 (2022) · Logo Design

[Below grid, centered]
[Ghost CTA] View All Projects →
```

**Featured card specification:**
- Full-width, `min-height: 560px`
- Image: full-bleed, parallax at `0.5x` scroll speed
- Dark overlay gradient bottom-up
- Bottom-left: project name `--display-3`, category `--label`, year
- Bottom-right: "See case →" text link
- Hover: image brightens `brightness(1.1)`, overlay lightens slightly

**Grid cards:** Standard Project Card spec (see Section 4 Components).

**Animation:** Section label + headline reveal. Cards stagger-reveal with `80ms` delay each.

---

#### SECTION 6 — TESTIMONIALS

**Layout:** Left: section intro (3 cols). Right: staggered card mosaic (9 cols).

**Content:**
```
[Label] "What our clients say"

[Display-3] The work 
speaks for itself.

[Body] 50+ happy clients across India,
Europe, and North America.

[Avatars — stacked overlapping circles] 
[+50 more label]
```

**Card mosaic (right side):** 2 columns of testimonial cards at different heights — creates an offset masonry feel. One card can be wider (spans both columns) for a standout quote.

**Animation:** Cards stagger-reveal. Quote mark opacity pulses subtly on hover.

---

#### SECTION 7 — TICKER 2

Repeat the marquee band. Different copy: client industries or values. Example: `International Clients · Brand-First Thinking · Fast Turnaround · India-Rooted · Global-Minded · Since 2024 · ...`

---

#### SECTION 8 — BLOG / INSIGHTS PREVIEW

**Layout:** Label + headline left. 3-column blog card grid.

**Content:**
```
[Label] "Inspiration & Insights"

[Left, 5 cols]
[Display-3] Ideas worth
reading.

[Body] Published weekly — brand strategy,
design thinking, and client acquisition.

[CTA] Read the Blog →

[Right, 7 cols — 3 blog cards in a row]
Card 1 · Card 2 · Card 3
```

**Blog cards:** Date, title, category tag, 2-line excerpt, "Read →" link.

---

#### SECTION 9 — CTA BAND

**Layout:** Full-width Ash (`#1A1A1A`) band. Centered content.

**Content:**
```
[Label, centered] "Ready to start?"

[Display-2, centered, overflow if needed]
Ready to build a bold,
purposeful brand?

[Sub-copy, centered, Stone, max 400px]
Let's talk about your project, your goals,
and how design can move your business forward.

[Signal Lime CTA, centered]  Start a Project →

[Below, Stone small] Or email us directly: hello@youragency.com
```

**Animation:** Headline clips in from left. CTA scales up from `scale(0.95)`.

---

#### SECTION 10 — FOOTER

**Layout:** 4-column grid.

**Content:**
```
Col 1: Agency name (Display-2), tagline, email, © year

Col 2: [Label] Navigate
HOME · WORK · SERVICES · ABOUT · BLOG · CONTACT

Col 3: [Label] Connect  
Behance ↗ · Dribbble ↗ · LinkedIn ↗ · Twitter/X ↗ · Instagram ↗

Col 4: [Label] What We Do
Brand Identity · Logo Design · Graphic Design
Pitch Decks · Brand Strategy

Bottom bar: Privacy Policy · Terms · "Made with intention in Hyderabad, India"
```

---

### 9.2 WORK / PROJECTS PAGE

**SEO Title:** `Work — Brand Identity & Design Projects | [Agency Name]`
**URL:** `/work`

**Sections:**

**HERO**
- Page title: `--display-1` overflow — "All Projects."
- Sub: total project count, year range
- No image — pure typographic hero, ink canvas

**FILTER BAR**
- Sticky below nav when scrolling
- Filter tags: All · Brand Identity · Logo Design · Graphic Design · Motion · Pitch Decks
- Active filter: Signal Lime text + Signal Lime underline
- Background: Ink, `backdrop-filter: blur` when sticky

**PROJECT GRID**
- 2-column masonry-style grid
- Each card: Project Card spec
- Hover: lift + desaturation removes + "See case →" appears
- Filter changes: cards fade out (`opacity: 0`) then fade in reordered (`opacity: 1`), `0.3s ease`
- Lazy-load images with `opacity: 0` → `opacity: 1` on load

**PAGINATION / LOAD MORE**
- Ghost CTA: "Load More Projects +"
- On click: new batch fades in with stagger

---

### 9.3 CASE STUDY (SINGLE PROJECT)

**SEO Title:** `[Project Name] — [Category] Case Study | [Agency Name]`
**URL:** `/work/[slug]`

**Sections:**

**HERO**
- Full viewport, image full-bleed + dark overlay
- Top-left: breadcrumb "Work / [Category] / [Project Name]" — `--label`, Stone
- Center: Project title `--display-1`, white
- Below title: Category + Year tags (pill style)
- Bottom-right: "Scroll to explore ↓"
- Parallax: image at `0.6x` scroll speed

**PROJECT META BAND**
- Ash background, 4-column metadata strip:
  - Client / Year / Services / Duration
  - Each: `--label` Stone label above, Off-White value below

**CHALLENGE SECTION**
- 60/40 split: "The Challenge" headline left, problem statement body right
- Quote pull-out (Lora serif, large, Signal Lime quotation mark)

**PROCESS SECTION**
- Numbered step panels: `01, 02, 03, 04`
- Alternating image left / text right for odd steps, reversed for even
- Images: full editorial quality, slight grain

**RESULTS / OUTCOME SECTION**
- Ash background band
- 3–4 metric cards (count-up on scroll)
- Quote from client (Testimonial Card spec)

**NEXT PROJECT TEASER**
- Full-width, image half-bleed
- "Next Project →" with project name in `--display-2`

---

### 9.4 SERVICES PAGE

**SEO Title:** `Services — Brand Identity, Logo & Graphic Design | [Agency Name]`
**URL:** `/services`

**HERO**
- Display headline: "What we do." — overflow style
- Sub: brief positioning statement

**SERVICES DETAIL GRID**
- 6 services, each in its own full-width panel (alternating Ink / Ash background):
  1. Panel: number (huge, Stone, background decoration), service name `--display-2`, description, deliverables list, "Start this project →" CTA
- Deliverables: small pill tags (Ghost style, `--label` size)

**PROCESS SECTION**
- "How We Work" — numbered 4-step process
- Horizontal timeline on desktop, vertical on mobile
- Steps: Discovery → Strategy → Design → Deliver

**PRICING PHILOSOPHY**
- No fixed prices (keeps it flexible for negotiation)
- 3 engagement tiers: Starter / Studio / Enterprise
- Each: name, "from" price or "custom", features list, CTA
- Use Metric cards for feature counts

**FAQ ACCORDION**
- 8–10 common questions
- Accordion spec from Components

---

### 9.5 ABOUT PAGE

**SEO Title:** `About — The Story Behind [Agency Name] | Brand Design Studio`
**URL:** `/about`

**HERO**
- Full-width image (studio/creative workspace) with overlay
- Display headline: "We are [Agency Name]."

**MISSION STATEMENT**
- Full-width Ash band
- Large centred quote in `--display-2`: "Design is not decoration. It is communication."
- Attribution: Founder name, title

**FOUNDER STORY**
- 60/40 split: portrait left (editorial, high-contrast B&W), story right
- Lora serif pull-quote inset in the body text

**VALUES SECTION**
- 3-column grid of values cards:
  - Intent · Craft · Clarity · Boldness · Honesty · Global Thinking
  - Each: icon (minimal SVG), name `--h2`, 2-sentence description

**CREDENTIALS / TIMELINE**
- Vertical timeline — year left, milestone right
- Signal Lime dot on the timeline axis for each milestone

**CLIENTS LOGO STRIP**
- "Trusted by" label
- Monochrome client logos, horizontal scroll on mobile
- Fade-in stagger on scroll entry

**CTA BAND**
- Same as homepage CTA band

---

### 9.6 BLOG INDEX PAGE

**SEO Title:** `Blog — Brand Design, Strategy & Business Insights | [Agency Name]`
**URL:** `/blog`

**HERO**
- Typographic only — "Ideas worth reading." `--display-1` overflow
- Sub: post count, categories

**FEATURED POST**
- Hero card (full-width): large image + overlay + post title `--display-3` + excerpt + "Read →"

**CATEGORY FILTER**
- Same spec as Work page filter bar
- Categories: All · Brand Strategy · Logo Design · Client Acquisition · Design Thinking · Tools & Process

**POSTS GRID**
- 3-column grid, Blog Post Card spec
- Loads 9 per page
- "Load More +" Ghost CTA

**NEWSLETTER SIGNUP INLINE**
- After row 2 of the grid, a full-width band breaks the flow:
  - Ash background, "Get weekly insights." headline
  - Email input + Signal Lime submit CTA
  - "No spam. Unsubscribe anytime."

---

### 9.7 BLOG POST (SINGLE)

**SEO Title:** `[Post Title] | [Agency Name] Blog`
**URL:** `/blog/[slug]`

**HERO**
- Category tag `--label` + Post title `--h1` + Author + Date + Read time
- Featured image below title — full-width, aspect `16/7`, with slight parallax

**CONTENT BODY**
- Max-width: `680px`, centered within the page
- Typography: `--body` (16px/1.7) Off-White on Ink
- H2 in `--h2` weight 400
- H3 in `--h3` weight 500
- Pull-quotes: Lora serif, `--display-3`, Signal Lime quotation mark, full-width breakout from the 680px container
- Code blocks: JetBrains Mono, `#1A1A1A` background, Signal Lime syntax colour for keywords
- Images: full-width breakout, caption in `--label` Stone below

**TABLE OF CONTENTS**
- Sticky sidebar on desktop (appears after hero scroll)
- Highlights current section as user scrolls

**AUTHOR BIO**
- Bottom of post: Ash card, avatar, name, title, 2-line bio, social links

**RELATED POSTS**
- 3-column grid, Blog Post Card spec

---

### 9.8 CONTACT / START A PROJECT PAGE

**SEO Title:** `Start a Project — Contact [Agency Name] | Brand Design Studio`
**URL:** `/contact`

**HERO**
- Display headline: "Let's build something." — overflow
- Sub: response time promise ("We respond within 24 hours")

**CONTACT FORM**
- Full-width Ash band, centered 640px form
- Fields: Name · Company · Email · Project Type (select) · Budget Range (select) · Project Description (textarea) · How did you hear about us?
- Budget options: Under $500 · $500–$2,000 · $2,000–$5,000 · $5,000+ · Let's discuss
- Submit: Signal Lime full-width primary CTA
- Success state: form fades out, success message fades in with checkmark and "We'll be in touch within 24 hours."

**DIRECT CONTACT STRIP**
- 3 columns: Email address · WhatsApp (if used) · Social profiles
- Each has `--label` header + clickable value

**FAQ MINI**
- 4 quick questions (accordion): "How long does a project take?", "Do you work internationally?", "What's your payment structure?", "Can I see more work before deciding?"

---

### 9.9 PRESS / FEATURES PAGE

**SEO Title:** `Press & Features — [Agency Name] in the Media`
**URL:** `/press`

**Purpose:** Boosts E-E-A-T signals for Google. Essential for international credibility.

**HERO**
- "As featured in." — Display headline

**PRESS LOGOS GRID**
- Clean monochrome logo grid
- Each: logo + publication name + article title + link

**AWARDS & RECOGNITION**
- Timeline or card grid: award name, issuer, year, category

**PRESS QUOTES**
- 2–3 pull quotes from press coverage (Lora serif, large)

---

### 9.10 CHANGELOG / STUDIO UPDATES

**SEO Title:** `Changelog — Studio News & Updates | [Agency Name]`
**URL:** `/changelog`

**Purpose:** Fresh content signals for SEO crawlers. Easy to maintain.

**Layout:**
- Vertical timeline, newest at top
- Each entry: date in `--label` Stone + entry type tag (New Project · New Blog · Award · Event) + title + 2-sentence summary
- Type tags: colour-coded (Signal Lime for New Project, Stone outline for others)

---

## 10. SEO Architecture

### URL Structure
```
/ ......................... Home
/work ..................... Projects index
/work/[slug] .............. Individual case study
/services ................. Services overview
/about .................... About
/blog ..................... Blog index
/blog/[slug] .............. Individual post
/contact .................. Contact / Start a Project
/press .................... Press & Features
/changelog ................ Studio Updates
/sitemap.xml .............. Auto-generated
/robots.txt ............... Allow all + sitemap reference
```

### On-Page SEO Priorities

**Title tag formula:**
- Home: `[Agency Name] — Brand Design Studio | Hyderabad & Worldwide`
- Work index: `Work — Brand Identity & Design Projects | [Agency Name]`
- Case study: `[Project Name] — [Category] | [Agency Name]`
- Blog post: `[Post Title] | Brand Design Blog — [Agency Name]`

**H1 rule:** Every page has exactly one H1. It contains the primary keyword naturally. Display-size `--display-1` headlines on the hero are NOT the H1 — the H1 is a visually hidden or sub-visible textual equivalent.

**Schema markup to implement:**
- `Organization` schema on every page (name, URL, logo, contact, social)
- `Person` schema on About page (founder)
- `CreativeWork` / `Article` schema on Blog posts
- `Service` schema on Services page
- `BreadcrumbList` on all inner pages

**Core Web Vitals targets:**
- LCP < 2.5s: Hero image must be `loading="eager" fetchpriority="high"`, all others `loading="lazy"`
- CLS < 0.1: Reserve exact dimensions for all images with width/height attributes
- FID/INP < 200ms: Minimal JS on page load; animate with CSS where possible

**Image SEO:**
- All images: descriptive alt text. Example: `alt="Brand identity system for Summa — logo and colour palette on packaging"`
- File names: `summa-brand-identity-logo-design.jpg` (not `IMG_001.jpg`)
- WebP format, <150KB for above-fold, <300KB for below-fold

**Internal linking:**
- Every case study links to the Services page for that service type
- Every blog post links to 2–3 related case studies
- About page links to Contact
- Services page links to 3 relevant case studies

**Blog SEO keywords to target (start here):**
1. "brand identity design India" — 1,600 searches/mo
2. "logo design agency Hyderabad" — 880/mo
3. "cold email for design clients" — 720/mo
4. "how to pitch brand design" — 590/mo
5. "brand identity for startups" — 2,400/mo
6. "what is a brand style guide" — 3,200/mo
7. "brand design cost India" — 1,100/mo
8. "freelance designer to international clients" — 480/mo

---

## 11. Agent Prompt Guide

### Quick Color Reference
- Page canvas: "Ink (`#0A0A0A`)"
- Primary text (dark surface): "Off-White (`#F0EEE9`)"
- Single accent: "Signal Lime (`#C8FF00`)"
- Raised surface: "Ash (`#1A1A1A`)"
- Secondary text / metadata: "Stone (`#888680`)"
- Divider line: "`rgba(240,238,233,0.10)`"

### Example Component Prompts

1. "Build a primary CTA button with Signal Lime (`#C8FF00`) background, Ink (`#0A0A0A`) text 'Start a Project →', DM Sans 14px weight 500 uppercase with `0.08em` tracking, `2px` border-radius, `14px 28px` padding. Hover brightens to `#DEFF4A`, `scale(1.02)`. Active `scale(0.97)`."

2. "Create a project card on an Ash (`#1A1A1A`) background with `4px` radius, `1px solid rgba(240,238,233,0.08)` border. Full-bleed image on top (16/10 aspect, `grayscale(20%)` default, `grayscale(0%) scale(1.05)` on hover). Below: category `--label` Stone uppercase, project title `--h2` Off-White, year Stone. 'See case →' text appears on hover with Signal Lime underline, sliding up from `translateY(8px) opacity(0)`. Card lifts `translateY(-4px)` with `0 24px 48px rgba(0,0,0,0.4)` shadow on hover."

3. "Design a services accordion item. Border-bottom `1px solid rgba(240,238,233,0.10)`. Header row: number prefix in Stone `--label` ('01'), service name `--h2` weight 400 Off-White, expand `+` icon Signal Lime right-aligned. On expand: `+` rotates 45deg to `×`, content panel slides open via `max-height` with `0.35s cubic-bezier(0.16, 1, 0.3, 1)`, background tints to `rgba(240,238,233,0.03)`."

4. "Build a hero section: full viewport height, Ink canvas. Top-left: `--display-1` headline (overflow clipped at container right edge) — 'Designing bold brands that shape culture.' in Off-White. Sub-copy below in `--body-large` Stone, weight 300. Two CTAs: Signal Lime fill 'See Our Work →' + Ghost outline 'Start a Project →'. Top-right: two floating editorial portrait images, slight rotation `rotate(-2deg)` and `rotate(1.5deg)`. On page load: headline lines clip in sequentially via `clipPath: inset(0 100% 0 0 → 0 0% 0 0)` with 150ms stagger."

5. "Create a stat/metric card — Ash background, `4px` radius, `32px` padding. Large number in `--display-3` Pure White (or Signal Lime for the hero stat). Label below in `--label` Stone uppercase. Number animates count-up via JS on scroll entry over `1400ms` `easeOutQuart`."

6. "Build a testimonial card — Ash background `4px` radius. Giant `"` quotation mark `--display-1` size in Signal Lime at `opacity: 0.3` top-left. Quote body `--body` Off-White weight 300 line-height 1.7. Author row: `40px` avatar circle + name Off-White 500 + title Stone + 5-star rating in Signal Lime."

7. "Create the marquee ticker band: Ink background, `1px solid rgba(240,238,233,0.10)` top and bottom borders, `14px` vertical padding. Text in `--label` Stone uppercase `0.14em` tracking. Items separated by `·`. CSS animation: `translateX(0 → -50%)` 28s linear infinite. `animation-play-state: paused` on hover."

8. "Design the global nav: fixed, full-width, `72px` height, `rgba(10,10,10,0.85)` background with `backdrop-filter: blur(20px) saturate(1.5)`. Left: logo/wordmark Off-White `--h2` weight 500. Center: nav links DM Sans 13px 500 uppercase `0.10em` Stone → Off-White on hover, active item has `2px` Signal Lime underline scaling in from `scaleX(0)`. Right: Signal Lime CTA button 'Start a Project →'. Border-bottom `rgba(240,238,233,0.06)` appears after 60px scroll."

### Iteration Guide

1. Focus on one section at a time
2. Reference exact hex codes and token names from this document
3. The `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` is the universal animation curve — apply it everywhere
4. Check: is Signal Lime the only chromatic colour in this viewport? If two Signal Lime elements compete, remove one
5. Check: are all body text colours Off-White (`#F0EEE9`), not pure white?
6. Check: are all border-radii `4px` on cards/buttons, not `8px` or `50px`?
7. Check: are animations triggered by intersection observer, not on page load?
8. Verify grain overlay is present at `3–5% opacity` on major sections

---

*This document is the single source of truth for all design decisions.
Last updated: April 2025 — Version 1.0*