---
lastUpdated: 2023-04-11T01:08:30+02:00
title: Awesome Node.js Scripts
tags: [nodejs, javascript]
---

##  Promise **sleep**

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => await sleep(1000))();

sleep(1000).then(() => console.log('Do something after 1s'));
```
