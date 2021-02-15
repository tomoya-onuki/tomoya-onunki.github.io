function printHeader(worksUrl, aboutUrl) {
  var header_str = `
  <div class="header2 head_font1">
    <a id="top" class="head_logo" href="https://tomoya-onuki.github.io">TOMOYAONUKI.</a>
    <div class="pc">
      <span class="head_menu">
          <a href="`+worksUrl+`">WORKS</a> / <a href="`+aboutUrl+`">ABOUT</a>
      </span>
    </div>

    <div class="mobile">
      <div class="head_menu">
        <div>TOMOYAONUKI.</div>
        <hr>
        <div><a href="https://tomoya-onuki.github.io">TOP</a></div>
        <div><a href="`+worksUrl+`">WORKS</a></div>
        <div><a href="`+aboutUrl+`">ABOUT</a></div>
        <div><a href="http://vimeo.com/450021560" target="_blank">SHOWREEL</a></div>
      </div>
    </div>

    <span id="hamb_menu">
      <div></div><div></div><div></div>
    </span>
  </div>`;
  document.write(header_str);
}
