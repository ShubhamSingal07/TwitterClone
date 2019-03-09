const route = require('express').Router()
const { decreaseLike } = require('../../../controllers/Likes')

route.get('./', (req, res) => {
    try {
        await decreaseLike(req.body.tweetByUserid, req.user.userid, req.body.tweetid, req.body.noOfLikes)
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