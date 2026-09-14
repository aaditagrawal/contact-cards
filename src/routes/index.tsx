import { classNames } from '@/ui.stylex'
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
    <div className={classNames.index160}>
      <header className={classNames.index161}>
        <div className={classNames.index162}>
          <div className={classNames.cardPreview1}>
            <IconId data-stylex-sized="" className={classNames.index163} />
            <h1 className={classNames.index164}>Contact Cards</h1>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>

      <div className={classNames.index165}>
        <p className={classNames.index166}>
          Build a contact card, toggle the fields you want, and download it as a PNG with an
          embedded QR code. Anyone can scan it with their camera app to save your info.
        </p>
      </div>

      <div className={classNames.index167}>
        <ScrollArea className={classNames.index168}>
          <div className={classNames.index169}>
            <ContactForm state={state} dispatch={dispatch} />
          </div>
        </ScrollArea>
        <div className={classNames.index170}>
          <CardPreview state={state} accentColor={accentColor} />
          <div className={classNames.index171}>
            <span className={classNames.index172}>Card Color</span>
            <div className={classNames.index173}>
              {ACCENT_COLORS.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  title={color.name}
                  onClick={() => setAccentColor(color.value)}
                  data-stylex-sized=""
                  className={`${classNames.index176} ${
                    accentColor === color.value ? classNames.index174 : classNames.index175
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
