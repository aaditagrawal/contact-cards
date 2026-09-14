import { classNames } from '@/ui.stylex'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'

const badgeVariants = cva(classNames.badge55, {
  variants: {
    variant: {
      default: classNames.badge56,
      secondary: classNames.badge57,
      destructive: classNames.badge58,
      outline: classNames.badge59,
      ghost: classNames.badge60,
      link: classNames.badge61,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span'

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
