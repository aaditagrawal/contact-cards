import * as stylex from '@stylexjs/stylex'
export const styles = stylex.create({
  fieldLabel: {
    display: 'flex',
    width: 'fit-content',
    gap: 'calc(var(--spacing) * 2)',
    '--tw-leading': 'var(--leading-snug)',
    lineHeight: 'var(--leading-snug)',
  },
  // Original utility group: flex flex-col gap-4
  cardPreview0: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 4)',
  },
  // Original utility group: flex items-center gap-2
  cardPreview1: {
    display: 'flex',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: size-3
  cardPreview2: {
    width: 'calc(var(--spacing) * 3)',
    height: 'calc(var(--spacing) * 3)',
  },
  // Original utility group: text-[10px] text-muted-foreground ml-1
  cardPreview3: {
    marginLeft: 'var(--spacing)',
    fontSize: '10px',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: aspect-[2/1] flex-row p-6 sm:p-8 gap-6
  cardPreview4: {
    aspectRatio: '2',
    flexDirection: 'row',
    gap: 'calc(var(--spacing) * 6)',
    padding: 'calc(var(--spacing) * 6)',
  },
  // Original utility group: aspect-[1/1.5] flex-col gap-6
  cardPreview5: {
    aspectRatio: '1 / 1.5',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 6)',
  },
  // Original utility group: text-white flex overflow-hidden
  cardPreview6: {
    display: 'flex',
    overflow: 'hidden',
    color: 'var(--color-white)',
  },
  // Original utility group: flex flex-col gap-2 flex-1 min-w-0 min-h-0 overflow-hidden
  cardPreview7: {
    display: 'flex',
    minHeight: '0',
    minWidth: '0',
    flex: '1',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 2)',
    overflow: 'hidden',
  },
  // Original utility group: font-bold leading-tight tracking-tight text-white shrink-0 text-xl sm:text-2xl
  cardPreview8: {
    flexShrink: '0',
    fontSize: 'var(--text-xl)',
    lineHeight: 'var(--leading-tight)',
    '--tw-leading': 'var(--leading-tight)',
    '--tw-font-weight': 'var(--font-weight-bold)',
    fontWeight: 'var(--font-weight-bold)',
    '--tw-tracking': 'var(--tracking-tight)',
    letterSpacing: 'var(--tracking-tight)',
    color: 'var(--color-white)',
  },
  // Original utility group: opacity-30 italic text-lg
  cardPreview9: {
    fontSize: 'var(--text-lg)',
    lineHeight: 'var(--tw-leading, var(--text-lg--line-height))',
    fontStyle: 'italic',
    opacity: '.3',
    '--tw-leading': null,
  },
  // Original utility group: text-[13px] text-white/50 leading-snug shrink-0
  cardPreview10: {
    flexShrink: '0',
    fontSize: '13px',
    '--tw-leading': 'var(--leading-snug)',
    lineHeight: 'var(--leading-snug)',
    color: '#ffffff80',
  },
  // Original utility group: grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 mt-1 min-h-0 overflow-hidden text-[13px] leading-snug
  cardPreview11: {
    marginTop: 'var(--spacing)',
    display: 'grid',
    minHeight: '0',
    gridTemplateColumns: 'auto 1fr',
    columnGap: 'calc(var(--spacing) * 3)',
    rowGap: 'calc(var(--spacing) * .5)',
    overflow: 'hidden',
    fontSize: '13px',
    '--tw-leading': 'var(--leading-snug)',
    lineHeight: 'var(--leading-snug)',
  },
  // Original utility group: text-white/40 uppercase tracking-wider shrink-0
  cardPreview12: {
    flexShrink: '0',
    '--tw-tracking': 'var(--tracking-wider)',
    letterSpacing: 'var(--tracking-wider)',
    color: '#fff6',
    textTransform: 'uppercase',
  },
  // Original utility group: text-white/90 break-words min-w-0
  cardPreview13: {
    minWidth: '0',
    overflowWrap: 'break-word',
    color: '#ffffffe6',
  },
  // Original utility group: shrink-0 flex items-end justify-end
  cardPreview14: {
    display: 'flex',
    flexShrink: '0',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  // Original utility group: border border-white/10 flex items-center justify-center
  cardPreview15: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: '#ffffff1a',
  },
  // Original utility group: text-[9px] text-white/20 text-center leading-tight
  cardPreview16: {
    textAlign: 'center',
    fontSize: '9px',
    '--tw-leading': 'var(--leading-tight)',
    lineHeight: 'var(--leading-tight)',
    color: '#fff3',
  },
  // Original utility group: flex-1 flex flex-col gap-2 min-h-0 overflow-hidden p-6 sm:p-8
  cardPreview17: {
    display: 'flex',
    minHeight: '0',
    flex: '1',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 2)',
    overflow: 'hidden',
    padding: 'calc(var(--spacing) * 6)',
  },
  // Original utility group: font-bold leading-tight tracking-tight text-white shrink-0 text-2xl sm:text-3xl
  cardPreview18: {
    flexShrink: '0',
    fontSize: 'var(--text-2xl)',
    lineHeight: 'var(--leading-tight)',
    '--tw-leading': 'var(--leading-tight)',
    '--tw-font-weight': 'var(--font-weight-bold)',
    fontWeight: 'var(--font-weight-bold)',
    '--tw-tracking': 'var(--tracking-tight)',
    letterSpacing: 'var(--tracking-tight)',
    color: 'var(--color-white)',
  },
  // Original utility group: flex-1
  cardPreview19: {
    flex: '1',
  },
  // Original utility group: shrink-0 flex justify-end
  cardPreview20: {
    display: 'flex',
    flexShrink: '0',
    justifyContent: 'flex-end',
  },
  // Original utility group: w-full
  cardPreview21: {
    width: '100%',
  },
  // Original utility group: size-3.5
  cardPreview22: {
    width: 'calc(var(--spacing) * 3.5)',
    height: 'calc(var(--spacing) * 3.5)',
  },
  // Original utility group: flex flex-col gap-3
  contactFormCustomFields23: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 3)',
  },
  // Original utility group: flex items-start gap-3
  contactFormCustomFields24: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'calc(var(--spacing) * 3)',
  },
  // Original utility group: flex items-center pt-2
  contactFormCustomFields25: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: grid flex-1 grid-cols-2 gap-2 transition-opacity
  contactFormCustomFields26: {
    display: 'grid',
    flex: '1',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 'calc(var(--spacing) * 2)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
  },
  // Original utility group: opacity-40
  contactFormCustomFields27: {
    opacity: '.4',
  },
  // Original utility group: mt-1
  contactFormCustomFields28: {
    marginTop: 'var(--spacing)',
  },
  // Original utility group: w-fit
  contactFormCustomFields29: {
    width: 'fit-content',
  },
  // Original utility group: flex flex-1 flex-col gap-1 transition-opacity
  contactFormFieldRow30: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    gap: 'var(--spacing)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
  },
  // Original utility group: text-xs
  contactFormFieldRow31: {
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-leading': null,
  },
  // Original utility group: flex flex-1 items-start gap-2 transition-opacity
  contactFormMultiField32: {
    display: 'flex',
    flex: '1',
    alignItems: 'flex-start',
    gap: 'calc(var(--spacing) * 2)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
  },
  // Original utility group: w-[100px] shrink-0
  contactFormMultiField33: {
    width: '100px',
    flexShrink: '0',
  },
  // Original utility group: mt-1 shrink-0
  contactFormMultiField34: {
    marginTop: 'var(--spacing)',
    flexShrink: '0',
  },
  // Original utility group: flex flex-col gap-6
  contactForm35: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 6)',
  },
  // Original utility group: text-xs font-medium text-muted-foreground uppercase tracking-wider
  contactForm36: {
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-font-weight': 'var(--font-weight-medium)',
    fontWeight: 'var(--font-weight-medium)',
    '--tw-tracking': 'var(--tracking-wider)',
    letterSpacing: 'var(--tracking-wider)',
    color: 'var(--muted-foreground)',
    textTransform: 'uppercase',
    '--tw-leading': null,
  },
  // Original utility group: flex items-center gap-3
  contactForm37: {
    display: 'flex',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 3)',
  },
  // Original utility group: flex flex-col gap-1
  contactForm38: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing)',
  },
  // Original utility group: grid grid-cols-2 gap-3
  contactForm39: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 'calc(var(--spacing) * 3)',
  },
  // Original utility group: text-xs text-muted-foreground
  contactForm40: {
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: grid grid-cols-[1fr_0.6fr_1fr] gap-3
  contactForm41: {
    display: 'grid',
    gridTemplateColumns: '1fr .6fr 1fr',
    gap: 'calc(var(--spacing) * 3)',
  },
  // Original utility group: w-[100px]
  contactForm42: {
    width: '100px',
  },
  // Original utility group: flex flex-col gap-2 pl-7 transition-opacity
  contactForm43: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 2)',
    paddingLeft: 'calc(var(--spacing) * 7)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
  },
  // Original utility group: opacity-40 pointer-events-none
  contactForm44: {
    pointerEvents: 'none',
    opacity: '.4',
  },
  // Original utility group: grid grid-cols-2 gap-2
  contactForm45: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: w-[120px] shrink-0
  contactForm46: {
    width: '120px',
    flexShrink: '0',
  },
  // Original utility group: size-4
  themeToggle47: {
    width: 'calc(var(--spacing) * 4)',
    height: 'calc(var(--spacing) * 4)',
  },
  // Original utility group: data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50
  alertDialog48: {
    position: 'fixed',
    inset: '0',
    zIndex: '50',
    backgroundColor: '#0000001a',
    '--tw-duration': '.1s',
    transitionDuration: '.1s',
  },
  // Original utility group: data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-background ring-foreground/10 gap-4 rounded-none p-4 ring-1 duration-100 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none
  alertDialog49: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: '50',
    display: 'grid',
    width: '100%',
    '--tw-translate-x': 'calc(calc(1 / 2 * 100%) * -1)',
    translate: 'var(--tw-translate-x) var(--tw-translate-y)',
    '--tw-translate-y': 'calc(calc(1 / 2 * 100%) * -1)',
    gap: 'calc(var(--spacing) * 4)',
    borderRadius: '0',
    backgroundColor: 'var(--background)',
    padding: 'calc(var(--spacing) * 4)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-ring-color': 'var(--foreground)',
    '--tw-duration': '.1s',
    transitionDuration: '.1s',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
  },
  // Original utility group: grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]
  alertDialog50: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    placeItems: 'center',
    gap: 'calc(var(--spacing) * 1.5)',
    textAlign: 'center',
  },
  // Original utility group: flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end
  alertDialog51: {
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: bg-muted mb-2 inline-flex size-10 items-center justify-center rounded-none sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6
  alertDialog52: {
    marginBottom: 'calc(var(--spacing) * 2)',
    display: 'inline-flex',
    width: 'calc(var(--spacing) * 10)',
    height: 'calc(var(--spacing) * 10)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0',
    backgroundColor: 'var(--muted)',
  },
  // Original utility group: text-sm font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2
  alertDialog53: {
    fontSize: 'var(--text-sm)',
    lineHeight: 'var(--tw-leading, var(--text-sm--line-height))',
    '--tw-font-weight': 'var(--font-weight-medium)',
    fontWeight: 'var(--font-weight-medium)',
    '--tw-leading': null,
  },
  // Original utility group: text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3
  alertDialog54: {
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--leading-relaxed)',
    textWrap: 'balance',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: h-5 gap-1 rounded-none border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge
  badge55: {
    display: 'inline-flex',
    height: 'calc(var(--spacing) * 5)',
    width: 'fit-content',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing)',
    overflow: 'hidden',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: '#0000',
    paddingInline: 'calc(var(--spacing) * 2)',
    paddingBlock: 'calc(var(--spacing) * .5)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-font-weight': 'var(--font-weight-medium)',
    fontWeight: 'var(--font-weight-medium)',
    whiteSpace: 'nowrap',
    transitionProperty: 'all',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-leading': null,
  },
  // Original utility group: bg-primary text-primary-foreground [a]:hover:bg-primary/80
  badge56: {
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
  },
  // Original utility group: bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80
  badge57: {
    backgroundColor: 'var(--secondary)',
    color: 'var(--secondary-foreground)',
  },
  // Original utility group: bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20
  badge58: {
    // Preserve the original opaque fallback; supported browsers use 10% opacity.
    backgroundColor: {
      default: 'var(--destructive)',
      '@supports (color: color-mix(in lab, red, red))':
        'color-mix(in oklab, var(--destructive) 10%, transparent)',
    },
    color: 'var(--destructive)',
  },
  // Original utility group: border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground
  badge59: {
    borderColor: 'var(--border)',
    color: 'var(--foreground)',
  },
  // Original utility group: hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50
  badge60: {},
  // Original utility group: text-primary underline-offset-4 hover:underline
  badge61: {
    color: 'var(--primary)',
    textUnderlineOffset: '4px',
  },
  // Original utility group: focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-none border border-transparent bg-clip-padding text-xs font-medium focus-visible:ring-1 aria-invalid:ring-1 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none
  button62: {
    display: 'inline-flex',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: '#0000',
    backgroundClip: 'padding-box',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-font-weight': 'var(--font-weight-medium)',
    fontWeight: 'var(--font-weight-medium)',
    whiteSpace: 'nowrap',
    transitionProperty: 'all',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '--tw-leading': null,
  },
  // Original utility group: border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground
  button63: {
    borderColor: 'var(--border)',
    backgroundColor: 'var(--background)',
  },
  // Original utility group: bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground
  button64: {
    backgroundColor: 'var(--secondary)',
    color: 'var(--secondary-foreground)',
  },
  // Original utility group: hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground
  button65: {},
  // Original utility group: bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30
  button66: {
    // Preserve the original opaque fallback; supported browsers use 10% opacity.
    backgroundColor: {
      default: 'var(--destructive)',
      '@supports (color: color-mix(in lab, red, red))':
        'color-mix(in oklab, var(--destructive) 10%, transparent)',
    },
    color: 'var(--destructive)',
  },
  // Original utility group: h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2
  button67: {
    height: 'calc(var(--spacing) * 8)',
    gap: 'calc(var(--spacing) * 1.5)',
    paddingInline: 'calc(var(--spacing) * 2.5)',
  },
  // Original utility group: h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3
  button68: {
    height: 'calc(var(--spacing) * 6)',
    gap: 'var(--spacing)',
    borderRadius: '0',
    paddingInline: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-leading': null,
  },
  // Original utility group: h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5
  button69: {
    height: 'calc(var(--spacing) * 7)',
    gap: 'var(--spacing)',
    borderRadius: '0',
    paddingInline: 'calc(var(--spacing) * 2.5)',
  },
  // Original utility group: h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3
  button70: {
    height: 'calc(var(--spacing) * 9)',
    gap: 'calc(var(--spacing) * 1.5)',
    paddingInline: 'calc(var(--spacing) * 2.5)',
  },
  // Original utility group: size-8
  button71: {
    width: 'calc(var(--spacing) * 8)',
    height: 'calc(var(--spacing) * 8)',
  },
  // Original utility group: size-6 rounded-none [&_svg:not([class*='size-'])]:size-3
  button72: {
    width: 'calc(var(--spacing) * 6)',
    height: 'calc(var(--spacing) * 6)',
    borderRadius: '0',
  },
  // Original utility group: size-7 rounded-none
  button73: {
    width: 'calc(var(--spacing) * 7)',
    height: 'calc(var(--spacing) * 7)',
    borderRadius: '0',
  },
  // Original utility group: size-9
  button74: {
    width: 'calc(var(--spacing) * 9)',
    height: 'calc(var(--spacing) * 9)',
  },
  // Original utility group: ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-none py-4 text-xs/relaxed ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-2 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none group/card flex flex-col
  card75: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 4)',
    overflow: 'hidden',
    borderRadius: '0',
    backgroundColor: 'var(--card)',
    paddingBlock: 'calc(var(--spacing) * 4)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--leading-relaxed)',
    color: 'var(--card-foreground)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-ring-color': 'var(--foreground)',
    '--tw-leading': null,
  },
  // Original utility group: gap-1 rounded-none px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]
  card76: {
    container: 'card-header / inline-size',
    display: 'grid',
    gridAutoRows: 'min-content',
    alignItems: 'flex-start',
    gap: 'var(--spacing)',
    borderRadius: '0',
    paddingInline: 'calc(var(--spacing) * 4)',
  },
  // Original utility group: text-sm font-medium group-data-[size=sm]/card:text-sm
  card77: {
    fontSize: 'var(--text-sm)',
    lineHeight: 'var(--tw-leading, var(--text-sm--line-height))',
    '--tw-font-weight': 'var(--font-weight-medium)',
    fontWeight: 'var(--font-weight-medium)',
    '--tw-leading': null,
  },
  // Original utility group: text-muted-foreground text-xs/relaxed
  card78: {
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--leading-relaxed)',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: col-start-2 row-span-2 row-start-1 self-start justify-self-end
  card79: {
    gridColumnStart: '2',
    gridRow: 'span 2 / span 2',
    gridRowStart: '1',
    alignSelf: 'flex-start',
    justifySelf: 'flex-end',
  },
  // Original utility group: px-4 group-data-[size=sm]/card:px-3
  card80: {
    paddingInline: 'calc(var(--spacing) * 4)',
  },
  // Original utility group: rounded-none border-t p-4 group-data-[size=sm]/card:p-3 flex items-center
  card81: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0',
    borderTopStyle: 'var(--tw-border-style)',
    borderTopWidth: '1px',
    padding: 'calc(var(--spacing) * 4)',
  },
  // Original utility group: border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-none border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-1 aria-invalid:ring-1 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50
  checkbox82: {
    position: 'relative',
    display: 'flex',
    width: 'calc(var(--spacing) * 4)',
    height: 'calc(var(--spacing) * 4)',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: 'var(--input)',
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
  },
  // Original utility group: [&>svg]:size-3.5 grid place-content-center text-current transition-none
  checkbox83: {
    display: 'grid',
    placeContent: 'center',
    color: 'currentColor',
    transitionProperty: 'none',
  },
  // Original utility group: [&_svg:not([class*='size-'])]:size-4
  combobox84: {},
  // Original utility group: text-muted-foreground size-4 pointer-events-none
  combobox85: {
    pointerEvents: 'none',
    width: 'calc(var(--spacing) * 4)',
    height: 'calc(var(--spacing) * 4)',
    color: 'var(--muted-foreground)',
  },
  // Original utility group: pointer-events-none
  combobox86: {
    pointerEvents: 'none',
  },
  // Original utility group: w-auto
  combobox87: {
    width: 'auto',
  },
  // Original utility group: group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent
  combobox88: {},
  // Original utility group: isolate z-50
  combobox89: {
    isolation: 'isolate',
    zIndex: '50',
  },
  // Original utility group: bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 max-h-72 min-w-36 overflow-hidden rounded-none shadow-md ring-1 duration-100 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) data-[chips=true]:min-w-(--anchor-width)
  combobox90: {
    position: 'relative',
    maxHeight: 'calc(var(--spacing) * 72)',
    width: 'var(--anchor-width)',
    maxWidth: 'var(--available-width)',
    minWidth: 'calc(var(--anchor-width) + calc(var(--spacing) * 7))',
    transformOrigin: 'var(--transform-origin)',
    overflow: 'hidden',
    borderRadius: '0',
    backgroundColor: 'var(--popover)',
    color: 'var(--popover-foreground)',
    '--tw-shadow':
      '0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
    '--tw-ring-color': 'var(--foreground)',
    '--tw-duration': '.1s',
    transitionDuration: '.1s',
  },
  // Original utility group: no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto data-empty:p-0 overflow-y-auto overscroll-contain
  combobox91: {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    maxHeight:
      'min(calc(calc(var(--spacing) * 72) - calc(var(--spacing) * 9)), calc(var(--available-height) - calc(var(--spacing) * 9)))',
    scrollPaddingBlock: 'var(--spacing)',
    overflowY: 'auto',
    overscrollBehavior: 'contain',
  },
  // Original utility group: data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0
  combobox92: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    cursor: 'default',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
    borderRadius: '0',
    paddingBlock: 'calc(var(--spacing) * 2)',
    paddingRight: 'calc(var(--spacing) * 8)',
    paddingLeft: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '--tw-leading': null,
  },
  // Original utility group: pointer-events-none absolute right-2 flex size-4 items-center justify-center
  combobox93: {
    pointerEvents: 'none',
    position: 'absolute',
    right: 'calc(var(--spacing) * 2)',
    display: 'flex',
    width: 'calc(var(--spacing) * 4)',
    height: 'calc(var(--spacing) * 4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Original utility group: text-muted-foreground px-2 py-2 text-xs
  combobox94: {
    paddingInline: 'calc(var(--spacing) * 2)',
    paddingBlock: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: text-muted-foreground hidden w-full justify-center py-2 text-center text-xs group-data-empty/combobox-content:flex
  combobox95: {
    display: 'none',
    width: '100%',
    justifyContent: 'center',
    paddingBlock: 'calc(var(--spacing) * 2)',
    textAlign: 'center',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: bg-border -mx-1 h-px
  combobox96: {
    marginInline: 'calc(var(--spacing) * -1)',
    height: '1px',
    backgroundColor: 'var(--border)',
  },
  // Original utility group: dark:bg-input/30 border-input focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive dark:has-aria-invalid:border-destructive/50 flex min-h-8 flex-wrap items-center gap-1 rounded-none border bg-transparent bg-clip-padding px-2.5 py-1 text-xs transition-colors focus-within:ring-1 has-aria-invalid:ring-1 has-data-[slot=combobox-chip]:px-1
  combobox97: {
    display: 'flex',
    minHeight: 'calc(var(--spacing) * 8)',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 'var(--spacing)',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: 'var(--input)',
    backgroundColor: '#0000',
    backgroundClip: 'padding-box',
    paddingInline: 'calc(var(--spacing) * 2.5)',
    paddingBlock: 'var(--spacing)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-leading': null,
  },
  // Original utility group: bg-muted text-foreground flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-none px-1.5 text-xs font-medium whitespace-nowrap has-data-[slot=combobox-chip-remove]:pr-0 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50
  combobox98: {
    display: 'flex',
    height: 'calc(calc(var(--spacing) * 5.25))',
    width: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing)',
    borderRadius: '0',
    backgroundColor: 'var(--muted)',
    paddingInline: 'calc(var(--spacing) * 1.5)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-font-weight': 'var(--font-weight-medium)',
    fontWeight: 'var(--font-weight-medium)',
    whiteSpace: 'nowrap',
    color: 'var(--foreground)',
    '--tw-leading': null,
  },
  // Original utility group: -ml-1 opacity-50 hover:opacity-100
  combobox99: {
    marginLeft: 'calc(var(--spacing) * -1)',
    opacity: '.5',
  },
  // Original utility group: min-w-16 flex-1 outline-none
  combobox100: {
    minWidth: 'calc(var(--spacing) * 16)',
    flex: '1',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
  },
  // Original utility group: data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-none shadow-md ring-1 duration-100 z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto data-[state=closed]:overflow-hidden
  dropdownMenu101: {
    zIndex: '50',
    maxHeight: 'var(--radix-dropdown-menu-content-available-height)',
    width: 'var(--radix-dropdown-menu-trigger-width)',
    minWidth: 'calc(var(--spacing) * 32)',
    transformOrigin: 'var(--radix-dropdown-menu-content-transform-origin)',
    overflowX: 'hidden',
    overflowY: 'auto',
    borderRadius: '0',
    backgroundColor: 'var(--popover)',
    color: 'var(--popover-foreground)',
    '--tw-shadow':
      '0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
    '--tw-ring-color': 'var(--foreground)',
    '--tw-duration': '.1s',
    transitionDuration: '.1s',
  },
  // Original utility group: focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none px-2 py-2 text-xs [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0
  dropdownMenu102: {
    position: 'relative',
    display: 'flex',
    cursor: 'default',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
    borderRadius: '0',
    paddingInline: 'calc(var(--spacing) * 2)',
    paddingBlock: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '--tw-leading': null,
  },
  // Original utility group: focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0
  dropdownMenu103: {
    position: 'relative',
    display: 'flex',
    cursor: 'default',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
    borderRadius: '0',
    paddingBlock: 'calc(var(--spacing) * 2)',
    paddingRight: 'calc(var(--spacing) * 8)',
    paddingLeft: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '--tw-leading': null,
  },
  // Original utility group: pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none
  dropdownMenu104: {
    pointerEvents: 'none',
    position: 'absolute',
    right: 'calc(var(--spacing) * 2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Original utility group: text-muted-foreground px-2 py-2 text-xs data-[inset]:pl-8
  dropdownMenu105: {
    paddingInline: 'calc(var(--spacing) * 2)',
    paddingBlock: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest
  dropdownMenu106: {
    marginLeft: 'auto',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-tracking': 'var(--tracking-widest)',
    letterSpacing: 'var(--tracking-widest)',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none px-2 py-2 text-xs [&_svg:not([class*='size-'])]:size-4 flex cursor-default items-center outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0
  dropdownMenu107: {
    display: 'flex',
    cursor: 'default',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
    borderRadius: '0',
    paddingInline: 'calc(var(--spacing) * 2)',
    paddingBlock: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '--tw-leading': null,
  },
  // Original utility group: ml-auto
  dropdownMenu108: {
    marginLeft: 'auto',
  },
  // Original utility group: data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-[96px] rounded-none shadow-lg ring-1 duration-100 z-50 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden
  dropdownMenu109: {
    zIndex: '50',
    minWidth: '96px',
    transformOrigin: 'var(--radix-dropdown-menu-content-transform-origin)',
    overflow: 'hidden',
    borderRadius: '0',
    backgroundColor: 'var(--popover)',
    color: 'var(--popover-foreground)',
    '--tw-shadow':
      '0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
    '--tw-ring-color': 'var(--foreground)',
    '--tw-duration': '.1s',
    transitionDuration: '.1s',
  },
  // Original utility group: gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col
  field110: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 4)',
  },
  // Original utility group: mb-2.5 font-medium data-[variant=label]:text-xs data-[variant=legend]:text-sm
  field111: {
    marginBottom: 'calc(var(--spacing) * 2.5)',
    '--tw-font-weight': 'var(--font-weight-medium)',
    fontWeight: 'var(--font-weight-medium)',
  },
  // Original utility group: gap-5 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4 group/field-group @container/field-group flex w-full flex-col
  field112: {
    container: 'field-group / inline-size',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 5)',
  },
  // Original utility group: data-[invalid=true]:text-destructive gap-2 group/field flex w-full
  field113: {
    display: 'flex',
    width: '100%',
    gap: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: flex-col [&>*]:w-full [&>.sr-only]:w-auto
  field114: {
    flexDirection: 'column',
  },
  // Original utility group: flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px
  field115: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Original utility group: flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px
  field116: {
    flexDirection: 'column',
  },
  // Original utility group: group
  field117: {},
  // Original utility group: gap-0.5 group/field-content flex flex-1 flex-col leading-snug
  field118: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * .5)',
    '--tw-leading': 'var(--leading-snug)',
    lineHeight: 'var(--leading-snug)',
  },
  // Original utility group: has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col
  field119: {},
  // Original utility group: gap-2 text-xs/relaxed group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug
  field120: {
    display: 'flex',
    width: 'fit-content',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--leading-snug)',
    '--tw-leading': 'var(--leading-snug)',
  },
  // Original utility group: text-muted-foreground text-left text-xs/relaxed [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance
  field121: {
    textAlign: 'left',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--leading-normal)',
    '--tw-leading': 'var(--leading-normal)',
    '--tw-font-weight': 'var(--font-weight-normal)',
    fontWeight: 'var(--font-weight-normal)',
    color: 'var(--muted-foreground)',
  },
  // Original utility group: last:mt-0 nth-last-2:-mt-1
  field122: {},
  // Original utility group: [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4
  field123: {},
  // Original utility group: -my-2 h-5 text-xs group-data-[variant=outline]/field-group:-mb-2 relative
  field124: {
    position: 'relative',
    marginBlock: 'calc(var(--spacing) * -2)',
    height: 'calc(var(--spacing) * 5)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-leading': null,
  },
  // Original utility group: absolute inset-0 top-1/2
  field125: {
    position: 'absolute',
    inset: '0',
    top: '50%',
  },
  // Original utility group: text-muted-foreground px-2 bg-background relative mx-auto block w-fit
  field126: {
    position: 'relative',
    marginInline: 'auto',
    display: 'block',
    width: 'fit-content',
    backgroundColor: 'var(--background)',
    paddingInline: 'calc(var(--spacing) * 2)',
    color: 'var(--muted-foreground)',
  },
  // Original utility group: ml-4 flex list-disc flex-col gap-1
  field127: {
    marginLeft: 'calc(var(--spacing) * 4)',
    display: 'flex',
    listStyleType: 'disc',
    flexDirection: 'column',
    gap: 'var(--spacing)',
  },
  // Original utility group: text-destructive text-xs font-normal
  field128: {
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-font-weight': 'var(--font-weight-normal)',
    fontWeight: 'var(--font-weight-normal)',
    color: 'var(--destructive)',
    '--tw-leading': null,
  },
  // Original utility group: border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-none border transition-colors has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot][aria-invalid=true]]:ring-1 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 [[data-slot=combobox-content]_&]:focus-within:border-inherit [[data-slot=combobox-content]_&]:focus-within:ring-0 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto
  inputGroup129: {
    position: 'relative',
    display: 'flex',
    height: 'calc(var(--spacing) * 8)',
    width: '100%',
    minWidth: '0',
    alignItems: 'center',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: 'var(--input)',
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
  },
  // Original utility group: text-muted-foreground h-auto gap-2 py-1.5 text-xs font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-none [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none
  inputGroup130: {
    display: 'flex',
    height: 'auto',
    cursor: 'text',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'calc(var(--spacing) * 2)',
    paddingBlock: 'calc(var(--spacing) * 1.5)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-font-weight': 'var(--font-weight-medium)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--muted-foreground)',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '--tw-leading': null,
  },
  // Original utility group: pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first
  inputGroup131: {
    order: '-9999',
    paddingLeft: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last
  inputGroup132: {
    order: '9999',
    paddingRight: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start
  inputGroup133: {
    order: '-9999',
    width: '100%',
    justifyContent: 'flex-start',
    paddingInline: 'calc(var(--spacing) * 2.5)',
    paddingTop: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start
  inputGroup134: {
    order: '9999',
    width: '100%',
    justifyContent: 'flex-start',
    paddingInline: 'calc(var(--spacing) * 2.5)',
    paddingBottom: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: gap-2 text-xs shadow-none flex items-center
  inputGroup135: {
    display: 'flex',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-shadow': '0 0 #0000',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-leading': null,
  },
  // Original utility group: h-6 gap-1 rounded-none px-1.5 [&>svg:not([class*='size-'])]:size-3.5
  inputGroup136: {
    height: 'calc(var(--spacing) * 6)',
    gap: 'var(--spacing)',
    borderRadius: '0',
    paddingInline: 'calc(var(--spacing) * 1.5)',
  },
  // Original utility group: size-6 rounded-none p-0 has-[>svg]:p-0
  inputGroup137: {
    width: 'calc(var(--spacing) * 6)',
    height: 'calc(var(--spacing) * 6)',
    borderRadius: '0',
    padding: '0',
  },
  // Original utility group: size-8 p-0 has-[>svg]:p-0
  inputGroup138: {
    width: 'calc(var(--spacing) * 8)',
    height: 'calc(var(--spacing) * 8)',
    padding: '0',
  },
  // Original utility group: text-muted-foreground gap-2 text-xs [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none
  inputGroup139: {
    display: 'flex',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1
  inputGroup140: {
    flex: '1',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '0',
    backgroundColor: '#0000',
    '--tw-shadow': '0 0 #0000',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
  },
  // Original utility group: rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1 resize-none
  inputGroup141: {
    flex: '1',
    resize: 'none',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '0',
    backgroundColor: '#0000',
    paddingBlock: 'calc(var(--spacing) * 2)',
    '--tw-shadow': '0 0 #0000',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
  },
  // Original utility group: dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-none border bg-transparent px-2.5 py-1 text-xs transition-colors file:h-6 file:text-xs file:font-medium focus-visible:ring-1 aria-invalid:ring-1 md:text-xs file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
  input142: {
    height: 'calc(var(--spacing) * 8)',
    width: '100%',
    minWidth: '0',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: 'var(--input)',
    backgroundColor: '#0000',
    paddingInline: 'calc(var(--spacing) * 2.5)',
    paddingBlock: 'var(--spacing)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
    '--tw-leading': null,
  },
  // Original utility group: gap-2 text-xs leading-none group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed
  label143: {
    display: 'flex',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: '1',
    '--tw-leading': '1',
    WebkitUserSelect: 'none',
    userSelect: 'none',
  },
  // Original utility group: relative
  scrollArea144: {
    position: 'relative',
  },
  // Original utility group: focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1
  scrollArea145: {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    transitionProperty: 'color, box-shadow',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
  },
  // Original utility group: data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none
  scrollArea146: {
    display: 'flex',
    touchAction: 'none',
    padding: '1px',
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    WebkitUserSelect: 'none',
    userSelect: 'none',
  },
  // Original utility group: rounded-none bg-border relative flex-1
  scrollArea147: {
    position: 'relative',
    flex: '1',
    borderRadius: '0',
    backgroundColor: 'var(--border)',
  },
  // Original utility group: scroll-my-1
  select148: {
    scrollMarginBlock: 'var(--spacing)',
  },
  // Original utility group: border-input data-[placeholder]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-none border bg-transparent py-2 pr-2 pl-2.5 text-xs transition-colors select-none focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-none *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0
  select149: {
    display: 'flex',
    width: 'fit-content',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'calc(var(--spacing) * 1.5)',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: 'var(--input)',
    backgroundColor: '#0000',
    paddingBlock: 'calc(var(--spacing) * 2)',
    paddingRight: 'calc(var(--spacing) * 2)',
    paddingLeft: 'calc(var(--spacing) * 2.5)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    whiteSpace: 'nowrap',
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '--tw-leading': null,
  },
  // Original utility group: bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-none shadow-md ring-1 duration-100 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto data-[align-trigger=true]:animate-none
  select150: {
    position: 'relative',
    zIndex: '50',
    maxHeight: 'var(--radix-select-content-available-height)',
    minWidth: 'calc(var(--spacing) * 36)',
    transformOrigin: 'var(--radix-select-content-transform-origin)',
    overflowX: 'hidden',
    overflowY: 'auto',
    borderRadius: '0',
    backgroundColor: 'var(--popover)',
    color: 'var(--popover-foreground)',
    '--tw-shadow':
      '0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
    '--tw-ring-color': 'var(--foreground)',
    '--tw-duration': '.1s',
    transitionDuration: '.1s',
  },
  // Original utility group: data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1
  select151: {},
  // Original utility group: data-[position=popper]:h-[var(--radix-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--radix-select-trigger-width)]
  select152: {},
  // Original utility group: focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0
  select153: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    cursor: 'default',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 2)',
    borderRadius: '0',
    paddingBlock: 'calc(var(--spacing) * 2)',
    paddingRight: 'calc(var(--spacing) * 8)',
    paddingLeft: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '--tw-leading': null,
  },
  // Original utility group: bg-border -mx-1 h-px pointer-events-none
  select154: {
    pointerEvents: 'none',
    marginInline: 'calc(var(--spacing) * -1)',
    height: '1px',
    backgroundColor: 'var(--border)',
  },
  // Original utility group: bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4
  select155: {
    zIndex: '10',
    display: 'flex',
    cursor: 'default',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--popover)',
    paddingBlock: 'var(--spacing)',
  },
  // Original utility group: bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch
  separator156: {
    flexShrink: '0',
    backgroundColor: 'var(--border)',
  },
  // Original utility group: data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50
  switch157: {
    position: 'relative',
    display: 'inline-flex',
    flexShrink: '0',
    alignItems: 'center',
    borderRadius: '2147480000px',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: '#0000',
    transitionProperty: 'all',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
  },
  // Original utility group: bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform
  switch158: {
    pointerEvents: 'none',
    display: 'block',
    borderRadius: '2147480000px',
    backgroundColor: 'var(--background)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    transitionProperty: 'transform, translate, scale, rotate',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
  },
  // Original utility group: border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-none border bg-transparent px-2.5 py-2 text-xs transition-colors focus-visible:ring-1 aria-invalid:ring-1 md:text-xs placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50
  textarea159: {
    display: 'flex',
    fieldSizing: 'content',
    minHeight: 'calc(var(--spacing) * 16)',
    width: '100%',
    borderRadius: '0',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    borderColor: 'var(--input)',
    backgroundColor: '#0000',
    paddingInline: 'calc(var(--spacing) * 2.5)',
    paddingBlock: 'calc(var(--spacing) * 2)',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
    '--tw-outline-style': 'none',
    outlineStyle: 'none',
    '--tw-leading': null,
  },
  // Original utility group: bg-background min-h-screen flex flex-col
  index160: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundColor: 'var(--background)',
  },
  // Original utility group: border-b shrink-0
  index161: {
    flexShrink: '0',
    borderBottomStyle: 'var(--tw-border-style)',
    borderBottomWidth: '1px',
  },
  // Original utility group: mx-auto w-full max-w-5xl px-4 md:px-6 py-3 flex items-center justify-between
  index162: {
    marginInline: 'auto',
    display: 'flex',
    width: '100%',
    maxWidth: 'var(--container-5xl)',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: 'calc(var(--spacing) * 4)',
    paddingBlock: 'calc(var(--spacing) * 3)',
  },
  // Original utility group: size-4 text-primary
  index163: {
    width: 'calc(var(--spacing) * 4)',
    height: 'calc(var(--spacing) * 4)',
    color: 'var(--primary)',
  },
  // Original utility group: text-xs font-semibold uppercase tracking-wider
  index164: {
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--tw-leading, var(--text-xs--line-height))',
    '--tw-font-weight': 'var(--font-weight-semibold)',
    fontWeight: 'var(--font-weight-semibold)',
    '--tw-tracking': 'var(--tracking-wider)',
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase',
    '--tw-leading': null,
  },
  // Original utility group: mx-auto w-full max-w-5xl p-4 md:p-6 pb-0 md:pb-0
  index165: {
    marginInline: 'auto',
    width: '100%',
    maxWidth: 'var(--container-5xl)',
    padding: 'calc(var(--spacing) * 4)',
    paddingBottom: '0',
  },
  // Original utility group: text-sm text-muted-foreground max-w-xl
  index166: {
    maxWidth: 'var(--container-xl)',
    fontSize: 'var(--text-sm)',
    lineHeight: 'var(--tw-leading, var(--text-sm--line-height))',
    color: 'var(--muted-foreground)',
    '--tw-leading': null,
  },
  // Original utility group: mx-auto w-full max-w-5xl flex-1 grid md:grid-cols-2 gap-6 p-4 md:p-6
  index167: {
    marginInline: 'auto',
    display: 'grid',
    width: '100%',
    maxWidth: 'var(--container-5xl)',
    flex: '1',
    gap: 'calc(var(--spacing) * 6)',
    padding: 'calc(var(--spacing) * 4)',
  },
  // Original utility group: md:h-[calc(100vh-4rem)]
  index168: {},
  // Original utility group: pr-4
  index169: {
    paddingRight: 'calc(var(--spacing) * 4)',
  },
  // Original utility group: md:sticky md:top-6 md:self-start flex flex-col gap-4
  index170: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 4)',
  },
  // Original utility group: flex flex-col gap-2
  index171: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc(var(--spacing) * 2)',
  },
  // Original utility group: text-[10px] text-muted-foreground uppercase tracking-wider
  index172: {
    fontSize: '10px',
    '--tw-tracking': 'var(--tracking-wider)',
    letterSpacing: 'var(--tracking-wider)',
    color: 'var(--muted-foreground)',
    textTransform: 'uppercase',
    '--tw-leading': null,
  },
  // Original utility group: flex items-center gap-1.5
  index173: {
    display: 'flex',
    alignItems: 'center',
    gap: 'calc(var(--spacing) * 1.5)',
  },
  // Original utility group: ring-2 ring-primary ring-offset-1 ring-offset-background scale-110
  index174: {
    '--tw-scale-x': '110%',
    '--tw-scale-y': '110%',
    '--tw-scale-z': '110%',
    scale: 'var(--tw-scale-x) var(--tw-scale-y)',
    '--tw-ring-shadow':
      'var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor)',
    boxShadow:
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
    '--tw-ring-color': 'var(--primary)',
    '--tw-ring-offset-width': '1px',
    '--tw-ring-offset-shadow':
      'var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
    '--tw-ring-offset-color': 'var(--background)',
  },
  // Original utility group: border-border hover:scale-110
  index175: {
    borderColor: 'var(--border)',
  },
  // Original utility group: size-5 border transition-all
  index176: {
    width: 'calc(var(--spacing) * 5)',
    height: 'calc(var(--spacing) * 5)',
    borderStyle: 'var(--tw-border-style)',
    borderWidth: '1px',
    transitionProperty: 'all',
    transitionTimingFunction: 'var(--tw-ease, var(--default-transition-timing-function))',
    transitionDuration: 'var(--tw-duration, var(--default-transition-duration))',
  },
})
export const classNames = {
  fieldLabel: `${stylex.props(styles.fieldLabel).className ?? ''} contact-fieldLabel group/field-label peer/field-label`,
  cardPreview0: `${stylex.props(styles.cardPreview0).className ?? ''} contact-cardPreview0`,
  cardPreview1: `${stylex.props(styles.cardPreview1).className ?? ''} contact-cardPreview1`,
  cardPreview2: `${stylex.props(styles.cardPreview2).className ?? ''} contact-cardPreview2`,
  cardPreview3: `${stylex.props(styles.cardPreview3).className ?? ''} contact-cardPreview3`,
  cardPreview4: `${stylex.props(styles.cardPreview4).className ?? ''} contact-cardPreview4`,
  cardPreview5: `${stylex.props(styles.cardPreview5).className ?? ''} contact-cardPreview5`,
  cardPreview6: `${stylex.props(styles.cardPreview6).className ?? ''} contact-cardPreview6`,
  cardPreview7: `${stylex.props(styles.cardPreview7).className ?? ''} contact-cardPreview7`,
  cardPreview8: `${stylex.props(styles.cardPreview8).className ?? ''} contact-cardPreview8`,
  cardPreview9: `${stylex.props(styles.cardPreview9).className ?? ''} contact-cardPreview9`,
  cardPreview10: `${stylex.props(styles.cardPreview10).className ?? ''} contact-cardPreview10`,
  cardPreview11: `${stylex.props(styles.cardPreview11).className ?? ''} contact-cardPreview11`,
  cardPreview12: `${stylex.props(styles.cardPreview12).className ?? ''} contact-cardPreview12`,
  cardPreview13: `${stylex.props(styles.cardPreview13).className ?? ''} contact-cardPreview13`,
  cardPreview14: `${stylex.props(styles.cardPreview14).className ?? ''} contact-cardPreview14`,
  cardPreview15: `${stylex.props(styles.cardPreview15).className ?? ''} contact-cardPreview15`,
  cardPreview16: `${stylex.props(styles.cardPreview16).className ?? ''} contact-cardPreview16`,
  cardPreview17: `${stylex.props(styles.cardPreview17).className ?? ''} contact-cardPreview17`,
  cardPreview18: `${stylex.props(styles.cardPreview18).className ?? ''} contact-cardPreview18`,
  cardPreview19: `${stylex.props(styles.cardPreview19).className ?? ''} contact-cardPreview19`,
  cardPreview20: `${stylex.props(styles.cardPreview20).className ?? ''} contact-cardPreview20`,
  cardPreview21: `${stylex.props(styles.cardPreview21).className ?? ''} contact-cardPreview21`,
  cardPreview22: `${stylex.props(styles.cardPreview22).className ?? ''} contact-cardPreview22`,
  contactFormCustomFields23: `${stylex.props(styles.contactFormCustomFields23).className ?? ''} contact-contactFormCustomFields23`,
  contactFormCustomFields24: `${stylex.props(styles.contactFormCustomFields24).className ?? ''} contact-contactFormCustomFields24`,
  contactFormCustomFields25: `${stylex.props(styles.contactFormCustomFields25).className ?? ''} contact-contactFormCustomFields25`,
  contactFormCustomFields26: `${stylex.props(styles.contactFormCustomFields26).className ?? ''} contact-contactFormCustomFields26`,
  contactFormCustomFields27: `${stylex.props(styles.contactFormCustomFields27).className ?? ''} contact-contactFormCustomFields27`,
  contactFormCustomFields28: `${stylex.props(styles.contactFormCustomFields28).className ?? ''} contact-contactFormCustomFields28`,
  contactFormCustomFields29: `${stylex.props(styles.contactFormCustomFields29).className ?? ''} contact-contactFormCustomFields29`,
  contactFormFieldRow30: `${stylex.props(styles.contactFormFieldRow30).className ?? ''} contact-contactFormFieldRow30`,
  contactFormFieldRow31: `${stylex.props(styles.contactFormFieldRow31).className ?? ''} contact-contactFormFieldRow31`,
  contactFormMultiField32: `${stylex.props(styles.contactFormMultiField32).className ?? ''} contact-contactFormMultiField32`,
  contactFormMultiField33: `${stylex.props(styles.contactFormMultiField33).className ?? ''} contact-contactFormMultiField33`,
  contactFormMultiField34: `${stylex.props(styles.contactFormMultiField34).className ?? ''} contact-contactFormMultiField34`,
  contactForm35: `${stylex.props(styles.contactForm35).className ?? ''} contact-contactForm35`,
  contactForm36: `${stylex.props(styles.contactForm36).className ?? ''} contact-contactForm36`,
  contactForm37: `${stylex.props(styles.contactForm37).className ?? ''} contact-contactForm37`,
  contactForm38: `${stylex.props(styles.contactForm38).className ?? ''} contact-contactForm38`,
  contactForm39: `${stylex.props(styles.contactForm39).className ?? ''} contact-contactForm39`,
  contactForm40: `${stylex.props(styles.contactForm40).className ?? ''} contact-contactForm40`,
  contactForm41: `${stylex.props(styles.contactForm41).className ?? ''} contact-contactForm41`,
  contactForm42: `${stylex.props(styles.contactForm42).className ?? ''} contact-contactForm42`,
  contactForm43: `${stylex.props(styles.contactForm43).className ?? ''} contact-contactForm43`,
  contactForm44: `${stylex.props(styles.contactForm44).className ?? ''} contact-contactForm44`,
  contactForm45: `${stylex.props(styles.contactForm45).className ?? ''} contact-contactForm45`,
  contactForm46: `${stylex.props(styles.contactForm46).className ?? ''} contact-contactForm46`,
  themeToggle47: `${stylex.props(styles.themeToggle47).className ?? ''} contact-themeToggle47`,
  alertDialog48: `${stylex.props(styles.alertDialog48).className ?? ''} contact-alertDialog48`,
  alertDialog49: `${stylex.props(styles.alertDialog49).className ?? ''} contact-alertDialog49 group/alert-dialog-content`,
  alertDialog50: `${stylex.props(styles.alertDialog50).className ?? ''} contact-alertDialog50`,
  alertDialog51: `${stylex.props(styles.alertDialog51).className ?? ''} contact-alertDialog51`,
  alertDialog52: `${stylex.props(styles.alertDialog52).className ?? ''} contact-alertDialog52`,
  alertDialog53: `${stylex.props(styles.alertDialog53).className ?? ''} contact-alertDialog53`,
  alertDialog54: `${stylex.props(styles.alertDialog54).className ?? ''} contact-alertDialog54`,
  badge55: `${stylex.props(styles.badge55).className ?? ''} contact-badge55 group/badge`,
  badge56: `${stylex.props(styles.badge56).className ?? ''} contact-badge56`,
  badge57: `${stylex.props(styles.badge57).className ?? ''} contact-badge57`,
  badge58: `${stylex.props(styles.badge58).className ?? ''} contact-badge58`,
  badge59: `${stylex.props(styles.badge59).className ?? ''} contact-badge59`,
  badge60: `${stylex.props(styles.badge60).className ?? ''} contact-badge60`,
  badge61: `${stylex.props(styles.badge61).className ?? ''} contact-badge61`,
  button62: `${stylex.props(styles.button62).className ?? ''} contact-button62 group/button`,
  button63: `${stylex.props(styles.button63).className ?? ''} contact-button63`,
  button64: `${stylex.props(styles.button64).className ?? ''} contact-button64`,
  button65: `${stylex.props(styles.button65).className ?? ''} contact-button65`,
  button66: `${stylex.props(styles.button66).className ?? ''} contact-button66`,
  button67: `${stylex.props(styles.button67).className ?? ''} contact-button67`,
  button68: `${stylex.props(styles.button68).className ?? ''} contact-button68`,
  button69: `${stylex.props(styles.button69).className ?? ''} contact-button69`,
  button70: `${stylex.props(styles.button70).className ?? ''} contact-button70`,
  button71: `${stylex.props(styles.button71).className ?? ''} contact-button71`,
  button72: `${stylex.props(styles.button72).className ?? ''} contact-button72`,
  button73: `${stylex.props(styles.button73).className ?? ''} contact-button73`,
  button74: `${stylex.props(styles.button74).className ?? ''} contact-button74`,
  card75: `${stylex.props(styles.card75).className ?? ''} contact-card75 group/card`,
  card76: `${stylex.props(styles.card76).className ?? ''} contact-card76 group/card-header`,
  card77: `${stylex.props(styles.card77).className ?? ''} contact-card77`,
  card78: `${stylex.props(styles.card78).className ?? ''} contact-card78`,
  card79: `${stylex.props(styles.card79).className ?? ''} contact-card79`,
  card80: `${stylex.props(styles.card80).className ?? ''} contact-card80`,
  card81: `${stylex.props(styles.card81).className ?? ''} contact-card81`,
  checkbox82: `${stylex.props(styles.checkbox82).className ?? ''} contact-checkbox82 peer`,
  checkbox83: `${stylex.props(styles.checkbox83).className ?? ''} contact-checkbox83`,
  combobox84: `${stylex.props(styles.combobox84).className ?? ''} contact-combobox84`,
  combobox85: `${stylex.props(styles.combobox85).className ?? ''} contact-combobox85`,
  combobox86: `${stylex.props(styles.combobox86).className ?? ''} contact-combobox86`,
  combobox87: `${stylex.props(styles.combobox87).className ?? ''} contact-combobox87`,
  combobox88: `${stylex.props(styles.combobox88).className ?? ''} contact-combobox88`,
  combobox89: `${stylex.props(styles.combobox89).className ?? ''} contact-combobox89`,
  combobox90: `${stylex.props(styles.combobox90).className ?? ''} contact-combobox90 group/combobox-content`,
  combobox91: `${stylex.props(styles.combobox91).className ?? ''} contact-combobox91`,
  combobox92: `${stylex.props(styles.combobox92).className ?? ''} contact-combobox92`,
  combobox93: `${stylex.props(styles.combobox93).className ?? ''} contact-combobox93`,
  combobox94: `${stylex.props(styles.combobox94).className ?? ''} contact-combobox94`,
  combobox95: `${stylex.props(styles.combobox95).className ?? ''} contact-combobox95`,
  combobox96: `${stylex.props(styles.combobox96).className ?? ''} contact-combobox96`,
  combobox97: `${stylex.props(styles.combobox97).className ?? ''} contact-combobox97`,
  combobox98: `${stylex.props(styles.combobox98).className ?? ''} contact-combobox98`,
  combobox99: `${stylex.props(styles.combobox99).className ?? ''} contact-combobox99`,
  combobox100: `${stylex.props(styles.combobox100).className ?? ''} contact-combobox100`,
  dropdownMenu101: `${stylex.props(styles.dropdownMenu101).className ?? ''} contact-dropdownMenu101`,
  dropdownMenu102: `${stylex.props(styles.dropdownMenu102).className ?? ''} contact-dropdownMenu102 group/dropdown-menu-item`,
  dropdownMenu103: `${stylex.props(styles.dropdownMenu103).className ?? ''} contact-dropdownMenu103`,
  dropdownMenu104: `${stylex.props(styles.dropdownMenu104).className ?? ''} contact-dropdownMenu104`,
  dropdownMenu105: `${stylex.props(styles.dropdownMenu105).className ?? ''} contact-dropdownMenu105`,
  dropdownMenu106: `${stylex.props(styles.dropdownMenu106).className ?? ''} contact-dropdownMenu106`,
  dropdownMenu107: `${stylex.props(styles.dropdownMenu107).className ?? ''} contact-dropdownMenu107`,
  dropdownMenu108: `${stylex.props(styles.dropdownMenu108).className ?? ''} contact-dropdownMenu108`,
  dropdownMenu109: `${stylex.props(styles.dropdownMenu109).className ?? ''} contact-dropdownMenu109`,
  field110: `${stylex.props(styles.field110).className ?? ''} contact-field110`,
  field111: `${stylex.props(styles.field111).className ?? ''} contact-field111`,
  field112: `${stylex.props(styles.field112).className ?? ''} contact-field112 group/field-group`,
  field113: `${stylex.props(styles.field113).className ?? ''} contact-field113 group/field`,
  field114: `${stylex.props(styles.field114).className ?? ''} contact-field114`,
  field115: `${stylex.props(styles.field115).className ?? ''} contact-field115`,
  field116: `${stylex.props(styles.field116).className ?? ''} contact-field116`,
  field117: `${stylex.props(styles.field117).className ?? ''} contact-field117 group`,
  field118: `${stylex.props(styles.field118).className ?? ''} contact-field118 group/field-content`,
  field119: `${stylex.props(styles.field119).className ?? ''} contact-field119`,
  field120: `${stylex.props(styles.field120).className ?? ''} contact-field120`,
  field121: `${stylex.props(styles.field121).className ?? ''} contact-field121`,
  field122: `${stylex.props(styles.field122).className ?? ''} contact-field122`,
  field123: `${stylex.props(styles.field123).className ?? ''} contact-field123`,
  field124: `${stylex.props(styles.field124).className ?? ''} contact-field124`,
  field125: `${stylex.props(styles.field125).className ?? ''} contact-field125`,
  field126: `${stylex.props(styles.field126).className ?? ''} contact-field126`,
  field127: `${stylex.props(styles.field127).className ?? ''} contact-field127`,
  field128: `${stylex.props(styles.field128).className ?? ''} contact-field128`,
  inputGroup129: `${stylex.props(styles.inputGroup129).className ?? ''} contact-inputGroup129 group/input-group`,
  inputGroup130: `${stylex.props(styles.inputGroup130).className ?? ''} contact-inputGroup130`,
  inputGroup131: `${stylex.props(styles.inputGroup131).className ?? ''} contact-inputGroup131`,
  inputGroup132: `${stylex.props(styles.inputGroup132).className ?? ''} contact-inputGroup132`,
  inputGroup133: `${stylex.props(styles.inputGroup133).className ?? ''} contact-inputGroup133`,
  inputGroup134: `${stylex.props(styles.inputGroup134).className ?? ''} contact-inputGroup134`,
  inputGroup135: `${stylex.props(styles.inputGroup135).className ?? ''} contact-inputGroup135`,
  inputGroup136: `${stylex.props(styles.inputGroup136).className ?? ''} contact-inputGroup136`,
  inputGroup137: `${stylex.props(styles.inputGroup137).className ?? ''} contact-inputGroup137`,
  inputGroup138: `${stylex.props(styles.inputGroup138).className ?? ''} contact-inputGroup138`,
  inputGroup139: `${stylex.props(styles.inputGroup139).className ?? ''} contact-inputGroup139`,
  inputGroup140: `${stylex.props(styles.inputGroup140).className ?? ''} contact-inputGroup140`,
  inputGroup141: `${stylex.props(styles.inputGroup141).className ?? ''} contact-inputGroup141`,
  input142: `${stylex.props(styles.input142).className ?? ''} contact-input142`,
  label143: `${stylex.props(styles.label143).className ?? ''} contact-label143`,
  scrollArea144: `${stylex.props(styles.scrollArea144).className ?? ''} contact-scrollArea144`,
  scrollArea145: `${stylex.props(styles.scrollArea145).className ?? ''} contact-scrollArea145`,
  scrollArea146: `${stylex.props(styles.scrollArea146).className ?? ''} contact-scrollArea146`,
  scrollArea147: `${stylex.props(styles.scrollArea147).className ?? ''} contact-scrollArea147`,
  select148: `${stylex.props(styles.select148).className ?? ''} contact-select148`,
  select149: `${stylex.props(styles.select149).className ?? ''} contact-select149`,
  select150: `${stylex.props(styles.select150).className ?? ''} contact-select150`,
  select151: `${stylex.props(styles.select151).className ?? ''} contact-select151`,
  select152: `${stylex.props(styles.select152).className ?? ''} contact-select152`,
  select153: `${stylex.props(styles.select153).className ?? ''} contact-select153`,
  select154: `${stylex.props(styles.select154).className ?? ''} contact-select154`,
  select155: `${stylex.props(styles.select155).className ?? ''} contact-select155`,
  separator156: `${stylex.props(styles.separator156).className ?? ''} contact-separator156`,
  switch157: `${stylex.props(styles.switch157).className ?? ''} contact-switch157 peer group/switch`,
  switch158: `${stylex.props(styles.switch158).className ?? ''} contact-switch158`,
  textarea159: `${stylex.props(styles.textarea159).className ?? ''} contact-textarea159`,
  index160: `${stylex.props(styles.index160).className ?? ''} contact-index160`,
  index161: `${stylex.props(styles.index161).className ?? ''} contact-index161`,
  index162: `${stylex.props(styles.index162).className ?? ''} contact-index162`,
  index163: `${stylex.props(styles.index163).className ?? ''} contact-index163`,
  index164: `${stylex.props(styles.index164).className ?? ''} contact-index164`,
  index165: `${stylex.props(styles.index165).className ?? ''} contact-index165`,
  index166: `${stylex.props(styles.index166).className ?? ''} contact-index166`,
  index167: `${stylex.props(styles.index167).className ?? ''} contact-index167`,
  index168: `${stylex.props(styles.index168).className ?? ''} contact-index168`,
  index169: `${stylex.props(styles.index169).className ?? ''} contact-index169`,
  index170: `${stylex.props(styles.index170).className ?? ''} contact-index170`,
  index171: `${stylex.props(styles.index171).className ?? ''} contact-index171`,
  index172: `${stylex.props(styles.index172).className ?? ''} contact-index172`,
  index173: `${stylex.props(styles.index173).className ?? ''} contact-index173`,
  index174: `${stylex.props(styles.index174).className ?? ''} contact-index174`,
  index175: `${stylex.props(styles.index175).className ?? ''} contact-index175`,
  index176: `${stylex.props(styles.index176).className ?? ''} contact-index176`,
}

export const styleEntries: [string, stylex.StyleXStyles][] = [
  ['contact-fieldLabel', styles.fieldLabel],
  ['contact-cardPreview0', styles.cardPreview0],
  ['contact-cardPreview1', styles.cardPreview1],
  ['contact-cardPreview2', styles.cardPreview2],
  ['contact-cardPreview3', styles.cardPreview3],
  ['contact-cardPreview4', styles.cardPreview4],
  ['contact-cardPreview5', styles.cardPreview5],
  ['contact-cardPreview6', styles.cardPreview6],
  ['contact-cardPreview7', styles.cardPreview7],
  ['contact-cardPreview8', styles.cardPreview8],
  ['contact-cardPreview9', styles.cardPreview9],
  ['contact-cardPreview10', styles.cardPreview10],
  ['contact-cardPreview11', styles.cardPreview11],
  ['contact-cardPreview12', styles.cardPreview12],
  ['contact-cardPreview13', styles.cardPreview13],
  ['contact-cardPreview14', styles.cardPreview14],
  ['contact-cardPreview15', styles.cardPreview15],
  ['contact-cardPreview16', styles.cardPreview16],
  ['contact-cardPreview17', styles.cardPreview17],
  ['contact-cardPreview18', styles.cardPreview18],
  ['contact-cardPreview19', styles.cardPreview19],
  ['contact-cardPreview20', styles.cardPreview20],
  ['contact-cardPreview21', styles.cardPreview21],
  ['contact-cardPreview22', styles.cardPreview22],
  ['contact-contactFormCustomFields23', styles.contactFormCustomFields23],
  ['contact-contactFormCustomFields24', styles.contactFormCustomFields24],
  ['contact-contactFormCustomFields25', styles.contactFormCustomFields25],
  ['contact-contactFormCustomFields26', styles.contactFormCustomFields26],
  ['contact-contactFormCustomFields27', styles.contactFormCustomFields27],
  ['contact-contactFormCustomFields28', styles.contactFormCustomFields28],
  ['contact-contactFormCustomFields29', styles.contactFormCustomFields29],
  ['contact-contactFormFieldRow30', styles.contactFormFieldRow30],
  ['contact-contactFormFieldRow31', styles.contactFormFieldRow31],
  ['contact-contactFormMultiField32', styles.contactFormMultiField32],
  ['contact-contactFormMultiField33', styles.contactFormMultiField33],
  ['contact-contactFormMultiField34', styles.contactFormMultiField34],
  ['contact-contactForm35', styles.contactForm35],
  ['contact-contactForm36', styles.contactForm36],
  ['contact-contactForm37', styles.contactForm37],
  ['contact-contactForm38', styles.contactForm38],
  ['contact-contactForm39', styles.contactForm39],
  ['contact-contactForm40', styles.contactForm40],
  ['contact-contactForm41', styles.contactForm41],
  ['contact-contactForm42', styles.contactForm42],
  ['contact-contactForm43', styles.contactForm43],
  ['contact-contactForm44', styles.contactForm44],
  ['contact-contactForm45', styles.contactForm45],
  ['contact-contactForm46', styles.contactForm46],
  ['contact-themeToggle47', styles.themeToggle47],
  ['contact-alertDialog48', styles.alertDialog48],
  ['contact-alertDialog49', styles.alertDialog49],
  ['contact-alertDialog50', styles.alertDialog50],
  ['contact-alertDialog51', styles.alertDialog51],
  ['contact-alertDialog52', styles.alertDialog52],
  ['contact-alertDialog53', styles.alertDialog53],
  ['contact-alertDialog54', styles.alertDialog54],
  ['contact-badge55', styles.badge55],
  ['contact-badge56', styles.badge56],
  ['contact-badge57', styles.badge57],
  ['contact-badge58', styles.badge58],
  ['contact-badge59', styles.badge59],
  ['contact-badge60', styles.badge60],
  ['contact-badge61', styles.badge61],
  ['contact-button62', styles.button62],
  ['contact-button63', styles.button63],
  ['contact-button64', styles.button64],
  ['contact-button65', styles.button65],
  ['contact-button66', styles.button66],
  ['contact-button67', styles.button67],
  ['contact-button68', styles.button68],
  ['contact-button69', styles.button69],
  ['contact-button70', styles.button70],
  ['contact-button71', styles.button71],
  ['contact-button72', styles.button72],
  ['contact-button73', styles.button73],
  ['contact-button74', styles.button74],
  ['contact-card75', styles.card75],
  ['contact-card76', styles.card76],
  ['contact-card77', styles.card77],
  ['contact-card78', styles.card78],
  ['contact-card79', styles.card79],
  ['contact-card80', styles.card80],
  ['contact-card81', styles.card81],
  ['contact-checkbox82', styles.checkbox82],
  ['contact-checkbox83', styles.checkbox83],
  ['contact-combobox84', styles.combobox84],
  ['contact-combobox85', styles.combobox85],
  ['contact-combobox86', styles.combobox86],
  ['contact-combobox87', styles.combobox87],
  ['contact-combobox88', styles.combobox88],
  ['contact-combobox89', styles.combobox89],
  ['contact-combobox90', styles.combobox90],
  ['contact-combobox91', styles.combobox91],
  ['contact-combobox92', styles.combobox92],
  ['contact-combobox93', styles.combobox93],
  ['contact-combobox94', styles.combobox94],
  ['contact-combobox95', styles.combobox95],
  ['contact-combobox96', styles.combobox96],
  ['contact-combobox97', styles.combobox97],
  ['contact-combobox98', styles.combobox98],
  ['contact-combobox99', styles.combobox99],
  ['contact-combobox100', styles.combobox100],
  ['contact-dropdownMenu101', styles.dropdownMenu101],
  ['contact-dropdownMenu102', styles.dropdownMenu102],
  ['contact-dropdownMenu103', styles.dropdownMenu103],
  ['contact-dropdownMenu104', styles.dropdownMenu104],
  ['contact-dropdownMenu105', styles.dropdownMenu105],
  ['contact-dropdownMenu106', styles.dropdownMenu106],
  ['contact-dropdownMenu107', styles.dropdownMenu107],
  ['contact-dropdownMenu108', styles.dropdownMenu108],
  ['contact-dropdownMenu109', styles.dropdownMenu109],
  ['contact-field110', styles.field110],
  ['contact-field111', styles.field111],
  ['contact-field112', styles.field112],
  ['contact-field113', styles.field113],
  ['contact-field114', styles.field114],
  ['contact-field115', styles.field115],
  ['contact-field116', styles.field116],
  ['contact-field117', styles.field117],
  ['contact-field118', styles.field118],
  ['contact-field119', styles.field119],
  ['contact-field120', styles.field120],
  ['contact-field121', styles.field121],
  ['contact-field122', styles.field122],
  ['contact-field123', styles.field123],
  ['contact-field124', styles.field124],
  ['contact-field125', styles.field125],
  ['contact-field126', styles.field126],
  ['contact-field127', styles.field127],
  ['contact-field128', styles.field128],
  ['contact-inputGroup129', styles.inputGroup129],
  ['contact-inputGroup130', styles.inputGroup130],
  ['contact-inputGroup131', styles.inputGroup131],
  ['contact-inputGroup132', styles.inputGroup132],
  ['contact-inputGroup133', styles.inputGroup133],
  ['contact-inputGroup134', styles.inputGroup134],
  ['contact-inputGroup135', styles.inputGroup135],
  ['contact-inputGroup136', styles.inputGroup136],
  ['contact-inputGroup137', styles.inputGroup137],
  ['contact-inputGroup138', styles.inputGroup138],
  ['contact-inputGroup139', styles.inputGroup139],
  ['contact-inputGroup140', styles.inputGroup140],
  ['contact-inputGroup141', styles.inputGroup141],
  ['contact-input142', styles.input142],
  ['contact-label143', styles.label143],
  ['contact-scrollArea144', styles.scrollArea144],
  ['contact-scrollArea145', styles.scrollArea145],
  ['contact-scrollArea146', styles.scrollArea146],
  ['contact-scrollArea147', styles.scrollArea147],
  ['contact-select148', styles.select148],
  ['contact-select149', styles.select149],
  ['contact-select150', styles.select150],
  ['contact-select151', styles.select151],
  ['contact-select152', styles.select152],
  ['contact-select153', styles.select153],
  ['contact-select154', styles.select154],
  ['contact-select155', styles.select155],
  ['contact-separator156', styles.separator156],
  ['contact-switch157', styles.switch157],
  ['contact-switch158', styles.switch158],
  ['contact-textarea159', styles.textarea159],
  ['contact-index160', styles.index160],
  ['contact-index161', styles.index161],
  ['contact-index162', styles.index162],
  ['contact-index163', styles.index163],
  ['contact-index164', styles.index164],
  ['contact-index165', styles.index165],
  ['contact-index166', styles.index166],
  ['contact-index167', styles.index167],
  ['contact-index168', styles.index168],
  ['contact-index169', styles.index169],
  ['contact-index170', styles.index170],
  ['contact-index171', styles.index171],
  ['contact-index172', styles.index172],
  ['contact-index173', styles.index173],
  ['contact-index174', styles.index174],
  ['contact-index175', styles.index175],
  ['contact-index176', styles.index176],
]
