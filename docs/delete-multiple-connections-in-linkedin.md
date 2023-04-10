---
title: Delete multiple connections in LinkedIn
tags: [linkedin, javascript]
---
# {{ $frontmatter.title }}

1.   Use Google Chrome
2.   Go to page _My network » Connections_
3.   Select checkboxes for people to delete
4.   Open _Console_ (or press F12)
5.   Run code:

```js
JSON.stringify($('#list-panel input:checked').parents('li').map(function(){ return this.id; }).toArray());
```

6.   Copy generated code _( \["xxxxxxx","yyyyyyyyy","zzzzzzzz"\] )_
7.   Go to page _Remove Connections_
8.   In console paste generated code:

```js
var ids = ["xxxxxxx","yyyyyyyyy","zzzzzzzz"];
```

9.   Run code:

```js
$('#pickside input').each(function(){ ($.inArray(this.value, ids) !== -1) && $(this).trigger('click'); });
```

10.   Click button _Remove connections_
