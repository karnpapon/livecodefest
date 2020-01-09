const dataArtists = require('./data/artists')
const dataEvents = require('./data/events')


module.exports = {
  async exportPathMap() {
    const pages = dataArtists.reduce(
      (pages, artist) =>
        Object.assign({}, pages, {
          [`/artist-profile/${artist.slug}`]: { page: '/artist-profile', query: {slug: artist.slug} },
        }),
      {}
    )

    const pageEvents = dataEvents.reduce(
      (pageEvents, event) =>
        Object.assign({}, pageEvents, {
          [`/event-details/${event.slug}`]: { page: '/event-details', query: {slug: event.programme} },
        }),
      {}
    )

    const allPages = { ...pages, ...pageEvents}

    return Object.assign({}, allPages, {
      '/': { page: '/' },
    })

  },
}