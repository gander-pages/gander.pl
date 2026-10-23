---
lastUpdated: 2023-04-11T01:08:30+02:00
title: yargs
topic: javascript
tags: [yargs]
---

```bash
npm install yargs @types/yargs
```

```js
const yargs = require('yargs/yargs');

// or:

import yargs from 'yargs/yargs';

const argv = yargs(process.argv.slice(2)).option('o', {
    alias: 'option', type: 'boolean', default: false
}).argv;

// or:

const argv = yargs(process.argv.slice(2)).options({
    o: {alias: 'option', type: 'boolean', default: false}
}).argv;
```

[yargs docs](https://github.com/yargs/yargs/tree/master/docs)

