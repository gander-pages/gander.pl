# Delete multiple connections in LinkedIn

**Use Google Chrome**

*   Go to page _My network » Connections_
*   Select checkboxes for people to delete
*   Open _Console_ (or press F12)
*   Run code:

    JSON.stringify($('#list-panel input:checked').parents('li').map(function(){ return this.id; }).toArray());

*   Copy generated code _( \["xxxxxxx","yyyyyyyyy","zzzzzzzz"\] )_
*   Go to page _Remove Connections_
*   In console paste generated code:

    var ids = ["xxxxxxx","yyyyyyyyy","zzzzzzzz"];

*   Run code:

    $('#pickside input').each(function(){ ($.inArray(this.value, ids) !== -1) && $(this).trigger('click'); });

*   Click button _Remove connections_



[« Docker tips](docker-tips.html)

[Set GRUB to remember recently selected os »](set-grub-to-remember-recently-selected-os.html)


