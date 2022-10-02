// $(function () {
function printHeader(topUrl, profUrl, id) {
  let profLink = $('<a></a>')
    .attr('href', profUrl)
    .text('profile')

  let artLink = $('<a></a>')
    .attr('href', `${topUrl}media_art/`)
    .text('media art')

  let filmLink = $('<a></a>')
    .attr('href', `${topUrl}film/`)
    .text('film')

  let softwareLink = $('<a></a>')
    .attr('href', `${topUrl}software/`)
    .text('software')

  let vlogLink = $('<a></a>')
    .attr('href', `${topUrl}vlog/`)
    .text('vlog')


  if (id === 'prof') {
    profLink.addClass('underbar')
  }
  else if (id === 'art') {
    artLink.addClass('underbar')
  }
  else if (id === 'film') {
    filmLink.addClass('underbar')
  }
  else if (id === 'software') {
    softwareLink.addClass('underbar')
  }

  if (!profUrl) {
    profLink.addClass('underbar')
  }



  const topLink = $('<a></a>')
    .attr('id', 'top')
    .attr('href', topUrl)
    .text('onk')
    .addClass('head_font')
    .addClass('title')

  console.log(filmLink)

  const pcMenu = $('<div></div>')
    .addClass('head_menu')
    .addClass('head_font')
    .append($('<span></span>').attr('style', 'margin-left:20px').append(filmLink.clone()))
    .append($('<span></span>').attr('style', 'margin-left:20px').append(softwareLink.clone()))
    .append($('<span></span>').attr('style', 'margin-left:20px').append(artLink.clone()))
    .append($('<span></span>').attr('style', 'margin-left:20px').text('/'))
    .append($('<span></span>').attr('style', 'margin-left:20px').append(profLink.clone()))


  const mobileMenu = $('<div></div>')
    .addClass('head_menu')
    .addClass('head_font')
    .append($('<div></div>').attr('style', 'margin:50px 0 50px 0').append(filmLink))
    .append($('<div></div>').attr('style', 'margin:50px 0 50px 0').append(softwareLink))
    .append($('<div></div>').attr('style', 'margin:50px 0 50px 0').append(artLink))
    .append($('<div></div>').attr('style', 'margin:50px 0 50px 0').append(vlogLink))
    .append($('<hr>'))
    .append($('<div></div>').attr('style', 'margin:50px 0 50px 0').append(profLink))

  const hamb = $('<span></span>')
    .attr('id', 'hamb_menu')
    .append($('<div></div>'))
    .append($('<div></div>'))
    .append($('<div></div>'))

  const header = $('<div></div>')
    .addClass('header2')
    .append(topLink)
    .append($('<div></div>').addClass('pc').append(pcMenu))
    .append($('<div></div>').addClass('mobile').append(mobileMenu))
    .append(hamb)

  $('body').prepend(header)
}
// })