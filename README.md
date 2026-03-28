# ham-js-libs

Monorepo for Ham2K JavaScript libraries. Each package lives under `packages/` and is published to npm under the `@ham2k` scope.

## Packages

| Directory | npm name |
|-----------|----------|
| `packages/lib-callsigns` | `@ham2k/lib-callsigns` |
| `packages/lib-country-files` | `@ham2k/lib-country-files` |
| `packages/lib-cqmag-data` | `@ham2k/lib-cqmag-data` |
| `packages/lib-dxcc-data` | `@ham2k/lib-dxcc-data` |
| `packages/lib-format-tools` | `@ham2k/lib-format-tools` |
| `packages/lib-maidenhead-grid` | `@ham2k/lib-maidenhead-grid` |
| `packages/lib-operation-data` | `@ham2k/lib-operation-data` |
| `packages/lib-qson-adif` | `@ham2k/lib-qson-adif` |
| `packages/lib-qson-cabrillo` | `@ham2k/lib-qson-cabrillo` |
| `packages/lib-qson-tools` | `@ham2k/lib-qson-tools` |

## Development

Install dependencies from the repository root:

```bash
npm install
```

Build or test all workspaces:

```bash
npm run build
npm run test
```

Work on a single package:

```bash
npm run build -w @ham2k/lib-callsigns
npm test -w @ham2k/lib-callsigns
```

## Publishing

Each package is published independently. From the repo root, after building:

```bash
npm publish -w @ham2k/<package-name>
```

Use `--dry-run` first to verify the tarball. Version bumps are done per package (for example with `npm version` inside `packages/<name>` or your preferred release workflow).

## History

These trees were merged with `git subtree` from the former standalone repositories, so `git log -- packages/<name>` shows the original commit history for each library.
