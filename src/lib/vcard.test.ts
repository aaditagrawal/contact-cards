import { describe, expect, it } from 'vitest'
import { initialContactState } from './contact-reducer'
import { generateVCard } from './vcard'

describe('vCard contact text', () => {
  it('keeps the real name private when an enabled alias is empty', () => {
    const card = generateVCard({
      ...initialContactState,
      firstName: 'Private',
      lastName: 'Person',
      useAlias: true,
      alias: '',
      emails: [{ id: '1', type: 'Work', enabled: true, value: 'person@example.com' }],
    })
    expect(card).not.toContain('Private')
    expect(card).not.toContain('Person')
    expect(card).toContain('EMAIL;TYPE=WORK:person@example.com')
  })
  it('escapes newlines and structured text delimiters', () => {
    const card = generateVCard({
      ...initialContactState,
      firstName: 'A;B',
      lastName: 'C,D',
      company: { enabled: true, value: 'A;B' },
      department: { enabled: true, value: 'C,D' },
      notes: { enabled: true, value: 'first\r\nsecond\\third' },
    })
    expect(card).toContain('N:C\\,D;A\\;B;;;')
    expect(card).toContain('ORG:A\\;B;C\\,D')
    expect(card).toContain('NOTE:first\\nsecond\\\\third')
    expect(card.split('\r\n').every((line) => !line.includes('\n'))).toBe(true)
  })
})
