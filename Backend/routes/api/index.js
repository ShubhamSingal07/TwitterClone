const route = require('express').Router()

route.use('/login', require('./login'))
route.use('/signup', require('./signup'))
route.use('/home', require('./home'))
route.use('/unfollow', require('./home/unfollow'))
route.use('/follow', require('./home/follow'))
route.use('/like', require('./home/like'))
route.use('/dislike', require('./home/dislike'))
route.use('/tweets',require('./home/tweets'))
route.use('/logout',require('./home/logout'))

module.exports = route