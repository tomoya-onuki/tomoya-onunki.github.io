
$(function () {

    // smart phone
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1)
        || navigator.userAgent.indexOf('iPod') > 0
        || navigator.userAgent.indexOf('Android') > 0) {

        $('.flex_box .mask').css('opacity', '0.9');
        $('.flex_box .info').css('font-size', '60%');
        $('.flex_box .title').css('font-size', '90%');

    }
    // PC
    else {

    }
});
