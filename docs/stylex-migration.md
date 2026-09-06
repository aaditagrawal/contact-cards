# StyleX port

Tailwind utility groups are replaced with compiled StyleX definitions in `src/ui.stylex.ts`. Comments retain each original group for review. The existing components keep their `className` API: `cn` composes the corresponding StyleX definitions in caller order while preserving semantic scope markers. This retains component overrides, including caller font size overriding a label's default line height.

The original reset, theme variables, font, and animation definitions are preserved in `src/reset.css`. `src/ui-states.css` preserves the existing descendant, ancestor, data-state, responsive, and pseudo selectors under component scope markers. These selectors are kept as CSS to retain the existing Radix/Base UI behavior without changing component structure. Explicitly sized icons carry `data-stylex-sized` so descendant icon sizing continues to recognize caller overrides after utility classes are removed.

Vite compiles the StyleX module using Babel; PostCSS extracts the same configuration into the CSS entry. CSS layer order is explicit in both development and production. Tailwind, Tailwind Merge, the animation package, and the Tailwind-based shadcn generator/configuration are removed. Existing UI primitives remain in the repository. Add new styles through StyleX and maintain the scoped state rules when changing primitives.

## Verification

- Production build, TypeScript, Oxlint, and Oxfmt pass. Existing lint warnings remain.
- The repository has no test files. `bun run test` exits successfully with no tests; its existing Vite/React `module is not defined` shutdown diagnostic also reproduces in a separate unchanged baseline checkout.
- Baseline commit: `4e90ad6`. Browser comparisons check text, exact element rectangles, and every non-custom computed CSS property.
- Initial system-theme screen: 239 nodes at 375, 768, and 1440 pixels.
- Light theme, dark theme, populated name fields, and expanded address/social/custom fields with portrait orientation and Ocean color: mobile and desktop comparisons match, up to 291 nodes.
- Open select menu with its first option focused: all 324 nodes match at desktop size. The populated portrait screenshot with the menu closed is byte-identical.
- Development mode matches all 236 application nodes against the original production page after hydration. The comparison normalizes equivalent unused background-position zero serialization caused by production CSS minification.

Uncompressed production CSS changes from 75.10 kB to 72.49 kB; route JavaScript changes from 202.89 kB to 217.11 kB (gzip 63.18 kB to 62.06 kB). This PR is a styling migration, not a performance claim.
