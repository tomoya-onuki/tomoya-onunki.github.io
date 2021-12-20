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
            <h2><a id="allView" style="text-align: center;cursor:pointer"> show more</a></h2>`);
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