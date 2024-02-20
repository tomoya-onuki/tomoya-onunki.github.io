function printHeader() {
    var year = new Date().getFullYear();
    var foot_str = `<div class="header-logo"><a id="top" href="../" class="head_font"><div class="title">onu</div></a><div class="info">&copy; 2017-${year} onu</div></div>`;
    document.write(foot_str);
}