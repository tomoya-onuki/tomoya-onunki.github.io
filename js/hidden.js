$(function() {
    var i = 0;
    $('.flex_box').each(function(){
        if (i < 9) {
            $(this).css('display','inline');
        }
        else  {
            $(this).css('display','none');
        }

        if (i == 9) {
            $(this).after(`
            <div class="fill flex_box"></div>
            <div class="fill flex_box"></div>
            <div class="fill flex_box"></div>
            `);
        }
        i++;
    });

    $('#allView').click(function() {
        $('.flex_box').each(function(){
            $(this).css('display','inline');
        });
        $('.fill').each(function(){
            $(this).css('display','none');
        });
        $(this).css('display','none');
    });
});