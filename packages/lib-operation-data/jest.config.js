export default {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true,
      tsconfig: {
        module: 'ES2020',
        moduleResolution: 'node'
      }
    }]
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^(\\.{1,2}/.*)\\.json$': '$1'
  },
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  transformIgnorePatterns: []
}

