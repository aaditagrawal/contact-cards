import { classNames } from '@/ui.stylex'
import { IconPlus, IconX } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import type { MultiFieldEntry, MultiFieldKey, ContactAction } from '@/lib/contact-types'

interface MultiFieldSectionProps {
  field: MultiFieldKey
  entries: MultiFieldEntry[]
  typeOptions: readonly string[]
  inputType?: 'text' | 'email' | 'tel' | 'url'
  placeholder?: string
  dispatch: React.Dispatch<ContactAction>
}

export function MultiFieldSection({
  field,
  entries,
  typeOptions,
  inputType = 'text',
  placeholder,
  dispatch,
}: MultiFieldSectionProps) {
  return (
    <div className={classNames.contactFormCustomFields23}>
      {entries.map((entry) => (
        <div key={entry.id} className={classNames.contactFormCustomFields24}>
          <div className={classNames.contactFormCustomFields25}>
            <Checkbox
              checked={entry.enabled}
              onCheckedChange={(checked) =>
                dispatch({
                  type: 'TOGGLE_MULTI_ENTRY',
                  payload: { field, id: entry.id, enabled: checked === true },
                })
              }
            />
          </div>
          <div
            className={cn(
              classNames.contactFormMultiField32,
              !entry.enabled && classNames.contactFormCustomFields27,
            )}
          >
            <Select
              value={entry.type}
              onValueChange={(value) =>
                dispatch({
                  type: 'UPDATE_MULTI_ENTRY',
                  payload: { field, id: entry.id, key: 'type', value },
                })
              }
              disabled={!entry.enabled}
            >
              <SelectTrigger size="sm" className={classNames.contactFormMultiField33}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {typeOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type={inputType}
              value={entry.value}
              placeholder={placeholder ?? entry.type}
              onChange={(e) =>
                dispatch({
                  type: 'UPDATE_MULTI_ENTRY',
                  payload: { field, id: entry.id, key: 'value', value: e.target.value },
                })
              }
              disabled={!entry.enabled}
            />
          </div>
          {entries.length > 1 && (
            <Button
              variant="ghost"
              size="icon-xs"
              className={classNames.contactFormMultiField34}
              onClick={() =>
                dispatch({
                  type: 'REMOVE_MULTI_ENTRY',
                  payload: { field, id: entry.id },
                })
              }
            >
              <IconX data-stylex-sized="" className={classNames.cardPreview2} />
            </Button>
          )}
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          dispatch({
            type: 'ADD_MULTI_ENTRY',
            payload: { field, entryType: typeOptions[0] },
          })
        }
        className={classNames.contactFormCustomFields29}
      >
        <IconPlus data-stylex-sized="" className={classNames.cardPreview2} />
        Add
      </Button>
    </div>
  )
}
