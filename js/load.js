$(function() {
  $('#works').click(
    function() {
      loadPage(
        'https://tomoya-onuki.github.io/works.html',
        'WORKS | TOMOYA ONUKI',
        './works'
      );
    }
  );

  $('#profile').click(
    // loadPage('https://tomoya-onuki.github.io/profile.html')
  );
});


function loadPage(url, title, addres) {
  $.ajax({
    url: url,
    dataType: 'html',
    success: function(data) {
      $('#main').html(data);
      document.title = title;
    },
    error: function(data) {
      alert('error');
    }
   });
  document.title = title;
  // window.location.replace(addres);
}
