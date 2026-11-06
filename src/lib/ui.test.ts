import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Field } from '@/components/ui/field'
import { InputGroupAddon, InputGroupButton } from '@/components/ui/input-group'
import { cn } from './utils'

describe('conditional classes', () => {
  it('ignores absent classes and keeps conditional tokens in order', () => {
    expect(cn(undefined, 'flex', false, null, '', 'items-center')).toBe('flex items-center')
    expect(cn()).toBe('')
  })

  it('keeps directional and state overrides without losing unrelated utilities', () => {
    expect(cn('px-2 py-1 hover:bg-muted dark:text-foreground', 'px-4 hover:bg-accent')).toBe(
      'py-1 dark:text-foreground px-4 hover:bg-accent',
    )
    expect(cn('p-4', 'px-2')).toBe('p-4 px-2')
    expect(cn('px-2', 'p-4')).toBe('p-4')
  })
})

describe('component variants', () => {
  it('preserves button defaults, native attributes and explicit class overrides', () => {
    const html = renderToStaticMarkup(
      createElement(Button, { disabled: true, className: 'h-12 bg-accent', 'aria-label': 'Save' }),
    )
    expect(html).toContain('data-variant="default"')
    expect(html).toContain('data-size="default"')
    expect(html).toContain('disabled=""')
    expect(html).toContain('aria-label="Save"')
    expect(html).toContain('h-12 bg-accent')
    expect(html).not.toMatch(/(?:\s|")h-8(?:\s|")/)
    expect(html).not.toMatch(/(?:\s|")bg-primary(?:\s|")/)
  })

  it('keeps null variants distinct from omitted variants and supports slot composition', () => {
    const html = renderToStaticMarkup(
      createElement(
        Button,
        { variant: null, size: null, asChild: true },
        createElement('a', { href: '/contact', className: 'child' }, 'Contact'),
      ),
    )
    expect(html).toMatch(/^<a /)
    expect(html).toContain('href="/contact"')
    expect(html).toContain('child')
    expect(html).not.toContain('data-variant=')
    expect(html).not.toContain('bg-primary')
    expect(html).not.toMatch(/(?:\s|")h-8(?:\s|")/)
  })

  it('keeps field orientation and addon alignment tokens with caller overrides', () => {
    const field = renderToStaticMarkup(
      createElement(Field, { orientation: 'horizontal', className: 'gap-4' }),
    )
    expect(field).toContain('data-orientation="horizontal"')
    expect(field).toContain('flex-row')
    expect(field).toContain('gap-4')
    expect(field).not.toMatch(/(?:\s|")gap-2(?:\s|")/)
    const addon = renderToStaticMarkup(
      createElement(InputGroupAddon, { align: 'block-end', className: 'px-8' }),
    )
    expect(addon).toContain('data-align="block-end"')
    expect(addon).toContain('order-last')
    expect(addon).toContain('px-8')
    expect(addon).not.toContain('px-2.5')
  })

  it('keeps badge variants and compact input button dimensions', () => {
    const badge = renderToStaticMarkup(createElement(Badge, { variant: 'outline' }, 'Contact'))
    expect(badge).toContain('data-variant="outline"')
    expect(badge).toContain('border-border')
    expect(badge).not.toContain('bg-primary')
    const button = renderToStaticMarkup(createElement(InputGroupButton, { size: 'icon-xs' }))
    expect(button).toContain('data-size="icon-xs"')
    expect(button).toContain('size-6')
    expect(button).toContain('p-0')
    expect(button).not.toContain('px-2.5')
  })
})
