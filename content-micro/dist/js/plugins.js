(function() {
  'use strict';

  // Create Fancybox 
  var $ = jQuery.noConflict();
  $(document).ready(function() {

    if ($(window).width() <= 375) {
      $(".various").fancybox({
        maxWidth: 320,
        maxHeight: 580,
        minHeight: 220,
        fitToView: false,
        width: '100%',
        height: '100%',
        autoSize: true,
        closeClick: false,
        openEffect: 'elastic',
        closeEffect: 'elastic'
      });
    } else if ($(window).width() <= 667) {
      $(".various").fancybox({
        maxWidth: 600,
        maxHeight: 360,
        minHeight: 340,
        fitToView: false,
        width: '100%',
        height: '100%',
        autoSize: true,
        closeClick: false,
        openEffect: 'elastic',
        closeEffect: 'elastic'
      });
    } else if ($(window).width() <= 1441) {
      $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 900,
        minHeight: 620,
        fitToView: true,
        width: '80%',
        height: '98%',
        autoSize: true,
        closeClick: false,
        openEffect: 'elastic',
        closeEffect: 'elastic'
      });
    } else {
      $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        minHeight: 620,
        fitToView: true,
        width: '80%',
        height: '70%',
        autoSize: true,
        closeClick: false,
        openEffect: 'elastic',
        closeEffect: 'elastic'
      });
    }

  $(".fancybox-large")
    .fancybox({
      padding: 0,
      margin: 15,
      autoCenter: true,
      width: '100%',
      height: '100%',
      fitToView: true,
      scrollOutside: true
    });


  });

})(window);