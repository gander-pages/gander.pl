---
title: jQuery `getScript` alternative
tags: [javascript, jquery, getScript, loadScript, async, await, promise]
---
# {{ $frontmatter.title }}

{{ $frontmatter.tagz }}

```js
const getScript = url => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.onerror = reject;
    script.onload = script.onreadystatechange = () => {
        if (this.readyState && this.readyState !== 'loaded' && this.readyState !== 'complete') return;
        script.onload = script.onreadystatechange = null;
        resolve();
    };
    document.head.appendChild(script);
});
```

### Sources:

*   [https://api.jquery.com/jquery.getscript/](https://api.jquery.com/jquery.getscript/)
*   [https://stackoverflow.com/a/61903296/4559414](https://stackoverflow.com/a/61903296/4559414)
