const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()


routes.add('artist-profile', '/artist-profile/:slug')
routes.add('event-details', '/event-details/:slug')