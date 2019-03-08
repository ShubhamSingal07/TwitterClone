const route = require('express').Router()

route.use('/login', require('./login'))
route.use('/signup', require('./signup'))
route.use('/home', require('./home'))
route.use('/follow', require('./follow'))
route.use('./unfollow', require('./unfollow'))
route.use('./like', require('./like'))
route.use('./dislike', require('./dislike'))

module.exports = route