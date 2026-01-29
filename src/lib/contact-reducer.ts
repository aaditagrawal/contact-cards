import type { ContactState, ContactAction } from './contact-types'

function uid() {
  return crypto.randomUUID()
}

function simpleField(value = '', enabled = false) {
  return { value, enabled }
}

export const initialContactState: ContactState = {
  useAlias: false,
  firstName: '',
  lastName: '',
  middleName: '',
  prefix: '',
  suffix: '',
  alias: '',

  phones: [{ id: uid(), type: 'Mobile', value: '', enabled: true }],
  emails: [{ id: uid(), type: 'Personal', value: '', enabled: true }],
  websites: [{ id: uid(), type: 'Personal', value: '', enabled: true }],
  addresses: [],

  company: simpleField(),
  department: simpleField(),
  jobTitle: simpleField(),

  socials: [],

  birthday: simpleField(),
  pronouns: simpleField(),
  notes: simpleField(),

  bloodGroup: simpleField(),
  allergies: simpleField(),
  medicalNotes: simpleField(),
  emergencyContact: simpleField(),

  customFields: [],
}

export function contactReducer(
  state: ContactState,
  action: ContactAction,
): ContactState {
  switch (action.type) {
    // Name
    case 'SET_USE_ALIAS':
      return { ...state, useAlias: action.payload }
    case 'SET_NAME_FIELD':
      return { ...state, [action.payload.field]: action.payload.value }

    // Multi-field (phones, emails, websites)
    case 'ADD_MULTI_ENTRY':
      return {
        ...state,
        [action.payload.field]: [
          ...state[action.payload.field],
          { id: uid(), type: action.payload.entryType, value: '', enabled: true },
        ],
      }
    case 'REMOVE_MULTI_ENTRY':
      return {
        ...state,
        [action.payload.field]: state[action.payload.field].filter(
          (e) => e.id !== action.payload.id,
        ),
      }
    case 'UPDATE_MULTI_ENTRY':
      return {
        ...state,
        [action.payload.field]: state[action.payload.field].map((e) =>
          e.id === action.payload.id
            ? { ...e, [action.payload.key]: action.payload.value }
            : e,
        ),
      }
    case 'TOGGLE_MULTI_ENTRY':
      return {
        ...state,
        [action.payload.field]: state[action.payload.field].map((e) =>
          e.id === action.payload.id
            ? { ...e, enabled: action.payload.enabled }
            : e,
        ),
      }

    // Address
    case 'ADD_ADDRESS':
      return {
        ...state,
        addresses: [
          ...state.addresses,
          {
            id: uid(),
            type: action.payload.entryType,
            enabled: true,
            street: '',
            city: '',
            state: '',
            zip: '',
            country: '',
          },
        ],
      }
    case 'REMOVE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter((a) => a.id !== action.payload),
      }
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.map((a) =>
          a.id === action.payload.id
            ? { ...a, [action.payload.key]: action.payload.value }
            : a,
        ),
      }
    case 'TOGGLE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.map((a) =>
          a.id === action.payload.id
            ? { ...a, enabled: action.payload.enabled }
            : a,
        ),
      }

    // Simple fields
    case 'SET_SIMPLE_VALUE':
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          value: action.payload.value,
        },
      }
    case 'SET_SIMPLE_ENABLED':
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          enabled: action.payload.enabled,
        },
      }

    // Social
    case 'ADD_SOCIAL':
      return {
        ...state,
        socials: [
          ...state.socials,
          { id: uid(), platform: action.payload.platform, value: '', enabled: true },
        ],
      }
    case 'REMOVE_SOCIAL':
      return {
        ...state,
        socials: state.socials.filter((s) => s.id !== action.payload),
      }
    case 'UPDATE_SOCIAL':
      return {
        ...state,
        socials: state.socials.map((s) =>
          s.id === action.payload.id
            ? { ...s, [action.payload.key]: action.payload.value }
            : s,
        ),
      }
    case 'TOGGLE_SOCIAL':
      return {
        ...state,
        socials: state.socials.map((s) =>
          s.id === action.payload.id
            ? { ...s, enabled: action.payload.enabled }
            : s,
        ),
      }

    // Custom fields
    case 'ADD_CUSTOM_FIELD':
      return {
        ...state,
        customFields: [
          ...state.customFields,
          { id: uid(), label: '', value: '', enabled: true },
        ],
      }
    case 'REMOVE_CUSTOM_FIELD':
      return {
        ...state,
        customFields: state.customFields.filter((f) => f.id !== action.payload),
      }
    case 'UPDATE_CUSTOM_FIELD':
      return {
        ...state,
        customFields: state.customFields.map((f) =>
          f.id === action.payload.id
            ? { ...f, [action.payload.field]: action.payload.value }
            : f,
        ),
      }
    case 'SET_CUSTOM_FIELD_ENABLED':
      return {
        ...state,
        customFields: state.customFields.map((f) =>
          f.id === action.payload.id
            ? { ...f, enabled: action.payload.enabled }
            : f,
        ),
      }

    default:
      return state
  }
}
