import type { ContactState } from './contact-types'

// Labels are free-form user input, so this is a genuine string-keyed lookup with a
// fallback. `Map.get` reports the miss as `undefined` instead of an index signature
// pretending every label resolves.
const VCARD_TYPE_BY_LABEL = new Map([
  ['Mobile', 'CELL'],
  ['Home', 'HOME'],
  ['Work', 'WORK'],
  ['Main', 'MAIN'],
  ['Work Fax', 'WORK,FAX'],
  ['Home Fax', 'HOME,FAX'],
  ['Pager', 'PAGER'],
  ['Personal', 'HOME'],
  ['Other', 'OTHER'],
])

function vcardTypeMap(label: string): string {
  return VCARD_TYPE_BY_LABEL.get(label) ?? 'OTHER'
}

function socialUrl(platform: string, handle: string): string {
  // If it already looks like a URL, use as-is
  if (handle.startsWith('http://') || handle.startsWith('https://')) {
    return handle
  }
  const clean = handle.replace(/^@/, '')
  switch (platform) {
    case 'LinkedIn':
      return `https://linkedin.com/in/${clean}`
    case 'X (Twitter)':
      return `https://x.com/${clean}`
    case 'GitHub':
      return `https://github.com/${clean}`
    case 'Instagram':
      return `https://instagram.com/${clean}`
    case 'Facebook':
      return `https://facebook.com/${clean}`
    case 'YouTube':
      return `https://youtube.com/@${clean}`
    case 'TikTok':
      return `https://tiktok.com/@${clean}`
    // Mastodon handles are full URLs or user@instance
    case 'Mastodon':
      return handle
    case 'Bluesky':
      return `https://bsky.app/profile/${clean}`
    default:
      return handle
  }
}

export function generateVCard(contact: ContactState): string {
  const lines: string[] = ['BEGIN:VCARD', 'VERSION:3.0']

  // Name
  if (contact.useAlias && contact.alias) {
    lines.push(`FN:${contact.alias}`)
    lines.push(`N:${contact.alias};;;;`)
  } else {
    const parts = [contact.firstName, contact.middleName, contact.lastName].filter(Boolean)
    const full = [contact.prefix, ...parts, contact.suffix].filter(Boolean).join(' ')
    if (full) {
      lines.push(`FN:${full}`)
      // N: Last;First;Middle;Prefix;Suffix
      lines.push(
        `N:${contact.lastName};${contact.firstName};${contact.middleName};${contact.prefix};${contact.suffix}`,
      )
    }
  }

  // Phones
  for (const p of contact.phones) {
    if (p.enabled && p.value) {
      lines.push(`TEL;TYPE=${vcardTypeMap(p.type)}:${p.value}`)
    }
  }

  // Emails
  for (const e of contact.emails) {
    if (e.enabled && e.value) {
      lines.push(`EMAIL;TYPE=${vcardTypeMap(e.type)}:${e.value}`)
    }
  }

  // Websites
  for (const w of contact.websites) {
    if (w.enabled && w.value) {
      lines.push(`URL;TYPE=${vcardTypeMap(w.type)}:${w.value}`)
    }
  }

  // Professional
  const hasCompany = contact.company.enabled && contact.company.value
  const hasDept = contact.department.enabled && contact.department.value
  if (hasCompany || hasDept) {
    const org =
      hasCompany && hasDept
        ? `${contact.company.value};${contact.department.value}`
        : hasCompany
          ? contact.company.value
          : `;${contact.department.value}`
    lines.push(`ORG:${org}`)
  }
  if (contact.jobTitle.enabled && contact.jobTitle.value) {
    lines.push(`TITLE:${contact.jobTitle.value}`)
  }

  // Addresses
  for (const a of contact.addresses) {
    if (!a.enabled) continue
    const hasAddr = a.street || a.city || a.state || a.zip || a.country
    if (hasAddr) {
      lines.push(
        `ADR;TYPE=${vcardTypeMap(a.type)}:;;${a.street};${a.city};${a.state};${a.zip};${a.country}`,
      )
    }
  }

  // Social profiles
  for (const s of contact.socials) {
    if (s.enabled && s.value) {
      const url = socialUrl(s.platform, s.value)
      lines.push(`X-SOCIALPROFILE;TYPE=${s.platform.replace(/[^A-Za-z0-9]/g, '')}:${url}`)
    }
  }

  // Birthday
  if (contact.birthday.enabled && contact.birthday.value) {
    lines.push(`BDAY:${contact.birthday.value}`)
  }

  // Pronouns (as X-property, widely supported)
  if (contact.pronouns.enabled && contact.pronouns.value) {
    lines.push(`X-PRONOUNS:${contact.pronouns.value}`)
  }

  // Notes
  if (contact.notes.enabled && contact.notes.value) {
    lines.push(`NOTE:${contact.notes.value}`)
  }

  // Emergency info
  if (contact.bloodGroup.enabled && contact.bloodGroup.value) {
    lines.push(`X-BLOOD-GROUP:${contact.bloodGroup.value}`)
  }
  if (contact.allergies.enabled && contact.allergies.value) {
    lines.push(`X-ALLERGIES:${contact.allergies.value}`)
  }
  if (contact.medicalNotes.enabled && contact.medicalNotes.value) {
    lines.push(`X-MEDICAL-NOTES:${contact.medicalNotes.value}`)
  }
  if (contact.emergencyContact.enabled && contact.emergencyContact.value) {
    lines.push(`X-EMERGENCY-CONTACT:${contact.emergencyContact.value}`)
  }

  // Custom fields
  for (const cf of contact.customFields) {
    if (cf.enabled && cf.label && cf.value) {
      const safeLabel = cf.label.toUpperCase().replace(/[^A-Z0-9-]/g, '-')
      lines.push(`X-${safeLabel}:${cf.value}`)
    }
  }

  lines.push('END:VCARD')
  return lines.join('\r\n')
}
