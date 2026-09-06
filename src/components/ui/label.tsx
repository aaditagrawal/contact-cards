import { classNames } from '@/ui.stylex'
;('use client')

import * as React from 'react'
import { Label as LabelPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(classNames.label143, className)}
      {...props}
    />
  )
}

export { Label }
