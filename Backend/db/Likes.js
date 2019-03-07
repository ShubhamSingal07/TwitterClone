const {
    MongoClient,
    url,
    twitterdbname,
    twitter
} = require('./mongo')

const increaseLike = async (userid, likedby, tweetid, noOfLikes) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const likes = twitterdb.collection(twitter)

        const likesArr = likes.updateOne(
            {
                $and: [{
                    userid
                }, {
                    tweets: {
                        tweetid
                    }
                }]
            },
            {
                tweets: {
                    likes: noOfLikes + 1,
                    $push: {
                        likedby
                    }
                }
            }
        ).toArray()
        return likesArr
    } catch (err) {
        throw err
    }
}

const decreaseLike = (userid, dislikedby, tweetid, noOfLikes) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdb)
        const likes = twitterdb.collection(twitter)

        const likesArr = likes.updateOne(
            {
                $and: [{
                    userid
                }, {
                    tweets: {
                        tweetid
                    }
                }]
            },
            {
                tweets: {
                    likes: noOfLikes - 1,
                    $pull: {
                        likedby:dislikedby
                    }
                }
            }
        ).toArray()
        return likesArr
    } catch (err) {
        throw err
    }
}

module.exports = {
    increaseLike,
    decreaseLike
}