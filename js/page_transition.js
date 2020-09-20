$(function() {

	// $('#main_frame').load("top.html");

	$('#hoge a').click(function(e) {
	// $('.half_gif a').click(function(e) {
    console.log("hoge");
		e.preventDefault();
		var url = $(this).attr('href');
		$('#main_frame').load(url);
	});

});
