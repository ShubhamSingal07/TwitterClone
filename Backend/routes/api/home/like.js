const route = require('express').Router()

const { increaseLike } = require('../../../db')
const { userAuthViaToken } = require('../../auth')

route.post('/', userAuthViaToken, async (req, res) => {
    try {
        await increaseLike(req.body.tweetByUserId, req.user.id, req.body.tweetid)
        res.send({
            success: true,
            message: "tweet liked"
        })
    } catch (err) {
        res.send({
            message: "Could not like right now"
        })
    }

})

module.exports = route