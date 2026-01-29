import type { ContactState } from './contact-types'

function vcardTypeMap(label: string): string {
  const map: Record<string, string> = {
    'Mobile': 'CELL',
    'Home': 'HOME',
    'Work': 'WORK',
    'Main': 'MAIN',
    'Work Fax': 'WORK,FAX',
    'Home Fax': 'HOME,FAX',
    'Pager': 'PAGER',
    'Personal': 'HOME',
    'Other': 'OTHER',
  }
  return map[label] ?? 'OTHER'
}

function socialUrl(platform: string, handle: string): string {
  // If it already looks like a URL, use as-is
  if (handle.startsWith('http://') || handle.startsWith('https://')) {
    return handle
  }
  const clean = handle.replace(/^@/, '')
  const prefixes: Record<string, string> = {
    'LinkedIn': `https://linkedin.com/in/${clean}`,
    'X (Twitter)': `https://x.com/${clean}`,
    'GitHub': `https://github.com/${clean}`,
    'Instagram': `https://instagram.com/${clean}`,
    'Facebook': `https://facebook.com/${clean}`,
    'YouTube': `https://youtube.com/@${clean}`,
    'TikTok': `https://tiktok.com/@${clean}`,
    'Mastodon': handle, // Mastodon handles are full URLs or user@instance
    'Bluesky': `https://bsky.app/profile/${clean}`,
  }
  return prefixes[platform] ?? handle
}

export function generateVCard(contact: ContactState): string {
  const lines: string[] = ['BEGIN:VCARD', 'VERSION:3.0']

  // Name
  if (contact.useAlias && contact.alias) {
    lines.push(`FN:${contact.alias}`)
    lines.push(`N:${contact.alias};;;;`)
  } else {
    const parts = [contact.firstName, contact.middleName, contact.lastName]
      .filter(Boolean)
    const full = [contact.prefix, ...parts, contact.suffix]
      .filter(Boolean)
      .join(' ')
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
    const org = hasCompany && hasDept
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
