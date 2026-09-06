import { classNames } from '@/ui.stylex'
import * as React from 'react'
import { Checkbox as CheckboxPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'
import { IconCheck } from '@tabler/icons-react'

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-stylex-sized=""
      className={cn(classNames.checkbox82, className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className={classNames.checkbox83}>
        <IconCheck />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
