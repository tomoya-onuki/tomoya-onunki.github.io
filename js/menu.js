$(function(){
  $('#hamb_menu').click(function() {
    $(this).toggleClass('active');
    $('.head_menu').fadeToggle("slow", "linear");
  });

  var pre_w = $(window).width();
  $(window).resize(function() {
      var now_w = $(this).width();
      if ( now_w > 980 && pre_w <= 980) {
        $('.head_menu').fadeIn();
      } else if ( now_w < 980 && pre_w >= 980) {
        $('.head_menu').css('display', 'none');
        $('#hamb_menu').removeClass('active');
      }
      pre_w = now_w;
  });
});
