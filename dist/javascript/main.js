/**
 * Pixel2HTML - 123/123
 */

var msg = 'Pixel2HTML - 123/123';

function printLog(log){
    'use strict';
  return console && console.log(log);
}

printLog(msg);


$(document).ready(function(){
  $('.slick-module-slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
  });

  /*Scroll transition to anchor*/
  $("a.toscroll").on('click',function(e) {
    var url = e.currentTarget.href;
    var hash = url.substring(url.indexOf("#")+1);
    $('html, body').animate({
        scrollTop: $('#'+hash).offset().top -50
    }, 500);
    $('.navbar-toggle').click()
    return false;
  });

  Response.create({
      prop : "width",
      breakpoints : [1200, 992, 768, 480, 320, 0]
  });

  Response.crossover('width', function() {
      if (Response.band(0, 991)) {
          // true in viewpors 0-991 px
          // xs to sm
          $('.toCollapseInMobile').removeClass('in')          
      } else {
          $('.toCollapseInMobile').addClass('in')
      }
  });

  Response.ready(function() {
      $(window).trigger('resize');
  });
});
