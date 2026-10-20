export type CardStyle =
  | 'editorial'
  | 'brutalist'
  | 'terminal'
  | 'mono'
  | 'luxe'

export interface CardStyleMeta {
  id: CardStyle
  name: string
  blurb: string
}

export const CARD_STYLES: ReadonlyArray<CardStyleMeta> = [
  { id: 'editorial', name: 'Editorial', blurb: 'Serif & rule lines' },
  { id: 'brutalist', name: 'Brutalist', blurb: 'Loud display sans' },
  { id: 'luxe', name: 'Luxe', blurb: 'Fraunces & thin gold' },
  { id: 'terminal', name: 'Terminal', blurb: 'CLI chrome, mono' },
  { id: 'mono', name: 'Mono', blurb: 'Letterpress paper' },
] as const

export interface Palette {
  id: string
  name: string
  bg: string
  ink: string
  accent: string
  mute: string
  isLight: boolean
}

export const PALETTES: ReadonlyArray<Palette> = [
  { id: 'onyx',      name: 'Onyx',      bg: '#0a0a0a', ink: '#f4f4f2', accent: '#cdcdcd', mute: '#7a7a7a', isLight: false },
  { id: 'bone',      name: 'Bone',      bg: '#f3ede2', ink: '#1a1814', accent: '#7a4f25', mute: '#7a7264', isLight: true  },
  { id: 'champagne', name: 'Champagne', bg: '#ebe1cd', ink: '#2b1f10', accent: '#a07a35', mute: '#8c7c5f', isLight: true  },
  { id: 'plum',      name: 'Plum',      bg: '#2a0f24', ink: '#f2e3df', accent: '#d6a4a4', mute: '#9b7a82', isLight: false },
  { id: 'pine',      name: 'Pine',      bg: '#142b22', ink: '#ebead6', accent: '#a8d3a4', mute: '#7e9388', isLight: false },
  { id: 'carbon',    name: 'Carbon',    bg: '#161616', ink: '#f5f3ef', accent: '#ff4d2e', mute: '#7a7a7a', isLight: false },
  { id: 'steel',     name: 'Steel',     bg: '#2c343a', ink: '#e8eef2', accent: '#7fc6e3', mute: '#8a98a1', isLight: false },
] as const

export const DEFAULT_CUSTOM_PALETTE: Palette = {
  id: 'custom',
  name: 'Custom',
  bg: '#1a1a1a',
  ink: '#fafafa',
  accent: '#d4af6e',
  mute: '#888888',
  isLight: false,
}

/**
 * Lightness check — for custom palettes, computes whether bg is "light"
 * to drive isLight automatically. Uses a simple sRGB luminance approximation.
 */
export function isLightHex(hex: string): boolean {
  const h = hex.replace('#', '')
  if (h.length !== 6) return false
  const r = parseInt(h.slice(0, 2), 16) / 255
  const g = parseInt(h.slice(2, 4), 16) / 255
  const b = parseInt(h.slice(4, 6), 16) / 255
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return lum > 0.55
}

export interface QrColors {
  fg: string
  bg: string
  /** Whether the QR sits on a contrasting tile (a small white frame around it). */
  tile: boolean
}

/**
 * Pick scannable QR colors for a given palette.
 *
 * - Light palettes: dark ink on the palette bg (no extra tile).
 * - Dark palettes: dark squares on a white tile, padded — guarantees scanner contrast.
 * - 'invert' mode: high-contrast block (used by brutalist).
 */
export function qrColorsFor(palette: Palette, mode: 'auto' | 'invert' = 'auto'): QrColors {
  if (mode === 'invert') {
    return { fg: palette.bg, bg: palette.ink, tile: false }
  }
  if (palette.isLight) {
    return { fg: palette.ink, bg: palette.bg, tile: false }
  }
  return { fg: palette.bg, bg: '#ffffff', tile: true }
}
