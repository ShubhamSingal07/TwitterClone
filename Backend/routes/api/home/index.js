const route = require('express').Router()
const { fetchUsers, fetchFollowingTweets } = require('../../../controllers')

route.get('/', async (req, res) => {

    if (req.user) {
        res.send({
            homePage: true,
            users: await fetchUsers(),
            tweets: await fetchFollowingTweets(req.user.id)
        })
    } else {
        res.redirect('/api/login')
    }
})

module.exports = route

