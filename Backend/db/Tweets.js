const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const twitterdbname = 'twitterdb'
const twitter = 'twitter'

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
        const tweetsArr = await tweets.updateOne(
            { userid },
            {
                $push: {
                    tweets: {
                        tweet,
                        likes: 0,
                        likedby:[]
                    }
                }
            }
        )

        return tweetsArr
    } catch (err) {
        throw err
    }

}

const manageLikes = async (likes) => {
    try {
        const client = await MongoClient.connect(url)
        const twitterdb=client.db(twitterdbname)
        const tweets=twitterdb.collection(twitter)
        
        tweets.update({})
    } catch (err) {
        throw err
    }
}

module.exports = {
    fetchTweets,
    addTweet
}