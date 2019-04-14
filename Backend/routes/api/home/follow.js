const route = require('express').Router()

const { follow } = require('../../../db')
const { userAuthViaToken } = require('../../auth')

route.post('/', userAuthViaToken, async (req, res) => {
    try {
        if (req.user) {
            const tweets = await follow(req.user.id, req.body.followingId)
            res.send({
                success: true,
                tweets
            })
        } else {
            throw new Error('cannot follow')
        }
    } catch (err) {
        res.send({
            message: "Could not follow"
        })
    }
})

module.exports = route