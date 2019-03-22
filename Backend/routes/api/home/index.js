const route = require('express').Router()
const { fetchUsers, fetchFollowingTweets, findFollowing } = require('../../../controllers')

route.post('/', async (req, res) => {

    if (req.user) {
        res.send({
            users: await fetchUsers(),
            following: await findFollowing(req.user.id),
            tweets: await fetchFollowingTweets(req.user.id, following),
        })
    } else {
        res.redirect('/api/login')
    }
})

route.get('/', (req, res) => {
    if (req.user) {

        res.send({
            homepage: true,
            user: req.user
        })
    }
    else {
        res.redirect('/api/login')
    }
})

module.exports = route

