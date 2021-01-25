function printHeader(worksUrl, aboutUrl) {
  var header_str = `
  <div class="header2 head_font1">
    <a id="top" class="head_logo" href="https://tomoya-onuki.github.io">TOMOYAONUKI.</a>
    <span class="head_menu">
      <a href="`+worksUrl+`">WORKS</a> / <a href="`+aboutUrl+`">ABOUT</a>
    </span>
    <span id="hamb_menu">
      <div></div><div></div><div></div>
    </span>
  </div>`;
  document.write(header_str);
}
