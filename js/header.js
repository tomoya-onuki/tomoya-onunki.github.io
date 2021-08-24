function printHeader(worksUrl, profUrl) {
  var worksLink = '<a href="'+worksUrl+'">works</a>';
  var profLink = '<a href="'+profUrl+'">profile</a>';

  if (!worksUrl || worksUrl === '../index.html') {
    worksLink = '<a href="'+worksUrl+'" class="underbar">works</a>';
  }
  if (!profUrl) {
    var profLink = '<a href="'+profUrl+'" class="underbar">profile</a>';
  }

  var header_str = `
  <div class="header2">
    <a id="top" class="head_font title" href="`+worksUrl+`">onukitomoya</a>
    <div class="pc">
      <span class="head_menu head_font">`+worksLink+` / `+profLink+`</span>
    </div>

    <div class="mobile">
      <div class="head_menu">
        <div>onukitomoya.</div>
        <div class="head_font">`+worksLink+` / `+profLink+`</div>
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
