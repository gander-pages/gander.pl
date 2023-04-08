# InPost tracking number to link converter

Google Chrome Extension: [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija)

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
