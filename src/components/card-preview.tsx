import React, { useRef, useMemo, useCallback, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { toPng } from 'html-to-image'
import { IconDownload, IconRectangle, IconRectangleVertical } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { CardStage } from '@/components/card-stage'
import { cn } from '@/lib/utils'
import type { ContactState } from '@/lib/contact-types'
import type { CardStyle, Palette } from '@/lib/card-themes'
import { qrColorsFor } from '@/lib/card-themes'
import { generateVCard } from '@/lib/vcard'

interface CardPreviewProps {
  state: ContactState
  palette: Palette
  cardStyle: CardStyle
  showOrnaments: boolean
}

type CardOrientation = 'horizontal' | 'vertical'

interface DisplayField {
  tag: string
  value: string
}

export function CardPreview({ state, palette, cardStyle, showOrnaments }: CardPreviewProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [orientation, setOrientation] = useState<CardOrientation>('horizontal')

  const displayName = state.useAlias
    ? state.alias
    : [state.prefix, state.firstName, state.middleName, state.lastName, state.suffix]
        .filter(Boolean)
        .join(' ')

  const subtitleParts: Array<string> = []
  if (state.jobTitle.enabled && state.jobTitle.value) subtitleParts.push(state.jobTitle.value)
  if (state.department.enabled && state.department.value) subtitleParts.push(state.department.value)
  if (state.company.enabled && state.company.value) subtitleParts.push(state.company.value)

  const vcardString = useMemo(() => generateVCard(state), [state])

  const enabledFields = useMemo(() => {
    const fields: Array<DisplayField> = []
    for (const p of state.phones)
      if (p.enabled && p.value) fields.push({ tag: p.type, value: p.value })
    for (const e of state.emails)
      if (e.enabled && e.value) fields.push({ tag: e.type, value: e.value })
    for (const w of state.websites)
      if (w.enabled && w.value) fields.push({ tag: w.type, value: w.value })
    for (const a of state.addresses) {
      if (!a.enabled) continue
      const parts = [a.street, a.city, a.state, a.zip, a.country].filter(Boolean)
      if (parts.length > 0) fields.push({ tag: a.type, value: parts.join(', ') })
    }
    for (const s of state.socials)
      if (s.enabled && s.value) fields.push({ tag: s.platform, value: s.value })
    if (state.pronouns.enabled && state.pronouns.value)
      fields.push({ tag: 'Pronouns', value: state.pronouns.value })
    if (state.birthday.enabled && state.birthday.value)
      fields.push({ tag: 'Birthday', value: state.birthday.value })
    if (state.notes.enabled && state.notes.value)
      fields.push({ tag: 'Note', value: state.notes.value })
    if (state.bloodGroup.enabled && state.bloodGroup.value)
      fields.push({ tag: 'Blood', value: state.bloodGroup.value })
    if (state.allergies.enabled && state.allergies.value)
      fields.push({ tag: 'Allergies', value: state.allergies.value })
    if (state.medicalNotes.enabled && state.medicalNotes.value)
      fields.push({ tag: 'Medical', value: state.medicalNotes.value })
    if (state.emergencyContact.enabled && state.emergencyContact.value)
      fields.push({ tag: 'ICE', value: state.emergencyContact.value })
    for (const cf of state.customFields)
      if (cf.enabled && cf.label && cf.value) fields.push({ tag: cf.label, value: cf.value })
    return fields
  }, [state])

  const downloadAsPng = useCallback(async () => {
    if (!cardRef.current) return
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 3, cacheBust: true })
      const link = document.createElement('a')
      link.download = `${displayName || 'contact'}-card.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Failed to export card:', err)
    }
  }, [displayName])

  const hasContent = !!(displayName || enabledFields.length > 0)
  const isHorizontal = orientation === 'horizontal'

  const bodyProps: CardBodyProps = {
    cardStyle,
    isHorizontal,
    displayName,
    subtitleParts,
    enabledFields,
    vcardString,
    palette,
    hasContent,
    showOrnaments,
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="flex items-center justify-between w-full max-w-md">
        <span className="text-2xs text-muted-foreground uppercase tracking-[0.22em]">Preview</span>
        <div className="flex items-center gap-1">
          <Button
            variant={isHorizontal ? 'default' : 'outline'}
            size="icon-xs"
            onClick={() => setOrientation('horizontal')}
            aria-label="Landscape"
            title="Landscape"
          >
            <IconRectangle className="size-3" />
          </Button>
          <Button
            variant={!isHorizontal ? 'default' : 'outline'}
            size="icon-xs"
            onClick={() => setOrientation('vertical')}
            aria-label="Portrait"
            title="Portrait"
          >
            <IconRectangleVertical className="size-3" />
          </Button>
        </div>
      </div>

      <CardStage
        isLight={palette.isLight}
        className={cn('mx-auto w-full', isHorizontal ? 'max-w-135' : 'max-w-85')}
      >
        <div
          ref={cardRef}
          className={cn(
            'relative overflow-hidden w-full',
            isHorizontal ? 'aspect-7/4' : 'aspect-5/8',
          )}
        >
          <CardBody {...bodyProps} />
        </div>
      </CardStage>

      <Button onClick={downloadAsPng} disabled={!hasContent} className="w-full max-w-md">
        <IconDownload className="size-3.5" />
        Download PNG
      </Button>
    </div>
  )
}

interface CardBodyProps {
  cardStyle: CardStyle
  isHorizontal: boolean
  displayName: string
  subtitleParts: Array<string>
  enabledFields: Array<DisplayField>
  vcardString: string
  palette: Palette
  hasContent: boolean
  showOrnaments: boolean
}

function CardBody(props: CardBodyProps) {
  switch (props.cardStyle) {
    case 'editorial':
      return <EditorialStyle {...props} />
    case 'brutalist':
      return <BrutalistStyle {...props} />
    case 'luxe':
      return <LuxeStyle {...props} />
    case 'terminal':
      return <TerminalStyle {...props} />
    case 'mono':
      return <MonoStyle {...props} />
  }
}

/* ===================== Editorial ===================== */

function EditorialStyle({
  isHorizontal,
  displayName,
  subtitleParts,
  enabledFields,
  vcardString,
  palette,
  hasContent,
  showOrnaments,
}: CardBodyProps) {
  const qr = qrColorsFor(palette)
  return (
    <div
      className={cn(
        'relative h-full w-full bg-(--card-bg) text-(color:--card-ink) font-(family-name:--font-serif) @container',
        isHorizontal ? 'flex flex-row gap-6 p-6 sm:p-8' : 'flex flex-col gap-4 p-7 sm:p-8',
      )}
      style={{
        '--card-bg': palette.bg,
        '--card-ink': palette.ink,
        '--card-accent': palette.accent,
        '--card-mute': palette.mute,
      }}
    >
      <div
        className={cn(
          'flex flex-col min-w-0 gap-3',
          isHorizontal && 'flex-1 basis-0 justify-between',
        )}
      >
        <div className="flex flex-col gap-1.5">
          {showOrnaments && (
            <span className="text-2xs uppercase tracking-[0.18em] whitespace-nowrap text-(color:--card-accent) font-(family-name:--font-mono)">
              № 01 — Contact
            </span>
          )}
          <h2
            className={cn(
              'leading-[1.02] tracking-tight font-medium fvs-display',
              isHorizontal ? 'text-[clamp(1.4rem,5cqw,2.4rem)]' : 'text-[clamp(1.8rem,8cqw,3rem)]',
            )}
          >
            {displayName || (
              <span className="italic text-(color:--card-mute) opacity-60">Your Name</span>
            )}
          </h2>
          {subtitleParts.length > 0 && (
            <p className="text-[clamp(0.7rem,1.7cqw,0.9rem)] italic leading-snug text-(color:--card-mute) fvs-caption">
              {subtitleParts.join(' · ')}
            </p>
          )}
          <div className="h-px w-full mt-1 bg-(--card-accent) opacity-40" aria-hidden />
        </div>
        {enabledFields.length > 0 && (
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[clamp(0.65rem,1.6cqw,0.85rem)] leading-snug min-h-0 overflow-hidden">
            {enabledFields.map((f, i) => (
              <React.Fragment key={i}>
                <span className="uppercase tracking-[0.18em] shrink-0 text-(color:--card-accent) font-(family-name:--font-mono) text-[0.78em]">
                  {f.tag}
                </span>
                <span className="break-words min-w-0">{f.value}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      <div
        className={cn(
          'flex shrink-0',
          isHorizontal
            ? 'flex-col items-end justify-between w-[38%]'
            : 'items-end justify-between gap-3',
        )}
      >
        <div className={cn('w-full', !isHorizontal && 'max-w-[55%] ml-auto')}>
          <Qr
            value={vcardString}
            fg={qr.fg}
            bg={qr.bg}
            tile={qr.tile}
            hasContent={hasContent}
            fallbackInk={palette.ink}
          />
        </div>
        {showOrnaments && (
          <span
            className={cn(
              'text-3xs uppercase tracking-[0.24em] mt-2 whitespace-nowrap text-(color:--card-mute) font-(family-name:--font-mono)',
              isHorizontal ? 'text-right' : 'text-left max-w-[42%] leading-tight',
            )}
          >
            ↗ Scan to save
          </span>
        )}
      </div>
    </div>
  )
}

/* ===================== Brutalist ===================== */

function BrutalistStyle({
  isHorizontal,
  displayName,
  subtitleParts,
  enabledFields,
  vcardString,
  palette,
  hasContent,
  showOrnaments,
}: CardBodyProps) {
  return (
    <div
      className={cn(
        'relative h-full w-full bg-(--card-bg) text-(color:--card-ink) font-(family-name:--font-display) @container',
        isHorizontal ? 'flex flex-row gap-4 p-5 sm:p-6' : 'flex flex-col gap-3 p-5 sm:p-6',
      )}
      style={{
        '--card-bg': palette.bg,
        '--card-ink': palette.ink,
        '--card-accent': palette.accent,
        '--card-mute': palette.mute,
      }}
    >
      <div
        className={cn('flex flex-col min-w-0', isHorizontal && 'flex-1 basis-0 justify-between')}
      >
        <div className="flex flex-col gap-1.5">
          {showOrnaments && (
            <div className="flex items-center gap-2">
              <span className="size-2 inline-block shrink-0 bg-(--card-accent)" aria-hidden />
              <span className="text-2xs uppercase tracking-[0.18em] font-bold whitespace-nowrap text-(color:--card-accent)">
                VCARD / 0X01
              </span>
            </div>
          )}
          <h2
            className={cn(
              'uppercase leading-[0.9] tracking-[-0.04em] hyphens-none font-extrabold break-normal',
              isHorizontal ? 'text-[clamp(1.5rem,6cqw,3rem)]' : 'text-[clamp(2rem,9cqw,4rem)]',
            )}
          >
            {displayName || <span className="italic opacity-30">YOUR NAME</span>}
          </h2>
          {subtitleParts.length > 0 && (
            <p className="text-[clamp(0.66rem,1.6cqw,0.85rem)] uppercase tracking-widest leading-tight text-(color:--card-mute) font-semibold">
              {subtitleParts.join(' / ')}
            </p>
          )}
          <div className="h-1 w-full mt-2 bg-(--card-ink)" aria-hidden />
        </div>
        {enabledFields.length > 0 && (
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[clamp(0.66rem,1.6cqw,0.85rem)] leading-snug mt-2 min-h-0 overflow-hidden font-medium">
            {enabledFields.map((f, i) => (
              <React.Fragment key={i}>
                <span className="uppercase shrink-0 tracking-wider whitespace-nowrap text-(color:--card-accent) font-bold">
                  {f.tag} →
                </span>
                <span className="break-words min-w-0">{f.value}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      <div
        className={cn(
          'flex shrink-0',
          isHorizontal ? 'items-end justify-end w-[40%]' : 'items-end justify-between gap-3',
        )}
      >
        <div
          className={cn(
            'flex flex-col items-stretch gap-1',
            isHorizontal ? 'w-full' : 'w-[60%] ml-auto',
          )}
        >
          <div className="h-1 w-full bg-(--card-accent)" aria-hidden />
          <Qr
            value={vcardString}
            fg={palette.bg}
            bg={palette.ink}
            tile
            hasContent={hasContent}
            fallbackInk={palette.ink}
          />
          {showOrnaments && (
            <span className="text-3xs uppercase tracking-[0.18em] text-center text-(color:--card-mute) font-bold">
              SCAN ▮ SAVE
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/* ===================== Luxe ===================== */

function LuxeStyle({
  isHorizontal,
  displayName,
  subtitleParts,
  enabledFields,
  vcardString,
  palette,
  hasContent,
  showOrnaments,
}: CardBodyProps) {
  const qr = qrColorsFor(palette)
  return (
    <div
      className={cn(
        'relative h-full w-full bg-(--card-bg) text-(color:--card-ink) font-(family-name:--font-serif) @container',
        isHorizontal ? 'flex flex-row gap-5 p-7 sm:p-9' : 'flex flex-col gap-4 p-7 sm:p-9',
      )}
      style={{
        '--card-bg': palette.bg,
        '--card-ink': palette.ink,
        '--card-accent': palette.accent,
        '--card-mute': palette.mute,
      }}
    >
      {showOrnaments && (
        <>
          <div
            className="absolute top-0 inset-x-0 h-px bg-(--card-accent) opacity-50"
            aria-hidden
          />
          <div
            className="absolute top-1.5 inset-x-0 h-px bg-(--card-accent) opacity-25"
            aria-hidden
          />
          <div
            className="absolute bottom-0 inset-x-0 h-px bg-(--card-accent) opacity-50"
            aria-hidden
          />
          <div
            className="absolute bottom-1.5 inset-x-0 h-px bg-(--card-accent) opacity-25"
            aria-hidden
          />
        </>
      )}

      <div
        className={cn(
          'flex flex-col gap-2 min-w-0',
          isHorizontal ? 'flex-1 basis-0 justify-center' : '',
        )}
      >
        {showOrnaments && (
          <span className="text-2xs uppercase tracking-[0.4em] whitespace-nowrap text-(color:--card-accent) font-(family-name:--font-mono)">
            ✦ Calling Card
          </span>
        )}
        <h2
          className={cn(
            'italic leading-none tracking-tight font-light fvs-display-flat',
            isHorizontal ? 'text-[clamp(1.4rem,5cqw,2.6rem)]' : 'text-[clamp(1.7rem,8cqw,3.4rem)]',
          )}
        >
          {displayName || <span className="text-(color:--card-mute) opacity-50">Your Name</span>}
        </h2>
        {subtitleParts.length > 0 && (
          <p className="text-[clamp(0.66rem,1.5cqw,0.8rem)] uppercase tracking-[0.28em] leading-snug text-(color:--card-mute) font-(family-name:--font-mono)">
            {subtitleParts.join(' · ')}
          </p>
        )}
        {showOrnaments && (
          <div className="flex items-center gap-2 mt-1">
            <span className="h-px flex-1 bg-(--card-accent) opacity-50" aria-hidden />
            <span className="text-(color:--card-accent)">✦</span>
            <span className="h-px flex-1 bg-(--card-accent) opacity-50" aria-hidden />
          </div>
        )}
        {enabledFields.length > 0 && (
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[clamp(0.65rem,1.5cqw,0.82rem)] leading-snug mt-1 min-h-0 overflow-hidden">
            {enabledFields.map((f, i) => (
              <React.Fragment key={i}>
                <span className="uppercase tracking-[0.28em] shrink-0 text-(color:--card-accent) font-(family-name:--font-mono) text-[0.78em]">
                  {f.tag}
                </span>
                <span className="break-words min-w-0 italic fvs-caption">{f.value}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <div
        className={cn(
          'flex shrink-0',
          isHorizontal
            ? 'flex-col items-center justify-center w-[36%]'
            : 'flex-col items-center mt-auto',
        )}
      >
        <div className={cn('w-full', !isHorizontal && 'max-w-[52%]')}>
          <Qr
            value={vcardString}
            fg={qr.fg}
            bg={qr.bg}
            tile={qr.tile}
            hasContent={hasContent}
            fallbackInk={palette.ink}
          />
        </div>
        {showOrnaments && (
          <span className="text-3xs uppercase tracking-[0.36em] mt-2 whitespace-nowrap text-(color:--card-mute) font-(family-name:--font-mono)">
            ✦ Scan ✦
          </span>
        )}
      </div>
    </div>
  )
}

/* ===================== Terminal ===================== */

function TerminalStyle({
  isHorizontal,
  displayName,
  subtitleParts,
  enabledFields,
  vcardString,
  palette,
  hasContent,
  showOrnaments,
}: CardBodyProps) {
  const TERMINAL_BG = palette.isLight ? 'var(--color-terminal-bg)' : palette.bg
  const accent = palette.accent
  const ink = palette.isLight ? '#f4f4f2' : palette.ink
  const cardInk = palette.isLight ? 'var(--color-terminal-ink)' : palette.ink

  return (
    <div
      className={cn(
        'relative h-full w-full bg-(--card-bg) text-(color:--card-ink) font-(family-name:--font-mono) @container',
        isHorizontal ? 'flex flex-row gap-5 p-5 sm:p-6' : 'flex flex-col gap-3 p-5 sm:p-6',
        showOrnaments && 'pt-7 sm:pt-7',
      )}
      style={{
        '--card-bg': TERMINAL_BG,
        '--card-ink': cardInk,
        '--card-accent': accent,
      }}
    >
      {showOrnaments && (
        <div className="absolute inset-x-0 top-0 h-5 flex items-center px-3 gap-1.5 bg-chrome border-b border-chrome-line">
          <span className="size-2 inline-block bg-chrome-dot" />
          <span className="size-2 inline-block bg-chrome-dot" />
          <span className="size-2 inline-block bg-chrome-dot" />
          <span className="ml-2 text-4xs uppercase tracking-[0.18em] text-chrome-text">
            vcard.sh
          </span>
        </div>
      )}

      <div
        className={cn(
          'flex flex-col min-w-0 gap-2',
          isHorizontal && 'flex-1 basis-0 justify-between',
        )}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2 flex-wrap">
            {showOrnaments && (
              <span className="text-[clamp(0.66rem,1.5cqw,0.82rem)] uppercase tracking-[0.18em] whitespace-nowrap text-(color:--card-accent)">
                ~/contact $
              </span>
            )}
            <span
              className={cn(
                'leading-tight font-semibold',
                isHorizontal
                  ? 'text-[clamp(1rem,3.4cqw,1.6rem)]'
                  : 'text-[clamp(1.25rem,5cqw,2rem)]',
              )}
            >
              {displayName || <span className="italic opacity-30">your_name</span>}
            </span>
            <span
              className="inline-block w-[0.55em] h-[0.85em] translate-y-[0.08em] bg-(--card-accent)"
              aria-hidden
            />
          </div>
          {subtitleParts.length > 0 && (
            <p className="text-[clamp(0.62rem,1.5cqw,0.8rem)] leading-snug text-terminal-sub">
              <span className="text-(color:--card-accent)">// </span>
              {subtitleParts.join(' · ')}
            </p>
          )}
        </div>
        {enabledFields.length > 0 && (
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[clamp(0.62rem,1.5cqw,0.8rem)] leading-snug min-h-0 overflow-hidden">
            {enabledFields.map((f, i) => (
              <React.Fragment key={i}>
                <span className="shrink-0 whitespace-nowrap text-(color:--card-accent)">
                  [{f.tag.toLowerCase()}]
                </span>
                <span className="break-words min-w-0 text-terminal-value">{f.value}</span>
              </React.Fragment>
            ))}
          </div>
        )}
        {showOrnaments && (
          <div className="text-3xs uppercase tracking-[0.18em] mt-auto whitespace-nowrap text-chrome-text">
            <span className="text-(color:--card-accent)">$</span> scan_to_save --vcard
          </div>
        )}
      </div>
      <div
        className={cn(
          'shrink-0 flex',
          isHorizontal ? 'items-end justify-end w-[36%]' : 'items-end justify-end',
        )}
      >
        <div className={cn('w-full', !isHorizontal && 'max-w-[55%]')}>
          <Qr
            value={vcardString}
            fg="#0b0b0c"
            bg="#ffffff"
            tile
            hasContent={hasContent}
            fallbackInk={ink}
          />
        </div>
      </div>
    </div>
  )
}

/* ===================== Mono / Paper ===================== */

function MonoStyle({
  isHorizontal,
  displayName,
  subtitleParts,
  enabledFields,
  vcardString,
  palette,
  hasContent,
  showOrnaments,
}: CardBodyProps) {
  const qr = qrColorsFor(palette)
  return (
    <div
      className={cn(
        'relative h-full w-full bg-(--card-bg) text-(color:--card-ink) font-(family-name:--font-mono) @container',
        isHorizontal ? 'flex flex-row gap-5 p-6 sm:p-7' : 'flex flex-col gap-4 p-7 sm:p-8',
      )}
      style={{
        '--card-bg': palette.bg,
        '--card-ink': palette.ink,
        '--card-accent': palette.accent,
        '--card-mute': palette.mute,
      }}
    >
      {showOrnaments && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-(--card-accent)" aria-hidden />
      )}

      <div
        className={cn(
          'flex flex-col min-w-0 gap-2',
          isHorizontal && 'flex-1 basis-0 justify-between',
        )}
      >
        <div className={cn('flex flex-col gap-1.5', showOrnaments && 'pt-1')}>
          {showOrnaments && (
            <span className="text-2xs uppercase tracking-[0.28em] whitespace-nowrap text-(color:--card-accent)">
              — Contact
            </span>
          )}
          <h2
            className={cn(
              'leading-[1.05] tracking-tight font-semibold',
              isHorizontal
                ? 'text-[clamp(1.1rem,3.6cqw,1.85rem)]'
                : 'text-[clamp(1.4rem,5.5cqw,2.4rem)]',
            )}
          >
            {displayName || <span className="italic text-(color:--card-mute)">Your Name</span>}
          </h2>
          {subtitleParts.length > 0 && (
            <p className="text-[clamp(0.62rem,1.5cqw,0.8rem)] leading-snug text-(color:--card-mute)">
              {subtitleParts.join(' / ')}
            </p>
          )}
          <div className="h-px w-full mt-1 bg-(--card-accent) opacity-30" aria-hidden />
        </div>
        {enabledFields.length > 0 && (
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[clamp(0.62rem,1.5cqw,0.82rem)] leading-snug min-h-0 overflow-hidden">
            {enabledFields.map((f, i) => (
              <React.Fragment key={i}>
                <span className="uppercase tracking-[0.18em] shrink-0 whitespace-nowrap text-(color:--card-accent)">
                  {f.tag}
                </span>
                <span className="break-words min-w-0">{f.value}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <div
        className={cn(
          'shrink-0 flex',
          isHorizontal
            ? 'flex-col items-end justify-between w-[38%]'
            : 'items-end justify-between gap-3',
        )}
      >
        <div className={cn('w-full', !isHorizontal && 'max-w-[55%] ml-auto')}>
          <Qr
            value={vcardString}
            fg={qr.fg}
            bg={qr.bg}
            tile={qr.tile}
            hasContent={hasContent}
            fallbackInk={palette.ink}
          />
        </div>
        {showOrnaments && (
          <span
            className={cn(
              'text-3xs uppercase tracking-[0.22em] mt-2 whitespace-nowrap text-(color:--card-mute)',
              isHorizontal ? 'text-right' : 'text-left max-w-[42%] leading-tight',
            )}
          >
            vCard · <span className="text-(color:--card-accent)">↗ scan</span>
          </span>
        )}
      </div>
    </div>
  )
}

/* ===================== Shared ===================== */

interface QrProps {
  value: string
  fg: string
  bg: string
  hasContent: boolean
  fallbackInk: string
  tile?: boolean
}

function Qr({ value, fg, bg, hasContent, fallbackInk, tile = false }: QrProps) {
  if (!hasContent) {
    return (
      <div
        className="flex items-center justify-center aspect-square w-full border border-(color:--qr-edge)"
        style={{ '--qr-edge': `${fallbackInk}33` }}
      >
        <span
          className="text-3xs uppercase tracking-[0.2em] text-(color:--qr-ink)"
          style={{ '--qr-ink': `${fallbackInk}55` }}
        >
          QR
        </span>
      </div>
    )
  }

  return (
    <div
      className="aspect-square w-full p-(--qr-pad) bg-(--qr-tile-bg)"
      style={{
        '--qr-pad': tile ? '6%' : '0',
        '--qr-tile-bg': tile ? bg : undefined,
      }}
    >
      <div className="w-full h-full">
        <QRCodeSVG
          value={value}
          size={512}
          level="M"
          bgColor={bg}
          fgColor={fg}
          className="block size-full"
        />
      </div>
    </div>
  )
}
