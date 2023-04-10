---
title: JavaScript fixtures
tags: [javascript, snippets]
---
# {{ $frontmatter.title }}

The code can be run in [Violentmonkey](https://violentmonkey.github.io/) extension for _Google Chrome_, _Firefox_, _Microsoft Edge_.

### m.piekielni.pl

```js
jQuery(function($){
    $('header,footer,iframe,.ads,#footer').remove();
    $('#mobile-content,.picture').css('max-width', 'none');
    $('.pictureWrapper').css('border-bottom', '1px dashed gray');
});
```

### sololearn.com
```js
$(document).keypress(function(e) {
    if(e.which == 13) { // Enter
        $('#textView > button:visible').trigger('click');
    }
});
```
