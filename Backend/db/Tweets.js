const {
    MongoClient,
    url,
    twitterdbname,
    twitter
} = require('./mongo')
const tweetid=0

const fetchTweets = async (userid) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const tweets = twitterdb.collection(twitter)

        const tweetsArr = await tweets.find(
            { userid },
            { tweets: 1 }
        ).toArray()
        return tweetsArr
    }
    catch (err) {
        throw err
    }
}

const addTweet = async (userid, tweet) => {
    try {
        const client = MongoClient.connect(url)
        const twitterdb = client.db(twitterdbname)
        const tweets = twitterdb.collection(twitter)
        tweetid++
        const tweetsArr = await tweets.updateOne(
            { userid },
            {
                $push: {
                    tweets: {
                        tweetid,
                        tweet,
                        likes: 0,
                        likedby: []
                    }
                }
            }
        ).toArray()

        return tweetsArr
    } catch (err) {
        throw err
    }

}

module.exports = {
    fetchTweets,
    addTweet
}