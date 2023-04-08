# Take all registered jQuery Event Handlers

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

[« sudo without password](sudo-without-password.html)

[JSFiddle quick add predefined external resources »](jsfiddle-quick-add-predefined-external-resources.html)


