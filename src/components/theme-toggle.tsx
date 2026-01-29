import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import type { Theme } from '@/lib/use-theme'

export function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: Theme
  setTheme: (t: Theme) => void
}) {
  const next: Theme =
    theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
  const Icon =
    theme === 'light'
      ? IconSun
      : theme === 'dark'
        ? IconMoon
        : IconDeviceDesktop

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(next)}>
      <Icon className="size-4" />
    </Button>
  )
}
