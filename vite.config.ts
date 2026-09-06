import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { transformAsync } from '@babel/core'
import { stylexOptions } from './stylex.config.mjs'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    devtools(),
    nitro(),
    {
      name: 'stylex-compiler',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.endsWith('/ui.stylex.ts')) return null
        const result = await transformAsync(code, {
          filename: id,
          configFile: false,
          babelrc: false,
          parserOpts: { plugins: ['typescript'] },
          plugins: [['@stylexjs/babel-plugin', stylexOptions]],
          sourceMaps: true,
        })
        return result?.code ? { code: result.code, map: result.map } : null
      },
    },
    tanstackStart(),
    viteReact(),
  ],
})

export default config
