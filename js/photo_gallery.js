// img要素を生成
for (var i = 0; i < fname.length; i++) {
  var img = document.createElement('img');
  img.src = fname[i];
  img.className = 'photo_gallery js-modal-open';
  document.getElementById('wrapper').appendChild(img);
}

$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            scrollTo(0, 0);
            var src = $(this).attr('src');
            console.log(src);

            var main_contents = document.getElementById('main_contents');
            main_contents.innerHTML = '<img style="margin-top:50px;" src=\''+src+'\'>';
            var modal = document.getElementById('modal');

            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        var main_contents = document.getElementById('main_contents');
        main_contents.innerHTML = "";
        return false;
    });
});
