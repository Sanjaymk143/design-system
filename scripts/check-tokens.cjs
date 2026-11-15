'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const sass = require('sass');
const root = path.resolve(__dirname, '..');
const directory = path.join(root, 'packages/tokens');
const metadata = JSON.parse(fs.readFileSync(path.join(directory, 'package.json'), 'utf8'));
const expected = sass.compile(path.join(root, 'src/styles/abstracts/_tokens.scss'), {
  style: 'compressed', charset: false,
}).css + '\n';
assert.equal(fs.readFileSync(path.join(directory, 'tokens.css'), 'utf8'), expected,
  'Token artifact is stale. Run npm run build:tokens and review the package version.');
assert.equal(metadata.exports['./tokens.css'], './tokens.css');
assert.deepEqual(metadata.files, ['tokens.css', 'README.md']);
assert.equal(metadata.dependencies, undefined, 'CSS-only package must not pull in React or build tools');
assert(expected.includes('--ds-font-size-xs:') && expected.includes('--ds-spacing-xs:'));
assert(!expected.includes('\uFEFF'), 'Token bundle must concatenate safely');
for (const file of metadata.files) assert(fs.statSync(path.join(directory, file)).isFile());
console.log('PASS: token source/artifact parity, package exports, contents and no runtime dependencies.');
