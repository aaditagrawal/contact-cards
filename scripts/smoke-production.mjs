import assert from 'node:assert/strict'

const base = new URL(process.argv[2] || 'http://localhost:3000')
assert.ok(
  ['localhost', '127.0.0.1', '[::1]'].includes(base.hostname),
  'Smoke requests must stay local',
)
const response = await fetch(base)
assert.equal(response.status, 200)
assert.match(response.headers.get('content-type') || '', /text\/html/)
const html = await response.text()
assert.match(html, /<html/)
assert.match(html, /<title>[^<]+<\/title>/)
assert.ok(!html.includes('id="vite-error-overlay"'))
const links = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1])
const assets = [
  ...new Set(links.filter((value) => value.startsWith('/') && /\.(?:css|js)(?:\?|$)/.test(value))),
]
assert.ok(
  assets.some((value) => /\.css(?:\?|$)/.test(value)),
  'Production CSS must be linked',
)
assert.ok(
  assets.some((value) => /\.js(?:\?|$)/.test(value)),
  'Production JavaScript must be linked',
)
for (const asset of assets) {
  const result = await fetch(new URL(asset, base))
  assert.equal(result.status, 200, asset)
  assert.ok((await result.arrayBuffer()).byteLength > 0, asset)
}
const missing = await fetch(new URL('/__production-smoke-missing__', base))
assert.equal(missing.status, 404)
console.log(`Production HTML, ${assets.length} JS/CSS assets, and 404 handling passed`)
