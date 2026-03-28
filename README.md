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

These trees were merged with `git subtree` from the former standalone repositories (`main` from each GitHub repo). The full graph is in this repo: `git log` lists commits from all former projects. Commits that predate the merge still use the **paths from the original repo** (for example `src/...` at the repository root); the subtree merge commit is what introduced `packages/<name>/…`. For the current tree only, use `git log -- packages/<name>`.

## Internal dependencies

npm workspaces link `@ham2k/*` packages to each other when the **semver ranges** in each `package.json` match the versions in the monorepo. Do not use the `workspace:` protocol in `package.json` here: plain npm treats it as an invalid URL. (Yarn and pnpm support `workspace:` if you switch tooling later.)
