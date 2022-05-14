function printHeader(topUrl, profUrl, id) {
  // var worksLink = '<a href="'+topUrl+'">works</a>';
  var profLink = '<a href="'+profUrl+'">profile</a>';

  var artLink = '<a href="'+topUrl+'art/">art</a>';
  var filmLink = '<a href="'+topUrl+'film/">film</a>';
  var productLink = '<a href="'+topUrl+'product/">product</a>';

  if (id === 'works') {
    // worksLink = '<a href="'+topUrl+'" class="underbar">works</a>';
  }
  else if (id === 'prof') {
    var profLink = '<a href="'+profUrl+'" class="underbar">profile</a>';
  }
  else if (id === 'art') {
    var artLink = '<a href="'+topUrl+'art/" class="underbar">art</a>';
  }
  else if (id === 'film') {
    var filmLink = '<a href="'+topUrl+'film/" class="underbar">film</a>';
  }
  else if (id === 'product') {
    var productLink = '<a href="'+topUrl+'product/" class="underbar">product</a>';
  }
  // if (!topUrl || topUrl === './') {
  //   worksLink = '<a href="'+topUrl+'" class="underbar">works</a>';
  // }
  if (!profUrl) {
    var profLink = '<a href="'+profUrl+'" class="underbar">profile</a>';
  }

  var header_str = `
  <div class="header2">
    <a id="top" class="head_font title" href="`+topUrl+`">onk</a>


    <div class="pc">
      <div class="head_menu head_font">
        <span style="margin-left:15px;">`+artLink+`</span>
        <span style="margin-left:15px;">`+filmLink+`</span>
        <span style="margin-left:15px;">`+productLink+`</span>
        <span style="margin-left:15px;">/</span>
        <span style="margin-left:15px;">`+profLink+`</span>
      </div>
    </div>

    <div class="mobile">
      <div class="head_menu">
        <div>onk</div>
        <div class="head_font">
          <div>`+artLink+`</div>
          <div>`+filmLink+`</div>
          <div>`+productLink+`</div>
          <hr>
          <div>`+profLink+`</div>
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
  
  // var header_str = `
  // <div class="header2">
  //   <a id="top" class="head_font title" href="`+topUrl+`">onukitomoya</a>


  //   <div class="pc">
  //     <div class="head_menu head_font">
  //       <span style="margin-left:15px;">`+worksLink+`</span>
  //       <span style="margin-left:15px;">/</span>
  //       <span style="margin-left:15px;">`+profLink+`</span>
  //     </div>
  //   </div>

  //   <div class="mobile">
  //     <div class="head_menu">
  //       <div>onukitomoya</div>
  //       <div class="head_font">`
  //         +worksLink+` / `+profLink+`
  //       </div>
  //       <div class="footer" style="font-size:20%;">
  //         <script type="text/javascript"> printFooter(); </script>
  //       </div>
  //     </div>
  //   </div>
  

  //   <span id="hamb_menu">
  //     <div></div><div></div><div></div>
  //   </span>
  // </div>`;
  document.write(header_str);
}
