const route = require('express').Router()
const { unfollow } = require('../../../controllers')

route.get('/', (req, res) => {
    try {
        await unfollow(req.user.userid, req.body.followingId)
        res.send({
            success: true,
            message: "Successfully unfollowed"
        })
    } catch (err) {
        res.send({
            message: "Could not unfollow"
        })
    }
})

module.exports = route