/*=========================================================================================
    File Name: animation.js
    Description: Theme Component animations js
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeforest.net/user/themeselect
==========================================================================================*/
(function(window, document, $) {
	'use strict';

  // Button Animations
	$('.buttonAnimation').each(function(){
    $(this).hover( function(){
      var data = $(this).attr('data-animation');
      $(this).addClass('animated '+data);
    }, function(){
      var data = $(this).attr('data-animation');
      $(this).removeClass('animated '+data);
    });
  });

  // Collapse Animations
  $('.collapseAnimation').each(function(){
    $(this).on("click", function(){
      var data = $(this).attr('data-animation'),
      href = $(this).attr('href');
      $(href).addClass('animated '+data);
    });
  });

  // Alert Animations
  $('.alertAnimation').each(function(){
    $(this).on("click", function(){
      var data = $(this).attr('data-animation');
      $(this).parent('.alert').addClass('animated '+data);
      $(this).parent('div').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function (e) {
          $('div').removeClass('animated '+data);
      });
    });
  });
  
  // Card Animation
  $('.cardAnimation .card').appear();
  $(document).on("appear", '[data-appear="appear"]', function() {
    var $item = $(this),
      animate = $item.data("animation");

    if ($item.hasClass('appear-no-repeat')) return;
    $item.addClass('animated ' + animate);
  });

  $(document).on("disappear", '[data-appear="appear"]', function() {
    var $item = $(this),
      animate = $item.data("animation");

    if ($item.hasClass('appear-no-repeat')) return;
    $item.removeClass('animated ' + animate);
  });

})(window, document, jQuery);