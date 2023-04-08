# JavaScript fixtures

Google Chrome Extension: [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija)

### m.piekielni.pl

    jQuery(function($){
        $('header,footer,iframe,.ads,#footer').remove();
        $('#mobile-content,.picture').css('max-width', 'none');
        $('.pictureWrapper').css('border-bottom', '1px dashed gray');
    });

### sololearn.com

    $(document).keypress(function(e) {
        if(e.which == 13) { // Enter
            $('#textView > button:visible').trigger('click');
        }
    });

### alltube.tv

    jQuery(function($) {
      $('body > div.container-fluid > div:nth-child(2) > div.col-sm-7').attr('id', 'left-column');
      $('body > div.container-fluid > div:nth-child(2) > div.col-sm-5').attr('id', 'right-column');

      $('span[class="glyphicon glyphicon-chevron-left"]').parent().attr('id','btn-prev');
      $('span[class="glyphicon glyphicon-chevron-right"]').parent().attr('id','btn-next');

      $('#right-column').empty(); // right column
      $('#iframe-container').show(); // player container
      $('#iframe-container table').attr('id', 'links-table').appendTo('#right-column'); // links
      $('#input-search').parents('form').detach().prependTo('body'); // searchbar
      $('#links-table a.watch').css('padding', '3px 20px'); // watch button
      $('ul.episode-list li.episode').show(); // show all episodes
      $('#search').css('margin', 0);
      $('#iframe-container').next().prependTo('#right-column').css('margin-bottom', '10px'); // navigation
      $('#right-column').wrapInner(
          $('<div>', {'id':'right'}).css({
              'position': 'fixed'
          })
      );

      (function(tr) { // cda on top
        tr.has('img[alt=cda]').detach().prependTo(tr.parent());
      })($('#links-table > tbody > tr'));

      $('header').remove(); // header
      $('#please-wait-container').remove(); // please wait counter
      $('#undermenu').remove(); // banner under menu
      $('#left-column > hr').first().prevAll().addBack().remove(); //social
      $('#report-episode-form,#report-movie-button').prev().addBack().remove(); // report broken
      $('#iframe-container h3').remove(); // info
      $('#slide-panel').remove(); // slide for links
      $('div.navbar.navbar-fixed-bottom').remove(); // bottom nav
      $('#links-table td').has('.fa-user').remove(); // uploader
      $('#links-table div').find('.up,.down').remove(); // rate
      $('#version-switch').remove(); // theme switcher
      $('a.more-less').remove(); // more less episodes
      $('#tools').remove();
      $('#cookies').remove();
    });



[« LAMP](lamp.html)

[PhpStorm tips and tricks »](phpstorm-tips-and-tricks.html)


