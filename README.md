# ham-js-libs

Monorepo for Ham2K JavaScript libraries. Each package lives under `packages/` and is published to npm under the `@ham2k` scope.

## Packages

`@ham2k/lib-qson-tools` - Base types and tools for QSON.

`@ham2k/lib-callsigns` - Callsign parsing and analyzing.

`@ham2k/lib-operation-data` - Basic operation-related data like bands and modes.

`@ham2k/lib-country-files` - AD1C's Country Files lookup and annotations.

`@ham2k/lib-cqmag-data` - Data files related to CQ Magazine, its sponsored contests and related information.

`@ham2k/lib-dxcc-data` - DXCC data and information.

`@ham2k/lib-format-tools` - Tools related to formatting and display of values.

`@ham2k/lib-geo-tools` - Tools related to geographic and grid location information.

`@ham2k/lib-qson-adif` - ADIF import and export for QSON.

`@ham2k/lib-qson-cabrillo` - Cabrillo import and export for QSON.

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
cd packages/lib-callsigns
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
