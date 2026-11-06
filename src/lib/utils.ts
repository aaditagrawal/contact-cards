import { twMerge } from 'tailwind-merge'

export function cn(...inputs: Array<string | false | null | undefined>) {
  let classes = ''
  for (const input of inputs) {
    if (input) classes += (classes ? ' ' : '') + input
  }
  return twMerge(classes)
}
