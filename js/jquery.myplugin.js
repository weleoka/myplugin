(function($) {

    $.fn.slideSwitch = function() {

      var $active, $selected;

      $active = $('.slideshow IMG.active');
      $selected = $('.slideshow_thumbs IMG.selected');

      var $next =   $active.next().length
                  ? $active.next()
                  : $('.slideshow IMG:first');
      var $nxTu =   $selected.next().length
                  ? $selected.next()
                  : $('.slideshow_thumbs IMG:first');                  

      $active   .removeClass('active');
      $selected .removeClass('selected');
              
      $next.addClass('active');        
      $nxTu.addClass('selected');

    };

 })(jQuery);