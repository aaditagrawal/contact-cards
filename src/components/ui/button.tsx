import { classNames } from '@/ui.stylex'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'

const buttonVariants = cva(classNames.button62, {
  variants: {
    variant: {
      default: classNames.badge56,
      outline: classNames.button63,
      secondary: classNames.button64,
      ghost: classNames.button65,
      destructive: classNames.button66,
      link: classNames.badge61,
    },
    size: {
      default: classNames.button67,
      xs: classNames.button68,
      sm: classNames.button69,
      lg: classNames.button70,
      icon: classNames.button71,
      'icon-xs': classNames.button72,
      'icon-sm': classNames.button73,
      'icon-lg': classNames.button74,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
