'use strict';

const fs = require('node:fs');
const path = require('node:path');
const sass = require('sass');
const root = path.resolve(__dirname, '..');
// The existing stylesheet remains the source for the CSS token contract.
const result = sass.compile(path.join(root, 'src/styles/abstracts/_tokens.scss'), {
  style: 'compressed', charset: false,
});
fs.writeFileSync(path.join(root, 'packages/tokens/tokens.css'), result.css + '\n');
console.log('Built framework-independent CSS tokens.');
