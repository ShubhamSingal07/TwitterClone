const route = require('express').Router()

const { fetchTweets, addTweet } = require('../../../db')
const { userAuthViaToken } = require('../../auth')

route.get('/', userAuthViaToken, async (req, res) => {
    try {
        const tweets = await fetchTweets(req.body.followingId)
        res.send({
            tweets
        })
    } catch (err) {
        throw new Error('New tweets cant be fetched right now')
    }
})

route.post('/', userAuthViaToken, async (req, res) => {
    try {
        const tweet =await addTweet(req.user.id, req.body.tweet,req.user.username)
        res.send({
            success: true,
            message: 'Tweeted successfully',
            tweet
        })
    } catch (err) {
        throw new Error('Your tweet was not added. Try again next time')
    }
})

module.exports = route