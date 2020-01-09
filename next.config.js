module.exports = {
    async exportPathMap( ) {
      return {
        '/': { page: '/' },
        '/artist-profile/lucy-cheesman': { page: '/artist-profile', query: {slug: 'lucy-cheesman'} },
        '/artist-profile/joanne-armitage': { page: '/artist-profile', query: {slug: 'joanne-armitage'} },
        '/artist-profile/shelly-knotts': { page: '/artist-profile', query: {slug: 'shelly-knotts'} },
        '/artist-profile/hellocatfood': { page: '/artist-profile', query: {slug: 'hellocatfood'} },
        '/artist-profile/algobabez': { page: '/artist-profile', query: {slug: 'algobabez'} },
        '/artist-profile/chiho-n-renick': { page: '/artist-profile', query: {slug: 'chiho-n-renick'} },
        '/artist-profile/type': { page: '/artist-profile', query: {slug: 'type'} },
        '/artist-profile/neil-c-smith': { page: '/artist-profile', query: {slug: 'neil-c-smith'} },
        '/artist-profile/claude-heiland-allen': { page: '/artist-profile', query: {slug: 'claude-heiland-allen'} },
        '/artist-profile/deerful': { page: '/artist-profile', query: {slug: 'deerful'} },
        '/artist-profile/thorsten': { page: '/artist-profile', query: {slug: 'thorsten'} },
        '/artist-profile/atsushi-tadokoro': { page: '/artist-profile', query: {slug: 'atsushi-tadokoro'} },
        '/artist-profile/simon-blackmore': { page: '/artist-profile', query: {slug: 'simon-blackmore'} },
        '/artist-profile/alexandra-cardenas': { page: '/artist-profile', query: {slug: 'alexandra-cardenas'} },
        '/artist-profile/digital-selves': { page: '/artist-profile', query: {slug: 'digital-selves'} },
        '/artist-profile/innocent': { page: '/artist-profile', query: {slug: 'innocent'} },
        '/artist-profile/garlic-hug': { page: '/artist-profile', query: {slug: 'garlic-hug'} },
        '/artist-profile/akihiro-kubota': { page: '/artist-profile', query: {slug: 'akihiro-kubota'} },
        '/artist-profile/livedog': { page: '/artist-profile', query: {slug: 'livedog'} },
        '/artist-profile/uiae': { page: '/artist-profile', query: {slug: 'uiae'} },
        '/artist-profile/conde-zero': { page: '/artist-profile', query: {slug: 'conde-zero'} },
        '/artist-profile/dimitris-kyriakoudis': { page: '/artist-profile', query: {slug: 'dimitris-kyriakoudis'} },
        '/artist-profile/bit-print': { page: '/artist-profile', query: {slug: 'bit-print'} },
        '/artist-profile/yaxu': { page: '/artist-profile', query: {slug: 'yaxu'} },
        '/artist-profile/shelly-knotts-n-nick-collins': { page: '/artist-profile', query: {slug: 'shelly-knotts-n-nick-collins'} },
        '/event-details/workshop': { page: '/event-details', query: {slug: 'workshop'} },
        '/event-details/meetup': { page: '/event-details', query: {slug: 'meetup'} },
        '/event-details/algorave': { page: '/event-details', query: {slug: 'algorave'} },
        '/event-details/toplabmoot': { page: '/event-details', query: {slug: 'toplabmoot'} },
      }
    },
  }


// module.exports = {
// async exportPathMap() {

//     const pages = dataArtists.reduce(
//     (pages, post) =>
//         Object.assign({}, pages, {
//         [`/artist-profile/${post.slug}': { page: '/artist-profile/[slug]' },
//         }),
//     {}
//     )

//     return Object.assign({}, pages, {
//     '/': { page: '/' },
//     })
// },
// }