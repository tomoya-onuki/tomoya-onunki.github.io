function printHeader(topUrl, profUrl, id) {
  var profLink = $('<a></a>')
    .attr('href', profUrl)
    .text('profile')

  var artLink = $('<a></a>')
    .attr('href', `${topUrl}media_art/`)
    .text('media art')

  var filmLink = $('<a></a>')
    .attr('href', `${topUrl}film/`)
    .text('film')

  var softwareLink = $('<a></a>')
    .attr('href', `${topUrl}software/`)
    .text('software')


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
}