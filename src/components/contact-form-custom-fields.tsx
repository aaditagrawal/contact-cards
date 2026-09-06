import { classNames } from '@/ui.stylex'
import { IconPlus, IconX } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import type { CustomField, ContactAction } from '@/lib/contact-types'

interface ContactFormCustomFieldsProps {
  fields: CustomField[]
  dispatch: React.Dispatch<ContactAction>
}

export function ContactFormCustomFields({ fields, dispatch }: ContactFormCustomFieldsProps) {
  return (
    <div className={classNames.contactFormCustomFields23}>
      {fields.map((cf) => (
        <div key={cf.id} className={classNames.contactFormCustomFields24}>
          <div className={classNames.contactFormCustomFields25}>
            <Checkbox
              checked={cf.enabled}
              onCheckedChange={(checked) =>
                dispatch({
                  type: 'SET_CUSTOM_FIELD_ENABLED',
                  payload: { id: cf.id, enabled: checked === true },
                })
              }
            />
          </div>
          <div
            className={cn(
              classNames.contactFormCustomFields26,
              !cf.enabled && classNames.contactFormCustomFields27,
            )}
          >
            <Input
              placeholder="Label"
              value={cf.label}
              onChange={(e) =>
                dispatch({
                  type: 'UPDATE_CUSTOM_FIELD',
                  payload: { id: cf.id, field: 'label', value: e.target.value },
                })
              }
              disabled={!cf.enabled}
            />
            <Input
              placeholder="Value"
              value={cf.value}
              onChange={(e) =>
                dispatch({
                  type: 'UPDATE_CUSTOM_FIELD',
                  payload: { id: cf.id, field: 'value', value: e.target.value },
                })
              }
              disabled={!cf.enabled}
            />
          </div>
          <Button
            variant="ghost"
            size="icon-xs"
            className={classNames.contactFormCustomFields28}
            onClick={() => dispatch({ type: 'REMOVE_CUSTOM_FIELD', payload: cf.id })}
          >
            <IconX data-stylex-sized="" className={classNames.cardPreview2} />
          </Button>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={() => dispatch({ type: 'ADD_CUSTOM_FIELD' })}
        className={classNames.contactFormCustomFields29}
      >
        <IconPlus data-stylex-sized="" className={classNames.cardPreview2} />
        Add Field
      </Button>
    </div>
  )
}
