const route = require('express').Router()

route.use('/login', require('./login'))
route.use('/signup', require('./signup'))
route.use('/home', require('./home'))

module.exports = route