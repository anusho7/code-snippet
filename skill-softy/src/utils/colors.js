/**
 * Skill Sync Color Palette & Design Tokens
 * Features: Warm sunny yellow background, energetic orange cards & buttons,
 * dark obsidian accents, clean glassmorphism surfaces.
 */

export const colors = {
  // Backgrounds
  background: '#FFF9E6',        // Soft Warm Creamy Yellow
  backgroundSecondary: '#FFF0C2', // Richer Butter Yellow
  backgroundLight: '#FFFDF7',    // Lightest Cream Tint
  backgroundElevated: '#FFFFFF', // Pure White for Cards

  // Brand Orange Accent (Cards, Primary Buttons, Highlights)
  primary: '#FF6B00',           // Signature Skill Sync Orange
  primaryHover: '#E65800',      // Deep Orange on Hover
  primaryActive: '#CC4700',     // Active Press State
  primaryLight: '#FFF1E5',      // Soft Orange Tint for Badges/Pills
  primaryBorder: '#FFD3B0',     // Subtle Orange Border

  // Secondary & Accents
  accentAmber: '#FFB800',       // Glowing Amber Yellow
  accentYellow: '#FFE853',      // Bright Highlight Yellow
  accentPeach: '#FFA07A',       // Soft Peach
  accentDarkOrange: '#DD4E00',  // Deep Card Background

  // Text Hierarchy
  textPrimary: '#1E1B18',       // Deep Dark Warm Obsidian
  textSecondary: '#5C5449',     // Muted Warm Charcoal
  textTertiary: '#8C8275',      // Light Warm Grey
  textLight: '#FFFFFF',         // Crisp White

  // Card Backgrounds
  cardOrange: '#FF7A00',        // Vibrant Orange Card Background
  cardOrangeGradient: 'linear-gradient(135deg, #FF8A00 0%, #FF5500 100%)',
  cardAmberGradient: 'linear-gradient(135deg, #FFB800 0%, #FF8A00 100%)',
  cardSurface: '#FFFFFF',
  cardSurfaceBorder: '#FFE2B8',

  // Status & Feedback
  success: '#10B981',           // Mint Emerald
  successLight: '#E6F9F1',
  warning: '#F59E0B',           // Amber Orange
  warningLight: '#FEF3C7',
  info: '#3B82F6',              // Azure Blue
  infoLight: '#EFF6FF',
  danger: '#EF4444',            // Crimson Red
  dangerLight: '#FEE2E2',

  // Borders & Dividers
  border: '#F0E2C8',            // Warm Subtle Border
  borderStrong: '#E2CEAA',
  borderHighlight: '#FF7A00',

  // Shadows
  shadowSm: '0 2px 8px rgba(180, 100, 20, 0.08)',
  shadowMd: '0 6px 20px rgba(180, 100, 20, 0.12)',
  shadowLg: '0 12px 32px rgba(180, 100, 20, 0.16)',
  shadowOrange: '0 8px 24px rgba(255, 107, 0, 0.35)',
};

export default colors;
