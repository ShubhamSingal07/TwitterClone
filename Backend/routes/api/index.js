const route = require('express').Router()

route.use('/login', require('./login'))
route.use('/signup', require('./signup'))
route.use('/home', require('./home'))
route.use('/follow', require('./home/follow'))
route.use('./unfollow', require('./home/unfollow'))
route.use('./like', require('./home/like'))
route.use('./dislike', require('./home/dislike'))

module.exports = route