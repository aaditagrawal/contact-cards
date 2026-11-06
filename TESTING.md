# Validation

Install dependencies with `bun install --frozen-lockfile`.

- `bun run test` checks immutable contact edits, field privacy toggles, names,
  addresses, social URLs and vCard content-line parsing. Exports must escape
  property injection, preserve URI delimiters and fold UTF-8 lines correctly.
- The dependency graph no longer includes `braces`; its local patch and
  package-specific security regression script have been removed. `bun audit`
  checks the remaining lockfile for reported vulnerabilities.
- `bun run typecheck` uses tsrs. `bun run lint` runs the existing lint rules.
- `bun run build`, then `PORT=4318 HOST=0.0.0.0 node .output/server/index.mjs`,
  serves production output. In another terminal run
  `bun run test:smoke http://localhost:4318`. It checks HTML, linked CSS/JS assets
  and a missing route's 404 response. Restart the server after each rebuild.

For a browser check, enter a name and phone number, verify the card updates,
disable the phone, and export a PNG. Verify the resulting image contains the
selected name and fields. The automated domain suite covers vCard data; the HTTP
smoke alone does not establish browser hydration, QR scanning or PNG export.

Run `bun scripts/benchmark-dependencies.mjs` on a quiet machine for an alternating
baseline/candidate benchmark on the pinned Node runtime. It installs the original
locked dependencies into temporary fixtures, checks component markup and Radix
state CSS parity, and prints JSON timings with raw samples, medians and p95 values.
`CONTACT_CARDS_BENCH_FILTER` selects a workload substring for a focused rerun.
