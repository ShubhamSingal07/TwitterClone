const { increaseLike, decreaseLike } = require('./Likes')
const { fetchTweets, addTweet } = require('./tweets')
const { fetchUsers, addUser } = require('./users')
const { follow, unfollow } = require('./following')

module.exports={
    increaseLike,
    decreaseLike,
    fetchTweets,
    addTweet,
    fetchUsers,
    addUser,
    follow,
    unfollow,
}