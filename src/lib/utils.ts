import { clsx, type ClassValue } from 'clsx'
import * as stylex from '@stylexjs/stylex'
import { styleEntries } from '@/ui.stylex'

// Preserve the components' className API while composing their StyleX overrides.
// The semantic marker identifies each compiled style; no utility parser is used.
const registered = new Map<string, stylex.StyleXStyles>()
const atomicClasses = new Set<string>()
for (const [marker, style] of styleEntries) {
  registered.set(marker, style)
  for (const name of (stylex.props(style).className ?? '').split(' ')) {
    atomicClasses.add(name)
  }
}

export function cn(...inputs: ClassValue[]) {
  const composed: stylex.StyleXStyles[] = []
  const preserved: string[] = []
  for (const name of clsx(inputs).split(/\s+/)) {
    const style = registered.get(name)
    if (style) composed.push(style)
    if (!atomicClasses.has(name)) preserved.push(name)
  }
  return clsx(stylex.props(...composed).className, preserved)
}
