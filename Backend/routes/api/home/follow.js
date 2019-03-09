const route = require('express').Router()
const { follow } = require('../../../controllers')

route.get('/', (req, res) => {
    try {
        await follow(req.user.userid, req.body.followingId)
        res.send({
            success: true,
            message: "Successfully followed"
        })
    } catch (err) {
        res.send({
            message: "Could not follow"
        })
    }
})

module.exports = route