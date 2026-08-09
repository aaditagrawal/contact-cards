import { IconPlus, IconX } from '@tabler/icons-react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SimpleFieldRow } from '@/components/contact-form-field-row'
import { MultiFieldSection } from '@/components/contact-form-multi-field'
import { ContactFormCustomFields } from '@/components/contact-form-custom-fields'
import { cn } from '@/lib/utils'
import type { ContactState, ContactAction, SimpleFieldKey } from '@/lib/contact-types'
import {
  phoneTypes,
  emailTypes,
  websiteTypes,
  addressTypes,
  socialPlatforms,
} from '@/lib/contact-types'

interface ContactFormProps {
  state: ContactState
  dispatch: React.Dispatch<ContactAction>
}

export function ContactForm({ state, dispatch }: ContactFormProps) {
  function simpleRow(
    key: SimpleFieldKey,
    label: string,
    type?: 'text' | 'email' | 'tel' | 'url' | 'date' | 'textarea',
    placeholder?: string,
  ) {
    return (
      <SimpleFieldRow
        key={key}
        label={label}
        value={state[key].value}
        enabled={state[key].enabled}
        type={type}
        placeholder={placeholder}
        onValueChange={(value) =>
          dispatch({ type: 'SET_SIMPLE_VALUE', payload: { field: key, value } })
        }
        onEnabledChange={(enabled) =>
          dispatch({ type: 'SET_SIMPLE_ENABLED', payload: { field: key, enabled } })
        }
      />
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Name Section */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</h2>
        <div className="flex items-center gap-3">
          <Switch
            id="use-alias"
            size="sm"
            checked={state.useAlias}
            onCheckedChange={(checked) => dispatch({ type: 'SET_USE_ALIAS', payload: checked })}
          />
          <Label htmlFor="use-alias" className="text-xs">
            Use alias instead of name
          </Label>
        </div>
        {state.useAlias ? (
          <div className="flex flex-col gap-1">
            <Label htmlFor="alias" className="text-xs">
              Alias
            </Label>
            <Input
              id="alias"
              value={state.alias}
              placeholder="Display name"
              onChange={(e) =>
                dispatch({
                  type: 'SET_NAME_FIELD',
                  payload: { field: 'alias', value: e.target.value },
                })
              }
            />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {/* Prefix + Suffix row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <Label htmlFor="prefix" className="text-xs text-muted-foreground">
                  Prefix
                </Label>
                <Input
                  id="prefix"
                  value={state.prefix}
                  placeholder="Mr., Dr., etc."
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_NAME_FIELD',
                      payload: { field: 'prefix', value: e.target.value },
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="suffix" className="text-xs text-muted-foreground">
                  Suffix
                </Label>
                <Input
                  id="suffix"
                  value={state.suffix}
                  placeholder="Jr., III, etc."
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_NAME_FIELD',
                      payload: { field: 'suffix', value: e.target.value },
                    })
                  }
                />
              </div>
            </div>
            {/* First, Middle, Last */}
            <div className="grid grid-cols-[1fr_0.6fr_1fr] gap-3">
              <div className="flex flex-col gap-1">
                <Label htmlFor="firstName" className="text-xs">
                  First
                </Label>
                <Input
                  id="firstName"
                  value={state.firstName}
                  placeholder="First"
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_NAME_FIELD',
                      payload: { field: 'firstName', value: e.target.value },
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="middleName" className="text-xs text-muted-foreground">
                  Middle
                </Label>
                <Input
                  id="middleName"
                  value={state.middleName}
                  placeholder="M."
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_NAME_FIELD',
                      payload: { field: 'middleName', value: e.target.value },
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="lastName" className="text-xs">
                  Last
                </Label>
                <Input
                  id="lastName"
                  value={state.lastName}
                  placeholder="Last"
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_NAME_FIELD',
                      payload: { field: 'lastName', value: e.target.value },
                    })
                  }
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <Separator />

      {/* Phone Numbers */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Phone
        </h2>
        <MultiFieldSection
          field="phones"
          entries={state.phones}
          typeOptions={phoneTypes}
          inputType="tel"
          placeholder="Phone number"
          dispatch={dispatch}
        />
      </section>

      <Separator />

      {/* Email Addresses */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Email
        </h2>
        <MultiFieldSection
          field="emails"
          entries={state.emails}
          typeOptions={emailTypes}
          inputType="email"
          placeholder="Email address"
          dispatch={dispatch}
        />
      </section>

      <Separator />

      {/* Websites */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Website
        </h2>
        <MultiFieldSection
          field="websites"
          entries={state.websites}
          typeOptions={websiteTypes}
          inputType="url"
          placeholder="https://"
          dispatch={dispatch}
        />
      </section>

      <Separator />

      {/* Professional */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Professional
        </h2>
        {simpleRow('jobTitle', 'Job Title')}
        {simpleRow('company', 'Company')}
        {simpleRow('department', 'Department')}
      </section>

      <Separator />

      {/* Addresses */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Address
        </h2>
        {state.addresses.map((addr) => (
          <div key={addr.id} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={addr.enabled}
                onCheckedChange={(checked) =>
                  dispatch({
                    type: 'TOGGLE_ADDRESS',
                    payload: { id: addr.id, enabled: checked === true },
                  })
                }
              />
              <Select
                value={addr.type}
                onValueChange={(value) =>
                  dispatch({
                    type: 'UPDATE_ADDRESS',
                    payload: { id: addr.id, key: 'type', value },
                  })
                }
                disabled={!addr.enabled}
              >
                <SelectTrigger size="sm" className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {addressTypes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex-1" />
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={() => dispatch({ type: 'REMOVE_ADDRESS', payload: addr.id })}
              >
                <IconX className="size-3" />
              </Button>
            </div>
            <div
              className={cn(
                'flex flex-col gap-2 pl-7 transition-opacity',
                !addr.enabled && 'opacity-40 pointer-events-none',
              )}
            >
              <Input
                placeholder="Street"
                value={addr.street}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_ADDRESS',
                    payload: { id: addr.id, key: 'street', value: e.target.value },
                  })
                }
                disabled={!addr.enabled}
              />
              <div className="grid grid-cols-2 gap-2">
                <Input
                  placeholder="City"
                  value={addr.city}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_ADDRESS',
                      payload: { id: addr.id, key: 'city', value: e.target.value },
                    })
                  }
                  disabled={!addr.enabled}
                />
                <Input
                  placeholder="State"
                  value={addr.state}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_ADDRESS',
                      payload: { id: addr.id, key: 'state', value: e.target.value },
                    })
                  }
                  disabled={!addr.enabled}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  placeholder="ZIP"
                  value={addr.zip}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_ADDRESS',
                      payload: { id: addr.id, key: 'zip', value: e.target.value },
                    })
                  }
                  disabled={!addr.enabled}
                />
                <Input
                  placeholder="Country"
                  value={addr.country}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_ADDRESS',
                      payload: { id: addr.id, key: 'country', value: e.target.value },
                    })
                  }
                  disabled={!addr.enabled}
                />
              </div>
            </div>
            {state.addresses.indexOf(addr) < state.addresses.length - 1 && (
              <Separator className="mt-1" />
            )}
          </div>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => dispatch({ type: 'ADD_ADDRESS', payload: { entryType: 'Home' } })}
          className="w-fit"
        >
          <IconPlus className="size-3" />
          Add Address
        </Button>
      </section>

      <Separator />

      {/* Social Profiles */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Social
        </h2>
        {state.socials.map((social) => (
          <div key={social.id} className="flex items-start gap-3">
            <div className="flex items-center pt-2">
              <Checkbox
                checked={social.enabled}
                onCheckedChange={(checked) =>
                  dispatch({
                    type: 'TOGGLE_SOCIAL',
                    payload: { id: social.id, enabled: checked === true },
                  })
                }
              />
            </div>
            <div
              className={cn(
                'flex flex-1 items-start gap-2 transition-opacity',
                !social.enabled && 'opacity-40',
              )}
            >
              <Select
                value={social.platform}
                onValueChange={(value) =>
                  dispatch({
                    type: 'UPDATE_SOCIAL',
                    payload: { id: social.id, key: 'platform', value },
                  })
                }
                disabled={!social.enabled}
              >
                <SelectTrigger size="sm" className="w-[120px] shrink-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {socialPlatforms.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                value={social.value}
                placeholder={social.platform === 'Other' ? 'URL' : `@username or URL`}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_SOCIAL',
                    payload: { id: social.id, key: 'value', value: e.target.value },
                  })
                }
                disabled={!social.enabled}
              />
            </div>
            <Button
              variant="ghost"
              size="icon-xs"
              className="mt-1 shrink-0"
              onClick={() => dispatch({ type: 'REMOVE_SOCIAL', payload: social.id })}
            >
              <IconX className="size-3" />
            </Button>
          </div>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => dispatch({ type: 'ADD_SOCIAL', payload: { platform: 'LinkedIn' } })}
          className="w-fit"
        >
          <IconPlus className="size-3" />
          Add Social
        </Button>
      </section>

      <Separator />

      {/* Other */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Other
        </h2>
        {simpleRow('pronouns', 'Pronouns', 'text', 'they/them')}
        {simpleRow('birthday', 'Birthday', 'date')}
        {simpleRow('notes', 'Notes', 'textarea')}
      </section>

      <Separator />

      {/* Emergency Info */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Emergency Info
        </h2>
        {simpleRow('bloodGroup', 'Blood Group', 'text', 'A+, O-, etc.')}
        {simpleRow('allergies', 'Allergies', 'text', 'Peanuts, Penicillin, etc.')}
        {simpleRow('medicalNotes', 'Medical Notes', 'textarea', 'Conditions, medications, etc.')}
        {simpleRow('emergencyContact', 'Emergency Contact', 'text', 'Name & phone number')}
      </section>

      <Separator />

      {/* Custom Fields */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Custom Fields
        </h2>
        <ContactFormCustomFields fields={state.customFields} dispatch={dispatch} />
      </section>
    </div>
  )
}
