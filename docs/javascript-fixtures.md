# JavaScript fixtures

Google Chrome Extension: [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija)

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
