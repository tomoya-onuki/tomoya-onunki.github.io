// var head_str = '<div name="top" class="header">\n<div class="head_text"><a target="_self" class="head_font" href="../">TOMOYA ONUKI</a>\n<span class="head_menu">\n<a target="_self" class ="link head_menu_font" href="../works/">WORKS</a>\n<span class="head_menu_font"> / </span>\n<a target="_self" class ="link head_menu_font" href="../profile.html">ABOUT</a>\n</span></div>\n</div>';

//ヒアドキュメント
head_str = (function () {/*
<div name="top" class="header">
  <div class="head_text">
    <a target="_self" class="head_font" href="../">TOMOYA ONUKI</a>
    <span class="head_menu">
      <a id="works" target="_self" class ="link head_menu_font" href="../works/" onclick="worksBtn()">WORKS</a>
      <span class="head_menu_font"> / </span>
      <a id="about" target="_self" class ="link head_menu_font" href="../profile.html" onclick="aboutBtn()">ABOUT</a>
    </span>
  </div>
</div>
*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");
document.write(head_str);

function worksBtn() {
  document.getElementById("works").style.color ="#F43E43";
  document.getElementById("about").style.color ="#1f1f1f";
}
function aboutBtn() {
  document.getElementById("works").style.color ="#1f1f1f";
  document.getElementById("about").style.color ="#F43E43";
}
