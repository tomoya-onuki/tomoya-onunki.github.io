function printHeader(worksUrl, profUrl, id) {
  var worksLink = '<a href="'+worksUrl+'">works</a>';
  var profLink = '<a href="'+profUrl+'">profile</a>';

  // var artLink = '<a href="'+worksUrl+'art.html">art</a>';
  // var movLink = '<a href="'+worksUrl+'movie.html">movie</a>';
  // var prodLink = '<a href="'+worksUrl+'product.html">product</a>';

  if (id === 'works') {
    worksLink = '<a href="'+worksUrl+'" class="underbar">works</a>';
  }
  else if (id === 'prof') {
    var profLink = '<a href="'+profUrl+'" class="underbar">profile</a>';
  }
  // else if (id === 'art') {
  //   var artLink = '<a href="'+worksUrl+'art.html" class="underbar">art</a>';
  // }
  // else if (id === 'mov') {
  //   var movLink = '<a href="'+worksUrl+'movie.html" class="underbar">movie</a>';
  // }
  // else if (id === 'prod') {
  //   var prodLink = '<a href="'+worksUrl+'product.html" class="underbar">product</a>';
  // }
  // if (!worksUrl || worksUrl === './') {
  //   worksLink = '<a href="'+worksUrl+'" class="underbar">works</a>';
  // }
  // if (!profUrl) {
  //   var profLink = '<a href="'+profUrl+'" class="underbar">profile</a>';
  // }

  /*var header_str = `
  <div class="header2">
    <a id="top" class="head_font title" href="`+worksUrl+`">onukitomoya</a>


    <div class="pc">
      <div class="head_menu head_font">
        <span style="margin-left:15px;">`+worksLink+`</span>
        <span style="margin-left:15px;">`+artLink+`</span>
        <span style="margin-left:15px;">`+movLink+`</span>
        <span style="margin-left:15px;">`+prodLink+`</span>
        <span style="margin-left:15px;">/</span>
        <span style="margin-left:15px;">`+profLink+`</span>
      </div>
    </div>

    <div class="mobile">
      <div class="head_menu">
        <div>onukitomoya</div>
        <div class="head_font">`
          +worksLink+` / `+profLink+`
        </div>
        `+artLink+` / `+movLink+` / `+prodLink+`
        <div class="footer" style="font-size:20%;">
          <script type="text/javascript"> printFooter(); </script>
        </div>
      </div>
    </div>
  

    <span id="hamb_menu">
      <div></div><div></div><div></div>
    </span>
  </div>`;*/
  
  var header_str = `
  <div class="header2">
    <a id="top" class="head_font title" href="`+worksUrl+`">onukitomoya</a>


    <div class="pc">
      <div class="head_menu head_font">
        <span style="margin-left:15px;">`+worksLink+`</span>
        <span style="margin-left:15px;">/</span>
        <span style="margin-left:15px;">`+profLink+`</span>
      </div>
    </div>

    <div class="mobile">
      <div class="head_menu">
        <div>onukitomoya</div>
        <div class="head_font">`
          +worksLink+` / `+profLink+`
        </div>
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
