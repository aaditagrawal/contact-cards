import { useReducer, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { IconId } from '@tabler/icons-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ContactForm } from '@/components/contact-form'
import { CardPreview } from '@/components/card-preview'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTheme } from '@/lib/use-theme'
import { contactReducer, initialContactState } from '@/lib/contact-reducer'

export const Route = createFileRoute('/')({ component: ContactCardPage })

const ACCENT_COLORS = [
  { name: 'Black', value: '#000000' },
  { name: 'Charcoal', value: '#1c1c1e' },
  { name: 'Slate', value: '#334155' },
  { name: 'Navy', value: '#1e3a5f' },
  { name: 'Indigo', value: '#312e81' },
  { name: 'Violet', value: '#4c1d95' },
  { name: 'Wine', value: '#6b1839' },
  { name: 'Forest', value: '#14532d' },
  { name: 'Espresso', value: '#3c1a0e' },
] as const

function ContactCardPage() {
  const [state, dispatch] = useReducer(contactReducer, initialContactState)
  const { theme, setTheme } = useTheme()
  const [accentColor, setAccentColor] = useState<string>(ACCENT_COLORS[0].value)

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <header className="border-b px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <IconId className="size-4 text-primary" />
          <h1 className="text-xs font-semibold uppercase tracking-wider">
            Contact Cards
          </h1>
        </div>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <div className="mx-auto w-full max-w-5xl flex-1 grid md:grid-cols-2 gap-6 p-4 md:p-6">
        <ScrollArea className="md:h-[calc(100vh-4rem)]">
          <div className="pr-4">
            <ContactForm state={state} dispatch={dispatch} />
          </div>
        </ScrollArea>
        <div className="md:sticky md:top-6 md:self-start flex flex-col gap-4">
          <CardPreview state={state} accentColor={accentColor} />
          <div className="flex flex-col gap-2">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
              Card Color
            </span>
            <div className="flex items-center gap-1.5">
              {ACCENT_COLORS.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  title={color.name}
                  onClick={() => setAccentColor(color.value)}
                  className={`size-5 border transition-all ${
                    accentColor === color.value
                      ? 'ring-2 ring-primary ring-offset-1 ring-offset-background scale-110'
                      : 'border-border hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
