/**
 * Apple Design System Typography Tokens (DESIGN-apple.md)
 */
export const typography = {
  fontFamilies: {
    display: 'SF Pro Display, Inter, system-ui, -apple-system, sans-serif',
    body: 'SF Pro Text, Inter, system-ui, -apple-system, sans-serif',
  },
  styles: {
    heroDisplay: { fontSize: '56px', fontWeight: 600, lineHeight: 1.07, letterSpacing: '-0.28px' },
    displayLg: { fontSize: '40px', fontWeight: 600, lineHeight: 1.10, letterSpacing: '0px' },
    displayMd: { fontSize: '34px', fontWeight: 600, lineHeight: 1.47, letterSpacing: '-0.374px' },
    lead: { fontSize: '28px', fontWeight: 400, lineHeight: 1.14, letterSpacing: '0.196px' },
    leadAiry: { fontSize: '24px', fontWeight: 300, lineHeight: 1.5, letterSpacing: '0px' },
    tagline: { fontSize: '21px', fontWeight: 600, lineHeight: 1.19, letterSpacing: '0.231px' },
    bodyStrong: { fontSize: '17px', fontWeight: 600, lineHeight: 1.24, letterSpacing: '-0.374px' },
    body: { fontSize: '17px', fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px' },
    caption: { fontSize: '14px', fontWeight: 400, lineHeight: 1.43, letterSpacing: '-0.224px' },
    captionStrong: { fontSize: '14px', fontWeight: 600, lineHeight: 1.29, letterSpacing: '-0.224px' },
    finePrint: { fontSize: '12px', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.12px' },
    navLink: { fontSize: '12px', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.12px' },
  },
} as const;
