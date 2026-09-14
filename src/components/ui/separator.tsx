import { classNames } from '@/ui.stylex'
import * as React from 'react'
import { Separator as SeparatorPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(classNames.separator156, className)}
      {...props}
    />
  )
}

export { Separator }
