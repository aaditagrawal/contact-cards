import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Bun prepares identical Node bundles; timings run on the pinned Node runtime.
// Baseline dependencies and five original modules live only in temporary fixtures.
const baselineRef = '3609aab21156981c50af7d8759e9ea06b3949536'
const root = process.cwd()
const fixture =
  process.env.CONTACT_CARDS_BENCH_FIXTURE ||
  (await mkdtemp(path.join(tmpdir(), 'contact-cards-benchmark-')))
const original = (file) =>
  execFileSync('git', ['show', `${baselineRef}:${file}`], { cwd: root, encoding: 'utf8' })
const load = (file) => import(pathToFileURL(file).href)
const modules = [
  'lib/utils.ts',
  'components/ui/button.tsx',
  'components/ui/badge.tsx',
  'components/ui/field.tsx',
  'components/ui/input-group.tsx',
]
const samples = Number(process.env.CONTACT_CARDS_BENCH_SAMPLES || 21)
let sink = 0

try {
  if (!process.env.CONTACT_CARDS_BENCH_FIXTURE) {
    for (const file of ['package.json', 'bun.lock', 'patches/braces@3.0.3.patch']) {
      await mkdir(path.dirname(path.join(fixture, file)), { recursive: true })
      await writeFile(path.join(fixture, file), original(file))
    }
    execFileSync(process.execPath, ['install', '--frozen-lockfile', '--ignore-scripts'], {
      cwd: fixture,
      stdio: 'ignore',
    })
    for (const file of modules) {
      await mkdir(path.dirname(path.join(fixture, 'src', file)), { recursive: true })
      const source = original(`src/${file}`).replace(/@\/([^'"\n]+)/g, (_, target) => {
        const extension = target.startsWith('lib/') ? '.ts' : '.tsx'
        return path.join(
          modules.includes(target + extension) ? fixture : root,
          'src',
          target + extension,
        )
      })
      await writeFile(path.join(fixture, 'src', file), source)
    }
    for (const side of ['before', 'after']) {
      const base = side === 'before' ? fixture : root
      for (const file of modules) {
        const output = path.join(fixture, 'compiled', side)
        const result = await Bun.build({
          entrypoints: [path.join(base, 'src', file)],
          outdir: output,
          naming: '[name].mjs',
          target: 'node',
          packages: 'external',
        })
        if (!result.success) throw new Error(result.logs.join('\n'))
      }
    }
    process.stdout.write(
      execFileSync('node', [path.join(root, 'scripts/benchmark-dependencies.mjs')], {
        cwd: root,
        env: {
          ...process.env,
          CONTACT_CARDS_BENCH_FIXTURE: fixture,
          CONTACT_CARDS_BENCH_BUN: Bun.version,
        },
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'inherit'],
      }),
    )
  } else {
    assert.equal(
      process.version,
      `v${(await readFile(path.join(root, '.node-version'), 'utf8')).trim()}`,
    )
    const compiled = (side, file) =>
      load(path.join(fixture, 'compiled', side, path.basename(file).replace(/\.tsx?$/, '.mjs')))
    const before = await Promise.all(modules.map((file) => compiled('before', file)))
    const after = await Promise.all(modules.map((file) => compiled('after', file)))
    const variants = [
      undefined,
      null,
      'default',
      'outline',
      'secondary',
      'ghost',
      'destructive',
      'link',
    ]
    const sizes = [
      undefined,
      null,
      'default',
      'xs',
      'sm',
      'lg',
      'icon',
      'icon-xs',
      'icon-sm',
      'icon-lg',
    ]
    const props = variants.flatMap((variant) =>
      sizes.map((size) => ({ variant, size, disabled: true, className: 'p-8 hover:bg-accent' })),
    )
    const render = (component, options) =>
      renderToStaticMarkup(createElement(component, options, 'Contact'))
    let parityCases = 0
    function same(component, cases, index) {
      for (const options of cases) {
        assert.equal(
          render(before[index][component], options),
          render(after[index][component], options),
        )
        parityCases++
      }
    }
    same('Button', props, 1)
    same(
      'Badge',
      variants.map((variant) => ({ variant, className: 'p-8' })),
      2,
    )
    same(
      'Field',
      [undefined, null, 'vertical', 'horizontal', 'responsive'].map((orientation) => ({
        orientation,
        className: 'gap-4',
      })),
      3,
    )
    same(
      'InputGroupAddon',
      [undefined, null, 'inline-start', 'inline-end', 'block-start', 'block-end'].map((align) => ({
        align,
        className: 'p-8',
      })),
      4,
    )
    same(
      'InputGroupButton',
      [undefined, null, 'xs', 'sm', 'icon-xs', 'icon-sm'].map((size) => ({
        size,
        className: 'p-8',
      })),
      4,
    )

    const results = []
    function summary(values) {
      const sorted = [...values].sort((a, b) => a - b)
      return {
        median_ns: sorted[Math.floor(sorted.length / 2)],
        p95_ns: sorted[Math.ceil(sorted.length * 0.95) - 1],
        min_ns: sorted[0],
        max_ns: sorted.at(-1),
      }
    }
    async function measure(
      replacement,
      workload,
      baseline,
      candidate,
      iterations,
      asynchronous = false,
    ) {
      if (
        process.env.CONTACT_CARDS_BENCH_FILTER &&
        !workload.includes(process.env.CONTACT_CARDS_BENCH_FILTER)
      )
        return
      function runSync(fn) {
        const start = performance.now()
        for (let i = 0; i < iterations; i++) sink += fn(i).length
        return ((performance.now() - start) * 1e6) / iterations
      }
      async function runAsync(fn) {
        const start = performance.now()
        for (let i = 0; i < iterations; i++) sink += (await fn(i)).length
        return ((performance.now() - start) * 1e6) / iterations
      }
      const run = asynchronous ? runAsync : runSync
      for (let i = 0; i < 5; i++) {
        await run(baseline)
        await run(candidate)
      }
      const a = [],
        b = []
      for (let i = 0; i < samples; i++) {
        if (i % 2) {
          b.push(await run(candidate))
          a.push(await run(baseline))
        } else {
          a.push(await run(baseline))
          b.push(await run(candidate))
        }
      }
      const baselineStats = summary(a),
        candidateStats = summary(b)
      results.push({
        replacement,
        baseline_ref: baselineRef,
        workload,
        samples,
        iterations,
        baseline: baselineStats,
        candidate: candidateStats,
        ratio: candidateStats.median_ns / baselineStats.median_ns,
        baseline_samples_ns: a,
        candidate_samples_ns: b,
      })
      console.error(
        `${workload}: median ratio ${(candidateStats.median_ns / baselineStats.median_ns).toFixed(3)}, ${samples} pairs`,
      )
    }

    for (const [name, values] of [
      ['small', ['flex', false]],
      ['typical', ['flex flex-col gap-2 px-2', false, undefined, 'px-4 dark:text-foreground']],
      ['large synthetic', Array.from({ length: 128 }, (_, i) => (i % 3 ? `p-${i % 8}` : false))],
      [
        'adversarial overrides',
        Array.from({ length: 256 }, (_, i) => `px-${i % 8} hover:bg-${i % 2 ? 'muted' : 'accent'}`),
      ],
    ]) {
      assert.equal(before[0].cn(...values), after[0].cn(...values))
      await measure(
        'clsx',
        `cn ${name}, warm Tailwind merge cache`,
        () => before[0].cn(...values),
        () => after[0].cn(...values),
        values.length > 10 ? 2000 : 50000,
      )
    }
    const uncached = Array.from({ length: 2048 }, (_, i) => [
      'flex gap-2',
      `w-[${i}px]`,
      i % 2 ? 'px-2' : false,
      'px-4',
    ])
    for (const values of uncached) assert.equal(before[0].cn(...values), after[0].cn(...values))
    await measure(
      'clsx',
      'cn cache misses, 2048 distinct width/spacing combinations exceeding merge cache capacity',
      (i) => before[0].cn(...uncached[i % uncached.length]),
      (i) => after[0].cn(...uncached[i % uncached.length]),
      4096,
    )
    await measure(
      'class-variance-authority',
      'button classes, all variants/sizes/null and overrides',
      (i) => before[0].cn(before[1].buttonVariants(props[i % props.length])),
      (i) => after[1].buttonVariants(props[i % props.length]),
      5000,
    )
    await measure(
      'class-variance-authority + clsx',
      'SSR button integration, all variants/sizes/null',
      (i) => render(before[1].Button, props[i % props.length]),
      (i) => render(after[1].Button, props[i % props.length]),
      500,
    )
    const components = ['Badge', 'Field', 'InputGroupAddon', 'InputGroupButton']
    await measure(
      'class-variance-authority + clsx',
      'SSR badge/field/input-group defaults',
      (i) => render(before[[2, 3, 4, 4][i % 4]][components[i % 4]], {}),
      (i) => render(after[[2, 3, 4, 4][i % 4]][components[i % 4]], {}),
      500,
    )

    // Use the same compiler, actual source class vocabulary and imported package versions.
    const { compile, optimize } = await load(
      path.join(root, 'node_modules/@tailwindcss/node/dist/index.mjs'),
    )
    const { Scanner } = await load(path.join(root, 'node_modules/@tailwindcss/oxide/index.js'))
    const { default: postcss } = await load(path.join(root, 'node_modules/postcss/lib/postcss.mjs'))
    const candidates = new Scanner({
      sources: [{ base: root, pattern: 'src/**/*.{ts,tsx,css}', negated: false }],
    }).scan()
    const oldCss = original('src/styles.css')
    const newCss = await readFile(path.join(root, 'src/styles.css'), 'utf8')
    const build = async (css, base) =>
      (await compile(css, { base, onDependency() {} })).build(candidates)
    const oldOutput = await build(oldCss, fixture),
      newOutput = await build(newCss, root)
    function states(css) {
      const rules = []
      postcss.parse(optimize(css, { minify: true }).code).walkRules((rule) => {
        if (
          !/data-(?:open|closed|checked|unchecked|disabled|horizontal|vertical)/.test(rule.selector)
        )
          return
        // Base UI-only alternatives are unreachable after removing its unused combobox.
        let selector = rule.selector.replaceAll(
          /,:where\(\[data-(?:open|closed|checked|unchecked)\][^)]+\)\)/g,
          '',
        )
        selector = selector
          .split(',')
          .filter((part) => !/\[data-(?:open|closed|checked|unchecked)\]/.test(part))
          .filter((part) => !/\[data-disabled=true\]/.test(part))
          .join(',')
        if (selector) rules.push([selector, rule.nodes.map((node) => node.toString()).join(';')])
      })
      return rules.sort((a, b) => a.join().localeCompare(b.join()))
    }
    assert.deepEqual(
      states(oldOutput),
      states(newOutput),
      'Radix state CSS declarations and specificity must match',
    )
    await measure(
      'shadcn',
      `Tailwind stylesheet compile and build, ${candidates.length} shared actual class candidates`,
      () => build(oldCss, fixture),
      () => build(newCss, root),
      1,
      true,
    )
    console.log(
      JSON.stringify(
        {
          baseline_ref: baselineRef,
          environment: {
            bun: process.env.CONTACT_CARDS_BENCH_BUN,
            node: execFileSync('node', ['--version'], { encoding: 'utf8' }).trim(),
            platform: `${process.platform}/${process.arch}`,
            warmups: 5,
            order: 'alternating AB/BA',
            command: 'bun scripts/benchmark-dependencies.mjs',
          },
          parityCases,
          cssStateRules: states(newOutput).length,
          sink,
          results,
        },
        null,
        2,
      ),
    )
  }
} finally {
  if (!process.env.CONTACT_CARDS_BENCH_FIXTURE) await rm(fixture, { recursive: true, force: true })
}
