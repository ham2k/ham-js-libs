import type { Options } from 'tsup'

export const baseTsupConfig: Options = {
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  splitting: false,
  treeshake: true,
  target: 'es2020',
  outExtension ({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js'
    }
  }
}
