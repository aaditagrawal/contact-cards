import { useState, useEffect, useCallback } from 'react'

export type Theme = 'light' | 'dark' | 'system'

/** Decode the persisted `theme` entry, falling back when storage holds anything else. */
function parseTheme(value: string | null): Theme {
  return value === 'light' || value === 'dark' || value === 'system' ? value : 'system'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (import.meta.env.SSR) return 'system'
    return parseTheme(localStorage.getItem('theme'))
  })

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    localStorage.setItem('theme', t)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    function apply() {
      const isDark = theme === 'dark' || (theme === 'system' && mq.matches)
      root.classList.toggle('dark', isDark)
    }

    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [theme])

  return { theme, setTheme }
}
