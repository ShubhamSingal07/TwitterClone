const route = require('express').Router()

const { userAuthViaToken } = require('../../auth')
const { unfollow } = require('../../../db')

route.post('/', userAuthViaToken, async (req, res) => { 
    try {
            await unfollow(req.user.id, req.body.followingId)
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