$(function () {
    $('.flex_box').each(function () {
        $(this)
            .on('mouseover', function () {
                const lowSrc = $(this).find('img').attr('src');
                const highSrc = lowSrc.replace('index/', 'index/high/');
                $(this).find('img')
                    .attr('src', highSrc)
                    .css({
                        'filter': `blur(0px)`
                    });
            })
            .on('mouseout', function () {
                const highSrc = $(this).find('img').attr('src');
                const lowSrc = highSrc.replace('high/', '');
                $(this).find('img')
                    .attr('src', lowSrc)
                    .css({
                        'filter': 'blur(10px)'
                    });
            });
    });
});