function hoeverImage() {
    $('.flex_box').each(function () {
        $(this)
            .on('mouseover', function () {
                const lowSrc = $(this).find('img').attr('src');
                const highSrc = lowSrc.replace('index/', 'index/high/');
                $(this).find('img')
                    .attr('src', highSrc)
                    .css({
                        'width': '100%',
                        'height': '100%',
                        'transform': 'translate(0, 0)',
                        'filter': `blur(0px)`
                    });
            })
            .on('mouseout', function () {
                const highSrc = $(this).find('img').attr('src');
                const lowSrc = highSrc.replace('high/', '');
                $(this).find('img')
                    .attr('src', lowSrc)
                    .css({
                        'width': 'calc(100% + 12px)',
                        'height': 'calc(100% + 12px)',
                        'transform': 'translate(-6px, -6px)',
                        'filter': 'blur(5px) saturate(1.2)'
                    });
            });
    });
};