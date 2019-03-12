const route = require('express').Router()
const { unfollow } = require('../../../controllers')

route.get('/', async (req, res) => {
    try {
        if (req.user) {
            await unfollow(req.user.id, req.body.followingId)
            res.send({
                success: true,
                message: "Successfully unfollowed"
            })
        } else {
            throw new Error('cannot unfollow')
        }
    } catch (err) {
        res.send({
            message: "Could not unfollow"
        })
    }
})

module.exports = route