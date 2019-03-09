const {
    MongoClient,
    url,
    twitterdbname,
    twitter
} = require('./mongo')

const follow = async (userid, followingId) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const following = twitterdb.collection(twitter)

        const followers = await following.updateOne(
            { userid },
            {
                $push: {
                    following: followingId
                }
            }).toArray()
        return followers
    } catch (err) {
        throw err
    }
}

const findFollowing = async (userid) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const following = twitterdb.collection(twitter)

        const followingArr = await following.findOne({
            userid
        }).toArray()
        return followingArr
    } catch (err) {
        throw err
    }
}

const unfollow = async (userid, followingId) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const following = twitterdb.collection(twitter)

        const followers = await following.updateOne(
            { userid },
            {
                $pull: {
                    following: followingId
                }
            })
        return followers
    } catch (err) {
        throw err
    }
}

module.exports = {
    follow,
    unfollow,
    findFollowing,
}