$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            scrollTo(0, 0);
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});
