
$(function () {

    // smart phone
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1)
        || navigator.userAgent.indexOf('iPod') > 0
        || navigator.userAgent.indexOf('Android') > 0) {

        $('.flex_box .info').css('font-size', '60%');
        $('.flex_box .title').css('font-size', '90%');

        let relativePath = $('#menucss').attr('href')
        $('#menucss').attr('href', `${relativePath}menu_mobile.css`)


        var timer = false;
        $(window).scroll(function () {
            // // スクロール中
            // // $('.flex_box .mask').fadeIn();
            // $('.flex_box .mask').css('opacity', '1.0');

            // if (timer !== false) {
            //     clearTimeout(timer);
            // }
            // // スクロール終了時
            // timer = setTimeout(function () {
            //     $('.flex_box .mask').css('opacity', '0.0');
            // }, 200);
        });
    }
    // PC
    else {
        let relativePath = $('#menucss').attr('href')
        $('#menucss').attr('href', `${relativePath}menu_pc.css`)

        // $('.flex_box .mask').hover(
        //     function () {
        //         $(this).css('opacity', '1.0');
        //     },
        //     function () {
        //         $(this).css('opacity', '0.0');
        //     });
    }




});
