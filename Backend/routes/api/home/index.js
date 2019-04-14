const route = require('express').Router()

const { fetchUsers, fetchFollowingTweets, findFollowing } = require('../../../db')
const { userAuthViaToken } = require('../../auth')

route.post('/', userAuthViaToken, async (req, res) => {

    const following = await findFollowing(req.user.id)
    const users = fetchUsers()
    const tweets = fetchFollowingTweets(req.user.id, following)
    const result = [await users, await tweets]
    res.send({
        success:true,
        users: result[0],
        following,
        tweets: result[1]
    })

})

route.get('/', userAuthViaToken, (req, res) => { 
    const user=req.user 
    res.send({
        success: true,
        user:req.user
    })
})

module.exports = route

