const route = require('express').Router()
const { decreaseLike } = require('../../../controllers/Likes')

route.get('/', async (req, res) => {
    try {
        await decreaseLike(req.body.tweetByUserid, req.user.id, req.body.tweetid)
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