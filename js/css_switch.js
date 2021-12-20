
$(function () {

    // smart phone
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1)
        || navigator.userAgent.indexOf('iPod') > 0
        || navigator.userAgent.indexOf('Android') > 0) {

        $('.flex_box .mask').css('opacity', '0.9');
        $('.flex_box .info').css('opacity', '0.5');

    }
    // PC
    else {

    }
});
