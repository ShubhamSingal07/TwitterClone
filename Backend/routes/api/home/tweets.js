const route = require('express').Router()

const { fetchTweets, addTweet } = require('../../../controllers')

route.get('/', async (req, res) => {
    try {
        const tweets = await fetchTweets(req.body.followingId)
        res.send({
            tweets
        })
    } catch (err) {
        throw new Error('New tweets cant be fetched right now')
    }
})

route.post('/', async (req, res) => {
    try {
        if(req.user){
        await addTweet(req.user.id,req.body.tweet)
        }else{
            throw new Error('You are not logged in')
        }
        res.send({
            success:true,
            message:'Tweeted successfully'
        })
    } catch (err) {
        throw new Error('Your tweet was not added. Try again next time')
    }
})

module.exports = route