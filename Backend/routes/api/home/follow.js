const route = require('express').Router()
const { follow } = require('../../../controllers')

route.get('/', async (req, res) => {
    try {
        if (req.user) {
            await follow(req.user.id, req.body.followingId)
            // res.send({
            //     success: true,
            //     message: "Successfully followed"
            // })
            res.redirect('/api/tweets')
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