$(function() {
  // $('#top').click(
  //   function() {
  //     loadPage(
  //       // './index.html',
  //       'https://tomoya-onuki.github.io/index.html',
  //       'TOMOYA ONUKI',
  //       './'
  //     )
  //   }
  // );

  $('#works').click(
    function() {
      loadPage(
        // './works.html',
        'https://tomoya-onuki.github.io/works.html',
        'WORKS | TOMOYA ONUKI',
        './works'
      )
    }
  );

  $('#profile').click(
    function() {
      loadPage(
        // './profile.html',
        'https://tomoya-onuki.github.io/profile.html',
        'PROFILE | TOMOAY ONUKI',
        './profile'
      )
    }
  );

});


function loadPage(url, title, addres) {
  $.ajax({
    url: url,
    dataType: 'html',
    success: function(data) {
      $('#main').html(data);
    },
    error: function(data) {
      alert('error');
    }
  });
  console.log(url+","+title+","+addres);
  // $('#main').load(url);
  document.title = title;
  history.pushState(null,null,url);
}
