---
title: InPost tracking number to link converter
tags: [javascript, inpost, tracking, number, link, parcel, allegro, manager]
---
# {{ $frontmatter.title }}

The code can be run in [Violentmonkey](https://violentmonkey.github.io/) extension for _Google Chrome_, _Firefox_, _Microsoft Edge_.

```js
jQuery(function($) {
    // manager.paczkomaty.pl
    // allegro.pl
    $('.number > span, div.jsAddPackage.jsonLabel li').each(function (index, item) {
        item = $(item);
        var value = $.trim(item.text());
        if (/^\d{24}$/.test(value))
        {
            item.html(
                $('<a/>')
                .text(value)
                .attr('href', 'https://twoj.inpost.pl/pl/znajdz-przesylke?parcel=' + value)
                .attr('target', '_blank')
                .get()
            );
        }
    });
});
```
