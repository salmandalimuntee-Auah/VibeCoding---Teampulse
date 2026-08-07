/**
 * Apple Design System Color Tokens (DESIGN-apple.md)
 */
export const colors = {
  // Brand & Action
  primary: '#0066cc',         // Action Blue (Universal interactive color)
  primaryFocus: '#0071e3',    // Focus Ring Blue
  primaryOnDark: '#2997ff',   // Sky Link Blue (Dark surface link variant)
  
  // Surfaces & Canvases
  canvas: '#ffffff',          // Pure White Canvas
  canvasParchment: '#f5f5f7', // Signature Parchment Canvas
  surfacePearl: '#fafafc',    // Pearl Fill
  surfaceTile1: '#272729',    // Primary Dark Tile Surface
  surfaceTile2: '#2a2a2c',    // Micro-step Light Dark Tile
  surfaceTile3: '#252527',    // Deep Dark Tile
  surfaceBlack: '#000000',    // Nav & Void Black
  surfaceChipTranslucent: 'rgba(210, 210, 215, 0.64)',
  
  // Typography Ink
  ink: '#1d1d1f',             // Primary Text Ink
  body: '#1d1d1f',            // Paragraph Text Ink
  bodyOnDark: '#ffffff',      // Text on Dark Surfaces
  bodyMuted: '#cccccc',      // Muted Copy on Dark Tiles
  inkMuted80: '#333333',     // Muted Text 80%
  inkMuted48: '#7a7a7a',     // Disabled / Fine Print Text
  
  // Borders & Hairlines
  hairline: '#e0e0e0',        // 1px Card Hairline
  dividerSoft: '#f0f0f0',     // Soft Ring Shadow Border
} as const;
