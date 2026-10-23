---
lastUpdated: 2023-04-11T01:08:30+02:00
title: Take all registered jQuery Event Handlers
tags: [jquery, event, handler, registered, take, all]
---

```js
jQuery(function ($) {
    var table = [];
    $('*').each(function (key, item) {
        var events = $._data(item, 'events');
        for (var event in events) {
            if (events.hasOwnProperty(event)) {
                for (var i = 0; i < events[event].length; i++) {
                    table[table.length] = $.extend({
                        item: item
                    }, events[event][i], {
                        handler: events[event][i].handler.toString()
                    });
                }
            }
        }
    });
    console.table(table);
});
```
