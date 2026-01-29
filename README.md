# Contact Card Generator

A personal contact card generator that lets you build, preview, and download contact cards as PNG images with embedded vCard QR codes.

The reason this project exists is because I wanted a convenient cross-platform way to share contact information (not a proprietary one, LOOKING AT YOU APPLE) that's convenient for people. Most people also don't just want a singular set of contact information to share with people, so you can export with various fields disabled/enabled.

Oh, and I really wanted to try Tanstack Start.

## Features

- **Rich contact form** (VCF/VCARD centric)
- **Per-field toggling** to include or exclude any field from the card
- **Live card preview** with a monospace aesthetic (white on dark, monospace type)
- **Accent color picker** with 9 preset card background colors (black, charcoal, slate, navy, indigo, violet, wine, forest, espresso)
- **QR code** encoding a vCard 3.0 string of all enabled fields
- **Light and dark mode** with system preference detection (yes, yes, I know you don't like light mode)

## Tech Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [qrcode.react](https://github.com/zpao/qrcode.react) for QR code rendering
- [html-to-image](https://github.com/bubkoo/html-to-image) for PNG export
- [Tabler Icons](https://tabler.io/icons) for iconography
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) for the card typeface // raise an issue if you want support for more typefaces, I just like nerdfonts

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Type check
bunx tsc --noEmit

# Build for production
bun run build
```

## Usage

1. **Fill in your details** — use the form on the left to enter your contact information. Sections include name, phone, email, websites, professional info, addresses, social profiles, emergency info, and custom fields.
2. **Toggle fields** — each field has a checkbox to include or exclude it from the card. Only enabled fields appear on the card and in the QR code.
3. **Pick a card color** — choose from 9 preset background colors using the swatches below the card preview.
4. **Choose orientation** — switch between landscape (2:1) and portrait (1:1.5) layouts using the toggle buttons above the card.
5. **Preview live** — the card on the right updates in real time as you type.
6. **Download** — click **Download PNG** to export the card at 3x resolution.

The QR code on the card encodes a standard vCard 3.0 file. Anyone can scan it with their phone camera to save your contact info directly.
