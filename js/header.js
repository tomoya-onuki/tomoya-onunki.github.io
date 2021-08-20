function printHeader(worksUrl, aboutUrl, reelUrl) {
  var header_str = `
  <div class="header2 head_font1">
    <a id="top" class="head_logo" href="https://tomoya-onuki.github.io">ONUKITOMOYA.</a>
    <div class="pc">
      <span class="head_menu">
          <a href="`+worksUrl+`">WORKS</a> / <a href="`+aboutUrl+`">PROFILE</a>
      </span>
    </div>

    <div class="mobile">
      <div class="head_menu">
        <div>ONUKITOMOYA.</div>
        <hr>
        <div><a href="https://tomoya-onuki.github.io">TOP</a></div>
        <div><a href="`+worksUrl+`">WORKS</a></div>
        <div><a href="`+aboutUrl+`">PROFILE</a></div>
        <div><a href="https://tomoya-onuki.github.io/reel">REEL</a></div>
        <hr>

        <div class="footer" style="font-size:20%;">
              <script type="text/javascript"> printFooter(); </script>
        </div>
      </div>
    </div>
  

    <span id="hamb_menu">
      <div></div><div></div><div></div>
    </span>
  </div>`;
  document.write(header_str);
}
