// A single entry in a multi-instance field (e.g. one phone number)
export interface MultiFieldEntry {
  id: string
  type: string
  value: string
  enabled: boolean
}

// Address is special — multiple sub-fields per entry
export interface AddressEntry {
  id: string
  type: string
  enabled: boolean
  street: string
  city: string
  state: string
  zip: string
  country: string
}

// Social profile entry
export interface SocialEntry {
  id: string
  platform: string
  value: string
  enabled: boolean
}

// Custom field entry
export interface CustomField {
  id: string
  label: string
  value: string
  enabled: boolean
}

// Simple single-value field (birthday, notes, pronouns)
export interface SimpleField {
  value: string
  enabled: boolean
}

export interface ContactState {
  // Name
  useAlias: boolean
  firstName: string
  lastName: string
  middleName: string
  prefix: string
  suffix: string
  alias: string

  // Multi-instance fields
  phones: MultiFieldEntry[]
  emails: MultiFieldEntry[]
  websites: MultiFieldEntry[]
  addresses: AddressEntry[]

  // Professional (single instance, but toggleable)
  company: SimpleField
  department: SimpleField
  jobTitle: SimpleField

  // Social profiles
  socials: SocialEntry[]

  // Other
  birthday: SimpleField
  pronouns: SimpleField
  notes: SimpleField

  // Emergency info
  bloodGroup: SimpleField
  allergies: SimpleField
  medicalNotes: SimpleField
  emergencyContact: SimpleField

  // Custom fields
  customFields: CustomField[]
}

// Type options for each multi-field
export const phoneTypes = [
  'Mobile',
  'Home',
  'Work',
  'Main',
  'Work Fax',
  'Home Fax',
  'Pager',
  'Other',
] as const
export const emailTypes = ['Personal', 'Work', 'Other'] as const
export const websiteTypes = ['Personal', 'Work', 'Blog', 'Portfolio', 'Other'] as const
export const addressTypes = ['Home', 'Work', 'Other'] as const
export const socialPlatforms = [
  'LinkedIn',
  'X (Twitter)',
  'GitHub',
  'Instagram',
  'Facebook',
  'YouTube',
  'TikTok',
  'Mastodon',
  'Bluesky',
  'Other',
] as const

export type ContactAction =
  // Name
  | { type: 'SET_USE_ALIAS'; payload: boolean }
  | {
      type: 'SET_NAME_FIELD'
      payload: {
        field: 'firstName' | 'lastName' | 'middleName' | 'prefix' | 'suffix' | 'alias'
        value: string
      }
    }

  // Multi-field (phones, emails, websites)
  | {
      type: 'ADD_MULTI_ENTRY'
      payload: { field: 'phones' | 'emails' | 'websites'; entryType: string }
    }
  | { type: 'REMOVE_MULTI_ENTRY'; payload: { field: 'phones' | 'emails' | 'websites'; id: string } }
  | {
      type: 'UPDATE_MULTI_ENTRY'
      payload: {
        field: 'phones' | 'emails' | 'websites'
        id: string
        key: 'type' | 'value'
        value: string
      }
    }
  | {
      type: 'TOGGLE_MULTI_ENTRY'
      payload: { field: 'phones' | 'emails' | 'websites'; id: string; enabled: boolean }
    }

  // Address
  | { type: 'ADD_ADDRESS'; payload: { entryType: string } }
  | { type: 'REMOVE_ADDRESS'; payload: string }
  | {
      type: 'UPDATE_ADDRESS'
      payload: {
        id: string
        key: 'type' | 'street' | 'city' | 'state' | 'zip' | 'country'
        value: string
      }
    }
  | { type: 'TOGGLE_ADDRESS'; payload: { id: string; enabled: boolean } }

  // Simple fields (company, department, jobTitle, birthday, pronouns, notes)
  | { type: 'SET_SIMPLE_VALUE'; payload: { field: SimpleFieldKey; value: string } }
  | { type: 'SET_SIMPLE_ENABLED'; payload: { field: SimpleFieldKey; enabled: boolean } }

  // Social
  | { type: 'ADD_SOCIAL'; payload: { platform: string } }
  | { type: 'REMOVE_SOCIAL'; payload: string }
  | { type: 'UPDATE_SOCIAL'; payload: { id: string; key: 'platform' | 'value'; value: string } }
  | { type: 'TOGGLE_SOCIAL'; payload: { id: string; enabled: boolean } }

  // Custom fields
  | { type: 'ADD_CUSTOM_FIELD' }
  | { type: 'REMOVE_CUSTOM_FIELD'; payload: string }
  | {
      type: 'UPDATE_CUSTOM_FIELD'
      payload: { id: string; field: 'label' | 'value'; value: string }
    }
  | { type: 'SET_CUSTOM_FIELD_ENABLED'; payload: { id: string; enabled: boolean } }

export type SimpleFieldKey =
  | 'company'
  | 'department'
  | 'jobTitle'
  | 'birthday'
  | 'pronouns'
  | 'notes'
  | 'bloodGroup'
  | 'allergies'
  | 'medicalNotes'
  | 'emergencyContact'
export type MultiFieldKey = 'phones' | 'emails' | 'websites'
