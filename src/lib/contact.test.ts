import { describe, expect, it } from 'vitest'
import { contactReducer, initialContactState } from './contact-reducer'
import { generateVCard } from './vcard'
import type { ContactState } from './contact-types'

function properties(card: string) {
  return card
    .replace(/\r\n[ \t]/g, '')
    .split('\r\n')
    .map((line) => {
      const colon = line.indexOf(':')
      return { name: line.slice(0, colon).split(';')[0], value: line.slice(colon + 1) }
    })
}
function decodeText(value: string) {
  return value.replace(/\\([nN\\,;])/g, (_, escaped: string) =>
    escaped.toLowerCase() === 'n' ? '\n' : escaped,
  )
}
const contact = (): ContactState => structuredClone(initialContactState)

describe('vCard export', () => {
  it('exports structured names, aliases, typed fields, addresses and social URLs', () => {
    const state = contact()
    Object.assign(state, {
      firstName: 'Ada',
      lastName: 'Lovelace',
      prefix: 'Dr',
      middleName: 'Byron',
    })
    state.phones = [{ id: 'phone', value: '+44 123', type: 'Work Fax', enabled: true }]
    state.emails = [
      { id: 'email', value: 'ada@example.test', type: 'Unknown label', enabled: true },
    ]
    state.addresses = [
      {
        id: 'addr',
        enabled: true,
        type: 'Home',
        street: '1 Main St',
        city: 'London',
        state: '',
        zip: 'N1',
        country: 'UK',
      },
    ]
    state.socials = [{ id: 'social', enabled: true, platform: 'GitHub', value: '@ada' }]
    const output = generateVCard(state)
    expect(output).toContain('FN:Dr Ada Byron Lovelace\r\nN:Lovelace;Ada;Byron;Dr;')
    expect(output).toContain('TEL;TYPE=WORK,FAX:+44 123')
    expect(output).toContain('EMAIL;TYPE=OTHER:ada@example.test')
    expect(output).toContain('ADR;TYPE=HOME:;;1 Main St;London;;N1;UK')
    expect(output).toContain('X-SOCIALPROFILE;TYPE=GitHub:https://github.com/ada')
    state.useAlias = true
    state.alias = 'Countess'
    expect(generateVCard(state)).toContain('FN:Countess\r\nN:Countess;;;;')
    expect(generateVCard(state)).not.toContain('Lovelace')
  })
  it('preserves URI delimiters and encodes raw URI line breaks', () => {
    const state = contact()
    state.websites = [
      {
        id: 'url',
        type: 'Work',
        enabled: true,
        value: 'https://example.test/a;b?x=1,2\r\nTEL:injected',
      },
    ]
    const card = generateVCard(state).replace(/\r\n /g, '')
    expect(card).toContain('URL;TYPE=WORK:https://example.test/a;b?x=1,2%0D%0ATEL:injected')
    expect(properties(card).filter((item) => item.name === 'TEL')).toHaveLength(0)
  })

  it('omits disabled private data across every field family', () => {
    const state = contact()
    state.firstName = 'Ada'
    state.phones = [{ id: 'phone', value: 'private-phone', type: 'Mobile', enabled: false }]
    state.emails = [{ id: 'email', value: 'private-email', type: 'Work', enabled: false }]
    state.websites = [{ id: 'web', value: 'private-url', type: 'Personal', enabled: false }]
    state.addresses = [
      {
        id: 'address',
        type: 'Home',
        enabled: false,
        street: 'private-street',
        city: '',
        state: '',
        zip: '',
        country: '',
      },
    ]
    state.socials = [{ id: 'social', platform: 'GitHub', value: 'private-social', enabled: false }]
    state.customFields = [
      { id: 'custom', label: 'Secret', value: 'private-custom', enabled: false },
    ]
    for (const key of [
      'company',
      'department',
      'jobTitle',
      'birthday',
      'pronouns',
      'notes',
      'bloodGroup',
      'allergies',
      'medicalNotes',
      'emergencyContact',
    ] as const) {
      state[key] = { value: `private-${key}`, enabled: false }
    }
    expect(generateVCard(state)).not.toContain('private-')
    expect(properties(generateVCard(state)).map((item) => item.name)).toEqual([
      'BEGIN',
      'VERSION',
      'FN',
      'N',
      'END',
    ])
  })
  it('round-trips delimiters, newlines and Unicode without property injection', () => {
    const value = '日😀'.repeat(35) + '\\,;\r\nTEL:injected\nEND:VCARD\rBEGIN:VCARD'
    const state = contact()
    state.firstName = 'Ada;Byron'
    state.company = { enabled: true, value: 'Company;Unit' }
    state.department = { enabled: true, value: 'R&D,Test' }
    state.notes = { enabled: true, value }
    state.customFields = [{ id: 'custom', label: 'Badge\r\nTEL', value, enabled: true }]
    const output = generateVCard(state)
    for (const line of output.split('\r\n'))
      expect(new TextEncoder().encode(line).length).toBeLessThanOrEqual(75)
    const parsed = properties(output)
    expect(parsed.filter((item) => item.name === 'TEL')).toHaveLength(0)
    expect(parsed.filter((item) => item.name === 'BEGIN')).toHaveLength(1)
    expect(parsed.filter((item) => item.name === 'END')).toHaveLength(1)
    expect(decodeText(parsed.find((item) => item.name === 'NOTE')?.value ?? '')).toBe(
      value.replace(/\r\n|\r/g, '\n'),
    )
    expect(output).toContain('N:;Ada\\;Byron;;;')
    expect(output).toContain('ORG:Company\\;Unit;R&D\\,Test')
    expect(output).not.toContain('\ufffd')
  })
})

describe('contact editing', () => {
  it('updates a selected entry immutably, then toggles and removes it from export', () => {
    const original = contact()
    const added = contactReducer(original, {
      type: 'ADD_MULTI_ENTRY',
      payload: { field: 'phones', entryType: 'Work' },
    })
    const entry = added.phones.at(-1)
    if (!entry) throw new Error('Missing added phone')
    expect(added.phones[0]).toBe(original.phones[0])
    expect(original.phones).toHaveLength(1)
    const updated = contactReducer(added, {
      type: 'UPDATE_MULTI_ENTRY',
      payload: { field: 'phones', id: entry.id, key: 'value', value: '+91 123' },
    })
    expect(added.phones.at(-1)?.value).toBe('')
    expect(generateVCard(updated)).toContain('TEL;TYPE=WORK:+91 123')
    const disabled = contactReducer(updated, {
      type: 'TOGGLE_MULTI_ENTRY',
      payload: { field: 'phones', id: entry.id, enabled: false },
    })
    expect(generateVCard(disabled)).not.toContain('+91 123')
    const removed = contactReducer(disabled, {
      type: 'REMOVE_MULTI_ENTRY',
      payload: { field: 'phones', id: entry.id },
    })
    expect(removed.phones).toHaveLength(1)
  })
  it('keeps disabled values for re-enabling and assigns distinct IDs', () => {
    let state = contactReducer(contact(), {
      type: 'SET_SIMPLE_VALUE',
      payload: { field: 'allergies', value: 'Peanuts' },
    })
    expect(generateVCard(state)).not.toContain('Peanuts')
    state = contactReducer(state, {
      type: 'SET_SIMPLE_ENABLED',
      payload: { field: 'allergies', enabled: true },
    })
    expect(generateVCard(state)).toContain('X-ALLERGIES:Peanuts')
    state = contactReducer(state, { type: 'ADD_CUSTOM_FIELD' })
    state = contactReducer(state, { type: 'ADD_CUSTOM_FIELD' })
    expect(new Set(state.customFields.map((field) => field.id)).size).toBe(2)
  })
})
