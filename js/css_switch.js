
$(function () {

    // smart phone
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1)
        || navigator.userAgent.indexOf('iPod') > 0
        || navigator.userAgent.indexOf('Android') > 0) {

        $('.flex_box .info').css('font-size', '60%');
        $('.flex_box .title').css('font-size', '90%');

        let relativePath = $('#menucss').attr('href');
        $('#menucss').attr('href', `${relativePath}menu_mobile.css`);
    }
    // PC
    else {
        let relativePath = $('#menucss').attr('href')
        $('#menucss').attr('href', `${relativePath}menu_pc.css`)

        hoeverImage();
    }
});
