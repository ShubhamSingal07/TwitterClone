const { User,Tweet } = require('../db/models')

function fetchUsers(){
    const users=User.findAll()
    return users
}

function fetchTweets(userid){
    const tweets=Tweet.findAll({
        where:{
            userid
        }
    })
    return tweets
}

module.exports={
    fetchUsers,
    fetchTweets
}