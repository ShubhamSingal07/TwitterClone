const route = require('express').Router()
const { fetchUsers, fetchFollowingTweets } = require('../../../controllers')

route.get('/', (req, res) => {
    if (req.user) {
        res.send({
            homePage: true,
            users: fetchUsers(),
            tweets: fetchFollowingTweets(req.user.userid)
        })
    }else{
        res.redirect('/api/login')
    }
})

module.exports = route

