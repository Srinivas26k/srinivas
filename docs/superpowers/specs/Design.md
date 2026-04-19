# design.md

## Metadata

* **Name:** StringTune-Inspired Motion System
* **Version:** 1.0.0
* **Style:** Cinematic Scroll + Modular Motion
* **Philosophy:** “Animate with elegance, not overhead” ([StringTune][1])

---

## 1. Design Principles

### 1.1 Motion is the Interface

* Motion is not decoration — it **defines structure**
* Scroll is the **primary interaction layer**
* Every element responds to **time (scroll progress)**

### 1.2 Minimal Surface, Maximum Expression

* Dark canvas
* Sparse UI
* Focus on **behavior over visuals**

### 1.3 Attribute-Driven Design

* Behavior is defined **directly in markup**
* No heavy JS abstraction
* Example philosophy:

```html
<div string="progress" string-parallax="0.3"></div>
```

This reflects the system’s **“no learning curve, just signal”** approach ([StringTune][1])

---

## 2. Layout System

### 2.1 Structure: Scroll Narrative

Instead of pages → use **continuous flow**

```txt
Intro → Emergence → Interaction → Depth → Resolution
```

* No hard section boundaries
* Smooth transitions between states
* Each section behaves like a **scene**

---

### 2.2 Grid

* Base: 12-column grid
* Max Width: `1200–1440px`
* Vertical rhythm prioritized over horizontal density

---

### 2.3 Spacing Scale

```txt
xs: 4px
sm: 8px
md: 16px
lg: 32px
xl: 64px
2xl: 120px
```

Spacing represents **timing between visual beats**

---

## 3. Typography

### 3.1 Style

* Clean, modern sans-serif
* Text acts as **anchor against motion**

### 3.2 Scale

```txt
Display: 72–96px
H1: 48px
H2: 32px
H3: 24px
Body: 16–18px
Caption: 12–14px
```

---

### 3.3 Behavior

* Fade + translate on scroll
* Split text animation (character/word level)
* Kerning preserved during splitting (important detail)

---

## 4. Color System

### 4.1 Core Palette

```txt
Background: #000000
Foreground: #FFFFFF
Muted: #888888
Accent: #EAEAEA (soft highlight)
```

### 4.2 Philosophy

* Color is **secondary to motion**
* Contrast is used to **guide focus**

---

## 5. Motion System (Core)

This is the **heart of the design**

### 5.1 Motion Types

| Type     | Description                 |
| -------- | --------------------------- |
| Progress | Scroll-driven interpolation |
| Parallax | Depth illusion via offset   |
| Lerp     | Smooth interpolation        |
| Glide    | Momentum-based drift        |
| Magnetic | Cursor attraction           |
| Cursor   | Reactive pointer system     |

These align with the system’s **wide range of effects across scroll, hover, and visibility** ([StringTune][1])

---

### 5.2 Motion Principles

* Smooth (lerp-based)
* Continuous (no abrupt jumps)
* Physics-inspired (tension, friction)

---

### 5.3 Easing

Default:

```txt
cubic-bezier(0.4, 0, 0.2, 1)
```

Custom easing allowed via attributes.

---

### 5.4 Scroll Engine

* Native scroll enhanced with smoothing ([StringTune][1])
* Velocity-based responsiveness
* No layout shifts (performance-first)

---

## 6. Interaction System

### 6.1 Scroll

* Primary driver of:

  * opacity
  * transform
  * scale
  * depth

---

### 6.2 Cursor

* Tracks position
* Can influence elements:

  * hover distortion
  * magnetic pull
  * spotlight effects

---

### 6.3 Hover

* Subtle, never aggressive
* Used to:

  * reveal detail
  * increase depth

---

## 7. Component Architecture

### 7.1 Modular System

* Every component is:

  * independent
  * composable
  * reusable

Reflects **“build small, scale sharp”** philosophy ([StringTune][1])

---

### 7.2 Example Components

#### Hero

* Large typography
* slow parallax
* delayed reveal

#### Text Blocks

* split animation
* progressive opacity

#### Media Blocks

* parallax + scale
* masked reveal

#### CTA

* magnetic interaction
* subtle glow

---

## 8. Performance Strategy

### 8.1 Core Goals

* Low memory usage
* Zero layout shift
* GPU-accelerated transforms

Matches system goal of **fast and lightweight execution** ([StringTune][1])

---

### 8.2 Techniques

* CSS transforms over layout properties
* Lazy activation (in-view triggers)
* Attribute-based activation

---

## 9. Animation Timing System

### 9.1 Scroll-Based Timing

* 0 → 1 progress value
* Mapped to CSS variables

Example:

```css
transform: translateY(calc(var(--progress) * 100px));
```

---

### 9.2 Offset System

```txt
string-offset-top
string-offset-bottom
```

Controls when animation begins/ends relative to viewport.

---

## 10. Accessibility

* Respect reduced motion preferences
* Ensure readable contrast
* Avoid motion-only meaning

---

## 11. Developer Experience

### 11.1 Philosophy

* “No ceremony. No bloat.” ([StringTune][1])
* Works directly in HTML

---

### 11.2 Workflow

1. Add attributes in markup
2. Import minimal modules
3. Initialize once

---

## 12. Do / Don’t Guidelines

### Do

* Use motion to explain hierarchy
* Keep interactions subtle
* Maintain rhythm and pacing

### Don’t

* Overuse effects
* Break scroll continuity
* Add unnecessary UI clutter

---

## 13. Signature Feel

The final experience should feel like:

* A **musical composition**
* A **continuous flow**
* A **responsive system, not static pages**

> “To master the string… is to master the code.” ([StringTune][1])