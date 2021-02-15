$(function(){
  $('#hamb_menu').click(function() {
    $(this).toggleClass('active');
    $('.mobile > .head_menu').fadeToggle("slow", "linear");
  });

  // リサイズした時の処理
  $(window).resize(function() {
      // mobile -> pc
      if ( $(this).width() > 980 ) {
        $('.pc > .head_menu').fadeIn();

      // pc -> mobile
      } else if ( $(this).width() < 980 ) {
        $('.mobile > .head_menu').css('display', 'none');
        $('#hamb_menu').removeClass('active');
      }
  });
});
