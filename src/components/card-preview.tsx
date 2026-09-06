import { classNames } from '@/ui.stylex'
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
    <div className={classNames.cardPreview0}>
      {/* Orientation toggle */}
      <div className={classNames.cardPreview1}>
        <Button
          variant={isHorizontal ? 'default' : 'outline'}
          size="icon-xs"
          onClick={() => setOrientation('horizontal')}
        >
          <IconRectangle data-stylex-sized="" className={classNames.cardPreview2} />
        </Button>
        <Button
          variant={!isHorizontal ? 'default' : 'outline'}
          size="icon-xs"
          onClick={() => setOrientation('vertical')}
        >
          <IconRectangleVertical data-stylex-sized="" className={classNames.cardPreview2} />
        </Button>
        <span className={classNames.cardPreview3}>{isHorizontal ? 'Landscape' : 'Portrait'}</span>
      </div>

      {/* The card */}
      <div
        ref={cardRef}
        className={`${classNames.cardPreview6} ${
          isHorizontal ? classNames.cardPreview4 : classNames.cardPreview5
        }`}
        style={{ fontFamily: "'JetBrains Mono Variable', monospace", backgroundColor: accentColor }}
      >
        {isHorizontal ? (
          <>
            {/* Horizontal: text left, QR right */}
            <div className={classNames.cardPreview7}>
              <h2 className={classNames.cardPreview8}>
                {displayName || <span className={classNames.cardPreview9}>Your Name</span>}
              </h2>
              {subtitleParts.length > 0 && (
                <p className={classNames.cardPreview10}>{subtitleParts.join(' / ')}</p>
              )}
              {enabledFields.length > 0 && (
                <div className={classNames.cardPreview11}>
                  {enabledFields.map((f, i) => (
                    <React.Fragment key={i}>
                      <span className={classNames.cardPreview12}>{f.tag}</span>
                      <span className={classNames.cardPreview13}>{f.value}</span>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
            <div className={classNames.cardPreview14}>
              {hasContent ? (
                <QRCodeSVG
                  value={vcardString}
                  size={100}
                  level="M"
                  bgColor={accentColor}
                  fgColor="#ffffff"
                />
              ) : (
                <div className={classNames.cardPreview15} style={{ width: 100, height: 100 }}>
                  <span className={classNames.cardPreview16}>QR code</span>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Vertical: text top-left, QR bottom-right */}
            <div className={classNames.cardPreview17}>
              <h2 className={classNames.cardPreview18}>
                {displayName || <span className={classNames.cardPreview9}>Your Name</span>}
              </h2>
              {subtitleParts.length > 0 && (
                <p className={classNames.cardPreview10}>{subtitleParts.join(' / ')}</p>
              )}
              {enabledFields.length > 0 && (
                <div className={classNames.cardPreview11}>
                  {enabledFields.map((f, i) => (
                    <React.Fragment key={i}>
                      <span className={classNames.cardPreview12}>{f.tag}</span>
                      <span className={classNames.cardPreview13}>{f.value}</span>
                    </React.Fragment>
                  ))}
                </div>
              )}
              <div className={classNames.cardPreview19} />
              <div className={classNames.cardPreview20}>
                {hasContent ? (
                  <QRCodeSVG
                    value={vcardString}
                    size={210}
                    level="M"
                    bgColor={accentColor}
                    fgColor="#ffffff"
                  />
                ) : (
                  <div className={classNames.cardPreview15} style={{ width: 140, height: 140 }}>
                    <span className={classNames.cardPreview16}>QR code</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Download button */}
      <Button onClick={downloadAsPng} disabled={!hasContent} className={classNames.cardPreview21}>
        <IconDownload data-stylex-sized="" className={classNames.cardPreview22} />
        Download PNG
      </Button>
    </div>
  )
}
