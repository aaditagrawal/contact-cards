import React, { useRef, useMemo, useCallback, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { toPng } from 'html-to-image'
import { IconDownload, IconRectangle, IconRectangleVertical } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import type { ContactState } from '@/lib/contact-types'
import { generateVCard } from '@/lib/vcard'

interface CardPreviewProps {
  state: ContactState
  accentColor: string
}

interface DisplayField {
  tag: string
  value: string
}

type CardOrientation = 'horizontal' | 'vertical'

export function CardPreview({ state, accentColor }: CardPreviewProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [orientation, setOrientation] = useState<CardOrientation>('horizontal')

  const displayName = state.useAlias
    ? state.alias
    : [state.prefix, state.firstName, state.middleName, state.lastName, state.suffix]
        .filter(Boolean)
        .join(' ')

  // Subtitle: Title, Dept, Company — in that hierarchy
  const subtitleParts: string[] = []
  if (state.jobTitle.enabled && state.jobTitle.value) subtitleParts.push(state.jobTitle.value)
  if (state.department.enabled && state.department.value) subtitleParts.push(state.department.value)
  if (state.company.enabled && state.company.value) subtitleParts.push(state.company.value)

  const vcardString = useMemo(() => generateVCard(state), [state])

  const enabledFields = useMemo(() => {
    const fields: DisplayField[] = []

    for (const p of state.phones) {
      if (p.enabled && p.value) fields.push({ tag: p.type, value: p.value })
    }
    for (const e of state.emails) {
      if (e.enabled && e.value) fields.push({ tag: e.type, value: e.value })
    }
    for (const w of state.websites) {
      if (w.enabled && w.value) fields.push({ tag: w.type, value: w.value })
    }
    for (const a of state.addresses) {
      if (!a.enabled) continue
      const parts = [a.street, a.city, a.state, a.zip, a.country].filter(Boolean)
      if (parts.length > 0) fields.push({ tag: a.type, value: parts.join(', ') })
    }
    for (const s of state.socials) {
      if (s.enabled && s.value) fields.push({ tag: s.platform, value: s.value })
    }
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
    for (const cf of state.customFields) {
      if (cf.enabled && cf.label && cf.value) fields.push({ tag: cf.label, value: cf.value })
    }

    return fields
  }, [state])

  const downloadAsPng = useCallback(async () => {
    if (!cardRef.current) return
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 3,
      })
      const link = document.createElement('a')
      link.download = `${displayName || 'contact'}-card.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Failed to export card:', err)
    }
  }, [displayName])

  const hasContent = displayName || enabledFields.length > 0
  const isHorizontal = orientation === 'horizontal'

  return (
    <div className="flex flex-col gap-4">
      {/* Orientation toggle */}
      <div className="flex items-center gap-2">
        <Button
          variant={isHorizontal ? 'default' : 'outline'}
          size="icon-xs"
          onClick={() => setOrientation('horizontal')}
        >
          <IconRectangle className="size-3" />
        </Button>
        <Button
          variant={!isHorizontal ? 'default' : 'outline'}
          size="icon-xs"
          onClick={() => setOrientation('vertical')}
        >
          <IconRectangleVertical className="size-3" />
        </Button>
        <span className="text-[10px] text-muted-foreground ml-1">
          {isHorizontal ? 'Landscape' : 'Portrait'}
        </span>
      </div>

      {/* The card */}
      <div
        ref={cardRef}
        className={`text-white flex overflow-hidden ${
          isHorizontal ? 'aspect-[2/1] flex-row p-6 sm:p-8 gap-6' : 'aspect-[1/1.5] flex-col gap-6'
        }`}
        style={{ fontFamily: "'JetBrains Mono Variable', monospace", backgroundColor: accentColor }}
      >
        {isHorizontal ? (
          <>
            {/* Horizontal: text left, QR right */}
            <div className="flex flex-col gap-2 flex-1 min-w-0 min-h-0 overflow-hidden">
              <h2 className="font-bold leading-tight tracking-tight text-white shrink-0 text-xl sm:text-2xl">
                {displayName || <span className="opacity-30 italic text-lg">Your Name</span>}
              </h2>
              {subtitleParts.length > 0 && (
                <p className="text-[13px] text-white/50 leading-snug shrink-0">
                  {subtitleParts.join(' / ')}
                </p>
              )}
              {enabledFields.length > 0 && (
                <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 mt-1 min-h-0 overflow-hidden text-[13px] leading-snug">
                  {enabledFields.map((f, i) => (
                    <React.Fragment key={i}>
                      <span className="text-white/40 uppercase tracking-wider shrink-0">
                        {f.tag}
                      </span>
                      <span className="text-white/90 break-words min-w-0">{f.value}</span>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
            <div className="shrink-0 flex items-end justify-end">
              {hasContent ? (
                <QRCodeSVG
                  value={vcardString}
                  size={100}
                  level="M"
                  bgColor={accentColor}
                  fgColor="#ffffff"
                />
              ) : (
                <div
                  className="border border-white/10 flex items-center justify-center"
                  style={{ width: 100, height: 100 }}
                >
                  <span className="text-[9px] text-white/20 text-center leading-tight">
                    QR code
                  </span>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Vertical: text top-left, QR bottom-right */}
            <div className="flex-1 flex flex-col gap-2 min-h-0 overflow-hidden p-6 sm:p-8">
              <h2 className="font-bold leading-tight tracking-tight text-white shrink-0 text-2xl sm:text-3xl">
                {displayName || <span className="opacity-30 italic text-lg">Your Name</span>}
              </h2>
              {subtitleParts.length > 0 && (
                <p className="text-[13px] text-white/50 leading-snug shrink-0">
                  {subtitleParts.join(' / ')}
                </p>
              )}
              {enabledFields.length > 0 && (
                <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 mt-1 min-h-0 overflow-hidden text-[13px] leading-snug">
                  {enabledFields.map((f, i) => (
                    <React.Fragment key={i}>
                      <span className="text-white/40 uppercase tracking-wider shrink-0">
                        {f.tag}
                      </span>
                      <span className="text-white/90 break-words min-w-0">{f.value}</span>
                    </React.Fragment>
                  ))}
                </div>
              )}
              <div className="flex-1" />
              <div className="shrink-0 flex justify-end">
                {hasContent ? (
                  <QRCodeSVG
                    value={vcardString}
                    size={210}
                    level="M"
                    bgColor={accentColor}
                    fgColor="#ffffff"
                  />
                ) : (
                  <div
                    className="border border-white/10 flex items-center justify-center"
                    style={{ width: 140, height: 140 }}
                  >
                    <span className="text-[9px] text-white/20 text-center leading-tight">
                      QR code
                    </span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Download button */}
      <Button onClick={downloadAsPng} disabled={!hasContent} className="w-full">
        <IconDownload className="size-3.5" />
        Download PNG
      </Button>
    </div>
  )
}
