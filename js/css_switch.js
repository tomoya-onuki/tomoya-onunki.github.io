
$(function () {
    var device = 0 // -1: smart phone, 1:pc
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1)
        || navigator.userAgent.indexOf('iPod') > 0
        || navigator.userAgent.indexOf('Android') > 0) {

        $('#main').css({
            'width': '104%',
            'margin-left': '-2%'
        });

        device = -1;
    } else {
        $('#main').css({
            'width': '90%',
            'margin-left': '5%'
        });
        device = 1;
    }
});
