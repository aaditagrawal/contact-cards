import { classNames } from '@/ui.stylex'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea data-slot="textarea" className={cn(classNames.textarea159, className)} {...props} />
  )
}

export { Textarea }
