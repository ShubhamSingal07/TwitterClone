const route = require('express').Router()

const { decreaseLike } = require('../../../db')
const { userAuthViaToken } = require('../../auth')

route.post('/', userAuthViaToken, async (req, res) => {
    try {
        await decreaseLike(req.body.tweetByUserId, req.user.id, req.body.tweetid)
        res.send({
            success: true,
            message: "tweet disliked"
        })
    } catch (err) {
        res.send({
            message: "Could not dislike right now"
        })
    }

})

module.exports = route