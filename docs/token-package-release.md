# Token package review — 31 October 2026

The framework-independent token package is ready for a separate source-control
checkpoint. This does not publish the React component library.

Review/commit these files together:

- packages/tokens/package.json
- packages/tokens/tokens.css
- packages/tokens/README.md
- scripts/build-tokens.cjs
- scripts/check-tokens.cjs
- .github/workflows/ci.yml
- package.json (new token scripts plus review the pre-existing allowScripts edit)
- docs/token-package-release.md

The existing allowScripts values were preserved, not introduced by this review.
They are an independent installation-policy decision; check them when staging.

Validation commands:

```sh
npm run check:tokens
npm pack ./packages/tokens --dry-run
npm run lint
npm run test:run
npm run build
```

All passed locally. Tests: 71 across 16 files. The package contains only CSS,
metadata and documentation. The dry-run tarball SHA matches the artifact already
vendored by Pondy Taxi (60c3f09d2c0d9da11d80859bb16e4889ccb15983). No new package
version or frontend artifact replacement is needed for these tooling changes.
CI now checks stale generated tokens and dry-runs package contents.

For future token changes, edit SCSS source, run npm run build:tokens, review the
diff, bump the package version and validate the consuming app. Never replace an
already released version's archive. Keep TypeScript token consolidation and
React library exports as separate future work. No public registry release,
commit or push was performed by this review.
