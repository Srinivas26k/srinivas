# Portfolio Redesign — Design Spec
**Date:** 2026-04-19
**Project:** srinivas-ai (Astro portfolio)
**Status:** Approved

---

## Overview

A complete redesign of the existing carousel-based Astro portfolio into a cinematic, multi-page experience inspired by StringTune's scroll-driven visual language, fused with a Japanese Dark Ink aesthetic (sumi-e, washi, ink-wash). The site serves four distinct audiences through a single coherent identity:

| Audience | What they want |
|---|---|
| Clients | Results + proof |
| Professors / Academics | Depth + thinking |
| Professionals / Executives | Clarity + impact |
| Network / Friends | Story + personality |

**Identity:** Srinivas Nampalli — Researcher · Builder · Explorer. Interdisciplinary thinker with a draw toward Japanese and European nature, culture, and aesthetics.

---

## Architecture

### Routing (Astro multi-page — replaces carousel)

```
/               → Home (cinematic scroll narrative)
/about          → Story + personality
/research       → Depth + thinking
/projects       → Results + proof
/projects/[slug]
/writing
/writing/[slug]
/services       → Clarity + impact
/contact        → Connect
```

### Tech Stack

| Layer | Tool | Purpose |
|---|---|---|
| Framework | Astro (existing) | Static multi-page routing |
| Scroll animation | GSAP + ScrollTrigger | Pinned scroll acts, parallax, text choreography |
| 3D canvas | Three.js | Ink-drop opening canvas, particle effects |
| Page transitions | Framer Motion (existing) | Entry/exit animations between pages |
| Styling | CSS custom properties | Dark Ink design system |

**Scope rule:** GSAP + Three.js run only on the home page. All inner pages are standard document flow — no heavy animation libraries loaded on sub-pages.

---

## Design System — Dark Ink

### Color Palette

```css
--c-void: #0a0a0c;          /* deepest black — backgrounds */
--c-ink: #141417;           /* charcoal — card surfaces */
--c-ash: #2a2a30;           /* dark grey — borders, dividers */
--c-smoke: #6b6b78;         /* mid grey — secondary text */
--c-mist: #c8c4cf;          /* light grey — body text */
--c-paper: #f0ece8;         /* warm off-white — headlines */
--c-violet: #7c6fa8;        /* muted indigo — accent primary */
--c-brush: #4a3f6b;         /* deep indigo — hover states */
--c-gold: #c4a882;          /* warm gold — highlight accent */
```

### Typography

- **Display / Hero:** Custom or system serif (large, tracked, ink-brushed feel) — `clamp(4rem, 12vw, 14rem)`
- **Headings:** Sans-serif, light weight, generous letter-spacing
- **Body:** Mono or humanist sans, 1rem, relaxed line-height
- **Accent labels:** Uppercase, 0.65rem, wide tracking (`--c-violet`)

### Motion Principles

- Ink dissolves in, never snaps
- Text reveals are character-by-character (GSAP SplitText style)
- Scroll progress drives opacity + translate — no timers
- Canvas elements respond to cursor position (subtle disturbance)
- Page transitions: ink wash sweep left→right (Framer Motion)

---

## Home Page — 5-Act Scroll Narrative (~800vh total)

### Act 0 — The Canvas *(0–100vh, pinned)*

**Visual:** Full-screen Three.js scene. Black void. Ink drops fall in slow motion, hit an invisible surface, ripple outward, dissolve. Cursor movement creates subtle ink disturbance (mouse position mapped to drop origin).

**Text:** After 2s, a philosophical question fades in character by character, centered:

> *"What emerges when curiosity has no boundaries?"*

**Scroll cue:** A thin vertical line pulses at bottom-center.

**Implementation notes:**
- Three.js `PlaneGeometry` with custom ink shader (ripple displacement)
- Mouse position → uniform passed to shader
- Question text: GSAP `stagger` on individual `<span>` characters
- No navigation visible in this act

---

### Act 1 — The Dissolution *(100–250vh, scroll-driven)*

**Visual:** As user scrolls, the question dissolves word by word (opacity + scale → 0, slight upward translate). Ink particles scatter upward from the words (Three.js particle burst). Background shifts from `--c-void` toward `--c-ink`. A single horizontal ink-stroke line draws itself across the full viewport width (SVG `stroke-dashoffset` animated via ScrollTrigger).

**No new text.** Pure visual transition.

**Implementation notes:**
- `ScrollTrigger.scrub(1)` for smooth scroll-tied motion
- Ink particles: Three.js `Points` with velocity + fade shader
- SVG line: `stroke-dashoffset` from 100% → 0% tied to scroll progress

---

### Act 2 — The Identity *(250–400vh, pinned)*

**Visual:** **SRINIVAS** appears in massive display typography — letters brush in from left, ink-stroke style (clip-path reveal, left to right per character). Below the name, after a beat: `Researcher · Builder · Explorer` fades in at small scale. Below that: a soft washi-paper ink-wash texture bleeds through the background.

**Navigation:** Six nav links appear at bottom of viewport, fading in last: `About · Research · Projects · Services · Contact · →`

**Scroll within pin:** First half of pin = name draws in. Second half = subtext + nav fades in.

**Implementation notes:**
- `clip-path: inset(0 100% 0 0)` → `inset(0 0% 0 0)` per character, staggered
- GSAP `timeline` scrubbed to ScrollTrigger progress
- Washi texture: CSS `background-image` with `mix-blend-mode: overlay`

---

### Act 3 — The Mind *(400–550vh)*

**Visual:** Bento masonry grid of 8 cards slides up into view. Each card represents an intellectual territory:

| Card | Territory | Audience signal |
|---|---|---|
| 1 | AI Systems & Reasoning | Clients, Academics |
| 2 | Interdisciplinary Methods | Academics |
| 3 | Japanese Aesthetics & Design | Friends, Network |
| 4 | European Philosophy & Nature | Friends, Network |
| 5 | Human-AI Interaction | Executives, Clients |
| 6 | Research in Progress | Academics |
| 7 | Open Questions | Academics, Network |
| 8 | Tools & Builds | Clients, Professionals |

**Card design:** Dark ink-wash background, title in display type, 2-line description, subtle hover lift + parallax. Cards enter with staggered `translate(0, 60px) → (0, 0)` tied to scroll.

**Implementation notes:**
- CSS Grid masonry (or manual grid with `grid-template-areas`)
- GSAP `ScrollTrigger` batch for staggered card entry
- Hover: `transform: translateY(-8px)` + `box-shadow` shift

---

### Act 4 — The Hands *(550–700vh)*

**Visual:** Horizontal scroll strip — 3 featured projects revealed as user scrolls vertically (GSAP horizontal scroll). Each project panel:

- **Title** (large, display type)
- **One-line outcome** (e.g., "Reduced inference latency by 40%")
- **Category tag** (AI / Research / Web / Tool)
- **Hover:** project thumbnail bleeds in behind text at low opacity

**At end of strip:** A link — `→ See all projects` — fades in and links to `/projects`.

**Implementation notes:**
- `ScrollTrigger` with `pin: true` + `horizontal: true` container
- 3 panels × `100vw` = `300vw` horizontal track
- Thumbnail: `position: absolute`, `opacity: 0 → 0.15` on hover

---

### Act 5 — The Path *(700–800vh)*

**Visual:** Footer act. Ink stroke border draws in at top. Large display text:

> *"Let's build something that thinks."*

Below: email address, social links (GitHub, LinkedIn, Google Scholar), nav links repeated. Page fades to near-`--c-void`.

**Right side:** Current date/location line in mono type — subtle, human.

---

## Inner Pages

### `/about` — Story + Personality

**Layout:** Two-column on desktop, single-column mobile.
- **Left:** Large portrait image or ink-illustrated avatar. Below it: a short pull-quote in display type.
- **Right:** Flowing narrative — origin story, what drives the work, how Japanese/European influences shape thinking, where disciplines intersect.
- **Bottom:** Personal philosophy statement in large centered type.
- **Tone:** Warm, first-person, reflective. No bullet points.

**Audience:** Network, friends, curious visitors.

---

### `/research` — Depth + Thinking

**Layout:** Typography-first, generous whitespace. Clean academic register.

**Sections:**
1. **Research Areas** — 3–5 areas with title + 100-word abstract each
2. **Publications / Papers** — list format with links (DOI, PDF, arXiv)
3. **Ongoing Questions** — 5–7 open questions framed as genuine inquiry
4. **Methodology** — short essay on how you approach interdisciplinary work

**No animations beyond subtle fade-in on scroll.** Respect the academic reader's attention.

**Audience:** Professors, academics, researchers.

---

### `/projects` — Results + Proof

**Layout:** Full-width project cards, filterable by tag.

**Each card:**
- Title
- Problem statement (1 sentence)
- Outcome / metric (1 sentence, bold)
- Tech stack tags
- Screenshot or demo embed
- Link (GitHub / Live / Case study)

**Filter tags:** AI · Research · Web · Tool · Open Source

**Audience:** Clients, employers, collaborators.

---

### `/services` — Clarity + Impact

**Layout:** Three bold service cards in a row.

| Service | Description |
|---|---|
| Research Consulting | Deep domain research, literature synthesis, insight reports |
| AI Development | Custom ML pipelines, LLM integration, AI-powered products |
| Interdisciplinary Advisory | Connecting dots across fields for teams stuck in silos |

**Each card:** What it is → Who it's for → What you walk away with → CTA button.

**Tone:** Direct, confident, no filler. One CTA per card.

**Audience:** Professionals, executives, startup founders.

---

### `/contact` — Connect

**Layout:** Minimal. Full-height page.
- **Left:** Large ambient ink texture background
- **Right:** Form — Name, Email, "What are you reaching out about?" (selector: Collaboration / Research / Hire / Just saying hi), Message, Submit
- **Below form:** Response time note, links to social/GitHub/Scholar
- **No animations.** Fast, functional, respectful of user intent.

---

## Shared Elements (All Pages)

### Header
- Slim, fixed, `backdrop-filter: blur`
- Left: `SN` monogram mark (ink-brushed SVG)
- Right: nav links — About · Research · Projects · Services · Contact
- On home page: hidden during Act 0–1, fades in during Act 2

### Page Transitions
- Framer Motion: ink wash sweep `left → right` on exit, `right → left` on entry
- Duration: 0.5s, `ease-in-out`

### Footer (inner pages only)
- Minimal: copyright, nav links, social icons
- Home page has its own Act 5 footer

---

## File Structure Changes

```
src/
  pages/
    index.astro          ← home (rewritten)
    about.astro          ← new
    research.astro       ← new
    projects.astro       ← new
    services.astro       ← new
    contact.astro        ← new
  components/
    home/
      InkCanvas.astro    ← Three.js ink drop scene
      ActQuestion.astro  ← Act 0 question text
      ActIdentity.astro  ← Act 2 name reveal
      ActMind.astro      ← Act 3 bento grid
      ActHands.astro     ← Act 4 horizontal projects
      ActPath.astro      ← Act 5 footer
    shared/
      Header.astro       ← redesigned header
      PageTransition.astro
  styles/
    global.css           ← Dark Ink design system (rewritten)
    home.css             ← home-specific scroll styles
  data/
    projects.ts          ← project data
    research.ts          ← research areas + publications
    services.ts          ← services data
```

---

## Out of Scope

- Blog / writing feed (can be added later as `/writing`)
- Analytics beyond existing setup
- Dark/light mode toggle (Dark Ink only)
- Mobile-specific Three.js canvas (canvas falls back to static ink image on mobile)

---

## Success Criteria

- [ ] Home page loads < 3s on 4G (Three.js canvas lazy-initialized after first paint)
- [ ] All 6 pages render correctly with Astro static build
- [ ] Scroll narrative feels fluid at 60fps on desktop
- [ ] Each audience finds their relevant content within 2 scroll actions from landing
- [ ] Mobile degrades gracefully (canvas → static, horizontal scroll → vertical stack)
