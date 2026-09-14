import { classNames } from '@/ui.stylex'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(classNames.input142, className)}
      {...props}
    />
  )
}

export { Input }
