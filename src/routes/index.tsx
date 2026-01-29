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
  { name: 'Black', value: '#0a0a0a' },
  { name: 'Graphite', value: '#2b2b2b' },
  { name: 'Slate', value: '#3b4252' },
  { name: 'Ocean', value: '#1a3a4a' },
  { name: 'Midnight', value: '#1e2a4a' },
  { name: 'Plum', value: '#3b1f4a' },
  { name: 'Burgundy', value: '#4a1525' },
  { name: 'Pine', value: '#1a3a2a' },
  { name: 'Ember', value: '#4a2a1a' },
] as const

function ContactCardPage() {
  const [state, dispatch] = useReducer(contactReducer, initialContactState)
  const { theme, setTheme } = useTheme()
  const [accentColor, setAccentColor] = useState<string>(ACCENT_COLORS[0].value)

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <header className="border-b shrink-0">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconId className="size-4 text-primary" />
            <h1 className="text-xs font-semibold uppercase tracking-wider">
              Contact Cards
            </h1>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl p-4 md:p-6 pb-0 md:pb-0">
        <p className="text-sm text-muted-foreground max-w-xl">
          Build a contact card, toggle the fields you want, and download it as a PNG with an embedded QR code. Anyone can scan it with their camera app to save your info.
        </p>
      </div>

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
