---
title: JSFiddle quick add predefined external resources
tags: [jsfiddle]
---
# {{ $frontmatter.title }}

The code can be run in [Violentmonkey](https://violentmonkey.github.io/) extension for _Google Chrome_, _Firefox_, _Microsoft Edge_.

```js
jQuery.noConflict();
jQuery(function() {
  var external_resources = {
    'bootstrap': [
      'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'
    ]
  };

  var external_resources_form = jQuery('#external-resources-form').wrapInner(
    jQuery('<div>').css({
      'position': 'relative',
      'margin-bottom': '5px'
    })
  );

  jQuery.each(external_resources, function(name, resources) {
    jQuery('<button>').text(name).click(function(event) {
      event.preventDefault();
      jQuery.each(resources, function(index, resource) {
        jQuery('#external_resource').val(resource);
        jQuery('#add_external_resource > i').trigger('click');
      });
    }).appendTo(external_resources_form);
  });
});
```

## Default latest jQuery selected:

```js
jQuery('#js_lib option').attr('selected', '').each(function() {
    var option = jQuery(this);
    if (/^jQuery\s\d+\.\d+\.\d+$/i.test(option.text())) {
      option.attr('selected', 'selected');
      option.parents('select').val(option.val());
      return false;
    }
});
```
