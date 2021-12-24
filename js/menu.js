$(function(){
  $('#hamb_menu').click(function() {
    $(this).toggleClass('active');
    $('.mobile > .head_menu').fadeToggle("slow", "linear");
  });

  // リサイズした時の処理
  $(window).resize(function() {
      if ( $('.pc > .head_menu').css('display') !== 'none' ) {
        $('.mobile > .head_menu').css('display', 'none');
        $('#hamb_menu').removeClass('active');
      }
  });
});
