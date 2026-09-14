import { classNames } from '@/ui.stylex'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface SimpleFieldRowProps {
  label: string
  value: string
  enabled: boolean
  type?: 'text' | 'email' | 'tel' | 'url' | 'date' | 'textarea'
  placeholder?: string
  onValueChange: (value: string) => void
  onEnabledChange: (enabled: boolean) => void
}

export function SimpleFieldRow({
  label,
  value,
  enabled,
  type = 'text',
  placeholder,
  onValueChange,
  onEnabledChange,
}: SimpleFieldRowProps) {
  const id = `field-${label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div className={classNames.contactFormCustomFields24}>
      <div className={classNames.contactFormCustomFields25}>
        <Checkbox
          id={`${id}-toggle`}
          checked={enabled}
          onCheckedChange={(checked) => onEnabledChange(checked === true)}
        />
      </div>
      <div
        className={cn(
          classNames.contactFormFieldRow30,
          !enabled && classNames.contactFormCustomFields27,
        )}
      >
        <Label htmlFor={id} className={classNames.contactFormFieldRow31}>
          {label}
        </Label>
        {type === 'textarea' ? (
          <Textarea
            id={id}
            value={value}
            placeholder={placeholder ?? label}
            onChange={(e) => onValueChange(e.target.value)}
            disabled={!enabled}
            rows={3}
          />
        ) : (
          <Input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder ?? label}
            onChange={(e) => onValueChange(e.target.value)}
            disabled={!enabled}
          />
        )}
      </div>
    </div>
  )
}
