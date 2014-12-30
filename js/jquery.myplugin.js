(function($) {
    // Shell for your plugin code

    $.fn.slideSwitch = function() {
        // Plugin code
      var $active = $('#slideshow IMG:first')
              .addClass('active');

      console.log('Slide switch.');

      $active = $('#slideshow IMG.active');
    
      if ( $active.length === 0 ) { $active = $('#slideshow IMG:last'); }

      var $next =   $active.next().length 
                  ? $active.next()
                  : $('#slideshow IMG:first');

      $active.addClass('last-active')
          .removeClass('active last-active')
          .fadeToggle('slow');  

      $next.css({opacity: 0.0})
          .addClass('active')
          .animate({opacity: 1.0}, 1000, function() {});
  };

})(jQuery);