# Pondy design tokens

Versioned CSS custom properties, with no React or JavaScript runtime dependency.
Import `@pondy/design-tokens/tokens.css` before application styles. Consumers can
override semantic variables in their own theme. The source is
`src/styles/abstracts/_tokens.scss` in the Design System repository; the existing
TypeScript token objects are not an additional source for this CSS package.

From the Design System root:

```sh
node scripts/build-tokens.cjs
npm run check:tokens
npm pack ./packages/tokens
```

The generated `tokens.css` is included in the package. Regenerate it when source
tokens change, bump the package version, and test consumers before releasing.
This private package can be installed from a tarball without registry publishing.
It does not export React components or claim to unify the existing TypeScript
token definitions. React library packaging is a separate future task.
