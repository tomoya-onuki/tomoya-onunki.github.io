$(function(){
  var top_y = window.sessionStorage.getItem(['y']);
  scrollTo(0, top_y);
  window.sessionStorage.removeItem(['y']);

  $('a').each(function(){
    $(this).on('click', function(){
      top_y = window.pageYOffset;
      window.sessionStorage.setItem(['y'],[top_y]);
    });
  });
});
