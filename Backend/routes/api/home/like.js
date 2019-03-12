const route = require('express').Router()
const { increaseLike } = require('../../../controllers/Likes')

route.get('/', async (req, res) => {
    console.log('in like get request')
    try {
        await increaseLike(req.body.tweetByUserid, req.user.id, req.body.tweetid)
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