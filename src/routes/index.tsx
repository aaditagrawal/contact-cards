import { useReducer, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { IconId } from '@tabler/icons-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ContactForm } from '@/components/contact-form'
import { CardPreview } from '@/components/card-preview'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTheme } from '@/lib/use-theme'
import { contactReducer, initialContactState } from '@/lib/contact-reducer'
import { cn } from '@/lib/utils'
import {
  CARD_STYLES,
  DEFAULT_CUSTOM_PALETTE,
  PALETTES,
  isLightHex,
} from '@/lib/card-themes'
import type { CardStyle, Palette } from '@/lib/card-themes'

export const Route = createFileRoute('/')({ component: ContactCardPage })

function ContactCardPage() {
  const [state, dispatch] = useReducer(contactReducer, initialContactState)
  const { theme, setTheme } = useTheme()
  const [cardStyle, setCardStyle] = useState<CardStyle>('editorial')
  const [paletteId, setPaletteId] = useState<string>('bone')
  const [customPalette, setCustomPalette] = useState<Palette>(DEFAULT_CUSTOM_PALETTE)
  const [showOrnaments, setShowOrnaments] = useState<boolean>(true)

  const palette: Palette =
    paletteId === 'custom'
      ? customPalette
      : PALETTES.find((p) => p.id === paletteId) ?? PALETTES[0]

  function updateCustom(field: 'bg' | 'ink' | 'accent', value: string) {
    setCustomPalette((c) => ({
      ...c,
      [field]: value,
      isLight: field === 'bg' ? isLightHex(value) : c.isLight,
    }))
  }

  return (
    <div className="flex min-h-svh flex-col-reverse md:flex-row bg-background">
      {/* ===================== LEFT: form + controls ===================== */}
      <div className="flex flex-col flex-1 min-w-0 md:max-h-svh md:overflow-hidden">
        <header className="border-b shrink-0">
          <div className="px-5 md:px-8 lg:px-10 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex size-6 items-center justify-center bg-foreground text-background">
                <IconId className="size-3.5" />
              </span>
              <h1 className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                Contact Cards
              </h1>
              <span className="hidden sm:inline text-2xs text-muted-foreground tracking-[0.18em] uppercase ml-2 border-l pl-2">
                vcard / qr
              </span>
            </div>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </header>

        <ScrollArea className="flex-1 min-h-0">
          <div className="px-5 md:px-8 lg:px-10 py-6 md:py-8 mx-auto w-full max-w-2xl flex flex-col gap-8">
            {/* Intro */}
            <section className="flex flex-col gap-2">
              <span className="text-2xs text-muted-foreground uppercase tracking-[0.24em]">
                01 / Build your card
              </span>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight">
                A scannable contact card,{' '}
                <span className="text-muted-foreground">designed in seconds.</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Toggle the fields you want, choose a style and palette, then
                download a PNG with an embedded QR code.
              </p>
            </section>

            {/* Style + palette controls */}
            <section className="flex flex-col gap-5 border bg-card/40 p-4 md:p-5">
              <ControlGroup label="Style" hint={CARD_STYLES.find((s) => s.id === cardStyle)?.blurb}>
                <div className="grid grid-cols-2 sm:grid-cols-5 border border-border bg-background overflow-hidden w-full">
                  {CARD_STYLES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setCardStyle(s.id)}
                      data-active={cardStyle === s.id}
                      className={cn(
                        'h-9 text-2xs uppercase tracking-[0.18em] transition-colors',
                        'border-r border-b border-border last:border-r-0 sm:border-b-0',
                        '[&:nth-child(n+4)]:sm:border-b-0',
                        'data-[active=true]:bg-foreground data-[active=true]:text-background',
                        'data-[active=false]:hover:bg-muted',
                      )}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </ControlGroup>

              <ControlGroup label="Palette" hint={palette.name}>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 w-full">
                  {PALETTES.map((p) => (
                    <PaletteSwatch
                      key={p.id}
                      palette={p}
                      active={paletteId === p.id}
                      onSelect={() => setPaletteId(p.id)}
                    />
                  ))}
                  <PaletteSwatch
                    palette={customPalette}
                    active={paletteId === 'custom'}
                    onSelect={() => setPaletteId('custom')}
                    label="Custom"
                    customMarker
                  />
                </div>

                {paletteId === 'custom' && (
                  <div className="grid grid-cols-3 gap-2 w-full mt-1">
                    <CustomColorField
                      label="Background"
                      value={customPalette.bg}
                      onChange={(v) => updateCustom('bg', v)}
                    />
                    <CustomColorField
                      label="Ink"
                      value={customPalette.ink}
                      onChange={(v) => updateCustom('ink', v)}
                    />
                    <CustomColorField
                      label="Accent"
                      value={customPalette.accent}
                      onChange={(v) => updateCustom('accent', v)}
                    />
                  </div>
                )}
              </ControlGroup>

              <ControlGroup label="Ornaments" hint={showOrnaments ? 'On' : 'Off'}>
                <div className="grid grid-cols-2 border border-border bg-background overflow-hidden w-full">
                  <button
                    type="button"
                    onClick={() => setShowOrnaments(true)}
                    data-active={showOrnaments}
                    className={cn(
                      'h-9 text-2xs uppercase tracking-[0.18em] transition-colors',
                      'border-r border-border',
                      'data-[active=true]:bg-foreground data-[active=true]:text-background',
                      'data-[active=false]:hover:bg-muted',
                    )}
                  >
                    Show
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowOrnaments(false)}
                    data-active={!showOrnaments}
                    className={cn(
                      'h-9 text-2xs uppercase tracking-[0.18em] transition-colors',
                      'data-[active=true]:bg-foreground data-[active=true]:text-background',
                      'data-[active=false]:hover:bg-muted',
                    )}
                  >
                    Hide
                  </button>
                </div>
                <span className="text-2xs text-muted-foreground/80 leading-snug">
                  Hides decorative labels like “Calling Card”, “VCARD / 0X01”, scan captions and the terminal chrome bar.
                </span>
              </ControlGroup>
            </section>

            {/* Form */}
            <ContactForm state={state} dispatch={dispatch} />
          </div>
        </ScrollArea>
      </div>

      {/* ===================== RIGHT: 3D preview stage ===================== */}
      <div
        className={cn(
          'relative flex-1 min-h-[60svh] md:min-h-0 md:max-h-svh',
          'flex items-center justify-center px-5 md:px-10 py-10 md:py-12',
          'overflow-hidden border-b md:border-b-0 md:border-l bg-muted/30 stage-glow',
        )}
      >
        <StageBackdrop />
        <div className="relative z-10 w-full max-w-150">
          <CardPreview state={state} palette={palette} cardStyle={cardStyle} showOrnaments={showOrnaments} />
        </div>
      </div>
    </div>
  )
}

/* ----------------------- helpers ----------------------- */

function StageBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-35 dark:opacity-18 stage-dots"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/70"
        aria-hidden
      />
    </>
  )
}

function ControlGroup({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-baseline justify-between">
        <span className="text-2xs text-muted-foreground uppercase tracking-[0.24em]">
          {label}
        </span>
        {hint && (
          <span className="text-2xs text-muted-foreground/70 tracking-wide">
            {hint}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

function PaletteSwatch({
  palette,
  active,
  onSelect,
  label,
  customMarker = false,
}: {
  palette: Palette
  active: boolean
  onSelect: () => void
  label?: string
  customMarker?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      title={label ?? palette.name}
      aria-pressed={active}
      aria-label={label ?? palette.name}
      className={cn(
        'group relative aspect-5/3 flex items-center justify-center transition-all',
        'border outline-none',
        active
          ? 'border-foreground ring-2 ring-foreground ring-offset-2 ring-offset-background'
          : 'border-border hover:border-foreground/50',
      )}
      style={{
        '--swatch-bg': palette.bg,
        '--swatch-ink': palette.ink,
        '--swatch-accent': palette.accent,
        '--swatch-mute': palette.mute,
      }}
    >
      <span className="text-[13px] leading-none text-(color:--swatch-ink) font-(family-name:--font-serif) italic font-medium">
        Aa
      </span>
      <span
        className="absolute bottom-1.5 right-1.5 size-1.5 bg-(--swatch-accent)"
        aria-hidden
      />
      {customMarker && (
        <span
          className="absolute top-1 left-1 text-4xs uppercase tracking-[0.15em] text-(color:--swatch-mute)"
        >
          ✎
        </span>
      )}
    </button>
  )
}

function CustomColorField({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <label className="flex flex-col gap-1.5 group cursor-pointer">
      <span className="text-3xs text-muted-foreground uppercase tracking-[0.2em]">
        {label}
      </span>
      <span className="relative flex items-center gap-2 border bg-background p-1.5 group-hover:border-foreground/50 transition-colors">
        <span className="relative size-5 shrink-0 border border-border overflow-hidden">
          <span
            className="absolute inset-0 bg-(--swatch-value)"
            style={{ '--swatch-value': value }}
            aria-hidden
          />
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </span>
        <span className="text-2xs font-mono uppercase tracking-wider truncate">
          {value}
        </span>
      </span>
    </label>
  )
}
