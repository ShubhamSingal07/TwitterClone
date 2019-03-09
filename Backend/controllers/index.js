const { increaseLike, decreaseLike } = require('./Likes')
const { fetchTweets, addTweet, fetchFollowingTweets } = require('./tweets')
const { fetchUsers, addUser, fetchUser, findUser } = require('./users')
const { follow, unfollow } = require('./following')

module.exports = {
    increaseLike,
    decreaseLike,
    fetchTweets,
    addTweet,
    fetchUsers,
    addUser,
    follow,
    unfollow,
    findUser,
    fetchUser,
    fetchFollowingTweets,
}