const route=require('express').Router()
const {fetchUsers,fetchTweets}=require('../../controllers/fetchUsers')

route.get('/',(req,res)=>{
    res.send({
        users:fetchUsers(),
        tweets:fetchTweets()
    })
})

