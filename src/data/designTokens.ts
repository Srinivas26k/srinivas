// src/data/designTokens.ts
// Dark Ink Design System tokens
// Use these in components for consistent styling

export const colors = {
  // Backgrounds & Surfaces
  void: '#0a0a0c',        // deepest black
  ink: '#141417',         // charcoal
  ash: '#2a2a30',         // dark grey
  smoke: '#6b6b78',       // mid grey
  mist: '#c8c4cf',        // light grey
  paper: '#f0ece8',       // warm off-white

  // Accents
  violet: '#7c6fa8',      // muted indigo (primary)
  brush: '#4a3f6b',       // deep indigo (hover)
  gold: '#c4a882',        // warm gold (highlight)
};

export const typography = {
  // Font Families
  display: "ui-serif, system-ui, -apple-system, 'Segoe UI', serif",
  heading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
  body: "ui-monospace, 'Menlo', 'Monaco', 'Courier New', monospace",
  mono: "ui-monospace, 'Menlo', monospace",

  // Sizes
  sizes: {
    display: 'clamp(4rem, 12vw, 14rem)',
    h1: 'clamp(2.5rem, 6vw, 4rem)',
    h2: 'clamp(1.875rem, 4vw, 3rem)',
    h3: 'clamp(1.5rem, 3vw, 2.25rem)',
    body: '1rem',
    small: '0.875rem',
    label: '0.65rem',
  },

  // Line Heights
  lineHeights: {
    display: 1.1,
    heading: 1.2,
    body: 1.6,
    small: 1.5,
    label: 1.4,
  },

  // Letter Spacing
  letterSpacing: {
    display: '-0.02em',
    heading: '0.02em',
    label: '0.08em',
  },

  // Font Weights
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
  '4xl': '8rem',
};

export const motion = {
  durations: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
  },

  easing: {
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Semantic color aliases for components
export const semanticColors = {
  background: colors.void,
  surface: colors.ink,
  border: colors.ash,
  textSecondary: colors.smoke,
  text: colors.mist,
  textHeading: colors.paper,
  accent: colors.violet,
  accentDark: colors.brush,
  accentGold: colors.gold,
};
