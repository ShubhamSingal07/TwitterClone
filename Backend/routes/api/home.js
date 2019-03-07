const route = require('express').Router()
const { fetchUsers, fetchTweets } = require('../../controllers')

route.get('/', (req, res) => {
    res.send({
        homePage: true,
        users: fetchUsers(),
        tweets: fetchTweets()
    })
})

module.exports = route

