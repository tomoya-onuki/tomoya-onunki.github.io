window.onload = function() {
    document.querySelectorAll('.block_r').forEach(elem => {
        elem.querySelectorAll('a').forEach(a => {
            a.setAttribute('target', '_blank');
        });
    });
}
