const {
    MongoClient,
    url,
    twitterdbname,
    twitter
} = require('./mongo')

const increaseLike = async (userid, likedby, tweetid) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const likes = twitterdb.collection(twitter)
        const likesArr = await likes.updateOne(
            {
                $and: [{
                    id: userid
                }, {
                    tweets: {
                        $elemMatch: {
                            tweetid
                        }
                    }
                }]
            },
            {
                $inc: {
                    "tweets.$.likes": 1,
                },
                $push: {
                    "tweets.$.likedby": likedby
                }
            }
        )
        client.close()
        return likesArr
    } catch (err) {
        throw err
    }
}

const decreaseLike = async (userid, dislikedby, tweetid) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const likes = twitterdb.collection(twitter)
        const likesArr = await likes.updateOne(
            {
                $and: [{
                    id: userid
                }
                    , {
                    tweets: {
                        $elemMatch: {
                            tweetid
                        }
                    }
                }]
            },
            {
                $inc: {
                    "tweets.$.likes": -1,
                },
                $pull: {
                    "tweets.$.likedby": dislikedby
                }
            }
        )
        client.close()
        return likesArr
    } catch (err) {
        throw err
    }
}

module.exports = {
    increaseLike,
    decreaseLike
}