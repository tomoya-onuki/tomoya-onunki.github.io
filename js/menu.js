$(function(){
  $('#hamb_menu').click(function() {
    $(this).toggleClass('active');
    $('.head_menu').fadeToggle("slow", "linear");
  });
});
