const { increaseLike, decreaseLike } = require('./Likes')
const { fetchTweets, addTweet, fetchFollowingTweets } = require('./tweets')
const { fetchUsers, addUser, findUser, fetchUser } = require('./users')
const { follow, unfollow, findFollowing } = require('./following')

module.exports = {
    increaseLike,
    decreaseLike,
    fetchTweets,
    addTweet,
    fetchUsers,
    addUser,
    fetchUser,
    follow,
    unfollow,
    findUser,
    fetchFollowingTweets,
    findFollowing,
}