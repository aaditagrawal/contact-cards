# Validation

Install dependencies with `bun install --frozen-lockfile`.

- `bun run test` checks immutable contact edits, field privacy toggles, names,
  addresses, social URLs and vCard content-line parsing. Exports must escape
  property injection, preserve URI delimiters and fold UTF-8 lines correctly.
- `bun run test:security` verifies the installed braces patch with Node.
- `bun run typecheck` uses tsrs. `bun run lint` runs the existing lint rules.
- `bun run build`, then `PORT=4318 HOST=0.0.0.0 node .output/server/index.mjs`,
  serves production output. In another terminal run
  `bun run test:smoke http://localhost:4318`. It checks HTML, linked CSS/JS assets
  and a missing route's 404 response. Restart the server after each rebuild.

For a browser check, enter a name and phone number, verify the card updates,
disable the phone, and export a PNG. Verify the resulting image contains the
selected name and fields. The automated domain suite covers vCard data; the HTTP
smoke alone does not establish browser hydration, QR scanning or PNG export.
