$(function () {
    // 初期化
    const text = [
        "ベクトルの固有空間は画像認識で利用する",
        "線形代数の目的は、多変量の方程式を解くため",
        "Particle Swarm Optimizationは勾配法で求められない逆問題を解いたりできる",
    ];
    const SIZE = text.length;

    for (i = 0; i < SIZE; i++) {
        init(text[i]);
    }


    // インタラクション
    $('#submit').on('click', () => {
        let text = $('#in_text').val();
        init(text);
    });
    $('.text').each((i, elem) => {
        $(elem).on('click', () => {
            alert($(elem).text());
        });
    });


    // 描画
    const fps = 24;
    setInterval(() => {
        let h = Number($(window).height());

        $('.text').each((i, elem) => {
            let top = $(elem).css('top');
            let y = Number(top.replace('px', ''));
            let vy = Number($(elem).attr('vy'));
            let newTop = y + vy + 'px';

            if (y > h) {
                $(elem).css('top', '0px');
            } else {
                $(elem).css('top', newTop);
            }

        });
    }, 1000 / 12);




    function init(str) {
        let vy = Math.random(1) * 5;
        let w = Number($(window).width());
        let left = Math.random() * w / 2;

        $('<div></div>', {
            class: 'text',
            text: str,
            vy: vy,
            css: {
                left: left,
                top: '0px',
            }
        }).appendTo('#main');
    }
});