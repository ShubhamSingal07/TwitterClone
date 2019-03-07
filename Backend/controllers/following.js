const {
    MongoClient,
    url,
    twitterdbname,
    twitter
} = require('./mongo')

const follow = (userid, followingId) => {
    try {
        const client = MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const following = twitterdb.collection(twitter)

        following.updateOne(
            { userid },
            {
                $push: {
                    following: followingId
                }
            })
    } catch (err) {
        throw err
    }
}

const unfollow = (userid, followingId) => {
    try {
        const client = MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const following = twitterdb.collection(twitter)

        following.updateOne(
            { userid },
            {
                $pull: {
                    following: followingId
                }
            })

    } catch (err) {
        throw err
    }
}

module.exports = {
    follow,
    unfollow
}