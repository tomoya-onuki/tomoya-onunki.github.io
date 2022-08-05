function printHeader(topUrl, profUrl, id) {
  $prof = $('<a></a>').attr('href', profUrl)
  $film = $('<a></a>').attr('href', `${topUrl}/film/`)
  $software = $('<a></a>').attr('href', `${topUrl}/software/`)
  $other = $('<a></a>').attr('href', `${topUrl}/other/`)

  // var profLink = '<a href="'+profUrl+'">profile</a>';
  // var otherLink = '<a href="'+topUrl+'other/">other</a>';
  // var filmLink = '<a href="'+topUrl+'film/">film</a>';
  // var softwareLink = '<a href="'+topUrl+'software/">software</a>';

  if (id === 'prof' || !profUrl) {
    $prof.addClass('underbar')
  }
  else if (id === 'other') {
    $other.addClass('underbar')
  }
  else if (id === 'film') {
    $film.addClass('underbar')
  }
  else if (id === 'software') {
    $software.addClass('underbar')
  }


  $logo = $('<a></a>')
    .addClass('head_font', 'title')
    .attr('id', 'top')
    .attr('href', topUrl)
    .text('onk')

  $pcMenu = $('<div></div>')
    .addClass('pc')
    .appendTo(
      $('<div></div>').addClass('head_menu', 'head_font')
    )


  var header_str = `
  <div class="header2">
    <a id="top" class="head_font title" href="`+ topUrl + `">onk</a>


    <div class="pc">
      <div class="head_menu head_font">
      <span style="margin-left:15px;">`+ filmLink + `</span>
      <span style="margin-left:15px;">`+ softwareLink + `</span>
      <span style="margin-left:15px;">`+ otherLink + `</span>
        <span style="margin-left:15px;">/</span>
        <span style="margin-left:15px;">`+ profLink + `</span>
      </div>
    </div>

    <div class="mobile">
      <div class="head_menu">
        <div>onk</div>
        <div class="head_font">
        <div>`+ filmLink + `</div>
        <div>`+ softwareLink + `</div>
        <div>`+ otherLink + `</div>
          <hr>
          <div>`+ profLink + `</div>
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
