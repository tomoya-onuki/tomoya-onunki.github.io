$(function () {
    console.log($(this))
    $('.block_r').each(function () {
        $(this).find('a').attr('target', '_blank')
    })
})