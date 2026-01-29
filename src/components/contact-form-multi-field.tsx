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
    <div className="flex flex-col gap-3">
      {entries.map((entry) => (
        <div key={entry.id} className="flex items-start gap-3">
          <div className="flex items-center pt-2">
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
              'flex flex-1 items-start gap-2 transition-opacity',
              !entry.enabled && 'opacity-40',
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
              <SelectTrigger size="sm" className="w-[100px] shrink-0">
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
              className="mt-1 shrink-0"
              onClick={() =>
                dispatch({
                  type: 'REMOVE_MULTI_ENTRY',
                  payload: { field, id: entry.id },
                })
              }
            >
              <IconX className="size-3" />
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
        className="w-fit"
      >
        <IconPlus className="size-3" />
        Add
      </Button>
    </div>
  )
}
