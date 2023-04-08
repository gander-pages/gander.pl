# yargs

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

