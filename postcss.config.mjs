import { stylexOptions } from './stylex.config.mjs'
const config = {
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: ['src/ui.stylex.ts'],
      babelConfig: {
        babelrc: false,
        configFile: false,
        parserOpts: { plugins: ['typescript'] },
        plugins: [['@stylexjs/babel-plugin', stylexOptions]],
      },
      useCSSLayers: true,
    },
  },
}

export default config
