const route = require('express').Router()
const passport = require('../../passport')

route.get('/', (req, res) => {
    res.send({
        loginPage: true
    })
})

route.post('/', passport.authenticate('local', {
    failureRedirect: '/api/login',
    successRedirect: '/api/home'
}))

module.exports = route