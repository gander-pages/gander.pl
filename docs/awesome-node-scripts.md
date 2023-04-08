# Awesome Node.js Scripts

##  Promise **sleep**

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => await sleep(1000))();

sleep(1000).then(() => console.log('Do something after 1s'));
```
