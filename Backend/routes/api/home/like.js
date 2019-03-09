const route = require('express').Router()
const { increaseLike } = require('../../../controllers/Likes')

route.get('./', (req, res) => {
    try {
        await increaseLike(req.body.tweetByUserid, req.user.userid, req.body.tweetid, req.body.noOfLikes)
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