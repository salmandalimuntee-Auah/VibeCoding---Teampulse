/**
 * Apple Design System Spacing, Radius, and Shadow Tokens
 */
export const spacing = {
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '17px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  section: '80px',
} as const;

export const rounded = {
  none: '0px',
  xs: '5px',
  sm: '8px',
  md: '11px',
  lg: '18px',
  pill: '9999px',
  full: '9999px',
} as const;

export const shadows = {
  // Single system shadow reserved strictly for product renders / photographic cards / charts
  product: '0px 5px 30px 0px rgba(0, 0, 0, 0.22)',
} as const;
