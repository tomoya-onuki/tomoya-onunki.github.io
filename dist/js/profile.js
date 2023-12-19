window.onload = function () {
    document.querySelector('#show-more')
        .addEventListener('click', function (e) {
            document.querySelector("#more-info").style.display = "block";
            document.querySelector("#show-more").style.display = "none";
        });
}
